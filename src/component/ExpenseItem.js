import React,{useState} from 'react'
import ExpenseDate from './ExpenseDate'
//import Card from './Card'
import './ExpenseItem.css'
function ExpenseItem(props){
  const[title,setrTitle] = useState(props.title)
 const clickHandeler=()=>{
  setrTitle('updated');
  console.log(title)
 }
 
return(
  //  <div  className='expense-item'>
      <div className='expense-item'> 
      <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
         <h2>{title}</h2>

         <div className='expense-item__price'>${props.amount}</div> 
     
        </div>
        <button onClick={clickHandeler}>change title</button>
        </div> 
  
    
)
}
export default ExpenseItem