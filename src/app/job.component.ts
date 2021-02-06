import { Component, Input } from "@angular/core";

@Component({
  template: `
    <div class="job-ad">
      <div>job Component</div>
      <h4>{{ data.headline }}</h4>

      {{ data.body }}
    </div>
  `
})
export class HeroJobAdComponent {
  @Input() data: any;
}
