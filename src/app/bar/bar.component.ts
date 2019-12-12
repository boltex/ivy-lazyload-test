import {
  Component,
  OnInit,
  AfterViewInit,
  Injector,
  OnDestroy
} from "@angular/core";
import { MyService } from "../core/test-service.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-bar",
  templateUrl: "./bar.component.html",
  styleUrls: ["./bar.component.scss"],
  providers: [MyService]
})
export class BarComponent implements OnInit, AfterViewInit, OnDestroy {
  protected myService: MyService;

  get count(): number {
    return this.myService.getCount();
  }

  public heroForm: FormGroup;
  public isCitiesControlVisible = true;
  public cities: any[] = [
    { id: 1, name: "Vilnius" },
    { id: 2, name: "Kaunas" },
    { id: 3, name: "Paris (Disabled)", disabled: true },
    { id: 4, name: "Kiev" }
  ];

  constructor(injector: Injector, private fb: FormBuilder) {
    console.log("component constructor running!");
    this.myService = injector.get(MyService);
  }

  public testMe(): void {
    // Test the individually loaded service
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

  public ngOnDestroy(): void {
    console.log("Destroyed!!!!");
  }
}
