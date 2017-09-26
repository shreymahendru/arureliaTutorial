
import 'bootstrap'; // imported here used in the html with require tag.
import 'toastr';
export class App{
    constructor() {
        // this.message = "Hello Aurelia";
        // this.image = "http://aurelia.io/images/main-logo.svg";
        // this.input = "";
    }
    
    //let's start routing!
    // need configureRouter
    configureRouter(config, router) {
        this._router = router;
        config.title = "Aurelia tutorial";
        // config.map([
        //     //routes go here
        //     //route = URL , moduleId = name of the viewmodel
        //     // also can have multiple urls 
        //     { route: ["", "events"], moduleId: 'viewmodels/events', title: "Events", nav: true },
            // {
            //     route: "jobs", moduleId: "viewmodels/jobs",
            //     title: "Jobs", nav: true
            // },
        //     { route: "discussion", moduleId: "viewmodels/discussion", title: "Discussion", nav: true },
        //     // name here is used as a unique identifier
        //     { route: "event/:eventId", moduleId: "viewmodels/eventDetail", name: "eventDetail" }
            
        // ]);
        
        //   we can also have 2 routers with different name in a page so that we can specify which module goes to which part of the screen
        // we do this by using viewPorts
        
        config.map([
            {
                route: ["", "events"],
                viewPorts:
                {
                    mainContent: { moduleId: 'viewmodels/events' },
                    sideBar: { moduleId: 'viewmodels/sponsors' }
                }, 
                title : "Events",
                nav: true,
            },
            {
                route: "jobs",
                viewPorts:
                {
                    mainContent: { moduleId: 'viewmodels/jobs' },
                    sideBar: { moduleId: 'viewmodels/advert' }
                },
                title: "Jobs",
                nav: true,
            },
            {
                route: "discussion",
                viewPorts:
                {
                    mainContent: { moduleId: 'viewmodels/discussion' },
                    sideBar: { moduleId: 'viewmodels/advert' }
                },
                title: "Discussion",
                nav: true,
            },
            {
                route: "event/:eventId",
                viewPorts:
                {
                    mainContent: { moduleId: 'viewmodels/eventDetail' },
                    sideBar: { moduleId: 'viewmodels/sponsors' }
                },
                name: "eventDetail",

            }
        ]);
        
        //enabling push state, to remove the # in the URL 
        // config.options.pushState = true; // will mess up the back end when refresh cause the confusion b/w server side and client side routing 
        // need to fix the on the server
        
        //custom pipeline //adding middleware
        // config.addPipelineStep('authorize', LogNextStep);
        // config.addPipelineStep('preActivate', LogNextStep);
        // config.addPipelineStep('preRender', LogNextStep);
        // config.addPipelineStep('postRender', LogNextStep);
        config.addPipelineStep('authorize', NavToastStep);
        
    }
    
    
}

class LogNextStep{
    run(navigationInstruction, next){
        return next().then(result => {
            console.log(JSON.stringify(result));
            return result;
        })
    }
}

class NavToastStep{
    run(navigationInstruction, next){
        return next().then(result => {
            if (result.status === "canceled") {
                toastr.error("Navigation Canceled");
            }
            if (result.status === "completed") {
                toastr.info("Navigation Completed");
            }
            return result
        })
    }
}
