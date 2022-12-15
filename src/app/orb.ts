export class Orb {
    constructor( 
        public st: string, 
        public county: string, 
        public last_update: Date,
        public land_url: string, 
        public assessor_url: string,
        public tax_url: string) { }
  }