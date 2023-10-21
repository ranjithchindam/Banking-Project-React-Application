import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
function BalanceForm()
{
  let navigate=useNavigate();
  let [bankUser,setBankUser]=useState(
    {
      name: "",
      password:"",
      accountNumber:""
    }
  )
   return <>
   <div className="HomeFirst-f">
      <h1>Open Balance Form</h1>
    </div>
    <div className="HomeFirst-s">
    <form onSubmit={(m)=>{Fun(m,bankUser,navigate,setBankUser)}}>
    <table border={3}>
         <tbody>
         <tr>
            <td>UserName</td>
            <td>:</td>
            <td><input type="text" required="required" name="userName" value={bankUser.name} onChange={(e)=>{setBankUser({...bankUser,"name":e.target.value})}}></input></td>
          </tr>
          <tr>
            <td>Password</td>       
            <td>:</td>
            <td><input type="password" name="password"  required="required" onChange={(e)=>{setBankUser({...bankUser,"password":e.target.value})}} value={bankUser.password}></input></td>
          </tr>
          <tr>
            <td>AccountNumber</td>
            <td>:</td>
            <td><input type="number" name="accountNumber"  required="required" value={bankUser.accountNumber} onChange={(e)=>{setBankUser({...bankUser,"accountNumber":e.target.value})}}></input></td>
          </tr>
          <tr>
            <td></td>
           <td></td>
          <td><input type="submit" className="submit" value="submit"></input></td>
          </tr>
         </tbody>
       </table>
    </form>
    </div>
   </>
}
function alerts(error,setBankUser,navigate)
   {
     toast(error.response.data.message,{ position: toast.POSITION.TOP_CENTER})
               setBankUser(
                 {
                  name: "",
                  password:"",
                  accountNumber:""
                 }
               )
               navigate("/Balance",{state :{message:error.response.data.message}})
   }
async function Fun(m,bankUser,navigate,setBankUser)
{
  m.preventDefault();
  await axios.get("http://localhost:8080/user?name="+bankUser.name+"&accountNumber="+bankUser.accountNumber+"&password="+bankUser.password).catch(
    (error)=>{
      if (error.response.data.status===302)
      {
        console.log(error.response.data.object);
        navigate('/NewAccount/displayAccountdiv2',{state:{name:bankUser.name,accountNumber:bankUser.accountNumber,password:bankUser.password,branchName:error.response.data.object.branchName}})
      }
      if (error.response.data.status!==302)
            {
              alerts(error,setBankUser,navigate);
            }
    }
  )
}
export default BalanceForm;