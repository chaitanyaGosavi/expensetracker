import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map(transaction => transaction.amount);
  const total = amount.reduce((acc, item) => (acc+=item), 0).toFixed(2);
  return (
    <div>
      <h3 className='h3 lead'>Your Balance</h3>
      <h2 className="h2">${total}</h2>

    </div>
  )
}
