(self.webpackChunkSoriana=self.webpackChunkSoriana||[]).push([[7459],{7459:(o,n,t)=>{"use strict";t.r(n),t.d(n,{KidsPageModule:()=>b});var i=t(8583),r=t(665),e=t(8945),a=t(5496),c=t(4762),l=t(9297),s=t(1258),g=t(3018),p=t(910),Z=t(2305),u=t(970);function d(o,n){if(1&o){const o=g.EpF();g.TgZ(0,"ion-col",36),g.TgZ(1,"ion-card",37),g.TgZ(2,"img",38),g.NdJ("click",function(){const n=g.CHM(o).$implicit;return g.oxw().lanzarModal(n.id)}),g.qZA(),g.qZA(),g.TgZ(3,"ion-card",39),g.TgZ(4,"ion-card-title",40),g._uU(5),g.qZA(),g.TgZ(6,"ion-card-subtitle",41),g._uU(7),g.qZA(),g.TgZ(8,"ion-row"),g.TgZ(9,"ion-col"),g._UZ(10,"ion-icon",42),g.qZA(),g.TgZ(11,"ion-col"),g.TgZ(12,"ion-card-title"),g.TgZ(13,"b",43),g._uU(14),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(15,"ion-button",44),g.NdJ("click",function(){const n=g.CHM(o).$implicit;return g.oxw().addToCart(n.id)}),g._uU(16,"Agregar"),g.qZA(),g.qZA()}if(2&o){const o=n.$implicit;g.xp6(2),g.Q6J("src",o.image,g.LSH),g.xp6(3),g.Oqu(o.name),g.xp6(2),g.Oqu(o.description),g.xp6(7),g.Oqu(o.price)}}const m=[{path:"",component:(()=>{class o{constructor(o,n,t){this.route=o,this.modalCtrl=n,this.cartService=t,this.products=[{id:21,name:"Sudadera",image:"assets/sudadera.jpg",url:"",description:"Piru",size:"14",price:"$259"},{id:22,name:"Playera",image:"assets/thing.jpg",url:"",description:"Sibuts",size:"12",price:"$249"},{id:23,name:"Impermeable",image:"assets/impermeable.png",url:"",description:"Peques",size:"2 a 3 a\xf1os",price:"$439"},{id:24,name:"Vestido",image:"assets/vestido.jpg",url:"",description:"Up",size:"3 a\xf1os",price:"$279"}],this.flechaDer="assets/flecha_derecha.png",this.productos()}ngOnInit(){}redirect(){this.route.navigate(["home"])}moda(){this.route.navigate(["department"])}lanzarModal(o){return(0,c.mG)(this,void 0,void 0,function*(){(yield this.modalCtrl.create({component:l.s,backdropDismiss:!0,showBackdrop:!0,cssClass:"modalArticulo",componentProps:this.products[o-17]})).present()})}productos(){}addToCart(o){this.cartService.addToCart(o),this.lanzarCarrito()}lanzarCarrito(){return(0,c.mG)(this,void 0,void 0,function*(){(yield this.modalCtrl.create({component:s.Y,backdropDismiss:!0,showBackdrop:!0,cssClass:"modalCarrito"})).present()})}}return o.\u0275fac=function(n){return new(n||o)(g.Y36(a.F0),g.Y36(e.IN),g.Y36(p.N))},o.\u0275cmp=g.Xpm({type:o,selectors:[["app-kids"]],decls:83,vars:4,consts:[[3,"fullscreen"],[1,"row-header"],["size","1",3,"click"],[1,"margins"],["size","0.5"],[1,"flechas",3,"src"],["size","1.5"],[1,"moda",3,"click"],["size","1","ion-col",""],["color","rosa"],[1,"ion-align-items-center"],[1,"header"],[1,"margin-row"],["size","2",4,"ngFor","ngForOf"],[1,"margin-filter"],[1,"filter"],[1,"filter-text"],["name","filter-outline",1,"filter-icon"],[1,"label-f"],["multiple","true","cancelText","Cancelar","okText","Aplicar"],["value","blusas"],["value","shorts"],["value","zapatos"],["value","vestidos"],["value","menor"],["value","medio"],["value","mayor"],["value","alto"],["value","flexi"],["value","oggi"],["value","kangaroo"],["value","xs"],["value","s"],["value","m"],["value","g"],["value","xl"],["size","2"],[1,"item"],[3,"src","click"],["color","marfil",1,"card-background"],[1,"title"],[1,"subtitle"],["name","heart-outline",1,"favorite"],[1,"price"],["color","pasto",1,"button",3,"click"]],template:function(o,n){1&o&&(g._UZ(0,"app-toolbar2"),g.TgZ(1,"ion-content",0),g.TgZ(2,"ion-row",1),g.TgZ(3,"ion-col",2),g.NdJ("click",function(){return n.redirect()}),g.TgZ(4,"ion-text",3),g._uU(5,"Inicio"),g.qZA(),g.qZA(),g.TgZ(6,"ion-col",4),g._UZ(7,"img",5),g.qZA(),g.TgZ(8,"ion-col",6),g.TgZ(9,"ion-text",7),g.NdJ("click",function(){return n.moda()}),g._uU(10,"Moda y accesorios"),g.qZA(),g.qZA(),g.TgZ(11,"ion-col",4),g._UZ(12,"img",5),g.qZA(),g.TgZ(13,"ion-col",8),g.TgZ(14,"ion-text",9),g.TgZ(15,"b"),g._uU(16,"Ni\xf1os"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(17,"ion-grid",10),g.TgZ(18,"ion-row"),g.TgZ(19,"ion-col"),g.TgZ(20,"ion-text"),g.TgZ(21,"h1",11),g.TgZ(22,"b"),g._uU(23,"Ni\xf1os"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(24,"ion-grid"),g.TgZ(25,"ion-row",12),g.YNc(26,d,17,4,"ion-col",13),g.TgZ(27,"ion-col",14),g.TgZ(28,"ion-card",15),g.TgZ(29,"h4",16),g._UZ(30,"ion-icon",17),g._uU(31,"Filtrar por"),g.qZA(),g.TgZ(32,"ion-item",18),g.TgZ(33,"ion-label"),g._uU(34,"Categor\xedas"),g.qZA(),g.TgZ(35,"ion-select",19),g.TgZ(36,"ion-select-option",20),g._uU(37,"Blusas"),g.qZA(),g.TgZ(38,"ion-select-option",21),g._uU(39,"Sudaderas"),g.qZA(),g.TgZ(40,"ion-select-option",22),g._uU(41,"Playeras"),g.qZA(),g.TgZ(42,"ion-select-option",23),g._uU(43,"Vestidos"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(44,"ion-item",18),g.TgZ(45,"ion-label"),g._uU(46,"Precio"),g.qZA(),g.TgZ(47,"ion-select",19),g.TgZ(48,"ion-select-option",24),g._uU(49,"0 a 99"),g.qZA(),g.TgZ(50,"ion-select-option",25),g._uU(51,"100 a 249"),g.qZA(),g.TgZ(52,"ion-select-option",26),g._uU(53,"249 a 599"),g.qZA(),g.TgZ(54,"ion-select-option",27),g._uU(55,"Mas de 599"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(56,"ion-item",18),g.TgZ(57,"ion-label"),g._uU(58,"Marca"),g.qZA(),g.TgZ(59,"ion-select",19),g.TgZ(60,"ion-select-option",28),g._uU(61,"Piru"),g.qZA(),g.TgZ(62,"ion-select-option",29),g._uU(63,"Sibuts"),g.qZA(),g.TgZ(64,"ion-select-option",30),g._uU(65,"Peques"),g.qZA(),g.TgZ(66,"ion-select-option",30),g._uU(67,"Ups"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(68,"ion-item",18),g.TgZ(69,"ion-label"),g._uU(70,"Talla"),g.qZA(),g.TgZ(71,"ion-select",19),g.TgZ(72,"ion-select-option",31),g._uU(73,"Extra chica"),g.qZA(),g.TgZ(74,"ion-select-option",32),g._uU(75,"Chica"),g.qZA(),g.TgZ(76,"ion-select-option",33),g._uU(77,"Mediana"),g.qZA(),g.TgZ(78,"ion-select-option",34),g._uU(79,"Grande"),g.qZA(),g.TgZ(80,"ion-select-option",35),g._uU(81,"Extra grande"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g._UZ(82,"app-footer"),g.qZA()),2&o&&(g.xp6(1),g.Q6J("fullscreen",!0),g.xp6(6),g.Q6J("src",n.flechaDer,g.LSH),g.xp6(5),g.Q6J("src",n.flechaDer,g.LSH),g.xp6(14),g.Q6J("ngForOf",n.products))},directives:[Z.f,e.W2,e.Nd,e.wI,e.yW,e.jY,i.sg,e.PM,e.gu,e.Ie,e.Q$,e.t9,e.QI,e.n0,u.c,e.gZ,e.tO,e.YG],styles:[".flechas[_ngcontent-%COMP%]{width:24px;height:24px}.margins[_ngcontent-%COMP%]{margin-left:50px;margin-top:50px;cursor:pointer;text-decoration:blink}.margin-toolbar[_ngcontent-%COMP%]{margin-top:10px}.moda[_ngcontent-%COMP%]{cursor:pointer;text-decoration:blink;text-align:center}.row-header[_ngcontent-%COMP%]{margin-top:20px;height:40px}.ion-color-rosa[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-rosa);--ion-color-base-rgb:var(--ion-color-rosa-rgb);--ion-color-contrast:var(--ion-color-rosa-contrast);--ion-color-contrast-rgb:var(--ion-color-rosa-contrast-rgb);--ion-color-shade:var(--ion-color-rosa-shade);--ion-color-tint:var(--ion-color-rosa-tint)}img[_ngcontent-%COMP%]{width:190px;height:150px;border-radius:15px!important;margin-left:10px;cursor:pointer}.card-background[_ngcontent-%COMP%]{width:170px;height:170px}.title[_ngcontent-%COMP%]{margin-left:20px;margin-top:15px}.favorite[_ngcontent-%COMP%]{margin-left:10px;width:25px;height:25px}.price[_ngcontent-%COMP%]{margin-left:20px;margin-bottom:10px;margin-top:10px}.subtitle[_ngcontent-%COMP%]{margin-left:20px;margin-top:15px;margin-bottom:60px}.button[_ngcontent-%COMP%]{width:170px;height:40px;margin-left:10px}.ion-color-pasto[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-pasto);--ion-color-base-rgb:var(--ion-color-pasto-rgb);--ion-color-contrast:var(--ion-color-pasto-contrast);--ion-color-contrast-rgb:var(--ion-color-pasto-contrast-rgb);--ion-color-shade:var(--ion-color-pasto-shade);--ion-color-tint:var(--ion-color-pasto-tint)}.text[_ngcontent-%COMP%]{text-align:center;margin-top:10px}.item[_ngcontent-%COMP%]{box-shadow:none!important;height:200px;width:140px}.margin-row[_ngcontent-%COMP%]{margin-left:50px}.margin-filter[_ngcontent-%COMP%]{margin-left:120px}.flechaIzq[_ngcontent-%COMP%]{margin-left:50px}.flechaDer[_ngcontent-%COMP%], .flechaIzq[_ngcontent-%COMP%]{box-shadow:none!important;width:100px;height:300px}.header[_ngcontent-%COMP%]{text-align:center;margin-bottom:80px}.margin2[_ngcontent-%COMP%]{margin-left:200px}.header2[_ngcontent-%COMP%]{margin-left:580px;margin-bottom:20px}.label-f[_ngcontent-%COMP%]{width:210px;height:50px}.filter[_ngcontent-%COMP%]{width:210px;height:247px}.filter-icon[_ngcontent-%COMP%]{margin-left:8px;margin-right:10px}.filter-text[_ngcontent-%COMP%]{margin-left:10px}.ion-color-marfil[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-marfil);--ion-color-base-rgb:var(--ion-color-marfil-rgb);--ion-color-contrast:var(--ion-color-marfil-contrast);--ion-color-contrast-rgb:var(--ion-color-marfil-contrast-rgb);--ion-color-shade:var(--ion-color-marfil-shade);--ion-color-tint:var(--ion-color-marfil-tint)}.ion-color-carbon[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-carbon);--ion-color-base-rgb:var(--ion-color-carbon-rgb);--ion-color-contrast:var(--ion-color-carbon-contrast);--ion-color-contrast-rgb:var(--ion-color-carbon-contrast-rgb);--ion-color-shade:var(--ion-color-carbon-shade);--ion-color-tint:var(--ion-color-carbon-tint)}"]}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=g.oAB({type:o}),o.\u0275inj=g.cJS({imports:[[a.Bz.forChild(m)],a.Bz]}),o})();var x=t(6606),f=t(6444),q=t(1589),T=t(7655);let b=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=g.oAB({type:o}),o.\u0275inj=g.cJS({imports:[[i.ez,r.u5,e.Pc,h,x.Y,f._,q.s,T.i]]}),o})()}}]);