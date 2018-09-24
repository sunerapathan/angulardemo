import { MyserviceService } from './myservice.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MyserviceService]
})
export class AppComponent  {
}
