import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map(transaction => transaction.amount);
  const income =( amount.filter(item => item > 0).reduce((acc, item) => (acc+=item), 0)).toFixed(2);
  const expense =( amount.filter(item => item < 0).reduce((acc, item) => (acc+=item), 0)).toFixed(2);

  return (
    <div className='cardGroup text-center mb-5'>
      <div className="card border-success mb-3">
        <div className="card-body text-success">
          <h5 className="card-title">TOTAL INCOME</h5>
          <p className="card-text">${income}</p>
        </div>
      </div>
      <div className="card border-danger mb-3">
        <div className="card-body text-danger">
          <h5 className="card-title">TOTAL EXPENSE</h5>
          <p className="card-text">${expense}</p>
        </div>
      </div>
    </div>

  )
}
