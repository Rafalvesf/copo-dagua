((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
YY(d){return C.dwZ(d)},
dwZ(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$YY=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.T().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aU("booking_extra_options",A.S(["p_booking_id",d],m,l),l),$async$YY)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.at(n==null?B.aj:n)
k=y.f
while(n.t()){q=n.gE(n)
J.by(r,J.hv(k.a(q),m,l))}p=r
if(J.aS(p)===0){v=null
x=1
break}r=$.T().b
r===$&&A.b()
x=8
return A.d(r.P("bookings").aw(0,"total_amount, deposit_amount").W("id",d).dN(0),$async$YY)
case 8:o=f
r=A.dp(J.h(o,"total_amount"))
n=A.dp(J.h(o,"deposit_amount"))
v=new A.c5(p,r,n)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$YY,w)},
aRY(d,e,f){return C.duE(d,e,f)},
duE(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRY=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.T().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aU("add_booking_extras",A.S(["p_booking_id",e,"p_extra_ids",f.by(0)],p,o),o),$async$aRY)
case 7:s=h
r=J.hv(y.f.a(s),p,o)
o=A.dp(J.h(r,"total"))
p=A.dp(J.h(r,"deposit"))
v=new A.a4(o,p)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.O(y.q).f.a4(D.bXd)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aRY,w)},
ym:function ym(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEv:function aEv(d){this.d=d
this.c=this.a=null},
bSv:function bSv(d){this.a=d},
bSw:function bSw(){},
bSx:function bSx(d,e){this.a=d
this.b=e},
bSu:function bSu(d,e){this.a=d
this.b=e},
bSy:function bSy(d){this.a=d},
bSz:function bSz(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[415]
C=a.updateHolder(c[127],C)
D=c[416]
C.ym.prototype={
R(){return new C.aEv(A.aF(y.N))}}
C.aEv.prototype={
u(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="id",e=h.a,d=e.e,a0=e.d,a1=d>=a0-0.005,a2=a0<=0?1:d/a0,a3=J.d7(e.c,new C.bSv(h)).dc(0,0,new C.bSw()),a4=h.a.d+a3,a5=a1?a4:A.iS(B.k.a7(a4*a2,2))
e=h.a
d=e.w
a0=e.r
e=a0==null?"Aceitaste a proposta. "+e.f+" tem extras para o teu pedido.":a0
a0=A.a2(22)
x=y.p
w=A.a([],x)
for(v=A.eE(h.a.c,0,y.P),u=J.at(v.a),t=v.b,v=new A.c7(u,t,A.u(v).i("c7<1>")),s=y.g,r=h.d,q=y.j;v.t();){p={}
o=v.c
o=o>=0?new A.a4(t+o,u.gE(u)):A.ai(A.c1())
p.a=null
n=p.a=o.b
m=J.a7(n)
l=r.n(0,m.h(n,f))
o=o.a===0?g:B.mC
m=r.n(0,m.h(n,f))?$.ap:B.u
if(r.n(0,J.h(p.a,f)))k=g
else{j=new A.bb(B.T,1.5,B.af,-1)
k=new A.dY(j,j,j,j)}i=r.n(0,J.h(p.a,f))?E.DC:g
k=A.C(g,i,B.r,g,g,new A.O(m,g,k,g,g,g,B.az),g,22,g,g,g,g,22)
m=A.a([A.i(A.a_(J.h(p.a,"name")),g,g,g,g,B.ap,g,g,g)],x)
i=s.a(J.h(p.a,"details"))
if(J.dP(i==null?B.aj:i))m.push(A.i(J.kb(q.a(J.h(p.a,"details"))," \xb7 "),g,g,g,g,B.Z,g,g,g))
o=A.C(g,A.R(A.a([k,B.ag,new A.bT(1,B.ay,A.B(m,B.I,B.j,B.N,0,B.v),g),B.av,A.i("+ "+A.aP(A.dp(J.h(p.a,"amount")),!1),g,g,g,g,B.ap,g,g,g)],x),B.x,B.j,B.o,0,g,g),B.r,g,B.j8,o,g,g,g,g,g,g,g)
w.push(new A.kN(new A.r1(g,g,g,g,g,l,!0,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.a9,g,g,g,g),!1,!1,g,!1,!1,new A.hH(o,new C.bSx(p,h),g,g),g))}e=A.a([new A.FL(d,"Queres juntar alguma coisa?",e,g,g),B.a4,A.C(g,A.B(w,B.x,B.j,B.o,0,B.v),B.r,g,g,new A.O(B.a8,g,g,a0,g,g,B.y),g,g,g,B.e4,g,g,g),B.a4],x)
if(!a1)e.push(A.R(A.a([D.ayM,A.i(A.aP(a4,!1),g,g,g,g,B.Z,g,g,g)],x),B.x,B.j,B.o,0,g,g))
e.push(B.aF)
e.push(A.R(A.a([A.a6(A.i(a1?"A pagar agora":"Sinal ("+B.k.aI(a2*100)+" %) agora",g,g,g,g,B.Z,g,g,g),1),A.i(A.aP(a5,!0),g,g,g,g,B.c4,g,g,g)],x),B.x,B.j,B.o,0,g,g))
e.push(E.Jd)
e.push(B.bf)
e.push(A.R(A.a([A.a6(A.aT(A.C(B.K,D.c5e,B.r,g,g,E.a77,g,52,g,g,g,g,g),new C.bSy(a6),g),1),B.ak,A.a6(A.aT(A.C(B.K,A.i("Continuar \xb7 "+A.aP(a5,!0),1,g,g,g,B.HN,g,g,g),B.r,g,g,B.GJ,g,52,g,g,g,g,g),new C.bSz(h,a6),g),2)],x),B.x,B.j,B.o,0,g,g))
return A.dV(A.B(e,B.J,B.j,B.N,0,B.v),B.z,g,B.au,g,g,B.a1)}}
var z=a.updateTypes([])
C.bSv.prototype={
$1(d){return this.a.d.n(0,J.h(d,"id"))},
$S:34}
C.bSw.prototype={
$2(d,e){return d+A.dp(J.h(e,"amount"))},
$S:189}
C.bSx.prototype={
$0(){var x=this.b
return x.q(new C.bSu(this.a,x))},
$S:0}
C.bSu.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.n(0,J.h(v.a,"id"))
v=v.a
x=J.a7(v)
return u?w.K(0,x.h(v,"id")):w.B(0,A.a_(x.h(v,"id")))},
$S:0}
C.bSy.prototype={
$0(){return A.as(this.a,!1).ak(A.aF(y.N))},
$S:0}
C.bSz.prototype={
$0(){return A.as(this.b,!1).ak(A.eL(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.ym,A.I)
x(C.aEv,A.a1)
x(C.bSv,A.bx)
x(C.bSw,A.cS)
w(A.bR,[C.bSx,C.bSu,C.bSy,C.bSz])})()
A.bu(b.typeUniverse,JSON.parse('{"ym":{"I":[],"e":[],"f":[]},"aEv":{"a1":["ym"]}}'))
var y=(function rtii(){var x=A.w
return{t:x("t<a5<c,@>>"),p:x("t<e>"),j:x("r<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),N:x("c"),q:x("dA"),z:x("@"),g:x("r<@>?"),a:x("+(P,P)?"),B:x("+(r<a5<c,@>>,P,P)?")}})();(function constants(){D.cb_=new A.D("Reserva + extras",null,B.Z,null,null,null,null,null,null,null,null)
D.ayM=new A.bT(1,B.ay,D.cb_,null)
D.c6K=new A.D("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null,null)
D.bXd=new A.bK(D.c6K,null,null,null,null,null,null,null,null,null,null,null,null,B.W,!1,null,null,null,B.z,null)
D.c5e=new A.D("Sem extras",null,B.c1,null,null,null,null,null,null,null,null)})()};
(a=>{a["ThvKxUurlCel83M5CCRd7ArNC4A="]=a.current})($__dart_deferred_initializers__);