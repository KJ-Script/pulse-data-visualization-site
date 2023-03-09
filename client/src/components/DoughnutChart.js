import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({data}) {

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
    <div className="mx-[5%] flex space-x-[25%]">
        <div className="w-[30%] hover:w-[40%] hover:duration-500">
        <p className="font-bold">HEALTH</p>
        <Doughnut data={heartChartData} />
        </div>
        <div className="w-[30%] hover:w-[40%] hover:duration-500">
        <p className="font-bold">SpO2</p>
        <Doughnut data={bloodChartData} />
        </div>


    </div>
  )
}

export default DoughnutChart