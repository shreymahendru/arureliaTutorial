
// import { eventService } from 'services/event-data-service';
import { dataRepository } from 'services/dataRepository-service';
import { inject, Lazy, All } from 'aurelia-framework';
import { ImLazy } from 'services/lazy-service';
// import router for dynamic generation of event detail route
import { Router } from 'aurelia-router';


//All of :init all the service named with the same name
//have to  put in the the container with the same name 
//look at main.js


@inject(dataRepository, Lazy.of(ImLazy), "SuperPlugin" , Router) //default mode is singleton 
export class events{
    constructor(dataRepository, lazyService, plugins, Router) {
        // this._eventService = eventService;
        // this.events = this._eventService.getEvents();
        this._router = Router;
        this._eventService = dataRepository;
        this._eventService.getEvents().then((events) => {
            this.events = events;
            this.events.forEach(item => { 
                //generating the route dynamically
                item.detailUrl = this._router.generate('eventDetail', { eventId: item.id });  // this is sick!!!!!
            });
        });
        this._lazyService = lazyService;
        this._plugins = plugins; 
        
    }
    
    
    //Lazy.of deffer the construction of the object until it' actually used
    createAndUseLazy() {
        console.log("about ot do lazy");
        this._lazyService().doStuff();
        this._plugins.forEach((p) => p.doStuff())
    }
    
    goToDiscussion() {
        // programmatically navigate to the route 
        this._router.navigate('/discussion');
    }
    
    logEvent(event) {
        console.log(event);
    }
}