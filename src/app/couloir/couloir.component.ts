import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../API/api.service';

@Component({
  selector: 'app-couloir',
  templateUrl: './couloir.component.html',
  styleUrls: ['./couloir.component.scss']
})
export class CouloirComponent implements OnInit {

  public couloir: any;
  public data: any;

  couloirForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  couloir1Tresor: any;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.couloir = this.apiService.getCouloir2etage(localStorage.getItem('Authorization')).subscribe(data => {
      console.log(data);
      this.data = data;
    }
    );
  }

  openCouloir() {
    if (this.couloirForm.value.name === '/1') {
      this.apiService.getTresorCouloir2Etage(localStorage.getItem('Authorization')).subscribe(data => {
        //@ts-ignore
        this.couloir1Tresor = data.body;
        alert(this.couloir1Tresor);
      })
    }
  }

}
