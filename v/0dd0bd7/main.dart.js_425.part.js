((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cLX:function cLX(){},cLW:function cLW(){},
du2(){return new B.EV(null)},
EV:function EV(d){this.a=d},
aJN:function aJN(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cgn:function cgn(d){this.a=d},
cgm:function cgm(){},
cgk:function cgk(){},
cgj:function cgj(d){this.a=d},
cg9:function cg9(d){this.a=d},
cgi:function cgi(d,e,f){this.a=d
this.b=e
this.c=f},
cga:function cga(){},
cgb:function cgb(d){this.a=d},
cgc:function cgc(){},
cgd:function cgd(){},
cge:function cge(){},
cgl:function cgl(){},
cgf:function cgf(d){this.a=d},
cg8:function cg8(d){this.a=d},
cgg:function cgg(d){this.a=d},
cg7:function cg7(d){this.a=d},
cgh:function cgh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I,K
J=c[1]
A=c[0]
C=c[2]
G=c[155]
H=c[205]
B=a.updateHolder(c[36],B)
D=c[354]
E=c[81]
F=c[225]
I=c[120]
K=c[226]
B.EV.prototype={
S(){return new B.aJN(new A.aE(C.ak,$.aa()))}}
B.aJN.prototype={
ad(){this.aq()
this.w.an(0,new B.cgn(this))},
m(){var x=this.w
x.Z$=$.aa()
x.W$=0
this.a7()},
u(d){var x=this,w=null,v=x.gR().G($.d16(),y.m),u=x.w,t=C.f.B(u.a.a),s=y.u
return A.cO(w,C.ji,new A.bB(C.aw,w,C.aC,C.y,A.a([A.bz(!1,new A.n1(A.a([A.aJ(w,A.aS(d,C.b5,y.x).w.r.b,w),D.bLv,new A.S(C.ee,new G.FQ(u,"Pesquisar conversas",!0,w),w),F.a9a],s),A.hC(v,new B.cgi(x,t.toLowerCase(),d),new B.cgj(x),new B.cgk(),!1,!0,!1),w),w,C.Z,!1),D.bPl],s),w),!0,w)}}
var z=a.updateTypes([])
B.cLX.prototype={
$1(d){return this.aFS(d)},
aFS(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cj(d)
t=$.Q().b
t===$&&A.b()
s=J
x=3
return A.d(t.P("conversations").ai(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, event_date)").U("partner_id",u).cJ(0,"last_message_at",!1),$async$$1)
case 3:v=s.d9(f,new B.cLW(),y.g).bx(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1455}
B.cLW.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="wedding_id",h="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.B(v?j:J.i(w,"partner_name_1"))
t=A.B(v?j:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
r=A.Y(x.h(d,"id"))
q=A.Y(x.h(d,i))
p=A.Y(x.h(d,"partner_id"))
o=A.Y(x.h(d,i))
n=A.cYu(w,j)
m=A.B(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.db(A.Y(x.h(d,h)))
l=A.B(v?j:J.i(w,"owner_id"))
k=A.zM(A.B(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"event_date")
return new A.eA(r,s,o,n,q,p,m,x,0,l,I.cIj(k,A.d0(A.p(v==null?"":v))),C.jU)},
$S:1456}
B.cgn.prototype={
$0(){return this.a.p(new B.cgm())},
$S:0}
B.cgm.prototype={
$0(){},
$S:0}
B.cgk.prototype={
$0(){return C.f0},
$S:59}
B.cgj.prototype={
$2(d,e){return new A.jg("N\xe3o foi poss\xedvel carregar.",new B.cg9(this.a),null)},
$S:51}
B.cg9.prototype={
$0(){return this.a.gR().aj($.d16())},
$S:0}
B.cgi.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.deI(a5,new B.cga()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a6<1>")
x=A.U(new A.a6(a3,new B.cgb(a4),w),w.i("w.E"))}if(a3.length===0)return D.aDY
if(x.length===0)return A.bN(A.h('Sem conversas para "'+C.f.B(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a6(a3,new B.cgc(),A.a8(a3).i("a6<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a6<1>")
u=A.U(new A.a6(x,new B.cgd(),w),w.i("w.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.H)(u),++s){r=u[s]
J.bq(t.bH(0,E.deJ(r.w),new B.cge()),r)}q=new B.cgl()
w=y.u
a4=A.a([new A.S(K.CJ,A.N(A.a([q.$3("Todas",!a4.x,new B.cgf(a4)),C.ab,q.$4$count("N\xe3o lidas",a4.x,new B.cgg(a4),v)],w),C.v,C.h,C.l,0,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.x(a2,A.h(C.Fq[m],a2,a2,a2,a2,C.aH,a2,a2),C.r,a2,a2,F.Kj,a2,a2,F.Na,C.i1,a2,a2,a2)
k=A.a([],w)
j=0
for(;;){i=t.h(0,m)
i.toString
if(!(j<J.aO(i)))break
i=t.h(0,m)
i.toString
i=J.i(i,j)
h=t.h(0,m)
h.toString
h=J.i(h,j)
g=t.h(0,m)
g.toString
g=J.i(g,j)
f=t.h(0,m)
f.toString
f=E.cKo(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4y(new A.cf(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.Fb,new B.cgh(n,t,m,j),j===J.aO(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.S(C.bG,A.z(k,C.v,C.h,C.l),a2)],w))}}return A.d4(a4,a2,H.nf,a2,a2,!1,!1)},
$S:1457}
B.cga.prototype={
$1(d){return d.y},
$S:231}
B.cgb.prototype={
$1(d){return C.f.t(d.b.toLowerCase(),this.a)},
$S:149}
B.cgc.prototype={
$1(d){return d.x>0},
$S:149}
B.cgd.prototype={
$1(d){return d.x>0},
$S:149}
B.cge.prototype={
$0(){return A.a([],y.B)},
$S:422}
B.cgl.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.at:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aH(v,v,e?C.t:C.z,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.z
w=A.W(10)
C.e.n(r,A.a([C.bj,A.x(C.K,A.h(A.p(g),v,v,v,v,A.aH(v,v,e?$.at:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v),C.r,v,C.lb,new A.I(x,v,v,w,v,v,C.x),v,20,v,C.lp,v,v,v)],s))}return A.aX(A.x(v,A.N(r,C.v,C.h,C.J,0,v),C.r,v,v,new A.I(u,v,v,t,v,v,C.x),v,38,v,C.cG,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1458}
B.cgf.prototype={
$0(){var x=this.a
return x.p(new B.cg8(x))},
$S:0}
B.cg8.prototype={
$0(){return this.a.x=!1},
$S:0}
B.cgg.prototype={
$0(){var x=this.a
return x.p(new B.cg7(x))},
$S:0}
B.cg7.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cgh.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ad(w.a).ak("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.br,[B.cLX,B.cLW,B.cgi,B.cga,B.cgb,B.cgc,B.cgd,B.cgl])
w(B.EV,A.dB)
w(B.aJN,A.dv)
x(A.bK,[B.cgn,B.cgm,B.cgk,B.cg9,B.cge,B.cgf,B.cg8,B.cgg,B.cg7,B.cgh])
w(B.cgj,A.cJ)})()
A.bp(b.typeUniverse,JSON.parse('{"EV":{"G":[],"e":[],"f":[]},"aJN":{"a0":["EV"]}}'))
var y=(function rtii(){var x=A.y
return{m:x("aw<t<eA>>"),g:x("eA"),B:x("r<eA>"),u:x("r<e>"),p:x("t<eA>"),y:x("a5<c,@>"),x:x("ds"),e:x("v"),A:x("a5<c,@>?"),q:x("L?")}})();(function constants(){D.aDY=new E.a3n(C.FY,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bLv=new A.lM("Mensagens",null,!1,null,20,!1,null)
D.bLN=new A.Lb(C.a1K,null)
D.bPl=new A.eE(0,null,0,0,null,null,D.bLN,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYA","d16",()=>A.ey(new B.cLX(),null,!1,null,null,y.p))})()};
(a=>{a["0OqVgXq/gkRXYYv7yx00P0BfU2g="]=a.current})($__dart_deferred_initializers__);