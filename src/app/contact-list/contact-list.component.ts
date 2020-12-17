import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: any;
  selectedContact: Object;
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.contacts = this.dataService.getContacts();
  }

  public selectContact(contact) {
    this.selectedContact = contact;
  }
}
