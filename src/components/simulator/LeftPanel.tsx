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
                  <span style={{width:"50%", fontFamily:'Canela', fontSize:"clamp(0.5em, 1vw, 1em)"}}>Wine Index <br/> (Liv-ex 1000)</span>
                  <Input className='w-2/5 lg:w-1/3 text-[0.65rem] lg:text-sm h-6 lg:h-8' placeholder='%' name="wine" suffix="%" onChange={handleInputChange} value={input.wine} style={{backgroundColor: "#F2E5CA", fontFamily: "Canela",borderColor:" #BD936B"}} ></Input>
                </Flex>
        },
        {
          key: '2',
          label:
                <Flex gap={"small"} align='flex-start' justify='flex-start' vertical style={{width:"100%"}}>
                  <Flex align='center' justify='space-between' style={{width:"100%"}}>
                    <span style={{width:"50%", fontFamily:'Canela', fontSize:"clamp(0.5em, 1vw, 1em)"}}>U.S. Stocks <br/>(S&P 500)</span>
                    <Input className='w-2/5 lg:w-1/3 text-[0.65rem] lg:text-sm h-6 lg:h-8' placeholder='%' name="stock" suffix="%" onChange={handleInputChange} value={input.stock} style={{backgroundColor: "#F2E5CA", fontFamily: "Canela",borderColor:" #BD936B" }} ></Input>
                  </Flex>
                </Flex>
    
        },
        {
          key: '3',
          label: 
                <Flex vertical gap={"small"} align='flex-start' justify='space-between' style={{width:"100%"}}>
                  <Flex align='center' justify='space-between' style={{width:"100%"}}>
                    <span style={{width:"50%",fontFamily:'Canela', fontSize:"clamp(0.5em, 1vw, 1em)"}}>U.S. Bonds <br/>(7-10 Year)</span>
                    <Input className='w-2/5 lg:w-1/3 text-[0.65rem] lg:text-sm h-6 lg:h-8' placeholder='%' name="bond" suffix="%" onChange={handleInputChange} value={input.bond} style={{backgroundColor: "#F2E5CA", fontFamily: "Canela",borderColor:" #BD936B"}}></Input>
                  </Flex>
                </Flex>
    
        },
        {
          key: '4',
          label: 
                <Flex align='center' justify='space-between'>
                  <span style={{width:"50%", fontFamily:'Canela', fontSize:"clamp(0.5em, 1vw, 1em)"}}>US Real Estate <br/> (Core US REIT)</span>
                  <Input className='w-2/5 lg:w-1/3 text-[0.65rem] lg:text-sm h-6 lg:h-8' placeholder='%' name="real_estate" suffix="%" onChange={handleInputChange} value={input.real_estate} style={{backgroundColor: "#F2E5CA", fontFamily: "Canela",borderColor:" #BD936B"}} ></Input>
                </Flex>
    
        },
        {
          key: '5',
          label:
                <Flex align='center' justify='space-between'>
                  <span style={{width:"50%", fontFamily:'Canela', whiteSpace:"initial", fontSize:"clamp(0.5em, 1vw, 1em)"}}>Commodities <br/> (Bloomberg Commodity Index)</span>
                  <Input className='w-2/5 lg:w-1/3 text-[0.65rem] lg:text-sm h-6 lg:h-8' placeholder='%' name="commodity" suffix="%" onChange={handleInputChange} value={input.commodity} style={{backgroundColor: "#F2E5CA", fontFamily: "Canela",borderColor:" #BD936B"}} ></Input>
                </Flex>
        },
      ];
    
  return (
    <Flex style={{fontFamily:'Canela', width:"20%", height:"100%"}} gap="1rem" justify='flex-start' flex="auto" vertical>
        <div style={{height:"10vh"}}></div>
        <h3 style={{ width:"100%",fontSize:"clamp(0.5em, 1.2vw, 1.2em)", fontWeight:"bold"}}>Build your own portfolio below and see what the performance would have been over a specific time period</h3>
        <Flex align='baseline' justify='space-between' style={{ height:"5%"}}>
            <h2 className='text-xs md:text-xs lg:text-lg' style={{fontWeight:"normal"}}>Your Portfolio</h2>
            <button type="button" className='w-2/5 lg:w-1/3 h-4 lg:h-8 text-[0.5rem] md:text-[0.5rem] lg:text-sm text-center lg:text-center border rounded' style={{fontFamily: "Canela", borderColor:"#BF4D20", }} /* icon={<UndoOutlined className='text-[0.5rem] ml-0 mr-0 hidden lg:block text-center' rotate={180}/>} */ onClick={() => resetValuesToCurrentBaseline()}><UndoOutlined className='text-[0.5rem] ml-0 mr-0 hidden lg:inline align-middle lg:mx-2' rotate={180}/>Reset</button>
            {/* <button type="button" className='h-6' style={{fontFamily: "Canela",borderColor:"#BF4D20" }} icon={<UndoOutlined className='text-[0.5rem] ml-0 mr-0 hidden lg:block text-center' rotate={180}/>}onClick={() => resetValuesToCurrentBaseline()}>Reset</button> */}
        </Flex>
        <div style={{height:"30%", width:"100%"}}>
          <Space direction='vertical' size="small">
            {items.map((item) => {
              return (
                <React.Fragment key={item.key}>{item.label}
                </React.Fragment>
              )
            })}
          </Space>
        </div>
        { error ? <span style={{color: "#f00", fontWeight:"300"}}>Please adjust the values so that their total equals 100%. <br/>Current total: <span style={{fontWeight: "600"}}>[{sum}]%</span></span>   : null   }
      </Flex>
  )
}
