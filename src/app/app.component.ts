import {
  Component,
  ViewChild,
  ViewContainerRef,
  ɵcreateInjector as createInjector,
  Injector,
  // ComponentFactoryResolver,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @ViewChild("testOutlet", { read: ViewContainerRef, static: true })
  testOutlet: ViewContainerRef | undefined;

  constructor(
    // private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  onLazy() {
    import("./lazy/lazy.module").then(({ LazyModule }) => {
      // import("./lazy/lazy.component").then(({ LazyComponent }) => {
      /* const componentFactory = this.resolver.resolveComponentFactory(
        LazyComponent
      );
      const componentRef = this.testOutlet.createComponent(
        componentFactory,
        0,
        this.injector
      );
      componentRef.changeDetectorRef.markForCheck(); */

      const injector = createInjector(LazyModule, this.injector);
      const lazyModule = injector.get(LazyModule);
      const componentFactory = lazyModule.resolveLazyComponentFactory();
      const componentRef = this.testOutlet.createComponent(componentFactory);
      componentRef.changeDetectorRef.markForCheck();
    });
  }
}
