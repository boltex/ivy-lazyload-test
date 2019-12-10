import { Injectable } from "@angular/core";

// { providedIn: "root" }

@Injectable()
export class OcxService {
  constructor() {
    console.log("in testservice constructor");
  }

  public test(): void {
    console.log("TESTING CALLED!");
  }
}
