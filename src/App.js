
import BankingHome from './BankingHome';
import { Bounce, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return <>
      <BankingHome></BankingHome>
      <ToastContainer transition={Bounce}></ToastContainer>
      </>
}export default App;
