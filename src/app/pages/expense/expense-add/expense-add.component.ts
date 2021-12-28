import { ExpenseService } from '../expense.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Expense } from '../expense.model';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.scss']
})
export class ExpenseAddComponent implements OnInit {


  id: number;
  editMode = false;
  addExpenseForm : FormGroup ;
  error = { details : null, amount:null};
  constructor(private expenseService: ExpenseService ,
              private sharedService : SharedService ,
              private router : Router,
              private route : ActivatedRoute) {

   }
  ngOnInit(): void {

    this.route.params.subscribe(
      (params :Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );

  }


  submit(){
      if(this.editMode){

        this.expenseService.editExpense(this.id,this.addExpenseForm.value).subscribe({
          next: (data) => {
            this.sharedService.successToast('Expense updated succesfully');
            this.router.navigate(['expense']);
          },
          error: (error) => {
            this.error = error.error['errors'];
            this.sharedService.errorToast(error.error['message'])
          }
        })
      }else{

        this.expenseService.addExpense(this.addExpenseForm.value).subscribe({
          next: (data) => {
            this.sharedService.successToast('Expense added succesfully');
            this.router.navigate(['expense']);
          },
          error: (error) => {
            this.error = error.error['errors'];
            this.sharedService.errorToast(error.error['message'])
        }
        })
      }

  }

  private initForm(){
    let details ='';
    let amount ='';



    if(this.editMode){

       this.expenseService.getExpenseByIdApi(this.id).subscribe(
        (data : Expense) => {

          this.addExpenseForm = new FormGroup ({
            'details' : new FormControl(data.details , Validators.required),
            'amount' : new FormControl(data.amount, Validators.required),

             });
        }
      );


    }

    this.addExpenseForm = new FormGroup ({
      'details' : new FormControl(details , Validators.required),
      'amount' : new FormControl(amount, Validators.required),

       });

  }

}

