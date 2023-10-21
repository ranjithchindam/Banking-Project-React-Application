import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
function WithDrawDiv2()
{
    let navigate=useNavigate();
    let [bankUser,setBankUser]=useState(
        {
          accountNumber:"",
          userName:"",
          password:"",
          amount:"",
          clear:"Clear"
        }
    );
    return <>
     <form onSubmit={(e)=>{save(e,bankUser,navigate,setBankUser)}}>
       <div className="HomeFirst-f">
    <h1>WITHDRAW FORM</h1>
  </div>  
  <div className="HomeFirst-s">
    <table border={3}>
         <tr>
            <td>ACCOUNT NUMBER</td>
            <td>:</td>
            <td><input type="text" required="required" value={bankUser.accountNumber} onChange={(e)=>{setBankUser({...bankUser,"accountNumber":e.target.value})}}></input></td>
         </tr>
         <tr>
           <td>USER NAME</td>
           <td>:</td>
            <td><input type="text"  required="required"  value={bankUser.userName} onChange={(e)=>{setBankUser({...bankUser,"userName":e.target.value})}}></input></td>
         </tr>
         <tr>
           <td>PASSWORD</td>
           <td>:</td>
            <td><input  required="required"  value={bankUser.password} type="text" onChange={(e)=>{setBankUser({...bankUser,"password":e.target.value})}}></input></td>
        </tr>
        <tr>
           <td>AMOUNT</td>
           <td>:</td>
            <td><input type="number"  required="required"  value={bankUser.amount} onChange={(e)=>{setBankUser({...bankUser,"amount":e.target.value})}}></input></td>
        </tr>
        <tr>
           <td></td>
           <td></td>
            <td></td>
        </tr>
        <tr>
           <td><input className="submit" type="submit"></input></td>
           <td></td>
            <td><input className="submit" type="button" placeholder="clear"  value={bankUser.clear} onClick={
                ()=>setBankUser(
                    {
                        accountNumber:"",
                        userName:"",
                        password:"",
                        amount:"",
                        clear:"Clear"
                    }
                )
            }></input></td>
        </tr>
       </table>
  </div>
  </form>
    </>
    async function save(e,bankUser,navigate,setBankUser)
    {
        e.preventDefault();
        await axios.get("http://localhost:8080/user?name="+bankUser.userName+"&accountNumber="+bankUser.accountNumber+"&password="+bankUser.password).catch((error)=>{
            if(error.response.data.status===302)
            {
            let data=error.response.data.object;
            if (Number(error.response.data.object.balance)>=1)
            {
               axios.put('http://localhost:8080/user?name='+bankUser.userName+'&accountNumber='+bankUser.accountNumber+'&password='+bankUser.password,{...data,"balance":Number(data.balance)-Number(bankUser.amount)}).then((e)=>
               {
               let userData=e.data.object;
               console.log(userData);
                navigate("/Deposite/Diplay",{state:{reducebalance:(bankUser.amount),updatedBalance:userData.balance,name:userData.name,accountNumber:userData.accountNumber,message:"Reduced From"}})

               })
            }
            else{
                toast("You Don't have Balance to Withdraw the The Amount",{ position: toast.POSITION.TOP_CENTER})
                setBankUser({
                    accountNumber:"",
                        userName:"",
                        password:"",
                        amount:"",
                })
            }
            }
            if (error.response.data.status!==302)
            {
                toast("Please Enter Valid Account Details",{ position: toast.POSITION.TOP_CENTER})
                setBankUser({
                    accountNumber:"",
                        userName:"",
                        password:"",
                        amount:"",
                })
            }
        } )
    }
}
export default WithDrawDiv2;