import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsPageComponent implements OnInit {

  ngOnInit(): void {

  }
}
