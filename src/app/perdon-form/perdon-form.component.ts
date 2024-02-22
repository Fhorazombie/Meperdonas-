import { Component } from '@angular/core';

@Component({
  selector: 'app-perdon-form',
  standalone: true,
  imports: [],
  templateUrl: './perdon-form.component.html',
  styleUrl: './perdon-form.component.scss'
})
export class PerdonFormComponent {
  mensaje: string = '¿Me perdonas?';
  suplicas: string[] = [
    'Por favor, perdóname.',
    'Te lo ruego, perdóname.',
    'No puedo vivir sin ti, perdóname.'
  ];

  perdonar() {
    this.mensaje = '¡Gracias! 😊';
    // Aquí puedes agregar la lógica para mostrar el confeti
  }

  suplicar() {
    const randomIndex = Math.floor(Math.random() * this.suplicas.length);
    this.mensaje = this.suplicas[randomIndex];
  }
}
