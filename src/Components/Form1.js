import React, { useState } from 'react'

function Form1() {

    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[phoneNo,setPhoneNO]=useState('')


    function handleFirstName(event){
        setFirstName(event.target.value)
    }
    function handleLastName(event){
        setLastName(event.target.value)
    }
    function handlePhoneNumber(event){
        setPhoneNO(event.target.value)
    }
    
    function submitData(e){

        e.preventDefault();
        console.log(`first Name is : ${firstName} \n Last Name is : ${lastName} \n Phone No is : ${phoneNo}`)
    }

    
  return (
    <div>
        <form onSubmit={submitData}>
            <div>
            <input type='text' placeholder='first Name'  onChange={handleFirstName}/>
            </div>
            
            <div>
            <input type='text' placeholder="Last Name" onChange={handleLastName} />
            </div>

            <div>
            <input type='text' placeholder="Phone Number" onChange={handlePhoneNumber} />
            </div>
            
            <button>Submit</button>

        </form>
    </div>
  )
}

export default Form1