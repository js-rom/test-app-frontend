import { Component } from '@angular/core';
import { FooterComponent } from "../../common/components/footer.component";
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatNavList } from '@angular/material/list';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-admin',
  imports: [FooterComponent,
    RouterOutlet,
    MatToolbar,
    MatIcon,
    NgIf,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    FormsModule,
    MatNavList,
    RouterLink],
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
