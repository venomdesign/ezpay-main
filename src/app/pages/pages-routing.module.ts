import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { ClaimComponent } from './claim/claim.component';
import { ContactComponent } from './contact/contact.component';
import { KanbanComponent } from './kanban/kanban.component';
import { PolicyComponent } from './policy/policy.component';
import { HolderComponent } from './policy/holder/holder.component';
import { ActivityComponent } from './policy/activity/activity.component';
import { ClaimsComponent } from './policy/claims/claims.component';
import { CoveragesComponent } from './policy/coverages/coverages.component';
import { DocumentsComponent } from './policy/documents/documents.component';
import { HistoryComponent } from './policy/history/history.component';
import { EvidenceComponent } from './policy/documents/evidence/evidence.component';
import { CertificateComponent } from './policy/documents/certificate/certificate.component';
import { MifComponent } from './policy/documents/mif/mif.component';
import { NotificationsComponent } from './account/notifications/notifications.component';
import { PaperlessComponent } from './account/paperless/paperless.component';
import { WalletComponent } from './account/wallet/wallet.component';
import { InfoComponent } from './payonline/info/info.component';
import { PaymentComponent } from './payonline/payment/payment.component';
import { ConfirmationComponent } from './payonline/confirmation/confirmation.component';

import { VerifyComponent } from './account/create/verification/verification.component';
import { CreatenotificationComponent } from './account/create/notification/notification.component';
import { CreatepaperlessComponent } from './account/create/paperless/paperless.component';
import { CreatewalletComponent } from './account/create/wallet/wallet.component';

import { EnrollAPComponent } from './account/autopay/enroll/enroll.component';
import { ManageAPComponent } from './account/autopay/manage/manage.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'claim', component: ClaimComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'kanban-board', component: KanbanComponent },
    { path: 'account',
        children: [
            { path: '', component: NotificationsComponent},
            { path: 'notifications', component: NotificationsComponent},
            { path: 'paperless', component: PaperlessComponent},
            { path: 'wallet', component: WalletComponent},
        ]
    },
    { path: 'policy', 
        children: [
            { path: '', component: PolicyComponent },
            { path: 'holder', component: HolderComponent },
            { path: 'activity', component: ActivityComponent },
            { path: 'claims', component: ClaimsComponent },
            { path: 'coverages', component: CoveragesComponent },
            { path: 'history', component: HistoryComponent },
            { path: 'documents',
                children: [
                    { path: '', component: DocumentsComponent },
                    { path: 'certificate', component: CertificateComponent },
                    { path: 'evidence', component: EvidenceComponent },
                    { path: 'mif', component: MifComponent }
                ]
            }
        ]
    },
    { path: 'payonline', 
        children: [
            { path: '', component: InfoComponent },
            { path: 'payment', component: PaymentComponent },
            { path: 'confirmation', component: ConfirmationComponent }
        ]
    },
    { path: 'create', 
        children: [
            { path: '', component: VerifyComponent },
            { path: 'verify', component: VerifyComponent },
            { path: 'notification', component: CreatenotificationComponent },
            { path: 'paperless', component: CreatepaperlessComponent },
            { path: 'wallet', component: CreatewalletComponent }            
        ]
    },
    { path: 'autopay', 
        children: [
            { path: '', component: VerifyComponent },
            { path: 'enroll', component: EnrollAPComponent },
            { path: 'manage', component: ManageAPComponent }
        ]
    },
    // { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
    // { path: 'policy', loadChildren: () => import('./policy/policy.module').then(m => m.PolicyModule) },
    // { path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule) },
    // { path: 'payonline', loadChildren: () => import('./payonline/payonline.module').then(m => m.PayonlineModule) },
    // { path: 'autopay', loadChildren: () => import('./autopay/autopay.module').then(m => m.AutopayModule) },
    { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
    { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
    { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
    { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UIModule) },
    { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
    { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
    { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
