

export class jobs{
    constructor() {
        
    }
    // can activate is executed first when the navigation happens to a module
    canActivate(params, routeConfig, navigationInstruction) {
       // simulate a timeout promise this puts router.isNavigating to true so the cog wheel would show up now
        var promise = new Promise((resolve, reject) => {
            setTimeout(_ => {
                resolve(false);
            }, 3000);
        }); 
        return promise;
    }
}