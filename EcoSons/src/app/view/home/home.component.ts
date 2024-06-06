import { Component } from '@angular/core';
import {HeaderComponent} from '../../template/header/header.component';
import {FooterComponent} from '../../template/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
