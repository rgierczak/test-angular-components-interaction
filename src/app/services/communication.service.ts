import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommunicationService {
    private notify = new Subject<Object>();
    notifyObservable = this.notify.asObservable();

    constructor() {}

    public notifyNext(data: Object) {
        this.notify.next(data);
    }
}
