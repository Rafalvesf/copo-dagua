((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dMU(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).fZ(C.f.B(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMC(w,x)},
cKc(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cKc=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
x=7
return A.d(p.jh("partner_today",y.z),$async$cKc)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.h(s,"bookings"))
o=J.ao(o==null?C.aj:o)
while(o.q()){q=o.gE(o)
if(p.b(q)){n=J.h(q,"event")
n=A.p(n==null?"Evento":n)
m=A.B(J.h(q,"booking_number"))
l=A.aD(J.h(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aD(J.h(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.ba(r,new A.aN2([k,n,m,l]))}}p=A.aD(J.h(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aD(J.h(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avt(r,p,o)
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
return A.m($async$cKc,w)},
avt:function avt(d,e,f){this.a=d
this.b=e
this.c=f},
duR(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.p(j.h(d,"event_id")),g=j.h(d,"event")
g=A.p(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d3(A.p(x==null?"":x))
w=A.B(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.B(J.h(i,"status")):k
if(s){s=A.aD(J.h(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aD(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.d3(A.p(p==null?"":p))
p=p==null?k:p.dH()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ao(j==null?C.aj:j)
while(j.q()){n=j.gE(j)
if(t.b(n)&&A.d3(A.p(J.h(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.p(l==null?"Parceiro":l)
o.push(new A.aMo(A.dc(A.p(m.h(n,"at"))).dH(),l))}}return new B.TY(h,g,x,w,v,u,r,s,q,p,o)},
cKa(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cKa=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
x=7
return A.d(p.jh("my_entries",y.z),$async$cKa)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ao(s),o=y.f;p.q();){q=p.gE(p)
if(o.b(q))J.ba(r,B.duR(q))}v=r
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
return A.m($async$cKa,w)},
dMd(d){var x,w,v="public",u=$.P().b
u===$&&A.b()
x=u.gbu().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cLi(w)
u=u.ch
u===$&&A.b()
return u.LU(0,"entries-"+w,C.yj).NM(new B.cLf(d),C.GF,x.$1("user_id"),v,"event_checkins").NM(new B.cLg(d),C.GF,x.$1("user_id"),v,"booking_arrivals").NM(new B.cLh(d),C.GG,x.$1("buyer_id"),v,"event_tickets").PA(0)},
TY:function TY(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cLi:function cLi(d){this.a=d},
cLf:function cLf(d){this.a=d},
cLg:function cLg(d){this.a=d},
cLh:function cLh(d){this.a=d},
drm(){return new B.Jp(null)},
ddQ(d){return C.f.aT(C.j.k(A.i_(d)),2,"0")+":"+C.f.aT(C.j.k(A.hP(d)),2,"0")},
Jp:function Jp(d){this.a=d},
b4Q:function b4Q(){},
aeZ:function aeZ(d){this.a=d},
af_:function af_(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
caC:function caC(d){this.a=d},
caB:function caB(d){this.a=d},
caw:function caw(d,e){this.a=d
this.b=e},
caz:function caz(d){this.a=d},
cay:function cay(d){this.a=d},
caA:function caA(d){this.a=d},
cax:function cax(d){this.a=d},
afB:function afB(d){this.a=d},
afC:function afC(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cgL:function cgL(d,e){this.a=d
this.b=e},
cgM:function cgM(){},
adm:function adm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVP:function bVP(d){this.a=d},
Pf:function Pf(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aec:function aec(d,e){this.c=d
this.a=e},
ac5:function ac5(d,e){this.c=d
this.a=e},
ahm:function ahm(d,e){this.c=d
this.a=e},
aiZ:function aiZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiJ:function aiJ(d,e,f){this.c=d
this.d=e
this.a=f},
aGf:function aGf(d,e){this.c=d
this.a=e},
abv:function abv(d){this.a=d},
abw:function abw(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bHO:function bHO(d){this.a=d},
bHN:function bHN(){},
bHM:function bHM(d,e){this.a=d
this.b=e},
aSH:function aSH(){},
aT2:function aT2(){},
aT7:function aT7(){},
UU:function UU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agr:function agr(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.ed$=e
_.bE$=f
_.c=_.a=null},
crO:function crO(){},
crP:function crP(d,e){this.a=d
this.b=e},
crQ:function crQ(d){this.a=d},
Xg:function Xg(d){this.a=d},
aEH:function aEH(d){this.a=d},
aTb:function aTb(){},
akj:function akj(){},
apE:function apE(d,e,f){this.c=d
this.a=e
this.b=f},
duH(d,e){},
a4W:function a4W(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJf:function aJf(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
ca8:function ca8(d){this.a=d},
ca7:function ca7(d,e){this.a=d
this.b=e},
aT0:function aT0(){},
duE(d,e){var x=null,w=d===D.aqi?250:0
return new B.a4Z(d,w,e,new A.lq(x,x,y.J),new B.xO(x,C.Be,x,!1,!1,C.aR,C.jf,1),$.aa())},
a4Z:function a4Z(d,e,f,g,h,i){var _=this
_.y=d
_.z=e
_.as=f
_.ch=g
_.cy=_.cx=_.CW=null
_.db=!1
_.a=h
_.W$=0
_.Z$=i
_.aJ$=_.bv$=0},
bhP:function bhP(d){this.a=d},
bhQ:function bhQ(d){this.a=d},
bhR:function bhR(d){this.a=d},
bhS:function bhS(d){this.a=d},
xO:function xO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ayk:function ayk(d){this.a=d},
bAV:function bAV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAW:function bAW(){}},D,F,G,H,I,K,L,M
J=c[1]
A=c[0]
C=c[2]
E=c[277]
B=a.updateHolder(c[13],B)
D=c[273]
F=c[87]
G=c[193]
H=c[275]
I=c[124]
K=c[239]
L=c[276]
M=c[274]
B.avt.prototype={}
B.TY.prototype={}
B.Jp.prototype={
b9(d,e){var x=y.E
return e.G(A.cC($.b7(),new B.b4Q(),y.D,x),x)===C.dQ?D.cno:D.cn8}}
B.aeZ.prototype={
R(){return new B.af_()}}
B.af_.prototype={
ad(){var x=this
x.aq()
$.az.b4$.push(x)
x.kn()
x.r=B.dMd(new B.caC(x))},
m(){var x,w,v=this
$.az.ia(v)
x=v.w
if(x!=null)x.aK(0)
x=v.r
if(x!=null){w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.ya(x)}v.a6()},
ni(d){if(d===C.et)this.kn()},
Db(d){return this.b6j(d)},
kn(){return this.Db(!1)},
b6j(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Db=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ao(o==null?D.byH:o)
while(o.q()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cKa(),$async$Db)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.caw(u,s))
if(!d||s==null){x=1
break}for(o=J.ao(s);o.q();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.i(q,null,null,null,null,null,null,null)
p.a0(new A.bF(o,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$Db,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gDa(),q=u.d,p=y.p
q=A.a([new B.Pf("QR code",C.qi,!q,new B.caz(u),t),new B.Pf("Scannear",C.vm,q,new B.caA(u),t)],p)
if(u.d)p=D.beS
else{x=A.a([D.ckg,C.R,D.aje,C.bP,D.ckO,C.ar],p)
w=s==null
if(w&&!u.f)x.push(M.a8q)
else if(w)x.push(new B.ahm(r,t))
else{w=J.a7(s)
if(w.gY(s))x.push(D.bKv)
else{v=A.a([],p)
for(w=w.gX(s);w.q();)C.e.n(v,A.a([D.pP,new B.aGf(w.gE(w),t)],p))
v.push(D.pP)
C.e.n(x,v)}}p=x}return new B.adm(r,q,p,t)}}
B.afB.prototype={
R(){return new B.afC()}}
B.afC.prototype={
ad(){this.aq()
$.az.b4$.push(this)
this.kn()},
m(){$.az.ia(this)
this.a6()},
ni(d){if(d===C.et)this.kn()},
kn(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kn=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cKc(),$async$kn)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cgL(u,t))
case 1:return A.l(v,w)}})
return A.m($async$kn,w)},
Qn(){var x=0,w=A.n(y.H),v=this,u
var $async$Qn=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ae(u).aj("/cobrar",null,y.X),$async$Qn)
case 2:if(v.c!=null)v.kn()
return A.l(null,w)}})
return A.m($async$Qn,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gDa(),k=y.p,j=A.a([new B.Pf("Scannear",C.vm,!0,new B.cgM(),n),new B.Pf("Cobrar",C.nK,!1,o.gaTm(),n)],k),i=A.a([D.cm3,C.R,new B.UU(290,!1,l,n),C.bP,D.ckP,C.ar],k),h=m==null
if(h&&!o.e)i.push(H.a8n)
else if(h)i.push(new B.ahm(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bKU)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
s=t[1]
r=A.a([],v)
q=t[2]
if(q!=null)r.push(q)
q=t[3]
if(q!=null)r.push(q===1?"1 pessoa":A.p(q)+" pessoas")
r=C.e.a2(r," \xb7 ")
q=t[3]
if(q!=null){t=t[0]
q=A.p(q)
q=t>0?""+t+" de "+q+" chegaram":"0 de "+q
p=q
q=t
t=p}else{t=t[0]
q=t===1?"1 chegou":""+t+" chegaram"
p=q
q=t
t=p}C.e.n(h,A.a([D.pP,new B.aiZ(s,r,t,q>0,n,n)],k))}h.push(D.pP)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aiZ("Cobrado hoje",k,n,!1,F.cJx(m.b),n))
h.push(D.pP)
C.e.n(i,h)}return new B.adm(l,j,i,n)}}
B.adm.prototype={
u(d){var x=null,w=C.CS.C(0,new A.a4(0,A.aT(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.d0(C.bb,x,x,A.pW(C.lD,new B.bVP(d),"Voltar"),x),C.R,D.cay,C.aA,A.e5(C.bg,this.d,C.r,C.bl,8,8),C.aA],y.p)
C.e.n(v,this.e)
return A.cP(x,C.by,A.bB(!0,A.B4(A.d6(v,x,w,x,x,!1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.Pf.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.au:C.t
return A.bj(w,!0,w,A.hk(!1,C.aN,!0,w,A.eY(!1,w,!0,A.aK(new A.S(C.bY,A.O(A.a([A.b9(x.d,u,w,w,16),C.be,A.i(x.c,w,w,w,w,A.aH(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w)],y.p),C.u,C.h,C.J,0,w),w),38,w),C.ab,!0,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ab,w,w,C.cW),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.aec.prototype={
u(d){var x=null
return A.i(this.c,x,x,x,x,C.L,x,x)}}
B.ac5.prototype={
u(d){var x=null
return A.i(this.c,x,x,x,x,C.aH,x,x)}}
B.ahm.prototype={
u(d){var x=null
return new A.S(C.pZ,A.y(A.a([D.c7H,new A.am(A.cJ(C.t5,x,x,this.c,x,x),x)],y.p),C.u,C.h,C.l),x)}}
B.aiZ.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.i(v.c,u,u,u,u,C.a9,u,u)],t),r=v.d
if(r.length!==0)s.push(A.i(r,u,u,u,u,C.L,u,u))
t=A.a([A.a5(A.y(s,C.G,C.h,C.l),1),C.ae],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cz:C.dU
w=A.W(999)
t.push(A.x(u,A.i(s,u,u,u,u,A.aH(u,u,r?C.cR:C.co,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.J(x,u,u,w,u,u,C.x),u,u,u,C.dm,u,u,u))}s=v.r
if(s!=null)t.push(A.i(s,u,u,u,u,C.a9,u,u))
return new A.S(C.ck,A.O(t,C.u,C.h,C.l,0,u),u)}}
B.aiJ.prototype={
u(d){var x=null,w=this.d,v=w?C.cz:C.dU,u=A.W(999)
return A.x(x,A.i(this.c,x,x,x,x,A.aH(x,x,w?C.cR:C.co,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.J(v,x,x,u,x,x,C.x),x,x,x,C.dm,x,x,x)}}
B.aGf.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.dr[A.fI(l)-1]+", "+A.aE(l)+" "+C.bh[A.aw(l)-1])
x=m.d
if(x!=null)k.push(x)
x=m.x
if(x!=null)k.push("Mesa "+A.p(x))
x=m.e
w=!x
if(w&&m.f&&m.r==="paid"){v=m.w
k.push(v===1?"bilhete para 1":"bilhete para "+v)}u=C.e.a2(k," \xb7 ")
k=m.z
t=k.length===0?n:C.e.ga5(k)
k=m.y
if(k!=null)s=new A.X("Entrou \xe0s "+B.ddQ(k),!0)
else if(t!=null){k=new A.X("Chegou \xe0s "+B.ddQ(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bSg
else if(x)k=D.bRi
else k=m.f?D.bQL:D.bRS
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.i(m.b,n,n,n,n,C.a9,n,n)],k)
if(u.length!==0)x.push(new A.S(L.MT,A.i(u,n,n,n,n,C.L,n,n),n))
return new A.S(C.ck,A.O(A.a([A.a5(A.y(x,C.G,C.h,C.l),1),C.ae,new B.aiJ(o,q,n)],k),C.G,C.h,C.l,0,n),n)}}
B.abv.prototype={
R(){return new B.abw(new A.ab(Date.now(),0,!1),C.lq)}}
B.abw.prototype={
ad(){var x=this
x.aq()
$.az.b4$.push(x)
x.kn()
x.as=A.ub(C.hs,new B.bHO(x))},
m(){var x,w=this
$.az.ia(w)
x=w.Q
if(x!=null)x.aK(0)
x=w.as
if(x!=null)x.aK(0)
w.a6()},
ni(d){var x
if(d===C.et)this.kn()
else if(d===C.mC){x=this.Q
if(x!=null)x.aK(0)}},
kn(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$kn=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aK(0)
x=3
return A.d(A.aV_(),$async$kn)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bHM(u,t))
s=t==null?null:t.b
if(s==null)s=C.ky
u.Q=A.df(s,u.gDa())
case 1:return A.l(v,w)}})
return A.m($async$kn,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().G($.b7(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.B(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.B(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cf(new A.ab(Date.now(),0,!1)).a
v=x<0?0:C.k.eE(C.j.aO(x,1000)/1000)
u=C.k.af(C.j.aO(x,1000)/C.j.aO(o.z.a,1000),0,1)
x=A.W(16)
t=A.bH(C.fa,0.5)
s=A.W(16)
r=A.bH(C.fa,0.5)
k=!k
if(k)q=A.bpV(C.t,A.kj("/q/"+l.a),C.GI,C.GJ,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bXk:A.bO(A.y(A.a([C.aDr,C.aC,D.ceD,new A.am(A.cJ(C.t5,n,n,o.gDa(),n,n),n)],y.p),C.u,C.h,C.J),n,n)
p=y.p
s=A.a([A.x(n,A.aK(q,186,186),C.r,n,n,new A.J(C.t,n,r,s,n,n,C.x),n,n,n,C.cT,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ad,A.x(C.bb,A.ard(C.K,A.x(n,n,C.r,n,n,new A.J(C.u7,n,n,A.W(2),n,n,C.x),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.J(C.fa,n,n,k,n,n,C.x),n,4,n,n,n,n,214),C.aC,A.bj(n,n,n,A.i("Novo c\xf3digo em "+v+" s",n,n,n,n,C.L,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.ch(k,32,r,!1,!0,n),C.ae,new A.di(1,C.ba,A.y(A.a([A.i(w,n,n,n,n,C.a9,n,n),D.cgw],p),C.G,C.h,C.l),n)],p),C.u,C.bQ,C.l,0,n))
return A.x(n,A.y(s,C.u,C.h,C.l),C.r,n,n,new A.J(C.t,n,t,x,n,n,C.x),n,n,n,C.cT,n,n,n)}}
B.aSH.prototype={}
B.aT2.prototype={}
B.aT7.prototype={}
B.UU.prototype={
R(){return new B.agr(B.duE(D.aqh,D.brI),null,null)}}
B.agr.prototype={
gKk(){var x,w=this,v=w.e
if(v===$){x=A.cA(null,E.MF,null,null,w)
w.e!==$&&A.b_()
w.e=x
v=x}return v},
ad(){this.aq()
$.az.b4$.push(this)},
bV(){var x,w,v=this
v.dD()
x=v.c
x.toString
if(A.aT(x,null,y.w).w.ax)v.gKk().cZ(0)
else{x=v.gKk()
w=x.r
if(!(w!=null&&w.a!=null))x.aC4(0,!0)}},
ni(d){if(this.f)return
if(d===C.et)this.d.jZ(0)
else if(d===C.mC)this.d.cZ(0)},
m(){var x=this
$.az.ia(x)
x.gKk().m()
x.d.m()
x.aP2()},
DN(d){return this.b85(d)},
b85(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DN=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dMU(t)
if(p==null){s=u.c.O(y.q).f
s.XJ()
s.a0(D.bYG)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.cZ(0),$async$DN)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ae(r).aj(m,null,y.X),$async$DN)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.jZ(0),$async$DN)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DN,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.hX(A.W(16),A.aK(new A.bA(C.aw,w,C.e4,C.y,A.a([C.jv,new B.a4W(t,x.gb84(),new B.crO(),w),A.bO(A.aK(new A.bA(C.aw,w,C.aD,C.y,A.a([D.bPn,A.eT(x.gKk(),new B.crP(x,u),w)],s),w),u,u),w,w),A.cc(16,A.bO(A.x(w,D.ceZ,C.r,w,w,new A.J(C.t,w,w,A.W(999),w,w,C.x),w,w,w,C.dm,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.bd)],s)
if(x.a.d)s.push(new A.kd(t,new B.crQ(x),w,w,y.n))
return A.y(s,C.E,C.h,C.l)}}
B.Xg.prototype={
u(d){return D.ap_}}
B.aEH.prototype={
aZ(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aB(),m=A.bd()
m.r=C.t.gv(0)
m.b=C.bN
m.c=4
m.d=C.h8
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cB(n,C.aP,o,o,A.a([],v))
u.aB(new A.f_(2,44))
u.aB(new A.cS(2,16))
u.An(D.bIZ,D.yb)
u.aB(new A.cS(44,2))
d.dP(u,m)
u=new A.cB(n,C.aP,o,o,A.a([],v))
t=x-44
u.aB(new A.f_(t,2))
s=x-16
u.aB(new A.cS(s,2))
r=x-2
u.An(new A.K(r,16),D.yb)
u.aB(new A.cS(r,44))
d.dP(u,m)
u=new A.cB(n,C.aP,o,o,A.a([],v))
q=w-44
u.aB(new A.f_(r,q))
p=w-16
u.aB(new A.cS(r,p))
r=w-2
u.An(new A.K(s,r),D.yb)
u.aB(new A.cS(t,r))
d.dP(u,m)
v=new A.cB(n,C.aP,o,o,A.a([],v))
v.aB(new A.f_(44,r))
v.aB(new A.cS(16,r))
v.An(new A.K(2,p),D.yb)
v.aB(new A.cS(2,q))
d.dP(v,m)},
dN(d){return!1}}
B.aTb.prototype={}
B.akj.prototype={
m(){var x=this,w=x.bE$
if(w!=null)w.a3(0,x.gfS())
x.bE$=null
x.a6()},
bS(){this.cp()
this.cP()
this.fT()}}
B.apE.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4W.prototype={
R(){return new B.aJf()}}
B.aJf.prototype={
b73(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.kd(x,new B.ca8(this),null,null,y.n)},
XS(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XS=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.he(t,A.u(t).i("he<1>")).Y4(s.d,!1,B.dMx())
x=2
return A.d(u.jZ(0),$async$XS)
case 2:return A.l(null,w)}})
return A.m($async$XS,w)},
Mz(){var x=0,w=A.n(y.H),v=this,u
var $async$Mz=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aK(0)
x=2
return A.d(y.x.b(u)?u:A.ea(u,y.H),$async$Mz)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.cZ(0),$async$Mz)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$Mz,w)},
ad(){var x,w=this
w.aq()
x=w.a.c
w.d!==$&&A.bw()
w.d=x
w.XS()},
m(){this.a6()
this.Mz()},
ni(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xG}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.jZ(0)
break
case 2:w.cZ(0)
break}}}
B.aT0.prototype={}
B.a4Z.prototype={
bhs(){var x=this
x.CW=$.I_().gavc().Y4(new B.bhP(x),!1,new B.bhQ(x))
x.cx=$.I_().gaCD().lj(new B.bhR(x))
x.cy=$.I_().gaDG().lj(new B.bhS(x))},
b7k(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aK(0)
w=x.cx
if(w!=null)w.aK(0)
w=x.cy
if(w!=null)w.aK(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bq5(!1,w.r===C.jf?C.jf:C.ab0))
return!0},
jZ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$jZ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.q(A.xN(C.xF,A.xM(null,null,C.xF.geS(0))))
if(s.a.e){x=1
break}r=C.Be
q=new B.bAV(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bhs()
x=7
return A.d($.I_().lu(0,q),$async$jZ)
case 7:p=f
if(!s.db)s.sv(0,s.a.bqq(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tA){o=m
if(!s.db)s.sv(0,s.a.bqs(C.Be,o,!0,!1,C.aR,C.jf,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$jZ,w)},
cZ(d){var x=0,w=A.n(y.H),v=this
var $async$cZ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b7k()?2:3
break
case 2:x=4
return A.d($.I_().cZ(0),$async$cZ)
case 4:case 3:return A.l(null,w)}})
return A.m($async$cZ,w)},
tJ(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tJ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.an(A.xN(C.a1a,A.xM(null,null,C.a1a.geS(0))))
if(u.db)A.an(A.xN(C.xF,A.xM(null,null,C.xF.geS(0))))
if(!t.e){x=1
break}if(t.r===C.jf){x=1
break}x=3
return A.d($.I_().tJ(),$async$tJ)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tJ,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.h9()
x=3
return A.d($.I_().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xO.prototype={
M8(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xO(w,v,f,u,t,s,r,k==null?x.w:k)},
bq5(d,e){var x=null
return this.M8(x,x,x,x,d,x,e,x)},
bqq(d,e,f,g,h,i){return this.M8(d,e,null,f,g,h,i,null)},
bqs(d,e,f,g,h,i,j){return this.M8(null,d,e,f,g,h,i,j)},
bpR(d){var x=null
return this.M8(x,x,x,x,x,x,x,d)},
bpM(d){var x=null
return this.M8(x,x,x,x,x,x,d,x)}}
B.ayk.prototype={
u(d){var x=null,w=A.a([D.bKi],y.p)
w.push(A.i(C.k2.geS(0),x,x,x,x,C.a9O,x,x))
return A.kP(A.bO(A.y(w,C.u,C.h,C.J),x,x),C.ao,!0)}}
B.bAV.prototype={
ZH(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("ak<1,v>")
x=A.U(new A.ak(x,new B.bAW(),w),w.i("aW.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:C})","F<~>(mB)","Xg(N,tA,e?)","cg(N,xO,e?)","e(N,xO,e?)","~(M,c8)"])
B.cLi.prototype={
$1(d){return new I.Ft(K.y6,d,this.a)},
$S:1379}
B.cLf.prototype={
$1(d){return this.a.$0()},
$S:149}
B.cLg.prototype={
$1(d){return this.a.$0()},
$S:149}
B.cLh.prototype={
$1(d){return this.a.$0()},
$S:149}
B.b4Q.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:114}
B.caC.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aK(0)
x.w=A.df(C.ef,new B.caB(x))},
$S:0}
B.caB.prototype={
$0(){return this.a.Db(!0)},
$S:0}
B.caw.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.caz.prototype={
$0(){var x=this.a
return x.p(new B.cay(x))},
$S:0}
B.cay.prototype={
$0(){return this.a.d=!1},
$S:0}
B.caA.prototype={
$0(){var x=this.a
return x.p(new B.cax(x))},
$S:0}
B.cax.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cgL.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cgM.prototype={
$0(){},
$S:0}
B.bVP.prototype={
$0(){return A.al(this.a,!1).hA()},
$S:0}
B.bHO.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bHN())},
$S:65}
B.bHN.prototype={
$0(){},
$S:0}
B.bHM.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ab(w,0,!1).en(v)
u.z=v>3e7?x:C.lq}},
$S:0}
B.crO.prototype={
$3(d,e,f){return D.ckn},
$S:z+3}
B.crP.prototype={
$2(d,e){var x=null,w=this.a.gKk().x
w===$&&A.b()
return A.cc(x,A.x(x,x,C.r,C.u7,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:217}
B.crQ.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jf)return C.an
x=t===C.ab1
t=x?C.cz:C.dU
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(C.MR,A.bj(u,!0,u,A.eY(!1,u,!0,A.x(u,A.O(A.a([D.azH,A.x(u,A.i(v,u,u,u,u,A.aH(u,u,x?C.cR:C.co,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.J(t,u,u,w,u,u,C.x),u,u,u,C.dm,u,u,u)],y.p),C.u,C.h,C.l,0,u),C.r,u,G.hZ,D.afM,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,this.a.d.gbBM(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.ca8.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.ap0}x=e.c
if(x!=null){w=new B.ayk(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kv(new B.ca7(this.a,e))},
$S:z+5}
B.ca7.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b73(u,e)
v.a.toString
x=u.f
v=A.aj(1/0,e.a,e.b)
u=A.aj(1/0,e.c,e.d)
w=A.uX(A.Gg(A.JI(C.K,A.aK($.I_().avi(),x.b,x.a),C.r,C.bD),new A.ag(v,u)),C.y,null)
return w},
$S:112}
B.bhP.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.C(0,d)},
$S:1380}
B.bhQ.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xe(d)},
$S:74}
B.bhR.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpM(d))},
$S:1381}
B.bhS.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpR(d))},
$S:111}
B.bAW.prototype={
$1(d){return d.c},
$S:1382};(function aliases(){var x=B.akj.prototype
x.aP2=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.af_.prototype,"gDa",0,0,null,["$1$announce","$0"],["Db","kn"],1,0,0)
var t
w(t=B.afC.prototype,"gDa","kn",0)
w(t,"gaTm","Qn",0)
w(B.abw.prototype,"gDa","kn",0)
v(B.agr.prototype,"gb84","DN",2)
u(B,"dMx","duH",6)
w(t=B.a4Z.prototype,"gbBM","tJ",0)
w(t,"geF","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.M,[B.avt,B.TY,B.xO,B.bAV])
v(A.bu,[B.cLi,B.cLf,B.cLg,B.cLh,B.b4Q,B.bHO,B.crO,B.crQ,B.ca8,B.bhP,B.bhQ,B.bhR,B.bhS,B.bAW])
u(B.Jp,A.ew)
v(A.G,[B.aeZ,B.afB,B.UU,B.a4W])
v(A.a_,[B.aT2,B.aT7,B.aTb,B.aT0])
u(B.af_,B.aT2)
v(A.bL,[B.caC,B.caB,B.caw,B.caz,B.cay,B.caA,B.cax,B.cgL,B.cgM,B.bVP,B.bHN,B.bHM])
u(B.afC,B.aT7)
v(A.L,[B.adm,B.Pf,B.aec,B.ac5,B.ahm,B.aiZ,B.aiJ,B.aGf,B.Xg,B.ayk])
u(B.abv,A.dC)
u(B.aSH,A.dw)
u(B.abw,B.aSH)
u(B.akj,B.aTb)
u(B.agr,B.akj)
v(A.cK,[B.crP,B.ca7])
u(B.aEH,A.qs)
u(B.apE,A.f7)
u(B.aJf,B.aT0)
u(B.a4Z,A.cZ)
x(B.aSH,A.en)
x(B.aT2,A.en)
x(B.aT7,A.en)
x(B.aTb,A.en)
w(B.akj,A.i1)
x(B.aT0,A.en)})()
A.br(b.typeUniverse,JSON.parse('{"aeZ":{"G":[],"e":[],"f":[]},"afB":{"G":[],"e":[],"f":[]},"abv":{"G":[],"e":[],"f":[]},"Jp":{"G":[],"e":[],"f":[]},"af_":{"a_":["aeZ"],"en":[]},"afC":{"a_":["afB"],"en":[]},"adm":{"L":[],"e":[],"f":[]},"Pf":{"L":[],"e":[],"f":[]},"aec":{"L":[],"e":[],"f":[]},"ac5":{"L":[],"e":[],"f":[]},"ahm":{"L":[],"e":[],"f":[]},"aiZ":{"L":[],"e":[],"f":[]},"aiJ":{"L":[],"e":[],"f":[]},"aGf":{"L":[],"e":[],"f":[]},"abw":{"a_":["abv"],"en":[]},"UU":{"G":[],"e":[],"f":[]},"Xg":{"L":[],"e":[],"f":[]},"agr":{"a_":["UU"],"en":[]},"aEH":{"aV":[]},"a4W":{"G":[],"e":[],"f":[]},"aJf":{"a_":["a4W"],"en":[]},"a4Z":{"cZ":["xO"],"aV":[]},"ayk":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{D:x("cH"),x:x("F<~>"),k:x("r<kO>"),G:x("r<TY>"),v:x("r<fG>"),S:x("r<+at,partner(ab,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a3<@,@>"),w:x("du"),Y:x("TY"),N:x("c"),n:x("kd<xO>"),J:x("lq<mB>"),q:x("dl"),z:x("@"),r:x("t<TY>?"),g:x("t<@>?"),X:x("M?"),t:x("avt?"),E:x("ru?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.af3=new A.dN(C.tF,C.aa,C.tF,C.aa)
D.afM=new A.J(null,null,D.af3,null,null,null,C.x)
D.coP=new B.aiJ("S\xf3 funciona na tua conta",!0,null)
D.aje=new A.f8(C.K,null,null,D.coP,null)
D.c4n=new A.Q(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cao=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4n,C.a4,null,null,null,null,null,null)
D.bKz=new A.S(C.hx,D.cao,null)
D.ajj=new A.f8(C.K,null,null,D.bKz,null)
D.ap_=new A.pi(C.co,!0,D.ajj,null)
D.ap0=new A.pi(C.ao,!0,null,null)
D.aqh=new B.apE(0,0,"noDuplicates")
D.aqi=new B.apE(1,1,"normal")
D.pP=new A.ks(0.5,0.5,null,null,C.fa,null)
D.cfW=new A.D("Lanterna",null,C.cc,null,null,null,null,null,null,null)
D.azH=new A.bK(1,C.at,D.cfW,null)
D.cm2=new B.aec("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bQ1=new B.UU(420,!0,null,null)
D.beS=x([D.cm2,C.R,D.bQ1],y.p)
D.brI=x([C.tA],y.k)
D.cpv=x([],y.k)
D.byH=x([],y.G)
D.bIZ=new A.K(16,2)
D.aC5=new A.b0(57911,"MaterialIcons",null,!1)
D.aCA=new A.b8(D.aC5,null,C.t,null,null,null)
D.bKi=new A.S(C.MO,D.aCA,null)
D.cct=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cc,null,null,null,null,null,null,null)
D.bKv=new A.S(C.pZ,D.cct,null)
D.cgN=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.cc,null,null,null,null,null,null,null)
D.bKU=new A.S(C.fW,D.cgN,null)
D.cl3=new B.aEH(null)
D.apS=new A.qr(D.cl3,null,C.aR,null,null)
D.bPn=new A.eF(0,0,0,0,null,null,D.apS,null)
D.yb=new A.b5(14,14)
D.bQL=new A.X("Bilhete",!1)
D.bRi=new A.X("Organizas",!1)
D.bRS=new A.X("Por entrar",!1)
D.bSg=new A.X("Sem bilhete pago",!1)
D.bXk=new A.l_(186,186,8,C.fU,0,null)
D.c8H=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null)
D.bYG=new A.bF(D.c8H,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c7H=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cc,C.a4,null,null,null,null,null,null)
D.cay=new A.D("Entrada",null,C.hS,null,null,null,null,null,null,null)
D.ceD=new A.D("Sem liga\xe7\xe3o",null,C.L,null,null,null,null,null,null,null)
D.ceZ=new A.D("\xc0 procura de um QR\u2026",null,C.hR,null,null,null,null,null,null,null)
D.cgw=new A.D("Um QR para todos os eventos",null,C.L,null,null,null,null,null,null,null)
D.ckg=new B.abv(null)
D.ckn=new B.Xg(null)
D.ckO=new B.ac5("D\xc1 ENTRADA EM",null)
D.ckP=new B.ac5("HOJE",null)
D.cm3=new B.aec("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cn8=new B.aeZ(null)
D.cno=new B.afB(null)})()};
(a=>{a["JbJ0Z4xnQ4x/Z5U0SiZCN2AY3Fs="]=a.current})($__dart_deferred_initializers__);