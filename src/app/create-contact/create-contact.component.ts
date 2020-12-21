import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
})
export class CreateContactComponent implements OnInit {
  contacts: any;
  searchString: any;
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    if (this.dataService.getLocalStorage('Comments') === null) {
      this.dataService.getComments().subscribe((Comments) => {
        this.contacts = Comments;
        this.dataService.saveToLocalStorage(
          'Comments',
          JSON.stringify(Comments)
        );
      });
    } else {
      this.contacts = JSON.parse(localStorage.getItem('Comments'));
    }
    this.dataService.FindSearch.subscribe((res) => (this.searchString = res));
  }
}
