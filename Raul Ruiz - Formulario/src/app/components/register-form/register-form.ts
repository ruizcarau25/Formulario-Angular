import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-register-form',
  styleUrl: './register-form.css',
  templateUrl: './register-form.html',
})
export class RegisterFormComponent {

  // Datos del formulario (two way data binding con [(ngModel)])
  nombre = '';
  apellidos = '';
  nif = '';
  email = '';
  telefono = '';
  sexo = '';
  comoConocio = '';
  password = '';
  confirmPassword = '';
  aceptaTerminos = false;

  // Opciones para el select
  opcionesConocio = [
    { value: 'google', label: 'Buscando en Google' },
    { value: 'amigo', label: 'A través de un amigo' },
    { value: 'profesor', label: 'Por mi profesor' },
  ];

  register() {
    console.log('--- Datos de registro ---');
    console.log('Nombre:', this.nombre);
    console.log('Apellidos:', this.apellidos);
    console.log('NIF:', this.nif);
    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);
    console.log('Sexo:', this.sexo);
    console.log('Cómo conoció la página:', this.comoConocio);
    console.log('Contraseña:', this.password);
    console.log('Confirmar contraseña:', this.confirmPassword);
    console.log('Términos y condiciones aceptados:', this.aceptaTerminos);
  }
}
