import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from '../model/movie';


@Pipe({
  name: 'movieArray'
})
export class FilterPipe implements PipeTransform {

  transform(movieArray: IMovie[], searchdata: string) {

    if (searchdata?.length > 0) {
      return movieArray.filter((s: IMovie) => {
        return s.title?.toLowerCase().includes(searchdata?.toLowerCase())
      })
    } else {
      return movieArray;
    }

  }


}