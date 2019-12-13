import { Component, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public pathsArray = [];

  constructor() { }

  removeLast() {
    if (this.pathsArray.length) {
      this.pathsArray.pop();
    }
  }

  onLazy1() {
    this.pathsArray.push("src/app/foo/foo.module#FooModule");
  }
  onLazy2() {
    this.pathsArray.push("src/app/bar/bar.module#BarModule");
  }
}
