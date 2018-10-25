import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'screamingBoolDisplay'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(value: boolean, args?: any): any {
    return value ? "YES!" : "NO!";
  }

}
