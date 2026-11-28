((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dvl(d){return new A.EZ(d,null)},
dbO(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
dbN(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mP||x===C.tE
case 1:x=d.y
return x===C.jy||x===C.eL
case 2:return d.y===C.hn}},
H3:function H3(d,e){this.a=d
this.b=e},
cFK:function cFK(){},
EZ:function EZ(d,e){this.d=d
this.a=e},
afX:function afX(){var _=this
_.d=_.w=$
_.c=_.a=null},
ceY:function ceY(d,e,f){this.a=d
this.b=e
this.c=f},
ceR:function ceR(d){this.a=d},
ceS:function ceS(d,e,f){this.a=d
this.b=e
this.c=f},
ceT:function ceT(){},
ceU:function ceU(){},
ceV:function ceV(d,e,f){this.a=d
this.b=e
this.c=f},
ceW:function ceW(){},
ceX:function ceX(){},
cf7:function cf7(d){this.a=d},
cf8:function cf8(d){this.a=d},
cf3:function cf3(d,e){this.a=d
this.b=e},
cf2:function cf2(d,e){this.a=d
this.b=e},
cf6:function cf6(){},
cf5:function cf5(d){this.a=d},
ceZ:function ceZ(d){this.a=d},
cf4:function cf4(d,e){this.a=d
this.b=e},
cf_:function cf_(){},
cf0:function cf0(){},
cf1:function cf1(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[183]
A=a.updateHolder(c[33],A)
D=c[355]
F=c[104]
A.H3.prototype={
I(){return"_BookingSegment."+this.b}}
A.EZ.prototype={
P(){return new A.afX()}}
A.afX.prototype={
Ug(d,e,f){var x,w,v,u=B.a([],y.p)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.I)(f),++w){v=f[w]
u.push(new F.Vp(v,new A.ceY(this,e,v),!0,null))}return B.eQ(u,0)},
aTM(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.gS(),l=m.G($.dlY(),y.w),k=l.gv(l)
if(k==null)k=C.lZ
m=m.G($.p6().$1(n),y.T)
x=m.gv(m)
if(x==null)x=C.oe
w=B.a([],y.p)
for(m=J.an(k),l=J.cb(x);m.q();){v=m.gE(m)
u=J.a6(v)
t=u.h(v,"booking_id")
s=B.f9(l.ce(x,new A.ceR(B.y(t==null?u.h(v,"quote_request_id"):t))))
if(s==null)continue
switch(u.h(v,"kind")){case"people":t="Pessoas"
break
case"time":t="Hora"
break
case"scope":t="O que inclui"
break
case"date":t="Outro dia"
break
default:t="Outra coisa"
break}r=B.y(u.h(v,"from_value"))
q=r==null?n:C.f.C(r)
if(q==null)q=""
v=B.y(u.h(v,"to_value"))
p=v==null?n:C.f.C(v)
if(p==null)p=""
v=s.d
u=s.as
r=s.Q
t+=": "
t=q.length===0?t+p:t+q+" \u2192 "+p
o=s.f
w.push(new B.td(new B.cg(v,44,u,!1,!0,n),v+" \xb7 "+r.c,t,"Ver",new A.ceS(this,d,s),C.j.aL(o.b+1000*(o.a-Date.now()),864e8)<=3,n))}m=w.length
if(m===0)return n
return new B.c1("Altera\xe7\xf5es \xb7 "+m,n,w,16,n)},
b_w(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gzH()===D.zC?h.aTM(d):g
if(e.length===0){if(f!=null)return B.a([f],y.p)
x=A.dbO(h.gzH())
switch(h.gzH().a){case 0:w="Sem pedidos por tratar"
break
case 1:w="Ainda sem reservas confirmadas"
break
case 2:w="Ainda sem eventos conclu\xeddos"
break
default:w=g}switch(h.gzH().a){case 0:v="Os pedidos de or\xe7amento e de reserva aparecem aqui."
break
case 1:v="As reservas aceites e pagas aparecem aqui."
break
case 2:v="Os eventos que j\xe1 fizeste aparecem aqui."
break
default:v=g}u=y.p
return B.a([new B.c1(x,g,B.a([B.JT(C.eo,C.eR,v,w)],u),16,g)],u)}switch(h.gzH().a){case 0:x=B.a8(e).i("a7<1>")
w=x.i("z.E")
t=B.U(new B.a7(e,new A.ceT(),x),w)
s=B.U(new B.a7(e,new A.ceU(),x),w)
x=y.p
w=B.a([],x)
v=t.length
if(v!==0){u=B.a([],x)
for(r=t.length,q=y.s,p=0;p<t.length;t.length===r||(0,B.I)(t),++p){o=t[p]
n=o.d
m=o.f
l=B.a([""+B.aw(m)+" "+C.bd[B.aq(m)-1]+" "+B.aD(m)],q)
k=o.CW
if(k!=null)l.push(B.p(k)+" pessoas")
u.push(new B.td(new B.cg(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a1(l," \xb7 "),"Responder",new A.ceV(h,d,o),C.j.aL(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.c1("Por responder \xb7 "+v,g,u,16,g))}if(f!=null)w.push(f)
v=s.length
if(v!==0)w.push(new B.c1("Proposta enviada \xb7 "+v,g,B.a([h.Ug(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a7<1>")
w=x.i("z.E")
j=B.U(new B.a7(e,new A.ceW(),x),w)
i=B.U(new B.a7(e,new A.ceX(),x),w)
x=y.p
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.c1("\xc0 espera do sinal \xb7 "+v,g,B.a([h.Ug(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.c1("Confirmadas \xb7 "+v,g,B.a([h.Ug(0,d,i)],x),16,g))
return w
case 2:x=y.p
return B.a([new B.c1("Conclu\xeddos \xb7 "+e.length,g,B.a([h.Ug(0,d,e)],x),16,g)],x)}},
gzH(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abP
break
case"concluidos":x=D.abQ
break
default:x=D.zC
break}w=this.w=x}return w},
b7u(d){return A.dbN(d,this.gzH())},
t(d){var x,w,v,u,t=this,s=null,r=t.gS().G($.p6().$1(s),y.T),q=r.gv(r),p=new A.cf7(q==null?C.oe:q),o=B.aT(d,C.b5,y.l).w,n=B.a([],y.E)
for(x=0;x<3;++x){w=D.bs1[x]
v=A.dbO(w)
u=w===D.zC?p.$1(w):s
n.push(new B.eq(v,t.gzH()===w,u,new A.cf3(t,w),s))}v=y.p
n=B.a([D.bXl,new E.mf(n,16,!1,s)],v)
C.e.n(n,B.hA(r,new A.cf4(t,d),new A.cf5(t),new A.cf6(),!1,!0,!1))
return B.cO(s,C.cS,new B.by(C.aw,s,C.aC,C.x,B.a([B.d3(n,s,new B.a3(20,o.r.b+12,20,140),s,s,!1,!1),D.bPf],v),s),!0,s)}}
var z=a.updateTypes(["C(eK)","v(H3)"])
A.cFK.prototype={
$1(d){return this.aF5(d)},
aF5(d){var x=0,w=B.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.R("booking_change_requests").al(0,"id, booking_id, quote_request_id, kind, from_value, to_value, created_at").V("status","open").Bt("requested_by_role","partner").cK(0,"created_at",!1),$async$$1)
case 7:s=f
r=B.a([],y.t)
for(p=J.an(s),o=y.f,n=y.N,m=y.z;p.q();){q=p.gE(p)
J.bn(r,B.dY(o.a(q),n,m))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
v=C.lZ
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1525}
A.ceY.prototype={
$0(){var x=this.c
return B.ae(this.b).ag("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceR.prototype={
$1(d){return d.a===this.a},
$S:35}
A.ceS.prototype={
$0(){var x=this.c
return B.ae(this.b).ag("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceT.prototype={
$1(d){return!d.ax},
$S:35}
A.ceU.prototype={
$1(d){return d.ax},
$S:35}
A.ceV.prototype={
$0(){var x=this.c
return B.ae(this.b).ag("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceW.prototype={
$1(d){return d.y===C.jy},
$S:35}
A.ceX.prototype={
$1(d){return d.y===C.eL},
$S:35}
A.cf7.prototype={
$1(d){return J.dP(this.a,new A.cf8(d)).gA(0)},
$S:z+1}
A.cf8.prototype={
$1(d){return A.dbN(d,this.a)},
$S:35}
A.cf3.prototype={
$0(){var x=this.a
return x.p(new A.cf2(x,this.b))},
$S:0}
A.cf2.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cf6.prototype={
$0(){return D.bv9},
$S:73}
A.cf5.prototype={
$2(d,e){return B.a([new B.jj("N\xe3o foi poss\xedvel carregar.",new A.ceZ(this.a),null)],y.p)},
$S:1526}
A.ceZ.prototype={
$0(){return this.a.gS().ak($.p6().$1(null))},
$S:0}
A.cf4.prototype={
$1(d){var x,w=null,v=this.a,u=J.cb(d),t=u.ce(d,v.gb7t()),s=B.U(t,t.$ti.i("z.E")),r=u.ce(d,new A.cf_()).gA(0),q=u.ce(d,new A.cf0()).gA(0),p=u.ce(d,new A.cf1()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.p
x=B.a([B.vm(new B.S(C.jM,B.em(C.bl,B.a([new B.dX(""+q+" por responder",C.hF,w),new B.dX(""+p+" "+t,C.da,w)],x),C.r,C.bq,8,8),w),w,"Pedidos recebidos",C.hH,w,u,""+r)],x)
C.e.n(x,v.b_w(this.b,s))
return x},
$S:1527}
A.cf_.prototype={
$1(d){return d.at},
$S:35}
A.cf0.prototype={
$1(d){return d.y===C.mP&&!d.ax},
$S:35}
A.cf1.prototype={
$1(d){return d.ax&&d.y===C.tE},
$S:35};(function installTearOffs(){var x=a._instance_1u
x(A.afX.prototype,"gb7t","b7u",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.H3,B.fj)
w(B.bv,[A.cFK,A.ceR,A.ceT,A.ceU,A.ceW,A.ceX,A.cf7,A.cf8,A.cf4,A.cf_,A.cf0,A.cf1])
x(A.EZ,B.dB)
x(A.afX,B.dx)
w(B.bO,[A.ceY,A.ceS,A.ceV,A.cf3,A.cf2,A.cf6,A.ceZ])
x(A.cf5,B.cM)})()
B.bq(b.typeUniverse,JSON.parse('{"EZ":{"G":[],"e":[],"f":[]},"afX":{"Z":["EZ"]}}'))
var y=(function rtii(){var x=B.B
return{T:x("ax<t<eK>>"),w:x("ax<t<a4<c,@>>>"),E:x("r<eq>"),t:x("r<a4<c,@>>"),s:x("r<c>"),p:x("r<e>"),D:x("t<a4<c,@>>"),f:x("a4<@,@>"),l:x("dC"),N:x("c"),z:x("@"),X:x("L?")}})();(function constants(){var x=a.makeConstList
D.zC=new A.H3(0,"recebidos")
D.abP=new A.H3(1,"confirmados")
D.abQ=new A.H3(2,"concluidos")
D.bs1=x([D.zC,D.abP,D.abQ],B.B("r<H3>"))
D.bv9=x([C.a1O],y.p)
D.bLJ=new B.Lr(C.a20,null)
D.bPf=new B.eU(0,null,0,0,null,null,D.bLJ,null)
D.c8D=new B.E("Pedidos",null,C.hT,null,null,null,null,null,null,null)
D.ad7=new B.dd(C.bi,null,null,D.c8D,null)
D.bXl=new B.bU(null,44,D.ad7,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dX3","dlY",()=>C.bM.$1$1(new A.cFK(),y.D))})()};
(a=>{a["wTwoPJI4niAsz8ZDHXGfRJjVRDw="]=a.current})($__dart_deferred_initializers__);