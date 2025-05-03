import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  imports: [MatIcon, MatToolbar, NgIf],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  title : string = 'TPV';
  username : string = "jesus";

  login(): void {
    // TODO
  }

  logout(): void {
    // TODO
  }

  isAuthenticated(): boolean { //TODO
    return true;
  }
}
