((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dv8(d){return new A.EZ(d,null)},
dbM(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
dbL(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mO||x===C.tQ
case 1:x=d.y
return x===C.js||x===C.eR
case 2:return d.y===C.hn}},
GV:function GV(d,e){this.a=d
this.b=e},
cGt:function cGt(){},
EZ:function EZ(d,e){this.d=d
this.a=e},
afG:function afG(){var _=this
_.d=_.w=$
_.c=_.a=null},
ceW:function ceW(d,e,f){this.a=d
this.b=e
this.c=f},
ceP:function ceP(d){this.a=d},
ceQ:function ceQ(d,e,f){this.a=d
this.b=e
this.c=f},
ceR:function ceR(){},
ceS:function ceS(){},
ceT:function ceT(d,e,f){this.a=d
this.b=e
this.c=f},
ceU:function ceU(){},
ceV:function ceV(){},
cf5:function cf5(d){this.a=d},
cf6:function cf6(d){this.a=d},
cf1:function cf1(d,e){this.a=d
this.b=e},
cf0:function cf0(d,e){this.a=d
this.b=e},
cf4:function cf4(){},
cf3:function cf3(d){this.a=d},
ceX:function ceX(d){this.a=d},
cf2:function cf2(d,e){this.a=d
this.b=e},
ceY:function ceY(){},
ceZ:function ceZ(){},
cf_:function cf_(){}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[186]
A=a.updateHolder(c[33],A)
D=c[352]
F=c[104]
A.GV.prototype={
I(){return"_BookingSegment."+this.b}}
A.EZ.prototype={
R(){return new A.afG()}}
A.afG.prototype={
UC(d,e,f){var x,w,v,u=B.a([],y.p)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.H)(f),++w){v=f[w]
u.push(new F.V5(v,new A.ceW(this,e,v),!0,null))}return B.eT(u,0)},
aUc(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.gS(),l=m.G($.dlK(),y.w),k=l.gv(l)
if(k==null)k=C.lR
m=m.G($.pa().$1(n),y.T)
x=m.gv(m)
if(x==null)x=C.r4
w=B.a([],y.p)
for(m=J.ap(k),l=J.c8(x);m.t();){v=m.gE(m)
u=J.a7(v)
t=u.h(v,"booking_id")
s=B.eL(l.cd(x,new A.ceP(B.C(t==null?u.h(v,"quote_request_id"):t))))
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
w.push(new B.te(new B.cj(v,44,u,!1,!0,n),v+" \xb7 "+r.c,t,"Ver",new A.ceQ(this,d,s),C.j.aP(o.b+1000*(o.a-Date.now()),864e8)<=3,n))}m=w.length
if(m===0)return n
return new B.c5("Altera\xe7\xf5es \xb7 "+m,n,w,16,n)},
b_Q(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gzT()===D.zM?h.aUc(d):g
if(e.length===0){if(f!=null)return B.a([f],y.p)
x=A.dbM(h.gzT())
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
return B.a([new B.c5(x,g,B.a([B.JL(C.eB,C.eU,v,w)],u),16,g)],u)}switch(h.gzT().a){case 0:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
t=B.U(new B.a6(e,new A.ceR(),x),w)
s=B.U(new B.a6(e,new A.ceS(),x),w)
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
u.push(new B.te(new B.cj(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a1(l," \xb7 "),"Responder",new A.ceT(h,d,o),C.j.aP(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.c5("Por responder \xb7 "+v,g,u,16,g))}if(f!=null)w.push(f)
v=s.length
if(v!==0)w.push(new B.c5("Proposta enviada \xb7 "+v,g,B.a([h.UC(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
j=B.U(new B.a6(e,new A.ceU(),x),w)
i=B.U(new B.a6(e,new A.ceV(),x),w)
x=y.p
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.c5("\xc0 espera do sinal \xb7 "+v,g,B.a([h.UC(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.c5("Confirmadas \xb7 "+v,g,B.a([h.UC(0,d,i)],x),16,g))
return w
case 2:x=y.p
return B.a([new B.c5("Conclu\xeddos \xb7 "+e.length,g,B.a([h.UC(0,d,e)],x),16,g)],x)}},
gzT(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abS
break
case"concluidos":x=D.abT
break
default:x=D.zM
break}w=this.w=x}return w},
b8d(d){return A.dbL(d,this.gzT())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().G($.pa().$1(s),y.T),q=r.gv(r),p=new A.cf5(q==null?C.r4:q),o=B.aO(d,C.b6,y.l).w,n=B.a([],y.E)
for(x=0;x<3;++x){w=D.bsf[x]
v=A.dbM(w)
u=w===D.zM?p.$1(w):s
n.push(new B.ek(v,t.gzT()===w,u,new A.cf1(t,w),s))}v=y.p
n=B.a([D.bXF,new E.me(n,16,!1,s)],v)
C.e.n(n,B.hE(r,new A.cf2(t,d),new A.cf3(t),new A.cf4(),!1,!0,!1))
return B.cQ(s,C.cV,new B.bC(C.ax,s,C.aD,C.y,B.a([B.d6(n,s,new B.a3(20,o.r.b+12,20,140),s,s,!1,!1),D.bPS],v),s),!0,s)}}
var z=a.updateTypes(["B(eI)","v(GV)"])
A.cGt.prototype={
$1(d){return this.aFr(d)},
aFr(d){var x=0,w=B.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&B.b()
x=7
return B.d(p.P("booking_change_requests").ai(0,"id, booking_id, quote_request_id, kind, from_value, to_value, created_at").U("status","open").BA("requested_by_role","partner").cO(0,"created_at",!1),$async$$1)
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
$S:1509}
A.ceW.prototype={
$0(){var x=this.c
return B.ad(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceP.prototype={
$1(d){return d.a===this.a},
$S:36}
A.ceQ.prototype={
$0(){var x=this.c
return B.ad(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceR.prototype={
$1(d){return!d.ax},
$S:36}
A.ceS.prototype={
$1(d){return d.ax},
$S:36}
A.ceT.prototype={
$0(){var x=this.c
return B.ad(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceU.prototype={
$1(d){return d.y===C.js},
$S:36}
A.ceV.prototype={
$1(d){return d.y===C.eR},
$S:36}
A.cf5.prototype={
$1(d){return J.dc(this.a,new A.cf6(d)).gA(0)},
$S:z+1}
A.cf6.prototype={
$1(d){return A.dbL(d,this.a)},
$S:36}
A.cf1.prototype={
$0(){var x=this.a
return x.p(new A.cf0(x,this.b))},
$S:0}
A.cf0.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cf4.prototype={
$0(){return D.bvs},
$S:77}
A.cf3.prototype={
$2(d,e){return B.a([new B.ji("N\xe3o foi poss\xedvel carregar.",new A.ceX(this.a),null)],y.p)},
$S:1510}
A.ceX.prototype={
$0(){return this.a.gS().aj($.pa().$1(null))},
$S:0}
A.cf2.prototype={
$1(d){var x,w=null,v=this.a,u=J.c8(d),t=u.cd(d,v.gb8c()),s=B.U(t,t.$ti.i("w.E")),r=u.cd(d,new A.ceY()).gA(0),q=u.cd(d,new A.ceZ()).gA(0),p=u.cd(d,new A.cf_()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.p
x=B.a([B.vi(new B.S(C.jE,B.e2(C.be,B.a([new B.dW(""+q+" por responder",C.hE,w),new B.dW(""+p+" "+t,C.dg,w)],x),C.r,C.bj,8,8),w),w,"Pedidos recebidos",C.hG,w,u,""+r)],x)
C.e.n(x,v.b_Q(this.b,s))
return x},
$S:1511}
A.ceY.prototype={
$1(d){return d.at},
$S:36}
A.ceZ.prototype={
$1(d){return d.y===C.mO&&!d.ax},
$S:36}
A.cf_.prototype={
$1(d){return d.ax&&d.y===C.tQ},
$S:36};(function installTearOffs(){var x=a._instance_1u
x(A.afG.prototype,"gb8c","b8d",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GV,B.f_)
w(B.bx,[A.cGt,A.ceP,A.ceR,A.ceS,A.ceU,A.ceV,A.cf5,A.cf6,A.cf2,A.ceY,A.ceZ,A.cf_])
x(A.EZ,B.dA)
x(A.afG,B.dv)
w(B.bQ,[A.ceW,A.ceQ,A.ceT,A.cf1,A.cf0,A.cf4,A.ceX])
x(A.cf3,B.cL)})()
B.bu(b.typeUniverse,JSON.parse('{"EZ":{"G":[],"e":[],"f":[]},"afG":{"Y":["EZ"]}}'))
var y=(function rtii(){var x=B.x
return{T:x("az<t<eI>>"),w:x("az<t<a5<c,@>>>"),E:x("r<ek>"),t:x("r<a5<c,@>>"),s:x("r<c>"),p:x("r<e>"),D:x("t<a5<c,@>>"),f:x("a5<@,@>"),l:x("dh"),N:x("c"),z:x("@"),X:x("K?")}})();(function constants(){var x=a.makeConstList
D.zM=new A.GV(0,"recebidos")
D.abS=new A.GV(1,"confirmados")
D.abT=new A.GV(2,"concluidos")
D.bsf=x([D.zM,D.abS,D.abT],B.x("r<GV>"))
D.bvs=x([C.a1V],y.p)
D.bMp=new B.Lm(C.a25,null)
D.bPS=new B.eF(0,null,0,0,null,null,D.bMp,null)
D.ca0=new B.D("Pedidos",null,C.hR,null,null,null,null,null,null,null,null)
D.ad6=new B.cX(C.bc,null,null,D.ca0,null)
D.bXF=new B.bY(null,44,D.ad6,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWH","dlK",()=>C.bO.$1$1(new A.cGt(),y.D))})()};
(a=>{a["VKUIhN2fg5EwaIPDYpNft61sb48="]=a.current})($__dart_deferred_initializers__);