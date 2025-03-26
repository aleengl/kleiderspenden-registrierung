import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RegisterFormComponent} from '../register-form/register-form.component';

@Component({
  selector: 'app-content',
  imports: [
    NgOptimizedImage,
    RegisterFormComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
