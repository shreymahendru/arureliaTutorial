import { singleton } from 'aurelia-framework';

function getDiscussionInput() {
    //fake data access
    return "fake data";
}

function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}

@singleton()
export class discussion{
    constructor() {
        console.log("constructing discussion");
    }
    
    activate() {
        this.discussionInput = getDiscussionInput();
        this.originalInput = cloneObject(this.discussionInput);
    }
    
    save() {
        //simulate save
        this.originalInput = cloneObject(this.discussionInput);
    }
    // can deactivate is executed when the view is about to change or right before the deactivate is called
    canDeactivate() {
        if (JSON.stringify(cloneObject(this.discussionInput)) != JSON.stringify(this.originalInput)) {
            if (confirm("Unsaved data, are you sure?")) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    
    deactivate() {
        console.log("deactivating discussion");
    }
    
}