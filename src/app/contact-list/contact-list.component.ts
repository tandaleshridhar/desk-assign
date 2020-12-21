import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: any;
  searchString: any;
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    if (this.dataService.getLocalStorage('Users') === null) {
      this.dataService.getUsers().subscribe((Users) => {
        this.contacts = Users;
        this.dataService.saveToLocalStorage('Users', JSON.stringify(Users));
      });
    } else {
      this.contacts = JSON.parse(localStorage.getItem('Users'));
    }
    this.dataService.FindSearch.subscribe((res) => (this.searchString = res));
  }
}
