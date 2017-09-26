// Not really important aurelia does it on it's own 

import { LogManager } from 'aurelia-framework';
import { ConsoleAppender } from 'aurelia-logging-console';
import { ViewLocator } from 'aurelia-framework';
import { plugin1 } from 'services/plugin1-service';
import { plugin2 } from 'services/plugin2-service';
LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.warn);  //change logging level

export function configure(aurelia) {
    aurelia.use.standardConfiguration();
    
    // override the aurelia view locator function so that we can have our own way of dir structure 
    ViewLocator.prototype.convertOriginToViewUrl = (origin) => {
        let moduleId = origin.moduleId;
        if (moduleId.endsWith('.js') || moduleId.endsWith('.ts')) {
            var id = moduleId.substring(0, moduleId.length - 3);
        }
        else {
            var id = moduleId;
        }
        console.log(id)
        if (id.includes("service")) {
            console.log(id)
            console.log(id.replace("viewmodels", "services"))
            return id.replace("viewmodels", "services");
        }
        return id.replace("viewmodels", "view") + ".html";
    }

    //using 2 services with the same name     
    aurelia.use.transient("SuperPlugin", plugin1);
    aurelia.use.transient("SuperPlugin", plugin2);
    aurelia.use.instance('apiRoot', 'http://localhost:2112'); // putting this the container and this can be used ever where AWESOME!
    // aurelia.use.globalResources('some value convert that could be used several places')
    
    aurelia.use.globalResources('elements/viewmodels/nav-bar.js');
    
    aurelia.use.plugin('aurelia-dialog'); // pulls in this module as a part of the standard config 
    
    
    aurelia.start().then(a => a.setRoot("viewmodels/app", document.body)); //name the file with the main app and dom obj
}

