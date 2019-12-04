import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-lazy",
  templateUrl: "./lazy.component.html",
  styleUrls: ["./lazy.component.scss"]
})
export class LazyComponent implements OnInit, AfterViewInit {
  constructor() {
    console.log("component constructor running!");
  }

  public ngOnInit(): void {
    console.log("on init");
  }

  public ngAfterViewInit(): void {
    console.log("after init");
  }
}
