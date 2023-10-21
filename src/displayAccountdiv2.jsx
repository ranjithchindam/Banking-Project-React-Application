import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
function DisplayAccountdiv2()
{
  let {state}=useLocation();
  let {accountNumber,name,password}=state
  let [data,setData]=useState("")
  fetchingData(state);
  async function fetchingData()
  {
    await axios.get("http://localhost:8080/user?accountNumber="+accountNumber+"&name="+name+"&password="+password).catch((error)=>{if(error.response.data.status===302){setData(error.response.data.object)}})
  }
  return <>
    <div className="HomeFirst-f">
    <h1>User</h1>
  </div>  
  <div className="HomeFirst-s">
  <table border={3}>
         <tr>
            <th>UserName</th>
            <th>User Account Number</th>
            <th>User Phone Number</th>
            <th>Balance</th>
         </tr>
         <tr>
            <td>{data.name}</td>
            <td>{data.accountNumber}</td>
            <td>{data.phoneNumber}</td>
            <td>{data.balance}</td>
         </tr>
       </table>
  </div>
  </>
}
export default DisplayAccountdiv2;