((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dHC(d){var x,w,v=A.aV("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).hA(C.f.D(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aM8(w,x)},
cGh(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cGh=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&A.b()
x=7
return A.d(p.jI("partner_today",y.z),$async$cGh)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.i(s,"bookings"))
o=J.aq(o==null?C.al:o)
while(o.t()){q=o.gE(o)
if(p.b(q)){n=J.i(q,"event")
n=A.q(n==null?"Evento":n)
m=A.E(J.i(q,"booking_number"))
l=A.aK(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aK(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bt(r,new A.aMz([k,n,m,l]))}}p=A.aK(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aK(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.auX(r,p,o)
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
return A.m($async$cGh,w)},
auX:function auX(d,e,f){this.a=d
this.b=e
this.c=f},
dpK(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.q(j.h(d,"event_id")),g=j.h(d,"event")
g=A.q(g==null?"Evento":g)
x=j.h(d,"date")
x=A.dN(A.q(x==null?"":x))
w=A.E(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.E(J.i(i,"status")):k
if(s){s=A.aK(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aK(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.dN(A.q(p==null?"":p))
p=p==null?k:p.e8()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.aq(j==null?C.al:j)
while(j.t()){n=j.gE(j)
if(t.b(n)&&A.dN(A.q(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.q(l==null?"Parceiro":l)
o.push(new A.aLV(A.d9(A.q(m.h(n,"at"))).e8(),l))}}return new B.TA(h,g,x,w,v,u,r,s,q,p,o)},
cGf(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cGf=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&A.b()
x=7
return A.d(p.jI("my_entries",y.z),$async$cGf)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.aq(s),o=y.f;p.t();){q=p.gE(p)
if(o.b(q))J.bt(r,B.dpK(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cGf,w)},
dGW(d){var x,w,v="public",u=$.T().b
u===$&&A.b()
x=u.gbE().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cHj(w)
u=u.ch
u===$&&A.b()
return u.M0(0,"entries-"+w,C.yu).O2(new B.cHg(d),C.H0,x.$1("user_id"),v,"event_checkins").O2(new B.cHh(d),C.H0,x.$1("user_id"),v,"booking_arrivals").O2(new B.cHi(d),C.H1,x.$1("buyer_id"),v,"event_tickets").PX(0)},
TA:function TA(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n},
cHj:function cHj(d){this.a=d},
cHg:function cHg(d){this.a=d},
cHh:function cHh(d){this.a=d},
cHi:function cHi(d){this.a=d},
dmi(){return new B.J8(null)},
d91(d){return C.f.aY(C.j.k(A.hY(d)),2,"0")+":"+C.f.aY(C.j.k(A.hK(d)),2,"0")},
J8:function J8(d){this.a=d},
b48:function b48(){},
aeH:function aeH(d){this.a=d},
aeI:function aeI(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
c89:function c89(d){this.a=d},
c88:function c88(d){this.a=d},
c83:function c83(d,e){this.a=d
this.b=e},
c86:function c86(d){this.a=d},
c85:function c85(d){this.a=d},
c87:function c87(d){this.a=d},
c84:function c84(d){this.a=d},
afi:function afi(d){this.a=d},
afj:function afj(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
ceb:function ceb(d,e){this.a=d
this.b=e},
cec:function cec(){},
ad0:function ad0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bTN:function bTN(d){this.a=d},
OT:function OT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
adR:function adR(d,e){this.c=d
this.a=e},
abE:function abE(d,e){this.c=d
this.a=e},
agV:function agV(d,e){this.c=d
this.a=e},
aiC:function aiC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aih:function aih(d,e,f){this.c=d
this.d=e
this.a=f},
aFL:function aFL(d,e){this.c=d
this.a=e},
ab3:function ab3(d){this.a=d},
ab4:function ab4(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bG9:function bG9(d){this.a=d},
bG8:function bG8(){},
bG7:function bG7(d,e){this.a=d
this.b=e},
aS9:function aS9(){},
aSv:function aSv(){},
aSA:function aSA(){},
Uv:function Uv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ag4:function ag4(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.eg$=e
_.bH$=f
_.c=_.a=null},
co1:function co1(){},
co2:function co2(d,e){this.a=d
this.b=e},
co3:function co3(d){this.a=d},
WS:function WS(d){this.a=d},
aE6:function aE6(d){this.a=d},
aSE:function aSE(){},
ajY:function ajY(){},
ape:function ape(d,e,f){this.c=d
this.a=e
this.b=f},
dpA(d,e){},
a4p:function a4p(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aIL:function aIL(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c7E:function c7E(d){this.a=d},
c7D:function c7D(d,e){this.a=d
this.b=e},
aSt:function aSt(){},
dpx(d,e){var x=null,w=d===D.ar9?250:0
return new B.a4s(d,w,e,new A.lj(x,x,y.J),new B.xK(x,C.Bs,x,!1,!1,C.aR,C.ja,1),$.ac())},
a4s:function a4s(d,e,f,g,h,i){var _=this
_.y=d
_.z=e
_.as=f
_.ch=g
_.cy=_.cx=_.CW=null
_.db=!1
_.a=h
_.W$=0
_.Z$=i
_.aH$=_.bn$=0},
bhb:function bhb(d){this.a=d},
bhc:function bhc(d){this.a=d},
bhd:function bhd(d){this.a=d},
bhe:function bhe(d){this.a=d},
xK:function xK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
axM:function axM(d){this.a=d},
bzj:function bzj(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bzk:function bzk(){}},D,F,G,H,I,K,L,M
J=c[1]
A=c[0]
C=c[2]
E=c[274]
B=a.updateHolder(c[13],B)
D=c[270]
F=c[87]
G=c[191]
H=c[272]
I=c[120]
K=c[235]
L=c[273]
M=c[271]
B.auX.prototype={}
B.TA.prototype={}
B.J8.prototype={
bc(d,e){var x=y.E
return e.H(A.cv($.b8(),new B.b48(),y.D,x),x)===C.dL?D.coy:D.coh}}
B.aeH.prototype={
P(){return new B.aeI()}}
B.aeI.prototype={
ak(){var x=this
x.aD()
$.az.b3$.push(x)
x.kv()
x.r=B.dGW(new B.c89(x))},
m(){var x,w,v=this
$.az.ic(v)
x=v.w
if(x!=null)x.aL(0)
x=v.r
if(x!=null){w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yb(x)}v.a6()},
nf(d){if(d===C.ep)this.kv()},
Df(d){return this.b7j(d)},
kv(){return this.Df(!1)},
b7j(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Df=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.C(y.N,y.Y)
o=u.e
o=J.aq(o==null?D.bAs:o)
while(o.t()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cGf(),$async$Df)
case 3:s=f
if(u.c==null){x=1
break}u.q(new B.c83(u,s))
if(!d||s==null){x=1
break}for(o=J.aq(s);o.t();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null,null)
p.a4(new A.bJ(o,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$Df,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gDe(),q=u.d,p=y.p
q=A.a([new B.OT("QR code",C.qE,!q,new B.c86(u),t),new B.OT("Scannear",C.vz,q,new B.c87(u),t)],p)
if(u.d)p=D.bfN
else{x=A.a([D.cls,C.Q,D.ajZ,C.br,D.cm_,C.as],p)
w=s==null
if(w&&!u.f)x.push(M.a8Z)
else if(w)x.push(new B.agV(r,t))
else{w=J.a7(s)
if(w.gY(s))x.push(D.bLV)
else{v=A.a([],p)
for(w=w.gV(s);w.t();)C.e.n(v,A.a([D.qf,new B.aFL(w.gE(w),t)],p))
v.push(D.qf)
C.e.n(x,v)}}p=x}return new B.ad0(r,q,p,t)}}
B.afi.prototype={
P(){return new B.afj()}}
B.afj.prototype={
ak(){this.aD()
$.az.b3$.push(this)
this.kv()},
m(){$.az.ic(this)
this.a6()},
nf(d){if(d===C.ep)this.kv()},
kv(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cGh(),$async$kv)
case 3:t=e
if(u.c==null){x=1
break}u.q(new B.ceb(u,t))
case 1:return A.l(v,w)}})
return A.m($async$kv,w)},
QG(){var x=0,w=A.n(y.H),v=this,u
var $async$QG=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ai(u).ar("/cobrar",null,y.X),$async$QG)
case 2:if(v.c!=null)v.kv()
return A.l(null,w)}})
return A.m($async$QG,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gDe(),k=y.p,j=A.a([new B.OT("Scannear",C.vz,!0,new B.cec(),n),new B.OT("Cobrar",H.Ef,!1,o.gaTL(),n)],k),i=A.a([D.cnf,C.Q,new B.Uv(290,!1,l,n),C.br,D.cm0,C.as],k),h=m==null
if(h&&!o.e)i.push(D.bYW)
else if(h)i.push(new B.agV(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bLG)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.I)(x),++u){t=x[u].a
s=t[1]
r=A.a([],v)
q=t[2]
if(q!=null)r.push(q)
q=t[3]
if(q!=null)r.push(q===1?"1 pessoa":A.q(q)+" pessoas")
r=C.e.a2(r," \xb7 ")
q=t[3]
if(q!=null){t=t[0]
q=A.q(q)
q=t>0?""+t+" de "+q+" chegaram":"0 de "+q
p=q
q=t
t=p}else{t=t[0]
q=t===1?"1 chegou":""+t+" chegaram"
p=q
q=t
t=p}C.e.n(h,A.a([D.qf,new B.aiC(s,r,t,q>0,n,n)],k))}h.push(D.qf)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aiC("Cobrado hoje",k,n,!1,F.cFE(m.b),n))
h.push(D.qf)
C.e.n(i,h)}return new B.ad0(l,j,i,n)}}
B.ad0.prototype={
u(d){var x=null,w=C.D7.B(0,new A.a0(0,A.aw(d,C.b0,y.w).w.r.b,0,0)),v=A.a([new A.d0(C.bi,x,x,A.pU(C.lH,new B.bTN(d),"Voltar"),x),C.Q,D.cd6,C.aB,A.ea(C.bd,this.d,C.r,C.bm,8,8),C.aB],y.p)
C.e.n(v,this.e)
return A.cO(x,C.by,A.bF(!0,A.yc(A.cX(v,x,w,x,x,!1,C.a1,!1),x,this.c),x,C.a_,!1),!0,x)}}
B.OT.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.A,t=v?$.ar:C.t
return A.ba(w,!0,w,A.fo(!1,C.aD,!0,w,A.eF(!1,w,!0,A.aI(new A.Q(C.bL,A.P(A.a([A.b2(x.d,u,w,w,16),C.bl,A.h(x.c,w,w,w,w,A.aF(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),C.w,C.i,C.K,0,w,w),w),38,w),C.ad,!0,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ad,w,w,C.cB),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.adR.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.T,x,x,x)}}
B.abE.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.bh,x,x,x)}}
B.agV.prototype={
u(d){var x=null
return new A.Q(C.qm,A.B(A.a([D.cc4,A.cp(C.tm,x,x,this.c,x,x)],y.p),C.w,C.i,C.m,0,C.v),x)}}
B.aiC.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.aj,u,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.T,u,u,u))
t=A.a([A.a5(A.B(s,C.G,C.i,C.m,0,C.v),1),C.am],t)
s=v.e
if(s!=null){r=v.f
x=r?C.df:C.fl
w=A.Y(999)
t.push(A.A(u,A.h(s,u,u,u,u,A.aF(u,u,r?C.cY:C.d8,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.M(x,u,u,w,u,u,C.y),u,u,u,C.dQ,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.aj,u,u,u))
return new A.Q(C.cl,A.P(t,C.w,C.i,C.m,0,u,u),u)}}
B.aih.prototype={
u(d){var x=null,w=this.d,v=w?C.df:C.fl,u=A.Y(999)
return A.A(x,A.h(this.c,x,x,x,x,A.aF(x,x,w?C.cY:C.d8,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.M(v,x,x,u,x,x,C.y),x,x,x,C.dQ,x,x,x)}}
B.aFL.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.iL[A.j4(l)-1]+", "+A.aM(l)+" "+C.ch[A.ay(l)-1])
x=m.d
if(x!=null)k.push(x)
x=m.x
if(x!=null)k.push("Mesa "+A.q(x))
x=m.e
w=!x
if(w&&m.f&&m.r==="paid"){v=m.w
k.push(v===1?"bilhete para 1":"bilhete para "+v)}u=C.e.a2(k," \xb7 ")
k=m.z
t=k.length===0?n:C.e.ga5(k)
k=m.y
if(k!=null)s=new A.a3("Entrou \xe0s "+B.d91(k),!0)
else if(t!=null){k=new A.a3("Chegou \xe0s "+B.d91(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bTb
else if(x)k=D.bSd
else k=m.f?D.bRF:D.bSR
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.aj,n,n,n)],k)
if(u.length!==0)x.push(new A.Q(L.Np,A.h(u,n,n,n,n,C.T,n,n,n),n))
return new A.Q(C.cl,A.P(A.a([A.a5(A.B(x,C.G,C.i,C.m,0,C.v),1),C.am,new B.aih(o,q,n)],k),C.G,C.i,C.m,0,n,n),n)}}
B.ab3.prototype={
P(){return new B.ab4(new A.ad(Date.now(),0,!1),C.nh)}}
B.ab4.prototype={
ak(){var x=this
x.aD()
$.az.b3$.push(x)
x.kv()
x.as=A.u3(C.fO,new B.bG9(x))},
m(){var x,w=this
$.az.ic(w)
x=w.Q
if(x!=null)x.aL(0)
x=w.as
if(x!=null)x.aL(0)
w.a6()},
nf(d){var x
if(d===C.ep)this.kv()
else if(d===C.mD){x=this.Q
if(x!=null)x.aL(0)}},
kv(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$kv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aL(0)
x=3
return A.d(A.aUq(),$async$kv)
case 3:t=e
if(u.c==null){x=1
break}u.q(new B.bG7(u,t))
s=t==null?null:t.b
if(s==null)s=C.nj
u.Q=A.dd(s,u.gDe())
case 1:return A.l(v,w)}})
return A.m($async$kv,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().H($.b8(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.D(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.D(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cC(new A.ad(Date.now(),0,!1)).a
v=x<0?0:C.k.eF(C.j.aM(x,1000)/1000)
u=C.k.ae(C.j.aM(x,1000)/C.j.aM(o.z.a,1000),0,1)
x=A.Y(16)
t=A.bA(C.fj,0.5)
s=A.Y(16)
r=A.bA(C.fj,0.5)
k=!k
if(k)q=A.cTx(C.t,A.kD("/q/"+l.a),C.H3,C.H4,C.a_,"C\xf3digo QR da conta",186)
else q=o.x?D.bYu:A.bO(A.B(A.a([C.aEh,C.aE,D.cdc,A.cp(C.tm,n,n,o.gDe(),n,n)],y.p),C.w,C.i,C.K,0,C.v),n,n)
p=y.p
s=A.a([A.A(n,A.aI(q,186,186),C.r,n,n,new A.M(C.t,n,r,s,n,n,C.y),n,n,n,C.cv,n,n,214)],p)
if(k){k=A.Y(2)
C.e.n(s,A.a([C.ab,A.A(C.bi,A.aqM(C.L,A.A(n,n,C.r,n,n,new A.M(C.ui,n,n,A.Y(2),n,n,C.y),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.M(C.fj,n,n,k,n,n,C.y),n,4,n,n,n,n,214),C.aE,A.ba(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.T,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.Q)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.P(A.a([new A.cw(k,32,r,!1,!0,n),C.am,new A.dx(1,C.be,A.B(A.a([A.h(w,n,n,n,n,C.aj,n,n,n),D.c9d],p),C.G,C.i,C.m,0,C.v),n)],p),C.w,C.bV,C.m,0,n,n))
return A.A(n,A.B(s,C.w,C.i,C.m,0,C.v),C.r,n,n,new A.M(C.t,n,t,x,n,n,C.y),n,n,n,C.cv,n,n,n)}}
B.aS9.prototype={}
B.aSv.prototype={}
B.aSA.prototype={}
B.Uv.prototype={
P(){return new B.ag4(B.dpx(D.ar8,D.bsD),null,null)}}
B.ag4.prototype={
gKt(){var x,w=this,v=w.e
if(v===$){x=A.cC(null,E.N7,null,1,null,w)
w.e!==$&&A.aX()
w.e=x
v=x}return v},
ak(){this.aD()
$.az.b3$.push(this)},
bK(){var x,w,v=this
v.d4()
x=v.c
x.toString
if(A.aw(x,null,y.w).w.ax)v.gKt().d3(0)
else{x=v.gKt()
w=x.r
if(!(w!=null&&w.a!=null))x.acs(0,!0)}},
nf(d){if(this.f)return
if(d===C.ep)this.d.kh(0)
else if(d===C.mD)this.d.d3(0)},
m(){var x=this
$.az.ic(x)
x.gKt().m()
x.d.m()
x.aPl()},
DP(d){return this.b96(d)},
b96(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DP=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dHC(t)
if(p==null){s=u.c.O(y.q).f
s.azt()
s.a4(D.bZP)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.d3(0),$async$DP)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ai(r).ar(m,null,y.X),$async$DP)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.kh(0),$async$DP)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DP,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fX(A.Y(16),A.aI(new A.bB(C.aA,w,C.ej,C.z,A.a([C.q3,new B.a4p(t,x.gb95(),new B.co1(),w),A.bO(A.aI(new A.bB(C.aA,w,C.aG,C.z,A.a([D.bQq,A.f6(x.gKt(),new B.co2(x,u),w)],s),w),u,u),w,w),A.cb(16,A.bO(A.A(w,D.ccT,C.r,w,w,new A.M(C.t,w,w,A.Y(999),w,w,C.y),w,w,w,C.dQ,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.b8)],s)
if(x.a.d)s.push(new A.lS(t,new B.co3(x),w,w,y.n))
return A.B(s,C.I,C.i,C.m,0,C.v)}}
B.WS.prototype={
u(d){return D.apS}}
B.aE6.prototype={
b_(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aB(),m=A.bb()
m.r=C.t.gv(0)
m.b=C.bO
m.c=4
m.d=C.h3
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cz(n,C.aP,o,o,A.a([],v))
u.aA(new A.eY(2,44))
u.aA(new A.cR(2,16))
u.Ao(D.bJZ,D.ym)
u.aA(new A.cR(44,2))
d.dR(u,m)
u=new A.cz(n,C.aP,o,o,A.a([],v))
t=x-44
u.aA(new A.eY(t,2))
s=x-16
u.aA(new A.cR(s,2))
r=x-2
u.Ao(new A.K(r,16),D.ym)
u.aA(new A.cR(r,44))
d.dR(u,m)
u=new A.cz(n,C.aP,o,o,A.a([],v))
q=w-44
u.aA(new A.eY(r,q))
p=w-16
u.aA(new A.cR(r,p))
r=w-2
u.Ao(new A.K(s,r),D.ym)
u.aA(new A.cR(t,r))
d.dR(u,m)
v=new A.cz(n,C.aP,o,o,A.a([],v))
v.aA(new A.eY(44,r))
v.aA(new A.cR(16,r))
v.Ao(new A.K(2,p),D.ym)
v.aA(new A.cR(2,q))
d.dR(v,m)},
dO(d){return!1}}
B.aSE.prototype={}
B.ajY.prototype={
m(){var x=this,w=x.bH$
if(w!=null)w.a_(0,x.ghq())
x.bH$=null
x.a6()},
bU(){this.cB()
this.d0()
this.hr()}}
B.ape.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4p.prototype={
P(){return new B.aIL()}}
B.aIL.prototype={
b82(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lS(x,new B.c7E(this),null,null,y.n)},
XN(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XN=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.h6(t,A.u(t).i("h6<1>")).Y0(s.d,!1,B.dHf())
x=2
return A.d(u.kh(0),$async$XN)
case 2:return A.l(null,w)}})
return A.m($async$XN,w)},
MK(){var x=0,w=A.n(y.H),v=this,u
var $async$MK=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aL(0)
x=2
return A.d(y.x.b(u)?u:A.en(u,y.H),$async$MK)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.d3(0),$async$MK)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$MK,w)},
ak(){var x,w=this
w.aD()
x=w.a.c
w.d!==$&&A.bs()
w.d=x
w.XN()},
m(){this.a6()
this.MK()},
nf(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xS}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.kh(0)
break
case 2:w.d3(0)
break}}}
B.aSt.prototype={}
B.a4s.prototype={
bie(){var x=this
x.CW=$.HO().gavv().Y0(new B.bhb(x),!1,new B.bhc(x))
x.cx=$.HO().gaCZ().lq(new B.bhd(x))
x.cy=$.HO().gaE2().lq(new B.bhe(x))},
b8k(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aL(0)
w=x.cx
if(w!=null)w.aL(0)
w=x.cy
if(w!=null)w.aL(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.br5(!1,w.r===C.ja?C.ja:C.abI))
return!0},
kh(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$kh=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.p(A.xJ(C.xR,A.xI(null,null,C.xR.geT(0))))
if(s.a.e){x=1
break}r=C.Bs
q=new B.bzj(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bie()
x=7
return A.d($.HO().lD(0,q),$async$kh)
case 7:p=f
if(!s.db)s.sv(0,s.a.bro(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tu){o=m
if(!s.db)s.sv(0,s.a.brq(C.Bs,o,!0,!1,C.aR,C.ja,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$kh,w)},
d3(d){var x=0,w=A.n(y.H),v=this
var $async$d3=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b8k()?2:3
break
case 2:x=4
return A.d($.HO().d3(0),$async$d3)
case 4:case 3:return A.l(null,w)}})
return A.m($async$d3,w)},
tY(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tY=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.aj(A.xJ(C.a1L,A.xI(null,null,C.a1L.geT(0))))
if(u.db)A.aj(A.xJ(C.xR,A.xI(null,null,C.xR.geT(0))))
if(!t.e){x=1
break}if(t.r===C.ja){x=1
break}x=3
return A.d($.HO().tY(),$async$tY)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tY,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.fW()
x=3
return A.d($.HO().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xK.prototype={
Md(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xK(w,v,f,u,t,s,r,k==null?x.w:k)},
br5(d,e){var x=null
return this.Md(x,x,x,x,d,x,e,x)},
bro(d,e,f,g,h,i){return this.Md(d,e,null,f,g,h,i,null)},
brq(d,e,f,g,h,i,j){return this.Md(null,d,e,f,g,h,i,j)},
bqP(d){var x=null
return this.Md(x,x,x,x,x,x,x,d)},
bqK(d){var x=null
return this.Md(x,x,x,x,x,x,d,x)}}
B.axM.prototype={
u(d){var x=null,w=A.a([D.bLl],y.p)
w.push(A.h(C.jR.geT(0),x,x,x,x,C.aai,x,x,x))
return A.ki(A.bO(A.B(w,C.w,C.i,C.K,0,C.v),x,x),C.an,!0)}}
B.bzj.prototype={
ZP(){var x,w,v=this,u=A.C(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("al<1,v>")
x=A.V(new A.al(x,new B.bzk(),w),w.i("aZ.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:y})","F<~>(my)","WS(O,tu,e?)","cg(O,xK,e?)","e(O,xK,e?)","~(J,bX)"])
B.cHj.prototype={
$1(d){return new I.Fp(K.yh,d,this.a)},
$S:1375}
B.cHg.prototype={
$1(d){return this.a.$0()},
$S:137}
B.cHh.prototype={
$1(d){return this.a.$0()},
$S:137}
B.cHi.prototype={
$1(d){return this.a.$0()},
$S:137}
B.b48.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:111}
B.c89.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aL(0)
x.w=A.dd(C.fP,new B.c88(x))},
$S:0}
B.c88.prototype={
$0(){return this.a.Df(!0)},
$S:0}
B.c83.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.c86.prototype={
$0(){var x=this.a
return x.q(new B.c85(x))},
$S:0}
B.c85.prototype={
$0(){return this.a.d=!1},
$S:0}
B.c87.prototype={
$0(){var x=this.a
return x.q(new B.c84(x))},
$S:0}
B.c84.prototype={
$0(){return this.a.d=!0},
$S:0}
B.ceb.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cec.prototype={
$0(){},
$S:0}
B.bTN.prototype={
$0(){return A.ap(this.a,!1).iy()},
$S:0}
B.bG9.prototype={
$1(d){var x=this.a
if(x.c!=null)x.q(new B.bG8())},
$S:64}
B.bG8.prototype={
$0(){},
$S:0}
B.bG7.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ad(w,0,!1).e9(v)
u.z=v>3e7?x:C.nh}},
$S:0}
B.co1.prototype={
$3(d,e,f){return D.clz},
$S:z+3}
B.co2.prototype={
$2(d,e){var x=null,w=this.a.gKt().x
w===$&&A.b()
return A.cb(x,A.A(x,x,C.r,C.ui,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:222}
B.co3.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.ja)return C.ar
x=t===C.abJ
t=x?C.df:C.fl
w=A.Y(999)
v=x?"Ligada":"Desligada"
return new A.Q(C.Nn,A.ba(u,!0,u,A.eF(!1,u,!0,A.A(u,A.P(A.a([D.aA9,A.A(u,A.h(v,u,u,u,u,A.aF(u,u,x?C.cY:C.d8,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.M(t,u,u,w,u,u,C.y),u,u,u,C.dQ,u,u,u)],y.p),C.w,C.i,C.m,0,u,u),C.r,u,G.jk,D.agA,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,this.a.d.gbCP(),u,u,u,u,u,u,u),!1,u,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.c7E.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.apT}x=e.c
if(x!=null){w=new B.axM(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kp(new B.c7D(this.a,e))},
$S:z+5}
B.c7D.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b82(u,e)
v.a.toString
x=u.f
v=A.ag(1/0,e.a,e.b)
u=A.ag(1/0,e.c,e.d)
w=A.wX(A.vU(A.DN(C.L,A.aI($.HO().avA(),x.b,x.a),C.r,C.bS),new A.ab(v,u)),C.z,null)
return w},
$S:112}
B.bhb.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.B(0,d)},
$S:1376}
B.bhc.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xa(d)},
$S:71}
B.bhd.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqK(d))},
$S:1377}
B.bhe.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqP(d))},
$S:118}
B.bzk.prototype={
$1(d){return d.c},
$S:1378};(function aliases(){var x=B.ajY.prototype
x.aPl=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.aeI.prototype,"gDe",0,0,null,["$1$announce","$0"],["Df","kv"],1,0,0)
var t
w(t=B.afj.prototype,"gDe","kv",0)
w(t,"gaTL","QG",0)
w(B.ab4.prototype,"gDe","kv",0)
v(B.ag4.prototype,"gb95","DP",2)
u(B,"dHf","dpA",6)
w(t=B.a4s.prototype,"gbCP","tY",0)
w(t,"geG","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.J,[B.auX,B.TA,B.xK,B.bzj])
v(A.bx,[B.cHj,B.cHg,B.cHh,B.cHi,B.b48,B.bG9,B.co1,B.co3,B.c7E,B.bhb,B.bhc,B.bhd,B.bhe,B.bzk])
u(B.J8,A.eo)
v(A.H,[B.aeH,B.afi,B.Uv,B.a4p])
v(A.a_,[B.aSv,B.aSA,B.aSE,B.aSt])
u(B.aeI,B.aSv)
v(A.bT,[B.c89,B.c88,B.c83,B.c86,B.c85,B.c87,B.c84,B.ceb,B.cec,B.bTN,B.bG8,B.bG7])
u(B.afj,B.aSA)
v(A.L,[B.ad0,B.OT,B.adR,B.abE,B.agV,B.aiC,B.aih,B.aFL,B.WS,B.axM])
u(B.ab3,A.dB)
u(B.aS9,A.dw)
u(B.ab4,B.aS9)
u(B.ajY,B.aSE)
u(B.ag4,B.ajY)
v(A.cQ,[B.co2,B.c7D])
u(B.aE6,A.qs)
u(B.ape,A.fg)
u(B.aIL,B.aSt)
u(B.a4s,A.d6)
x(B.aS9,A.em)
x(B.aSv,A.em)
x(B.aSA,A.em)
x(B.aSE,A.em)
w(B.ajY,A.iv)
x(B.aSt,A.em)})()
A.bq(b.typeUniverse,JSON.parse('{"aeH":{"H":[],"e":[],"f":[]},"afi":{"H":[],"e":[],"f":[]},"ab3":{"H":[],"e":[],"f":[]},"J8":{"H":[],"e":[],"f":[]},"aeI":{"a_":["aeH"],"em":[]},"afj":{"a_":["afi"],"em":[]},"ad0":{"L":[],"e":[],"f":[]},"OT":{"L":[],"e":[],"f":[]},"adR":{"L":[],"e":[],"f":[]},"abE":{"L":[],"e":[],"f":[]},"agV":{"L":[],"e":[],"f":[]},"aiC":{"L":[],"e":[],"f":[]},"aih":{"L":[],"e":[],"f":[]},"aFL":{"L":[],"e":[],"f":[]},"ab4":{"a_":["ab3"],"em":[]},"Uv":{"H":[],"e":[],"f":[]},"WS":{"L":[],"e":[],"f":[]},"ag4":{"a_":["Uv"],"em":[]},"aE6":{"aS":[]},"a4p":{"H":[],"e":[],"f":[]},"aIL":{"a_":["a4p"],"em":[]},"a4s":{"d6":["xK"],"aS":[]},"axM":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cD"),x:x("F<~>"),k:x("r<kH>"),G:x("r<TA>"),v:x("r<fI>"),S:x("r<+at,partner(ad,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a4<@,@>"),w:x("dm"),Y:x("TA"),N:x("c"),n:x("lS<xK>"),J:x("lj<my>"),q:x("dt"),z:x("@"),r:x("t<TA>?"),g:x("t<@>?"),X:x("J?"),t:x("auX?"),E:x("rq?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afR=new A.dR(C.tU,C.aa,C.tU,C.aa)
D.agA=new A.M(null,null,D.afR,null,null,null,C.y)
D.cq_=new B.aih("S\xf3 funciona na tua conta",!0,null)
D.ajZ=new A.fw(C.L,null,null,D.cq_,null)
D.c5A=new A.N(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.chI=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c5A,C.a6,null,null,null,null,null,null,null)
D.bMf=new A.Q(C.f6,D.chI,null)
D.ak6=new A.fw(C.L,null,null,D.bMf,null)
D.apS=new A.pb(C.d8,!0,D.ak6,null)
D.apT=new A.pb(C.an,!0,null,null)
D.ar8=new B.ape(0,0,"noDuplicates")
D.ar9=new B.ape(1,1,"normal")
D.qf=new A.jR(0.5,0.5,null,null,C.fj,null)
D.ccD=new A.D("Lanterna",null,C.cd,null,null,null,null,null,null,null,null)
D.aA9=new A.bR(1,C.aw,D.ccD,null)
D.cne=new B.adR("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bR1=new B.Uv(420,!0,null,null)
D.bfN=x([D.cne,C.Q,D.bR1],y.p)
D.bsD=x([C.tQ],y.k)
D.cqG=x([],y.k)
D.bAs=x([],y.G)
D.bJZ=new A.K(16,2)
D.aCS=new A.aW(57911,"MaterialIcons",null,!1)
D.aDr=new A.b9(D.aCS,null,C.t,null,null,null)
D.bLl=new A.Q(C.Nj,D.aDr,null)
D.c9W=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.cd,null,null,null,null,null,null,null,null)
D.bLG=new A.Q(C.hr,D.c9W,null)
D.chA=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cd,null,null,null,null,null,null,null,null)
D.bLV=new A.Q(C.qm,D.chA,null)
D.cmd=new B.aE6(null)
D.aqK=new A.uP(D.cmd,null,C.aR,null,null)
D.bQq=new A.eZ(0,0,0,0,null,null,D.aqK,null)
D.ym=new A.b5(14,14)
D.bRF=new A.a3("Bilhete",!1)
D.bSd=new A.a3("Organizas",!1)
D.bSR=new A.a3("Por entrar",!1)
D.bTb=new A.a3("Sem bilhete pago",!1)
D.bYu=new A.iw(186,186,8,C.dG,0,null)
D.bYW=new A.oJ(2,C.a_,null)
D.c9r=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null,null)
D.bZP=new A.bJ(D.c9r,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.c9d=new A.D("Um QR para todos os eventos",null,C.T,null,null,null,null,null,null,null,null)
D.cc4=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cd,C.a6,null,null,null,null,null,null,null)
D.ccT=new A.D("\xc0 procura de um QR\u2026",null,C.hN,null,null,null,null,null,null,null,null)
D.cd6=new A.D("Entrada",null,C.he,null,null,null,null,null,null,null,null)
D.cdc=new A.D("Sem liga\xe7\xe3o",null,C.T,null,null,null,null,null,null,null,null)
D.cls=new B.ab3(null)
D.clz=new B.WS(null)
D.cm_=new B.abE("D\xc1 ENTRADA EM",null)
D.cm0=new B.abE("HOJE",null)
D.cnf=new B.adR("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.coh=new B.aeH(null)
D.coy=new B.afi(null)})()};
(a=>{a["uoJIjrSooCMq3YHBpCJN2ijuC7Y="]=a.current})($__dart_deferred_initializers__);