import { Component } from '@angular/core';
import { FooterComponent } from "../../common/components/footer.component";
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@Component({
  selector: 'app-admin',
  imports: [FooterComponent,
    SidenavComponent,
    FormsModule,
    ToolbarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
