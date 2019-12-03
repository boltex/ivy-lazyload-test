import {
  Component,
  ViewChild,
  ViewContainerRef,
  ɵcreateInjector as createInjector,
  Injector
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild("testOutlet", { read: ViewContainerRef, static: true })
  testOutlet: ViewContainerRef | undefined;

  constructor(private injector: Injector) {}

  onLazy() {
    import("./lazy/lazy.module").then(({ LazyModule }) => {
      const injector = createInjector(LazyModule, this.injector);
      const lazyModule = injector.get(LazyModule);
      console.log("lazyModule", lazyModule);
      const componentFactory = lazyModule.resolveLazyComponentFactory();
      const componentRef = this.testOutlet.createComponent(componentFactory);
      componentRef.changeDetectorRef.markForCheck();
    });
  }
}
