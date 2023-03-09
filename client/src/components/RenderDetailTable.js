import React from 'react'

function RenderDetailTable({data}) {

    let bloodStatus;
    if(data.oxygen < 80) {
        bloodStatus = "Dangerously low"
    } else if (data.oxygen >= 80 && data.oxygen <=100) {
        bloodStatus = "Average"
    } else if(data.oxygen > 100) {
        bloodStatus = "Dangerously High"
    }
  return (
    <tr>

        <td className="border border-green-900 pl-36">{data.oxygen}</td>
        <td className="border border-green-900 pl-12">{data.heart}</td>
        <td className="border border-green-900 pl-3">{data.reg_date}</td>
        <td className={bloodStatus === 'Dangerously low'|| bloodStatus === 'Dangerously High' ? `text-white p-2 bg-red-500 border border-green-900`: `p-2 bg-green-600 text-white border border-green-900`}>{bloodStatus}</td>
    
    </tr>
  )
}

export default RenderDetailTable