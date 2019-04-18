import { NgModule } from '@angular/core';
import { SignInPage } from './sign-in/sign-in.page';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [SignInPage],
    imports: [SharedModule, LoginRoutingModule],
    exports: [LoginRoutingModule]
})
export class LoginModule {}
