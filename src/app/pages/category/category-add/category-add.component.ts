import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  id: number;
  editMode = false;
  addCategoryForm : FormGroup ;
  error = { category_name : null};
  constructor(private categoryService:CategoryService ,
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

        this.categoryService.editCategory(this.id,this.addCategoryForm.value).subscribe({
          next: (data) => {

            this.addCategoryForm.reset();
            this.categoryService.newChanges.next(true);
            this.router.navigate(['category']);

            this.sharedService.successToast('Category updated succesfully');
          },
          error: (error) => {
            this.error = error.error['errors'];
            this.sharedService.errorToast(error.error['message'])
          }
        })
      }else{

        this.categoryService.addCategory(this.addCategoryForm.value).subscribe({
          next: (data) => {

            this.addCategoryForm.reset();
            this.categoryService.newChanges.next(true);
            this.sharedService.successToast('Category added succesfully');
          },
          error: (error) => {
            this.error = error.error['errors'];
            this.sharedService.errorToast(error.error['message'])
        }
        })
      }

  }

  private initForm(){
    let category_name ='';



    if(this.editMode){

       this.categoryService.getCategoryByIdApi(this.id).subscribe(
        (data : Category) => {

          this.addCategoryForm = new FormGroup ({
            'category_name' : new FormControl(data.category_name , Validators.required),

             });
        }
      );


    }

    this.addCategoryForm = new FormGroup ({
      'category_name' : new FormControl(category_name , Validators.required),
       });

  }

}
