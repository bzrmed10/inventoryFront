import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitWord'
})
export class LimitWordPipe implements PipeTransform {

  transform(value: any, ...args: number[]): any {

    if(value){
      if(value.length < args) return value;
      else{
        return value.slice(0,args)+"...";
      }
  }
}

}
