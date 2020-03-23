import { Component, Input } from '@angular/core';
import { Repository } from 'src/app/types/repository/repository';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent {

  @Input()
  public repo: Repository;

}
