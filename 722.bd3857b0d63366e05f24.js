(self.webpackChunkSoriana=self.webpackChunkSoriana||[]).push([[722],{722:(o,t,n)=>{"use strict";n.r(t),n.d(t,{DespensaPageModule:()=>T});var i=n(8583),e=n(665),r=n(8945),a=n(5496),c=n(4762),l=n(1258),s=n(8785),g=n(3018),p=n(910),Z=n(2305),m=n(970);function d(o,t){if(1&o){const o=g.EpF();g.TgZ(0,"ion-col",30),g.TgZ(1,"ion-card",31),g.TgZ(2,"img",32),g.NdJ("click",function(){const t=g.CHM(o).$implicit;return g.oxw().lanzarModal(t.id)}),g.qZA(),g.qZA(),g.TgZ(3,"ion-card",33),g.TgZ(4,"ion-card-title",34),g._uU(5),g.qZA(),g.TgZ(6,"ion-card-subtitle",35),g._uU(7),g.qZA(),g.TgZ(8,"ion-row"),g.TgZ(9,"ion-col"),g._UZ(10,"ion-icon",36),g.qZA(),g.TgZ(11,"ion-col"),g.TgZ(12,"ion-card-title"),g.TgZ(13,"b",37),g._uU(14),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(15,"ion-button",38),g.NdJ("click",function(){const t=g.CHM(o).$implicit;return g.oxw().addToCart(t.id)}),g._uU(16,"Agregar"),g.qZA(),g.qZA()}if(2&o){const o=t.$implicit;g.xp6(2),g.Q6J("src",o.image,g.LSH),g.xp6(3),g.Oqu(o.name),g.xp6(2),g.Oqu(o.description),g.xp6(7),g.Oqu(o.price)}}const u=[{path:"",component:(()=>{class o{constructor(o,t,n){this.route=o,this.modalCtrl=t,this.cartService=n,this.products=[{id:25,name:"Arroz",image:"assets/arroz.jpg",url:"",description:"Verde valle",size:"32",price:"$34"},{id:26,name:"Frijol",image:"assets/frijol.jpg",url:"",description:"Frijolin",size:"L",price:"$39"},{id:27,name:"Elote",image:"assets/elote.jpg",url:"",description:"La coste\xf1a",size:"M",price:"$19"},{id:28,name:"Champi\xf1ones",image:"assets/champi.jpg",url:"",description:"Herdez",size:"38",price:"$25"}],this.flechaDer="assets/flecha_derecha.png",this.productos()}ngOnInit(){}redirect(){this.route.navigate(["home"])}moda(){this.route.navigate(["department"])}lanzarModal(o){return(0,c.mG)(this,void 0,void 0,function*(){(yield this.modalCtrl.create({component:s.j,backdropDismiss:!0,showBackdrop:!0,cssClass:"modalArticulo",componentProps:this.products[o-25]})).present()})}productos(){}addToCart(o){this.cartService.addToCart(o),this.lanzarCarrito()}lanzarCarrito(){return(0,c.mG)(this,void 0,void 0,function*(){(yield this.modalCtrl.create({component:l.Y,backdropDismiss:!0,showBackdrop:!0,cssClass:"modalCarrito"})).present()})}}return o.\u0275fac=function(t){return new(t||o)(g.Y36(a.F0),g.Y36(r.IN),g.Y36(p.N))},o.\u0275cmp=g.Xpm({type:o,selectors:[["app-despensa"]],decls:70,vars:3,consts:[[3,"fullscreen"],[1,"row-header"],["size","1",3,"click"],[1,"margins"],["size","0.5"],[1,"flechas",3,"src"],["size","1.5"],["color","rosa",1,"moda",3,"click"],[1,"ion-align-items-center"],[1,"header"],[1,"margin-row"],["size","2",4,"ngFor","ngForOf"],[1,"margin-filter"],[1,"filter"],[1,"filter-text"],["name","filter-outline",1,"filter-icon"],[1,"label-f"],["multiple","true","cancelText","Cancelar","okText","Aplicar"],["value","blusas"],["value","shorts"],["value","zapatos"],["value","menor"],["value","medio"],["value","mayor"],["value","flexi"],["value","oggi"],["value","kangaroo"],["value","xs"],["value","s"],["value","m"],["size","2"],[1,"item"],[3,"src","click"],["color","marfil",1,"card-background"],[1,"title"],[1,"subtitle"],["name","heart-outline",1,"favorite"],[1,"price"],["color","pasto",1,"button",3,"click"]],template:function(o,t){1&o&&(g._UZ(0,"app-toolbar2"),g.TgZ(1,"ion-content",0),g.TgZ(2,"ion-row",1),g.TgZ(3,"ion-col",2),g.NdJ("click",function(){return t.redirect()}),g.TgZ(4,"ion-text",3),g._uU(5,"Inicio"),g.qZA(),g.qZA(),g.TgZ(6,"ion-col",4),g._UZ(7,"img",5),g.qZA(),g.TgZ(8,"ion-col",6),g.TgZ(9,"b"),g.TgZ(10,"ion-text",7),g.NdJ("click",function(){return t.moda()}),g._uU(11,"Despensa"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(12,"ion-grid",8),g.TgZ(13,"ion-row"),g.TgZ(14,"ion-col"),g.TgZ(15,"ion-text"),g.TgZ(16,"h1",9),g.TgZ(17,"b"),g._uU(18,"Despensa"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(19,"ion-grid"),g.TgZ(20,"ion-row",10),g.YNc(21,d,17,4,"ion-col",11),g.TgZ(22,"ion-col",12),g.TgZ(23,"ion-card",13),g.TgZ(24,"h4",14),g._UZ(25,"ion-icon",15),g._uU(26,"Filtrar por"),g.qZA(),g.TgZ(27,"ion-item",16),g.TgZ(28,"ion-label"),g._uU(29,"Categor\xedas"),g.qZA(),g.TgZ(30,"ion-select",17),g.TgZ(31,"ion-select-option",18),g._uU(32,"Enlatados"),g.qZA(),g.TgZ(33,"ion-select-option",19),g._uU(34,"Granos"),g.qZA(),g.TgZ(35,"ion-select-option",20),g._uU(36,"Harinas"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(37,"ion-item",16),g.TgZ(38,"ion-label"),g._uU(39,"Precio"),g.qZA(),g.TgZ(40,"ion-select",17),g.TgZ(41,"ion-select-option",21),g._uU(42,"0 a 39"),g.qZA(),g.TgZ(43,"ion-select-option",22),g._uU(44,"40 a 99"),g.qZA(),g.TgZ(45,"ion-select-option",23),g._uU(46,"100 a 249"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(47,"ion-item",16),g.TgZ(48,"ion-label"),g._uU(49,"Marca"),g.qZA(),g.TgZ(50,"ion-select",17),g.TgZ(51,"ion-select-option",24),g._uU(52,"Verde valle"),g.qZA(),g.TgZ(53,"ion-select-option",25),g._uU(54,"La Coste\xf1a"),g.qZA(),g.TgZ(55,"ion-select-option",26),g._uU(56,"Herdez"),g.qZA(),g.TgZ(57,"ion-select-option",26),g._uU(58,"Frijol\xedn"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(59,"ion-item",16),g.TgZ(60,"ion-label"),g._uU(61,"Contenido"),g.qZA(),g.TgZ(62,"ion-select",17),g.TgZ(63,"ion-select-option",27),g._uU(64,"200g"),g.qZA(),g.TgZ(65,"ion-select-option",28),g._uU(66,"100g"),g.qZA(),g.TgZ(67,"ion-select-option",29),g._uU(68,"140g"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g._UZ(69,"app-footer"),g.qZA()),2&o&&(g.xp6(1),g.Q6J("fullscreen",!0),g.xp6(6),g.Q6J("src",t.flechaDer,g.LSH),g.xp6(14),g.Q6J("ngForOf",t.products))},directives:[Z.f,r.W2,r.Nd,r.wI,r.yW,r.jY,i.sg,r.PM,r.gu,r.Ie,r.Q$,r.t9,r.QI,r.n0,m.c,r.gZ,r.tO,r.YG],styles:[".flechas[_ngcontent-%COMP%]{width:24px;height:24px}.margins[_ngcontent-%COMP%]{margin-left:50px;margin-top:50px;cursor:pointer;text-decoration:blink}.margin-toolbar[_ngcontent-%COMP%]{margin-top:10px}.moda[_ngcontent-%COMP%]{cursor:pointer;text-decoration:blink;text-align:center}.row-header[_ngcontent-%COMP%]{margin-top:20px;height:40px}.ion-color-rosa[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-rosa);--ion-color-base-rgb:var(--ion-color-rosa-rgb);--ion-color-contrast:var(--ion-color-rosa-contrast);--ion-color-contrast-rgb:var(--ion-color-rosa-contrast-rgb);--ion-color-shade:var(--ion-color-rosa-shade);--ion-color-tint:var(--ion-color-rosa-tint)}img[_ngcontent-%COMP%]{width:190px;height:150px;border-radius:15px!important;margin-left:10px;cursor:pointer}.card-background[_ngcontent-%COMP%]{width:170px;height:170px}.title[_ngcontent-%COMP%]{margin-left:20px;margin-top:15px}.favorite[_ngcontent-%COMP%]{margin-left:10px;width:25px;height:25px}.price[_ngcontent-%COMP%]{margin-left:20px;margin-bottom:10px;margin-top:10px}.subtitle[_ngcontent-%COMP%]{margin-left:20px;margin-top:15px;margin-bottom:60px}.button[_ngcontent-%COMP%]{width:170px;height:40px;margin-left:10px}.ion-color-pasto[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-pasto);--ion-color-base-rgb:var(--ion-color-pasto-rgb);--ion-color-contrast:var(--ion-color-pasto-contrast);--ion-color-contrast-rgb:var(--ion-color-pasto-contrast-rgb);--ion-color-shade:var(--ion-color-pasto-shade);--ion-color-tint:var(--ion-color-pasto-tint)}.ion-color-marfil[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-marfil);--ion-color-base-rgb:var(--ion-color-marfil-rgb);--ion-color-contrast:var(--ion-color-marfil-contrast);--ion-color-contrast-rgb:var(--ion-color-marfil-contrast-rgb);--ion-color-shade:var(--ion-color-marfil-shade);--ion-color-tint:var(--ion-color-marfil-tint)}.text[_ngcontent-%COMP%]{text-align:center;margin-top:10px}.item[_ngcontent-%COMP%]{box-shadow:none!important;height:200px;width:140px}.margin-row[_ngcontent-%COMP%]{margin-left:50px}.margin-filter[_ngcontent-%COMP%]{margin-left:120px}.flechaIzq[_ngcontent-%COMP%]{margin-left:50px}.flechaDer[_ngcontent-%COMP%], .flechaIzq[_ngcontent-%COMP%]{box-shadow:none!important;width:100px;height:300px}.header[_ngcontent-%COMP%]{text-align:center;margin-bottom:80px}.margin2[_ngcontent-%COMP%]{margin-left:200px}.header2[_ngcontent-%COMP%]{margin-left:580px;margin-bottom:20px}.label-f[_ngcontent-%COMP%]{width:210px;height:50px}.filter[_ngcontent-%COMP%]{width:210px;height:247px}.filter-icon[_ngcontent-%COMP%]{margin-left:8px;margin-right:10px}.filter-text[_ngcontent-%COMP%]{margin-left:10px}"]}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=g.oAB({type:o}),o.\u0275inj=g.cJS({imports:[[a.Bz.forChild(u)],a.Bz]}),o})();var x=n(6606),f=n(6444),A=n(1589),q=n(7655);let T=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=g.oAB({type:o}),o.\u0275inj=g.cJS({imports:[[i.ez,e.u5,r.Pc,h,x.Y,f._,A.s,q.i]]}),o})()}}]);