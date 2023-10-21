import {useState } from "react";
import {useLocation, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from "axios"
function NewAccountOpenForm()
{ 
  let navigate=useNavigate();
  let [branches,setBranches]=useState([])
  let [bankUser,setBankUser]=useState(
    {
      name: "",
      reEnteredPassword:"",
      password:"",
      balance:"",
      village:"",
      phoneNumber:"",
      adhharNumber:"",
      pinCode:"",
      mondel:"",
      district:"",
      country:"",
      state:"",
      branchNumber:"",
      branchName:""
    }
  )
  console.log(bankUser.branchName);
  console.log(bankUser.branchNumber);
   return <>                           { 
  //                          axios.get("http://localhost:8080/owner?ownerId=1").catch(
  //                                (value)=>{
  //                                 let list=value.response.data.object.banks;
  //                                 console.log(list);
  //                                   //  list.map((s)=>{ 
  //                                   //   console.log(s);
  //                                   //   setBranches(branches,...s)
                                
  //                                   //  }
  //                                   //  )
  //                                   setBranches(list)
  //                                    console.log(branches);
  //                               }
                                
  //                             )
                             
                              }
   <div className="HomeFirst-f">
      <h2>Open Account Form</h2>
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
            <td><input type="password" name="userPassword"  required="required" onChange={(e)=>{setBankUser({...bankUser,"password":e.target.value})}} value={bankUser.password}></input></td>
          </tr>
          <tr>
            <td>Re-Enter Password</td>
            <td>:</td>
            <td><input type="password" required="required" value={bankUser.reEnteredPassword} onChange={(e)=>{setBankUser({...bankUser,"reEnteredPassword":e.target.value})}}></input></td>
          </tr>
          <tr>
            <td>Amount</td>
            <td>:</td>
            <td><input name="userAmount"  required="required" type="number" value={bankUser.balance} onChange={(e)=>{setBankUser({...bankUser,"balance":e.target.value})}}></input></td>
          </tr>
          <tr>
            <td>Village</td>
            <td>:</td>
            <td><input name="userVillage"  required="required" value={bankUser.village} onChange={(e)=>{setBankUser({...bankUser,"village":e.target.value})}}></input></td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>:</td>
            <td><input type="number" name="userPhone"  required="required" value={bankUser.phoneNumber} onChange={(e)=>{setBankUser({...bankUser,"phoneNumber":e.target.value})}}></input></td>
          </tr>
          <tr>
            <td>adhharNumber</td>
            <td>:</td>
            <td><input type="password" name="userAdhhar"  required="required" value={bankUser.adhharNumber} onChange={(e)=>{setBankUser({...bankUser,"adhharNumber":e.target.value})}}></input></td>
          </tr>
          <tr>
            <td>country</td>
            <td>:</td>
            <td><input type="text" name="userCountry"  required="required" value={bankUser.country} onChange={(e)=>{setBankUser({...bankUser,"country":e.target.value})}}></input></td>
          </tr>
          <tr>
            <td>state</td>
            <td>:</td>
            <td><input type="text" name="userState"  required="required" value={bankUser.state} onChange={(e)=>{setBankUser({...bankUser,"state":e.target.value})}}></input></td>
          </tr>
          <tr>
            <td>pinCode</td>
            <td>:</td>
            <td><input type="number" name="userpinCode"  required="required" value={bankUser.pinCode} onChange={(e)=>{setBankUser({...bankUser,"pinCode":e.target.value})}}></input></td>
          </tr>
          <tr>
            <td>district</td>
            <td>:</td>
            <td><input type="text" name="userdistrict"  required="required" value={bankUser.district} onChange={(e)=>{setBankUser({...bankUser,"district":e.target.value})}}></input></td>
          </tr>
          <tr>
            <td>Mondel</td>
            <td>:</td>
            <td><input type="text" name="userMondel"  required="required" value={bankUser.mondel} onChange={(e)=>{setBankUser({...bankUser,"mondel":e.target.value})}}></input></td>
          </tr>
          <tr>
            <td>Branch Name</td>
            <td>:</td>
            <td><select type="text" name="branchName"  required="required" value={bankUser.branchName} onChange={(e)=>{setBankUser({...bankUser,"branchName":e.target.value})}}>
            <option>--Select--</option>
              <option>GANGADHARA</option>
              <option>SBI</option>
              </select></td>
          </tr>
          <tr>
            <td>Branch Number</td>
            <td>:</td>
            <td><select type="number" name="branchNumber"  required="required" value={bankUser.branchNumber} onChange={(e)=>{setBankUser({...bankUser,"branchNumber":Number(e.target.value)})}}>
            <option>--Select--</option>
              <option>1</option>
              <option>2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
           {
            bankUser.password===bankUser.reEnteredPassword?<td><input type="submit" className="submit" value="submit"></input></td>:<td><input type="submit" disabled="disabled" value="submit"></input></td>
           }
          </tr>
         </tbody>
       </table>
    </form>
    </div>
   </>
   function alerts(error)
   {
     toast(error.response.data.message,{ position: toast.POSITION.TOP_CENTER})
               setBankUser(
                 {
                   name: "",
     reEnteredPassword:"",
     password:"",
     balance:"",
     village:"",
     phoneNumber:"",
     adhharNumber:"",
     pinCode:"",
     mondel:"",
     district:"",
     country:"",
     state:"",
     branchNumber:"",
     branchName:""
                 }
               )
               navigate("/NewAccount",{state :{message:error.response.data.message}})
   }
   async function Fun(m,bankUser,navigate,setBankUser)
   {
  let number=Number(bankUser.branchNumber)
  console.log(number);
  m.preventDefault();
    if (bankUser.name.length<=4)
    {
      toast.warning('User Name Must more than 4 characters',{ position: toast.POSITION.TOP_RIGHT})
    }
    if (number<0 && number>=10)
    {
      toast.warning('Branch Number Must  Between 1 to 9 characters',{ position: toast.POSITION.TOP_RIGHT})
    }
    if (bankUser.branchName.length<3)
    {
      toast.warning('Branch Name Must more than characters',{ position: toast.POSITION.TOP_RIGHT})
    }
    if (bankUser.phoneNumber.length!==10)
    {
      toast.warning("Phone Number must be 10 Digits",{ position: toast.POSITION.TOP_RIGHT})
    }
    if (bankUser.adhharNumber.length!==12)
    {
      toast.warning("Adhhar number must be 12 Digits",{ position: toast.POSITION.TOP_RIGHT})
    }
    if (bankUser.pinCode.length!==6)
    {
      toast.warning("Pincode number must be 6 Digits",{ position: toast.POSITION.TOP_RIGHT})
    }
    if (bankUser.name.length>=4 && bankUser.adhharNumber.length===12 && bankUser.phoneNumber.length===10 && bankUser.pinCode.length===6 && bankUser.password===bankUser.reEnteredPassword)
    {
      axios.get("http://localhost:8080/branch?id="+number).catch(
        (error)=>{
          console.log(error);
          console.log(error.response.data.status);
          if (error.response.data.status===302)
          {
             console.log("ranjith");
             console.log(error.response.data.object.branchName);
             if (error.response.data.object.bankName===bankUser.branchName)
             {
                  bankUser={...bankUser,branchName:bankUser.branchName}
                  axios.post('http://localhost:8080/user?branchid='+number,{...bankUser}).catch((error)=>{
                    console.log(error.response.data.status);
                  if (error.response.data.status===302)
                  {
                       console.log(error.response.data.object.accountNumber);
                       toast("Suceefully Registered",{ position: toast.POSITION.TOP_CENTER})
                       navigate('/NewAccount/displayAccountdiv2',{state:{name:bankUser.name,accountNumber:error.response.data.object.accountNumber,password:bankUser.password,branchName:bankUser.balance}})
                  }
                  if (error.response.data.status!==302)
                  {
                     alerts(error);
                  }
                }
                )
             }
             else{
              toast.warning("Branch Is Not Present Based On Enterd Branch Number and Branch Name",{ position: toast.POSITION.TOP_RIGHT})
             }
          }
          else{
            if (error.response.data.status!==302)
            {
              alerts(error);
            }
          }
        }
      )
              }
     }
}  
export default NewAccountOpenForm;