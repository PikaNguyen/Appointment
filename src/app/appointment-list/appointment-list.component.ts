import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {

  appointment : Appointment = {
    id: 1,
    title : "Petting cat",
    date : new Date(),
  }

  newAppointmentTitle = ""
  newAppointmentDate = new Date()

  appointments : Appointment[] = []

  addAppointment(){
    if( this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment : Appointment = {
        id : Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment)
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      console.log("length: "+this.appointments.length)
    }
  }

  deleteAppointment(index : number){
    this.appointments.splice(index, 1)
  }
}
