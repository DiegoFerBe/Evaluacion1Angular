import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './Vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [VehicleListComponent],
  declarations: [VehicleComponent,
  VehicleListComponent]
})
export class VehicleModule { }
