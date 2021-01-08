import React, {useEffect, useState} from 'react';

import {Line} from "react-chartjs-2";



const  LineGraph =(props) => {


    const [chartData,setChartData] = useState({})
    const chart =  ()=>{
        setChartData({
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [{
                label: props.label,

                borderColor: props.color,
                borderWidth: 2,
                hoverBackgroundColor: "#3e95cd",
                hoverBorderColor: "#3e95cd",
                data: props.data,
                fill: false
            }]
        })

    }
    useEffect(()=>{
        chart()

    },[])
    return (
        <>
            <div style={{position: "relative",

                height: "50vh",
                width:"100%"}}>

                    <Line data={chartData}
                          options={{
                              maintainAspectRatio: false,
                              scales: {
                                  yAxes: [{
                                      stacked: true,
                                      gridLines: {
                                          display: true,
                                          color: "rgba(255,99,132,0.2)"
                                      },
                                      scaleLabel: {
                                          display: true,
                                          labelString: props.unit
                                      },
                                      ticks:{
                                          min:  Math.min( ...props.data )-10,
                                          max: Math.max( ...props.data )+20,
                                          stepSize: 10
                                      },
                                      legend:{
                                          align:"center"
                                      }

                                  }],
                                  xAxes: [{
                                      gridLines: {
                                          display: false
                                      }
                                  }]
                              },

                          }}/>



            </div>
        </>
    );
}

export default LineGraph;
