import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { SalaryService } from '../salary.service';

@Component({
  selector: 'app-months-pay',
  templateUrl: './months-pay.component.html',
  styleUrls: ['./months-pay.component.scss']
})
export class MonthsPayComponent implements OnInit {

  months : any;

  constructor(private salaryService : SalaryService) { }

  ngOnInit(): void {
    this.getMonthData();

  }

  getMonthData(){

          this.salaryService.getAllMonths().subscribe({
          next: (res : any) => {
           this.months = res
          },
          error: (error) => console.log(error)
      });
  }


}
