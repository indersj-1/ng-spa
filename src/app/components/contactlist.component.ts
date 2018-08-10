import {Component} from '@angular/core';

//load services
import {Contact} from '../services/contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router'
import {Session} from '../services/globals';

@Component({
    selector: 'contact-list',    
    providers:[ContactService],
    templateUrl: './contactlist.html' 
})
export class ContactListComponent{
  authenticated:boolean;
  name:string | null;  
  public contacts:Contact[];
  public selected:any={};
  public showDetails:boolean=false;
  
  constructor(
      private _contactService:ContactService ,  private _router: Router){ }
  
 ngOnInit(){
     this.name=Session.username;   
     this.authenticated=Session.authenticated;
    if(this.authenticated){
        this._contactService.getContacts()
        .then( (cnts:any) => this.contacts=cnts)
    }else{
        this._router.navigate(['']);
    }
     
   }
 
  selectedContact(contact:Contact){
  	this.selected=contact.name;    
  	this.showDetails=true;    
  }
}