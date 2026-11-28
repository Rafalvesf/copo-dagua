((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cMz:function cMz(){},cMy:function cMy(){},
dug(){return new B.F8(null)},
F8:function F8(d){this.a=d},
aKE:function aKE(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cgQ:function cgQ(d){this.a=d},
cgP:function cgP(){},
cgN:function cgN(){},
cgM:function cgM(d){this.a=d},
cgC:function cgC(d){this.a=d},
cgL:function cgL(d,e,f){this.a=d
this.b=e
this.c=f},
cgD:function cgD(){},
cgE:function cgE(d){this.a=d},
cgF:function cgF(){},
cgG:function cgG(){},
cgH:function cgH(){},
cgO:function cgO(){},
cgI:function cgI(d){this.a=d},
cgB:function cgB(d){this.a=d},
cgJ:function cgJ(d){this.a=d},
cgA:function cgA(d){this.a=d},
cgK:function cgK(d,e,f,g){var _=this
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
R(){return new B.aKE(new A.aF(C.al,$.aa()))}}
B.aKE.prototype={
ac(){this.au()
this.w.an(0,new B.cgQ(this))},
m(){var x=this.w
x.Y$=$.aa()
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=x.gS().H($.d1w(),y.m),u=x.w,t=C.f.C(u.a.a),s=y.u
return A.cP(w,C.lq,new A.bD(C.aA,w,C.aG,C.z,A.a([A.bF(!1,new A.mh(A.a([A.aI(w,A.ax(d,C.b4,y.x).w.r.b,w),D.bMY,new A.Q(C.ei,new G.G2(u,"Pesquisar conversas",!0,w),w),F.aa1],s),A.hq(v,new B.cgL(x,t.toLowerCase(),d),new B.cgM(x),new B.cgN(),!1,!0,!1),w),w,C.a_,!1),D.bQO],s),w),!0,w)}}
var z=a.updateTypes([])
B.cMz.prototype={
$1(d){return this.aH7(d)},
aH7(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cw(d)
t=$.R().b
t===$&&A.b()
s=J
x=3
return A.d(t.P("conversations").al(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, event_date)").V("partner_id",u).cT(0,"last_message_at",!1),$async$$1)
case 3:v=s.d8(f,new B.cMy(),y.g).by(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1454}
B.cMy.prototype={
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
n=A.cYW(w,j)
m=A.C(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.dd(A.a0(x.h(d,h)))
l=A.C(v?j:J.i(w,"owner_id"))
k=A.A2(A.C(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"event_date")
return new A.eG(r,s,o,n,q,p,m,x,0,l,I.cJ1(k,A.d2(A.q(v==null?"":v))),C.k1)},
$S:1455}
B.cgQ.prototype={
$0(){return this.a.p(new B.cgP())},
$S:0}
B.cgP.prototype={
$0(){},
$S:0}
B.cgN.prototype={
$0(){return C.eq},
$S:44}
B.cgM.prototype={
$2(d,e){return new A.jg("N\xe3o foi poss\xedvel carregar.",new B.cgC(this.a),null)},
$S:51}
B.cgC.prototype={
$0(){return this.a.gS().aj($.d1w())},
$S:0}
B.cgL.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.df6(a5,new B.cgD()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a6<1>")
x=A.U(new A.a6(a3,new B.cgE(a4),w),w.i("B.E"))}if(a3.length===0)return D.aF6
if(x.length===0)return A.bN(A.h('Sem conversas para "'+C.f.C(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a6(a3,new B.cgF(),A.a8(a3).i("a6<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a6<1>")
u=A.U(new A.a6(x,new B.cgG(),w),w.i("B.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.H)(u),++s){r=u[s]
J.bt(t.bK(0,E.df7(r.w),new B.cgH()),r)}q=new B.cgO()
w=y.u
a4=A.a([new A.Q(K.Df,A.N(A.a([q.$3("Todas",!a4.x,new B.cgI(a4)),C.ag,q.$4$count("N\xe3o lidas",a4.x,new B.cgJ(a4),v)],w),C.w,C.h,C.l,0,a2,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.z(a2,A.h(C.FX[m],a2,a2,a2,a2,C.aJ,a2,a2,a2),C.r,a2,a2,F.L_,a2,a2,F.NY,C.iO,a2,a2,a2)
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
f=E.cL5(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4K(new A.cp(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.FJ,new B.cgK(n,t,m,j),j===J.aR(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.Q(C.bV,A.x(k,C.w,C.h,C.l,0,C.u),a2)],w))}}return A.d0(a4,a2,H.nE,a2,a2,!1,C.a3,!1)},
$S:1456}
B.cgD.prototype={
$1(d){return d.y},
$S:266}
B.cgE.prototype={
$1(d){return C.f.q(d.b.toLowerCase(),this.a)},
$S:127}
B.cgF.prototype={
$1(d){return d.x>0},
$S:127}
B.cgG.prototype={
$1(d){return d.x>0},
$S:127}
B.cgH.prototype={
$0(){return A.a([],y.B)},
$S:466}
B.cgO.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.au:C.t,t=A.V(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aJ(v,v,e?C.t:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.A
w=A.V(10)
C.e.n(r,A.a([C.bn,A.z(C.L,A.h(A.q(g),v,v,v,v,A.aJ(v,v,e?$.au:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.lx,new A.I(x,v,v,w,v,v,C.y),v,20,v,C.lN,v,v,v)],s))}return A.aW(A.z(v,A.N(r,C.w,C.h,C.K,0,v,v),C.r,v,v,new A.I(u,v,v,t,v,v,C.y),v,38,v,C.cP,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1457}
B.cgI.prototype={
$0(){var x=this.a
return x.p(new B.cgB(x))},
$S:0}
B.cgB.prototype={
$0(){return this.a.x=!1},
$S:0}
B.cgJ.prototype={
$0(){var x=this.a
return x.p(new B.cgA(x))},
$S:0}
B.cgA.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cgK.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ag(w.a).ap("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bz,[B.cMz,B.cMy,B.cgL,B.cgD,B.cgE,B.cgF,B.cgG,B.cgO])
w(B.F8,A.dA)
w(B.aKE,A.dt)
x(A.bR,[B.cgQ,B.cgP,B.cgN,B.cgC,B.cgH,B.cgI,B.cgB,B.cgJ,B.cgA,B.cgK])
w(B.cgM,A.cN)})()
A.br(b.typeUniverse,JSON.parse('{"F8":{"G":[],"e":[],"f":[]},"aKE":{"Y":["F8"]}}'))
var y=(function rtii(){var x=A.w
return{m:x("ay<t<eG>>"),g:x("eG"),B:x("r<eG>"),u:x("r<e>"),p:x("t<eG>"),y:x("a5<c,@>"),x:x("dg"),e:x("v"),A:x("a5<c,@>?"),q:x("L?")}})();(function constants(){D.aF6=new E.a3D(C.Gv,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bMY=new A.lI("Mensagens",null,!1,null,20,!1,null)
D.bNf=new A.Lo(C.a2H,null)
D.bQO=new A.eM(0,null,0,0,null,null,D.bNf,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYD","d1w",()=>A.eI(new B.cMz(),null,!1,null,null,y.p))})()};
(a=>{a["oHOTa1HoTBbkBWrYIf1a4wSJJjg="]=a.current})($__dart_deferred_initializers__);