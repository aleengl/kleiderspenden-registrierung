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
  clothingType = '';
  crisisArea = '';
  selectedOption = '';
  radioOptions = [
    {
      id: 'option1',
      value: 'Übergabe an der Geschäftsstelle',
      label: 'Übergabe an der Geschäftsstelle'
    },
    {
      id: 'option2',
      value: 'Abholung',
      label: 'Abholung'
    }
  ];
  clothingTypes = ['T-Shirt', 'Hose', 'Jacke', 'Pullover', 'Mütze', 'Schuhe', 'Socken'];
  crisisAreas = ['Europa', 'Afrika', 'Asien', 'Südamerika', 'Nordamerika', 'Australien'];
}
