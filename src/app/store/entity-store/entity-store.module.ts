import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityMetadataMap, NgrxDataModule } from 'ngrx-data';

export const entityMetadata: EntityMetadataMap = {
  ToDo: {}
};

export const pluralNames = {
  ToDo: 'ToDo'
};

@NgModule({
  imports: [
    CommonModule,
    NgrxDataModule.forRoot({
      entityMetadata: entityMetadata,
      pluralNames: pluralNames
    })
  ],
  declarations: []
})
export class EntityStoreModule {}
