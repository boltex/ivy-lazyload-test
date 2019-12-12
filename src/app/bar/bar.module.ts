import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BarComponent } from "./bar.component";
import { MyService } from "../core/test-service.service";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, NgSelectModule, FormsModule, ReactiveFormsModule],
  providers: [MyService],
  declarations: [BarComponent],
  bootstrap: [BarComponent]
})
export class BarModule { }
