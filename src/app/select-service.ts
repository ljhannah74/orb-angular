import { Injectable } from '@angular/core';
import { ObservedValueOf } from 'rxjs';
import { County } from './county';
import { Orb } from './orb';
import { State } from './state';

@Injectable()
export class SelectService {
  st!: string;
  county!: string;
  excelData!: string;
 
  
  getStates(): string[] {
    var states = [...new Set(this.getOrbs().map(t=>t.st))];
    return states;
  }

  getCounties(): string[] {
    var counties = this.getOrbs().map(t=>t.county);
    return counties;
  }

  getOrbs(): Orb[] {
    return [
      new Orb('PA','WASHINGTON', new Date("2022-12-12"), 'http://www.landex.com', 'http://tyler.washcopa.org/pt/Search/Disclaimer.aspx?FromUrl=../search/commonsearch.aspx?mode=owner', ''),
      new Orb('PA','ALLEGHENY', new Date("2022-12-12"), 'https://pa_allegheny.uslandrecords.com/palr/', 'http://www2.county.allegheny.pa.us/RealEstate/search.aspx', ''),
      new Orb('FL','PALM BEACH', new Date("2022-12-12"), 'https://erec.mypalmbeachclerk.com/', 'http://www.pbcgov.com/papa/', 'https://pbctax.manatron.com/Tabs/PropertyTax.aspx')
    ]
  }

  filterCounties() {
    if(!this.st) return null;
    var filteredCounties = this.getOrbs().filter((item) => item.st == this.st).map(item => item.county);
    filteredCounties.sort();
    return filteredCounties;
  }

  filterOrbs(): Orb {
    var orb = this.getOrbs().find((item) => item.st == this.st && item.county == this.county) as Orb;

    return orb;
  }
}