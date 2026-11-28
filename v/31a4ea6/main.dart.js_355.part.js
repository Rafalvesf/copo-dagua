((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dvy(d){return new A.EX(d,null)},
dc_(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
dbZ(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mR||x===C.tH
case 1:x=d.y
return x===C.jA||x===C.eM
case 2:return d.y===C.hp}},
H1:function H1(d,e){this.a=d
this.b=e},
cFT:function cFT(){},
EX:function EX(d,e){this.d=d
this.a=e},
afZ:function afZ(){var _=this
_.d=_.w=$
_.c=_.a=null},
cf3:function cf3(d,e,f){this.a=d
this.b=e
this.c=f},
ceX:function ceX(d){this.a=d},
ceY:function ceY(d,e,f){this.a=d
this.b=e
this.c=f},
ceZ:function ceZ(){},
cf_:function cf_(){},
cf0:function cf0(d,e,f){this.a=d
this.b=e
this.c=f},
cf1:function cf1(){},
cf2:function cf2(){},
cfd:function cfd(d){this.a=d},
cfe:function cfe(d){this.a=d},
cf9:function cf9(d,e){this.a=d
this.b=e},
cf8:function cf8(d,e){this.a=d
this.b=e},
cfc:function cfc(){},
cfb:function cfb(d){this.a=d},
cf4:function cf4(d){this.a=d},
cfa:function cfa(d,e){this.a=d
this.b=e},
cf5:function cf5(){},
cf6:function cf6(){},
cf7:function cf7(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[183]
A=a.updateHolder(c[33],A)
D=c[354]
F=c[104]
A.H1.prototype={
I(){return"_BookingSegment."+this.b}}
A.EX.prototype={
P(){return new A.afZ()}}
A.afZ.prototype={
Ui(d,e,f){var x,w,v,u=B.a([],y.p)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.I)(f),++w){v=f[w]
u.push(new F.Vq(v,new A.cf3(this,e,v),!0,null))}return B.eQ(u,0)},
aTM(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.gS(),l=m.G($.dma(),y.w),k=l.gv(l)
if(k==null)k=C.m0
m=m.G($.p4().$1(n),y.T)
x=m.gv(m)
if(x==null)x=C.oh
w=B.a([],y.p)
for(m=J.ao(k),l=J.ca(x);m.q();){v=m.gE(m)
u=J.a6(v)
t=u.h(v,"booking_id")
s=B.f8(l.ce(x,new A.ceX(B.x(t==null?u.h(v,"quote_request_id"):t))))
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
break}r=B.x(u.h(v,"from_value"))
q=r==null?n:C.f.C(r)
if(q==null)q=""
v=B.x(u.h(v,"to_value"))
p=v==null?n:C.f.C(v)
if(p==null)p=""
v=s.d
u=s.as
r=s.Q
t+=": "
t=q.length===0?t+p:t+q+" \u2192 "+p
o=s.f
w.push(new B.td(new B.cg(v,44,u,!1,!0,n),v+" \xb7 "+r.c,t,"Ver",new A.ceY(this,d,s),C.j.aO(o.b+1000*(o.a-Date.now()),864e8)<=3,n))}m=w.length
if(m===0)return n
return new B.c1("Altera\xe7\xf5es \xb7 "+m,n,w,16,n)},
b_w(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gzH()===D.zG?h.aTM(d):g
if(e.length===0){if(f!=null)return B.a([f],y.p)
x=A.dc_(h.gzH())
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
return B.a([new B.c1(x,g,B.a([B.JS(C.en,C.eR,v,w)],u),16,g)],u)}switch(h.gzH().a){case 0:x=B.a8(e).i("a7<1>")
w=x.i("z.E")
t=B.U(new B.a7(e,new A.ceZ(),x),w)
s=B.U(new B.a7(e,new A.cf_(),x),w)
x=y.p
w=B.a([],x)
v=t.length
if(v!==0){u=B.a([],x)
for(r=t.length,q=y.s,p=0;p<t.length;t.length===r||(0,B.I)(t),++p){o=t[p]
n=o.d
m=o.f
l=B.a([""+B.ax(m)+" "+C.be[B.aq(m)-1]+" "+B.aD(m)],q)
k=o.CW
if(k!=null)l.push(B.p(k)+" pessoas")
u.push(new B.td(new B.cg(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a1(l," \xb7 "),"Responder",new A.cf0(h,d,o),C.j.aO(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.c1("Por responder \xb7 "+v,g,u,16,g))}if(f!=null)w.push(f)
v=s.length
if(v!==0)w.push(new B.c1("Proposta enviada \xb7 "+v,g,B.a([h.Ui(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a7<1>")
w=x.i("z.E")
j=B.U(new B.a7(e,new A.cf1(),x),w)
i=B.U(new B.a7(e,new A.cf2(),x),w)
x=y.p
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.c1("\xc0 espera do sinal \xb7 "+v,g,B.a([h.Ui(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.c1("Confirmadas \xb7 "+v,g,B.a([h.Ui(0,d,i)],x),16,g))
return w
case 2:x=y.p
return B.a([new B.c1("Conclu\xeddos \xb7 "+e.length,g,B.a([h.Ui(0,d,e)],x),16,g)],x)}},
gzH(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abS
break
case"concluidos":x=D.abT
break
default:x=D.zG
break}w=this.w=x}return w},
b7u(d){return A.dbZ(d,this.gzH())},
t(d){var x,w,v,u,t=this,s=null,r=t.gS().G($.p4().$1(s),y.T),q=r.gv(r),p=new A.cfd(q==null?C.oh:q),o=B.aU(d,C.b4,y.l).w,n=B.a([],y.E)
for(x=0;x<3;++x){w=D.bs2[x]
v=A.dc_(w)
u=w===D.zG?p.$1(w):s
n.push(new B.eq(v,t.gzH()===w,u,new A.cf9(t,w),s))}v=y.p
n=B.a([D.bXl,new E.md(n,16,!1,s)],v)
C.e.n(n,B.hA(r,new A.cfa(t,d),new A.cfb(t),new A.cfc(),!1,!0,!1))
return B.cP(s,C.cR,new B.bB(C.av,s,C.aC,C.y,B.a([B.d4(n,s,new B.a3(20,o.r.b+12,20,140),s,s,!1,!1),D.bPe],v),s),!0,s)}}
var z=a.updateTypes(["C(eK)","v(H1)"])
A.cFT.prototype={
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
for(p=J.ao(s),o=y.f,n=y.N,m=y.z;p.q();){q=p.gE(p)
J.bn(r,B.dY(o.a(q),n,m))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
v=C.m0
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
A.cf3.prototype={
$0(){var x=this.c
return B.ae(this.b).ag("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceX.prototype={
$1(d){return d.a===this.a},
$S:35}
A.ceY.prototype={
$0(){var x=this.c
return B.ae(this.b).ag("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceZ.prototype={
$1(d){return!d.ax},
$S:35}
A.cf_.prototype={
$1(d){return d.ax},
$S:35}
A.cf0.prototype={
$0(){var x=this.c
return B.ae(this.b).ag("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cf1.prototype={
$1(d){return d.y===C.jA},
$S:35}
A.cf2.prototype={
$1(d){return d.y===C.eM},
$S:35}
A.cfd.prototype={
$1(d){return J.dP(this.a,new A.cfe(d)).gA(0)},
$S:z+1}
A.cfe.prototype={
$1(d){return A.dbZ(d,this.a)},
$S:35}
A.cf9.prototype={
$0(){var x=this.a
return x.p(new A.cf8(x,this.b))},
$S:0}
A.cf8.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cfc.prototype={
$0(){return D.bv9},
$S:73}
A.cfb.prototype={
$2(d,e){return B.a([new B.jj("N\xe3o foi poss\xedvel carregar.",new A.cf4(this.a),null)],y.p)},
$S:1526}
A.cf4.prototype={
$0(){return this.a.gS().ak($.p4().$1(null))},
$S:0}
A.cfa.prototype={
$1(d){var x,w=null,v=this.a,u=J.ca(d),t=u.ce(d,v.gb7t()),s=B.U(t,t.$ti.i("z.E")),r=u.ce(d,new A.cf5()).gA(0),q=u.ce(d,new A.cf6()).gA(0),p=u.ce(d,new A.cf7()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.p
x=B.a([B.vj(new B.S(C.jO,B.em(C.bj,B.a([new B.dX(""+q+" por responder",C.hH,w),new B.dX(""+p+" "+t,C.da,w)],x),C.r,C.bo,8,8),w),w,"Pedidos recebidos",C.hJ,w,u,""+r)],x)
C.e.n(x,v.b_w(this.b,s))
return x},
$S:1527}
A.cf5.prototype={
$1(d){return d.at},
$S:35}
A.cf6.prototype={
$1(d){return d.y===C.mR&&!d.ax},
$S:35}
A.cf7.prototype={
$1(d){return d.ax&&d.y===C.tH},
$S:35};(function installTearOffs(){var x=a._instance_1u
x(A.afZ.prototype,"gb7t","b7u",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.H1,B.fj)
w(B.bv,[A.cFT,A.ceX,A.ceZ,A.cf_,A.cf1,A.cf2,A.cfd,A.cfe,A.cfa,A.cf5,A.cf6,A.cf7])
x(A.EX,B.dB)
x(A.afZ,B.dx)
w(B.bN,[A.cf3,A.ceY,A.cf0,A.cf9,A.cf8,A.cfc,A.cf4])
x(A.cfb,B.cM)})()
B.bq(b.typeUniverse,JSON.parse('{"EX":{"G":[],"e":[],"f":[]},"afZ":{"Z":["EX"]}}'))
var y=(function rtii(){var x=B.B
return{T:x("aw<t<eK>>"),w:x("aw<t<a5<c,@>>>"),E:x("r<eq>"),t:x("r<a5<c,@>>"),s:x("r<c>"),p:x("r<e>"),D:x("t<a5<c,@>>"),f:x("a5<@,@>"),l:x("dC"),N:x("c"),z:x("@"),X:x("L?")}})();(function constants(){var x=a.makeConstList
D.zG=new A.H1(0,"recebidos")
D.abS=new A.H1(1,"confirmados")
D.abT=new A.H1(2,"concluidos")
D.bs2=x([D.zG,D.abS,D.abT],B.B("r<H1>"))
D.bv9=x([C.a1U],y.p)
D.bLI=new B.Lq(C.a26,null)
D.bPe=new B.eU(0,null,0,0,null,null,D.bLI,null)
D.c8x=new B.F("Pedidos",null,C.hV,null,null,null,null,null,null,null)
D.ada=new B.dd(C.bh,null,null,D.c8x,null)
D.bXl=new B.bX(null,44,D.ada,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXe","dma",()=>C.bL.$1$1(new A.cFT(),y.D))})()};
(a=>{a["A9VX69q/th3r2x3RqF8ThmwDPZI="]=a.current})($__dart_deferred_initializers__);