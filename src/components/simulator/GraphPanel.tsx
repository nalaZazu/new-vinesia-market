"use client";
import { Button, Flex, Tooltip } from 'antd'
import {  useEffect, useState } from 'react'
import { CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis,Tooltip as ChartToolTip, } from 'recharts'
import { calculateMinMax, formatDate } from '@/utils/simulator/helper'
import { useGraphContext } from '@/context/GraphContextProvider'
import { graphObj, periodType } from '@/utils/simulator/types'
import GraphLegend from './GraphLegend'
import CustomTooltip from './CustomTooltip'
import { InfoCircleOutlined } from '@ant-design/icons'
import { sharpe_ratio_tt, volatility_tt } from '@/utils/simulator/constants'


export default function GraphPanel() {
    const [graphMax, setGraphMax] = useState(0);
    const [graphMin, setGraphMin] = useState(0);
    const [yTicks, setYTicks] = useState<number[]>([60,80,100,120,140,160,180,200,220, 240, 260]);
    // const [period, setPeriod] = useState('5y')
    const {graphPoints, period, setPeriod, volatilityData, sharpeRatio, percentages} = useGraphContext()

    const returnPeriod = (period: periodType) => {
        setPeriod(period)
        // setYTicks()
        if(percentages.stock >= 80){
          setYTicks([60,100,140,180,220,260,300,340, 380])
        }else{
          setYTicks([60,80,100,120,140,160,180,200,220, 240, 260])
        }
    }

    useEffect(() => {
        updateGraphMinMax(graphPoints.baseline, graphPoints.portfolio)
        if(percentages.stock >= 80){
          setYTicks([60,100,140,180,220,260,300,340, 380])
        }else{
          setYTicks([60,80,100,120,140,160,180,200,220, 240, 260])
        }
    }, [graphPoints, percentages.stock])


      const updateGraphMinMax = (baseLine?: graphObj[], indices?: graphObj[]) => {
        const {max, min} = calculateMinMax(baseLine, indices);
    
        if(max !== -Infinity && min !== Infinity){
          setGraphMax(Math.ceil(max))
          setGraphMin((oldValue) => {
            if(oldValue === 0){
              return Math.floor(min);
            } else {
                return Math.min(oldValue, Math.floor(min));
            }
          })
        }
      }

      const getPerformanceValueBaseline = (data: {date: string, graph: number, volatility: number}) => {
        if(graphPoints.baseline){
          const index = graphPoints.baseline.findIndex((obj: any) => {
            return obj.date === data.date
          });
          return graphPoints.baseline[index]?.performance;
        }
      }
      
      const getPerformanceValueIndices = (data: {date: string, graph: number, volatility: number}) => {
        if(graphPoints.portfolio){
            const index = graphPoints?.portfolio.findIndex((obj: any) => {
              return obj.date === data.date
            });
            if(index !== -1){
                return graphPoints.portfolio[index].performance;
            }
          }
          else {
            console.warn(`No matching date found for ${data.date} in indices`);
            return []
          }
      }
      
  return (
    <Flex vertical style={{fontFamily:'Canela', width:"60%"}} gap="small" align='center'>
          <Flex vertical gap="small" align='left'>
            <span style={{fontSize:'clamp(1rem, 2.5vw, 2.5rem)', fontWeight:"600", fontFamily:'Canela'}}>Portfolio comparison:
            <br/>Wine-inclusive vs Classic 60/40</span>
            <h4 style={{fontWeight:"400", marginTop:"-2px"}}>A portfolio performance comparison: with fine wine vs without fine wine</h4>
          </Flex>
          {graphPoints &&
          <div style={{width:"100%", height:"50%"}}> 
          <ResponsiveContainer>
          <LineChart
              data={graphPoints.baseline || []}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="5 5 5"
                /* horizontalCoordinatesGenerator={horizontalCoordinatesGenerator}
                verticalCoordinatesGenerator={verticalCoordinatesGenerator} */
              />
              <XAxis dataKey="date" tickFormatter={(tick) => formatDate(tick, 'axis')} interval={11} />
              {/* <XAxis dataKey="date" ticks={ticks} tickFormatter={formatYear} interval="preserveStartEnd"  label={{ value: 'Dates', angle: 0, position: 'bottom' }}/> */}
              <YAxis type="number" allowDecimals={true} allowDataOverflow={false} domain={[graphMin - 5, graphMax + 5]} ticks={yTicks} tickCount={yTicks.length} interval={0} tickSize={4}>
                <Label value="Performance" position="insideLeft" angle={-90} offset={20} style={{marginRight:"30px"}}></Label>
              </YAxis>
              <ChartToolTip offset={0} content={<CustomTooltip/>}/>
              <Legend content={GraphLegend} iconType='plainline'/>
              
              {graphPoints.portfolio && <Line
                key="portfolioPerformance"
                dataKey={getPerformanceValueIndices}
                name='Your Portfolio'
                // dataKey="performance"
                type="linear"
                stroke="#BF4D20"
                strokeWidth={6}
                activeDot={{ r: 8 }}
                dot={false}
                isAnimationActive={true}
                animationDuration={500}
                animateNewValues={true}
                />}
                <Line
                key="baseLinePerformance"
                type="linear"
                dataKey={getPerformanceValueBaseline}
                name='Baseline'
                stroke="#28475C"
                strokeWidth={3}
                activeDot={{ r: 8 }}
                dot={false}
                isAnimationActive={true}
                animationDuration={500}
                animateNewValues={true}
              />
              {/* <ReferenceLine y={100} stroke="transparent" label={{ value: '100', position: 'left' }} /> */}
            </LineChart>
          </ResponsiveContainer>
          </div>
          }
          <Flex justify='flex-start' align='center' style={{width: "80%", height:"auto"}} vertical>
            <Flex justify='center' style={{marginTop:"0rem", width:"100%", fontFamily:"Canela"}} align='center' >
              <Button style={{backgroundColor: period === '5y' ? '#BD936B' : '#fff', fontFamily: 'Canela',margin:"0 0 0 0"}} onClick={() => returnPeriod('5y')}>5Y</Button>
              <Button style={{backgroundColor: period === '10y' ? '#BD936B' : '#fff',fontFamily: 'Canela', margin:"0 5px 0 5px"}} onClick={() => returnPeriod('10y')}>10Y</Button>
              <Button style={{backgroundColor: period === 'max' ? '#BD936B' : '#fff',fontFamily: 'Canela',margin:"0 5px 0 0"}} onClick={() => returnPeriod('max')}>Max</Button>
            </Flex>
            <Flex justify='space-between' style={{width: "100%", marginTop:"0rem"}}>
              <Flex vertical justify='center' align='left' style={{width:"27.5%", height:"100%", fontFamily:'Canela'}}>
                <span style={{textShadow:"0 0 0 #000, 0 0 1px transparent", letterSpacing:"0.8px", fontSize:"clamp(0.8em, 2.5vw, 1.2em)", whiteSpace:"nowrap"}}>Your Portfolio</span>
                <div style={{border:"0.2px dashed #BF4D20", padding: "0 0 0 0.4em", width:"100%", height:"4em", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                  <div style={{textShadow:"0 0 0 #000, 0 0 1px transparent", letterSpacing:"0.8px", fontSize:"1em"}}>Volatility:&nbsp;
                    <span style={{fontWeight:"600"}}>{volatilityData.portfolio.toFixed(2)}%</span>
                    <Tooltip style={{width:"30%"}} title={volatility_tt} placement='right'> <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: '1em' }} /></Tooltip>
                  </div>
                  <div style={{textShadow:"0 0 0 #000, 0 0 1px transparent", letterSpacing:"0.8px", fontSize:"1em"}}>Sharpe-Ratio:&nbsp;
                    <span style={{fontWeight:"600"}}>{sharpeRatio.portfolio.toFixed(2)}</span>
                    <Tooltip style={{width:"30%"}} placement='right' title={sharpe_ratio_tt}> <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: '1em' }} /></Tooltip>
                  </div>
                </div>
              </Flex>
              <Flex justify='center' align='center' vertical style={{width:"45%", marginTop:"12px", fontFamily: 'Canela'}}>
                <div style={{width:"1%", backgroundColor:"black", height:"40%"}}></div>
                <div style={{width:"98%", fontSize:"1em", textAlign:"center"}}>Additional investment-related metrics</div>
                <div style={{width:"1%", backgroundColor:"black", height:"90%"}}></div>
              </Flex>
              <Flex vertical justify='center' align='left' style={{width:"27.5%", height:"100%", fontFamily: 'Canela'}}>
                <span style={{textShadow:"0 0 0 #000, 0 0 1px transparent", letterSpacing:"0.8px", fontSize:"clamp(1em, 1em, 1em)"}}>Baseline</span>
                <div style={{border:"0.2px dashed #BF4D20", padding: "0 0 0 0.4rem", height:"4rem", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                  <div style={{textShadow:"0 0 0 #000, 0 0 1px transparent", letterSpacing:"0.8px", fontSize:"1em"}}>Volatility:&nbsp;
                    <span style={{fontWeight:"600"}}>{volatilityData.baseline.toFixed(2)}%</span>
                    <Tooltip style={{width:"30%"}} placement='right' title={volatility_tt}> <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: '1em'}} /></Tooltip>
                  </div>
                  <div style={{textShadow:"0 0 0 #000, 0 0 1px transparent", letterSpacing:"0.8px", fontSize:"1em"}}>Sharpe-Ratio:&nbsp;
                    <span style={{fontWeight:"600"}}>{sharpeRatio.baseline.toFixed(2)}</span>
                    <Tooltip style={{width:"10%"}} placement='right' title={sharpe_ratio_tt}> <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: '1em' }} /></Tooltip>
                  </div>
                </div>
              </Flex>
            </Flex>
          </Flex>

     </Flex>
  )
}
