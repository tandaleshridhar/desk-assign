import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}

  searchData(event) {
    this.dataService.emitFind(event.target.value);
  }
}
