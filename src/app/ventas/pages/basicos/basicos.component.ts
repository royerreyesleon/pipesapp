import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {

    nombreLower: string = 'royer';
    nombreUpper: string = 'ROYER';
    nombreCompleto: string = 'RoYer LeÓN';
    
    fecha: Date = new Date();

}
