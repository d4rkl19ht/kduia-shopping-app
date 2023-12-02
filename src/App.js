import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

const App = () => {
  return (
      <AppProvider>
        <div className="container mt-4">
            <h1>Shopping App</h1>
            <div className="row mb-3">
                <div className="col-sm">
                    <CartValue />
                </div>
                <div className="col-sm">
                    <Location />
                </div>
            </div>
            <div className="mb-3">
                <h2>Shopping Cart</h2>
                <ExpenseList />
            </div>
            <div>
                <h2>Add Items</h2>
                <ItemSelected />
            </div>
        </div>
      </AppProvider>
  );
}

export default App;
