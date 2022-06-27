import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '../shared/ui/ui.module';
import { WidgetModule } from '../shared/widget/widget.module';

import { PagesRoutingModule } from './pages-routing.module';

import { NgbModalModule, NgbNavModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DndModule } from 'ngx-drag-drop';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

//Account
import { NotificationsComponent } from './account/notifications/notifications.component';
import { PaperlessComponent } from './account/paperless/paperless.component';
import { WalletComponent } from './account/wallet/wallet.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { ClaimComponent } from './claim/claim.component';
// Policy
import { PolicyComponent } from './policy/policy.component';
import { HolderComponent } from './policy/holder/holder.component';
import { ActivityComponent } from './policy/activity/activity.component';
import { ClaimsComponent } from './policy/claims/claims.component';
import { CoveragesComponent } from './policy/coverages/coverages.component';
import { DocumentsComponent } from './policy/documents/documents.component';
import { HistoryComponent } from './policy/history/history.component';
import { CertificateComponent } from './policy/documents/certificate/certificate.component';
import { EvidenceComponent } from './policy/documents/evidence/evidence.component';
import { MifComponent } from './policy/documents/mif/mif.component';
// End Policy

// Pay Online
import { InfoComponent } from './payonline/info/info.component';//info 
//pay  import { PaymentComponent } from './payonline/payment/payment.component';
//confirmation import { ConfirmationComponent } from './payonline/confirmation/confirmation.component';
// End Pay Online

import { ContactComponent } from './contact/contact.component';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { KanbanComponent } from './kanban/kanban.component';
import { EmailModule } from './email/email.module';
import { UIModule } from './ui/ui.module';
import { IconsModule } from './icons/icons.module';
import { FormModule } from './form/form.module';
import { TablesModule } from './tables/tables.module';
import { PaymentComponent } from './payonline/payment/payment.component';
import { ConfirmationComponent } from './payonline/confirmation/confirmation.component';

import { VerifyComponent } from './account/create/verification/verification.component';
import { CreatenotificationComponent } from './account/create/notification/notification.component';
import { CreatepaperlessComponent } from './account/create/paperless/paperless.component';
import { CreatewalletComponent } from './account/create/wallet/wallet.component';

import { EnrollAPComponent } from './account/autopay/enroll/enroll.component';
import { ManageAPComponent } from './account/autopay/manage/manage.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 0.3
};

@NgModule({
  declarations: [
    DashboardComponent, 
    CalendarComponent, 
    ChatComponent, 
    ClaimComponent, 
    ContactComponent, 
    KanbanComponent, 
    PolicyComponent, 
    HolderComponent, 
    ActivityComponent, 
    ClaimsComponent, 
    CoveragesComponent, 
    DocumentsComponent, 
    HistoryComponent,
    CertificateComponent,
    EvidenceComponent,
    MifComponent,
    NotificationsComponent,
    PaperlessComponent,
    WalletComponent,
    InfoComponent,
    PaymentComponent,
    ConfirmationComponent,
    VerifyComponent,
    CreatenotificationComponent,
    CreatepaperlessComponent,
    CreatewalletComponent,
    EnrollAPComponent,
    ManageAPComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    UiModule,
    UIModule,
    Ng2SearchPipeModule,
    NgbModalModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbTooltipModule,
    PerfectScrollbarModule,
    DndModule,
    FullCalendarModule,
    EcommerceModule, EmailModule,
    IconsModule,
    FormModule,
    TablesModule,
    WidgetModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class PagesModule { }
