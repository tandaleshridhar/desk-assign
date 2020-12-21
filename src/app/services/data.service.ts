import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public find: Subject<string> = new BehaviorSubject<string>(null);
  private readonly baseUrl: string = 'http://jsonplaceholder.typicode.com/';

  emitFind(value: string) {
    this.find.next(value);
  }

  get FindSearch(): BehaviorSubject<any> {
    return this.find as BehaviorSubject<any>;
  }
  constructor(public http: HttpClient) {}

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

  public getPosts() {
    return this.http.get(this.baseUrl + 'posts');
  }

  public getComments() {
    return this.http.get(this.baseUrl + 'comments');
  }

  public getUsers() {
    return this.http.get(this.baseUrl + 'users');
  }

  public getPhotos() {
    return this.http.get(this.baseUrl + 'photos');
  }

  public getTodos() {
    return this.http.get(this.baseUrl + 'todos');
  }

  public saveToLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public getLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }
}
