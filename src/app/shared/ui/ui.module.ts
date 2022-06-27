import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { ChatComponent } from './overlays/chat/chat.component';
import { CallingComponent } from './cards/calling/calling.component';
import { GetdocumentsComponent } from './cards/getdocuments/getdocuments.component';
import { LocalagentComponent } from './cards/localagent/localagent.component';
import { PrivacyComponent } from './overlays/privacy/privacy.component';

@NgModule({
  declarations: [
    PagetitleComponent, 
    ChatComponent, 
    CallingComponent, 
    GetdocumentsComponent, 
    LocalagentComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PagetitleComponent, 
    ChatComponent, 
    CallingComponent, 
    GetdocumentsComponent, 
    LocalagentComponent,
    PrivacyComponent
  ]
})
export class UiModule { }
