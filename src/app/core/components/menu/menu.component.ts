import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public loged = false;
  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.auth.userLogged == false) {
      this.router.navigate(['/login']);
    }
  }

  showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId);
    const navbar = document.getElementById(navbarId);
    const bodypadding = document.getElementById(bodyId);

    if (toggle && navbar) {
      toggle.addEventListener("click", () => {
        navbar.classList.toggle("expander");
        bodypadding.classList.toggle("body-pd");
      })
    }
  }

}
