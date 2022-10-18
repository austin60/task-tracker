import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React,{useState,useEffect} from 'react';



function App() {
  const [task,setTask]=useState('');
  const [duties,setDuties]=useState([])

  //fetchdata from localstorage
useEffect(()=>{
  const duties=JSON.parse(window.localStorage.getItem('duties'))
  if(duties){
    setDuties(duties)
  }
},[]) 
//set (duties)array data to local storage
  useEffect(()=>{
    if(duties.length>0){
    window.localStorage.setItem('duties',JSON.stringify(duties))}
    console.log('set')
  },[duties]);

  //delete items from array
  function deleteTask(id){
    const newArr= duties.filter(duty=>duty.id!==id);
    setDuties(newArr)
 } 

  //add tasks to array
  const addTask=()=>{
    //check value
    if(!task||task===" "){
      alert('add task')
    }
    else{
      // create item object with id
      const item={
        id:(Math.random() * 1000) + 1,
        task:task
       }
       //push tasks to array
       setDuties(oldList=>[...oldList,item])
       setTask('')
       console.log(duties.length,duties)
    }
     

  }

  return (
    <div className="App">
      <div className='front container'>
        <div className='input'>
       <input type='text' className='form-control' value={task} onChange={e=>setTask(e.target.value)} placeholder='Add new task'/>
       <button className='btn btn-success' onClick={addTask}>Add</button>
       </div>
      < div className='taskList'>
      {duties.map(duty=><div className='task' key={duty.id}>
       {duty.task}<button className='btn btn-light' onClick={()=>deleteTask(duty.id)}>Done</button></div>)}
      </div>

      </div>
    </div>
  );
}

export default App;