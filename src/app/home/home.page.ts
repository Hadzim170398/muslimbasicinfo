import { Component } from '@angular/core';
import{ Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
    khalifah(){
      this.router.navigate(['khalifah']);
    }
    azan(){
      this.router.navigate(['azan']);
    }
    doa(){
      this.router.navigate(['doa']);
    }
    wuduk(){
      this.router.navigate(['wuduk']);
    }
    hijaiyah(){
      this.router.navigate(['hijaiyah']);
    }
    najis(){
      this.router.navigate(['najis']);
    }
    bulanislam(){
      this.router.navigate(['bulanislam']);
    }
    rukunislam(){
      this.router.navigate(['rukunislam']);
    }
    solatfardhu(){
      this.router.navigate(['solatfardhu']);
    }
    rukuniman(){
      this.router.navigate(['rukuniman']);
    }
  
}
