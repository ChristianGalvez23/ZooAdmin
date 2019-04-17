import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomePage } from './home/home.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [HomePage],
    imports: [SharedModule, DashboardRoutingModule],
    exports: [DashboardRoutingModule]
})
export class DashboardModule {
}
