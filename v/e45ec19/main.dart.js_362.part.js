((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dvc(d){return new A.F1(d,null)},
dbN(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
dbM(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mH||x===C.tx
case 1:x=d.y
return x===C.jr||x===C.eO
case 2:return d.y===C.hl}},
H4:function H4(d,e){this.a=d
this.b=e},
cG0:function cG0(){},
F1:function F1(d,e){this.d=d
this.a=e},
afB:function afB(){var _=this
_.d=_.w=$
_.c=_.a=null},
ceo:function ceo(d,e,f){this.a=d
this.b=e
this.c=f},
ceh:function ceh(d){this.a=d},
cei:function cei(d,e,f){this.a=d
this.b=e
this.c=f},
cej:function cej(){},
cek:function cek(){},
cel:function cel(d,e,f){this.a=d
this.b=e
this.c=f},
cem:function cem(){},
cen:function cen(){},
cey:function cey(d){this.a=d},
cez:function cez(d){this.a=d},
ceu:function ceu(d,e){this.a=d
this.b=e},
cet:function cet(d,e){this.a=d
this.b=e},
cex:function cex(){},
cew:function cew(d){this.a=d},
cep:function cep(d){this.a=d},
cev:function cev(d,e){this.a=d
this.b=e},
ceq:function ceq(){},
cer:function cer(){},
ces:function ces(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[186]
A=a.updateHolder(c[33],A)
D=c[350]
F=c[104]
A.H4.prototype={
I(){return"_BookingSegment."+this.b}}
A.F1.prototype={
P(){return new A.afB()}}
A.afB.prototype={
U6(d,e,f){var x,w,v,u=B.a([],y.p)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.H)(f),++w){v=f[w]
u.push(new F.Vh(v,new A.ceo(this,e,v),!0,null))}return B.eQ(u,0)},
aTg(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.gR(),l=m.G($.dlQ(),y.w),k=l.gv(l)
if(k==null)k=C.lP
m=m.G($.p8().$1(n),y.T)
x=m.gv(m)
if(x==null)x=C.qG
w=B.a([],y.p)
for(m=J.ao(k),l=J.cb(x);m.q();){v=m.gE(m)
u=J.a6(v)
t=u.h(v,"booking_id")
s=B.f4(l.cb(x,new A.ceh(B.B(t==null?u.h(v,"quote_request_id"):t))))
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
break}r=B.B(u.h(v,"from_value"))
q=r==null?n:C.f.B(r)
if(q==null)q=""
v=B.B(u.h(v,"to_value"))
p=v==null?n:C.f.B(v)
if(p==null)p=""
v=s.d
u=s.as
r=s.Q
t+=": "
t=q.length===0?t+p:t+q+" \u2192 "+p
o=s.f
w.push(new B.ti(new B.ch(v,44,u,!1,!0,n),v+" \xb7 "+r.c,t,"Ver",new A.cei(this,d,s),C.j.aO(o.b+1000*(o.a-Date.now()),864e8)<=3,n))}m=w.length
if(m===0)return n
return new B.c3("Altera\xe7\xf5es \xb7 "+m,n,w,16,n)},
aZS(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gzK()===D.zC?h.aTg(d):g
if(e.length===0){if(f!=null)return B.a([f],y.p)
x=A.dbN(h.gzK())
switch(h.gzK().a){case 0:w="Sem pedidos por tratar"
break
case 1:w="Ainda sem reservas confirmadas"
break
case 2:w="Ainda sem eventos conclu\xeddos"
break
default:w=g}switch(h.gzK().a){case 0:v="Os pedidos de or\xe7amento e de reserva aparecem aqui."
break
case 1:v="As reservas aceites e pagas aparecem aqui."
break
case 2:v="Os eventos que j\xe1 fizeste aparecem aqui."
break
default:v=g}u=y.p
return B.a([new B.c3(x,g,B.a([B.JV(C.eA,C.eS,v,w)],u),16,g)],u)}switch(h.gzK().a){case 0:x=B.a8(e).i("a7<1>")
w=x.i("y.E")
t=B.U(new B.a7(e,new A.cej(),x),w)
s=B.U(new B.a7(e,new A.cek(),x),w)
x=y.p
w=B.a([],x)
v=t.length
if(v!==0){u=B.a([],x)
for(r=t.length,q=y.s,p=0;p<t.length;t.length===r||(0,B.H)(t),++p){o=t[p]
n=o.d
m=o.f
l=B.a([""+B.aD(m)+" "+C.be[B.aw(m)-1]+" "+B.aL(m)],q)
k=o.CW
if(k!=null)l.push(B.p(k)+" pessoas")
u.push(new B.ti(new B.ch(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a_(l," \xb7 "),"Responder",new A.cel(h,d,o),C.j.aO(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.c3("Por responder \xb7 "+v,g,u,16,g))}if(f!=null)w.push(f)
v=s.length
if(v!==0)w.push(new B.c3("Proposta enviada \xb7 "+v,g,B.a([h.U6(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a7<1>")
w=x.i("y.E")
j=B.U(new B.a7(e,new A.cem(),x),w)
i=B.U(new B.a7(e,new A.cen(),x),w)
x=y.p
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.c3("\xc0 espera do sinal \xb7 "+v,g,B.a([h.U6(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.c3("Confirmadas \xb7 "+v,g,B.a([h.U6(0,d,i)],x),16,g))
return w
case 2:x=y.p
return B.a([new B.c3("Conclu\xeddos \xb7 "+e.length,g,B.a([h.U6(0,d,e)],x),16,g)],x)}},
gzK(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abB
break
case"concluidos":x=D.abC
break
default:x=D.zC
break}w=this.w=x}return w},
b6K(d){return A.dbM(d,this.gzK())},
u(d){var x,w,v,u,t=this,s=null,r=t.gR().G($.p8().$1(s),y.T),q=r.gv(r),p=new A.cey(q==null?C.qG:q),o=B.aT(d,C.b5,y.l).w,n=B.a([],y.E)
for(x=0;x<3;++x){w=D.bs2[x]
v=A.dbN(w)
u=w===D.zC?p.$1(w):s
n.push(new B.ej(v,t.gzK()===w,u,new A.ceu(t,w),s))}v=y.p
n=B.a([D.bX9,new E.mc(n,16,!1,s)],v)
C.e.p(n,B.hE(r,new A.cev(t,d),new A.cew(t),new A.cex(),!1,!0,!1))
return B.cP(s,C.cQ,new B.bA(C.aw,s,C.aD,C.y,B.a([B.d6(n,s,new B.a4(20,o.r.b+12,20,140),s,s,!1,!1),D.bPv],v),s),!0,s)}}
var z=a.updateTypes(["C(eI)","v(H4)"])
A.cG0.prototype={
$1(d){return this.aEy(d)},
aEy(d){var x=0,w=B.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.S("booking_change_requests").an(0,"id, booking_id, quote_request_id, kind, from_value, to_value, created_at").X("status","open").Bq("requested_by_role","partner").cJ(0,"created_at",!1),$async$$1)
case 7:s=f
r=B.a([],y.t)
for(p=J.ao(s),o=y.f,n=y.N,m=y.z;p.q();){q=p.gE(p)
J.bn(r,B.dV(o.a(q),n,m))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
v=C.lP
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1514}
A.ceo.prototype={
$0(){var x=this.c
return B.ae(this.b).ag("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceh.prototype={
$1(d){return d.a===this.a},
$S:33}
A.cei.prototype={
$0(){var x=this.c
return B.ae(this.b).ag("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cej.prototype={
$1(d){return!d.ax},
$S:33}
A.cek.prototype={
$1(d){return d.ax},
$S:33}
A.cel.prototype={
$0(){var x=this.c
return B.ae(this.b).ag("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.cem.prototype={
$1(d){return d.y===C.jr},
$S:33}
A.cen.prototype={
$1(d){return d.y===C.eO},
$S:33}
A.cey.prototype={
$1(d){return J.dm(this.a,new A.cez(d)).gA(0)},
$S:z+1}
A.cez.prototype={
$1(d){return A.dbM(d,this.a)},
$S:33}
A.ceu.prototype={
$0(){var x=this.a
return x.n(new A.cet(x,this.b))},
$S:0}
A.cet.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cex.prototype={
$0(){return D.bvg},
$S:77}
A.cew.prototype={
$2(d,e){return B.a([new B.jl("N\xe3o foi poss\xedvel carregar.",new A.cep(this.a),null)],y.p)},
$S:1515}
A.cep.prototype={
$0(){return this.a.gR().ai($.p8().$1(null))},
$S:0}
A.cev.prototype={
$1(d){var x,w=null,v=this.a,u=J.cb(d),t=u.cb(d,v.gb6J()),s=B.U(t,t.$ti.i("y.E")),r=u.cb(d,new A.ceq()).gA(0),q=u.cb(d,new A.cer()).gA(0),p=u.cb(d,new A.ces()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.p
x=B.a([B.vp(new B.S(C.jE,B.e5(C.bi,B.a([new B.dU(""+q+" por responder",C.hE,w),new B.dU(""+p+" "+t,C.df,w)],x),C.r,C.bl,8,8),w),w,"Pedidos recebidos",C.hG,w,u,""+r)],x)
C.e.p(x,v.aZS(this.b,s))
return x},
$S:1516}
A.ceq.prototype={
$1(d){return d.at},
$S:33}
A.cer.prototype={
$1(d){return d.y===C.mH&&!d.ax},
$S:33}
A.ces.prototype={
$1(d){return d.ax&&d.y===C.tx},
$S:33};(function installTearOffs(){var x=a._instance_1u
x(A.afB.prototype,"gb6J","b6K",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.H4,B.f7)
w(B.bu,[A.cG0,A.ceh,A.cej,A.cek,A.cem,A.cen,A.cey,A.cez,A.cev,A.ceq,A.cer,A.ces])
x(A.F1,B.dC)
x(A.afB,B.dx)
w(B.bL,[A.ceo,A.cei,A.cel,A.ceu,A.cet,A.cex,A.cep])
x(A.cew,B.cL)})()
B.br(b.typeUniverse,JSON.parse('{"F1":{"G":[],"e":[],"f":[]},"afB":{"Z":["F1"]}}'))
var y=(function rtii(){var x=B.A
return{T:x("ax<t<eI>>"),w:x("ax<t<a3<c,@>>>"),E:x("r<ej>"),t:x("r<a3<c,@>>"),s:x("r<c>"),p:x("r<e>"),D:x("t<a3<c,@>>"),f:x("a3<@,@>"),l:x("dw"),N:x("c"),z:x("@"),X:x("M?")}})();(function constants(){var x=a.makeConstList
D.zC=new A.H4(0,"recebidos")
D.abB=new A.H4(1,"confirmados")
D.abC=new A.H4(2,"concluidos")
D.bs2=x([D.zC,D.abB,D.abC],B.A("r<H4>"))
D.bvg=x([C.a1G],y.p)
D.bM2=new B.Lt(C.a1R,null)
D.bPv=new B.eL(0,null,0,0,null,null,D.bM2,null)
D.c89=new B.D("Pedidos",null,C.hS,null,null,null,null,null,null,null)
D.acT=new B.d0(C.bc,null,null,D.c89,null)
D.bX9=new B.c6(null,44,D.acT,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWU","dlQ",()=>C.bK.$1$1(new A.cG0(),y.D))})()};
(a=>{a["xa8m+xYm/UMWSNdx/Ys0r5rk+D0="]=a.current})($__dart_deferred_initializers__);