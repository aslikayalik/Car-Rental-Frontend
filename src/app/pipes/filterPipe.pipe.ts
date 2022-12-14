import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/Car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filterText: string): Car[] {
    filterText = filterText?filterText.toLocaleLowerCase():"null"
    return filterText?value.filter((c:Car)=>c.CarName.toLocaleLowerCase().indexOf(filterText)!==-1):value; 
  }

}
