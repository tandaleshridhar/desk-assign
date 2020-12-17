import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  contacts = [
    {
      id: 1,
      name: 'First name',
      description: 'This is first contact',
      email: 'first@contact.com',
    },
    {
      id: 2,
      name: 'Second name',
      description: 'This is second contact',
      email: 'second@contact.com',
    },
    {
      id: 3,
      name: 'Third name',
      description: 'This is third contact',
      email: 'third@contact.com',
    },
    {
      id: 4,
      name: 'Fourth name',
      description: 'This is fourth contact',
      email: 'fourth@contact.com',
    },
  ];

  public getContacts(): Array<{ id; name; description; email }> {
    return this.contacts;
  }

  public addContact(contact: { id; name; description; email }) {
    this.contacts.push(contact);
  }
}
