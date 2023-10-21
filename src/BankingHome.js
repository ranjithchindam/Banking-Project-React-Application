import { Link,Route,Routes} from 'react-router-dom';
import './BankingHome.css'
import HomeSecond from './HomeOpportunities';
import HomeFirst from './HomeResults';
import HomeThird from './HomeServices';
import { Suspense, lazy } from 'react';
import BalanceSevices from './balanceservice';
import BalanceForm from './BalanceForm';
import DisplayAccountdiv1 from './DisplayAccountdiv1';
import DisplayAccountdiv3 from './displayAccoutdiv3';
import DisplayAccountdiv2 from './displayAccountdiv2';
import DepositeSevices from './DepositeService';
import Display from './Display';
import WithDrawDiv2 from './Withdraw.Form';
import CloseAccount from './closeAccount';
import CloseAccountDisplay from './CloseAccountDisplay';
import AboutusDiv2 from './aboutusDiv2';
import TransferAccount from './transferAccountForm';
// import image from './images/world.jpg'

import TransferDisplay from './TransferDisplay';
let DeposteDiv2=lazy(()=>{return import('./DepositeDiv2')});
let BalanceWellCome=lazy(()=>{return import('./BalanceWellcome')})
let NewAccountServices=lazy(()=>{return import('./NewAccountServices')})
let NewAccountOpenForm=lazy(()=>{return import('./NewAccountOpenAccountForm')})
let NewAccountWellcome=lazy(()=>{return import('./NewAccountWellcome')})
let Depositewellcome=lazy(()=>{return import('./DepositeWellcome')})

function BankingHome()
{
    return <div className="BankingHome">
        <div className="maindiv">
            <div className='di'>
            <ul className='ul1'>
                <li>
                    <img className='image' src={require('D:/react3/my-app/src/images/world.jpg')} alt="React Logo" />
                </li>
                <li>
                    <div>
                    <h1>APNA-BANK</h1>
                    <h5>Extra OrdinaryService</h5>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        <div className="linksdiv">
        <Link className='link' to="">Home</Link>
        <Link className='link' to="NewAccount">NewAccount</Link>
        <Link className='link' to="Balance">Balance</Link>
        <Link className='link' to="Deposite">Deposite</Link>
        <Link className='link' to="Withdarw">Withdarw</Link>
        <Link className='link' to="Transfer">Transfer</Link>
        <Link className='link' to="CloseAccount">Close A/C</Link>
        <Link className='link' to="AboutUs">About Us</Link>
        </div>
        <div className="lastdiv">
            <div className='firstdiv'>
              <Routes>
              <Route path="/" element={<HomeFirst></HomeFirst>}></Route>
              </Routes>
              <Routes>
                <Route path="/NewAccount" element={<Suspense><NewAccountServices></NewAccountServices></Suspense>}> </Route>
                <Route path='/NewAccount/displayAccountdiv2' element={<DisplayAccountdiv1></DisplayAccountdiv1>}/>
              </Routes>
              <Routes>
              <Route path="/Balance" element={<BalanceSevices></BalanceSevices>}></Route>
              </Routes>
              <Routes>
                <Route path='/Deposite' element={<DepositeSevices></DepositeSevices>}></Route>
                <Route path='/Deposite/Diplay' element={<DepositeSevices></DepositeSevices>}></Route>
                <Route path='/Withdarw' element={<DepositeSevices></DepositeSevices>}></Route>
                <Route path='/Withdarw/Diplay' element={<DepositeSevices></DepositeSevices>}></Route>
                <Route path="/CloseAccount" element={<BalanceSevices></BalanceSevices>}></Route>
                <Route path="/CloseAccount/CloseAccountDisplay" element={<DepositeSevices></DepositeSevices>}></Route>
                <Route path="/Transfer" element={<DepositeSevices></DepositeSevices>}></Route>
                <Route path="/AboutUs" element={<BalanceSevices></BalanceSevices>}></Route>
                <Route path="/Transfer/display" element={<BalanceSevices></BalanceSevices>}></Route>
              </Routes>
            </div>
            <div className='seconddiv'>
                <Routes>
                    <Route path="/" element={<HomeSecond></HomeSecond>}></Route>
                    <Route path="/Balance" element={<BalanceForm></BalanceForm>}></Route>  
                    <Route path="/Transfer" element={<H></H>}></Route>
                    <Route path="/CloseAccount" element={<CloseAccount></CloseAccount>}></Route>
                    <Route path="/CloseAccount/CloseAccountDisplay" element={<CloseAccountDisplay></CloseAccountDisplay>}></Route>

                </Routes>
                <Routes>
                    <Route path="/NewAccount" element={<Suspense><NewAccountOpenForm></NewAccountOpenForm></Suspense>}></Route>
                    <Route path='/NewAccount/displayAccountdiv2' element={<DisplayAccountdiv2></DisplayAccountdiv2>}></Route>
                </Routes>
                <Routes>
                  <Route path='/Deposite' element={<Suspense><DeposteDiv2></DeposteDiv2></Suspense>}></Route>
                  <Route path='/Deposite/Diplay' element={<Display></Display>}></Route>
                  <Route path='/Withdarw' element={<WithDrawDiv2></WithDrawDiv2>}></Route>
                  <Route path="/AboutUs" element={<AboutusDiv2></AboutusDiv2>}></Route>
                  <Route path="/Transfer" element={<TransferAccount></TransferAccount>}></Route>
                  <Route path="/Transfer/display" element={<TransferDisplay></TransferDisplay>}></Route>
                </Routes>
            </div>
            <div className='thirddiv'>
            <Routes>
              <Route path="/" element={<HomeThird></HomeThird>}></Route>
            </Routes>
            <Suspense>
              <Routes>
                <Route path="/NewAccount" element={<Suspense><NewAccountWellcome></NewAccountWellcome></Suspense>}></Route>
                <Route path='/NewAccount/displayAccountdiv2' element={<DisplayAccountdiv3></DisplayAccountdiv3>}/>
              </Routes>
            </Suspense>
            <Suspense>
              <Routes>
                <Route path="/Balance" element={<Suspense><BalanceWellCome></BalanceWellCome></Suspense>}></Route>
                <Route path="/Deposite" element={<Suspense><Depositewellcome></Depositewellcome></Suspense>}></Route>
                <Route path='/Deposite/Diplay' element={<Depositewellcome></Depositewellcome>}></Route>
                <Route path='/Withdarw' element={<Depositewellcome></Depositewellcome>}></Route>
                <Route path='/Withdarw/Diplay' element={<Depositewellcome></Depositewellcome>}></Route>
                <Route path="/CloseAccount" element={<BalanceWellCome></BalanceWellCome>}></Route>
                <Route path="/CloseAccount/CloseAccountDisplay" element={<Depositewellcome></Depositewellcome>}></Route>
                <Route path="/Transfer" element={<Depositewellcome></Depositewellcome>}></Route>
                <Route path="/AboutUs" element={<BalanceWellCome></BalanceWellCome>}></Route>
                <Route path="/Transfer/display" element={<BalanceWellCome></BalanceWellCome>}></Route>
              </Routes>
            </Suspense>
            </div>
        </div>
        
    </div>
    
}
function H()
{
    return null;
}
export default BankingHome;