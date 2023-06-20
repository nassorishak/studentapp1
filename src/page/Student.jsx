import React, { useState } from 'react'
import './style.css'

function Student() {
   const[Student,setStudent]=useState([]);
   const myStudent=()
  return (
    <div>
    <table>
    <tr>
      <th>StFName</th>
      <th>StEmail</th>
      <th>StEmail</th>
      <th>StEmail</th>
      <th class="but"><button>Add</button></th>
      <th class="but1"><button>delete</button></th>
      <th><button class="but2">update</button></th>
    </tr>
      <tr>
          <td>Jane Smith</td>
          
          <td>janesmith@example.com</td>
          <td>janesmith@example.com</td>
          <td>janesmith@example.com</td>
        
          
          
        </tr>
         </table>
  </div>
  )
}

export default Student