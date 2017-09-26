import { useView, bindable } from 'aurelia-framework';

// navBar turns into  nav-bar like ng1 this happenes by convention
// @useView('elements/view/nav-bar.html')  can explicity specify the which view to use also
// @customElement('element-name-here')
//@containerless to not show the custom element at all in the DOM rendered 
export class navBar{
    @bindable router;  // specifying that this is bindable
    
    //life cycle of an elements
    created(view) {
        
    }
    
    bind(bindingContext, overrideContext) {
        
    }
    
    attached() {
        
    }
    
    detached() {
        
    }
    
    unbind() {
        
    }
}