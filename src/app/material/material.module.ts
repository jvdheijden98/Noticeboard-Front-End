import { MatButtonModule, MatFormFieldModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';

const MaterialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})

export class MaterialModule {}
