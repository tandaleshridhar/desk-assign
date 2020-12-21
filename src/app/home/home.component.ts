import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  contacts: any;
  searchString: any;
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    if (this.dataService.getLocalStorage('Posts') === null) {
      this.dataService.getPosts().subscribe((Posts) => {
        this.contacts = Posts;
        this.dataService.saveToLocalStorage('Posts', JSON.stringify(Posts));
      });
    } else {
      this.contacts = JSON.parse(localStorage.getItem('Posts'));
    }
    // this.searchString = this.dataService.find;
    this.dataService.FindSearch.subscribe((res) => (this.searchString = res));
  }
}
