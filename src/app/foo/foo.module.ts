import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooComponent } from "./foo.component";
import { OcxService } from "../core/testservice.service";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, NgSelectModule, FormsModule, ReactiveFormsModule],
  providers: [OcxService],
  declarations: [FooComponent],
  bootstrap: [FooComponent]
})
export class FooModule {}
