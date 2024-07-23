using {db.models} from '../../../db/models';

@requires: 'authenticated-user'
service EmployeeManagemenentService {
    @readonly entity Employees   as projection on models.Employees;
    @readonly entity Departments as projection on models.Departments;
}


@requires: 'ROLE_HR_ADMIN'
service EmployeeManagemenentAdminService {
    // @(restrict: [{ grant: ['CREATE', 'UPDATE', 'DELETE'], to: 'ROLE_HR_ADMIN ' }])
    entity Employees   as projection on models.Employees;
    entity Departments as projection on models.Departments;

}
