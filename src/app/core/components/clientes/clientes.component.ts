import { ClientesService } from './../../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  public listOfData = [];
  public modalEdit = false;

  editForm: FormGroup;

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl(''),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      id: new FormControl(''),
    })
  }

  constructor(private clienteS: ClientesService) {
    this.editForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.listado();
  }

  listado() {
    this.clienteS.listado().subscribe((res) => {
      this.listOfData = res;
      // console.log("res", this.listOfData);
    }, (err) => {
        this.listOfData = [];
    })
  }

  showmodaledit(data) {
    this.modalEdit = true;
    this.editForm.controls['id'].setValue(data.id);
    this.editForm.controls['firstname'].setValue(data.firstname);
    this.editForm.controls['lastname'].setValue(data.lastname);
    this.editForm.controls['age'].setValue(data.age);
    this.editForm.controls['email'].setValue(data.email);
    this.editForm.controls['password'].setValue(data.password);
  }

  handleCancel(): void {
    this.modalEdit = false;
  }

  editClient() {
    if (this.editForm.valid) {
      this.clienteS.update(this.editForm.value).subscribe((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Bien hecho!',
          text: 'Se registro guardado con éxito!'
        })
        this.handleCancel();
        this.editForm.reset();
        this.listado();
      }, (err) => {
        Swal.fire({
          icon: 'warning',
          title: 'Alerta!',
          text: 'Ocurrió un error al actualizar!'
        })
      })
    } else {
      console.log(this.editForm);
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Ocurrió un error al actualizar!'
      })
    }
  }

  deletePaciente(id) {
    Swal.fire({
      title: '¿Esta seguro de eliminar?',
      text: "Al eliminar no se podrán recuperar los datos.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // this.cargando = true;
        this.clienteS.delete(id).subscribe(
          data => {
            // this.cargando = false;
            Swal.fire(
              '¡Eliminado!',
              'El registro se ha eliminado.',
              'error'
            )
            this.listado();
          }, err => {
            // this.cargando = false;
            Swal.fire(
              '¡Oops!',
              'Ocurrió un error al eliminar.',
              'warning'
            )
          }
        )
      }
    })
  }

}
