import { eventsData } from 'services/event-data-service';
import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';

@inject(HttpClient, 'apiRoot')
export class dataRepository {
    constructor(httpClient, apiRoot) {
        this.httpClient = httpClient;
        this._eventsData = [];
        this.apiRoot = apiRoot
    }
    
    getEvents() {
        var promise = new Promise((resolve, reject) => {
            if (this._eventsData.length ==0) {
                // this._eventsData = eventsData;
                this.httpClient.get(this.apiRoot + "/events").then(result => {
                    this._eventsData = JSON.parse(result.response);
                    console.log(this._eventsData);
                    resolve(this._eventsData);
                }).catch(err => { 
                    console.log(err);
                    reject(err)
                });
                
                
            }
            else {
                resolve(this._eventsData); 
           } 
        });
        return promise;
    }
    
    getEvent(id) {
        var promise = new Promise((resolve, reject) => { 
            console.log("uwqigfidqhwiodj qw");
            let event = this._eventsData.find(item => item.id == id);
            if (event) {
                resolve(event);
            }
            else {
                resolve("not found");
            }
        });
        return promise
    }
}