import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
    declarations: [],
    imports: [ 
        MatButtonModule,
        MatSliderModule,
        MatGridListModule
     ],
    exports: [
        MatButtonModule,
        MatSliderModule,
        MatGridListModule
    ],
    providers: [],
})
export class MaterialModule {}