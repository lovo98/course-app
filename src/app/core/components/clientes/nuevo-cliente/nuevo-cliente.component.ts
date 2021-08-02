import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// alertas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {

  @Output() listaNew = new EventEmitter<any>();
  public isVisible = false;
  public load = false;

  registerForm: FormGroup;

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
    })
  }

  constructor(private auth:AuthService) {
    this.registerForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  submitForm() {
    if (this.registerForm.valid) {
      this.load = true;
      this.auth.registerClient(this.registerForm.value).subscribe((res) => {
        this.load = false;
        Swal.fire({
          icon: 'success',
          title: 'Bien hecho!',
          text: 'Se registro guardado con éxito!'
        })
        this.listaNew.emit();
        this.registerForm.reset();
        this.handleCancel();
      }, (err) => {
        this.load = false;
        Swal.fire({
          icon: 'warning',
          title: 'Alerta!',
          text: 'Ocurrió un error al guardar!'
        })
      })
    } else {
      this.load = false;
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Ocurrió un error al guardar!'
      })
    }
  }

}
