import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employee = {};
  employees = [];
  isLoading = true;
  isEditing = false;

  addEmployeeForm: FormGroup;
  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  street = new FormControl('', Validators.required);
  city = new FormControl('', Validators.required);
  postcode = new FormControl('', Validators.required);
  birthdate = new FormControl('', Validators.required);
  telephone = new FormControl('', Validators.required);

  constructor(private employeeService: EmployeeService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getEmployees();
    this.addEmployeeForm = this.formBuilder.group({
      firstname: this.firstname,
      lastname: this.lastname,
      street: this.street,
      city: this.city,
      postcode: this.postcode,
      birthdate: this.birthdate,
      telephone: this.telephone
    });
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      data => this.employees = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeForm.value).subscribe(
      res => {
        const newEmployee = res.json();
        this.employees.push(newEmployee);
        this.addEmployeeForm.reset();
        this.toast.setMessage('pracownik został dodany poprawnie', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(employee) {
    this.isEditing = true;
    this.employee = employee;
  }

  cancelEditing() {
    this.isEditing = false;
    this.employee = {};
    this.toast.setMessage('przerwano edycję danych pracownika', 'warning');
    // ponowne wczytanie listy pracowników
    this.getEmployees();
  }

  editEmployee(employee) {
    this.employeeService.editEmployee(employee).subscribe(
      res => {
        this.isEditing = false;
        this.employee = employee;
        this.toast.setMessage('dane pracownika zostały zedytowane poprawnie', 'success');
      },
      error => console.log(error)
    );
  }

  deleteEmployee(employee) {
    if (window.confirm('Jesteś pewny że chcesz nieodwracalnie usunąć tego pracownika')) {
      this.employeeService.deleteEmployee(employee).subscribe(
        res => {
          const position = this.employees.map(elem => elem._id).indexOf(employee._id);
          this.employees.splice(position, 1);
          this.toast.setMessage('pracownik został usunięty poprawnie', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
