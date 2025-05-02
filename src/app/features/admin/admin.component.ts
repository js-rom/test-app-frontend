import { Component } from '@angular/core';
import { FooterComponent } from "../../common/components/footer.component";
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-admin',
  imports: [FooterComponent, RouterOutlet, MatToolbar, MatIcon, NgIf],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  title = 'TPV';
  username = "jesus";
  cartItemCount: number = 3;

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
