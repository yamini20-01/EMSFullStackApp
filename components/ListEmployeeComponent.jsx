import React,{useState,useEffect} from 'react'
import { listEmployees,deleteEmployee } from '../services/EmployeeService'
import {useNavigate} from 'react-router-dom' 
const ListEmployeeComponent = () => {
   const[employees,setEmployees]=useState([])
   const navigator=useNavigate();

   useEffect(()=>{
    getAllEmployees();
   }, [])

   function getAllEmployees(){
    listEmployees().then(response=>{
        setEmployees(response.data);
    }).catch(error=>{
        console.error(error);
    })
   }

   function addNewEmployee(){
    navigator('/add-employee')
   }

   function updateEmployee(id){
    navigator(`/edit-employee/${id}`)
   }

   function viewEmployeeDetails(id) {
    navigator(`/view-employee/${id}`);
}



   function removeEmployee(id){
    console.log(id);

    deleteEmployee(id).then((response)=>{
       getAllEmployees();
    })
   .catch(error=>{
    console.error(error);

   })
   }

  return (
    <div className='container'>
    <h5 className='text-center'>List Of Employees</h5>
    <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
    
    <table className='table table-striped table-bordered'>
        <thead>
            <tr> 
                <th>Emp Id</th>
                <th>Emp firstname</th>
                <th>Emp lastname</th>
                <th>Emp email</th>
                <th>Actions</th>
                
            </tr>
        </thead>
        <tbody>
            {
               employees.map(employee=>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                        <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button>
                        <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)} style={{marginLeft:'10px'}}>Delete</button>
                        <button className='btn btn-secondary'onClick={() => viewEmployeeDetails(employee.id)}style={{ marginLeft: '10px' }} > View</button>
                        </td>
                    </tr>)
            }
        </tbody>
    </table>

    </div>
  )
}

export default ListEmployeeComponent