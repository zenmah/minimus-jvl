import { Component, OnInit } from '@angular/core';
import { UiService } from '../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  darkMode: boolean;

  constructor(public router: Router,
    public ui: UiService) { }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });
  }

}
