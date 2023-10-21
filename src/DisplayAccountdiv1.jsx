import { useLocation } from "react-router-dom";
function DisplayAccountdiv1()
{
  let location=useLocation();
  return <>
    <div className="HomeFirst-f">
    <h1>User</h1>
  </div>
  <div className="HomeFirst-s">
         <h5>APNA BANK WELL COMES YOU :</h5>
         <h5 >User Name :<span className="red"> {location.state.name}</span></h5>
         <h4>Branch Name : <span className="red"> {location.state.branchName}</span></h4>
  </div>
  </>
}
export default DisplayAccountdiv1;