import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia): void {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-validatejs');

    aurelia.start().then(() => aurelia.setRoot());
}