import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    verticalLayout = new BehaviorSubject<boolean>(false);

    constructor() { }

    setVerticalLayout(value: boolean) {
        this.verticalLayout.next(value);
    }
    getVerticalLayout(): Observable<boolean> {
        return this.verticalLayout.asObservable();
    }
}
