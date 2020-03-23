import { Pipe, PipeTransform } from '@angular/core';
import { Repository } from 'src/app/types/repository/repository';

@Pipe({
  name: 'sortByStars'
})
export class SortByStarsPipe implements PipeTransform {

  transform(repos: Repository[]): Repository[] {
    return repos ?
    repos.sort((a: Repository, b: Repository): number => {
      return b.stargazers_count - a.stargazers_count;
    })
    :
    repos;
  }

}
