import React from 'react'
import { useState,useEffect } from 'react'

const Practies = () => {
    const [num,setNum]=useState(0)
    const [nums,setNums]=useState(0)

    useEffect(()=>{
        alert("Hello know ho tum")
    },[num])
  return (
    <div>
        <buttton onClick={()=>{
            setNum(num+1)
        }} style={{backgroundColor:"red",width:"100px",padding:"10px",color:"white"}}>Click Me {num}</buttton>
        <br></br><br></br>
         <buttton onClick={()=>{
            setNums(nums+1)
        }} style={{backgroundColor:"red",width:"100px",padding:"10px",color:"white"}}>Click Me {nums}</buttton>
    </div>
  )
}

export default Practies