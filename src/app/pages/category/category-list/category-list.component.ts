import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { CategoryService } from '../category.service';
import Swal from 'sweetalert2' ;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories : any;
  page = 1 ;
  limit = 5;
  skip : any;
  totalItems;
  constructor(private categoryService : CategoryService,
              private sharedSercice : SharedService) { }

  ngOnInit(): void {
    this.getCategoryData();

    this.categoryService.newChanges.subscribe((result : Boolean) =>{
      if(result){
        this.getCategoryData();
        this.categoryService.newChanges.next(false);

      }
    });
  }

  getCategoryData(){
        if(this.page == 1){
          this.skip = 0;
        }else{
          this.skip = (this.page-1 ) * this.limit;
        }
        let requestObj = {
          'limit' : this.limit,
          'skip' :this.skip
        }
            this.categoryService.getAllCategories(requestObj).subscribe({
          next: (res : any) => {

              this.categories = Object.keys(res.data).length > 0 ? Object.values(res.data) : null;
              this.totalItems = res.total;

          },
          error: (error) => console.log(error)
      });
  }

  deleteCategory(id){

    Swal.fire({
      title: '<h3>Do you want to delete Category ?</h3>',
      icon: 'question',
      iconColor:"#fec9bd80",
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {

      if (result.isConfirmed) {
        this.categoryService.deleteCategory(id).subscribe({
          next: result => {
            Swal.fire('Category deleted succesfully', '', 'success')
            this.ngOnInit();
          },
          error: error => {
            // this.sharedSercice.errorToast('fail to delete the supplier');
            Swal.fire('fail to delete the category', '', 'success')
          }
        });

      }
    })


  }
}
