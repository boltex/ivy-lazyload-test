import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
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

  constructor(private resolver: ComponentFactoryResolver) {}

  onLazy() {
    import("./lazy/lazy.module").then(({ LazyModule }) => {
      const componentFromLazyModule = LazyModule.getComponent();
      const componentFactory = this.resolver.resolveComponentFactory(
        componentFromLazyModule
      );
      const componentRef = this.testOutlet.createComponent(componentFactory);
      // for event detection
      componentRef.changeDetectorRef.markForCheck();
    });
  }
}
