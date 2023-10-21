import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
function CloseAccount()
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
      <h1>Closing Account Form</h1>
    </div>
    <div className="HomeFirst-s">
    <form onSubmit={(m)=>{Fun(m,bankUser,navigate,setBankUser)}}>
    <table border={3}>
         <tbody>
         <tr>
            <td>UserName</td>
            <td>:</td>
            <td><input type="text" required="required" name="userName" value={bankUser.name} onChange={(e)=>{setBankUser({...bankUser,name:e.target.value})}}></input></td>
          </tr>
          <tr>
            <td>Password</td>       
            <td>:</td>
            <td><input type="password" name="password"  required="required" onChange={(e)=>{setBankUser({...bankUser,password:e.target.value})}} value={bankUser.password}></input></td>
          </tr>
          <tr>
            <td>AccountNumber</td>
            <td>:</td>
            <td><input type="number" name="accountNumber"  required="required" value={bankUser.accountNumber} onChange={(e)=>{setBankUser({...bankUser,accountNumber:e.target.value})}}></input></td>
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
               navigate("/CloseAccount",{state :{message:error.response.data.message}})
   }
async function Fun(m,bankUser,navigate,setBankUser)
{
  m.preventDefault();
  let number=Number(bankUser.accountNumber)
  console.log(number);
  await axios.delete("http://localhost:8080/user?accountNumber="+number+"&name="+bankUser.name+"&password="+bankUser.password).then(
        (response)=>
        {
          toast("Deleted succesfully",{ position: toast.POSITION.TOP_CENTER})
          navigate('/CloseAccount/CloseAccountDisplay',{state:{name:bankUser.name,accountNumber:bankUser.accountNumber}})
        }
  ).catch(
    (error)=>{
        if (error.response.data.status!==302)
        {
          alerts(error,setBankUser,navigate);
        }
    }
  )
}
export default CloseAccount;