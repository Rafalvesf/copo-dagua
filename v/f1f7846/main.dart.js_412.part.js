((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cMq:function cMq(){},cMp:function cMp(){},
du5(){return new B.F8(null)},
F8:function F8(d){this.a=d},
aKC:function aKC(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cgH:function cgH(d){this.a=d},
cgG:function cgG(){},
cgE:function cgE(){},
cgD:function cgD(d){this.a=d},
cgt:function cgt(d){this.a=d},
cgC:function cgC(d,e,f){this.a=d
this.b=e
this.c=f},
cgu:function cgu(){},
cgv:function cgv(d){this.a=d},
cgw:function cgw(){},
cgx:function cgx(){},
cgy:function cgy(){},
cgF:function cgF(){},
cgz:function cgz(d){this.a=d},
cgs:function cgs(d){this.a=d},
cgA:function cgA(d){this.a=d},
cgr:function cgr(d){this.a=d},
cgB:function cgB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I,K
J=c[1]
A=c[0]
C=c[2]
G=c[153]
H=c[207]
B=a.updateHolder(c[36],B)
D=c[356]
E=c[82]
F=c[228]
I=c[118]
K=c[229]
B.F8.prototype={
R(){return new B.aKC(new A.aF(C.al,$.aa()))}}
B.aKC.prototype={
ad(){this.ar()
this.w.an(0,new B.cgH(this))},
m(){var x=this.w
x.Y$=$.aa()
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=x.gS().H($.d1m(),y.m),u=x.w,t=C.f.C(u.a.a),s=y.u
return A.cP(w,C.lj,new A.bD(C.aA,w,C.aG,C.z,A.a([A.bF(!1,new A.mg(A.a([A.aH(w,A.ax(d,C.b4,y.x).w.r.b,w),D.bMX,new A.Q(C.eh,new G.G2(u,"Pesquisar conversas",!0,w),w),F.aa1],s),A.hq(v,new B.cgC(x,t.toLowerCase(),d),new B.cgD(x),new B.cgE(),!1,!0,!1),w),w,C.a_,!1),D.bQN],s),w),!0,w)}}
var z=a.updateTypes([])
B.cMq.prototype={
$1(d){return this.aH4(d)},
aH4(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cv(d)
t=$.R().b
t===$&&A.b()
s=J
x=3
return A.d(t.P("conversations").am(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, event_date)").V("partner_id",u).cZ(0,"last_message_at",!1),$async$$1)
case 3:v=s.d6(f,new B.cMp(),y.g).by(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1454}
B.cMp.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="wedding_id",h="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.C(v?j:J.i(w,"partner_name_1"))
t=A.C(v?j:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
r=A.a0(x.h(d,"id"))
q=A.a0(x.h(d,i))
p=A.a0(x.h(d,"partner_id"))
o=A.a0(x.h(d,i))
n=A.cYN(w,j)
m=A.C(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.dc(A.a0(x.h(d,h)))
l=A.C(v?j:J.i(w,"owner_id"))
k=A.DG(A.C(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"event_date")
return new A.eG(r,s,o,n,q,p,m,x,0,l,I.cIT(k,A.dd(A.q(v==null?"":v))),C.k0)},
$S:1455}
B.cgH.prototype={
$0(){return this.a.p(new B.cgG())},
$S:0}
B.cgG.prototype={
$0(){},
$S:0}
B.cgE.prototype={
$0(){return C.ep},
$S:45}
B.cgD.prototype={
$2(d,e){return new A.jf("N\xe3o foi poss\xedvel carregar.",new B.cgt(this.a),null)},
$S:52}
B.cgt.prototype={
$0(){return this.a.gS().aj($.d1m())},
$S:0}
B.cgC.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.deW(a5,new B.cgu()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a6<1>")
x=A.U(new A.a6(a3,new B.cgv(a4),w),w.i("B.E"))}if(a3.length===0)return D.aF5
if(x.length===0)return A.bN(A.h('Sem conversas para "'+C.f.C(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a6(a3,new B.cgw(),A.a8(a3).i("a6<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a6<1>")
u=A.U(new A.a6(x,new B.cgx(),w),w.i("B.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.H)(u),++s){r=u[s]
J.bt(t.bK(0,E.deX(r.w),new B.cgy()),r)}q=new B.cgF()
w=y.u
a4=A.a([new A.Q(K.De,A.N(A.a([q.$3("Todas",!a4.x,new B.cgz(a4)),C.ag,q.$4$count("N\xe3o lidas",a4.x,new B.cgA(a4),v)],w),C.w,C.h,C.l,0,a2,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.z(a2,A.h(C.FX[m],a2,a2,a2,a2,C.aJ,a2,a2,a2),C.r,a2,a2,F.L_,a2,a2,F.NY,C.iN,a2,a2,a2)
k=A.a([],w)
j=0
for(;;){i=t.h(0,m)
i.toString
if(!(j<J.aR(i)))break
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
f=E.cKX(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4J(new A.cp(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.FJ,new B.cgB(n,t,m,j),j===J.aR(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.Q(C.bV,A.x(k,C.w,C.h,C.l,0,C.u),a2)],w))}}return A.d0(a4,a2,H.nC,a2,a2,!1,C.a3,!1)},
$S:1456}
B.cgu.prototype={
$1(d){return d.y},
$S:266}
B.cgv.prototype={
$1(d){return C.f.q(d.b.toLowerCase(),this.a)},
$S:127}
B.cgw.prototype={
$1(d){return d.x>0},
$S:127}
B.cgx.prototype={
$1(d){return d.x>0},
$S:127}
B.cgy.prototype={
$0(){return A.a([],y.B)},
$S:466}
B.cgF.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.au:C.t,t=A.V(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aJ(v,v,e?C.t:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.A
w=A.V(10)
C.e.n(r,A.a([C.bm,A.z(C.L,A.h(A.q(g),v,v,v,v,A.aJ(v,v,e?$.au:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.lq,new A.I(x,v,v,w,v,v,C.y),v,20,v,C.lG,v,v,v)],s))}return A.aW(A.z(v,A.N(r,C.w,C.h,C.K,0,v,v),C.r,v,v,new A.I(u,v,v,t,v,v,C.y),v,38,v,C.cP,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1457}
B.cgz.prototype={
$0(){var x=this.a
return x.p(new B.cgs(x))},
$S:0}
B.cgs.prototype={
$0(){return this.a.x=!1},
$S:0}
B.cgA.prototype={
$0(){var x=this.a
return x.p(new B.cgr(x))},
$S:0}
B.cgr.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cgB.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ah(w.a).av("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bz,[B.cMq,B.cMp,B.cgC,B.cgu,B.cgv,B.cgw,B.cgx,B.cgF])
w(B.F8,A.dD)
w(B.aKC,A.dz)
x(A.bR,[B.cgH,B.cgG,B.cgE,B.cgt,B.cgy,B.cgz,B.cgs,B.cgA,B.cgr,B.cgB])
w(B.cgD,A.cN)})()
A.bq(b.typeUniverse,JSON.parse('{"F8":{"G":[],"e":[],"f":[]},"aKC":{"Y":["F8"]}}'))
var y=(function rtii(){var x=A.w
return{m:x("ay<t<eG>>"),g:x("eG"),B:x("r<eG>"),u:x("r<e>"),p:x("t<eG>"),y:x("a5<c,@>"),x:x("dg"),e:x("v"),A:x("a5<c,@>?"),q:x("L?")}})();(function constants(){D.aF5=new E.a3C(C.Gv,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bMX=new A.lI("Mensagens",null,!1,null,20,!1,null)
D.bNe=new A.Ln(C.a2H,null)
D.bQN=new A.eM(0,null,0,0,null,null,D.bNe,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYs","d1m",()=>A.eI(new B.cMq(),null,!1,null,null,y.p))})()};
(a=>{a["rGh08FshUIkdnSpHNsMZfHdSgvU="]=a.current})($__dart_deferred_initializers__);