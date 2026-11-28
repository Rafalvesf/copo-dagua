((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
a_f(d){return C.dHw(d)},
dHw(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$a_f=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.Q().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aH("booking_extra_options",A.R(["p_booking_id",d],m,l),l),$async$a_f)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.ao(n==null?B.ah:n)
k=y.f
while(n.q()){q=n.gE(n)
J.bn(r,J.h1(k.a(q),m,l))}p=r
if(J.aS(p)===0){v=null
x=1
break}r=$.Q().b
r===$&&A.b()
x=8
return A.d(r.R("bookings").al(0,"total_amount, deposit_amount").V("id",d).e9(0),$async$a_f)
case 8:o=f
r=A.ds(J.i(o,"total_amount"))
n=A.ds(J.i(o,"deposit_amount"))
v=new A.bM(p,r,n)
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
return A.m($async$a_f,w)},
aUM(d,e,f){return C.dF4(d,e,f)},
dF4(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUM=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.Q().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aH("add_booking_extras",A.R(["p_booking_id",e,"p_extra_ids",f.by(0)],p,o),o),$async$aUM)
case 7:s=h
r=J.h1(y.f.a(s),p,o)
o=A.ds(J.i(r,"total"))
p=A.ds(J.i(r,"deposit"))
v=new A.X(o,p)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.O(y.q).f.a4(D.bYV)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUM,w)},
yT:function yT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aH7:function aH7(d){this.d=d
this.c=this.a=null},
bYa:function bYa(d){this.a=d},
bYb:function bYb(){},
bYc:function bYc(d,e){this.a=d
this.b=e},
bY9:function bY9(d,e){this.a=d
this.b=e},
bYd:function bYd(d){this.a=d},
bYe:function bYe(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[438]
C=a.updateHolder(c[133],C)
D=c[439]
C.yT.prototype={
P(){return new C.aH7(A.aO(y.N))}}
C.aH7.prototype={
t(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="id",f=i.a,e=f.e,d=f.d,a0=e>=d-0.005,a1=d<=0?1:e/d,a2=J.dP(f.c,new C.bYa(i)).cQ(0,0,new C.bYb()),a3=i.a.d+a2,a4=a0?a3:A.j3(B.k.aa(a3*a1,2))
f=i.a
e=f.r
f=e==null?"Aceitaste a proposta. "+f.f+" tem extras para o teu pedido.":e
e=A.W(22)
d=y.p
x=A.a([],d)
for(w=A.eo(i.a.c,0,y.P),v=J.ao(w.a),u=w.b,w=new A.bW(v,u,A.u(w).i("bW<1>")),t=y.g,s=i.d,r=y.j;w.q();){q={}
p=w.c
p=p>=0?new A.X(u+p,v.gE(v)):A.al(A.c0())
q.a=null
o=q.a=p.b
n=J.a6(o)
m=s.u(0,n.h(o,g))
p=p.a===0?h:B.mS
n=s.u(0,n.h(o,g))?$.ay:B.t
if(s.u(0,J.i(q.a,g)))l=h
else{k=new A.bd(B.V,1.5,B.af,-1)
l=new A.dT(k,k,k,k)}j=s.u(0,J.i(q.a,g))?E.Pg:h
l=A.w(h,j,B.r,h,h,new A.O(n,h,l,h,h,h,B.am),h,22,h,h,h,h,22)
n=A.a([A.h(A.a0(J.i(q.a,"name")),h,h,h,h,B.ac,h,h)],d)
j=t.a(J.i(q.a,"details"))
if(J.dL(j==null?B.ah:j))n.push(A.h(J.m2(r.a(J.i(q.a,"details"))," \xb7 "),h,h,h,h,B.L,h,h))
p=A.w(h,A.M(A.a([l,B.aj,new A.bJ(1,B.at,A.y(n,B.G,B.h,B.I),h),B.ae,A.h("+ "+A.aL(A.ds(J.i(q.a,"amount")),!1),h,h,h,h,B.ac,h,h)],d),B.u,B.h,B.l,0,h),B.r,h,B.jD,p,h,h,h,h,h,h,h)
x.push(new A.k8(new A.oH(h,h,h,h,h,m,!0,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.a3,h,h,h,h),!1,!1,h,!1,!1,new A.iF(p,new C.bYc(q,i),h,h),h))}f=A.a([new A.Ne(h,"Queres juntar alguma coisa?",f,h,h),B.a0,A.w(h,A.y(x,B.u,B.h,B.l),B.r,h,h,new A.O(B.a5,h,h,e,h,h,B.z),h,h,h,B.cN,h,h,h),B.a0],d)
if(!a0)f.push(A.M(A.a([D.azt,A.h(A.aL(a3,!1),h,h,h,h,B.L,h,h)],d),B.u,B.h,B.l,0,h))
f.push(B.aD)
f.push(A.M(A.a([A.a4(A.h(a0?"A pagar agora":"Sinal ("+B.k.aN(a1*100)+" %) agora",h,h,h,h,B.L,h,h),1),A.h(A.aL(a4,!0),h,h,h,h,B.ce,h,h)],d),B.u,B.h,B.l,0,h))
f.push(D.adc)
f.push(B.bp)
f.push(A.M(A.a([A.a4(A.aN(A.w(B.J,D.ceM,B.r,h,h,D.bVZ,h,52,h,h,h,h,h),new C.bYd(a5),h),1),B.aa,A.a4(A.aN(A.w(B.J,A.h("Continuar \xb7 "+A.aL(a4,!0),1,h,h,h,B.mx,h,h),B.r,h,h,B.l0,h,52,h,h,h,h,h),new C.bYe(i,a5),h),2)],d),B.u,B.h,B.l,0,h))
return A.dU(A.y(f,B.F,B.h,B.I),B.y,h,B.ak,h,B.au)}}
var z=a.updateTypes([])
C.bYa.prototype={
$1(d){return this.a.d.u(0,J.i(d,"id"))},
$S:41}
C.bYb.prototype={
$2(d,e){return d+A.ds(J.i(e,"amount"))},
$S:183}
C.bYc.prototype={
$0(){var x=this.b
return x.p(new C.bY9(this.a,x))},
$S:0}
C.bY9.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.u(0,J.i(v.a,"id"))
v=v.a
x=J.a6(v)
return u?w.K(0,x.h(v,"id")):w.B(0,A.a0(x.h(v,"id")))},
$S:0}
C.bYd.prototype={
$0(){return A.an(this.a,!1).ar(A.aO(y.N))},
$S:0}
C.bYe.prototype={
$0(){return A.an(this.b,!1).ar(A.eM(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yT,A.G)
x(C.aH7,A.Z)
x(C.bYa,A.bv)
x(C.bYb,A.cM)
w(A.bN,[C.bYc,C.bY9,C.bYd,C.bYe])})()
A.bq(b.typeUniverse,JSON.parse('{"yT":{"G":[],"e":[],"f":[]},"aH7":{"Z":["yT"]}}'))
var y=(function rtii(){var x=A.B
return{t:x("r<a5<c,@>>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),N:x("c"),q:x("di"),z:x("@"),g:x("t<@>?"),a:x("+(T,T)?"),B:x("+(t<a5<c,@>>,T,T)?")}})();(function constants(){D.caO=new A.F("+ taxa de servi\xe7o no passo seguinte",null,B.L,null,null,null,null,null,null,null)
D.adc=new A.dd(B.dQ,null,null,D.caO,null)
D.cfa=new A.F("Reserva + extras",null,B.L,null,null,null,null,null,null,null)
D.azt=new A.bJ(1,B.at,D.cfa,null)
D.bVZ=new A.dO(B.t,null,null,null,B.z0)
D.ccc=new A.F("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null)
D.bYV=new A.bH(D.ccc,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.y,null)
D.ceM=new A.F("Sem extras",null,B.bU,null,null,null,null,null,null,null)})()};
(a=>{a["pWx5LCLPWUZiN7Hj1p9j7K5DuFc="]=a.current})($__dart_deferred_initializers__);