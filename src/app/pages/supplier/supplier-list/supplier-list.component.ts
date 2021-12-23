import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { SupplierService } from '../supplier.service';
import Swal from 'sweetalert2' ;

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

  suppliers : any;
  page = 1 ;
  limit = 5;
  skip : any;
  totalItems;
  constructor(private supplierService : SupplierService,
              private sharedSercice : SharedService) { }

  ngOnInit(): void {
    this.getSupplierData();

  }

  getSupplierData(){
        if(this.page == 1){
          this.skip = 0;
        }else{
          this.skip = (this.page-1 ) * this.limit;
        }
        let requestObj = {
          'limit' : this.limit,
          'skip' :this.skip
        }
            this.supplierService.getAllSuppliers(requestObj).subscribe({
          next: (res : any) => {

              this.suppliers = Object.keys(res.data).length > 0 ? Object.values(res.data) : null;
              this.totalItems = res.total;

          },
          error: (error) => console.log(error)
      });
  }

  deleteSupplier(id){

    Swal.fire({
      title: '<h3>Do you want to delete Supplier ?</h3>',
      icon: 'question',
      iconColor:"#fec9bd80",
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {

      if (result.isConfirmed) {
        this.supplierService.deleteSupplier(id).subscribe({
          next: result => {
            Swal.fire('Supplier deleted succesfully', '', 'success')
            this.ngOnInit();
          },
          error: error => {
            // this.sharedSercice.errorToast('fail to delete the supplier');
            Swal.fire('fail to delete the supplier', '', 'success')
          }
        });

      }
    })








  }

  delete(id){

  }
}
