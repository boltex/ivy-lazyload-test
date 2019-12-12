import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HeroLoaderModule } from "@herodevs/hero-loader";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  // * if FormsModule and ReactiveFormsModule not present here :
  // * we get "No Provider for FormBuilder" in the lazyComponent component
  imports: [HeroLoaderModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
