((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cJT:function cJT(){},cJS:function cJS(){},
drm(){return new B.F2(null)},
F2:function F2(d){this.a=d},
aKg:function aKg(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cfi:function cfi(d){this.a=d},
cfh:function cfh(){},
cff:function cff(){},
cfe:function cfe(d){this.a=d},
cf5:function cf5(d){this.a=d},
cfd:function cfd(d,e,f){this.a=d
this.b=e
this.c=f},
cf6:function cf6(d){this.a=d},
cf7:function cf7(){},
cf8:function cf8(){},
cf9:function cf9(){},
cfg:function cfg(){},
cfa:function cfa(d){this.a=d},
cf4:function cf4(d){this.a=d},
cfb:function cfb(d){this.a=d},
cf3:function cf3(d){this.a=d},
cfc:function cfc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I
J=c[1]
A=c[0]
C=c[2]
G=c[152]
H=c[204]
B=a.updateHolder(c[36],B)
D=c[352]
E=c[82]
F=c[224]
I=c[228]
B.F2.prototype={
P(){return new B.aKg(new A.aJ(C.ap,$.ad()))}}
B.aKg.prototype={
ai(){this.aA()
this.w.am(0,new B.cfi(this))},
m(){var x=this.w
x.Z$=$.ad()
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=x.gS().H($.cZH(),y.m),u=x.w,t=C.f.C(u.a.a),s=y.u
return A.cO(w,C.lc,new A.bD(C.aA,w,C.aH,C.z,A.a([A.bC(!1,new A.mg(A.a([A.aI(w,A.aw(d,C.b2,y.x).w.r.b,w),D.bMP,new A.Q(C.e2,new G.FY(u,"Pesquisar conversas",!0,w),w),F.a9U],s),A.hn(v,new B.cfd(x,t.toLowerCase(),d),new B.cfe(x),new B.cff(),!1,!0,!1),w),w,C.Z,!1),D.bQD],s),w),!0,w)}}
var z=a.updateTypes([])
B.cJT.prototype={
$1(d){return this.aGu(d)},
aGu(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cr(d)
t=$.T().b
t===$&&A.b()
s=J
x=3
return A.d(t.R("conversations").az(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").X("partner_id",u).dl(0,"last_message_at",!1),$async$$1)
case 3:v=s.d5(f,new B.cJS(),y.g).by(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1451}
B.cJS.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m="wedding_id",l="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.E(v?n:J.i(w,"partner_name_1"))
t=A.E(v?n:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
v=A.a2(x.h(d,"id"))
r=A.a2(x.h(d,m))
q=A.a2(x.h(d,"partner_id"))
A.a2(x.h(d,m))
p=A.cW8(w,n)
o=A.E(x.h(d,"last_message"))
return new A.hV(v,s,p,r,q,o,x.h(d,l)==null?n:A.da(A.a2(x.h(d,l))),0)},
$S:1452}
B.cfi.prototype={
$0(){return this.a.p(new B.cfh())},
$S:0}
B.cfh.prototype={
$0(){},
$S:0}
B.cff.prototype={
$0(){return C.ek},
$S:47}
B.cfe.prototype={
$2(d,e){return new A.je("N\xe3o foi poss\xedvel carregar.",new B.cf5(this.a),null)},
$S:52}
B.cf5.prototype={
$0(){return this.a.gS().aj($.cZH())},
$S:0}
B.cfd.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.d2(a4,new B.cf6(a3))
x=A.U(a3,a3.$ti.i("z.E"))}a3=J.a7(a4)
if(a3.gY(a4))return D.aEY
w=J.a7(x)
if(w.gY(x))return A.bO(A.h('Sem conversas para "'+C.f.C(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.cz(a4,new B.cf7()).gA(0)
a3=a1.a
if(a3.x){w=w.cz(x,new B.cf8())
u=A.U(w,w.$ti.i("z.E"))}else u=x
t=A.D(y.e,y.p)
for(w=J.aq(u);w.t();){s=w.gE(w)
J.by(t.bM(0,E.dce(s.w),new B.cf9()),s)}r=new B.cfg()
w=y.u
a3=A.a([new A.Q(I.D5,A.P(A.a([r.$3("Todas",!a3.x,new B.cfa(a3)),C.ae,r.$4$count("N\xe3o lidas",a3.x,new B.cfb(a3),v)],w),C.w,C.i,C.m,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=A.h(C.FQ[n],a2,a2,a2,a2,C.b8,a2,a2,a2)
l=new A.b5(22,22)
k=A.a([],w)
j=0
for(;;){i=t.h(0,n)
i.toString
if(!(j<J.aR(i)))break
i=t.h(0,n)
i.toString
i=J.i(i,j)
h=t.h(0,n)
h.toString
h=J.i(h,j)
g=t.h(0,n)
g.toString
g=J.i(g,j)
f=t.h(0,n)
f.toString
f=E.cIp(J.i(f,j).w)
e=t.h(0,n)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.i(d,j)
a0=t.h(0,n)
a0.toString
k.push(new E.a4y(new A.cv(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,F.WE,new B.cfc(p,t,n,j),j===J.aR(a0)-1,!1,a2));++j}C.e.n(a3,A.a([new A.Q(D.auN,m,a2),new A.Q(C.bO,A.A(a2,A.B(k,C.w,C.i,C.m,0,C.v),C.ba,a2,a2,new A.M(C.t,a2,a2,new A.ci(l,l,l,l),C.bg,a2,C.y),a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return A.cX(a3,a2,H.np,a2,a2,!1,C.a2,!1)},
$S:1453}
B.cf6.prototype={
$1(d){return C.f.q(d.b.toLowerCase(),this.a)},
$S:168}
B.cf7.prototype={
$1(d){return d.x>0},
$S:168}
B.cf8.prototype={
$1(d){return d.x>0},
$S:168}
B.cf9.prototype={
$0(){return A.a([],y.B)},
$S:1454}
B.cfg.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.ar:C.t,t=A.X(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aF(v,v,e?C.t:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.A
w=A.X(10)
C.e.n(r,A.a([C.bm,A.A(C.L,A.h(A.q(g),v,v,v,v,A.aF(v,v,e?$.ar:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.li,new A.M(x,v,v,w,v,v,C.y),v,20,v,C.lE,v,v,v)],s))}return A.aU(A.A(v,A.P(r,C.w,C.i,C.K,0,v,v),C.r,v,v,new A.M(u,v,v,t,v,v,C.y),v,38,v,C.dj,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1455}
B.cfa.prototype={
$0(){var x=this.a
return x.p(new B.cf4(x))},
$S:0}
B.cf4.prototype={
$0(){return this.a.x=!1},
$S:0}
B.cfb.prototype={
$0(){var x=this.a
return x.p(new B.cf3(x))},
$S:0}
B.cf3.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cfc.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ai(w.a).ap("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bw,[B.cJT,B.cJS,B.cfd,B.cf6,B.cf7,B.cf8,B.cfg])
w(B.F2,A.dB)
w(B.aKg,A.dx)
x(A.bR,[B.cfi,B.cfh,B.cff,B.cf5,B.cf9,B.cfa,B.cf4,B.cfb,B.cf3,B.cfc])
w(B.cfe,A.cQ)})()
A.bp(b.typeUniverse,JSON.parse('{"F2":{"G":[],"e":[],"f":[]},"aKg":{"a_":["F2"]}}'))
var y=(function rtii(){var x=A.w
return{m:x("ay<t<hV>>"),g:x("hV"),B:x("r<hV>"),u:x("r<e>"),p:x("t<hV>"),y:x("a5<c,@>"),x:x("dg"),e:x("v"),A:x("a5<c,@>?"),q:x("K?")}})();(function constants(){D.auN=new A.a0(24,18,20,8)
D.aEY=new E.a3p(C.Gn,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bMP=new A.lH("Mensagens",null,!1,null,20,!1,null)
D.bN6=new A.Lf(C.a2w,null)
D.bQD=new A.eZ(0,null,0,0,null,null,D.bN6,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVB","cZH",()=>A.eF(new B.cJT(),null,!1,null,null,y.p))})()};
(a=>{a["U6TrQfssURW3Zfg2izhAsjyeRwk="]=a.current})($__dart_deferred_initializers__);