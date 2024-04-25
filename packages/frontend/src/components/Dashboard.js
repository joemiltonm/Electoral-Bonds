
import React from 'react'
import { useState, useEffect } from 'react';
import { baseOption } from '../utils/baseOption';
import ReactECharts from 'echarts-for-react';

function Dashboard() {
    const [options, setOptions] = useState(baseOption);

    useEffect(() => {

        fetch("http://localhost:3001/staticData/total", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json()).then(data => {
            const top = data.slice(0, 9)
            const last = data.slice(10,)
            const value = last.reduce((a, b) => a + b.value, 0)
            top.push({name:"OTHERS", value, itemStyle: { color: '#868e96' } })
            setOptions({
                ...baseOption, series: [{
                    ...baseOption.series[0], data: top
                }]
            })
        })},[])

    return (
        <>  
            <div style={{ marginTop: 8, marginLeft: 10, width: 750 }}>
                 <ReactECharts option={options} />
            </div>
        
        </>
    )
}

export default Dashboard