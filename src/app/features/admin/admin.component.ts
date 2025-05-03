import { Component } from '@angular/core';
import { FooterComponent } from "../../common/components/footer.component";
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';


@Component({
  selector: 'app-admin',
  imports: [FooterComponent,
    SidenavComponent,
    MatToolbar,
    MatIcon,
    NgIf,
    FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
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
