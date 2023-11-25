import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-block',
  templateUrl: './title-block.component.html',
  styleUrls: ['./title-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleBlockComponent implements OnInit {
  @Input() title: string = 'Information';

  constructor() { }

  ngOnInit(): void {

  }
}
