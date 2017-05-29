import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from './contact';
import 'rxjs/add/operator/map';




@Injectable()
export class ContactsService {

  constructor(private http:Http) { }
  //retrieving ContactService

  getContacts(){
    return this.http.get('http://localhost:3000/api/contact')
               .map(res => res.json());
  }

  //add contact method
  addContact(newContact){
    var headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/api/contact',newContact,{headers:headers})
      .map(res => res.json());
  }
 //delete contact method
  deleteContact(id){
    return this.http.delete('http://localhost:3000/api/contact/'+id)
    .map(res => res.json());
  }
}
