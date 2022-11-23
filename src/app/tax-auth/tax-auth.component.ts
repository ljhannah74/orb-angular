import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectService } from '../select-service';

@Component({
  selector: 'app-tax-auth',
  templateUrl: './tax-auth.component.html',
  styleUrls: ['./tax-auth.component.css']
})
export class TaxAuthComponent {
  @Input() searchForm!: FormGroup;

  constructor(private selectService: SelectService) { }
}
