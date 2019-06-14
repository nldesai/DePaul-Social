import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { StudyPartnerService } from '../services/studypartner.service';
import { Partner } from '../study-page/partner';

@Component({
  selector: 'app-search-partner',
  templateUrl: './search-partner.component.html',
  styleUrls: ['./search-partner.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class SearchPartnerComponent implements OnInit {

  public searchByClass: FormGroup;
  public newPartner: FormGroup;
  search = false;
  partners: Array<Partner>;
  filtered: Array<Partner>;
  all = false;

  
  constructor(private studyPartnerService: StudyPartnerService, public fb: FormBuilder,
    config: NgbModalConfig, private modalService: NgbModal, private router: Router) {
      config.backdrop = 'static';
      config.keyboard = false;
     }

  ngOnInit() {
    let s = this.studyPartnerService.getPartners();
    s.snapshotChanges().subscribe(data => {
      this.partners = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.partners.push(a as Partner);
      })
    });
    this.showForm();
  }

  showForm() {
    this.newPartner = this.fb.group({
      class: ['']
    });

    this.searchByClass = this.fb.group({
      class: ['']
    });
  }

  findAll() {
    this.search = false;
    this.all = true;
  }

  searchPartners() {
    this.all = false;
    this.filtered = this.partners.filter(partner => partner.class === this.searchByClass.get('class').value);
    this.search = true;
  }

  registerPartner() {
    this.studyPartnerService.register(this.newPartner.value);
    let s = this.studyPartnerService.getPartners();
    s.snapshotChanges().subscribe(data => {
      this.partners = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.partners.push(a as Partner);
      })
    });
    this.resetForm();
  }

  join(content) {
    this.modalService.open(content);
    this.router.navigateByUrl('/home');
  }

  resetForm() {
    this.searchByClass.reset();
    this.newPartner.reset();
    this.search = false;
    this.all = false;
  }

}
