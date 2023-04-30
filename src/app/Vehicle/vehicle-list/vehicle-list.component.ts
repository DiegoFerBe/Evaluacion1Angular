import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../Vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles:Vehicle[] = [];

  constructor(private vehicleService:VehicleService) { }

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe(
      (data) => {
        this.vehicles = data;
      }
    );
  }

}
