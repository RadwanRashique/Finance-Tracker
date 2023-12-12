
import React,{useEffect,useState} from 'react'
import './TransationList.css'
import { Link } from 'react-router-dom'

function TransationList() {
  const  [data,setData]=useState([])
  console.log(data)
  useEffect(() => {
  
    const storedTransation = localStorage.getItem('transation');
    if (storedTransation) {
      setData(JSON.parse(storedTransation));
    }
  }, []);
  return (
   <>
   <div className='TransationList'>
    <div className='header'>
    <h1>Your Transations</h1>
    
    <Link to={"/"}><button id='topbtn' type="button" class="btn btn-success" >Add-New</button></Link>
    </div>
   
    <table  className='table'>
          <thead>
            <tr className='heading'>
              <th><h1>Amount</h1></th>
              <th><h1>Description</h1></th>
              <th><h1>Actions</h1></th>
            </tr>
          </thead>

          {data.map((item)=>(
 <tbody>
 <tr>
   <td><h3>{item.amount}</h3></td>
   <td><h3>{item.desc}</h3></td>
   <td>
  <Link to={"/EditTransation"}><button type="button" class="btn btn-danger"  >Edit</button></Link> 
<button type="button" class="btn btn-dark">Delete</button>
   </td>
 </tr>
</tbody>


          ))

          }
         
        </table>
   </div>
   </>
  )
}

export default TransationList
