import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }
  sidebarshow: string;

  ngOnInit() {
    console.log(window.location.pathname);
    if (window.location.pathname != '/login') {
      this.sidebarshow = "sidebar-menu";
    } else {
      this.sidebarshow = "hiddendiv";
    }
  }

}
