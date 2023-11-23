import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMePageComponent implements OnInit {

  ngOnInit(): void {

  }
}
