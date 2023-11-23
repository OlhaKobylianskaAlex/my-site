import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencePageComponent implements OnInit {

  ngOnInit(): void {

  }
}
