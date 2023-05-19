import { Component } from '@angular/core';
import * as customEditor from './build/ckeditor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular';
  public Editor:any = customEditor;
}
