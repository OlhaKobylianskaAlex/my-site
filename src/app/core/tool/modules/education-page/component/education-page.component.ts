import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationPageComponent implements OnInit {

  ngOnInit(): void {

  }
}
