import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  
  ngOnInit(): void {
    console.log("Got loading ........")
    let savedAppointments = localStorage.getItem("appointments")
    if (savedAppointments){
      this.appointments = JSON.parse(savedAppointments)
    }
  }


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

      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index : number){
    this.appointments.splice(index, 1)
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }
}
