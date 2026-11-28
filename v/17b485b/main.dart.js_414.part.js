((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cMc:function cMc(){},cMb:function cMb(){},
dtY(){return new B.F6(null)},
F6:function F6(d){this.a=d},
aKj:function aKj(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cgF:function cgF(d){this.a=d},
cgE:function cgE(){},
cgC:function cgC(){},
cgB:function cgB(d){this.a=d},
cgr:function cgr(d){this.a=d},
cgA:function cgA(d,e,f){this.a=d
this.b=e
this.c=f},
cgs:function cgs(){},
cgt:function cgt(d){this.a=d},
cgu:function cgu(){},
cgv:function cgv(){},
cgw:function cgw(){},
cgD:function cgD(){},
cgx:function cgx(d){this.a=d},
cgq:function cgq(d){this.a=d},
cgy:function cgy(d){this.a=d},
cgp:function cgp(d){this.a=d},
cgz:function cgz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I,K
J=c[1]
A=c[0]
C=c[2]
G=c[154]
H=c[210]
B=a.updateHolder(c[36],B)
D=c[360]
E=c[82]
F=c[232]
I=c[119]
K=c[233]
B.F6.prototype={
R(){return new B.aKj(new A.aE(C.aj,$.aa()))}}
B.aKj.prototype={
ac(){this.ao()
this.w.am(0,new B.cgF(this))},
m(){var x=this.w
x.Y$=$.aa()
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=x.gS().G($.d1g(),y.m),u=x.w,t=C.f.B(u.a.a),s=y.u
return A.cP(w,C.jl,new A.bB(C.ax,w,C.aE,C.y,A.a([A.bD(!1,new A.n4(A.a([A.aH(w,A.aO(d,C.b5,y.x).w.r.b,w),D.bLZ,new A.S(C.eg,new G.G_(u,"Pesquisar conversas",!0,w),w),F.a9u],s),A.hC(v,new B.cgA(x,t.toLowerCase(),d),new B.cgB(x),new B.cgC(),!1,!0,!1),w),w,C.Z,!1),D.bPP],s),w),!0,w)}}
var z=a.updateTypes([])
B.cMc.prototype={
$1(d){return this.aGG(d)},
aGG(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cu(d)
t=$.Q().b
t===$&&A.b()
s=J
x=3
return A.d(t.P("conversations").aj(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, event_date)").V("partner_id",u).cR(0,"last_message_at",!1),$async$$1)
case 3:v=s.d9(f,new B.cMb(),y.g).by(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1443}
B.cMb.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="wedding_id",h="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.C(v?j:J.i(w,"partner_name_1"))
t=A.C(v?j:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
r=A.Z(x.h(d,"id"))
q=A.Z(x.h(d,i))
p=A.Z(x.h(d,"partner_id"))
o=A.Z(x.h(d,i))
n=A.cYD(w,j)
m=A.C(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.db(A.Z(x.h(d,h)))
l=A.C(v?j:J.i(w,"owner_id"))
k=A.zY(A.C(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"event_date")
return new A.eB(r,s,o,n,q,p,m,x,0,l,I.cID(k,A.d4(A.q(v==null?"":v))),C.jV)},
$S:1444}
B.cgF.prototype={
$0(){return this.a.p(new B.cgE())},
$S:0}
B.cgE.prototype={
$0(){},
$S:0}
B.cgC.prototype={
$0(){return C.eD},
$S:51}
B.cgB.prototype={
$2(d,e){return new A.jg("N\xe3o foi poss\xedvel carregar.",new B.cgr(this.a),null)},
$S:53}
B.cgr.prototype={
$0(){return this.a.gS().ak($.d1g())},
$S:0}
B.cgA.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.deK(a5,new B.cgs()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a6<1>")
x=A.U(new A.a6(a3,new B.cgt(a4),w),w.i("B.E"))}if(a3.length===0)return D.aE9
if(x.length===0)return A.bM(A.h('Sem conversas para "'+C.f.B(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a6(a3,new B.cgu(),A.a8(a3).i("a6<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a6<1>")
u=A.U(new A.a6(x,new B.cgv(),w),w.i("B.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.H)(u),++s){r=u[s]
J.bt(t.bI(0,E.deL(r.w),new B.cgw()),r)}q=new B.cgD()
w=y.u
a4=A.a([new A.S(K.CW,A.O(A.a([q.$3("Todas",!a4.x,new B.cgx(a4)),C.ae,q.$4$count("N\xe3o lidas",a4.x,new B.cgy(a4),v)],w),C.v,C.h,C.l,0,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.x(a2,A.h(C.FB[m],a2,a2,a2,a2,C.aN,a2,a2,a2),C.r,a2,a2,F.Kz,a2,a2,F.Nw,C.iJ,a2,a2,a2)
k=A.a([],w)
j=0
for(;;){i=t.h(0,m)
i.toString
if(!(j<J.aQ(i)))break
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
f=E.cKH(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4N(new A.cq(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.Fn,new B.cgz(n,t,m,j),j===J.aQ(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.S(C.bL,A.A(k,C.v,C.h,C.l),a2)],w))}}return A.d5(a4,a2,H.nq,a2,a2,!1,!1)},
$S:1445}
B.cgs.prototype={
$1(d){return d.y},
$S:229}
B.cgt.prototype={
$1(d){return C.f.q(d.b.toLowerCase(),this.a)},
$S:142}
B.cgu.prototype={
$1(d){return d.x>0},
$S:142}
B.cgv.prototype={
$1(d){return d.x>0},
$S:142}
B.cgw.prototype={
$0(){return A.a([],y.B)},
$S:315}
B.cgD.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.at:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aI(v,v,e?C.t:C.z,v,v,v,v,v,v,v,v,14,v,v,C.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.z
w=A.W(10)
C.e.n(r,A.a([C.bk,A.x(C.K,A.h(A.q(g),v,v,v,v,A.aI(v,v,e?$.at:C.t,v,v,v,v,v,v,v,v,11,v,v,C.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.lg,new A.I(x,v,v,w,v,v,C.x),v,20,v,C.lw,v,v,v)],s))}return A.aX(A.x(v,A.O(r,C.v,C.h,C.J,0,v),C.r,v,v,new A.I(u,v,v,t,v,v,C.x),v,38,v,C.cH,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1446}
B.cgx.prototype={
$0(){var x=this.a
return x.p(new B.cgq(x))},
$S:0}
B.cgq.prototype={
$0(){return this.a.x=!1},
$S:0}
B.cgy.prototype={
$0(){var x=this.a
return x.p(new B.cgp(x))},
$S:0}
B.cgp.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cgz.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ah(w.a).au("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bw,[B.cMc,B.cMb,B.cgA,B.cgs,B.cgt,B.cgu,B.cgv,B.cgD])
w(B.F6,A.dz)
w(B.aKj,A.du)
x(A.bP,[B.cgF,B.cgE,B.cgC,B.cgr,B.cgw,B.cgx,B.cgq,B.cgy,B.cgp,B.cgz])
w(B.cgB,A.cK)})()
A.bn(b.typeUniverse,JSON.parse('{"F6":{"G":[],"e":[],"f":[]},"aKj":{"Y":["F6"]}}'))
var y=(function rtii(){var x=A.w
return{m:x("ay<t<eB>>"),g:x("eB"),B:x("r<eB>"),u:x("r<e>"),p:x("t<eB>"),y:x("a5<c,@>"),x:x("dg"),e:x("v"),A:x("a5<c,@>?"),q:x("J?")}})();(function constants(){D.aE9=new E.a3D(C.Ga,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bLZ=new A.lM("Mensagens",null,!1,null,20,!1,null)
D.bMg=new A.Lj(C.a28,null)
D.bPP=new A.eH(0,null,0,0,null,null,D.bMg,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYr","d1g",()=>A.eD(new B.cMc(),null,!1,null,null,y.p))})()};
(a=>{a["8CSUNFZJi35E8r3CdiZxb8GgOAw="]=a.current})($__dart_deferred_initializers__);