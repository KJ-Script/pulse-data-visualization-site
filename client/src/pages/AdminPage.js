import React, { useEffect, useState } from 'react'
import Admin from '../components/Admin'

function AdminPage() {

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-600 to-blue-600 scrollbar">
    <div className=" w-full h-[100vh] mx-[20%] py-[5%]">
      <Admin />


    </div>
  </div>
  )
}

export default AdminPage