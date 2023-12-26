"use client";
import { Button, Flex, Input, Space } from 'antd'
import React, { useCallback, useState } from 'react'
import { percentagesInput } from '@/utils/simulator/types';
import { debounce } from 'lodash';
import { baselinePresets } from '@/utils/simulator/constants';
import { useGraphContext } from '@/context/GraphContextProvider';
import { UndoOutlined } from '@ant-design/icons';

export default function LeftPanel() {

    const {percentages, setPercentages, setStockIndexPercentage, setBondIndexPercentage, selectedBaseline} = useGraphContext()

    const [touched, setTouched] = useState<string[]>([])
    const [input, setInput] = useState<percentagesInput>({...percentages})
    const [sum, setSum] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)

    // eslint-disable-next-line
    const handleDelayedChange = useCallback(debounce((newValue: percentagesInput) => {
        setPercentages(newValue)

      }, 300), []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value } = event.target;
      const newValue = Math.max(0, Math.min(100, Number(value)));
      if(!touched.includes(name) && newValue !== 0){
          setTouched([...touched, name])
      }

      setInput((currentInputs) => {
          const newPercentages = {
            ...currentInputs,
            [name]: newValue
          } as percentagesInput

          let sum = Object.values(newPercentages).reduce((acc, cur) => {
            return acc + cur
          }, 0)
          setSum(sum)
          if(sum === 100){
            handleDelayedChange(newPercentages)
            setError(false)
          } else {
            setError(true)
          }
          return newPercentages
      })
      
    }

    
    const resetValuesToCurrentBaseline = () => {
        setTouched([])
        setError(false)
        setInput({
            wine: 0,
            stock: baselinePresets[selectedBaseline as keyof typeof baselinePresets].stock,
            bond: baselinePresets[selectedBaseline as keyof typeof baselinePresets].bond,
            real_estate: 0,
            commodity: 0
        })
        setPercentages({
            wine: 0,
            stock: baselinePresets[selectedBaseline as keyof typeof baselinePresets].stock,
            bond: baselinePresets[selectedBaseline as keyof typeof baselinePresets].bond,
            real_estate: 0,
            commodity: 0
        })
        setStockIndexPercentage({
            stock_sp500: baselinePresets[selectedBaseline as keyof typeof baselinePresets].stock_sp500,
            stock_euro_stoxx: baselinePresets[selectedBaseline as keyof typeof baselinePresets].stock_euro_stoxx,
            stock_nasdaq: baselinePresets[selectedBaseline as keyof typeof baselinePresets].stock_nasdaq
        })
        setBondIndexPercentage({
            bond_ishares: baselinePresets[selectedBaseline as keyof typeof baselinePresets].bond_ishares,
            bond_iboxx: baselinePresets[selectedBaseline as keyof typeof baselinePresets].bond_iboxx
        })
    }


    const items: { key: string; label: React.ReactNode;}[] = [
        {
          key: '1',
          label:
                <Flex align='center' justify='space-between' style={{width:"100%"}}>
                  <span style={{width:"50%", fontFamily:'Canela', fontSize:"clamp(0.5rem, 1vw, 1rem)"}}>Wine Index <br/> (Liv-ex 1000)</span>
                  <Input id="highlight-input" placeholder='%' name="wine" suffix="%" onChange={handleInputChange} value={input.wine} style={{backgroundColor: "#F2E5CA", width:"30%", fontFamily: "Canela",borderColor:" #BD936B"}} ></Input>
                </Flex>
        },
        {
          key: '2',
          label:
                <Flex gap={"small"} align='flex-start' justify='flex-start' vertical style={{width:"100%"}}>
                  <Flex align='center' justify='space-between' style={{width:"100%"}}>
                    <span style={{width:"50%", fontFamily:'Canela', fontSize:"clamp(0.5rem, 1vw, 1rem)"}}>U.S. Stocks <br/>(S&P 500)</span>
                    <Input placeholder='%' name="stock" suffix="%" onChange={handleInputChange} value={input.stock} style={{backgroundColor: "#F2E5CA", width:"30%", fontFamily: "Canela",borderColor:" #BD936B" }} ></Input>
                  </Flex>
                </Flex>
    
        },
        {
          key: '3',
          label: 
                <Flex vertical gap={"small"} align='flex-start' justify='space-between' style={{width:"100%"}}>
                  <Flex align='center' justify='space-between' style={{width:"100%"}}>
                    <span style={{width:"70%",fontFamily:'Canela', fontSize:"clamp(0.5rem, 1vw, 1rem)"}}>U.S. Bonds <br/>(7-10 Year)</span>
                    <Input placeholder='%' name="bond" suffix="%" onChange={handleInputChange} value={input.bond} style={{backgroundColor: "#F2E5CA", width:"30%", fontFamily: "Canela",borderColor:" #BD936B"}}></Input>
                  </Flex>
                </Flex>
    
        },
        {
          key: '4',
          label: 
                <Flex align='center' justify='space-between'>
                  <span style={{width:"50%", fontFamily:'Canela', fontSize:"clamp(0.5rem, 1vw, 1rem)"}}>US Real Estate <br/> (Core US REIT)</span>
                  <Input placeholder='%' name="real_estate" suffix="%" onChange={handleInputChange} value={input.real_estate} style={{backgroundColor: "#F2E5CA", width:"30%", fontFamily: "Canela",borderColor:" #BD936B"}} ></Input>
                </Flex>
    
        },
        {
          key: '5',
          label:
                <Flex align='center' justify='space-between'>
                  <span style={{width:"50%", fontFamily:'Canela', whiteSpace:"initial", fontSize:"clamp(0.5rem, 1vw, 1rem)"}}>Commodities <br/> (Bloomberg Commodity Index)</span>
                  <Input placeholder='%' name="commodity" suffix="%" onChange={handleInputChange} value={input.commodity} style={{backgroundColor: "#F2E5CA", width:"30%", fontFamily: "Canela",borderColor:" #BD936B"}} ></Input>
                </Flex>
        },
      ];
    
  return (
    <Flex style={{fontFamily:'Canela', width:"20vw", height:"100vh"}} gap="1rem" justify='flex-start' flex="auto" vertical>
        <div style={{height:"10vh"}}></div>
        <h3 style={{height:"10vh", fontSize:"clamp(0.5rem, 1.2vw, 1.2rem)", fontWeight:"bold"}}>Build your own portfolio below and see what the performance would have been over a specific time period</h3>
        <Flex align='baseline' justify='flex-start' style={{ height:"5vh"}}>
            <h2 style={{fontWeight:"normal", width:"12.6vw", fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)"}}>Your Portfolio</h2>
            <Button type="text" style={{fontFamily: "Canela",borderColor:"#BF4D20", width:"5.4vw", textAlign:"center"}} icon={<UndoOutlined style={{fontSize:".80vw", margin:"0 -0.1vw 0 -0.2vw"}} rotate={180}/>} onClick={() => resetValuesToCurrentBaseline()}>Reset</Button>
        </Flex>
        <div style={{height:"30vh", width:"18vw", marginBottom:"1vh"}}>
          <Space direction='vertical' size="small">
            {items.map((item) => {
              return (
                <React.Fragment key={item.key}>{item.label}
                </React.Fragment>
              )
            })}
          </Space>
        </div>
        { error ? <span style={{color: "#f00", fontWeight:"300", marginTop:"clamp(1.04rem, 2.3vh, 2.3rem)"}}>Please adjust the values so that their total equals 100%. <br/>Current total: <span style={{fontWeight: "600"}}>[{sum}]%</span></span>   : null   }
      </Flex>
  )
}
