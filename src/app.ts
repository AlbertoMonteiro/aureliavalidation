import {ValidationEngine, required} from 'aurelia-validation';

export class MyModel {
    @required name = '';
}

export class App {
    reporter;
    model = new MyModel();
    @required id = 12345;
    
    constructor() {
        this.reporter = ValidationEngine.getValidationReporter(this.model);
        this.reporter.subscribe(result => {
            // do something with error
        });
    }
}