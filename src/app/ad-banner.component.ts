import {
  Component,
  ComponentFactoryResolver,
  Input,
  Type,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

import { HeroJobAdComponent } from "./job.component";
import { HeroProfileComponent } from "./profile.component";

@Component({
  selector: "app-ad-banner",
  template: `
    <div>
      this is ad banner !!
      <div #adHost></div>
    </div>
  `
})
export class AdBannerComponent {
  @Input() ads;
  @ViewChild("adHost", { read: ViewContainerRef, static: true }) adHost;
  ad;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  // ngOnInit() {
  //   console.log(this.ads[0]);
  // }

  ngOnInit() {
    this.ad = new AdItem(HeroJobAdComponent, this.ads[0].data);
    console.log(this.ad);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.ad.component
    );
    // console.log(componentFactory);
    // const viewContainerRef = this.adHost.viewContainerRef;

    let componentRef = this.viewContainerRef.createComponent<any>(
      componentFactory
    );
    componentRef.instance.data = this.ad.data;
  }
}

export class AdItem {
  constructor(public component: Type<any>, public data: any) {}
}
