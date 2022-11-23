import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectService } from '../select-service';

@Component({
  selector: 'app-tax-auth-type',
  templateUrl: './tax-auth-type.component.html',
  styleUrls: ['./tax-auth-type.component.css']
})
export class TaxAuthTypeComponent {
@Input() searchForm!: FormGroup;
constructor(private selectService: SelectService) { }
}
