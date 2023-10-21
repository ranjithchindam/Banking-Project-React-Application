import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function TransferAccount()
{
    let navigate=useNavigate();
    let [bankUser,setBankUser]=useState(
        {
          accountNumber:"",
          userName:"",
          password:"",
          amount:"",
          destinationAccountNumber:"",
          destinationUserName:"",
          destinationPassword:"",
          clear:"Clear"
        }
    );
    return <>
     <form onSubmit={(e)=>{save(e,bankUser,navigate,setBankUser)}}>
       <div className="HomeFirst-f">
    <h2>TRANSFER ACCOUNT FORM</h2>
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
            <td>DESTINATION ACCOUNT NUMBER</td>
            <td>:</td>
            <td><input type="text" required="required" value={bankUser.destinationAccountNumber} onChange={(e)=>{setBankUser({...bankUser,"destinationAccountNumber":e.target.value})}}></input></td>
         </tr>
         <tr>
           <td>DESTINATION USER NAME</td>
           <td>:</td>
            <td><input type="text"  required="required"  value={bankUser.destinationUserName} onChange={(e)=>{setBankUser({...bankUser,"destinationUserName":e.target.value})}}></input></td>
         </tr>
         <tr>
           <td>DESTINATION PASSWORD</td>
           <td>:</td>
            <td><input  required="required"  value={bankUser.destinationPassword} type="text" onChange={(e)=>{setBankUser({...bankUser,"destinationPassword":e.target.value})}}></input></td>
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
                        destinationAccountNumber:"",
                        destinationUserName:"",
                        destinationPassword:"",
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
        await axios.get("http://localhost:8080/user?name="+bankUser.userName+"&accountNumber="+Number(bankUser.accountNumber)+"&password="+bankUser.password).catch((error)=>{
            console.log(error.response.data.status);
            if(error.response.data.status===302)
            {
            let data=error.response.data.object;
            if (Number(error.response.data.object.balance)>=1)
            {
                console.log("ranjith");
                axios.get("http://localhost:8080/user?name="+bankUser.destinationUserName+"&accountNumber="+bankUser.destinationAccountNumber+"&password="+bankUser.destinationPassword).catch((error)=>{
                if(error.response.data.status===302)
                {
                    let destData=error.response.data.object;
                    axios.put('http://localhost:8080/user?name='+bankUser.destinationUserName+'&accountNumber='+Number(bankUser.destinationAccountNumber)+'&password='+bankUser.destinationPassword,{...destData,"balance":Number(destData.balance)+Number(bankUser.amount)}).then((e)=>
                     {
                        axios.put("http://localhost:8080/user?name="+bankUser.userName+"&accountNumber="+Number(bankUser.accountNumber)+"&password="+bankUser.password,{...data,balance:Number(data.balance)-Number(bankUser.amount)}).then((e)=>{
                            toast("Transaction Succesful",{ position: toast.POSITION.TOP_CENTER})
                            navigate("/Transfer/display",{state:{accountNumber:destData.accountNumber,name:destData.userName,amount:bankUser.amount,currentBalance:Number(data.balance)+Number(bankUser.amount)}})
                        })
                     })
                }
                if (error.response.data.status!==302)
                {
                toast("Destination Account Is Not Present Based On User Detais",{ position: toast.POSITION.TOP_CENTER})
                setBankUser({
                    accountNumber:"",
                        userName:"",
                        password:"",
                        destinationAccountNumber:"",
                        destinationUserName:"",
                        destinationPassword:"",
                        amount:"",
                })
                }
            }
            )
            }
            else{
                toast("You Don't have Minimum Amout to Transfer the Amount",{ position: toast.POSITION.TOP_CENTER})
                setBankUser({
                    accountNumber:"",
                        userName:"",
                        password:"",
                        destinationAccountNumber:"",
                        destinationUserName:"",
                        destinationPassword:"",
                        amount:"",
                }) 
            }
            }
            if (error.response.data.status!==302)
            {
                toast("Your Account Is Not Present Based On User Detais",{ position: toast.POSITION.TOP_CENTER})
                setBankUser({
                    accountNumber:"",
                        userName:"",
                        password:"",
                        destinationAccountNumber:"",
                        destinationUserName:"",
                        destinationPassword:"",
                        amount:"",
                })
            }
        } )
    }
}
export default TransferAccount;