import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  capturedPhoto;

  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date()
  }

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  }

  minDate = new Date().toISOString();

  @ViewChild(CalendarComponent, {static: false}) myCal: CalendarComponent;

  constructor(private camera: Camera) { }

  ngOnInit() {
    this.resetEvent();
  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime:  new Date().toISOString(),
      allDay: false
    }
  }

  today(){
    this.calendar.currentDate = new Date();
    console.log("Today: ", this.calendar.currentDate);
  }

  onEventSelected(event){
    console.log('EventSelected: ', event);
  }

  onViewTitleChanged(event){}

  onTimeSelected(event){
    console.log("Time Selected: ", event.selectedTime);
  }

  async capturePhoto(){
    var options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    const photoData = await this.camera.getPicture(options);
    this.capturedPhoto = 'data:image/jpeg;base64,' + photoData;
    console.log("Current: ", this.capturePhoto);
  }

}
