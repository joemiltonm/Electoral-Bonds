import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react';
import { baseOption } from '../utils/baseOption';

export default function Rightpane() {

    const [options, setOptions] = useState({});

    useEffect(() => {

        fetch("http://localhost:3001/staticData/total", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json()).then(data => {
            console.log(data)
            setOptions({
                ...baseOption, series: [{
                    ...baseOption.series[0], data: data.slice(0,5)
                }]
            })
        })},[])

    return (
        <>  
            <div style={{ marginTop: 8, marginLeft: 10 }}>
                {options && <ReactECharts option={options} />}
            </div>
        
        </>
    )

}
