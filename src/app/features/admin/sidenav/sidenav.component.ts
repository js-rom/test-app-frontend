import { Component } from '@angular/core';
import { MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavContainer, MatSidenav, MatNavList, MatIcon, MatToolbar, MatSidenavContent, NgIf],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

}
