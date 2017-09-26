import { DialogController } from 'aurelia-dialog';
import { inject } from 'aurelia-framework';

@inject(DialogController)
export class dialog{
    constructor(DialogController) {
        this.dialogController = DialogController;
    }   
     // this is where you get the passed data 
    activate(event) {
        this.event = event;
        console.log(this.event.title);
    }
    save() { 
        this.dialogController.ok(); //can return stuff here from this dialog to it's invoker
    }
    
    cancel() {
        this.dialogController.cancel();
    }
    
}