import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyserviceService {

  constructor(private http: HttpClient) {  }

  domain = 'https://newsapi.org/v2/';
  api_key = 'apiKey=300e401e143940bc91c1d344186b36ea';


getSources(): any {
  const sources = this.domain + 'sources?' + this.api_key ;
  return this.http.get(sources);
}


getTopHeadlines(source_id: string): any {
  const topheadlines = this.domain + 'top-headlines?sources=' + source_id + '&' + this.api_key;
  return this.http.get(topheadlines);

}


}
