import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
})
export class CreateContactComponent implements OnInit {
  contact: { id; name; description; email } = {
    id: null,
    name: '',
    description: '',
    email: '',
  };
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}

  createContact() {
    this.dataService.addContact(this.contact);
    this.contact = { id: null, name: '', description: '', email: '' };
  }
}
