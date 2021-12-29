import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { SalaryService } from '../salary.service';
import Swal from 'sweetalert2' ;
@Component({
  selector: 'app-pay-per-month',
  templateUrl: './pay-per-month.component.html',
  styleUrls: ['./pay-per-month.component.scss']
})
export class PayPerMonthComponent implements OnInit {

  salaries : any;
  month : string;
  page = 1 ;
  limit = 5;
  skip : any;
  totalItems;
  constructor(private salaryService : SalaryService,
              private sharedSercice : SharedService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params :Params) => {
        this.month = params['month'];
        this.getSalariesData();
      }
    );


  }
  getSalariesData(){
        if(this.page == 1){
          this.skip = 0;
        }else{
          this.skip = (this.page-1 ) * this.limit;
        }
        let requestObj = {
          'limit' : this.limit,
          'skip' :this.skip,
          'month' : this.month
        }
            this.salaryService.getSalariesByMonth(requestObj).subscribe({
          next: (res : any) => {

           this.salaries = Object.values(res.data)
           this.totalItems = res.total;
          },
          error: (error) => console.log(error)
      });
  }

  deletePay(id){

    Swal.fire({
      title: '<h3>Do you want to delete Supplier ?</h3>',
      icon: 'question',
      iconColor:"#fec9bd80",
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {

      if (result.isConfirmed) {
        this.salaryService.deletePay(id).subscribe({
          next: result => {
            Swal.fire('Salary pay deleted succesfully', '', 'success')
            this.ngOnInit();
          },
          error: error => {

            Swal.fire('fail to delete the Salary pay', '', 'error')
          }
        });

      }
    })
  }

}
