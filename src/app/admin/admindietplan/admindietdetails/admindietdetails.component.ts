import { Component } from '@angular/core';

@Component({
  selector: 'app-admindietdetails',
  templateUrl: './admindietdetails.component.html',
  styleUrls: ['./admindietdetails.component.css']
})
export class AdmindietdetailsComponent {
  product = {
    name: '',
    details: '',
    nutrition: {
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  };

  onSubmit() {
    console.log(this.product);
    // Perform any additional processing here, such as saving the data to a database
  }
}

