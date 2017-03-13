import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
// import { SelectModule } from 'ng2-select/ng2-select';
// import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { DatepickerModule, PaginationModule, CollapseModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ColorsService } from './colors/colors.service';
import { SessionService } from './services/session';
import { CheckallDirective } from './directives/checkall';
import { NowDirective } from './directives/now';
import { ScrollableDirective } from './directives/scrollable';

import { TrimPipe } from './pipes/trim';
import { CapitalizePipe } from './pipes/capitalize';
import { CharactersPipe } from './pipes/characters';

// https://angular.io/styleguide#!#04-10
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule, PaginationModule, CollapseModule, ModalModule,
    // SelectModule,
    // ToasterModule
  ],
  providers: [
    ColorsService,
    SessionService
  ],
  declarations: [
    TrimPipe,
    CapitalizePipe,
    CharactersPipe,
    CheckallDirective,
    NowDirective,
    ScrollableDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    DatepickerModule, PaginationModule, CollapseModule, ModalModule,
    // ToasterModule,

    TrimPipe,
    CapitalizePipe,
    CharactersPipe,

    CheckallDirective,
    NowDirective,
    ScrollableDirective
  ]
})
export class SharedModule {}
