import { Component, Input } from '@angular/core';
import { County } from '../county';
import { SelectService } from '../select-service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-county',
  templateUrl: './county.component.html',
  styleUrls: ['./county.component.css']
})
export class CountyComponent {
  @Input() searchForm!: FormGroup;

  get counties() {
     return this.selectService.filterCounties();
  };

  constructor(private selectService: SelectService) { }
}
