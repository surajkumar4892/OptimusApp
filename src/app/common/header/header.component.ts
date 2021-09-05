import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() pageTitle:string=''
  @Input() headcolor:string=''
  constructor(public router:Router) { }

  ngOnInit() {}

  public testClick(){
    this.router.navigate(['login']);
  }

}
