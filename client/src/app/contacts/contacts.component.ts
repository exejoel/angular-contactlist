import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';
import {Contact} from '../contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  first_name:string;
  last_name:string;
  phone:string;

  constructor(private contactService: ContactsService) { }
//Think of an Observable as a stream of events published by some source. To listen for events in this stream, subscribe to the Observable. These subscriptions specify the actions to take when the web request
// produces a success event (with the hero data in the event payload) or a fail event (with the error in the payload).


  addContact(){
    const newContact ={
      first_name: this.first_name,
      last_name: this.last_name,
      phone:this.phone,
    }
    this.contactService.addContact(newContact)
      .subscribe(contact =>{
        this.contacts.push(contact);
        this.contactService.getContacts()
          .subscribe( contact =>
            this.contacts = contact);
      })
  }


  deleteContact(id:any){
    console.log("IN DELTE"+id);
    var contacts = this.contacts;
    this.contactService.deleteContact(id)
      .subscribe(data =>{
        if(data.n==1){ //delete operation was successfull
          for(var i=0;i <contacts.length;i++){
            if(contacts[i]._id == id){
              contacts.splice(i,1);
            }

          }
        }
      })

  }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe( contact =>
      this.contacts = contact);
  }

}
