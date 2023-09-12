"use client"
import React from 'react'
import { useEffect, useState } from 'react'

export default function Search() {
    const [data , setData] = useState(null)

useEffect(() => {
    fetch("http://localhost:3000/api/search",{
        method: "GET"
        })
        .then((response) => response.json())
        .then((datas) => {
            setData(datas)
            console.log(datas)
        })
        .catch((error) => {
            console.log(error)
        })
}, [])



  return (
    <>
    {
        data && data.map((item) => {
            return (
                <div>
                    <p>{item.name}</p>
                </div>
            )
        })

    }
    
    
  </>   
  )
}
