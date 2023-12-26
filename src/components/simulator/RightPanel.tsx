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
    <Flex style={{fontFamily:'Canela', width:"20%", height:"100vh"}} gap="1rem" vertical>
        <div style={{height:"10vh"}}></div>
        <h3 style={{height:"10vh", fontWeight: "bold",fontSize:"clamp(0.5rem, 1.2vw, 1.2rem)"}}>Choose the baseline you want to compare the performance of your portfolio against</h3>
        <h2 style={{fontWeight:"normal", marginTop: 0, fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)"}}>Baseline</h2>
        <div style={{border:"0.2px dashed #BF4D20", padding: "0 0 0 0.4rem"}}>
        <h2 style={{fontWeight:"normal", marginTop: 0, fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)"}}>Classic 60/40 Portfolio</h2>
          <Radio.Group onChange={changeDataSource} value={selectedBaseline} style={{marginTop: "-1.6rem"}}>
            <Radio value={baselines[0]} style={{fontSize: "clamp(0.8rem, 1.1vw, 1.1rem)", fontFamily:'Canela'}}> 60% - S&P500 <br />40% - 7-10 Year Bonds US</Radio>
          </Radio.Group>
        </div>
        <br></br>
        <div style={{border:"0.2px solid transparent", padding: "0 0 0 0.4rem", marginTop:'-1rem'}}>
        <Radio.Group onChange={changeDataSource} value={selectedBaseline} >
          <Space direction='vertical'>
            {/* <Radio value={baselines[1]} style={{fontSize:"14px", fontFamily:'Canela'}}>S&P500</Radio> */}
            <Radio value={baselines[2]} style={{fontSize: "clamp(0.8rem, 1.1vw, 1.1rem)", fontFamily:'Canela'}}>EURO STOXX 50</Radio>
            <Radio value={baselines[3]} style={{fontSize: "clamp(0.8rem, 1.1vw, 1.1rem)", fontFamily:'Canela'}}>7-10 Year US Bonds</Radio>
          </Space>
        </Radio.Group>
        </div>
      </Flex>
  )
}
