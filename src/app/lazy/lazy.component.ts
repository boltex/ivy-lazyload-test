import { Component, OnInit, AfterViewInit, Injector } from "@angular/core";
import { OcxService } from "../core/testservice.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-lazy",
  templateUrl: "./lazy.component.html",
  styleUrls: ["./lazy.component.scss"],
  providers: [OcxService]
})
export class LazyComponent implements OnInit, AfterViewInit {
  protected myService: OcxService;

  heroForm: FormGroup;
  isCitiesControlVisible = true;
  cities: any[] = [
    { id: 1, name: "Vilnius" },
    { id: 2, name: "Kaunas" },
    { id: 3, name: "Pavilnys (Disabled)", disabled: true },
    { id: 4, name: "Pabradė" }
  ];

  constructor(injector: Injector, private fb: FormBuilder) {
    console.log("component constructor running!");
    this.myService = injector.get(OcxService);
  }

  public testme(): void {
    console.log("called testme in lazy component, gonna call testservice now");
    this.myService.test();
  }
  public toggleCitiesControl() {
    this.isCitiesControlVisible = !this.isCitiesControlVisible;
  }

  public clearCities() {
    this.heroForm.get("selectedCitiesIds").patchValue([]);
  }

  public ngOnInit(): void {
    console.log("on init");
    this.heroForm = this.fb.group({
      selectedCitiesIds: []
    });
  }

  public ngAfterViewInit(): void {
    console.log("after init");
  }
}
