import React from 'react'
import './EditTransation.css'
import { useNavigate } from 'react-router-dom'
function EditTransation() {
    const navigate= useNavigate()
    const handleClick=async()=>{
        navigate('/ListTransation')
    }
  return (
    <>
    



<div className='Editcontainer'>
  
  <div className='TransationCard'>

    <h1 id='transH'>Edit Your Transation</h1>
    <div className='cardInputs'>
<input  name='description' placeholder='Description' type='text' />
<br/>

<input name='Amount'  placeholder='Amount'  type='number' />
<br/>

<button id='transtbtn' onClick={handleClick}>Save Change</button>
    </div>

  </div>

  
</div>
    </>
  )
}

export default EditTransation
