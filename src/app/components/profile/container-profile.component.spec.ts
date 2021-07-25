import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ContainerProfileComponent } from './container-profile.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { of } from 'rxjs';

fdescribe('ContainerProfileComponent', () => {
  let component: ContainerProfileComponent;
  let fixture: ComponentFixture<ContainerProfileComponent>;

  beforeEach(async () => {
    const getUsersSpy =  jasmine.createSpyObj<DataService>(['getAllUsers']);
    getUsersSpy.getAllUsers.and.returnValue(of([]))

    await TestBed.configureTestingModule({
      declarations: [ ContainerProfileComponent ],
      imports:[],
      providers: [
        {provide: DataService, useValue: getUsersSpy }  
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
