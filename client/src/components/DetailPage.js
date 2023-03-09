import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import RenderDetailTable from './RenderDetailTable'
import RenderChart from './RenderChart'
import DoughnutChart from './DoughnutChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import BarChart from './BarChart'

function DetailPage() {

    const [detail, setDetail] = useState([])
    const [tab, setTab] = useState('table')
    console.log(tab)


    const location = useLocation()
    const number = location.state.data
    console.log("Phone: ", number)

    useEffect(() => {
        axios
          .post("http://localhost:3000/single_person_data", {
            number,
          })
          .then((response) => {
            console.log("Response: ", response.data);
            setDetail(response.data)
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-600 to-blue-600 overflow-hidden overflow-y-scroll">
     <div className="w-full h-[100vh] mx-[5%] py-[5%]">
    <div className="bg-neutral-100 rounded-md max-h-[80vh] w-[90%] shadow-lg shadow-blue-500 overflow-hidden overflow-y-scroll scrollbar-hidden">
    <div className="w-full flex justify-end">

        <div>
<select name="cars" id="cars" className='p-3 my-6 bg-blue-300 text-white font-semibold'>
  <option value="table" onClick={(e) => {
    setTab(e.target.value)
  }}>Table</option>
  <option value="bar" onClick={(e) => {
    setTab(e.target.value)
  }}>Bar</option>
  <option value="line" onClick={(e) => {
    setTab(e.target.value)
  }}>Line</option>
  <option value="pie" onClick={(e) => {
    setTab(e.target.value)
  }}>Pie</option>
  <option value="doughnut" onClick={(e) => {
    setTab(e.target.value)
  }}>Doughnut</option>
</select>
        </div>
        
      <div className="w-[25%] bg-neutral-800 my-3 mx-6 px-6 py-4 text-white text-[15px]">
      <div className="flex justify-end mx-6 mt-3"><p>Full Name - </p>{detail[0]?.name}</div>
      <div className="flex justify-end mx-6"><p>Address - </p>{"Addis Ababa"}</div>
      <div className="flex justify-end mx-6"><p>Phone - </p>{detail[0]?.phone}</div>
      <div className="flex justify-end mx-6"><p>History - </p>{detail[0]?.history}</div>
      <div className="flex justify-end mx-6"><p>Age - </p>{detail[0]?.age}</div>
        
    </div>
      </div>
  
  {
    tab === 'table' ? (

        <table className="w-[96%] border border-green-900 mx-[2%] my-[4%]">

      <tr className="border border-green-900">
        <th className="border border-green-900">Blood Level</th>
        <th className="border border-green-900">Heart Beat</th>
        <th className="border border-green-900">Time</th>
        <th className="border border-green-900">Status</th>
      </tr>

      {detail?.map((item, index) => {
          return <RenderDetailTable key={index} data={item} />;
        })}

    </table> 
        ) : (
            <div></div>
            )
        }
    {
        tab === 'doughnut' ? 
        (
            <DoughnutChart data={detail}/> 
            
            ): (
                <div></div>
                )
            }

{
    tab === 'line' ? 
    (
             <LineChart data={detail} />
            
        ): (
            <div></div>
        )
    }

{
        tab === 'pie' ? 
        (
            <PieChart data={detail}/>
            
        ): (
            <div></div>
        )
    }

{
        tab === 'bar' ? 
        (     
            <BarChart data={detail} />
        ): (
            <div></div>
        )
    }



    <div className="flex justify-between mx-2 my-2"></div>
    <div></div>
  </div>
        </div>   
    </div>
  )
}

export default DetailPage