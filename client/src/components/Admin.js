import React, { useEffect, useState } from 'react'
import RecentTable from './RecentTable'
import axios from 'axios';

function Admin() {
    const [healthData, setHealthData] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:3000/get_data")
        .then((response) => {
          console.log("Response: ", response.data);
          console.log("bringing")
          setHealthData(response.data); 
        //   console.log("HealthData: " , healthData)
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

  return (
    <div className="bg-neutral-100 rounded-md h-[70vh] w-[60%] shadow-lg shadow-blue-500 overflow-hidden overflow-y-scroll scrollbar-hide md:scrollbar-default">
        {
            healthData.map((data, index) => {
                return (
                    <RecentTable key={index} data={data}/>
                )
            })
        }

    </div>
  )
}

export default Admin