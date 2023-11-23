import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-home',
  templateUrl: './main-page-home.component.html',
  styleUrls: ['./main-page-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageHomeComponent implements OnInit {

  ngOnInit(): void {

  }
}
