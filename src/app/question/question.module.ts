import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, QuestionRoutingModule],
  declarations: [QuestionComponent]
})
export class QuestionModule {}
