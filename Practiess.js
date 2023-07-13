import React, { useEffect, useState } from 'react'

const Practiess = () => {
    const [num,setNum]=useState(0)
    const [nums,setNums]=useState(0)

    useEffect(()=>{
      alert()
    },[num])
  return (
    <>
            <button onClick={()=>{
                setNum(num+1)
            }} className='btn btn-primary'>Click Me {num}</button>
            <button onClick={()=>{
                setNums(nums+1)
            }} className='btn btn-primary'>Click Me {nums}</button>
    </>
  )
}

export default Practiess