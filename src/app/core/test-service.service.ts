import { Injectable } from "@angular/core";

// * Test for service individually loaded in each component instance
// * NOTE: NOT providedIn: "root"

@Injectable()
export class MyService {

  private count = 0;

  constructor() {
    console.log("In test service constructor");
  }

  public getCount(): number {
    return this.count;
  }

  public test(): void {
    console.log("TESTING CALLED!");
    this.count++;
  }
}
