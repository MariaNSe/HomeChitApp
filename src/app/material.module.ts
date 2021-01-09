import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
  MatSidenav,
  MatGridListModule,
} from '@angular/material'

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
    BrowserAnimationsModule,
    MatIconModule,
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
    MatSidenav,
    BrowserAnimationsModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
