import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomePage } from './home/home.page';
import { DashboardPage } from './dashboard.page';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [DashboardPage, HomePage],
    imports: [CoreModule, SharedModule, DashboardRoutingModule],
    exports: [DashboardRoutingModule]
})
export class DashboardModule {
}
