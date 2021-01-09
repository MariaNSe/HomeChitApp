import {
  ChangeDetectorRef,
  Component,
  OnInit,
  Input,
  ViewChild,
} from '@angular/core'
import { switchMap } from 'rxjs/operators'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { MediaMatcher } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material'

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  @Input() isLoggedIn = false
  mobileQuery: MediaQueryList
  @ViewChild('sidenav') sidenav: MatSidenav

  reason = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
    // TODO private service: UserServices
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 990px)')
  }

  ngOnInit() {
    // TODO after UserServices creation
    // this.user$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.geUser(params.get('id')))
    // );
  }

  close(reason: string) {
    this.reason = reason
    this.sidenav.close()
  }
}
