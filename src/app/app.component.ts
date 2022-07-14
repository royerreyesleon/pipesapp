import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    /*nombre: string = 'RoyeR ReYeS';
    valor: number = 1000;
    obj: object = {
        nombre: "royer"
    }

    cambiar(): void {
        console.log(this.nombre);
        console.log(this.valor);
        console.log(this.obj);
    }*/
    
    constructor(private primeNgConfig: PrimeNGConfig) {
    }
    ngOnInit(): void {
        this.primeNgConfig.ripple = true;
    }
}
