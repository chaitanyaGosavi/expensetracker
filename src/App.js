import './App.css';
import {Balance} from './Components/Balance'
import {IncomeExpense} from './Components/IncomeExpense'
import {AddTransaction} from './Components/AddTransaction'
import {TransactionList} from './Components/TransactionList'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="main container">
        <h2 className='mb-2'>Expense Tracker</h2>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
export default App;
