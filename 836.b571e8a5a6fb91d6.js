"use strict";(self.webpackChunkezpay=self.webpackChunkezpay||[]).push([[836],{7836:(_,m,s)=>{s.r(m),s.d(m,{AccountModule:()=>p});var d=s(6895),o=s(8111),u=s(4650);const b=[{path:"auth",loadChildren:()=>Promise.resolve().then(s.bind(s,3314)).then(t=>t.AuthModule)}];let a=(()=>{class t{}return t.\u0275fac=function(g){return new(g||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[o.Bz.forChild(b),o.Bz]}),t})();var v=s(3314);let p=(()=>{class t{}return t.\u0275fac=function(g){return new(g||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[d.ez,a,v.AuthModule]}),t})()},3314:(_,m,s)=>{s.r(m),s.d(m,{AuthModule:()=>B});var d=s(6895),o=s(4006),u=s(1984),b=s(9668),a=s(8111),v=s(7224),p=s(2340),t=s(4650),c=s(1481),g=s(263),y=s(2293);const C=function(){return["/payonline"]};let A=(()=>{class e{constructor(n,i,l,f,h,x){this.titleService=n,this.formBuilder=i,this.route=l,this.router=f,this.authenticationService=h,this.authFackservice=x,this.submitted=!1,this.error="",this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.loginForm=this.formBuilder.group({email:["admin@usli.com",[o.kI.required,o.kI.email]],password:["123456",[o.kI.required]]}),this.titleService.setTitle("Login"),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,!this.loginForm.invalid&&("firebase"===p.N.defaultauth?this.authenticationService.login(this.f.email.value,this.f.password.value).then(n=>{this.router.navigate(["/"])}).catch(n=>{this.error=n||""}):this.authFackservice.login(this.f.email.value,this.f.password.value).pipe((0,v.P)()).subscribe(n=>{this.router.navigate(["/"])},n=>{this.error=n||""}))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.Dx),t.Y36(o.QS),t.Y36(a.gz),t.Y36(a.F0),t.Y36(g.$),t.Y36(y.g))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:91,vars:3,consts:[[1,"covid-19"],["href","https://mailchi.mp/usli/covid-19-updates",1,"underlined"],["id","top-bar"],[1,"container","clearfix"],[1,"col_half","nobottommargin"],[1,"top-links"],[1,"col_half","fright","col_last","nobottommargin"],["id","header",1,"sticky-style-2"],[1,"container","header-row","clearfix","header","d-flex","align-items-center"],["id","logo"],["href","/","data-dark-logo","https://www.usli.com/media/ahopues0/usli-logo-2x.png"],[1,"standard-logo"],["src","https://www.usli.com/media/ahopues0/usli-logo-2x.png","alt","USLI Logo"],[1,"header-extras","header-extras-phone","d-flex","align-items-center"],[1,"header-phone"],[1,"header-extras","d-flex","align-items-center"],["href","https://customers.usli.com/sites/snap/USLI-SNAP.html",1,"button","button-rounded","button-reveal","button-broker","button-green","tright"],[1,"icon-circle-arrow-right"],["id","header-wrap"],["id","primary-menu",1,"style-2"],["id","primary-menu-trigger"],[1,"fa","fa-bars"],[1,"sf-js-enabled",2,"touch-action","pan-y"],[1,"sub-nav","sub-menu"],["href","#",1,"sf-with-ul"],["href","/products",1,"sf-with-ul"],[1,""],["href","https://www.bizresourcecenter.com/"],["href","/support/"],["href","/about-us",1,"sf-with-ul"],[1,"icon-line-menu"],[1,"row","placeholder"],[1,"container"],[1,"row"],[1,"col-lg-12","mt-3","d-flex","justify-content-end"],[1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"card","border-primary",2,"width","300px"],[1,"card-header","mt-0","text-center","bg-primary","text-white"],[1,"card-notice","text-center"],[1,"card-body"],[1,"col-md-12"],["for","contact-name",1,"col-form-label"],["type","text","value","","placeholder","Enter the Account Number","id","contact-name",1,"form-control"],["type","text","value","","placeholder","Enter the Zip/Postal Code","id","contact-name",1,"form-control"],[1,"row","mt-4"],[1,"col-md-12","d-flex","flex-column"],["type","button",1,"btn","btn-success","flex-fill",3,"routerLink"],[1,"line-through","mt-3","mb-3"],["type","submit",1,"btn","btn-primary","flex-fill"]],template:function(n,i){1&n&&(t.TgZ(0,"h1",0),t._uU(1," COVID-19 UPDATES: "),t.TgZ(2,"a",1),t._uU(3,"Learn More>>"),t.qZA()(),t.TgZ(4,"div",2)(5,"div",3)(6,"div",4),t._UZ(7,"div",5),t.qZA(),t._UZ(8,"div",6),t.qZA()(),t.TgZ(9,"header",7)(10,"div",8)(11,"div",9)(12,"a",10)(13,"span",11),t._UZ(14,"img",12),t.qZA()()(),t.TgZ(15,"div",13)(16,"div",14),t._uU(17,"888-523-5545"),t.qZA()(),t.TgZ(18,"div",15)(19,"a",16),t._UZ(20,"i",17),t.TgZ(21,"span"),t._uU(22,"BROKER / AGENT LOGIN"),t.qZA()()()(),t.TgZ(23,"div",18)(24,"nav",19)(25,"div",3)(26,"div",20),t._UZ(27,"i",21),t.TgZ(28,"span"),t._uU(29,"Navigation"),t.qZA()(),t.TgZ(30,"ul",22)(31,"li",23)(32,"a",24)(33,"div"),t._uU(34,"Policy Services"),t.qZA()()(),t.TgZ(35,"li",23)(36,"a",25)(37,"div"),t._uU(38,"Products"),t.qZA()()(),t.TgZ(39,"li",26)(40,"a",27)(41,"div"),t._uU(42,"Business Resource Center"),t.qZA()()(),t.TgZ(43,"li",26)(44,"a",28)(45,"div"),t._uU(46,"Support"),t.qZA()()(),t.TgZ(47,"li",23)(48,"a",29)(49,"div"),t._uU(50,"About Us"),t.qZA()()(),t.TgZ(51,"li",23)(52,"a",24)(53,"div"),t._UZ(54,"i",30),t._uU(55,"Menu"),t.qZA()()()()()()()(),t.TgZ(56,"div",31)(57,"div",32)(58,"div",33)(59,"div",34)(60,"form",35),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(61,"div",36)(62,"h4",37),t._uU(63,"Pay Online Now"),t.qZA(),t.TgZ(64,"div",38),t._uU(65,"(no login/account required)"),t.qZA(),t.TgZ(66,"div",39)(67,"div",33)(68,"div",40)(69,"label",41),t._uU(70,"Account Number"),t.qZA(),t._UZ(71,"input",42),t.qZA()(),t.TgZ(72,"div",33)(73,"div",40)(74,"label",41),t._uU(75,"Zip/Postal Code"),t.qZA(),t._UZ(76,"input",43),t.qZA()(),t.TgZ(77,"div",44)(78,"div",45)(79,"button",46),t._uU(80,"Continue"),t.qZA(),t.TgZ(81,"div",47),t._uU(82,"OR"),t.qZA(),t.TgZ(83,"button",48),t._uU(84,"Login / Create Account"),t.qZA()()()()()()()()()(),t.TgZ(85,"div",31)(86,"div",32),t._uU(87,"\xa0"),t.qZA()(),t.TgZ(88,"div",31)(89,"div",32),t._uU(90,"\xa0"),t.qZA()()),2&n&&(t.xp6(60),t.Q6J("formGroup",i.loginForm),t.xp6(19),t.Q6J("routerLink",t.DdM(2,C)))},dependencies:[o._Y,o.JL,o.sg,a.rH],styles:['@import"//fonts.googleapis.com/css?family=Lato:300,400,400i,700%7CRaleway:300,400,500,600,700,800,900%7CRoboto:700%2C500%2C400";.covid-19[_ngcontent-%COMP%]{display:block;box-sizing:border-box;padding:2px 15px;background-color:#f89728;color:#00549b;text-align:center;font-size:24px;font-weight:700;min-height:44px;margin:0}#top-bar[_ngcontent-%COMP%]{position:relative;border-bottom:1px solid #EEE;height:45px;line-height:44px;font-size:13px}#header[_ngcontent-%COMP%], #header-wrap[_ngcontent-%COMP%], #logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;transition:height .4s ease,opacity .3s ease}#header[_ngcontent-%COMP%]{height:161px;position:relative;background-color:#fff;border-bottom:1px solid #F5F5F5}#header[_ngcontent-%COMP%]{position:relative;background-color:#fff;border-bottom:1px solid #F5F5F5}#primary-menu-trigger[_ngcontent-%COMP%], #page-submenu-trigger[_ngcontent-%COMP%]{opacity:0;pointer-events:none;cursor:pointer;font-size:14px;position:absolute;top:50%;margin-top:-25px;width:50px;height:50px;line-height:50px;text-align:center;transition:opacity .3s ease}.header-extras[_ngcontent-%COMP%]   .header-phone[_ngcontent-%COMP%]{display:inline-block;margin:0 10px;font-size:24px;font-weight:600;color:#00338e}#header[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%]{display:flex;align-content:stretch;align-items:center}#logo[_ngcontent-%COMP%]{position:relative;flex-grow:1;font-family:Raleway,sans-serif;font-size:36px;line-height:100%;margin-right:40px}@media (min-width: 768px){.button.button-broker[_ngcontent-%COMP%]{padding:0 32px;font-size:16px;height:46px;line-height:46px}}.button.button-reveal[_ngcontent-%COMP%]{padding:0 28px;overflow:hidden}.button.button-rounded[_ngcontent-%COMP%]{border-radius:3px}.header-extras[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{margin:0}.button-green[_ngcontent-%COMP%]{background-color:#14661a}.button[_ngcontent-%COMP%]{display:inline-block;position:relative;cursor:pointer;outline:none;white-space:nowrap;margin:5px;padding:0 22px;font-size:14px;height:40px;line-height:40px;color:#fff;font-weight:600;text-transform:uppercase;letter-spacing:1px;border:none;text-shadow:1px 1px 1px rgba(0,0,0,.2)}.tright[_ngcontent-%COMP%]{text-align:right!important}a[_ngcontent-%COMP%]{text-decoration:none!important;color:#00338e}#primary-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{line-height:22px;color:#333;font-weight:700;font-size:13px;letter-spacing:1px;text-transform:uppercase;font-family:Raleway,sans-serif}#primary-menu.style-2[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{float:left}#primary-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin:0}#primary-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{float:left;margin-left:2px}#primary-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}#primary-menu.style-2[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{padding-top:19px;padding-bottom:19px}#primary-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:block;line-height:22px;padding:39px 15px;color:#333;font-weight:700;font-size:13px;letter-spacing:1px;text-transform:uppercase;font-family:Raleway,sans-serif;transition:margin .4s ease,padding .4s ease}dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{margin:0;padding:0}.placeholder[_ngcontent-%COMP%]{height:480px;background:url(placeholder.dbc67ae0db4841da.png) no-repeat;background-size:auto;background-position:center}']}),e})();var w=s(529);let T=(()=>{class e{constructor(n){this.http=n}getAll(){return this.http.get("/api/login")}register(n){return this.http.post("/users/register",n)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(w.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function P(e,r){1&e&&(t.TgZ(0,"ngb-alert",37),t._uU(1,"Registeration successfull. "),t.qZA()),2&e&&t.Q6J("dismissible",!1)}function U(e,r){if(1&e&&(t.TgZ(0,"ngb-alert",38),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.Q6J("dismissible",!1),t.xp6(1),t.Oqu(n.error)}}function M(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1,"Userame is required"),t.qZA())}function O(e,r){if(1&e&&(t.TgZ(0,"div",39),t.YNc(1,M,2,0,"div",40),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.username.errors.required)}}function q(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1,"Email is required"),t.qZA())}function S(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1,"Email must be a valid email address"),t.qZA())}function I(e,r){if(1&e&&(t.TgZ(0,"div",39),t.YNc(1,q,2,0,"div",40),t.YNc(2,S,2,0,"div",40),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",n.f.email.errors.email)}}function F(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function J(e,r){if(1&e&&(t.TgZ(0,"div",39),t.YNc(1,F,2,0,"div",40),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.password.errors.required)}}const Z=function(e){return{"is-invalid":e}};function N(e,r){if(1&e&&(t.TgZ(0,"ngb-alert",30),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.Q6J("dismissible",!1),t.xp6(1),t.Oqu(n.error)}}function z(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1,"Email is required"),t.qZA())}function k(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1,"Email must be a valid email address"),t.qZA())}function L(e,r){if(1&e&&(t.TgZ(0,"div",31),t.YNc(1,z,2,0,"div",32),t.YNc(2,k,2,0,"div",32),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",n.f.email.errors.email)}}const Q=function(e){return{"is-invalid":e}},R=[{path:"login",component:A},{path:"signup",component:(()=>{class e{constructor(n,i,l,f,h,x){this.titleService=n,this.formBuilder=i,this.route=l,this.router=f,this.authenticationService=h,this.userService=x,this.submitted=!1,this.error="",this.successmsg=!1,this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.signupForm=this.formBuilder.group({username:["",o.kI.required],email:["",[o.kI.required,o.kI.email]],password:["",o.kI.required]}),this.titleService.setTitle("Signup")}ngAfterViewInit(){}get f(){return this.signupForm.controls}onSubmit(){this.submitted=!0,!this.signupForm.invalid&&("firebase"===p.N.defaultauth?this.authenticationService.register(this.f.email.value,this.f.password.value).then(n=>{this.successmsg=!0,this.successmsg&&this.router.navigate(["/"])}).catch(n=>{this.error=n||""}):this.userService.register(this.signupForm.value).pipe((0,v.P)()).subscribe(n=>{this.successmsg=!0,this.successmsg&&this.router.navigate(["/account/login"])},n=>{this.error=n||""}))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.Dx),t.Y36(o.QS),t.Y36(a.gz),t.Y36(a.F0),t.Y36(g.$),t.Y36(T))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-signup"]],decls:58,vars:15,consts:[[1,"home-btn","d-none","d-sm-block"],["href","javascript:void()"],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","no-gutters"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["href","javascript:void()",1,"logo"],["src","assets/images/logo-dark.png","height","80","alt","logo"],[1,"fs-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","success",3,"dismissible",4,"ngIf"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],["for","username"],["type","text","formControlName","username","id","username","placeholder","Enter username",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],[1,"ri-lock-2-line","auti-custom-input-icon"],["for","password"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],[1,"mt-4","text-center"],[1,"mb-0"],["href","javascript:void()",1,"text-primary"],[1,"mt-5","text-center"],["routerLink","/account/login",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","success",3,"dismissible"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"a",1),t._UZ(2,"i",2),t.qZA()(),t.TgZ(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),t._UZ(15,"img",12),t.qZA()(),t.TgZ(16,"h4",13),t._uU(17,"Register account"),t.qZA(),t.TgZ(18,"p",14),t._uU(19,"Get your free ezpay account now."),t.qZA()(),t.TgZ(20,"div",15)(21,"form",16),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.YNc(22,P,2,1,"ngb-alert",17),t.YNc(23,U,2,2,"ngb-alert",18),t.TgZ(24,"div",19)(25,"label",20),t._uU(26,"Username"),t.qZA(),t._UZ(27,"input",21),t.YNc(28,O,2,1,"div",22),t.qZA(),t.TgZ(29,"div",19)(30,"label",23),t._uU(31,"Email"),t.qZA(),t._UZ(32,"input",24),t.YNc(33,I,3,2,"div",22),t.qZA(),t.TgZ(34,"div",19),t._UZ(35,"i",25),t.TgZ(36,"label",26),t._uU(37,"Password"),t.qZA(),t._UZ(38,"input",27),t.YNc(39,J,2,1,"div",22),t.qZA(),t.TgZ(40,"div",10)(41,"button",28),t._uU(42,"Register"),t.qZA()(),t.TgZ(43,"div",29)(44,"p",30),t._uU(45,"By registering you agree to the ezpay "),t.TgZ(46,"a",31),t._uU(47,"Terms of Use"),t.qZA()()()()(),t.TgZ(48,"div",32)(49,"p"),t._uU(50,"Already have an account ? "),t.TgZ(51,"a",33),t._uU(52," Login"),t.qZA()(),t.TgZ(53,"p"),t._uU(54,"\xa9 2021 USLI."),t.qZA()()()()()()()(),t.TgZ(55,"div",34)(56,"div",35),t._UZ(57,"div",36),t.qZA()()()()()),2&n&&(t.xp6(21),t.Q6J("formGroup",i.signupForm),t.xp6(1),t.Q6J("ngIf",i.successmsg),t.xp6(1),t.Q6J("ngIf",i.error),t.xp6(4),t.Q6J("ngClass",t.VKq(9,Z,i.submitted&&i.f.username.errors)),t.xp6(1),t.Q6J("ngIf",i.submitted&&i.f.username.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(11,Z,i.submitted&&i.f.email.errors)),t.xp6(1),t.Q6J("ngIf",i.submitted&&i.f.email.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(13,Z,i.submitted&&i.f.password.errors)),t.xp6(1),t.Q6J("ngIf",i.submitted&&i.f.password.errors))},dependencies:[d.mk,d.O5,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,u.xm,a.yS]}),e})()},{path:"reset-password",component:(()=>{class e{constructor(n,i,l,f,h){this.titleService=n,this.formBuilder=i,this.route=l,this.router=f,this.authenticationService=h,this.submitted=!1,this.error="",this.success="",this.loading=!1,this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.resetForm=this.formBuilder.group({email:["",[o.kI.required,o.kI.email]]}),this.titleService.setTitle("Password Reset")}ngAfterViewInit(){}get f(){return this.resetForm.controls}onSubmit(){this.success="",this.submitted=!0,!this.resetForm.invalid&&"firebase"===p.N.defaultauth&&this.authenticationService.resetPassword(this.f.email.value).catch(n=>{this.error=n||""})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.Dx),t.Y36(o.QS),t.Y36(a.gz),t.Y36(a.F0),t.Y36(g.$))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-passwordreset"]],decls:43,vars:6,consts:[[1,"home-btn","d-none","d-sm-block"],["href","javascript:void()"],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","no-gutters"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["href","javascript:void()",1,"logo"],["src","assets/images/logo-dark.png","height","80","alt","logo"],[1,"fs-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],["role","alert",1,"alert","alert-success","mb-4"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"mt-4","text-center"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],[1,"mt-5","text-center"],["routerLink","/account/login",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"a",1),t._UZ(2,"i",2),t.qZA()(),t.TgZ(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),t._UZ(15,"img",12),t.qZA()(),t.TgZ(16,"h4",13),t._uU(17,"Reset Password"),t.qZA(),t.TgZ(18,"p",14),t._uU(19,"Reset your password to ezpay."),t.qZA()(),t.TgZ(20,"div",15)(21,"div",16),t._uU(22," Enter your Email and instructions will be sent to you! "),t.qZA(),t.TgZ(23,"form",17),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.YNc(24,N,2,2,"ngb-alert",18),t.TgZ(25,"div",19)(26,"label",20),t._uU(27,"Email"),t.qZA(),t._UZ(28,"input",21),t.YNc(29,L,3,2,"div",22),t.qZA(),t.TgZ(30,"div",23)(31,"button",24),t._uU(32,"Reset"),t.qZA()()()(),t.TgZ(33,"div",25)(34,"p"),t._uU(35,"Don't have an account ? "),t.TgZ(36,"a",26),t._uU(37," Log in "),t.qZA()(),t.TgZ(38,"p"),t._uU(39,"\xa9 2021 USLI."),t.qZA()()()()()()()(),t.TgZ(40,"div",27)(41,"div",28),t._UZ(42,"div",29),t.qZA()()()()()),2&n&&(t.xp6(23),t.Q6J("formGroup",i.resetForm),t.xp6(1),t.Q6J("ngIf",i.error),t.xp6(4),t.Q6J("ngClass",t.VKq(4,Q,i.submitted&&i.f.email.errors)),t.xp6(1),t.Q6J("ngIf",i.submitted&&i.f.email.errors))},dependencies:[d.mk,d.O5,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,u.xm,a.yS]}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.Bz.forChild(R),a.Bz]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,o.UX,u._A,b.W,E]}),e})()}}]);