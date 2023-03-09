import React from 'react'
import { useNavigate } from 'react-router-dom'

function RecentTable({data}) {
    const navigate = useNavigate()
    // console.log('Table-Health-Data: ', data)
    const number = data.phone
  return (
    <div>
    <div className="bg-neutral-400 h-[17vh] w-[80%] text-black my-2 mx-12 rounded-md"> 
    <div className="py-[1%] ">
    <div className="mx-8 flex"><p className="mx-1">Name:</p><p>{data.name}</p></div>
    <div className="mx-8 flex"><p className="mx-1">Heart Rate:</p><p>{data.heart}</p></div>
    <div className="mx-8 flex"><p className="mx-1">Blood Level:</p><p>{data.oxygen}</p></div>
    <div className="mx-8 mb-2 flex"><p className="mx-1">Time-Taken:</p><p>{data.reg_date}</p></div>
    <button className="mx-9 py-2 px-6 bg-blue-500 text-neutral-200 rounded-md" onClick={() => {
        navigate('/details', {state: {id:1 , data: number}}) 
    }}>Details</button>
    </div>
    </div>
    </div>
  )
}

export default RecentTable