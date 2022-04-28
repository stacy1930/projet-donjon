import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-vieux',
  templateUrl: './vieux.component.html',
  styleUrls: ['./vieux.component.scss']
})
export class VieuxComponent implements OnInit {

  public data: any;
  public vieux: any;

  vieuxForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  public routeTresor: any;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.vieux = this.apiService.getVieux2Etage(localStorage.getItem('Authorization')).subscribe(data => {
      console.log(data);
      this.data = data;
    }
    );
  }

  addResponse() {
    // if (localStorage.getItem('Authorization')) {
    if (this.vieuxForm.value.name === 'idempotent') {
      this.apiService.postVieuxTresor2Etage(this.vieuxForm.value.name, localStorage.getItem('Authorization')).subscribe(data => {
        //@ts-ignore
        this.routeTresor = data.body;
        console.log(this.routeTresor);
        alert(this.routeTresor);
      })
    }else{
      alert("Faux !!! Essaie encore");
    }
    // }
    // else {
    // console.log("Il vous faut une clé pour rentrer. Mettre la clé dans la balise");
    // }
  }

}
