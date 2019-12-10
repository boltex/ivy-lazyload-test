import { Injectable } from "@angular/core";

// { providedIn: "root" }
// * test for service individualy loaded in each component instance (NOT providedIn: "root" )

@Injectable()
export class OcxService {
  constructor() {
    console.log("in testservice constructor");
  }

  public test(): void {
    console.log("TESTING CALLED!");
  }
}
