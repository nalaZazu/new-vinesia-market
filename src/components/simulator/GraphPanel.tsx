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


export default function GraphPanel({isMobile}: {isMobile: boolean}) {
    const [graphMax, setGraphMax] = useState(0);
    const [graphMin, setGraphMin] = useState(0);
    const [yTicks, setYTicks] = useState<number[]>([60,80,100,120,140,160,180,200,220, 240, 260]);
    // const [period, setPeriod] = useState('5y')
    const {graphPoints, period, setPeriod, volatilityData, sharpeRatio, percentages} = useGraphContext()
    console.log('graph is in mobile mode', isMobile)
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
            <span className='text-sm md:text-sm lg:text-4xl' style={{fontWeight:"600", fontFamily:'Canela'}}>Portfolio comparison: &nbsp;
            <br className='hidden lg:block'/>Wine-inclusive vs Classic 60/40</span>
            <h4 className='text-xs lg:text-base -mt-2 mb-2 lg:-m-[2px]' style={{fontWeight:"400"}}>A portfolio performance comparison: with fine wine vs without fine wine</h4>
          </Flex>
          {graphPoints &&
          <div style={{width:"100%", height:"60%"}}> 
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
              <XAxis dataKey="date" tickFormatter={(tick) => formatDate(tick, 'axis', isMobile)} interval={11} />
              {/* <XAxis dataKey="date" ticks={ticks} tickFormatter={formatYear} interval="preserveStartEnd"  label={{ value: 'Dates', angle: 0, position: 'bottom' }}/> */}
              <YAxis type="number" allowDecimals={true} allowDataOverflow={false} domain={[graphMin - 5, graphMax + 5]} ticks={yTicks} tickCount={yTicks.length} interval={0} tickSize={4}>
                <Label value="Performance" position="insideLeft" angle={-90} offset={20} style={{marginRight:"30px"}}></Label>
              </YAxis>
              <ChartToolTip offset={0} content={<CustomTooltip/>}/>
              <Legend content={GraphLegend} />
              
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
          {/* Period Buttons */}
          <Flex justify='flex-start' align='center' className="w-4/5 h-auto" vertical>
            <Flex justify='center' style={{marginTop:"0rem", width:"100%", fontFamily:"Canela"}} align='center' >
              <Button className={`text-xs md:text:xs lg:text:sm p-1 md:p-1 lg:p-4 bg-${period === '5y' ? 'orange-700' : 'white'} font-Canela m-0`} onClick={() => returnPeriod('5y')}>5Y</Button>
              <Button className={`text-xs md:text:xs lg:text:sm p-1 md:p-1 lg:p-4 bg-${period === '10y' ? 'orange-700' : 'white'} font-Canela mx-1`} onClick={() => returnPeriod('10y')}>10Y</Button>
              <Button className={`text-xs md:text:xs lg:text:sm p-1 md:p-1 lg:p-4 bg-${period === 'max' ? 'orange-700' : 'white'} font-Canela ml-1`} onClick={() => returnPeriod('max')}>Max</Button>
          </Flex>
            {/* Left Data */}
            <Flex justify='space-between' style={{width: "100%", marginTop:"0rem"}}>
              <Flex vertical justify='center' align='left' style={{width:"27.5%", height:"100%", fontFamily:'Canela'}}>
                <span className='text-xs md:text-xs lg:text-lg' style={{textShadow:"0 0 0 #000, 0 0 1px transparent", letterSpacing:"0.8px", whiteSpace:"nowrap"}}>Your Portfolio</span>
                <div className="h-8 lg:h-16" style={{border:"0.2px dashed #BF4D20", padding: "0 0 0 0.4em", width:"100%", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                  <div className='text-[0.5rem] md:text-[0.5rem] lg:text-sm' style={{textShadow:"0 0 0 #000, 0 0 1px transparent", letterSpacing:"0.8px"}}>Volatility:&nbsp;
                    <span style={{fontWeight:"600"}}>{volatilityData.portfolio.toFixed(2)}%</span>
                    <Tooltip className="hidden lg:inline" title={volatility_tt} placement='right'> <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: '1em' }} /></Tooltip>
                  </div>
                  <div className='text-[0.5rem] md:text-[0.5rem] lg:text-sm' style={{textShadow:"0 0 0 #000, 0 0 1px transparent", letterSpacing:"0.8px"}}>Sharpe-Ratio:&nbsp;
                    <span style={{fontWeight:"600"}}>{sharpeRatio.portfolio.toFixed(2)}</span>
                    <Tooltip className="hidden lg:inline" placement='right' title={sharpe_ratio_tt}> <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: '1em' }} /></Tooltip>
                  </div>
                </div>
              </Flex>
              {/* Center Line */}
              <Flex justify='center' align='center' vertical style={{width:"45%", marginTop:"12px", fontFamily: 'Canela'}}>
                <div style={{width:"1%", backgroundColor:"black", height:"40%"}}></div>
                <div className='text-[0.5rem] md:text-[0.5rem] lg:text-sm' style={{width:"98%", textAlign:"center"}}>Additional investment-related metrics</div>
                <div style={{width:"1%", backgroundColor:"black", height:"90%"}}></div>
              </Flex>
              {/* Right Data */}
              <Flex vertical justify='center' align='left' style={{width:"27.5%", height:"100%", fontFamily: 'Canela'}}>
                <span className='text-xs md:text-xs lg:text-lg' style={{textShadow:"0 0 0 #000, 0 0 1px transparent", letterSpacing:"0.8px"}}>Baseline</span>
                <div className="h-8 lg:h-16" style={{border:"0.2px dashed #BF4D20", padding: "0 0 0 0.4rem", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                  <div className='text-[0.5rem] md:text-[0.5rem] lg:text-sm' style={{textShadow:"0 0 0 #000, 0 0 1px transparent", letterSpacing:"0.8px"}}>Volatility:&nbsp;
                    <span style={{fontWeight:"600"}}>{volatilityData.baseline.toFixed(2)}%</span>
                    <Tooltip className="hidden lg:inline" placement='right' title={volatility_tt}> <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: '1em'}} /></Tooltip>
                  </div>
                  <div className='text-[0.5rem] md:text-[0.5rem] lg:text-sm' style={{textShadow:"0 0 0 #000, 0 0 1px transparent", letterSpacing:"0.8px"}}>Sharpe-Ratio:&nbsp;
                    <span style={{fontWeight:"600"}}>{sharpeRatio.baseline.toFixed(2)}</span>
                    <Tooltip className="hidden lg:inline" placement='right' title={sharpe_ratio_tt}> <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)', fontSize: '1em' }} /></Tooltip>
                  </div>
                </div>
              </Flex>
            </Flex>
          </Flex>

     </Flex>
  )
}
