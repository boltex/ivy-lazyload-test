import {
  NgModule
  // ComponentFactoryResolver,
  // ComponentFactory
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { LazyComponent } from "./lazy.component";

@NgModule({
  imports: [CommonModule],
  declarations: [LazyComponent]
})
export class LazyModule {
  // constructor(private resolver: ComponentFactoryResolver) {
  constructor() {
    console.log("lazy loaded: 🔥");
  }

  // public resolveLazyComponentFactory(): ComponentFactory<LazyComponent> {
  //   return this.resolver.resolveComponentFactory(LazyComponent);
  // }
}
