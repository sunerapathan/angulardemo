import { MyserviceService } from './../myservice.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl:  './input.component.html',
  providers: [ MyserviceService ]
})
export class InputComponent implements OnInit {
  response: any;
  source_id: string;
  constructor(private demoservice: MyserviceService) {
  }
ngOnInit() {
    this.showConfig();
}
  showConfig() {
    this.demoservice.getSources().subscribe((data) => {
        this.response = data.sources;
    });
  }
  oncardClick(id: string) {
    this.source_id = id;
  }
  onLinkClick(url: string) {
  }
}
