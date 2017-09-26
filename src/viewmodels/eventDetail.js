import { inject } from 'aurelia-framework';
import { dataRepository } from 'services/dataRepository-service';

@inject(dataRepository)
export class eventDetail{
    constructor(dataRepository) {
        this._dataRepository = dataRepository;
    }
    //activate is run  when the module init
    activate(params, routeConfig) {
        this._dataRepository.getEvent(params.eventId).then(event => this.event = event);
    }
}