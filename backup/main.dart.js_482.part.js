((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,C={
a_d(d){return C.dHj(d)},
dHj(d){var x=0,w=A.n(y.B),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$a_d=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=$.Q().b
n===$&&A.b()
m=y.N
l=y.z
x=7
return A.d(n.aH("booking_extra_options",A.R(["p_booking_id",d],m,l),l),$async$a_d)
case 7:s=f
r=A.a([],y.t)
n=y.g.a(s)
n=J.an(n==null?B.aj:n)
k=y.f
while(n.q()){q=n.gE(n)
J.bn(r,J.h2(k.a(q),m,l))}p=r
if(J.aS(p)===0){v=null
x=1
break}r=$.Q().b
r===$&&A.b()
x=8
return A.d(r.R("bookings").al(0,"total_amount, deposit_amount").V("id",d).e9(0),$async$a_d)
case 8:o=f
r=A.dt(J.i(o,"total_amount"))
n=A.dt(J.i(o,"deposit_amount"))
v=new A.bN(p,r,n)
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
return A.m($async$a_d,w)},
aUO(d,e,f){return C.dES(d,e,f)},
dES(d,e,f){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUO=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
q=$.Q().b
q===$&&A.b()
p=y.N
o=y.z
x=7
return A.d(q.aH("add_booking_extras",A.R(["p_booking_id",e,"p_extra_ids",f.bx(0)],p,o),o),$async$aUO)
case 7:s=h
r=J.h2(y.f.a(s),p,o)
o=A.dt(J.i(r,"total"))
p=A.dt(J.i(r,"deposit"))
v=new A.X(o,p)
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.O(y.q).f.a4(D.bYW)
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUO,w)},
yV:function yV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aH7:function aH7(d){this.d=d
this.c=this.a=null},
bY8:function bY8(d){this.a=d},
bY9:function bY9(){},
bYa:function bYa(d,e){this.a=d
this.b=e},
bY7:function bY7(d,e){this.a=d
this.b=e},
bYb:function bYb(d){this.a=d},
bYc:function bYc(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
B=c[2]
E=c[439]
F=c[347]
C=a.updateHolder(c[133],C)
D=c[440]
C.yV.prototype={
P(){return new C.aH7(A.aN(y.N))}}
C.aH7.prototype={
t(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="id",f=i.a,e=f.e,d=f.d,a0=e>=d-0.005,a1=d<=0?1:e/d,a2=J.dP(f.c,new C.bY8(i)).cQ(0,0,new C.bY9()),a3=i.a.d+a2,a4=a0?a3:A.j3(B.k.aa(a3*a1,2))
f=i.a
e=f.r
f=e==null?"Aceitaste a proposta. "+f.f+" tem extras para o teu pedido.":e
e=A.W(22)
d=y.p
x=A.a([],d)
for(w=A.eo(i.a.c,0,y.P),v=J.an(w.a),u=w.b,w=new A.bX(v,u,A.u(w).i("bX<1>")),t=y.g,s=i.d,r=y.j;w.q();){q={}
p=w.c
p=p>=0?new A.X(u+p,v.gE(v)):A.al(A.c0())
q.a=null
o=q.a=p.b
n=J.a6(o)
m=s.u(0,n.h(o,g))
p=p.a===0?h:B.mQ
n=s.u(0,n.h(o,g))?$.ay:B.t
if(s.u(0,J.i(q.a,g)))l=h
else{k=new A.b9(B.V,1.5,B.ah,-1)
l=new A.dT(k,k,k,k)}j=s.u(0,J.i(q.a,g))?E.Pa:h
l=A.w(h,j,B.r,h,h,new A.O(n,h,l,h,h,h,B.ar),h,22,h,h,h,h,22)
n=A.a([A.h(A.a0(J.i(q.a,"name")),h,h,h,h,B.aa,h,h)],d)
j=t.a(J.i(q.a,"details"))
if(J.dM(j==null?B.aj:j))n.push(A.h(J.m3(r.a(J.i(q.a,"details"))," \xb7 "),h,h,h,h,B.L,h,h))
p=A.w(h,A.N(A.a([l,B.al,new A.bK(1,B.au,A.x(n,B.G,B.h,B.I),h),B.af,A.h("+ "+A.aL(A.dt(J.i(q.a,"amount")),!1),h,h,h,h,B.aa,h,h)],d),B.u,B.h,B.l,0,h),B.r,h,B.jB,p,h,h,h,h,h,h,h)
x.push(new A.k9(new A.oJ(h,h,h,h,h,m,!0,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.a5,h,h,h,h),!1,!1,h,!1,!1,new A.iF(p,new C.bYa(q,i),h,h),h))}f=A.a([new A.Nf(h,"Queres juntar alguma coisa?",f,h,h),B.a0,A.w(h,A.x(x,B.u,B.h,B.l),B.r,h,h,new A.O(B.ac,h,h,e,h,h,B.y),h,h,h,B.cN,h,h,h),B.a0],d)
if(!a0)f.push(A.N(A.a([D.azs,A.h(A.aL(a3,!1),h,h,h,h,B.L,h,h)],d),B.u,B.h,B.l,0,h))
f.push(B.aE)
f.push(A.N(A.a([A.a5(A.h(a0?"A pagar agora":"Sinal ("+B.k.aP(a1*100)+" %) agora",h,h,h,h,B.L,h,h),1),A.h(A.aL(a4,!0),h,h,h,h,B.cd,h,h)],d),B.u,B.h,B.l,0,h))
f.push(D.ad9)
f.push(B.br)
f.push(A.N(A.a([A.a5(A.aO(A.w(B.J,D.ceS,B.r,h,h,F.a7S,h,52,h,h,h,h,h),new C.bYb(a5),h),1),B.ab,A.a5(A.aO(A.w(B.J,A.h("Continuar \xb7 "+A.aL(a4,!0),1,h,h,h,B.mv,h,h),B.r,h,h,B.oI,h,52,h,h,h,h,h),new C.bYc(i,a5),h),2)],d),B.u,B.h,B.l,0,h))
return A.dU(A.x(f,B.F,B.h,B.I),B.x,h,B.am,h,B.av)}}
var z=a.updateTypes([])
C.bY8.prototype={
$1(d){return this.a.d.u(0,J.i(d,"id"))},
$S:41}
C.bY9.prototype={
$2(d,e){return d+A.dt(J.i(e,"amount"))},
$S:183}
C.bYa.prototype={
$0(){var x=this.b
return x.p(new C.bY7(this.a,x))},
$S:0}
C.bY7.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.u(0,J.i(v.a,"id"))
v=v.a
x=J.a6(v)
return u?w.K(0,x.h(v,"id")):w.B(0,A.a0(x.h(v,"id")))},
$S:0}
C.bYb.prototype={
$0(){return A.ap(this.a,!1).au(A.aN(y.N))},
$S:0}
C.bYc.prototype={
$0(){return A.ap(this.b,!1).au(A.eM(this.a.d,y.N))},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.yV,A.G)
x(C.aH7,A.Z)
x(C.bY8,A.bv)
x(C.bY9,A.cM)
w(A.bO,[C.bYa,C.bY7,C.bYb,C.bYc])})()
A.bq(b.typeUniverse,JSON.parse('{"yV":{"G":[],"e":[],"f":[]},"aH7":{"Z":["yV"]}}'))
var y=(function rtii(){var x=A.B
return{t:x("r<a4<c,@>>"),p:x("r<e>"),j:x("t<@>"),P:x("a4<c,@>"),f:x("a4<@,@>"),N:x("c"),q:x("dj"),z:x("@"),g:x("t<@>?"),a:x("+(T,T)?"),B:x("+(t<a4<c,@>>,T,T)?")}})();(function constants(){D.caU=new A.E("+ taxa de servi\xe7o no passo seguinte",null,B.L,null,null,null,null,null,null,null)
D.ad9=new A.dd(B.dQ,null,null,D.caU,null)
D.cfh=new A.E("Reserva + extras",null,B.L,null,null,null,null,null,null,null)
D.azs=new A.bK(1,B.au,D.cfh,null)
D.cci=new A.E("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null)
D.bYW=new A.bI(D.cci,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.x,null)
D.ceS=new A.E("Sem extras",null,B.bU,null,null,null,null,null,null,null)})()};
(a=>{a["WH9zjiT+bJ2v4RDgy/ZJTFJ3v4g="]=a.current})($__dart_deferred_initializers__);