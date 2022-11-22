import { Injectable } from '@angular/core';
import { County } from './county';
import { State } from './state';

@Injectable()
export class SelectService {
  stateId!: number;
  
  getStates(): State[] {
    return [
     new State(1, 'PA' ),
     new State(2, 'FL' ),
    ];
  }

  getCounties(): County[] {
    return [
      new County(1,1,'ALLEGHENY'),
      new County(2,1,'WASHINGTON'),
      new County(5,1,'WESTMORELAND'),
      new County(3,2,'BROWARD'),
      new County(4,2,'PALM BEACH')
    ]
  }

  filterCounties() {
    if(!this.stateId) return null;
    return this.getCounties().filter((item) => item.stateId == this.stateId);
  }
}