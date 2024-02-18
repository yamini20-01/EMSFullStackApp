package com.SpringBoot.EmployeeManagement.repository;

import com.SpringBoot.EmployeeManagement.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository <Employee,Long>{

}
