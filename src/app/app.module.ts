import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import localEs from '@angular/common/locales/es-MX';
import { registerLocaleData } from "@angular/common";
registerLocaleData(localEs);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        //   PrimeNgModule,
        SharedModule,
        VentasModule
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'es-MX'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
