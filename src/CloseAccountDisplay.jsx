import { useLocation } from "react-router-dom";

function CloseAccountDisplay()
{
    let location=useLocation();
    let {state}=location;
    let {name,accountNumber}=state;
    return <>
        <h4>Wellcome Name :<span>{name}</span> Your Account Number  <span>{accountNumber}</span> Has Closed</h4>
    </>
}
export default CloseAccountDisplay;