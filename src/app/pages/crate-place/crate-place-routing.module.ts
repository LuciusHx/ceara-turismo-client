import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CratePlacePage } from './crate-place.page';

const routes: Routes = [
  {
    path: '',
    component: CratePlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CratePlacePageRoutingModule {}
