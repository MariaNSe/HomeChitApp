import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatIconModule,
  MatDividerModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSidenavModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatGridListModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ]
})


export class MaterialModule {
}
