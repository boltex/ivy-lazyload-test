import { Component, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild("testOutlet", { read: ViewContainerRef, static: true })
  testOutlet: ViewContainerRef | undefined;

  public pathsArray = [];

  constructor() {}

  removeLast() {
    if (this.pathsArray.length) {
      this.pathsArray.pop();
    }
  }

  onLazy1() {
    this.pathsArray.push("src/app/lazy/lazy.module#LazyModule");
  }
  onLazy2() {
    this.pathsArray.push("src/app/foo/foo.module#FooModule");
  }
}
