import React, { useEffect, useRef, useState } from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';


function RenderChart({data}) {
    const [isLoaded, setIsLoaded] = useState(true)
    const [trigger, setTrigger] = useState(false)
    
    const heartChartData =  {
        labels: data.map((data) => data.reg_date), 
        datasets: [
            {
                label: "heart-rate",
                data: data.map((data) => data.heart),
                backgroundColor: [
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",   
                    "#2a71d0",       
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    }
    const [chartData, setChartData] = useState(heartChartData) 
    
      console.log("chartData", chartData)
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setChartData(heartChartData)
    //             if (chartData != 0) {
    //                 setIsLoaded(true)
    //             }
    //         } catch (err) {
    //             setIsLoaded(false)
    //             console.log("error", err);
    //         }
    //     }
    //     fetchData()
    //   }, []);

       
  return isLoaded ? (
    <div className="w-[50%] mx-auto my-3">
    <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Measurement graph"
            }
          }
        }}
      /> 


    </div>

  ) : (
    <div>loading</div>  
  )
}

export default RenderChart