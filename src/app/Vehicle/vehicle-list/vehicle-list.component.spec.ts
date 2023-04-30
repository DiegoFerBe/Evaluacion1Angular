/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehicleListComponent } from './vehicle-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../Vehicle';
import { faker } from '@faker-js/faker';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehicleListComponent ],
      providers: [VehicleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
    const vehicle = new Vehicle(
      Number(faker.random.numeric()),
      faker.vehicle.vehicle(),
      faker.vehicle.manufacturer(),
      faker.vehicle.type(),
      Number(faker.random.numeric(1000)),
      Number(faker.random.numeric(1000)),
      faker.vehicle.vrm(),
      faker.vehicle.vin(),
    );
    component.vehicles.push(vehicle);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 rows for vehicles an a header table', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
  });

  it('should thead', () => {
    expect(debug.queryAll(By.css('thead'))).toHaveSize(1)
  });

});
