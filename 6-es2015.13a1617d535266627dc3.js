(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{cnSs:function(t,e,i){"use strict";i.r(e),i.d(e,"AuthModule",(function(){return S}));var n=i("ofXK"),r=i("3Pt+"),o=i("1kSV"),s=i("4zvT"),a=i("tyNb"),b=i("SxV6"),c=i("AytR"),l=i("fXoL"),d=i("7dP1"),u=i("DYii");const m=function(){return["/payonline"]};let g=(()=>{class t{constructor(t,e,i,n,r){this.formBuilder=t,this.route=e,this.router=i,this.authenticationService=n,this.authFackservice=r,this.submitted=!1,this.error="",this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.loginForm=this.formBuilder.group({email:["admin@usli.com",[r.r.required,r.r.email]],password:["123456",[r.r.required]]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,this.loginForm.invalid||("firebase"===c.a.defaultauth?this.authenticationService.login(this.f.email.value,this.f.password.value).then(t=>{this.router.navigate(["/"])}).catch(t=>{this.error=t||""}):this.authFackservice.login(this.f.email.value,this.f.password.value).pipe(Object(b.a)()).subscribe(t=>{this.router.navigate(["/"])},t=>{this.error=t||""}))}}return t.\u0275fac=function(e){return new(e||t)(l.Lb(r.c),l.Lb(a.a),l.Lb(a.c),l.Lb(d.a),l.Lb(u.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-login"]],decls:91,vars:3,consts:[[1,"covid-19"],["href","https://mailchi.mp/usli/covid-19-updates",1,"underlined"],["id","top-bar"],[1,"container","clearfix"],[1,"col_half","nobottommargin"],[1,"top-links"],[1,"col_half","fright","col_last","nobottommargin"],["id","header",1,"sticky-style-2"],[1,"container","header-row","clearfix","header","d-flex","align-items-center"],["id","logo"],["href","/","data-dark-logo","https://www.usli.com/media/ahopues0/usli-logo-2x.png"],[1,"standard-logo"],["src","https://www.usli.com/media/ahopues0/usli-logo-2x.png","alt","USLI Logo"],[1,"header-extras","header-extras-phone","d-flex","align-items-center"],[1,"header-phone"],[1,"header-extras","d-flex","align-items-center"],["href","https://customers.usli.com/sites/snap/USLI-SNAP.html",1,"button","button-rounded","button-reveal","button-broker","button-green","tright"],[1,"icon-circle-arrow-right"],["id","header-wrap"],["id","primary-menu",1,"style-2"],["id","primary-menu-trigger"],[1,"fa","fa-bars"],[1,"sf-js-enabled",2,"touch-action","pan-y"],[1,"sub-nav","sub-menu"],["href","#",1,"sf-with-ul"],["href","/products",1,"sf-with-ul"],[1,""],["href","https://www.bizresourcecenter.com/"],["href","/support/"],["href","/about-us",1,"sf-with-ul"],[1,"icon-line-menu"],[1,"row","placeholder"],[1,"container"],[1,"row"],[1,"col-lg-12","mt-3","d-flex","justify-content-end"],[1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"card","border-primary",2,"width","300px"],[1,"card-header","mt-0","text-center","bg-primary","text-white"],[1,"card-notice","text-center"],[1,"card-body"],[1,"col-md-12"],["for","contact-name",1,"col-form-label"],["type","text","value","","placeholder","Enter the Account Number","id","contact-name",1,"form-control"],["type","text","value","","placeholder","Enter the Zip/Postal Code","id","contact-name",1,"form-control"],[1,"row","mt-4"],[1,"col-md-12","d-flex","flex-column"],["type","button",1,"btn","btn-success","flex-fill",3,"routerLink"],[1,"line-through","mt-3","mb-3"],["type","submit",1,"btn","btn-primary","flex-fill"]],template:function(t,e){1&t&&(l.Rb(0,"h1",0),l.Hc(1," COVID-19 UPDATES: "),l.Rb(2,"a",1),l.Hc(3,"Learn More>>"),l.Qb(),l.Qb(),l.Rb(4,"div",2),l.Rb(5,"div",3),l.Rb(6,"div",4),l.Mb(7,"div",5),l.Qb(),l.Mb(8,"div",6),l.Qb(),l.Qb(),l.Rb(9,"header",7),l.Rb(10,"div",8),l.Rb(11,"div",9),l.Rb(12,"a",10),l.Rb(13,"span",11),l.Mb(14,"img",12),l.Qb(),l.Qb(),l.Qb(),l.Rb(15,"div",13),l.Rb(16,"div",14),l.Hc(17,"888-523-5545"),l.Qb(),l.Qb(),l.Rb(18,"div",15),l.Rb(19,"a",16),l.Mb(20,"i",17),l.Rb(21,"span"),l.Hc(22,"BROKER / AGENT LOGIN"),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Rb(23,"div",18),l.Rb(24,"nav",19),l.Rb(25,"div",3),l.Rb(26,"div",20),l.Mb(27,"i",21),l.Rb(28,"span"),l.Hc(29,"Navigation"),l.Qb(),l.Qb(),l.Rb(30,"ul",22),l.Rb(31,"li",23),l.Rb(32,"a",24),l.Rb(33,"div"),l.Hc(34,"Policy Services"),l.Qb(),l.Qb(),l.Qb(),l.Rb(35,"li",23),l.Rb(36,"a",25),l.Rb(37,"div"),l.Hc(38,"Products"),l.Qb(),l.Qb(),l.Qb(),l.Rb(39,"li",26),l.Rb(40,"a",27),l.Rb(41,"div"),l.Hc(42,"Business Resource Center"),l.Qb(),l.Qb(),l.Qb(),l.Rb(43,"li",26),l.Rb(44,"a",28),l.Rb(45,"div"),l.Hc(46,"Support"),l.Qb(),l.Qb(),l.Qb(),l.Rb(47,"li",23),l.Rb(48,"a",29),l.Rb(49,"div"),l.Hc(50,"About Us"),l.Qb(),l.Qb(),l.Qb(),l.Rb(51,"li",23),l.Rb(52,"a",24),l.Rb(53,"div"),l.Mb(54,"i",30),l.Hc(55,"Menu"),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Rb(56,"div",31),l.Rb(57,"div",32),l.Rb(58,"div",33),l.Rb(59,"div",34),l.Rb(60,"form",35),l.cc("ngSubmit",(function(){return e.onSubmit()})),l.Rb(61,"div",36),l.Rb(62,"h4",37),l.Hc(63,"Pay Online Now"),l.Qb(),l.Rb(64,"div",38),l.Hc(65,"(no login/account required)"),l.Qb(),l.Rb(66,"div",39),l.Rb(67,"div",33),l.Rb(68,"div",40),l.Rb(69,"label",41),l.Hc(70,"Account Number"),l.Qb(),l.Mb(71,"input",42),l.Qb(),l.Qb(),l.Rb(72,"div",33),l.Rb(73,"div",40),l.Rb(74,"label",41),l.Hc(75,"Zip/Postal Code"),l.Qb(),l.Mb(76,"input",43),l.Qb(),l.Qb(),l.Rb(77,"div",44),l.Rb(78,"div",45),l.Rb(79,"button",46),l.Hc(80,"Continue"),l.Qb(),l.Rb(81,"div",47),l.Hc(82,"OR"),l.Qb(),l.Rb(83,"button",48),l.Hc(84,"Login / Create Account"),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Rb(85,"div",31),l.Rb(86,"div",32),l.Hc(87,"\xa0"),l.Qb(),l.Qb(),l.Rb(88,"div",31),l.Rb(89,"div",32),l.Hc(90,"\xa0"),l.Qb(),l.Qb()),2&t&&(l.yb(60),l.lc("formGroup",e.loginForm),l.yb(19),l.lc("routerLink",l.oc(2,m)))},directives:[r.t,r.k,r.e,a.d],styles:['@import url("//fonts.googleapis.com/css?family=Lato:300,400,400i,700%7CRaleway:300,400,500,600,700,800,900%7CRoboto:700%2C500%2C400");.covid-19[_ngcontent-%COMP%]{display:block;box-sizing:border-box;padding:2px 15px;background-color:#f89728;color:#00549b;text-align:center;font-size:24px;font-weight:700;min-height:44px;margin:0}#top-bar[_ngcontent-%COMP%]{position:relative;border-bottom:1px solid #eee;height:45px;line-height:44px;font-size:13px}#header[_ngcontent-%COMP%], #header-wrap[_ngcontent-%COMP%], #logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;transition:height .4s ease,opacity .3s ease}#header[_ngcontent-%COMP%]{height:161px;position:relative;background-color:#fff;border-bottom:1px solid #f5f5f5}#page-submenu-trigger[_ngcontent-%COMP%], #primary-menu-trigger[_ngcontent-%COMP%]{opacity:0;pointer-events:none;cursor:pointer;font-size:14px;position:absolute;top:50%;margin-top:-25px;width:50px;height:50px;line-height:50px;text-align:center;transition:opacity .3s ease}.header-extras[_ngcontent-%COMP%]   .header-phone[_ngcontent-%COMP%]{display:inline-block;margin:0 10px;font-size:24px;font-weight:600;color:#00338e}#header[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%]{display:flex;align-content:stretch;align-items:center}#logo[_ngcontent-%COMP%]{position:relative;flex-grow:1;font-family:Raleway,sans-serif;font-size:36px;line-height:100%;margin-right:40px}@media (min-width:768px){.button.button-broker[_ngcontent-%COMP%]{padding:0 32px;font-size:16px;height:46px;line-height:46px}}.button.button-reveal[_ngcontent-%COMP%]{padding:0 28px;overflow:hidden}.button.button-rounded[_ngcontent-%COMP%]{border-radius:3px}.header-extras[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{margin:0}.button-green[_ngcontent-%COMP%]{background-color:#14661a}.button[_ngcontent-%COMP%]{display:inline-block;position:relative;cursor:pointer;outline:none;white-space:nowrap;margin:5px;padding:0 22px;font-size:14px;height:40px;line-height:40px;color:#fff;font-weight:600;text-transform:uppercase;letter-spacing:1px;border:none;text-shadow:1px 1px 1px rgba(0,0,0,.2)}.tright[_ngcontent-%COMP%]{text-align:right!important}a[_ngcontent-%COMP%]{text-decoration:none!important;color:#00338e}#primary-menu.style-2[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{float:left}#primary-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin:0}#primary-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{float:left;margin-left:2px}#primary-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}#primary-menu.style-2[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{padding-top:19px;padding-bottom:19px}#primary-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:block;line-height:22px;padding:39px 15px;color:#333;font-weight:700;font-size:13px;letter-spacing:1px;text-transform:uppercase;font-family:Raleway,sans-serif;transition:margin .4s ease,padding .4s ease}dd[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], li[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0;padding:0}.placeholder[_ngcontent-%COMP%]{height:480px;background:url(placeholder.6cc20dda691dae341503.png) no-repeat;background-size:auto;background-position:50%}']}),t})();var p=i("tk/3");let h=(()=>{class t{constructor(t){this.http=t}getAll(){return this.http.get("/api/login")}register(t){return this.http.post("/users/register",t)}}return t.\u0275fac=function(e){return new(e||t)(l.Zb(p.b))},t.\u0275prov=l.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function f(t,e){1&t&&(l.Rb(0,"ngb-alert",37),l.Hc(1,"Registeration successfull. "),l.Qb()),2&t&&l.lc("dismissible",!1)}function v(t,e){if(1&t&&(l.Rb(0,"ngb-alert",38),l.Hc(1),l.Qb()),2&t){const t=l.ec();l.lc("dismissible",!1),l.yb(1),l.Ic(t.error)}}function R(t,e){1&t&&(l.Rb(0,"div"),l.Hc(1,"Userame is required"),l.Qb())}function Q(t,e){if(1&t&&(l.Rb(0,"div",39),l.Fc(1,R,2,0,"div",40),l.Qb()),2&t){const t=l.ec();l.yb(1),l.lc("ngIf",t.f.username.errors.required)}}function y(t,e){1&t&&(l.Rb(0,"div"),l.Hc(1,"Email is required"),l.Qb())}function x(t,e){1&t&&(l.Rb(0,"div"),l.Hc(1,"Email must be a valid email address"),l.Qb())}function w(t,e){if(1&t&&(l.Rb(0,"div",39),l.Fc(1,y,2,0,"div",40),l.Fc(2,x,2,0,"div",40),l.Qb()),2&t){const t=l.ec();l.yb(1),l.lc("ngIf",t.f.email.errors.required),l.yb(1),l.lc("ngIf",t.f.email.errors.email)}}function C(t,e){1&t&&(l.Rb(0,"div"),l.Hc(1,"Password is required"),l.Qb())}function M(t,e){if(1&t&&(l.Rb(0,"div",39),l.Fc(1,C,2,0,"div",40),l.Qb()),2&t){const t=l.ec();l.yb(1),l.lc("ngIf",t.f.password.errors.required)}}const P=function(t){return{"is-invalid":t}};function O(t,e){if(1&t&&(l.Rb(0,"ngb-alert",30),l.Hc(1),l.Qb()),2&t){const t=l.ec();l.lc("dismissible",!1),l.yb(1),l.Ic(t.error)}}function _(t,e){1&t&&(l.Rb(0,"div"),l.Hc(1,"Email is required"),l.Qb())}function H(t,e){1&t&&(l.Rb(0,"div"),l.Hc(1,"Email must be a valid email address"),l.Qb())}function k(t,e){if(1&t&&(l.Rb(0,"div",31),l.Fc(1,_,2,0,"div",32),l.Fc(2,H,2,0,"div",32),l.Qb()),2&t){const t=l.ec();l.yb(1),l.lc("ngIf",t.f.email.errors.required),l.yb(1),l.lc("ngIf",t.f.email.errors.email)}}const I=function(t){return{"is-invalid":t}},F=[{path:"login",component:g},{path:"signup",component:(()=>{class t{constructor(t,e,i,n,r){this.formBuilder=t,this.route=e,this.router=i,this.authenticationService=n,this.userService=r,this.submitted=!1,this.error="",this.successmsg=!1,this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.signupForm=this.formBuilder.group({username:["",r.r.required],email:["",[r.r.required,r.r.email]],password:["",r.r.required]})}ngAfterViewInit(){}get f(){return this.signupForm.controls}onSubmit(){this.submitted=!0,this.signupForm.invalid||("firebase"===c.a.defaultauth?this.authenticationService.register(this.f.email.value,this.f.password.value).then(t=>{this.successmsg=!0,this.successmsg&&this.router.navigate(["/"])}).catch(t=>{this.error=t||""}):this.userService.register(this.signupForm.value).pipe(Object(b.a)()).subscribe(t=>{this.successmsg=!0,this.successmsg&&this.router.navigate(["/account/login"])},t=>{this.error=t||""}))}}return t.\u0275fac=function(e){return new(e||t)(l.Lb(r.c),l.Lb(a.a),l.Lb(a.c),l.Lb(d.a),l.Lb(h))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-signup"]],decls:58,vars:15,consts:[[1,"home-btn","d-none","d-sm-block"],["href","javascript:void()"],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","no-gutters"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["href","javascript:void()",1,"logo"],["src","assets/images/logo-dark.png","height","80","alt","logo"],[1,"fs-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","success",3,"dismissible",4,"ngIf"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],["for","username"],["type","text","formControlName","username","id","username","placeholder","Enter username",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],[1,"ri-lock-2-line","auti-custom-input-icon"],["for","password"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],[1,"mt-4","text-center"],[1,"mb-0"],["href","javascript:void()",1,"text-primary"],[1,"mt-5","text-center"],["routerLink","/account/login",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","success",3,"dismissible"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,e){1&t&&(l.Rb(0,"div",0),l.Rb(1,"a",1),l.Mb(2,"i",2),l.Qb(),l.Qb(),l.Rb(3,"div"),l.Rb(4,"div",3),l.Rb(5,"div",4),l.Rb(6,"div",5),l.Rb(7,"div",6),l.Rb(8,"div",7),l.Rb(9,"div",8),l.Rb(10,"div",9),l.Rb(11,"div"),l.Rb(12,"div",10),l.Rb(13,"div"),l.Rb(14,"a",11),l.Mb(15,"img",12),l.Qb(),l.Qb(),l.Rb(16,"h4",13),l.Hc(17,"Register account"),l.Qb(),l.Rb(18,"p",14),l.Hc(19,"Get your free ezpay account now."),l.Qb(),l.Qb(),l.Rb(20,"div",15),l.Rb(21,"form",16),l.cc("ngSubmit",(function(){return e.onSubmit()})),l.Fc(22,f,2,1,"ngb-alert",17),l.Fc(23,v,2,2,"ngb-alert",18),l.Rb(24,"div",19),l.Rb(25,"label",20),l.Hc(26,"Username"),l.Qb(),l.Mb(27,"input",21),l.Fc(28,Q,2,1,"div",22),l.Qb(),l.Rb(29,"div",19),l.Rb(30,"label",23),l.Hc(31,"Email"),l.Qb(),l.Mb(32,"input",24),l.Fc(33,w,3,2,"div",22),l.Qb(),l.Rb(34,"div",19),l.Mb(35,"i",25),l.Rb(36,"label",26),l.Hc(37,"Password"),l.Qb(),l.Mb(38,"input",27),l.Fc(39,M,2,1,"div",22),l.Qb(),l.Rb(40,"div",10),l.Rb(41,"button",28),l.Hc(42,"Register"),l.Qb(),l.Qb(),l.Rb(43,"div",29),l.Rb(44,"p",30),l.Hc(45,"By registering you agree to the ezpay "),l.Rb(46,"a",31),l.Hc(47,"Terms of Use"),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Rb(48,"div",32),l.Rb(49,"p"),l.Hc(50,"Already have an account ? "),l.Rb(51,"a",33),l.Hc(52," Login"),l.Qb(),l.Qb(),l.Rb(53,"p"),l.Hc(54,"\xa9 2021 USLI."),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Rb(55,"div",34),l.Rb(56,"div",35),l.Mb(57,"div",36),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb()),2&t&&(l.yb(21),l.lc("formGroup",e.signupForm),l.yb(1),l.lc("ngIf",e.successmsg),l.yb(1),l.lc("ngIf",e.error),l.yb(4),l.lc("ngClass",l.pc(9,P,e.submitted&&e.f.username.errors)),l.yb(1),l.lc("ngIf",e.submitted&&e.f.username.errors),l.yb(4),l.lc("ngClass",l.pc(11,P,e.submitted&&e.f.email.errors)),l.yb(1),l.lc("ngIf",e.submitted&&e.f.email.errors),l.yb(5),l.lc("ngClass",l.pc(13,P,e.submitted&&e.f.password.errors)),l.yb(1),l.lc("ngIf",e.submitted&&e.f.password.errors))},directives:[r.t,r.k,r.e,n.m,r.b,r.j,r.d,n.k,a.f,o.c],styles:[""]}),t})()},{path:"reset-password",component:(()=>{class t{constructor(t,e,i,n){this.formBuilder=t,this.route=e,this.router=i,this.authenticationService=n,this.submitted=!1,this.error="",this.success="",this.loading=!1,this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.resetForm=this.formBuilder.group({email:["",[r.r.required,r.r.email]]})}ngAfterViewInit(){}get f(){return this.resetForm.controls}onSubmit(){this.success="",this.submitted=!0,this.resetForm.invalid||"firebase"===c.a.defaultauth&&this.authenticationService.resetPassword(this.f.email.value).catch(t=>{this.error=t||""})}}return t.\u0275fac=function(e){return new(e||t)(l.Lb(r.c),l.Lb(a.a),l.Lb(a.c),l.Lb(d.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-passwordreset"]],decls:43,vars:6,consts:[[1,"home-btn","d-none","d-sm-block"],["href","javascript:void()"],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","no-gutters"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["href","javascript:void()",1,"logo"],["src","assets/images/logo-dark.png","height","80","alt","logo"],[1,"fs-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],["role","alert",1,"alert","alert-success","mb-4"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"mt-4","text-center"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],[1,"mt-5","text-center"],["routerLink","/account/login",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,e){1&t&&(l.Rb(0,"div",0),l.Rb(1,"a",1),l.Mb(2,"i",2),l.Qb(),l.Qb(),l.Rb(3,"div"),l.Rb(4,"div",3),l.Rb(5,"div",4),l.Rb(6,"div",5),l.Rb(7,"div",6),l.Rb(8,"div",7),l.Rb(9,"div",8),l.Rb(10,"div",9),l.Rb(11,"div"),l.Rb(12,"div",10),l.Rb(13,"div"),l.Rb(14,"a",11),l.Mb(15,"img",12),l.Qb(),l.Qb(),l.Rb(16,"h4",13),l.Hc(17,"Reset Password"),l.Qb(),l.Rb(18,"p",14),l.Hc(19,"Reset your password to ezpay."),l.Qb(),l.Qb(),l.Rb(20,"div",15),l.Rb(21,"div",16),l.Hc(22," Enter your Email and instructions will be sent to you! "),l.Qb(),l.Rb(23,"form",17),l.cc("ngSubmit",(function(){return e.onSubmit()})),l.Fc(24,O,2,2,"ngb-alert",18),l.Rb(25,"div",19),l.Rb(26,"label",20),l.Hc(27,"Email"),l.Qb(),l.Mb(28,"input",21),l.Fc(29,k,3,2,"div",22),l.Qb(),l.Rb(30,"div",23),l.Rb(31,"button",24),l.Hc(32,"Reset"),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Rb(33,"div",25),l.Rb(34,"p"),l.Hc(35,"Don't have an account ? "),l.Rb(36,"a",26),l.Hc(37," Log in "),l.Qb(),l.Qb(),l.Rb(38,"p"),l.Hc(39,"\xa9 2021 USLI."),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Rb(40,"div",27),l.Rb(41,"div",28),l.Mb(42,"div",29),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb()),2&t&&(l.yb(23),l.lc("formGroup",e.resetForm),l.yb(1),l.lc("ngIf",e.error),l.yb(4),l.lc("ngClass",l.pc(4,I,e.submitted&&e.f.email.errors)),l.yb(1),l.lc("ngIf",e.submitted&&e.f.email.errors))},directives:[r.t,r.k,r.e,n.m,r.b,r.j,r.d,n.k,a.f,o.c],styles:[""]}),t})()}];let L=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(e){return new(e||t)},imports:[[a.g.forChild(F)],a.g]}),t})(),S=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(e){return new(e||t)},imports:[[n.c,r.p,o.d,s.a,L]]}),t})()},jcJX:function(t,e,i){"use strict";i.r(e),i.d(e,"AccountModule",(function(){return c}));var n=i("ofXK"),r=i("tyNb"),o=i("fXoL");const s=[{path:"auth",loadChildren:()=>Promise.resolve().then(i.bind(null,"cnSs")).then(t=>t.AuthModule)}];let a=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[r.g.forChild(s)],r.g]}),t})();var b=i("cnSs");let c=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[n.c,a,b.AuthModule]]}),t})()}}]);