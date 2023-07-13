import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './StateData.css'


const StateData = () => {

  const [columns,setColumns]=useState([]);
  // const [record,setRecord]=useState([])
  
  const fetchStat=async ()=>{
    try{
        const res=await fetch(" http://localhost:3003/users");
        const data =await res.json()

        if(data.length>0){
            setColumns(data)
        }
        console.log(data)
    } catch (e){
        console.error(e)
    }
}

useEffect(()=>{
    fetchStat();
},[])

  const deleteList=(a)=>{
    alert("Do You Want To Delete Its List")
       const newlist=columns.filter((e,index)=>{
        return index!==a;
       }) 
       setColumns(newlist)
  }
  const EditList=()=>{

  }

  return (
    <>
      <div className="main">
        <div className="inside">
          <h3>
            <span>INDIA</span> COVID-19 Dashboard
          </h3>
        
        <br></br>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th className="theading">STATE</th>
                <th className="heading">CONFIRMED</th>
                <th className="heading">RECOMERED</th>
                <th className="heading">DEATHS</th>
                <th className="heading">ACTIVE</th>
                <th className="heading">UPDATE</th>
                <th className="heading"></th>


               
              </tr>
            </thead>
            <tbody>
              {
                columns.map((val,index)=>{
                  return(
                  <tr className="trow"key={index}>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.kumar}</td>
                  <td>{val.hello}</td>
                  <td>Hello Who are you</td>
                  <td>Hello Who are you</td>
                  <td>
                      <button className="btn btn-primary"onClick={()=>deleteList(index)}>Delete</button>
                      <Link className="btn btn-danger"onClick={EditList} to="editstate">Edit</Link>
                  </td>
                 
                  
                  
              </tr>
                  )
                })
                
              }
                
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default StateData;
