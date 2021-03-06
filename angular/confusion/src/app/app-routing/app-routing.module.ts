import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { routes } from './routes';
import { MatFormFieldModule } from '../../../node_modules/@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule
  ],
  
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
