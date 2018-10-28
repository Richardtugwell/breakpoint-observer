import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { LayoutService } from './layout.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    title = 'breakpoint-observer';
    mobileLayout = false;

    constructor(
        private layoutService: LayoutService,
        private breakpointObserver: BreakpointObserver) { }

    ngOnInit() {
        this.breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    this.layoutService.setVerticalLayout(true);
                } else {
                    this.layoutService.setVerticalLayout(false);
                }
            });
        this.layoutService.getVerticalLayout().subscribe(value => this.mobileLayout = value);
    }
}
