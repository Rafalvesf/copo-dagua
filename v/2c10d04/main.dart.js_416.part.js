((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
YM(d){return C.dwx(d)},
dwx(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$YM=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.T().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aU("booking_extra_options",A.S(["p_booking_id",d],m,l),l),$async$YM)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.at(n==null?B.an:n)
k=y.f
while(n.t()){q=n.gE(n)
J.by(r,J.hv(k.a(q),m,l))}p=r
if(J.aS(p)===0){v=null
x=1
break}r=$.T().b
r===$&&A.b()
x=8
return A.d(r.P("bookings").aw(0,"total_amount, deposit_amount").W("id",d).dN(0),$async$YM)
case 8:o=f
r=A.dt(J.h(o,"total_amount"))
n=A.dt(J.h(o,"deposit_amount"))
v=new A.c3(p,r,n)
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
return A.m($async$YM,w)},
aRI(d,e,f){return C.duc(d,e,f)},
duc(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRI=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.T().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aU("add_booking_extras",A.S(["p_booking_id",e,"p_extra_ids",f.by(0)],p,o),o),$async$aRI)
case 7:s=h
r=J.hv(y.f.a(s),p,o)
o=A.dt(J.h(r,"total"))
p=A.dt(J.h(r,"deposit"))
v=new A.a5(o,p)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.O(y.q).f.a4(D.bWj)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aRI,w)},
yi:function yi(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEf:function aEf(d){this.d=d
this.c=this.a=null},
bRK:function bRK(d){this.a=d},
bRL:function bRL(){},
bRM:function bRM(d,e){this.a=d
this.b=e},
bRJ:function bRJ(d,e){this.a=d
this.b=e},
bRN:function bRN(d){this.a=d},
bRO:function bRO(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[181]
C=a.updateHolder(c[123],C)
D=c[407]
C.yi.prototype={
R(){return new C.aEf(A.aF(y.N))}}
C.aEf.prototype={
v(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="id",e=h.a,d=e.e,a0=e.d,a1=d>=a0-0.005,a2=a0<=0?1:d/a0,a3=J.d7(e.c,new C.bRK(h)).dc(0,0,new C.bRL()),a4=h.a.d+a3,a5=a1?a4:A.iS(B.k.a7(a4*a2,2))
e=h.a
d=e.w
a0=e.r
e=a0==null?"Aceitaste a proposta. "+e.f+" tem extras para o teu pedido.":a0
a0=A.a2(22)
x=y.p
w=A.a([],x)
for(v=A.eQ(h.a.c,0,y.P),u=J.at(v.a),t=v.b,v=new A.ch(u,t,A.u(v).i("ch<1>")),s=y.g,r=h.d,q=y.j;v.t();){p={}
o=v.c
o=o>=0?new A.a5(t+o,u.gE(u)):A.ak(A.ca())
p.a=null
n=p.a=o.b
m=J.a7(n)
l=r.n(0,m.h(n,f))
o=o.a===0?g:B.mC
m=r.n(0,m.h(n,f))?$.ap:B.t
if(r.n(0,J.h(p.a,f)))k=g
else{j=new A.bb(B.T,1.5,B.af,-1)
k=new A.dZ(j,j,j,j)}i=r.n(0,J.h(p.a,f))?E.DB:g
k=A.C(g,i,B.r,g,g,new A.O(m,g,k,g,g,g,B.az),g,22,g,g,g,g,22)
m=A.a([A.i(A.a_(J.h(p.a,"name")),g,g,g,g,B.ar,g,g,g)],x)
i=s.a(J.h(p.a,"details"))
if(J.dO(i==null?B.an:i))m.push(A.i(J.ka(q.a(J.h(p.a,"details"))," \xb7 "),g,g,g,g,B.Z,g,g,g))
o=A.C(g,A.Q(A.a([k,B.ai,new A.bU(1,B.ay,A.B(m,B.I,B.j,B.P,0,B.v),g),B.au,A.i("+ "+A.aO(A.dt(J.h(p.a,"amount")),!1),g,g,g,g,B.ar,g,g,g)],x),B.x,B.j,B.o,0,g,g),B.r,g,B.j8,o,g,g,g,g,g,g,g)
w.push(new A.kL(new A.r_(g,g,g,g,g,l,!0,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,g,g),!1,!1,g,!1,!1,new A.hH(o,new C.bRM(p,h),g,g),g))}e=A.a([new A.FD(d,"Queres juntar alguma coisa?",e,g,g),B.a4,A.C(g,A.B(w,B.x,B.j,B.o,0,B.v),B.r,g,g,new A.O(B.aa,g,g,a0,g,g,B.y),g,g,g,B.e1,g,g,g),B.a4],x)
if(!a1)e.push(A.Q(A.a([D.ayB,A.i(A.aO(a4,!1),g,g,g,g,B.Z,g,g,g)],x),B.x,B.j,B.o,0,g,g))
e.push(B.aF)
e.push(A.Q(A.a([A.a6(A.i(a1?"A pagar agora":"Sinal ("+B.k.aI(a2*100)+" %) agora",g,g,g,g,B.Z,g,g,g),1),A.i(A.aO(a5,!0),g,g,g,g,B.c5,g,g,g)],x),B.x,B.j,B.o,0,g,g))
e.push(E.J8)
e.push(B.bk)
e.push(A.Q(A.a([A.a6(A.aT(A.C(B.K,D.c4l,B.r,g,g,E.a71,g,52,g,g,g,g,g),new C.bRN(a6),g),1),B.aj,A.a6(A.aT(A.C(B.K,A.i("Continuar \xb7 "+A.aO(a5,!0),1,g,g,g,B.HJ,g,g,g),B.r,g,g,B.GH,g,52,g,g,g,g,g),new C.bRO(h,a6),g),2)],x),B.x,B.j,B.o,0,g,g))
return A.e2(A.B(e,B.J,B.j,B.P,0,B.v),B.z,g,B.ax,g,B.a3)}}
var z=a.updateTypes([])
C.bRK.prototype={
$1(d){return this.a.d.n(0,J.h(d,"id"))},
$S:35}
C.bRL.prototype={
$2(d,e){return d+A.dt(J.h(e,"amount"))},
$S:162}
C.bRM.prototype={
$0(){var x=this.b
return x.q(new C.bRJ(this.a,x))},
$S:0}
C.bRJ.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.n(0,J.h(v.a,"id"))
v=v.a
x=J.a7(v)
return u?w.K(0,x.h(v,"id")):w.B(0,A.a_(x.h(v,"id")))},
$S:0}
C.bRN.prototype={
$0(){return A.as(this.a,!1).ak(A.aF(y.N))},
$S:0}
C.bRO.prototype={
$0(){return A.as(this.b,!1).ak(A.eJ(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yi,A.I)
x(C.aEf,A.a1)
x(C.bRK,A.bw)
x(C.bRL,A.cS)
w(A.bR,[C.bRM,C.bRJ,C.bRN,C.bRO])})()
A.bx(b.typeUniverse,JSON.parse('{"yi":{"I":[],"e":[],"f":[]},"aEf":{"a1":["yi"]}}'))
var y=(function rtii(){var x=A.x
return{t:x("t<a4<c,@>>"),p:x("t<e>"),j:x("r<@>"),P:x("a4<c,@>"),f:x("a4<@,@>"),N:x("c"),q:x("dA"),z:x("@"),g:x("r<@>?"),a:x("+(P,P)?"),B:x("+(r<a4<c,@>>,P,P)?")}})();(function constants(){D.ca6=new A.D("Reserva + extras",null,B.Z,null,null,null,null,null,null,null,null)
D.ayB=new A.bU(1,B.ay,D.ca6,null)
D.c5R=new A.D("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null,null)
D.bWj=new A.bJ(D.c5R,null,null,null,null,null,null,null,null,null,null,null,null,B.W,!1,null,null,null,B.z,null)
D.c4l=new A.D("Sem extras",null,B.c2,null,null,null,null,null,null,null,null)})()};
(a=>{a["RvPTYNs+xbGQ43Kj5r9UZDLNMBw="]=a.current})($__dart_deferred_initializers__);