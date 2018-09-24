import { MyserviceService } from './../myservice.service';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.css'],
  providers : [MyserviceService]
})
export class Input1Component implements OnChanges {
  rec_articles: any;
  @Input() sourceId: string;

  constructor(private service: MyserviceService) {
  }

ngOnChanges() {
this.getTopHeadlines(this.sourceId);
}

getTopHeadlines(sourceId: string) {
  this.service.getTopHeadlines(sourceId).subscribe((data) => {
    this.rec_articles = data.articles;
  });
}

}
