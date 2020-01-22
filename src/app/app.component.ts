import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isRotate = false
  sno=""
  date1=""
  ms=""
  gstn1=""
  challan=""
  date2=""
  particular=""
  weight=""
  soldms=""
  gstn2=""
  invoice=""
  date3=""
  address1=""
  address2=""
  line1_1=""
  line1_2=""
  line2_1=""
  line2_2=""
  line3_1=""
  line3_2=""

  landscape($event){
    window.print();
  }
  rotateToggle(){
    this.isRotate = !this.isRotate; 
    console.log(this.isRotate);
    
  }
}
