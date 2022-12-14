import { Component, Input, OnInit } from '@angular/core';
import { State } from '../state';
import { SelectService } from '../select-service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  @Input() searchForm!: FormGroup;
  states!: string[];

  constructor(private selectService: SelectService) {  }

  ngOnInit() {
    this.states = this.selectService.getStates();
  }

  onSelect(event: Event) {
    this.selectService.st = ((event.target as HTMLTextAreaElement).value);
  }

}
