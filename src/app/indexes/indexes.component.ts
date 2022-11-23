import { Component, Input } from '@angular/core';
import { Orb } from '../orb';
import { SelectService } from '../select-service';

@Component({
  selector: 'app-indexes',
  templateUrl: './indexes.component.html',
  styleUrls: ['./indexes.component.css']
})
export class IndexesComponent {
  @Input() orb!: Orb;

  constructor() {}

  ngOnInit() {
    
  }
}
