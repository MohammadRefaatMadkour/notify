import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.page.html',
  styleUrls: ['./controls.page.scss'],
})
export class ControlsPage implements OnInit {

  Color: string;
  newHospitalName: string;

  constructor() { }

  ngOnInit() {
  }

  selectedValue(event){
    this.Color = event.target.value;
    console.log("Selected Item: ", this.Color); 
  }

  newHospital(event){
    this.newHospitalName = event.target.value;
    console.log("New Hospital: ", this.newHospitalName);
  }

  save(){
    console.log(this.Color ,',', this.newHospitalName);
  }

}
