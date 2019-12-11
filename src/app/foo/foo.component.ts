import { Component, OnInit, AfterViewInit, Injector } from "@angular/core";
import { OcxService } from "../core/testservice.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-foo",
  templateUrl: "./foo.component.html",
  styleUrls: ["./foo.component.scss"],
  providers: [OcxService]
})
export class FooComponent implements OnInit, AfterViewInit {
  protected myService: OcxService;
  public count = 0;

  heroForm: FormGroup;
  isCitiesControlVisible = true;
  cities: any[] = [
    { id: 1, name: "Valleyfield" },
    { id: 2, name: "Montreal" },
    { id: 3, name: "Patate (Disabled)", disabled: true },
    { id: 4, name: "Bob" }
  ];

  constructor(injector: Injector, private fb: FormBuilder) {
    console.log("component constructor running!");
    this.myService = injector.get(OcxService);
  }

  public testme(): void {
    // Test the individualy loaded service
    this.myService.test();
    this.count = this.count + 1;
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
