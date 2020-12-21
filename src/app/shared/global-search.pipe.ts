import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'gsearch',
})
export class GlobalSearch implements PipeTransform {
  result$;
  transform(value: any, searchKey: string) {
    this.result$ = value;
    if (searchKey) {
      this.result$ = value.map((element) => {
        for (let [_, value] of Object.entries(element)) {
          if (value.toString().includes(searchKey)) {
            return element;
          }
        }
      });
    }

    return this.result$;
  }
}
