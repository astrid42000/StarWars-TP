import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initiales'
})
export class InitialesPipe implements PipeTransform {

  transform(value:string,...args: any[]) : any{
    let nameInit= value.split(' ')
   return nameInit [0][0]+' '+nameInit[1][0];
  }

}
