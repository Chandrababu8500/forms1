import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value:string) {
    let reverse=value.split("").reverse().join('');
    return reverse;
  }

}
