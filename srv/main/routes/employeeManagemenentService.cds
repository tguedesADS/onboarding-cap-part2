using { db.models } from '../../../db/models';

service EmployeeManagemenentService {

    entity Employees as projection on models.Employees;
    entity Departments as projection on models.Departments;
    
}