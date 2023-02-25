import React, {useState} from 'react';
import './App.css';
import ToDoList from './ToDoList';



function App() {
const [inputList, setInputList] = useState("");

const [Items, setItems] = useState([]);


const itemEvent=(e)=>{
   setInputList(e.target.value)
}

const listOfItems = ()=>{
   setItems((oldItems)=>{
    return [...oldItems, inputList]
   })
   setInputList("")
}

const deleteItems = (id)=>{
  setItems((oldItems)=>{
    return oldItems.filter((arrElem, index)=>{
     return index !== id
    })
  })
}

  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo list</h1>
        <br />
        <input type="text" placeholder="Add a item" onChange={itemEvent} value={inputList}/>
        <button onClick={listOfItems}> + </button>

        <ol>
         { Items.map((i, index) => {
           return <ToDoList key={index} id={index} text = {i} onSelect = {deleteItems} />
          })}
        </ol>
      </div>    
    </div>
    </>
  );
}

export default App;
