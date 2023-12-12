import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import './Transation.css'


function Transation() {
  const [desc,setDesc]=useState()
  const [amount,setAmout]=useState()
  const [transation,setTransation]=useState([])
 
  useEffect(()=>{
   const trans= localStorage.getItem('transation')
   if (trans) {
    setTransation(JSON.parse(trans));
  }
}, []);
  
const navigate= useNavigate()
  const handleClick=async(e)=>{
    e.preventDefault()
  
    const updatedTransation = [...transation, {id: Date.now(), desc, amount }];
    localStorage.setItem('transation', JSON.stringify(updatedTransation));

  navigate('/ListTransation');
  };
  
  return (
    <>
    <div className='btndiv'>

    <button id='topbtn' type="button" class="btn btn-warning" onClick={handleClick}>Transation List</button>
    </div>
    
    <div className='container'>
      
      <div className='TransationCard'>
   
        <h1 id='transH'>Add Your Transation</h1>
        <div className='cardInputs'>
<input  name='description' placeholder='Description' type='text'  onChange={e=>setDesc(e.target.value)}/>
<br/>

<input name='Amount'  placeholder='Amount'  type='number' onChange={e=>setAmout(e.target.value)} />
<br/>

<button id='transtbtn' onClick={handleClick}>Add Transation</button>
        </div>

      </div>

      
    </div>
    </>
  
  )
}

export default Transation
