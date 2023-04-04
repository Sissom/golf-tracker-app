import { Component, OnInit } from '@angular/core';
import { GolfApiService } from '../golf-rails-api.service';

@Component({
  selector: 'app-golfer-list',
  templateUrl: './golfer-list.component.html',
  styleUrls: ['./golfer-list.component.css']
})
export class GolferListComponent implements OnInit {

  constructor(private golfApiService: GolfApiService) {
    this.golfers = []
  }

  golfers: any[]

  ngOnInit() {
    this.golfApiService.getAllGolfers().subscribe(() => {
      this.golfers
    });
  }
}
