import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
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
