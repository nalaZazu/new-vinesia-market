"use client";
import { Flex, Radio, RadioChangeEvent, Space } from 'antd'
import { baselines } from '@/utils/simulator/constants';
import { useGraphContext } from '@/context/GraphContextProvider';

export default function RightPanel() {

    const {selectedBaseline, setSelectedBaseline} = useGraphContext()

    const changeDataSource = (event: RadioChangeEvent) => {
        const selectedValue = event.target.value;
        setSelectedBaseline(selectedValue)
    }
  return (
    <Flex style={{fontFamily:'Canela', width:"20%", height:"100%"}} gap="1rem" justify='flex-start' flex="auto" vertical>
        <div style={{height:"10vh"}}></div>
        <h3 style={{fontWeight: "bold",fontSize:"clamp(0.5em, 1.2vw, 1.2em)"}}>Choose the baseline you want to compare the performance of your portfolio against</h3>
        <h2 className='text-xs md:text-xs lg:text-lg' style={{fontWeight:"normal", marginTop: 0 }}>Baseline</h2>
        <div style={{border:"0.2px dashed #BF4D20", padding: "0 0 0 0.4rem"}}>
        <h2 className='text-xs md:text-xs lg:text-lg' style={{fontWeight:"normal", marginTop: 0}}>Classic 60/40 Portfolio</h2>
          <Radio.Group onChange={changeDataSource} value={selectedBaseline} style={{marginTop: "-1.6rem"}}>
            <Radio className='text-xs md:text-xs lg:text-lg' value={baselines[0]} style={{fontFamily:'Canela'}}> 60% - S&P500 <br />40% - 7-10 Year US Bonds</Radio>
          </Radio.Group>
        </div>
        <br></br>
        <div style={{border:"0.2px solid transparent", padding: "0 0 0 0.4rem", marginTop:'-1rem'}}>
        <Radio.Group onChange={changeDataSource} value={selectedBaseline} >
          <Space direction='vertical'>
            {/* <Radio value={baselines[1]} style={{fontSize:"14px", fontFamily:'Canela'}}>S&P500</Radio> */}
            <Radio className='text-xs md:text-xs lg:text-lg' value={baselines[2]} style={{fontFamily:'Canela'}}>EURO STOXX 50</Radio>
            <Radio className='text-xs md:text-xs lg:text-lg' value={baselines[3]} style={{fontFamily:'Canela'}}>7-10 Year US Bonds</Radio>
          </Space>
        </Radio.Group>
        </div>
      </Flex>
  )
}
