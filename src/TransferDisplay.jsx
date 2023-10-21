import { useLocation } from "react-router-dom";
function TransferDisplay()
{
    let {state}=useLocation();
    let {name,amount,currentBalance,accountNumber}=state;
    return <>
      Your Name {name} and Account  {accountNumber} Increased {amount} Rupees Your Current balance is {currentBalance} 
    </>
}
export default TransferDisplay;