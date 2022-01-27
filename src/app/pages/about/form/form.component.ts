import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Register } from '../models/Form';
import { comparePassword } from 'src/app/shared/validators/customValidators';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  	// Incialización del formulario
    public registerForm!: FormGroup;
    // variable submitted a false
    public submitted: boolean = false;
  constructor(private formBuilder: FormBuilder) {
     // Nuestro formulario - sin campos por defecto
		 // Podemos meter valores por defecto en las comillas
     this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.maxLength(20)]],
      passwordRepeat: ['', [Validators.required, Validators.maxLength(20)]]
    },
    {
      // Validación custom de password
      validator: comparePassword('password', 'passwordRepeat')
    });
    
   }

  ngOnInit(): void {
  }
  	//Función accionada al clickar en submit
	public onSubmit(): void {
    // El usuario ha pulsado en submit->cambia a true submitted
    this.submitted = true;
    // Si el formulario es valido
    if (this.registerForm.valid) {
      // Creamos un Usuario y lo emitimos
      const user: Register = {
        name: this.registerForm.get('name')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
        passwordRepeat: this.registerForm.get('passwordRepeat')?.value,
      };
      console.log(user);
      // Reseteamos todos los campos y el indicador de envío o submitted
      this.registerForm.reset();
      this.submitted = false;
    }
  }

}
