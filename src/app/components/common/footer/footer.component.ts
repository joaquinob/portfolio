import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email: string = 'joaquin280401@gmail.com';

  copyEmail() {
    // Crea un campo de texto temporal para copiar el texto
    const tempInput = document.createElement('input');
    tempInput.value = this.email;
    document.body.appendChild(tempInput);

    // Selecciona el texto y copia al portapapeles
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');

    // Remueve el campo de texto temporal
    document.body.removeChild(tempInput);

    // Opcional: muestra un mensaje de confirmación al usuario
    Swal.fire('Correo copiado al portapapeles: ' + this.email);
  }
}
