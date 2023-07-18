import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Header from "../components/Header"



export default function EmployeePage({employees}){
    const {EmployeeName: name} = useParams()
    
    console.log(name)
    // console.log(employees)
    const [currentEmployee, setCurrentEmployee] = useState({})
    
    function findEmployee(){       

        let thisEmployee = employees.find( (person) => person.name === name )
        setCurrentEmployee(thisEmployee)
        console.log(currentEmployee)
    }
    
    console.log(currentEmployee)
    // name === employees[index].name
    useEffect(()=>{
    //    alert('loading stuff')
       findEmployee() 
    }, [])

    return (
    <div className="home-page">
        <Header />
        <div className='profile-box'>            
            <img src={currentEmployee.headshot} className='float'/>
            <div className='employee-info'>
                <h1>{currentEmployee.name}</h1>
                <h2>{currentEmployee.title}</h2>
            </div>            
        </div>
        <Link><h3>Call Office: {currentEmployee.phone}</h3></Link>
        <Link><h3>Call Office: {currentEmployee.phone}</h3></Link>
        <Link><h3>Call Home: {currentEmployee.phone}</h3></Link>
        <Link><h3>Call SMS: {currentEmployee.phone}</h3></Link>
        <Link><h3>Email: {currentEmployee.email}</h3></Link>          
        
        
    </div>
    )
}


