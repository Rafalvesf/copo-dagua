((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dul(d){return new A.EY(d,null)},
db1(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
db0(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mO||x===C.tP
case 1:x=d.y
return x===C.jr||x===C.eQ
case 2:return d.y===C.hm}},
GV:function GV(d,e){this.a=d
this.b=e},
cFS:function cFS(){},
EY:function EY(d,e){this.d=d
this.a=e},
afA:function afA(){var _=this
_.d=_.w=$
_.c=_.a=null},
cex:function cex(d,e,f){this.a=d
this.b=e
this.c=f},
ceq:function ceq(d){this.a=d},
cer:function cer(d,e,f){this.a=d
this.b=e
this.c=f},
ces:function ces(){},
cet:function cet(){},
ceu:function ceu(d,e,f){this.a=d
this.b=e
this.c=f},
cev:function cev(){},
cew:function cew(){},
ceH:function ceH(d){this.a=d},
ceI:function ceI(d){this.a=d},
ceD:function ceD(d,e){this.a=d
this.b=e},
ceC:function ceC(d,e){this.a=d
this.b=e},
ceG:function ceG(){},
ceF:function ceF(d){this.a=d},
cey:function cey(d){this.a=d},
ceE:function ceE(d,e){this.a=d
this.b=e},
cez:function cez(){},
ceA:function ceA(){},
ceB:function ceB(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[187]
A=a.updateHolder(c[33],A)
D=c[353]
F=c[104]
A.GV.prototype={
I(){return"_BookingSegment."+this.b}}
A.EY.prototype={
R(){return new A.afA()}}
A.afA.prototype={
Ux(d,e,f){var x,w,v,u=B.a([],y.p)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.H)(f),++w){v=f[w]
u.push(new F.V2(v,new A.cex(this,e,v),!0,null))}return B.eT(u,0)},
aU0(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.gS(),l=m.G($.dkZ(),y.w),k=l.gv(l)
if(k==null)k=C.lR
m=m.G($.p8().$1(n),y.T)
x=m.gv(m)
if(x==null)x=C.r3
w=B.a([],y.p)
for(m=J.ap(k),l=J.c7(x);m.t();){v=m.gE(m)
u=J.a7(v)
t=u.h(v,"booking_id")
s=B.eL(l.cd(x,new A.ceq(B.C(t==null?u.h(v,"quote_request_id"):t))))
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
break}r=B.C(u.h(v,"from_value"))
q=r==null?n:C.f.B(r)
if(q==null)q=""
v=B.C(u.h(v,"to_value"))
p=v==null?n:C.f.B(v)
if(p==null)p=""
v=s.d
u=s.as
r=s.Q
t+=": "
t=q.length===0?t+p:t+q+" \u2192 "+p
o=s.f
w.push(new B.td(new B.ci(v,44,u,!1,!0,n),v+" \xb7 "+r.c,t,"Ver",new A.cer(this,d,s),C.j.aP(o.b+1000*(o.a-Date.now()),864e8)<=3,n))}m=w.length
if(m===0)return n
return new B.cc("Altera\xe7\xf5es \xb7 "+m,n,w,16,n)},
b_E(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gzT()===D.zF?h.aU0(d):g
if(e.length===0){if(f!=null)return B.a([f],y.p)
x=A.db1(h.gzT())
switch(h.gzT().a){case 0:w="Sem pedidos por tratar"
break
case 1:w="Ainda sem reservas confirmadas"
break
case 2:w="Ainda sem eventos conclu\xeddos"
break
default:w=g}switch(h.gzT().a){case 0:v="Os pedidos de or\xe7amento e de reserva aparecem aqui."
break
case 1:v="As reservas aceites e pagas aparecem aqui."
break
case 2:v="Os eventos que j\xe1 fizeste aparecem aqui."
break
default:v=g}u=y.p
return B.a([new B.cc(x,g,B.a([B.JL(C.h3,C.eT,v,w)],u),16,g)],u)}switch(h.gzT().a){case 0:x=B.a8(e).i("a5<1>")
w=x.i("x.E")
t=B.U(new B.a5(e,new A.ces(),x),w)
s=B.U(new B.a5(e,new A.cet(),x),w)
x=y.p
w=B.a([],x)
v=t.length
if(v!==0){u=B.a([],x)
for(r=t.length,q=y.s,p=0;p<t.length;t.length===r||(0,B.H)(t),++p){o=t[p]
n=o.d
m=o.f
l=B.a([""+B.ay(m)+" "+C.bg[B.an(m)-1]+" "+B.ax(m)],q)
k=o.CW
if(k!=null)l.push(B.q(k)+" pessoas")
u.push(new B.td(new B.ci(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a0(l," \xb7 "),"Responder",new A.ceu(h,d,o),C.j.aP(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.cc("Por responder \xb7 "+v,g,u,16,g))}if(f!=null)w.push(f)
v=s.length
if(v!==0)w.push(new B.cc("Proposta enviada \xb7 "+v,g,B.a([h.Ux(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a5<1>")
w=x.i("x.E")
j=B.U(new B.a5(e,new A.cev(),x),w)
i=B.U(new B.a5(e,new A.cew(),x),w)
x=y.p
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.cc("\xc0 espera do sinal \xb7 "+v,g,B.a([h.Ux(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.cc("Confirmadas \xb7 "+v,g,B.a([h.Ux(0,d,i)],x),16,g))
return w
case 2:x=y.p
return B.a([new B.cc("Conclu\xeddos \xb7 "+e.length,g,B.a([h.Ux(0,d,e)],x),16,g)],x)}},
gzT(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abK
break
case"concluidos":x=D.abL
break
default:x=D.zF
break}w=this.w=x}return w},
b81(d){return A.db0(d,this.gzT())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().G($.p8().$1(s),y.T),q=r.gv(r),p=new A.ceH(q==null?C.r3:q),o=B.aO(d,C.b5,y.l).w,n=B.a([],y.E)
for(x=0;x<3;++x){w=D.bs1[x]
v=A.db1(w)
u=w===D.zF?p.$1(w):s
n.push(new B.ek(v,t.gzT()===w,u,new A.ceD(t,w),s))}v=y.p
n=B.a([D.bXp,new E.me(n,16,!1,s)],v)
C.e.n(n,B.hC(r,new A.ceE(t,d),new A.ceF(t),new A.ceG(),!1,!0,!1))
return B.cQ(s,C.d1,new B.bB(C.ax,s,C.aD,C.y,B.a([B.d6(n,s,new B.a3(20,o.r.b+12,20,140),s,s,!1,!1),D.bPB],v),s),!0,s)}}
var z=a.updateTypes(["z(eI)","v(GV)"])
A.cFS.prototype={
$1(d){return this.aFh(d)},
aFh(d){var x=0,w=B.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&B.b()
x=7
return B.d(p.P("booking_change_requests").ai(0,"id, booking_id, quote_request_id, kind, from_value, to_value, created_at").V("status","open").BA("requested_by_role","partner").cO(0,"created_at",!1),$async$$1)
case 7:s=f
r=B.a([],y.t)
for(p=J.ap(s),o=y.f,n=y.N,m=y.z;p.t();){q=p.gE(p)
J.br(r,B.dZ(o.a(q),n,m))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
v=C.lR
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1504}
A.cex.prototype={
$0(){var x=this.c
return B.ae(this.b).al("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceq.prototype={
$1(d){return d.a===this.a},
$S:36}
A.cer.prototype={
$0(){var x=this.c
return B.ae(this.b).al("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ces.prototype={
$1(d){return!d.ax},
$S:36}
A.cet.prototype={
$1(d){return d.ax},
$S:36}
A.ceu.prototype={
$0(){var x=this.c
return B.ae(this.b).al("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cev.prototype={
$1(d){return d.y===C.jr},
$S:36}
A.cew.prototype={
$1(d){return d.y===C.eQ},
$S:36}
A.ceH.prototype={
$1(d){return J.db(this.a,new A.ceI(d)).gA(0)},
$S:z+1}
A.ceI.prototype={
$1(d){return A.db0(d,this.a)},
$S:36}
A.ceD.prototype={
$0(){var x=this.a
return x.p(new A.ceC(x,this.b))},
$S:0}
A.ceC.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.ceG.prototype={
$0(){return D.bvf},
$S:80}
A.ceF.prototype={
$2(d,e){return B.a([new B.ji("N\xe3o foi poss\xedvel carregar.",new A.cey(this.a),null)],y.p)},
$S:1505}
A.cey.prototype={
$0(){return this.a.gS().ak($.p8().$1(null))},
$S:0}
A.ceE.prototype={
$1(d){var x,w=null,v=this.a,u=J.c7(d),t=u.cd(d,v.gb80()),s=B.U(t,t.$ti.i("x.E")),r=u.cd(d,new A.cez()).gA(0),q=u.cd(d,new A.ceA()).gA(0),p=u.cd(d,new A.ceB()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.p
x=B.a([B.vh(new B.T(C.jD,B.e1(C.bd,B.a([new B.dY(""+q+" por responder",C.hD,w),new B.dY(""+p+" "+t,C.dt,w)],x),C.r,C.bj,8,8),w),w,"Pedidos recebidos",C.hF,w,u,""+r)],x)
C.e.n(x,v.b_E(this.b,s))
return x},
$S:1506}
A.cez.prototype={
$1(d){return d.at},
$S:36}
A.ceA.prototype={
$1(d){return d.y===C.mO&&!d.ax},
$S:36}
A.ceB.prototype={
$1(d){return d.ax&&d.y===C.tP},
$S:36};(function installTearOffs(){var x=a._instance_1u
x(A.afA.prototype,"gb80","b81",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GV,B.eX)
w(B.bw,[A.cFS,A.ceq,A.ces,A.cet,A.cev,A.cew,A.ceH,A.ceI,A.ceE,A.cez,A.ceA,A.ceB])
x(A.EY,B.dA)
x(A.afA,B.dv)
w(B.bO,[A.cex,A.cer,A.ceu,A.ceD,A.ceC,A.ceG,A.cey])
x(A.ceF,B.cK)})()
B.bt(b.typeUniverse,JSON.parse('{"EY":{"G":[],"e":[],"f":[]},"afA":{"Y":["EY"]}}'))
var y=(function rtii(){var x=B.w
return{T:x("az<t<eI>>"),w:x("az<t<a4<c,@>>>"),E:x("r<ek>"),t:x("r<a4<c,@>>"),s:x("r<c>"),p:x("r<e>"),D:x("t<a4<c,@>>"),f:x("a4<@,@>"),l:x("dh"),N:x("c"),z:x("@"),X:x("J?")}})();(function constants(){var x=a.makeConstList
D.zF=new A.GV(0,"recebidos")
D.abK=new A.GV(1,"confirmados")
D.abL=new A.GV(2,"concluidos")
D.bs1=x([D.zF,D.abK,D.abL],B.w("r<GV>"))
D.bvf=x([C.a1P],y.p)
D.bM9=new B.Lm(C.a2_,null)
D.bPB=new B.eF(0,null,0,0,null,null,D.bM9,null)
D.c9I=new B.D("Pedidos",null,C.hQ,null,null,null,null,null,null,null,null)
D.acX=new B.d0(C.be,null,null,D.c9I,null)
D.bXp=new B.c_(null,44,D.acX,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVT","dkZ",()=>C.bP.$1$1(new A.cFS(),y.D))})()};
(a=>{a["Yo4u0xGVwNSs24iWWpQvNB9vCF0="]=a.current})($__dart_deferred_initializers__);