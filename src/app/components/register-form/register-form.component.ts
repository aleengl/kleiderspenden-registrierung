import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-register-form',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  pickupAddress = '';
  studio = '';
  skill = '';
  selectedOption = '';
  skills = ['Skill 1', 'Skill 2', 'Skill 3'];
  radioOptions = [
    {
      id: 'option1',
      value: 'Übergabe an der Geschäftstelle',
      label: 'Übergabe an der Geschäftstelle'
    },
    {
      id: 'option2',
      value: 'Abholung',
      label: 'Abholung'
    }
  ];
}
