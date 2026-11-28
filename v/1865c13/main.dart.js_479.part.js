((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
ZF(d){return C.dFr(d)},
dFr(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ZF=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.P().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aG("booking_extra_options",A.R(["p_booking_id",d],m,l),l),$async$ZF)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.an(n==null?B.ai:n)
k=y.f
while(n.q()){q=n.gE(n)
J.bp(r,J.fZ(k.a(q),m,l))}p=r
if(J.aO(p)===0){v=null
x=1
break}r=$.P().b
r===$&&A.b()
x=8
return A.d(r.P("bookings").ai(0,"total_amount, deposit_amount").U("id",d).dM(0),$async$ZF)
case 8:o=f
r=A.du(J.i(o,"total_amount"))
n=A.du(J.i(o,"deposit_amount"))
v=new A.bV(p,r,n)
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
return A.m($async$ZF,w)},
aTs(d,e,f){return C.dD4(d,e,f)},
dD4(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aTs=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.P().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aG("add_booking_extras",A.R(["p_booking_id",e,"p_extra_ids",f.bx(0)],p,o),o),$async$aTs)
case 7:s=h
r=J.fZ(y.f.a(s),p,o)
o=A.du(J.i(r,"total"))
p=A.du(J.i(r,"deposit"))
v=new A.X(o,p)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.O(y.q).f.a1(D.bYf)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aTs,w)},
yF:function yF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFR:function aFR(d){this.d=d
this.c=this.a=null},
bWw:function bWw(d){this.a=d},
bWx:function bWx(){},
bWy:function bWy(d,e){this.a=d
this.b=e},
bWv:function bWv(d,e){this.a=d
this.b=e},
bWz:function bWz(d){this.a=d},
bWA:function bWA(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[437]
C=a.updateHolder(c[133],C)
D=c[438]
C.yF.prototype={
S(){return new C.aFR(A.aK(y.N))}}
C.aFR.prototype={
u(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="id",e=h.a,d=e.e,a0=e.d,a1=d>=a0-0.005,a2=a0<=0?1:d/a0,a3=J.da(e.c,new C.bWw(h)).cU(0,0,new C.bWx()),a4=h.a.d+a3,a5=a1?a4:A.iJ(B.k.a8(a4*a2,2))
e=h.a
d=e.w
a0=e.r
e=a0==null?"Aceitaste a proposta. "+e.f+" tem extras para o teu pedido.":a0
a0=A.W(22)
x=y.p
w=A.a([],x)
for(v=A.et(h.a.c,0,y.P),u=J.an(v.a),t=v.b,v=new A.bW(u,t,A.u(v).i("bW<1>")),s=y.g,r=h.d,q=y.j;v.q();){p={}
o=v.c
o=o>=0?new A.X(t+o,u.gE(u)):A.am(A.c_())
p.a=null
n=p.a=o.b
m=J.a7(n)
l=r.t(0,m.h(n,f))
o=o.a===0?g:B.mC
m=r.t(0,m.h(n,f))?$.at:B.t
if(r.t(0,J.i(p.a,f)))k=g
else{j=new A.bf(B.V,1.5,B.aj,-1)
k=new A.dL(j,j,j,j)}i=r.t(0,J.i(p.a,f))?E.E2:g
k=A.x(g,i,B.r,g,g,new A.I(m,g,k,g,g,g,B.ap),g,22,g,g,g,g,22)
m=A.a([A.h(A.Y(J.i(p.a,"name")),g,g,g,g,B.a9,g,g)],x)
i=s.a(J.i(p.a,"details"))
if(J.dJ(i==null?B.ai:i))m.push(A.h(J.kF(q.a(J.i(p.a,"details"))," \xb7 "),g,g,g,g,B.L,g,g))
o=A.x(g,A.N(A.a([k,B.af,new A.bI(1,B.at,A.z(m,B.G,B.h,B.J),g),B.ae,A.h("+ "+A.aI(A.du(J.i(p.a,"amount")),!1),g,g,g,g,B.a9,g,g)],x),B.v,B.h,B.l,0,g),B.r,g,B.hk,o,g,g,g,g,g,g,g)
w.push(new A.jr(new A.n2(g,g,g,g,g,l,!0,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,g,g),!1,!1,g,!1,!1,new A.i9(o,new C.bWy(p,h),g,g),g))}e=A.a([new A.G5(d,"Queres juntar alguma coisa?",e,g,g),B.a_,A.x(g,A.z(w,B.v,B.h,B.l),B.r,g,g,new A.I(B.a3,g,g,a0,g,g,B.x),g,g,g,B.cr,g,g,g),B.a_],x)
if(!a1)e.push(A.N(A.a([D.aza,A.h(A.aI(a4,!1),g,g,g,g,B.L,g,g)],x),B.v,B.h,B.l,0,g))
e.push(B.aD)
e.push(A.N(A.a([A.a4(A.h(a1?"A pagar agora":"Sinal ("+B.k.aN(a2*100)+" %) agora",g,g,g,g,B.L,g,g),1),A.h(A.aI(a5,!0),g,g,g,g,B.c1,g,g)],x),B.v,B.h,B.l,0,g))
e.push(E.JB)
e.push(B.bh)
e.push(A.N(A.a([A.a4(A.aX(A.x(B.K,D.cdQ,B.r,g,g,E.a7y,g,52,g,g,g,g,g),new C.bWz(a6),g),1),B.ab,A.a4(A.aX(A.x(B.K,A.h("Continuar \xb7 "+A.aI(a5,!0),1,g,g,g,B.yZ,g,g),B.r,g,g,B.Hg,g,52,g,g,g,g,g),new C.bWA(h,a6),g),2)],x),B.v,B.h,B.l,0,g))
return A.dR(A.z(e,B.E,B.h,B.J),B.y,g,B.al,g,B.av)}}
var z=a.updateTypes([])
C.bWw.prototype={
$1(d){return this.a.d.t(0,J.i(d,"id"))},
$S:31}
C.bWx.prototype={
$2(d,e){return d+A.du(J.i(e,"amount"))},
$S:195}
C.bWy.prototype={
$0(){var x=this.b
return x.p(new C.bWv(this.a,x))},
$S:0}
C.bWv.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.t(0,J.i(v.a,"id"))
v=v.a
x=J.a7(v)
return u?w.K(0,x.h(v,"id")):w.C(0,A.Y(x.h(v,"id")))},
$S:0}
C.bWz.prototype={
$0(){return A.al(this.a,!1).ae(A.aK(y.N))},
$S:0}
C.bWA.prototype={
$0(){return A.al(this.b,!1).ae(A.ez(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yF,A.H)
x(C.aFR,A.a1)
x(C.bWw,A.bt)
x(C.bWx,A.cJ)
w(A.bK,[C.bWy,C.bWv,C.bWz,C.bWA])})()
A.bq(b.typeUniverse,JSON.parse('{"yF":{"H":[],"e":[],"f":[]},"aFR":{"a1":["yF"]}}'))
var y=(function rtii(){var x=A.y
return{t:x("r<a5<c,@>>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),N:x("c"),q:x("dp"),z:x("@"),g:x("t<@>?"),a:x("+(T,T)?"),B:x("+(t<a5<c,@>>,T,T)?")}})();(function constants(){D.cef=new A.D("Reserva + extras",null,B.L,null,null,null,null,null,null,null)
D.aza=new A.bI(1,B.at,D.cef,null)
D.cbc=new A.D("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null)
D.bYf=new A.bE(D.cbc,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cdQ=new A.D("Sem extras",null,B.c4,null,null,null,null,null,null,null)})()};
(a=>{a["wv+d32msxGuz8k9phDo5VzPA98g="]=a.current})($__dart_deferred_initializers__);