import { Component } from '@angular/core';
import { FooterComponent } from "../../common/components/footer.component";
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@Component({
  selector: 'app-admin',
  imports: [FooterComponent,
    SidenavComponent,
    MatToolbar,
    MatIcon,
    NgIf,
    FormsModule,
    ToolbarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
