((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
d9v(d,e){return new C.Cr(e,d,null)},
Cr:function Cr(d,e,f){this.d=d
this.e=e
this.a=f},
aAO:function aAO(d,e){var _=this
_.w=null
_.x=d
_.y=e
_.z=!1
_.d=$
_.c=_.a=null},
bHL:function bHL(d){this.a=d},
bHM:function bHM(d){this.a=d},
bHR:function bHR(){},
bHS:function bHS(d){this.a=d},
bHT:function bHT(d){this.a=d},
bHU:function bHU(d){this.a=d},
bHV:function bHV(){},
bHZ:function bHZ(d){this.a=d},
bHW:function bHW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHQ:function bHQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHO:function bHO(d,e,f){this.a=d
this.b=e
this.c=f},
bHN:function bHN(d,e,f){this.a=d
this.b=e
this.c=f},
bHX:function bHX(d,e,f){this.a=d
this.b=e
this.c=f},
bHP:function bHP(d,e,f){this.a=d
this.b=e
this.c=f},
bHY:function bHY(d,e,f){this.a=d
this.b=e
this.c=f},
as6:function as6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anO:function anO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cvd(d,e,f,g){var x=0,w=A.n(y.I),v,u,t,s,r,q,p
var $async$cvd=A.j(function(h,i){if(h===1)return A.k(i,w)
for(;;)switch(x){case 0:r=$.R().b
r===$&&A.b()
u=y.N
t=y.z
q=A
p=y.f
x=3
return A.d(r.b1("choose_my_menu",A.Q(["p_booking_id",e,"p_package_id",g,"p_extra_ids",f,"p_allergies",d],u,t),t),$async$cvd)
case 3:s=q.el(p.a(i),u,t)
t=A.M(s.h(0,"payment_id"))
v=new A.aIV(A.dA(s.h(0,"amount")),t)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cvd,w)}},D
J=c[1]
A=c[0]
B=c[2]
E=c[261]
F=c[170]
G=c[260]
C=a.updateHolder(c[45],C)
D=c[259]
C.Cr.prototype={
S(){return new C.aAO(A.aJ(y.N),new A.aH(B.am,$.ae()))}}
C.aAO.prototype={
al(){var x,w,v,u,t,s=this
s.aI()
x=s.a.e.as
if(x!=null){s.w=A.M(x.h(0,"package_id"))
w=y.g.a(x.h(0,"extras_snapshot"))
w=J.ay(w==null?B.an:w)
v=y.f
u=s.x
while(w.t()){t=w.gE(w)
if(v.b(t)&&typeof J.h(t,"id")=="string")u.B(0,A.a2(J.h(t,"id")))}w=A.M(x.h(0,"allergies"))
if(w==null)w=""
s.y.sbA(0,w)}},
m(){var x=this.y
x.a0$=$.ae()
x.W$=0
this.aa()},
CC(d,e){return this.bdQ(d,e)},
bdQ(a0,a1){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$CC=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:r.q(new C.bHL(r))
u=4
l=r.a.e
k=r.x
k=A.W(k,A.u(k).c)
j=B.f.D(r.y.a.a)
if(j.length===0)j=null
x=7
return A.d(C.cvd(j,l.a,k,a0.a),$async$CC)
case 7:q=a3
k=r.gU()
l=$.aSc()
k.aj(l.$1(r.a.d))
j=r.c
if(j==null){s=[1]
x=5
break}p=q.b
if(p==null){j.R(y.q).f.a5(D.bUR)
l=r.c
l.toString
A.ar(l).ar(null)
s=[1]
x=5
break}j=r.a.e
i=j.y
if(i==null)i=0
h=j.as
h=A.aR(h==null?null:h.h(0,"amount"))
if(h==null)h=null
if(h==null)h=0
x=8
return A.d(A.aiJ(k,j.b,i-h+q.a,q.a),$async$CC)
case 8:o=a3
j=r.c
if(j==null){s=[1]
x=5
break}i=r.a.e
h=A.ic(q.a,o)
g=q.a
x=9
return A.d(A.ar(j).aW("/pay",new A.qv(p,i.c,"guest_share",h,g,null,null,!1,null,null,null,null,null,null),y.O),$async$CC)
case 9:k.aj(l.$1(r.a.d))
l=r.c
if(l!=null)A.ar(l).ar(null)
s.push(6)
x=5
break
case 4:u=3
d=t.pop()
l=A.a9(d)
if(l instanceof A.cW){n=l
l=r.c
if(l==null){s=[1]
x=5
break}if(B.f.n(n.a,"closed"))e="A escolha j\xe1 fechou."
else e=B.f.n(n.a,"already_paid")?"J\xe1 pagaste a tua parte: n\xe3o d\xe1 para mudar.":"N\xe3o foi poss\xedvel guardar. Tenta outra vez."
m=e
l.R(y.q).f.a5(A.cA(null,null,null,null,null,B.A,null,A.i(m,null,null,null,null,null,null,null,null),null,B.X,null,null,null,null,null,null,null,null,null,null))}else{l=r.c
if(l!=null)l.R(y.q).f.a5(B.fn)}s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new C.bHM(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$CC,w)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gU(),g=h.L($.cOC().$1(j.a.e.b),y.X)
g=g.gv(g)
if(g==null)g=G.Eu
g=J.dp(g,new C.bHR())
x=A.W(g,g.$ti.i("y.E"))
h=h.L($.cOA().$1(j.a.e.b),y.R)
w=h.gv(h)
if(w==null)w=E.ji
v=A.i2(new A.a4(x,new C.bHS(j),A.a8(x).i("a4<1>")))
h=v==null
if(h)u=E.ji
else{g=J.dp(w,new C.bHT(v))
u=A.W(g,g.$ti.i("y.E"))}t=h?0:v.e+new A.a4(u,new C.bHU(j),A.a8(u).i("a4<1>")).dA(0,0,new C.bHV())
g=j.a.e
s=g.w
r=y.s
g=A.a([g.c],r)
if(s!=null)g.push("escolhe at\xe9 "+A.d2l(s))
q=y.p
g=A.a([B.hK,A.cIF("O teu menu",B.e.a9(g," \xb7 ")),new A.hN("A carta \xb7 "+x.length,24,i,i)],q)
for(p=0;p<x.length;++p){o=p===0?0:10
n=x[p]
g.push(new A.T(new A.a0(0,o,0,0),new C.as6(n,n.a===j.w,new C.bHW(j,x,p,w),i),i))}if(u.length!==0){o=v.c
n=A.X(22)
m=A.a([],q)
for(l=j.x,p=0;p<u.length;++p){k=u[p]
m.push(new C.anO(k,l.n(0,k.a),p===u.length-1,new C.bHX(j,u,p),i))}B.e.p(g,A.a([new A.kA("Juntar ao "+o,i,i,24,i),A.C(i,A.E(m,B.x,B.k,B.p,0,B.w),B.r,i,i,new A.L(B.u,i,i,n,i,i,B.y),i,i,i,B.e2,i,i,i)],q))}g.push(D.aEu)
g.push(A.hi(!1,j.y,i,B.u,"Ex.: sem gl\xfaten, marisco",i,i,120,i))
g.push(B.bi)
o=!h
if(o){r=A.a([v.c],r)
n=j.x.a
if(n!==0)r.push("+ "+n+" extra")
g.push(new A.T(B.e0,A.S(A.a([A.a7(A.i(B.e.a9(r," \xb7 "),i,i,i,i,B.a3,i,i,i),1),A.i(A.aX(t,!1),i,i,i,i,B.cs,i,i,i)],q),B.x,B.k,B.p,0,i,i),i))}r=!o||j.z?i:new C.bHY(j,v,t)
q=A.cc(B.z,i,i,B.u,B.dM,i,B.a9,i,i,B.fZ)
if(h)h="Escolhe um menu"
else h=j.a.e.e==="each"?"Escolher e pagar \xb7 "+A.aX(t,!1):"Guardar escolha"
g.push(A.bB(A.i(h,i,i,i,i,i,i,i,i),r,q))
g.push(B.Y)
g.push(A.i(j.a.e.e==="each"?"Pagas a tua parte na app. A taxa de servi\xe7o \xe9 paga por quem paga.":"Pagam os organizadores. Podes mudar at\xe9 a escolha fechar.",i,i,i,i,B.a3,B.a6,i,i))
return A.cP(i,B.bC,A.qg(B.fR,140,g,new C.bHZ(d),!0),!0,i)}}
C.as6.prototype={
u(d){var x,w=null,v=this.d,u=v?B.u:B.z,t=v?B.u.c_(0.85):B.P,s=this.c,r=s.f?"desde ":"",q=A.aX(s.e,!1),p=F.BQ(s.y),o=v?new A.L($.aj,w,w,A.X(22),w,w,B.y):new A.L(B.u,w,w,A.X(22),B.aI,w,B.y),n=v?B.u:w,m=v?w:A.cn(B.po,1.5),l=v?A.b7(B.dh,$.aj,w,w,16):w
m=A.C(w,l,B.r,w,w,new A.L(n,w,m,w,w,w,B.aF),w,24,w,w,w,w,24)
n=y.p
p=A.a([A.S(A.a([A.a7(A.i(s.c,w,w,w,w,A.aF(w,w,u,w,w,w,w,w,w,w,w,16,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),B.aw,A.i(r+q+p,w,w,w,w,A.aF(w,w,u,w,w,w,w,w,w,w,w,16,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],n),B.I,B.k,B.p,0,w,w)],n)
r=B.f.D(s.d)
if(r.length!==0)B.e.p(p,A.a([B.ar,A.i(r,w,w,w,w,A.aF(w,w,t,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w)],n))
if(v&&s.w.length!==0){r=A.a([A.C(w,w,B.r,B.u.c_(0.3),w,w,w,1,B.e1,w,w,w,w),D.c8U,B.ar],n)
for(q=s.w,l=q.length,x=0;x<q.length;q.length===l||(0,A.J)(q),++x)r.push(new A.T(B.Ma,A.S(A.a([D.bJ1,new A.bT(1,B.av,A.i(q[x],w,w,w,w,D.bZL,w,w,w),w)],n),B.I,B.k,B.p,0,w,w),w))
s=s.x
if(s!=null)B.e.p(r,A.a([B.az,A.i("N\xc3O INCLUI: "+s,w,w,w,w,A.aF(w,w,t,w,w,w,w,w,w,w,w,12,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],n))
B.e.p(p,r)}return A.bv(w,!0,w,A.aZ(A.ff(w,A.S(A.a([m,B.ak,A.a7(A.E(p,B.I,B.k,B.p,0,B.w),1)],n),B.I,B.k,B.p,0,w,w),w,B.aL,o,B.ei,w,w,w,B.b9,w),this.e,w),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.a8,w)}}
C.anO.prototype={
u(d){var x,w,v=this,u=null,t=v.d,s=v.e?u:B.oV,r=v.c,q=y.p,p=A.a([A.i(r.c,u,u,u,u,B.aD,u,u,u)],q),o=r.d
if(o.length!==0)p.push(A.i(B.e.a9(o," \xb7 "),u,u,u,u,B.a3,u,u,u))
p=A.a7(A.E(p,B.I,B.k,B.p,0,B.w),1)
r=A.i("+"+A.aX(r.e,!1)+F.BQ(r.f),u,u,u,u,B.bX,u,u,u)
o=t?$.aj:B.u
x=t?u:A.cn(B.z,1.5)
w=t?B.dh:B.e4
return A.bv(u,!0,u,A.aZ(A.C(u,A.S(A.a([p,B.aw,r,B.aw,A.C(u,A.b7(w,t?B.u:B.z,u,u,18),B.r,u,u,new A.L(o,u,x,u,u,u,B.aF),u,36,u,u,u,u,36)],q),B.x,B.k,B.p,0,u,u),B.r,u,u,new A.L(u,u,s,u,u,u,B.y),u,u,u,B.ih,u,u,u),v.f,u),!1,u,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,B.a8,u)}}
var z=a.updateTypes(["z(fJ)","z(fK)","U(U,fJ)"])
C.bHL.prototype={
$0(){return this.a.z=!0},
$S:0}
C.bHM.prototype={
$0(){return this.a.z=!1},
$S:0}
C.bHR.prototype={
$1(d){return d.y==="person"&&!d.f},
$S:z+1}
C.bHS.prototype={
$1(d){return d.a===this.a.w},
$S:z+1}
C.bHT.prototype={
$1(d){var x=d.r
return x.length===0||B.e.n(x,this.a.a)},
$S:z+0}
C.bHU.prototype={
$1(d){return this.a.x.n(0,d.a)},
$S:z+0}
C.bHV.prototype={
$2(d,e){return d+e.e},
$S:z+2}
C.bHZ.prototype={
$0(){var x=this.a,w=A.ar(x).c
w===$&&A.b()
return w.js()?A.ar(x).ar(null):A.ar(x).bS(0,"/guest-home",null)},
$S:0}
C.bHW.prototype={
$0(){var x=this,w=x.a
return w.q(new C.bHQ(w,x.b,x.c,x.d))},
$S:0}
C.bHQ.prototype={
$0(){var x=this,w=x.a,v=x.b,u=x.c
w.w=v[u].a
w.x.D0(new C.bHO(x.d,v,u),!0)},
$S:0}
C.bHO.prototype={
$1(d){return!J.P6(this.a,new C.bHN(d,this.b,this.c))},
$S:8}
C.bHN.prototype={
$1(d){var x,w
if(d.a===this.a){x=this.b[this.c]
w=d.r
x=w.length===0||B.e.n(w,x.a)}else x=!1
return x},
$S:z+0}
C.bHX.prototype={
$0(){var x=this.a
return x.q(new C.bHP(x,this.b,this.c))},
$S:0}
C.bHP.prototype={
$0(){var x=this.a.x,w=this.b,v=this.c
return x.n(0,w[v].a)?x.J(0,w[v].a):x.B(0,w[v].a)},
$S:0}
C.bHY.prototype={
$0(){return this.a.CC(this.b,this.c)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Cr,A.dw)
x(C.aAO,A.dq)
w(A.bS,[C.bHL,C.bHM,C.bHZ,C.bHW,C.bHQ,C.bHX,C.bHP,C.bHY])
w(A.bx,[C.bHR,C.bHS,C.bHT,C.bHU,C.bHO,C.bHN])
x(C.bHV,A.cS)
w(A.O,[C.as6,C.anO])})()
A.bu(b.typeUniverse,JSON.parse('{"Cr":{"I":[],"e":[],"f":[]},"aAO":{"a1":["Cr"]},"as6":{"O":[],"e":[],"f":[]},"anO":{"O":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{R:x("aB<t<fJ>>"),X:x("aB<t<fK>>"),s:x("r<c>"),p:x("r<e>"),f:x("a3<@,@>"),I:x("+amount,paymentId(U,c?)"),N:x("c"),q:x("dJ"),z:x("@"),g:x("t<@>?"),O:x("K?"),H:x("~")}})();(function constants(){D.aEu=new A.hN("Alergias",24,null,null)
D.aqY=new A.a0(0,7,8,0)
D.aiw=new A.a_9(null,B.u,2.5,null)
D.bJ1=new A.T(D.aqY,D.aiw,null)
D.c6Z=new A.A("Escolha guardada.",null,null,null,null,null,null,null,null,null,null)
D.bUR=new A.bX(D.c6Z,null,null,null,null,null,null,null,null,null,null,null,null,B.X,!1,null,null,null,B.A,null)
D.bZL=new A.H(!0,B.u,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c0Q=new A.H(!0,B.u,null,null,null,null,12,B.F,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8U=new A.A("INCLUI",null,D.c0Q,null,null,null,null,null,null,null,null)})()};
(a=>{a["Mg051gx9bcK3XfJiLZcDs4N75+w="]=a.current})($__dart_deferred_initializers__);