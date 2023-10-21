import { useLocation } from "react-router-dom";

function Display()
{
    let {state}=useLocation();
    let {reducebalance,updatedBalance,name,accountNumber,message}=state;
    return  <>
        <h5>UserName : <span>{name}</span></h5>
        <h4>Hi {reducebalance} Rupees {message} Your ({accountNumber}) Account , Your Current Balance Is {updatedBalance}</h4>
    </>
 
}
export default Display;