import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  content:"";
  constructor(http: HttpClient) {
  this.content=""

  }
updateMessage(event: any) {
  this.message = event.target.value;
}

envoyermsg(){
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    #this.content=this.valuemessage.value
    this.ACCESS_TOKEN=""
    this.http.post('https://graph.facebook.com/v22.0/page_id/feed', 'access_token='+this.ACCESS_TOKEN+'&message='+this.content, { headers: headers });
}

}
