'use client';
import React from 'react'
import { useGraphContext } from '@/context/GraphContextProvider'
import { formatDate } from '@/utils/simulator/helper'

export default function CustomTooltip({ active, payload, label }: any) {
    const {graphPoints} = useGraphContext()
    if(graphPoints.portfolio){
        // Baseline + Portfolio tooltip
        if(graphPoints.portfolio.length > 0){
          if(active && payload && payload.length){
            const baselineData = payload[1]
            const portfolioData = payload[0]
            return (
              <div className='custom-tooltip'>
                <div style={{backgroundColor: 'white', border: '1px solid black', padding: '3px', borderRadius: '2%'}}>
                  <strong><u>
                    Performance
                    </u>
                    </strong>
                  <p className='label'>{`Date: ${formatDate(baselineData?.payload.date, 'tooltip', false)}`}</p>
                  <p style={{color: portfolioData?.stroke, fontWeight:"600"}}>{`Your Portfolio: ${((portfolioData?.value)- 100).toFixed(2)}%`}</p>
                  <p style={{color: baselineData?.stroke, fontWeight:"600"}}>{`Classic Portfolio: ${((baselineData?.value) - 100).toFixed(2)}%`}</p>
                </div>
              </div>
            )
          }
        }
      } else {
        if(active && payload && payload.length){
          const baselineData = payload[0]
          return (
            <div className='custom-tooltip'>
              <div style={{backgroundColor: 'white', border: '1px solid black', padding: '3px', borderRadius: '2%'}}>
                <strong><u>
                  Performance
                  </u>
                  </strong>
                <p className='label'>{`Date: ${formatDate(baselineData?.payload.date, 'tooltip', false)}`}</p>
                <p style={{color: baselineData?.stroke, fontWeight:"600"}}>{`Classic Portfolio: ${((baselineData?.value) - 100).toFixed(2)}%`}</p>
              </div>
            </div>
          )
        }
      }
  
      return null
}
