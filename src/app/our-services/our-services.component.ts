import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent implements OnInit {
  contacts: any;
  searchString: any;
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    if (this.dataService.getLocalStorage('Todos') === null) {
      this.dataService.getTodos().subscribe((Todos) => {
        this.contacts = Todos;
        this.dataService.saveToLocalStorage('Todos', JSON.stringify(Todos));
      });
    } else {
      this.contacts = JSON.parse(localStorage.getItem('Todos'));
    }
    this.dataService.FindSearch.subscribe((res) => (this.searchString = res));
  }
}
