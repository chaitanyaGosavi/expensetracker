import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const  AddTransaction = () => {
    const [comment, setComment] = useState(" ");
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const handleTransaction= e =>{
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text: comment,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
    return (
        <>
            <h3 className="mb-3"> Add New Tranaction</h3>
            <form onSubmit={handleTransaction}>
                <div className="mb-3 row">
                    <label htmlFor="comment" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-7">
                        <input type="text" className="form-control" id="comment" value={comment} onChange={(e)=>setComment(e.target.value)}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="transaction" className="col-sm-2 col-form-label">Enter Amount <br /> <p className="text-info">(+ for income, - for expense)</p></label>
                    
                    <div className="col-sm-7">
                        <input type="number" className="form-control" id="transaction" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>

            </form>
        </>
    )

}
