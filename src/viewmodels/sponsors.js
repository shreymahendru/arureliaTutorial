import { DialogService } from 'aurelia-dialog';
import { dialog } from './dialog';
import { inject } from 'aurelia-framework';

@inject(DialogService)
export class sponsors{
    constructor(DialogService) {
        this.dialogService = DialogService;
        this.dialog = dialog;
        this.event = {"title" : "Hello dialog"}
    }
    doSomething() {
        console.log("changed after binding trigger binds a event on the element level");
    }
    
    doSomething2() {
        console.log("changed after binding trigger binds a event on the doc level should use this more!");
    }
    showDialog(event) {
        console.log(this.event.title);
        var og = JSON.parse(JSON.stringify(event));
        this.dialogService.open({ viewModel: dialog, model: this.event })
            .then(result => {
                if (result.wasCancelled) {
                    this.event.title = og.title;
                    
                }
                console.log(this.event.title);   
        })
    }
    
    
}