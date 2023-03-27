import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';
import {useNavigate} from 'react-router-dom';
const Main = () => {
    const navigate = useNavigate();
	return (
		<AppProvider>
			<div className='container'>
				<h1 className='mt-3'>Expense Tracker</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>

                <div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' onClick={()=>navigate(-1)} class='btn btn-primary'>
						Logout
					</button>
				</div>
			</div>
			</div>
		</AppProvider>
	);
};

export default Main;
