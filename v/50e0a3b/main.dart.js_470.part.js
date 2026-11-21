((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,G,H,I,K,B={
d6e(d,e){return new B.Co(e,d,null)},
Co:function Co(d,e,f){this.d=d
this.e=e
this.a=f},
aAs:function aAs(d,e){var _=this
_.w=null
_.x=d
_.y=e
_.z=!1
_.d=$
_.c=_.a=null},
bGY:function bGY(d){this.a=d},
bGZ:function bGZ(d){this.a=d},
bH3:function bH3(){},
bH4:function bH4(d){this.a=d},
bH5:function bH5(d){this.a=d},
bH6:function bH6(d){this.a=d},
bH7:function bH7(){},
bHb:function bHb(d){this.a=d},
bH8:function bH8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bH2:function bH2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bH0:function bH0(d,e,f){this.a=d
this.b=e
this.c=f},
bH_:function bH_(d,e,f){this.a=d
this.b=e
this.c=f},
bH9:function bH9(d,e,f){this.a=d
this.b=e
this.c=f},
bH1:function bH1(d,e,f){this.a=d
this.b=e
this.c=f},
bHa:function bHa(d,e,f){this.a=d
this.b=e
this.c=f},
ct3(d,e,f,g){var x=0,w=A.n(y.I),v,u,t,s,r,q,p
var $async$ct3=A.j(function(h,i){if(h===1)return A.k(i,w)
for(;;)switch(x){case 0:r=$.S().b
r===$&&A.b()
u=y.N
t=y.z
q=A
p=y.f
x=3
return A.d(r.b4("choose_my_menu",A.Q(["p_booking_id",e,"p_package_id",g,"p_extra_ids",f,"p_allergies",d],u,t),t),$async$ct3)
case 3:s=q.ek(p.a(i),u,t)
t=A.L(s.h(0,"payment_id"))
v=new A.aIx(A.dT(s.h(0,"amount")),t)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$ct3,w)}},D
J=c[1]
A=c[0]
C=c[2]
E=c[279]
F=c[162]
G=c[278]
H=c[190]
I=c[222]
K=c[95]
B=a.updateHolder(c[45],B)
D=c[277]
B.Co.prototype={
R(){return new B.aAs(A.aK(y.N),new A.aH(C.al,$.ag()))}}
B.aAs.prototype={
ak(){var x,w,v,u,t,s=this
s.aH()
x=s.a.e.Q
if(x!=null){s.w=A.L(x.h(0,"package_id"))
w=y.g.a(x.h(0,"extras_snapshot"))
w=J.aA(w==null?C.ao:w)
v=y.f
u=s.x
while(w.t()){t=w.gF(w)
if(v.b(t)&&typeof J.h(t,"id")=="string")u.B(0,A.a2(J.h(t,"id")))}w=A.L(x.h(0,"allergies"))
if(w==null)w=""
s.y.sbF(0,w)}},
m(){var x=this.y
x.a0$=$.ag()
x.V$=0
this.a8()},
Cz(d,e){return this.bdk(d,e)},
bdk(a0,a1){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Cz=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:r.q(new B.bGY(r))
u=4
l=r.a.e
k=r.x
k=A.W(k,A.u(k).c)
j=C.f.D(r.y.a.a)
if(j.length===0)j=null
x=7
return A.d(B.ct3(j,l.a,k,a0.a),$async$Cz)
case 7:q=a3
k=r.gU()
l=$.aRO()
k.al(l.$1(r.a.d))
j=r.c
if(j==null){s=[1]
x=5
break}p=q.b
if(p==null){j.S(y.q).f.a7(D.bTR)
l=r.c
l.toString
A.ar(l).aG(null)
s=[1]
x=5
break}x=8
return A.d(k.a2(0,$.YJ().gf1(),y.o),$async$Cz)
case 8:o=a3
j=r.c
if(j==null){s=[1]
x=5
break}i=r.a.e
h=A.ij(q.a,o)
g=q.a
x=9
return A.d(A.ar(j).aV("/pay",new A.rZ(p,i.c,"guest_share",h,g,null,null,!1,null,null,null,null,null),y.O),$async$Cz)
case 9:k.al(l.$1(r.a.d))
l=r.c
if(l!=null)A.ar(l).aG(null)
s.push(6)
x=5
break
case 4:u=3
d=t.pop()
l=A.a9(d)
if(l instanceof A.cY){n=l
l=r.c
if(l==null){s=[1]
x=5
break}if(C.f.n(n.a,"closed"))e="A escolha j\xe1 fechou."
else e=C.f.n(n.a,"already_paid")?"J\xe1 pagaste a tua parte: n\xe3o d\xe1 para mudar.":"N\xe3o foi poss\xedvel guardar. Tenta outra vez."
m=e
l.S(y.q).f.a7(A.cz(null,null,null,null,null,C.z,null,A.i(m,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}else{l=r.c
if(l!=null)l.S(y.q).f.a7(C.fl)}s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new B.bGZ(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Cz,w)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gU(),g=h.M($.cM6().$1(j.a.e.b),y.X)
g=g.gv(g)
if(g==null)g=G.Ek
g=J.dB(g,new B.bH3())
x=A.W(g,g.$ti.i("y.E"))
h=h.M($.cM3().$1(j.a.e.b),y.R)
w=h.gv(h)
if(w==null)w=E.le
v=A.i0(new A.a4(x,new B.bH4(j),A.a6(x).i("a4<1>")))
h=v==null
if(h)u=E.le
else{g=J.dB(w,new B.bH5(v))
u=A.W(g,g.$ti.i("y.E"))}t=h?0:v.e+new A.a4(u,new B.bH6(j),A.a6(u).i("a4<1>")).dM(0,0,new B.bH7())
g=j.a.e
s=g.w
r=y.s
g=A.a([g.c],r)
if(s!=null)g.push("escolhe at\xe9 "+A.d_2(s))
q=y.p
g=A.a([C.ii,K.cQb("O teu menu",C.e.ah(g," \xb7 ")),new A.hK("A carta \xb7 "+x.length,24,i,i)],q)
for(p=0;p<x.length;++p){o=p===0?0:10
n=x[p]
g.push(new A.U(new A.a0(0,o,0,0),new F.a3k(n,n.a===j.w,new B.bH8(j,x,p,w),i),i))}if(u.length!==0){o=v.c
n=A.Z(22)
m=A.a([],q)
for(l=j.x,p=0;p<u.length;++p){k=u[p]
m.push(new F.a0u(k,l.n(0,k.a),p===u.length-1,new B.bH9(j,u,p),i))}C.e.p(g,A.a([new A.kw("Juntar ao "+o,i,i,24,i),A.G(i,A.I(m,C.x,C.l,C.q,0,C.w),C.t,i,i,new A.N(C.u,i,i,n,i,i,C.y),i,i,i,C.fA,i,i,i)],q))}g.push(D.aDR)
g.push(A.fT(!1,j.y,i,C.u,"Ex.: sem gl\xfaten, marisco",i,i,120,i))
g.push(C.bx)
o=!h
if(o){r=A.a([v.c],r)
n=j.x.a
if(n!==0)r.push("+ "+n+" extra")
g.push(new A.U(C.dr,A.a_(A.a([A.ae(A.i(C.e.ah(r," \xb7 "),i,i,i,C.ah,i,i,i),1),A.i(A.bh(t,!1),i,i,i,C.cD,i,i,i)],q),C.x,C.l,C.q,0,i,i),i))}r=!o||j.z?i:new B.bHa(j,v,t)
q=A.ch(C.A,i,i,C.u,C.dg,i,C.aa,i,i,C.lV)
if(h)h="Escolhe um menu"
else h=j.a.e.e==="each"?"Escolher e pagar \xb7 "+A.bh(t,!1):"Guardar escolha"
g.push(A.bE(A.i(h,i,i,i,i,i,i,i),r,q))
g.push(C.a0)
g.push(A.i(j.a.e.e==="each"?"Pagas a tua parte na app. A taxa de servi\xe7o \xe9 paga por quem paga.":"Pagam os organizadores. Podes mudar at\xe9 a escolha fechar.",i,i,i,C.ah,C.a3,i,i))
return A.cP(i,C.bz,H.rL(I.hk,140,g,new B.bHb(d),!0),!0,i)}}
var z=a.updateTypes(["z(fH)","z(fI)","R(R,fH)"])
B.bGY.prototype={
$0(){return this.a.z=!0},
$S:0}
B.bGZ.prototype={
$0(){return this.a.z=!1},
$S:0}
B.bH3.prototype={
$1(d){return d.y==="person"&&!d.f},
$S:z+1}
B.bH4.prototype={
$1(d){return d.a===this.a.w},
$S:z+1}
B.bH5.prototype={
$1(d){var x=d.r
return x.length===0||C.e.n(x,this.a.a)},
$S:z+0}
B.bH6.prototype={
$1(d){return this.a.x.n(0,d.a)},
$S:z+0}
B.bH7.prototype={
$2(d,e){return d+e.e},
$S:z+2}
B.bHb.prototype={
$0(){var x=this.a,w=A.ar(x).c
w===$&&A.b()
return w.ju()?A.ar(x).aG(null):A.ar(x).bR(0,"/guest-home",null)},
$S:0}
B.bH8.prototype={
$0(){var x=this,w=x.a
return w.q(new B.bH2(w,x.b,x.c,x.d))},
$S:0}
B.bH2.prototype={
$0(){var x=this,w=x.a,v=x.b,u=x.c
w.w=v[u].a
w.x.CX(new B.bH0(x.d,v,u),!0)},
$S:0}
B.bH0.prototype={
$1(d){return!J.OZ(this.a,new B.bH_(d,this.b,this.c))},
$S:9}
B.bH_.prototype={
$1(d){var x,w
if(d.a===this.a){x=this.b[this.c]
w=d.r
x=w.length===0||C.e.n(w,x.a)}else x=!1
return x},
$S:z+0}
B.bH9.prototype={
$0(){var x=this.a
return x.q(new B.bH1(x,this.b,this.c))},
$S:0}
B.bH1.prototype={
$0(){var x=this.a.x,w=this.b,v=this.c
return x.n(0,w[v].a)?x.K(0,w[v].a):x.B(0,w[v].a)},
$S:0}
B.bHa.prototype={
$0(){return this.a.Cz(this.b,this.c)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Co,A.dv)
x(B.aAs,A.dk)
w(A.bL,[B.bGY,B.bGZ,B.bHb,B.bH8,B.bH2,B.bH9,B.bH1,B.bHa])
w(A.bw,[B.bH3,B.bH4,B.bH5,B.bH6,B.bH0,B.bH_])
x(B.bH7,A.cM)})()
A.bt(b.typeUniverse,JSON.parse('{"Co":{"H":[],"e":[],"f":[]},"aAs":{"a1":["Co"]}}'))
var y=(function rtii(){var x=A.v
return{R:x("aF<t<fH>>"),X:x("aF<t<fI>>"),o:x("E<R>"),s:x("r<c>"),p:x("r<e>"),f:x("a3<@,@>"),I:x("+amount,paymentId(R,c?)"),N:x("c"),q:x("dF"),z:x("@"),g:x("t<@>?"),O:x("J?"),H:x("~")}})();(function constants(){D.aDR=new A.hK("Alergias",24,null,null)
D.c5Q=new A.C("Escolha guardada.",null,null,null,null,null,null,null,null,null,null)
D.bTR=new A.bY(D.c5Q,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)})()};
(a=>{a["QJD1Yj+Tcp2G2o3+SWbAUMUNTGg="]=a.current})($__dart_deferred_initializers__);