import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../Service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  
  customer:Customer = new Customer(0,"","","","","","");
  isEditable: any;



  constructor(private customerService:CustomerService, private router:Router){}
  ngOnInit(): void {
    
  }
  

  onSubmit(){
    console.log(this.customer);
    this.customerService.SaveEmployee( this.customer ).subscribe(data =>
      console.log(data));
      this.router.navigateByUrl("dashboard/customers");
    }
    goToDashboard(){
      this.router.navigateByUrl("/dashboard");    
    }
}
