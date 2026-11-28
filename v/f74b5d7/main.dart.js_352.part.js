((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={
dvc(d){return new A.EZ(d,null)},
dbQ(d){var x
switch(d.a){case 0:x="Recebidos"
break
case 1:x="Confirmados"
break
case 2:x="Conclu\xeddos"
break
default:x=null}return x},
dbP(d,e){var x
switch(e.a){case 0:x=d.y
return x===C.mO||x===C.tQ
case 1:x=d.y
return x===C.js||x===C.eR
case 2:return d.y===C.hn}},
GV:function GV(d,e){this.a=d
this.b=e},
cGv:function cGv(){},
EZ:function EZ(d,e){this.d=d
this.a=e},
afH:function afH(){var _=this
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
E=c[186]
A=a.updateHolder(c[33],A)
D=c[352]
F=c[104]
A.GV.prototype={
I(){return"_BookingSegment."+this.b}}
A.EZ.prototype={
R(){return new A.afH()}}
A.afH.prototype={
UC(d,e,f){var x,w,v,u=B.a([],y.p)
for(x=f.length,w=0;w<f.length;f.length===x||(0,B.H)(f),++w){v=f[w]
u.push(new F.V5(v,new A.ceY(this,e,v),!0,null))}return B.eT(u,0)},
aUc(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.gS(),l=m.G($.dlO(),y.w),k=l.gv(l)
if(k==null)k=C.lR
m=m.G($.pa().$1(n),y.T)
x=m.gv(m)
if(x==null)x=C.r4
w=B.a([],y.p)
for(m=J.ao(k),l=J.c9(x);m.t();){v=m.gE(m)
u=J.a7(v)
t=u.h(v,"booking_id")
s=B.eL(l.cd(x,new A.ceR(B.C(t==null?u.h(v,"quote_request_id"):t))))
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
w.push(new B.te(new B.cj(v,44,u,!1,!0,n),v+" \xb7 "+r.c,t,"Ver",new A.ceS(this,d,s),C.j.aP(o.b+1000*(o.a-Date.now()),864e8)<=3,n))}m=w.length
if(m===0)return n
return new B.c3("Altera\xe7\xf5es \xb7 "+m,n,w,16,n)},
b_Q(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gzT()===D.zM?h.aUc(d):g
if(e.length===0){if(f!=null)return B.a([f],y.p)
x=A.dbQ(h.gzT())
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
return B.a([new B.c3(x,g,B.a([B.JL(C.eB,C.eU,v,w)],u),16,g)],u)}switch(h.gzT().a){case 0:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
t=B.U(new B.a6(e,new A.ceT(),x),w)
s=B.U(new B.a6(e,new A.ceU(),x),w)
x=y.p
w=B.a([],x)
v=t.length
if(v!==0){u=B.a([],x)
for(r=t.length,q=y.s,p=0;p<t.length;t.length===r||(0,B.H)(t),++p){o=t[p]
n=o.d
m=o.f
l=B.a([""+B.ay(m)+" "+C.bg[B.an(m)-1]+" "+B.ax(m)],q)
k=o.CW
if(k!=null)l.push(B.p(k)+" pessoas")
u.push(new B.te(new B.cj(n,44,o.as,!1,!0,g),n+" \xb7 "+o.Q.c,C.e.a0(l," \xb7 "),"Responder",new A.ceV(h,d,o),C.j.aP(m.b+1000*(m.a-Date.now()),864e8)<=3,g))}w.push(new B.c3("Por responder \xb7 "+v,g,u,16,g))}if(f!=null)w.push(f)
v=s.length
if(v!==0)w.push(new B.c3("Proposta enviada \xb7 "+v,g,B.a([h.UC(0,d,s)],x),16,g))
return w
case 1:x=B.a8(e).i("a6<1>")
w=x.i("w.E")
j=B.U(new B.a6(e,new A.ceW(),x),w)
i=B.U(new B.a6(e,new A.ceX(),x),w)
x=y.p
w=B.a([],x)
v=j.length
if(v!==0)w.push(new B.c3("\xc0 espera do sinal \xb7 "+v,g,B.a([h.UC(0,d,j)],x),16,g))
v=i.length
if(v!==0)w.push(new B.c3("Confirmadas \xb7 "+v,g,B.a([h.UC(0,d,i)],x),16,g))
return w
case 2:x=y.p
return B.a([new B.c3("Conclu\xeddos \xb7 "+e.length,g,B.a([h.UC(0,d,e)],x),16,g)],x)}},
gzT(){var x,w=this.w
if(w===$){switch(this.a.d){case"confirmados":x=D.abS
break
case"concluidos":x=D.abT
break
default:x=D.zM
break}w=this.w=x}return w},
b8d(d){return A.dbP(d,this.gzT())},
u(d){var x,w,v,u,t=this,s=null,r=t.gS().G($.pa().$1(s),y.T),q=r.gv(r),p=new A.cf7(q==null?C.r4:q),o=B.aO(d,C.b6,y.l).w,n=B.a([],y.E)
for(x=0;x<3;++x){w=D.bsi[x]
v=A.dbQ(w)
u=w===D.zM?p.$1(w):s
n.push(new B.ek(v,t.gzT()===w,u,new A.cf3(t,w),s))}v=y.p
n=B.a([D.bXI,new E.me(n,16,!1,s)],v)
C.e.n(n,B.hE(r,new A.cf4(t,d),new A.cf5(t),new A.cf6(),!1,!0,!1))
return B.cQ(s,C.cW,new B.bC(C.ax,s,C.aD,C.y,B.a([B.d5(n,s,new B.a3(20,o.r.b+12,20,140),s,s,!1,!1),D.bPV],v),s),!0,s)}}
var z=a.updateTypes(["B(eJ)","v(GV)"])
A.cGv.prototype={
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
for(p=J.ao(s),o=y.f,n=y.N,m=y.z;p.t();){q=p.gE(p)
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
A.ceY.prototype={
$0(){var x=this.c
return B.ad(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceR.prototype={
$1(d){return d.a===this.a},
$S:36}
A.ceS.prototype={
$0(){var x=this.c
return B.ad(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceT.prototype={
$1(d){return!d.ax},
$S:36}
A.ceU.prototype={
$1(d){return d.ax},
$S:36}
A.ceV.prototype={
$0(){var x=this.c
return B.ad(this.b).ak("/partner-requests/"+x.a,x,y.X)},
$S:0}
A.ceW.prototype={
$1(d){return d.y===C.js},
$S:36}
A.ceX.prototype={
$1(d){return d.y===C.eR},
$S:36}
A.cf7.prototype={
$1(d){return J.dd(this.a,new A.cf8(d)).gA(0)},
$S:z+1}
A.cf8.prototype={
$1(d){return A.dbP(d,this.a)},
$S:36}
A.cf3.prototype={
$0(){var x=this.a
return x.p(new A.cf2(x,this.b))},
$S:0}
A.cf2.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cf6.prototype={
$0(){return D.bvv},
$S:77}
A.cf5.prototype={
$2(d,e){return B.a([new B.ji("N\xe3o foi poss\xedvel carregar.",new A.ceZ(this.a),null)],y.p)},
$S:1510}
A.ceZ.prototype={
$0(){return this.a.gS().aj($.pa().$1(null))},
$S:0}
A.cf4.prototype={
$1(d){var x,w=null,v=this.a,u=J.c9(d),t=u.cd(d,v.gb8c()),s=B.U(t,t.$ti.i("w.E")),r=u.cd(d,new A.cf_()).gA(0),q=u.cd(d,new A.cf0()).gA(0),p=u.cd(d,new A.cf1()).gA(0)
u=r===1?"pedido no total":"pedidos no total"
t=p===1?"proposta enviada":"propostas enviadas"
x=y.p
x=B.a([B.vj(new B.S(C.jE,B.e2(C.be,B.a([new B.dW(""+q+" por responder",C.hE,w),new B.dW(""+p+" "+t,C.dg,w)],x),C.r,C.bk,8,8),w),w,"Pedidos recebidos",C.hG,w,u,""+r)],x)
C.e.n(x,v.b_Q(this.b,s))
return x},
$S:1511}
A.cf_.prototype={
$1(d){return d.at},
$S:36}
A.cf0.prototype={
$1(d){return d.y===C.mO&&!d.ax},
$S:36}
A.cf1.prototype={
$1(d){return d.ax&&d.y===C.tQ},
$S:36};(function installTearOffs(){var x=a._instance_1u
x(A.afH.prototype,"gb8c","b8d",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.GV,B.f_)
w(B.bx,[A.cGv,A.ceR,A.ceT,A.ceU,A.ceW,A.ceX,A.cf7,A.cf8,A.cf4,A.cf_,A.cf0,A.cf1])
x(A.EZ,B.dB)
x(A.afH,B.dv)
w(B.bQ,[A.ceY,A.ceS,A.ceV,A.cf3,A.cf2,A.cf6,A.ceZ])
x(A.cf5,B.cL)})()
B.bu(b.typeUniverse,JSON.parse('{"EZ":{"G":[],"e":[],"f":[]},"afH":{"Z":["EZ"]}}'))
var y=(function rtii(){var x=B.x
return{T:x("az<t<eJ>>"),w:x("az<t<a5<c,@>>>"),E:x("r<ek>"),t:x("r<a5<c,@>>"),s:x("r<c>"),p:x("r<e>"),D:x("t<a5<c,@>>"),f:x("a5<@,@>"),l:x("dh"),N:x("c"),z:x("@"),X:x("K?")}})();(function constants(){var x=a.makeConstList
D.zM=new A.GV(0,"recebidos")
D.abS=new A.GV(1,"confirmados")
D.abT=new A.GV(2,"concluidos")
D.bsi=x([D.zM,D.abS,D.abT],B.x("r<GV>"))
D.bvv=x([C.a1V],y.p)
D.bMs=new B.Lm(C.a25,null)
D.bPV=new B.eG(0,null,0,0,null,null,D.bMs,null)
D.ca3=new B.D("Pedidos",null,C.hR,null,null,null,null,null,null,null,null)
D.ad6=new B.cX(C.bc,null,null,D.ca3,null)
D.bXI=new B.bZ(null,44,D.ad6,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWM","dlO",()=>C.bO.$1$1(new A.cGv(),y.D))})()};
(a=>{a["bfmO3f/JYcuE8Ts3FHPcISmR3es="]=a.current})($__dart_deferred_initializers__);