import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
function LineChart({data}) {
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

    const bloodChartData = {
        labels: data.map((data) => data.reg_date), 
        datasets: [
            {
                label: "SpO2",
                data: data.map((data) => data.oxygen),
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

  return (
    <div className="w-[48%] mt-[50px] flex justify-between">
        <Line data={heartChartData} />
        <Line data={bloodChartData} />


    </div>
  )
}

export default LineChart