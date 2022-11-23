import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Orb } from '../orb';
import { SelectService } from '../select-service';
import { State } from '../state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  searchForm!: FormGroup;
  orb!: Orb;

  constructor(private selectService: SelectService) {}

ngOnInit() {
  this.searchForm = new FormGroup({
    state: new FormControl(''),
    county: new FormControl(''),
    taxAuthId: new FormControl(''),
    taxAuthTypeId: new FormControl(''),
  })
  this.searchForm.setValue({
    state: '',
    county: '',
    taxAuthId: 0,
    taxAuthTypeId: 0,
  })
}

  onSubmit() {
    this.orb = this.selectService.filterOrbs();
  }

  onReset(event: any) {
    this.searchForm.reset();
    this.orb = this.selectService.filterOrbs();
  }
}
