import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const actor =['James', 'Billah', 'Masum', 'Paul Walker', 'Brad pit','Vin Desel']
  
  const products = [
    {name: 'Photoshop',price:'$90.99' },
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}

]
// const actorList =actor.map(actors => actors)
// console.log(actorList)
  return (
    <div className="App">
      <header className="App-header">
        <p>The react killer</p>
        <Counter></Counter>

        {/* data load react */}
        <Users></Users>
        <ToDoList></ToDoList>

        <ul>
          {
            actor.map(actors => <li>{actors}</li>)
          }
          {
            products.map(pd => <li>{pd.name}</li>)
          }
          
        </ul>
        {
          products.map(pro => <Product product ={pro}></Product>)
        }
        
     
      </header>
    </div>
  );
}



function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    color:'black',
    margin:'5px',
    
  }
  const buttonStyle ={
    backgroundColor: 'blue',
    color:'white',
    
  }
  const {name, price} = props.product; //{name: 'Photoshop',price:'$90.99' }
  return(
    <div style={productStyle}>
      <h5>{name}</h5>
      <h4>{price}</h4>
      <button style={buttonStyle}>Buy now</button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(1)
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);

 
  }

  const handleDecrease = () =>{
    const newCount = count -1;
    setCount(newCount)
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

// React data load
function Users(){
  const [users, setUsers] = useState([]);


  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res  => res.json())
    .then(data => setUsers(data))
  },[])


  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
        {
          users.map(user => <li>{user.phone}</li>)
        }
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function ToDoList(){
  const [todo, setToDo] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then (res => res.json())
    .then(data => setToDo(data))
  }, [])
  return(
    <div>
      <h3>To Do List:{todo.length}</h3>
      <ul>
        {
          todo.map(titleList => titleList.title)
        }
      </ul>
    </div>
  )
}
export default App;
