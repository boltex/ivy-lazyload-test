import {
  NgModule
  // ComponentFactoryResolver,
  // ComponentFactory
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { LazyComponent } from "./lazy.component";
import { OcxService } from "../core/testservice.service";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, NgSelectModule, FormsModule, ReactiveFormsModule],
  providers: [OcxService],
  declarations: [LazyComponent],
  exports: [LazyComponent]
})
export class LazyModule {
  // constructor(private resolver: ComponentFactoryResolver) {
  constructor() {
    console.log("lazy loaded: 🔥");
  }

  static getMyComponent() {
    return LazyComponent;
  }

  // public resolveLazyComponentFactory(): ComponentFactory<LazyComponent> {
  //   return this.resolver.resolveComponentFactory(LazyComponent);
  // }
}
