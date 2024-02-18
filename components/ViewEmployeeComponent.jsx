import React, { useState, useEffect } from 'react';
import { getEmployee } from '../services/EmployeeService';
import { useParams,useNavigate } from 'react-router-dom';

const ViewEmployeeComponent = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getEmployee(id)
            .then(response => {
                setEmployee(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);


    const handleBack = () => {
        navigate('/employees'); // Redirect back to ListEmployeeComponent
    };

    if (!employee) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container'>
         <div className='text-center'>
            <h2 className='text-center'>Employee Details</h2>
            <br/>
            <div>
                <label>First Name:</label> {employee.firstName}
            </div>
            <div>
                <label>Last Name:</label> {employee.lastName}
            </div>
            <div>
                <label>Email:</label> {employee.email}
            </div>
            <br/><br />
            <button className="btn btn-primary" onClick={handleBack}>Back</button>
            </div>
        </div>
    );
};

export default ViewEmployeeComponent;
