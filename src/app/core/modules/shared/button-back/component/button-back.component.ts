import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-back',
  templateUrl: './button-back.component.html',
  styleUrls: ['./button-back.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonBackComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  public goBack() {
    this.router.navigate(['./'])
  }
}
