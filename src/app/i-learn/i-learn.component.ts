import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'i-learn-component',
  templateUrl: './i-learn.component.html',
  styleUrls: ['./i-learn.component.css'],
})
export class ILearnComponent {
  panelOpenState: boolean = false;
}
