import {Component, OnInit} from '@angular/core';
import { EventService } from './shared/event.service';
import {ToastrService} from '../common/toastr.service'

@Component({
    selector : 'event-list',
    template: `
    <div>
    <h1>Upcoming Events</h1>
    <hr>
    <div class ="row">
        <div *ngFor ="let event of events" class = "col-md-5">
            <event-thumbnail (click)="getThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
    </div>
    </div>
    `
})

export class EventListComponent implements OnInit{
    events:any[]
   constructor (private eventService : EventService, private toastr : ToastrService){

   }
   ngOnInit(){
    this.events = this.eventService.getEvents();
   }

   getThumbnailClick(evName){
    this.toastr.info(evName);
    
   }
    
}