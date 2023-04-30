import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../Vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];
  quantity: any[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe((data) => {
      this.vehicles = data;
      this.countVehiclesByBrand(this.vehicles);
    }
      );
    }



  countVehiclesByBrand(vehicles:Vehicle[]){
    const brands:string[]= vehicles.map((vehicle) => {
      return vehicle.marca;
    });
    let uniqueBrands = new Set(brands);
    uniqueBrands.forEach((brand) => {
      const count = this.vehicles.reduce((acc, vehicle) => {
        if (vehicle.marca === brand) {
          acc++;
        }
        return acc;
      }, 0);
      this.quantity.push({ brand, count});
    }
    );

  }
}
