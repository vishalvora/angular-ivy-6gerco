import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  data = [
    {
      component: "HeroJobAdComponent",
      data: { headline: "job head line", body: "job body" }
    },
    {
      component: "HeroProfileComponent",
      data: { name: "vishal", bio: "mybio" }
    }
  ];
}
