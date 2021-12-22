import { Injectable } from '@angular/core';
import Swal from 'sweetalert2' ;

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });
  constructor() { }


  successToast(msg : string){
    this.toast.fire({
      title: msg,
      icon: 'success'

    });
  }
  errorToast(msg : string){
    this.toast.fire({
      title: msg ,
      icon: 'error'

    });
  }
}
