import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatDivider} from '@angular/material/divider';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatList, MatListItem, MatListSubheaderCssMatStyler} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';

import {environment} from '@env';

@Component({
    standalone: true,
    imports: [MatDivider, MatGridTile, MatGridList, MatList, MatListItem, MatIcon, MatListSubheaderCssMatStyler,
        NgOptimizedImage],
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    version: string;
    backEndCore: string;

    constructor() {
        this.version = environment.VERSION;
        this.backEndCore = environment.REST_CORE;
    }

}
