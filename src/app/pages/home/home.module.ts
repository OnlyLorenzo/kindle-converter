import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { QuickActionsToolbarComponent } from './components/quick-actions-toolbar/quick-actions-toolbar.component';


@NgModule({
    declarations: [
        HomeComponent,
        QuickActionsToolbarComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
