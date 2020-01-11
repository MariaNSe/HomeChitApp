import {Component, OnInit} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
    //TODO private service: UserServices
  ) {
  }

  ngOnInit() {
    // TODO after UserServices creation
    // this.user$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.geUser(params.get('id')))
    // );
  }

}
