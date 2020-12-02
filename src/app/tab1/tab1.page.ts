import {Component, OnDestroy, OnInit} from '@angular/core';
import {RrhhService} from '../services/rrhh.service';
import {Workers} from '../Classes/Workers';
import {Router} from '@angular/router';
import {EventsService} from '../services/events.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy{
  workers: Workers[]; // Class
  constructor(private rrhhService: RrhhService,
              private  router: Router,
              private eventsService_: EventsService) {}
  chipGender;
  currentEvents$: Subscription;
  chipProfession;
  async ngOnInit() {
      this.currentEvents$ = this.eventsService_.getEvents()
          .subscribe(response => {
              // Get all employees
             console.log(response);
              // Get profession chips
          });
    // Get workers from Api
   /*this.rrhhService.getWorkers()
          .subscribe(response => {
              // Get all employees
              this.workers = response;
              // Get profession chips
              this.getProfessionChips();
              this.getGenderChips();
          });*/
  }
    getProfessionChips(){
      // Map workers professions and save to new array.
        this.chipProfession = this.workers.map(a => a.profession);
        this.chipProfession = this.filterChips(this.chipProfession);
    }
    getGenderChips(){
        // Map workers gender and save to new array.
        this.chipGender = this.workers.map(a => a.gender);
        this.chipGender = this.filterChips(this.chipGender);
    }
    filterChips(data){
        const filteredChips = [];
        data.forEach((item, index) => {
            if (filteredChips.findIndex(i => i === item) === -1)
            {
                filteredChips.push(item);
            }
        });
        return filteredChips;
    }
  // Filter with chips by gender and profession
  filterWorkers(chipGender: string) {
      this.workers = this.workers.filter(x => x.gender === chipGender);
      // Update  chips
      this.getGenderChips();
      this.getProfessionChips();
  }
  filterProfession(chipProfession: string) {
      this.workers = this.workers.filter(x => x.profession === chipProfession);
      // Update  Chips
      this.getGenderChips();
      this.getProfessionChips();
  }
  // naviation with params id employe
  workerDetail(id: number){
      this.router.navigate(['/tabs/tab1/worker', id]);
  }
  ngOnDestroy(){
     // this.currentEvents$.unsubscribe();
  }
}

