import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AdBannerComponent } from "./ad-banner.component";
import { HeroJobAdComponent } from "./job.component";
import { HeroProfileComponent } from "./profile.component";
import { AdDirective } from "./ad.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, AdBannerComponent, AdDirective],
  bootstrap: [AppComponent],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent]
})
export class AppModule {}
