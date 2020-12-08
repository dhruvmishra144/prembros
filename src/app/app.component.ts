import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
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

  item: Observable<Item>;
  constructor(private afs: AngularFirestore) {
  }


  ngOnInit() {
    this.afs.collection('serialNumber').valueChanges().subscribe(val =>{
      val.forEach(element =>{
        // this.sno = element['number'];
      });
      
    })
    
 }

  landscape($event){
    window.print();
    let num = Number(this.sno);
    num = num + 1;
  //  this.afs.collection('serialNumber').doc('data').update({
  //    number: num
  //  });
    
  }
  rotateToggle(){
    this.isRotate = !this.isRotate; 
    console.log(this.isRotate);
    
  }
}
