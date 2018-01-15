import { Component, OnInit } from '@angular/core';
import {AppRoutes} from '../../../app-routing.module';


@Component({
  selector: 'vf-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public appRoutes = AppRoutes;
  constructor() { }

  ngOnInit() {
  }

}
