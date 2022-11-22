import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectService } from '../select-service';
import { State } from '../state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  searchForm!: FormGroup;

  constructor(private selectService: SelectService) {}

ngOnInit() {
  this.searchForm = new FormGroup({
    stateId: new FormControl(''),
    countyId: new FormControl(''),
  })
  this.searchForm.setValue({
    stateId: 0,
    countyId: 0,
  })
}
}
