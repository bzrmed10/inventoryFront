import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2' ;
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {

  expenses : any;
  page = 1 ;
  limit = 5;
  skip : any;
  totalItems;
  constructor(private expenseService : ExpenseService,
              private sharedSercice : SharedService) { }

              ngOnInit(): void {
                this.getExpenseData();

              }

              getExpenseData(){
                    if(this.page == 1){
                      this.skip = 0;
                    }else{
                      this.skip = (this.page-1 ) * this.limit;
                    }
                    let requestObj = {
                      'limit' : this.limit,
                      'skip' :this.skip
                    }
                        this.expenseService.getAllExpenses(requestObj).subscribe({
                      next: (res : any) => {

                          this.expenses = Object.keys(res.data).length > 0 ? Object.values(res.data) : null;
                          this.totalItems = res.total;

                      },
                      error: (error) => console.log(error)
                  });
              }

              deleteExpense(id){

                Swal.fire({
                  title: '<h3>Do you want to delete Expense ?</h3>',
                  icon: 'question',
                  iconColor:"#fec9bd80",
                  showCancelButton: true,
                  confirmButtonText: 'Delete',
                }).then((result) => {

                  if (result.isConfirmed) {
                    this.expenseService.deleteExpense(id).subscribe({
                      next: result => {
                        Swal.fire('Expense deleted succesfully', '', 'success')
                        this.ngOnInit();
                      },
                      error: error => {
                        // this.sharedSercice.errorToast('fail to delete the supplier');
                        Swal.fire('fail to delete the Expense', '', 'success')
                      }
                    });

                  }
                })
              }


            }
