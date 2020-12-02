import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import {RouterModule} from '@angular/router';
import {SearchBarComponent} from '../components/search-bar/search-bar.component';
import {EventsSwiperComponent} from '../components/events-swiper/events-swiper.component';
import {CurrentEventsComponent} from '../components/current-events/current-events.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    RouterModule.forChild([
      { path: '', component: Tab1Page },
      { path: 'worker/:id', loadChildren: '../worker/worker.module#WorkerPageModule' },
    ])
  ],
  declarations: [Tab1Page, SearchBarComponent, EventsSwiperComponent, CurrentEventsComponent]
})
export class Tab1PageModule {}
