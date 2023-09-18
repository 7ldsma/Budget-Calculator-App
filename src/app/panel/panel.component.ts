import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  pagesCtrl = new FormControl('', [Validators.required, Validators.pattern(/^(?!0)\d{1,2}$/)])
  languagesCtrl = new FormControl('', [Validators.required, Validators.pattern(/^\d{1,2}$/)])

  contenido: any;

  modalMessage: string = '';


  constructor ( public homeService : HomeService, public ngbModal: NgbModal){

    this.pagesCtrl.valueChanges.
    pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    })

    

  }


  getPages (event: Event) {
    event.preventDefault();

  }

  pagesModal() {
    this.modalMessage = "Every Website must have at least one page.";
  }

  languagesModal() {
    this.modalMessage = "If the number of languages selected is 0, the Website will be developed in english"
  }

}
