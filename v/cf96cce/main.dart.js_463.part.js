((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
ZT(d){return C.dE6(d)},
dE6(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ZT=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.S().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aM("booking_extra_options",A.T(["p_booking_id",d],m,l),l),$async$ZT)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.aq(n==null?B.an:n)
k=y.f
while(n.t()){q=n.gE(n)
J.by(r,J.h8(k.a(q),m,l))}p=r
if(J.aR(p)===0){v=null
x=1
break}r=$.S().b
r===$&&A.b()
x=8
return A.d(r.R("bookings").ao(0,"total_amount, deposit_amount").W("id",d).dP(0),$async$ZT)
case 8:o=f
r=A.dw(J.i(o,"total_amount"))
n=A.dw(J.i(o,"deposit_amount"))
v=new A.bW(p,r,n)
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
return A.m($async$ZT,w)},
aUc(d,e,f){return C.dBM(d,e,f)},
dBM(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUc=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.S().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aM("add_booking_extras",A.T(["p_booking_id",e,"p_extra_ids",f.by(0)],p,o),o),$async$aUc)
case 7:s=h
r=J.h8(y.f.a(s),p,o)
o=A.dw(J.i(r,"total"))
p=A.dw(J.i(r,"deposit"))
v=new A.a3(o,p)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.O(y.q).f.a3(D.c_z)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUc,w)},
yL:function yL(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGt:function aGt(d){this.d=d
this.c=this.a=null},
bWO:function bWO(d){this.a=d},
bWP:function bWP(){},
bWQ:function bWQ(d,e){this.a=d
this.b=e},
bWN:function bWN(d,e){this.a=d
this.b=e},
bWR:function bWR(d){this.a=d},
bWS:function bWS(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[438]
C=a.updateHolder(c[132],C)
D=c[439]
C.yL.prototype={
P(){return new C.aGt(A.aK(y.N))}}
C.aGt.prototype={
u(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="id",e=h.a,d=e.e,a0=e.d,a1=d>=a0-0.005,a2=a0<=0?1:d/a0,a3=J.d4(e.c,new C.bWO(h)).d_(0,0,new C.bWP()),a4=h.a.d+a3,a5=a1?a4:A.iN(B.k.a8(a4*a2,2))
e=h.a
d=e.w
a0=e.r
e=a0==null?"Aceitaste a proposta. "+e.f+" tem extras para o teu pedido.":a0
a0=A.X(22)
x=y.p
w=A.a([],x)
for(v=A.eB(h.a.c,0,y.P),u=J.aq(v.a),t=v.b,v=new A.c0(u,t,A.u(v).i("c0<1>")),s=y.g,r=h.d,q=y.j;v.t();){p={}
o=v.c
o=o>=0?new A.a3(t+o,u.gE(u)):A.aj(A.c3())
p.a=null
n=p.a=o.b
m=J.a7(n)
l=r.q(0,m.h(n,f))
o=o.a===0?g:B.mX
m=r.q(0,m.h(n,f))?$.at:B.t
if(r.q(0,J.i(p.a,f)))k=g
else{j=new A.bc(B.U,1.5,B.aj,-1)
k=new A.dS(j,j,j,j)}i=r.q(0,J.i(p.a,f))?E.Ex:g
k=A.B(g,i,B.r,g,g,new A.M(m,g,k,g,g,g,B.av),g,22,g,g,g,g,22)
m=A.a([A.h(A.a1(J.i(p.a,"name")),g,g,g,g,B.ae,g,g,g)],x)
i=s.a(J.i(p.a,"details"))
if(J.dR(i==null?B.an:i))m.push(A.h(J.kF(q.a(J.i(p.a,"details"))," \xb7 "),g,g,g,g,B.P,g,g,g))
o=A.B(g,A.O(A.a([k,B.af,new A.bP(1,B.aw,A.A(m,B.H,B.h,B.K,0,B.u),g),B.ak,A.h("+ "+A.aM(A.dw(J.i(p.a,"amount")),!1),g,g,g,g,B.ae,g,g,g)],x),B.w,B.h,B.l,0,g,g),B.r,g,B.jp,o,g,g,g,g,g,g,g)
w.push(new A.jp(new A.n4(g,g,g,g,g,l,!0,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,g,g),!1,!1,g,!1,!1,new A.hx(o,new C.bWQ(p,h),g,g),g))}e=A.a([new A.Gd(d,"Queres juntar alguma coisa?",e,g,g),B.a1,A.B(g,A.A(w,B.w,B.h,B.l,0,B.u),B.r,g,g,new A.M(B.a7,g,g,a0,g,g,B.y),g,g,g,B.d2,g,g,g),B.a1],x)
if(!a1)e.push(A.O(A.a([D.aAw,A.h(A.aM(a4,!1),g,g,g,g,B.P,g,g,g)],x),B.w,B.h,B.l,0,g,g))
e.push(B.aE)
e.push(A.O(A.a([A.a4(A.h(a1?"A pagar agora":"Sinal ("+B.k.aK(a2*100)+" %) agora",g,g,g,g,B.P,g,g,g),1),A.h(A.aM(a5,!0),g,g,g,g,B.c5,g,g,g)],x),B.w,B.h,B.l,0,g,g))
e.push(E.Kd)
e.push(B.bi)
e.push(A.O(A.a([A.a4(A.aW(A.B(B.L,D.c8D,B.r,g,g,E.a8k,g,52,g,g,g,g,g),new C.bWR(a6),g),1),B.ag,A.a4(A.aW(A.B(B.L,A.h("Continuar \xb7 "+A.aM(a5,!0),1,g,g,g,B.IQ,g,g,g),B.r,g,g,B.HM,g,52,g,g,g,g,g),new C.bWS(h,a6),g),2)],x),B.w,B.h,B.l,0,g,g))
return A.dQ(A.A(e,B.G,B.h,B.K,0,B.u),B.z,g,B.at,g,g,B.a2)}}
var z=a.updateTypes([])
C.bWO.prototype={
$1(d){return this.a.d.q(0,J.i(d,"id"))},
$S:35}
C.bWP.prototype={
$2(d,e){return d+A.dw(J.i(e,"amount"))},
$S:185}
C.bWQ.prototype={
$0(){var x=this.b
return x.p(new C.bWN(this.a,x))},
$S:0}
C.bWN.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.q(0,J.i(v.a,"id"))
v=v.a
x=J.a7(v)
return u?w.K(0,x.h(v,"id")):w.B(0,A.a1(x.h(v,"id")))},
$S:0}
C.bWR.prototype={
$0(){return A.am(this.a,!1).ad(A.aK(y.N))},
$S:0}
C.bWS.prototype={
$0(){return A.am(this.b,!1).ad(A.eK(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yL,A.G)
x(C.aGt,A.Z)
x(C.bWO,A.bw)
x(C.bWP,A.cO)
w(A.bQ,[C.bWQ,C.bWN,C.bWR,C.bWS])})()
A.bn(b.typeUniverse,JSON.parse('{"yL":{"G":[],"e":[],"f":[]},"aGt":{"Z":["yL"]}}'))
var y=(function rtii(){var x=A.w
return{t:x("r<a5<c,@>>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),N:x("c"),q:x("dm"),z:x("@"),g:x("t<@>?"),a:x("+(R,R)?"),B:x("+(t<a5<c,@>>,R,R)?")}})();(function constants(){D.ceP=new A.C("Reserva + extras",null,B.P,null,null,null,null,null,null,null,null)
D.aAw=new A.bP(1,B.aw,D.ceP,null)
D.caf=new A.C("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null,null)
D.c_z=new A.bG(D.caf,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.z,null)
D.c8D=new A.C("Sem extras",null,B.c2,null,null,null,null,null,null,null,null)})()};
(a=>{a["rH3UwRRXuuBrB8GK54MnGp8Xar0="]=a.current})($__dart_deferred_initializers__);