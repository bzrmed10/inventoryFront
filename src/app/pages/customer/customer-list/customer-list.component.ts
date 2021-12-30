import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { CustomerService } from '../customer.service';
import Swal from 'sweetalert2' ;

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers : any;
  page = 1 ;
  limit = 5;
  skip : any;
  totalItems;
  constructor(private customerService : CustomerService,
              private sharedSercice : SharedService) { }

  ngOnInit(): void {
    this.getCustomersData();

  }

  getCustomersData(){
        if(this.page == 1){
          this.skip = 0;
        }else{
          this.skip = (this.page-1 ) * this.limit;
        }
        let requestObj = {
          'limit' : this.limit,
          'skip' :this.skip
        }
            this.customerService.getAllCustomers(requestObj).subscribe({
          next: (res : any) => {

           this.customers = Object.values(res.data)
           this.totalItems = res.total;
          },
          error: (error) => console.log(error)
      });
  }

  deleteCustomer(id){
    Swal.fire({
      title: '<h3>Do you want to delete Supplier ?</h3>',
      icon: 'question',
      iconColor:"#fec9bd80",
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {

      if (result.isConfirmed) {
        this.customerService.deleteCustomer(id).subscribe({
          next: result => {
            Swal.fire('Supplier deleted succesfully', '', 'success')
            this.ngOnInit();
          },
          error: error => {
            // this.sharedSercice.errorToast('fail to delete the supplier');
            Swal.fire('fail to delete the supplier', '', 'error')
          }
        });

      }
    })

  }
}
