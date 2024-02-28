import logo from './logo.svg';
import './App.css';
import NewExpense from './component/NewExpense/NewExpense';
import Expenses from './component/Expenses';


function App() {
   const expenses=[
     {
      id:'e1',
       title:'new desk',
       amount:23.23,
       date:new Date(2020,1, 4)
      },
     {
       id:'e2',
      title:'new info',
       amount:243.23,
       date:new Date(2022,23, 3)
     },
     {
       id:'e3',
       title:'desk',
       amount:23.23,
       date:new Date(2024,2, 3)
     },
     {
       id:'e4',
       title:'new TV',
       amount:89.23,
       date:new Date(2021,5 ,5)
     },
   ]

   const addExpenseHandler = expense => {
    console.log('in app.js')
    console.log(expense)
   }
  return (
   <div>
    <h2>Let's get started</h2>
    <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/> 

   </div>
   
  );
}

export default App;
