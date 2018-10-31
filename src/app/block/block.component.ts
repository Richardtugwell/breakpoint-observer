import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

    @Input() mobileLayout: boolean;
    @Input() content: string;

    constructor() { }

    ngOnInit() {
    }

}
