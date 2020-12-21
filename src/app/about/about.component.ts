import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  contacts: any;
  searchString: any;
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    if (this.dataService.getLocalStorage('Photos') === null) {
      this.dataService.getPhotos().subscribe((Photos) => {
        this.contacts = Photos;
        this.dataService.saveToLocalStorage('Photos', JSON.stringify(Photos));
      });
    } else {
      this.contacts = JSON.parse(localStorage.getItem('Photos'));
    }
    this.dataService.FindSearch.subscribe((res) => (this.searchString = res));
  }
}
