import { customAttribute, bindable, inject } from 'aurelia-framework';

@inject(Element)
@customAttribute('tag-background')    
export class tagAttribute{
    @bindable tagsArray
    @bindable highlightTag
    
    constructor(element) {
        // console.log(element);
        this.element = element;
    }
    
    //define functions that are gonna be called with the bindable values are changed followed by changed
    tagsArrayChanged(newArray) {
        // console.log(newArray);
        this.newArray = newArray
    }
    
    highlightTagChanged(newTag) {
        // console.log(this.newArray);
        // console.log(this.newArray.indexOf(newTag));
        if (this.newArray.indexOf(newTag) != -1) {
            console.log("trurruruureurururu")
            this.element.style.backgroundColor = "red";
        }
        else {
            this.element.style.backgroundColor = "";
        }
        
    }
    
}