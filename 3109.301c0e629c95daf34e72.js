(self.webpackChunkSoriana=self.webpackChunkSoriana||[]).push([[3109],{3109:(o,n,t)=>{"use strict";t.r(n),t.d(n,{PromocionPageModule:()=>A});var r=t(8583),i=t(665),a=t(8945),c=t(5496),e=t(3018),l=t(910),g=t(2305),s=t(9547),Z=t(970);const p=[{path:"",component:(()=>{class o{constructor(o,n){this.route=o,this.carritoSvc=n,this.flechaDer="../assets/flecha_derecha.png",this.blusa_rosa="../assets/blusa_rosa.jpg",this.descuento=!0}ngOnInit(){this.envio=this.carritoSvc.getEnvio(),this.total=this.carritoSvc.getTotal(),this.subtotal=this.carritoSvc.getSubtotal()}resumen(){this.route.navigate(["resumen"])}envioGratis(){this.envio=this.carritoSvc.envioGratis(),this.total=this.carritoSvc.getTotal()}redirect(){this.route.navigate(["home"])}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(c.F0),e.Y36(l.N))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-promocion"]],decls:108,vars:5,consts:[[3,"fullscreen"],[1,"margin-toolbar"],[1,".ion-justify-content-start"],["size","1",3,"click"],[1,"margins"],["size","0.5"],[3,"src"],["color","rosa","size","2"],["color","rosa"],["size","1"],[1,"row-linea-envio"],["name","cart-outline",1,"icon-special"],[1,"row-linea"],["name","card-outline",1,"icons"],["name","pricetags-outline",1,"icon-elegido"],[2,"margin-left","9px","color","darkred"],["name","search-outline",1,"icons"],[2,"height","10px"],[2,"margin-left","13px"],["name","checkbox-outline",1,"icons"],[1,"align"],[2,"width","1000px","height","700px","margin-bottom","40px"],[1,"carrito-title"],[2,"margin-left","35px"],["size","3.5"],["color","porcelana",1,"puntos"],[2,"margin-left","20px"],["color","carmin"],["color","pasto",1,"label-check-terminos"],[1,"label-terminos"],[2,"margin-left","56px"],["color","porcelana",1,"cupones"],[2,"margin-top","20px","margin-left","7px","margin-bottom","10px"],[1,"input2"],["position","floating"],["required","false"],["color","pasto",2,"margin-left","290px",3,"click"],[1,"subtitles-row"],["color","pasto",1,"continuar-button",3,"click"]],template:function(o,n){1&o&&(e._UZ(0,"app-toolbar2"),e.TgZ(1,"ion-content",0),e.TgZ(2,"ion-grid",1),e.TgZ(3,"ion-row",2),e.TgZ(4,"ion-col",3),e.NdJ("click",function(){return n.redirect()}),e.TgZ(5,"ion-text",4),e._uU(6,"Inicio"),e.qZA(),e.qZA(),e.TgZ(7,"ion-col",5),e._UZ(8,"img",6),e.qZA(),e.TgZ(9,"ion-col",7),e.TgZ(10,"b"),e.TgZ(11,"ion-text",8),e._uU(12,"Carrito"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"ion-col",9),e.TgZ(14,"ion-row",10),e._UZ(15,"ion-icon",11),e.qZA(),e.TgZ(16,"ion-row",12),e.TgZ(17,"p"),e.TgZ(18,"small"),e._uU(19,"Datos de env\xedo"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"ion-col",9),e.TgZ(21,"ion-row",10),e._UZ(22,"ion-icon",13),e.qZA(),e.TgZ(23,"ion-row",12),e.TgZ(24,"p"),e.TgZ(25,"small"),e._uU(26,"M\xe9todo de pago"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(27,"ion-col",9),e.TgZ(28,"ion-row",10),e._UZ(29,"ion-icon",14),e.qZA(),e.TgZ(30,"ion-row",12),e.TgZ(31,"p"),e.TgZ(32,"small",15),e._uU(33,"Promociones"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(34,"ion-col",9),e.TgZ(35,"ion-row",10),e._UZ(36,"ion-icon",16),e.qZA(),e.TgZ(37,"ion-row",17),e.TgZ(38,"p"),e.TgZ(39,"small",18),e._uU(40,"Resumen"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(41,"ion-col"),e.TgZ(42,"ion-row",10),e._UZ(43,"ion-icon",19),e.qZA(),e.TgZ(44,"ion-row",17),e.TgZ(45,"p"),e.TgZ(46,"small"),e._uU(47,"Confirmaci\xf3n"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(48,"div",20),e.TgZ(49,"ion-card",21),e.TgZ(50,"h3",22),e.TgZ(51,"b"),e._uU(52,"Promociones"),e.qZA(),e.qZA(),e.TgZ(53,"ion-grid"),e.TgZ(54,"ion-row",23),e.TgZ(55,"ion-col",24),e.TgZ(56,"ion-card",25),e.TgZ(57,"h6",26),e._uU(58,"Puntos disponibles: "),e.TgZ(59,"ion-text",27),e.TgZ(60,"b"),e._uU(61," 35 pts"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(62,"ion-col",24),e.TgZ(63,"ion-card",25),e.TgZ(64,"h6",26),e._uU(65,"Puntos generados: "),e.TgZ(66,"ion-text",27),e.TgZ(67,"b"),e._uU(68," 25 pts"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(69,"ion-col"),e._UZ(70,"ion-checkbox",28),e.TgZ(71,"ion-label",29),e._uU(72,"Usar tarjeta de Recompensas"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(73,"h6",30),e._uU(74,"Productos que aplican a "),e.TgZ(75,"ion-text",27),e._uU(76,"MSI"),e.qZA(),e._uU(77," (Meses sin inter\xe9ses)"),e.qZA(),e.TgZ(78,"ion-grid"),e.TgZ(79,"ion-row"),e.TgZ(80,"ion-col"),e._UZ(81,"app-card-producto"),e.qZA(),e.TgZ(82,"ion-col"),e.TgZ(83,"ion-card",31),e.TgZ(84,"ion-title",32),e.TgZ(85,"b"),e._uU(86,"Agrega una promoci\xf3n"),e.qZA(),e.qZA(),e.TgZ(87,"ion-row"),e.TgZ(88,"ion-col"),e.TgZ(89,"ion-item",33),e.TgZ(90,"ion-label",34),e._uU(91,"Cup\xf3n de promoci\xf3n"),e.qZA(),e._UZ(92,"ion-input",35),e.qZA(),e.qZA(),e.TgZ(93,"ion-col"),e.TgZ(94,"ion-button",36),e.NdJ("click",function(){return n.envioGratis()}),e._uU(95," Aplicar "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(96,"ion-row",37),e.TgZ(97,"h6"),e._uU(98),e.qZA(),e.qZA(),e.TgZ(99,"ion-row",37),e.TgZ(100,"h6"),e._uU(101),e.qZA(),e.qZA(),e.TgZ(102,"ion-row",37),e.TgZ(103,"h6"),e._uU(104),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(105,"ion-button",38),e.NdJ("click",function(){return n.resumen()}),e._uU(106,"Continuar"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(107,"app-footer"),e.qZA()),2&o&&(e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(7),e.Q6J("src",n.flechaDer,e.LSH),e.xp6(90),e.hij("Subtotal: $",n.subtotal,""),e.xp6(3),e.hij("Env\xedo: $",n.envio," "),e.xp6(3),e.hij("Total: $",n.total," "))},directives:[g.f,a.W2,a.jY,a.Nd,a.wI,a.yW,a.gu,a.PM,a.nz,a.w,a.Q$,s.O,a.wd,a.Ie,a.pK,a.j9,a.YG,Z.c],styles:["img[_ngcontent-%COMP%]{width:24px;height:24px}.margins[_ngcontent-%COMP%]{margin-left:50px;margin-top:50px;cursor:pointer;text-decoration:blink}.articulo[_ngcontent-%COMP%]{margin-left:7px;margin-top:7px;width:100px;height:100px}.align[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.ion-color-natural[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-natural);--ion-color-base-rgb:var(--ion-color-natural-rgb);--ion-color-contrast:var(--ion-color-natural-contrast);--ion-color-contrast-rgb:var(--ion-color-natural-contrast-rgb);--ion-color-shade:var(--ion-color-natural-shade);--ion-color-tint:var(--ion-color-natural-tint)}.cupones[_ngcontent-%COMP%]{width:440px;height:340px}.subtitles-row[_ngcontent-%COMP%]{margin-left:50px}.continuar-button[_ngcontent-%COMP%]{margin-left:450px;margin-top:30px;margin-bottom:30px}.puntos[_ngcontent-%COMP%]{width:230px;height:50px}.label-terminos[_ngcontent-%COMP%]{margin-left:10px}.carrito-title[_ngcontent-%COMP%], .label-check-terminos[_ngcontent-%COMP%]{margin-top:30px}.carrito-title[_ngcontent-%COMP%]{text-align:center}.producto-card[_ngcontent-%COMP%]{margin-left:60px;height:170px;width:400px;padding-bottom:50px}.trash[_ngcontent-%COMP%]{width:20px;height:20px;margin-top:15px;margin-left:90px;cursor:pointer;text-decoration:blink}.ion-color-carmin[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-carmin);--ion-color-base-rgb:var(--ion-color-carmin-rgb);--ion-color-contrast:var(--ion-color-carmin-contrast);--ion-color-contrast-rgb:var(--ion-color-carmin-contrast-rgb);--ion-color-shade:var(--ion-color-carmin-shade);--ion-color-tint:var(--ion-color-carmin-tint)}.margin-toolbar[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:20px;margin-left:23px}.carrito-subtitle[_ngcontent-%COMP%], .carrito-title[_ngcontent-%COMP%]{margin-left:60px}.carrito-title[_ngcontent-%COMP%]{margin-top:20px;color:darkred;margin-bottom:20px}.input2[_ngcontent-%COMP%]{margin-top:40px;width:50px}.icon-elegido[_ngcontent-%COMP%], .icons[_ngcontent-%COMP%]{width:20px;height:20px}.icon-elegido[_ngcontent-%COMP%]{color:darkred}.ion-color-porcelana[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-porcelana);--ion-color-base-rgb:var(--ion-color-porcelana-rgb);--ion-color-contrast:var(--ion-color-porcelana-contrast);--ion-color-contrast-rgb:var(--ion-color-porcelana-contrast-rgb);--ion-color-shade:var(--ion-color-porcelana-shade);--ion-color-tint:var(--ion-color-porcelana-tint)}.icon-special[_ngcontent-%COMP%]{width:20px;height:20px}.input2[_ngcontent-%COMP%]{margin-top:10px;width:350px;margin-left:40px}.row-linea[_ngcontent-%COMP%]{height:10px}.continue[_ngcontent-%COMP%]{margin-top:40px;margin-left:750px;width:200px;height:40px;margin-bottom:30px}.row-linea-envio[_ngcontent-%COMP%]{height:10px;margin-left:27px}.ion-color-rosa[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-rosa);--ion-color-base-rgb:var(--ion-color-rosa-rgb);--ion-color-contrast:var(--ion-color-rosa-contrast);--ion-color-contrast-rgb:var(--ion-color-rosa-contrast-rgb);--ion-color-shade:var(--ion-color-rosa-shade);--ion-color-tint:var(--ion-color-rosa-tint)}.ion-color-pasto[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-pasto);--ion-color-base-rgb:var(--ion-color-pasto-rgb);--ion-color-contrast:var(--ion-color-pasto-contrast);--ion-color-contrast-rgb:var(--ion-color-pasto-contrast-rgb);--ion-color-shade:var(--ion-color-pasto-shade);--ion-color-tint:var(--ion-color-pasto-tint)}"]}),o})()}];let u=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[c.Bz.forChild(p)],c.Bz]}),o})();var m=t(6444),h=t(6376),x=t(6606);let A=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[r.ez,i.u5,a.Pc,u,m._,h.d,x.Y]]}),o})()}}]);