
export class eventService{
    constructor() {
        this.data =[
            { "id": "1", "title": "First event" },
            { "id": "2", "title": "Second event" },
        ];
        console.log("Creating event Service");
    }
    
    getEvents() {
        return this.data;
    }
}