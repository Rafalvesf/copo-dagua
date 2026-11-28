((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dMr(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).fZ(C.f.B(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMr(w,x)},
cJR(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cJR=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jh("partner_today",y.z),$async$cJR)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.i(s,"bookings"))
o=J.ao(o==null?C.aj:o)
while(o.q()){q=o.gE(o)
if(p.b(q)){n=J.i(q,"event")
n=A.p(n==null?"Evento":n)
m=A.C(J.i(q,"booking_number"))
l=A.aD(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aD(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bb(r,new A.aMS([k,n,m,l]))}}p=A.aD(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aD(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avk(r,p,o)
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
return A.m($async$cJR,w)},
avk:function avk(d,e,f){this.a=d
this.b=e
this.c=f},
dus(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.p(j.h(d,"event_id")),g=j.h(d,"event")
g=A.p(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d2(A.p(x==null?"":x))
w=A.C(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.C(J.i(i,"status")):k
if(s){s=A.aD(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aD(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.d2(A.p(p==null?"":p))
p=p==null?k:p.dH()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ao(j==null?C.aj:j)
while(j.q()){n=j.gE(j)
if(t.b(n)&&A.d2(A.p(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.p(l==null?"Parceiro":l)
o.push(new A.aMd(A.dc(A.p(m.h(n,"at"))).dH(),l))}}return new B.TR(h,g,x,w,v,u,r,s,q,p,o)},
cJP(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cJP=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jh("my_entries",y.z),$async$cJP)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ao(s),o=y.f;p.q();){q=p.gE(p)
if(o.b(q))J.bb(r,B.dus(q))}v=r
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
return A.m($async$cJP,w)},
dLL(d){var x,w,v="public",u=$.Q().b
u===$&&A.b()
x=u.gbu().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cKW(w)
u=u.ch
u===$&&A.b()
return u.LU(0,"entries-"+w,C.yi).NL(new B.cKT(d),C.GD,x.$1("user_id"),v,"event_checkins").NL(new B.cKU(d),C.GD,x.$1("user_id"),v,"booking_arrivals").NL(new B.cKV(d),C.GE,x.$1("buyer_id"),v,"event_tickets").PA(0)},
TR:function TR(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cKW:function cKW(d){this.a=d},
cKT:function cKT(d){this.a=d},
cKU:function cKU(d){this.a=d},
cKV:function cKV(d){this.a=d},
dqY(){return new B.Ji(null)},
ddr(d){return C.f.aT(C.j.k(A.i_(d)),2,"0")+":"+C.f.aT(C.j.k(A.hP(d)),2,"0")},
Ji:function Ji(d){this.a=d},
b4G:function b4G(){},
aeP:function aeP(d){this.a=d},
aeQ:function aeQ(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
cah:function cah(d){this.a=d},
cag:function cag(d){this.a=d},
cab:function cab(d,e){this.a=d
this.b=e},
cae:function cae(d){this.a=d},
cad:function cad(d){this.a=d},
caf:function caf(d){this.a=d},
cac:function cac(d){this.a=d},
afr:function afr(d){this.a=d},
afs:function afs(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cgq:function cgq(d,e){this.a=d
this.b=e},
cgr:function cgr(){},
adc:function adc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVu:function bVu(d){this.a=d},
P7:function P7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ae2:function ae2(d,e){this.c=d
this.a=e},
abW:function abW(d,e){this.c=d
this.a=e},
ahc:function ahc(d,e){this.c=d
this.a=e},
aiP:function aiP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiz:function aiz(d,e,f){this.c=d
this.d=e
this.a=f},
aG4:function aG4(d,e){this.c=d
this.a=e},
abl:function abl(d){this.a=d},
abm:function abm(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bHt:function bHt(d){this.a=d},
bHs:function bHs(){},
bHr:function bHr(d,e){this.a=d
this.b=e},
aSw:function aSw(){},
aSS:function aSS(){},
aSX:function aSX(){},
UN:function UN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agi:function agi(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.ed$=e
_.bE$=f
_.c=_.a=null},
crt:function crt(){},
cru:function cru(d,e){this.a=d
this.b=e},
crv:function crv(d){this.a=d},
Xa:function Xa(d){this.a=d},
aEw:function aEw(d){this.a=d},
aT0:function aT0(){},
ak9:function ak9(){},
apv:function apv(d,e,f){this.c=d
this.a=e
this.b=f},
dui(d,e){},
a4M:function a4M(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJ4:function aJ4(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c9O:function c9O(d){this.a=d},
c9N:function c9N(d,e){this.a=d
this.b=e},
aSQ:function aSQ(){},
duf(d,e){var x=null,w=d===D.aqe?250:0
return new B.a4P(d,w,e,new A.lq(x,x,y.J),new B.xM(x,C.Bc,x,!1,!1,C.aR,C.jf,1),$.aa())},
a4P:function a4P(d,e,f,g,h,i){var _=this
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
bhy:function bhy(d){this.a=d},
bhz:function bhz(d){this.a=d},
bhA:function bhA(d){this.a=d},
bhB:function bhB(d){this.a=d},
xM:function xM(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aya:function aya(d){this.a=d},
bAC:function bAC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAD:function bAD(){}},D,F,G,H,I,K,L,M
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
B.avk.prototype={}
B.TR.prototype={}
B.Ji.prototype={
bb(d,e){var x=y.E
return e.G(A.cC($.b7(),new B.b4G(),y.D,x),x)===C.dQ?D.cng:D.cn0}}
B.aeP.prototype={
R(){return new B.aeQ()}}
B.aeQ.prototype={
ad(){var x=this
x.aq()
$.az.b4$.push(x)
x.kn()
x.r=B.dLL(new B.cah(x))},
m(){var x,w,v=this
$.az.ia(v)
x=v.w
if(x!=null)x.aK(0)
x=v.r
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yb(x)}v.a6()},
ni(d){if(d===C.et)this.kn()},
Db(d){return this.b6f(d)},
kn(){return this.Db(!1)},
b6f(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Db=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ao(o==null?D.bzp:o)
while(o.q()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cJP(),$async$Db)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.cab(u,s))
if(!d||s==null){x=1
break}for(o=J.ao(s);o.q();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null)
p.a0(new A.bF(o,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$Db,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gDa(),q=u.d,p=y.p
q=A.a([new B.P7("QR code",C.qf,!q,new B.cae(u),t),new B.P7("Scannear",C.vl,q,new B.caf(u),t)],p)
if(u.d)p=D.beO
else{x=A.a([D.ck8,C.R,D.aja,C.bO,D.ckG,C.ar],p)
w=s==null
if(w&&!u.f)x.push(M.a8l)
else if(w)x.push(new B.ahc(r,t))
else{w=J.a7(s)
if(w.gY(s))x.push(D.bKr)
else{v=A.a([],p)
for(w=w.gX(s);w.q();)C.e.n(v,A.a([D.pN,new B.aG4(w.gE(w),t)],p))
v.push(D.pN)
C.e.n(x,v)}}p=x}return new B.adc(r,q,p,t)}}
B.afr.prototype={
R(){return new B.afs()}}
B.afs.prototype={
ad(){this.aq()
$.az.b4$.push(this)
this.kn()},
m(){$.az.ia(this)
this.a6()},
ni(d){if(d===C.et)this.kn()},
kn(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kn=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cJR(),$async$kn)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cgq(u,t))
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
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gDa(),k=y.p,j=A.a([new B.P7("Scannear",C.vl,!0,new B.cgr(),n),new B.P7("Cobrar",C.nK,!1,o.gaTi(),n)],k),i=A.a([D.clW,C.R,new B.UN(290,!1,l,n),C.bO,D.ckH,C.ar],k),h=m==null
if(h&&!o.e)i.push(H.a8i)
else if(h)i.push(new B.ahc(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bKO)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.G)(x),++u){t=x[u].a
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
t=p}C.e.n(h,A.a([D.pN,new B.aiP(s,r,t,q>0,n,n)],k))}h.push(D.pN)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aiP("Cobrado hoje",k,n,!1,F.cJb(m.b),n))
h.push(D.pN)
C.e.n(i,h)}return new B.adc(l,j,i,n)}}
B.adc.prototype={
u(d){var x=null,w=C.CQ.C(0,new A.a4(0,A.aT(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.d_(C.bb,x,x,A.pW(C.lC,new B.bVu(d),"Voltar"),x),C.R,D.caq,C.aA,A.e4(C.bf,this.d,C.r,C.bl,8,8),C.aA],y.p)
C.e.n(v,this.e)
return A.cP(x,C.by,A.bB(!0,A.B2(A.d6(v,x,w,x,x,!1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.P7.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.au:C.t
return A.bj(w,!0,w,A.hi(!1,C.aN,!0,w,A.eY(!1,w,!0,A.aK(new A.S(C.bY,A.O(A.a([A.b9(x.d,u,w,w,16),C.bj,A.h(x.c,w,w,w,w,A.aI(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w)],y.p),C.v,C.h,C.J,0,w),w),38,w),C.ab,!0,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ab,w,w,C.cW),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.ae2.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.L,x,x)}}
B.abW.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aH,x,x)}}
B.ahc.prototype={
u(d){var x=null
return new A.S(C.pW,A.y(A.a([D.c7A,new A.am(A.cJ(C.t4,x,x,this.c,x,x),x)],y.p),C.v,C.h,C.l),x)}}
B.aiP.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.a9,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.L,u,u))
t=A.a([A.a5(A.y(s,C.G,C.h,C.l),1),C.ae],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cz:C.dU
w=A.W(999)
t.push(A.x(u,A.h(s,u,u,u,u,A.aI(u,u,r?C.cR:C.co,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.J(x,u,u,w,u,u,C.x),u,u,u,C.dm,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.a9,u,u))
return new A.S(C.ck,A.O(t,C.v,C.h,C.l,0,u),u)}}
B.aiz.prototype={
u(d){var x=null,w=this.d,v=w?C.cz:C.dU,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?C.cR:C.co,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.J(v,x,x,u,x,x,C.x),x,x,x,C.dm,x,x,x)}}
B.aG4.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.dr[A.fH(l)-1]+", "+A.aE(l)+" "+C.bg[A.aw(l)-1])
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
if(k!=null)s=new A.X("Entrou \xe0s "+B.ddr(k),!0)
else if(t!=null){k=new A.X("Chegou \xe0s "+B.ddr(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bSa
else if(x)k=D.bRc
else k=m.f?D.bQF:D.bRM
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.a9,n,n)],k)
if(u.length!==0)x.push(new A.S(L.MS,A.h(u,n,n,n,n,C.L,n,n),n))
return new A.S(C.ck,A.O(A.a([A.a5(A.y(x,C.G,C.h,C.l),1),C.ae,new B.aiz(o,q,n)],k),C.G,C.h,C.l,0,n),n)}}
B.abl.prototype={
R(){return new B.abm(new A.ab(Date.now(),0,!1),C.lp)}}
B.abm.prototype={
ad(){var x=this
x.aq()
$.az.b4$.push(x)
x.kn()
x.as=A.u9(C.hs,new B.bHt(x))},
m(){var x,w=this
$.az.ia(w)
x=w.Q
if(x!=null)x.aK(0)
x=w.as
if(x!=null)x.aK(0)
w.a6()},
ni(d){var x
if(d===C.et)this.kn()
else if(d===C.mB){x=this.Q
if(x!=null)x.aK(0)}},
kn(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$kn=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aK(0)
x=3
return A.d(A.aUP(),$async$kn)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bHr(u,t))
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
if(k)q=A.bpC(C.t,A.ki("/q/"+l.a),C.GG,C.GH,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bXe:A.bO(A.y(A.a([C.aDn,C.aE,D.cev,new A.am(A.cJ(C.t4,n,n,o.gDa(),n,n),n)],y.p),C.v,C.h,C.J),n,n)
p=y.p
s=A.a([A.x(n,A.aK(q,186,186),C.r,n,n,new A.J(C.t,n,r,s,n,n,C.x),n,n,n,C.cT,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ad,A.x(C.bb,A.ar4(C.K,A.x(n,n,C.r,n,n,new A.J(C.u6,n,n,A.W(2),n,n,C.x),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.J(C.fa,n,n,k,n,n,C.x),n,4,n,n,n,n,214),C.aE,A.bj(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.L,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.ch(k,32,r,!1,!0,n),C.ae,new A.di(1,C.ba,A.y(A.a([A.h(w,n,n,n,n,C.a9,n,n),D.cgo],p),C.G,C.h,C.l),n)],p),C.v,C.bR,C.l,0,n))
return A.x(n,A.y(s,C.v,C.h,C.l),C.r,n,n,new A.J(C.t,n,t,x,n,n,C.x),n,n,n,C.cT,n,n,n)}}
B.aSw.prototype={}
B.aSS.prototype={}
B.aSX.prototype={}
B.UN.prototype={
R(){return new B.agi(B.duf(D.aqd,D.brE),null,null)}}
B.agi.prototype={
gKk(){var x,w=this,v=w.e
if(v===$){x=A.cz(null,E.ME,null,null,w)
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
if(!(w!=null&&w.a!=null))x.aC1(0,!0)}},
ni(d){if(this.f)return
if(d===C.et)this.d.jZ(0)
else if(d===C.mB)this.d.cZ(0)},
m(){var x=this
$.az.ia(x)
x.gKk().m()
x.d.m()
x.aOZ()},
DM(d){return this.b81(d)},
b81(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DM=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dMr(t)
if(p==null){s=u.c.O(y.q).f
s.XI()
s.a0(D.bYz)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.cZ(0),$async$DM)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ae(r).aj(m,null,y.X),$async$DM)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.jZ(0),$async$DM)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DM,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.hJ(A.W(16),A.aK(new A.bA(C.aw,w,C.e4,C.y,A.a([C.ju,new B.a4M(t,x.gb80(),new B.crt(),w),A.bO(A.aK(new A.bA(C.aw,w,C.aC,C.y,A.a([D.bPh,A.eT(x.gKk(),new B.cru(x,u),w)],s),w),u,u),w,w),A.cb(16,A.bO(A.x(w,D.ceR,C.r,w,w,new A.J(C.t,w,w,A.W(999),w,w,C.x),w,w,w,C.dm,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.bc)],s)
if(x.a.d)s.push(new A.lp(t,new B.crv(x),w,w,y.n))
return A.y(s,C.E,C.h,C.l)}}
B.Xa.prototype={
u(d){return D.aoW}}
B.aEw.prototype={
aY(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aB(),m=A.bd()
m.r=C.t.gv(0)
m.b=C.bM
m.c=4
m.d=C.h8
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cB(n,C.aP,o,o,A.a([],v))
u.aB(new A.f_(2,44))
u.aB(new A.cS(2,16))
u.An(D.bIV,D.ya)
u.aB(new A.cS(44,2))
d.dP(u,m)
u=new A.cB(n,C.aP,o,o,A.a([],v))
t=x-44
u.aB(new A.f_(t,2))
s=x-16
u.aB(new A.cS(s,2))
r=x-2
u.An(new A.K(r,16),D.ya)
u.aB(new A.cS(r,44))
d.dP(u,m)
u=new A.cB(n,C.aP,o,o,A.a([],v))
q=w-44
u.aB(new A.f_(r,q))
p=w-16
u.aB(new A.cS(r,p))
r=w-2
u.An(new A.K(s,r),D.ya)
u.aB(new A.cS(t,r))
d.dP(u,m)
v=new A.cB(n,C.aP,o,o,A.a([],v))
v.aB(new A.f_(44,r))
v.aB(new A.cS(16,r))
v.An(new A.K(2,p),D.ya)
v.aB(new A.cS(2,q))
d.dP(v,m)},
dN(d){return!1}}
B.aT0.prototype={}
B.ak9.prototype={
m(){var x=this,w=x.bE$
if(w!=null)w.a3(0,x.gfS())
x.bE$=null
x.a6()},
bS(){this.cp()
this.cP()
this.fT()}}
B.apv.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4M.prototype={
R(){return new B.aJ4()}}
B.aJ4.prototype={
b7_(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lp(x,new B.c9O(this),null,null,y.n)},
XR(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$XR=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.hd(t,A.u(t).i("hd<1>")).Y3(s.d,!1,B.dM4())
x=2
return A.d(u.jZ(0),$async$XR)
case 2:return A.l(null,w)}})
return A.m($async$XR,w)},
My(){var x=0,w=A.n(y.H),v=this,u
var $async$My=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aK(0)
x=2
return A.d(y.x.b(u)?u:A.ea(u,y.H),$async$My)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.cZ(0),$async$My)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$My,w)},
ad(){var x,w=this
w.aq()
x=w.a.c
w.d!==$&&A.bw()
w.d=x
w.XR()},
m(){this.a6()
this.My()},
ni(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xF}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.jZ(0)
break
case 2:w.cZ(0)
break}}}
B.aSQ.prototype={}
B.a4P.prototype={
bhn(){var x=this
x.CW=$.HU().gava().Y3(new B.bhy(x),!1,new B.bhz(x))
x.cx=$.HU().gaCA().lj(new B.bhA(x))
x.cy=$.HU().gaDD().lj(new B.bhB(x))},
b7g(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aK(0)
w=x.cx
if(w!=null)w.aK(0)
w=x.cy
if(w!=null)w.aK(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bq0(!1,w.r===C.jf?C.jf:C.aaX))
return!0},
jZ(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$jZ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.q(A.xL(C.xE,A.xK(null,null,C.xE.geS(0))))
if(s.a.e){x=1
break}r=C.Bc
q=new B.bAC(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.bhn()
x=7
return A.d($.HU().lu(0,q),$async$jZ)
case 7:p=f
if(!s.db)s.sv(0,s.a.bql(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.ty){o=m
if(!s.db)s.sv(0,s.a.bqn(C.Bc,o,!0,!1,C.aR,C.jf,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$jZ,w)},
cZ(d){var x=0,w=A.n(y.H),v=this
var $async$cZ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b7g()?2:3
break
case 2:x=4
return A.d($.HU().cZ(0),$async$cZ)
case 4:case 3:return A.l(null,w)}})
return A.m($async$cZ,w)},
tK(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tK=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.an(A.xL(C.a15,A.xK(null,null,C.a15.geS(0))))
if(u.db)A.an(A.xL(C.xE,A.xK(null,null,C.xE.geS(0))))
if(!t.e){x=1
break}if(t.r===C.jf){x=1
break}x=3
return A.d($.HU().tK(),$async$tK)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tK,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.h9()
x=3
return A.d($.HU().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xM.prototype={
M8(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xM(w,v,f,u,t,s,r,k==null?x.w:k)},
bq0(d,e){var x=null
return this.M8(x,x,x,x,d,x,e,x)},
bql(d,e,f,g,h,i){return this.M8(d,e,null,f,g,h,i,null)},
bqn(d,e,f,g,h,i,j){return this.M8(null,d,e,f,g,h,i,j)},
bpM(d){var x=null
return this.M8(x,x,x,x,x,x,x,d)},
bpH(d){var x=null
return this.M8(x,x,x,x,x,x,d,x)}}
B.aya.prototype={
u(d){var x=null,w=A.a([D.bKe],y.p)
w.push(A.h(C.k1.geS(0),x,x,x,x,C.a9K,x,x))
return A.kN(A.bO(A.y(w,C.v,C.h,C.J),x,x),C.an,!0)}}
B.bAC.prototype={
ZF(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("ak<1,v>")
x=A.U(new A.ak(x,new B.bAD(),w),w.i("aW.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:B})","F<~>(mA)","Xa(N,ty,e?)","cg(N,xM,e?)","e(N,xM,e?)","~(M,c7)"])
B.cKW.prototype={
$1(d){return new I.Fq(K.y5,d,this.a)},
$S:1377}
B.cKT.prototype={
$1(d){return this.a.$0()},
$S:153}
B.cKU.prototype={
$1(d){return this.a.$0()},
$S:153}
B.cKV.prototype={
$1(d){return this.a.$0()},
$S:153}
B.b4G.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:116}
B.cah.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aK(0)
x.w=A.df(C.ef,new B.cag(x))},
$S:0}
B.cag.prototype={
$0(){return this.a.Db(!0)},
$S:0}
B.cab.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.cae.prototype={
$0(){var x=this.a
return x.p(new B.cad(x))},
$S:0}
B.cad.prototype={
$0(){return this.a.d=!1},
$S:0}
B.caf.prototype={
$0(){var x=this.a
return x.p(new B.cac(x))},
$S:0}
B.cac.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cgq.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cgr.prototype={
$0(){},
$S:0}
B.bVu.prototype={
$0(){return A.al(this.a,!1).hA()},
$S:0}
B.bHt.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bHs())},
$S:64}
B.bHs.prototype={
$0(){},
$S:0}
B.bHr.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ab(w,0,!1).en(v)
u.z=v>3e7?x:C.lp}},
$S:0}
B.crt.prototype={
$3(d,e,f){return D.ckf},
$S:z+3}
B.cru.prototype={
$2(d,e){var x=null,w=this.a.gKk().x
w===$&&A.b()
return A.cb(x,A.x(x,x,C.r,C.u6,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:261}
B.crv.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jf)return C.ao
x=t===C.aaY
t=x?C.cz:C.dU
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(C.MQ,A.bj(u,!0,u,A.eY(!1,u,!0,A.x(u,A.O(A.a([D.azC,A.x(u,A.h(v,u,u,u,u,A.aI(u,u,x?C.cR:C.co,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u),C.r,u,u,new A.J(t,u,u,w,u,u,C.x),u,u,u,C.dm,u,u,u)],y.p),C.v,C.h,C.l,0,u),C.r,u,G.hZ,D.afI,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,this.a.d.gbBF(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.c9O.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.aoX}x=e.c
if(x!=null){w=new B.aya(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kV(new B.c9N(this.a,e))},
$S:z+5}
B.c9N.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b7_(u,e)
v.a.toString
x=u.f
v=A.aj(1/0,e.a,e.b)
u=A.aj(1/0,e.c,e.d)
w=A.uV(A.Ga(A.JB(C.K,A.aK($.HU().avg(),x.b,x.a),C.r,C.bF),new A.af(v,u)),C.y,null)
return w},
$S:107}
B.bhy.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.C(0,d)},
$S:1378}
B.bhz.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xf(d)},
$S:68}
B.bhA.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpH(d))},
$S:1379}
B.bhB.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bpM(d))},
$S:122}
B.bAD.prototype={
$1(d){return d.c},
$S:1380};(function aliases(){var x=B.ak9.prototype
x.aOZ=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.aeQ.prototype,"gDa",0,0,null,["$1$announce","$0"],["Db","kn"],1,0,0)
var t
w(t=B.afs.prototype,"gDa","kn",0)
w(t,"gaTi","Qn",0)
w(B.abm.prototype,"gDa","kn",0)
v(B.agi.prototype,"gb80","DM",2)
u(B,"dM4","dui",6)
w(t=B.a4P.prototype,"gbBF","tK",0)
w(t,"geF","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.M,[B.avk,B.TR,B.xM,B.bAC])
v(A.bu,[B.cKW,B.cKT,B.cKU,B.cKV,B.b4G,B.bHt,B.crt,B.crv,B.c9O,B.bhy,B.bhz,B.bhA,B.bhB,B.bAD])
u(B.Ji,A.ew)
v(A.H,[B.aeP,B.afr,B.UN,B.a4M])
v(A.a_,[B.aSS,B.aSX,B.aT0,B.aSQ])
u(B.aeQ,B.aSS)
v(A.bL,[B.cah,B.cag,B.cab,B.cae,B.cad,B.caf,B.cac,B.cgq,B.cgr,B.bVu,B.bHs,B.bHr])
u(B.afs,B.aSX)
v(A.L,[B.adc,B.P7,B.ae2,B.abW,B.ahc,B.aiP,B.aiz,B.aG4,B.Xa,B.aya])
u(B.abl,A.dC)
u(B.aSw,A.dw)
u(B.abm,B.aSw)
u(B.ak9,B.aT0)
u(B.agi,B.ak9)
v(A.cK,[B.cru,B.c9N])
u(B.aEw,A.qs)
u(B.apv,A.fg)
u(B.aJ4,B.aSQ)
u(B.a4P,A.d3)
x(B.aSw,A.en)
x(B.aSS,A.en)
x(B.aSX,A.en)
x(B.aT0,A.en)
w(B.ak9,A.i1)
x(B.aSQ,A.en)})()
A.br(b.typeUniverse,JSON.parse('{"aeP":{"H":[],"e":[],"f":[]},"afr":{"H":[],"e":[],"f":[]},"abl":{"H":[],"e":[],"f":[]},"Ji":{"H":[],"e":[],"f":[]},"aeQ":{"a_":["aeP"],"en":[]},"afs":{"a_":["afr"],"en":[]},"adc":{"L":[],"e":[],"f":[]},"P7":{"L":[],"e":[],"f":[]},"ae2":{"L":[],"e":[],"f":[]},"abW":{"L":[],"e":[],"f":[]},"ahc":{"L":[],"e":[],"f":[]},"aiP":{"L":[],"e":[],"f":[]},"aiz":{"L":[],"e":[],"f":[]},"aG4":{"L":[],"e":[],"f":[]},"abm":{"a_":["abl"],"en":[]},"UN":{"H":[],"e":[],"f":[]},"Xa":{"L":[],"e":[],"f":[]},"agi":{"a_":["UN"],"en":[]},"aEw":{"aV":[]},"a4M":{"H":[],"e":[],"f":[]},"aJ4":{"a_":["a4M"],"en":[]},"a4P":{"d3":["xM"],"aV":[]},"aya":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{D:x("cH"),x:x("F<~>"),k:x("r<kM>"),G:x("r<TR>"),v:x("r<fF>"),S:x("r<+at,partner(ab,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a3<@,@>"),w:x("du"),Y:x("TR"),N:x("c"),n:x("lp<xM>"),J:x("lq<mA>"),q:x("dl"),z:x("@"),r:x("t<TR>?"),g:x("t<@>?"),X:x("M?"),t:x("avk?"),E:x("rt?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.af_=new A.dN(C.tE,C.aa,C.tE,C.aa)
D.afI=new A.J(null,null,D.af_,null,null,null,C.x)
D.coH=new B.aiz("S\xf3 funciona na tua conta",!0,null)
D.aja=new A.f6(C.K,null,null,D.coH,null)
D.c4g=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cag=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4g,C.a4,null,null,null,null,null,null)
D.bKv=new A.S(C.hx,D.cag,null)
D.ajf=new A.f6(C.K,null,null,D.bKv,null)
D.aoW=new A.pi(C.co,!0,D.ajf,null)
D.aoX=new A.pi(C.an,!0,null,null)
D.aqd=new B.apv(0,0,"noDuplicates")
D.aqe=new B.apv(1,1,"normal")
D.pN=new A.kr(0.5,0.5,null,null,C.fa,null)
D.cfO=new A.D("Lanterna",null,C.cc,null,null,null,null,null,null,null)
D.azC=new A.bJ(1,C.at,D.cfO,null)
D.clV=new B.ae2("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bPW=new B.UN(420,!0,null,null)
D.beO=x([D.clV,C.R,D.bPW],y.p)
D.brE=x([C.tz],y.k)
D.cpn=x([],y.k)
D.bzp=x([],y.G)
D.bIV=new A.K(16,2)
D.aC1=new A.b0(57911,"MaterialIcons",null,!1)
D.aCw=new A.b8(D.aC1,null,C.t,null,null,null)
D.bKe=new A.S(C.MN,D.aCw,null)
D.ccl=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cc,null,null,null,null,null,null,null)
D.bKr=new A.S(C.pW,D.ccl,null)
D.cgF=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.cc,null,null,null,null,null,null,null)
D.bKO=new A.S(C.fW,D.cgF,null)
D.ckW=new B.aEw(null)
D.apO=new A.qr(D.ckW,null,C.aR,null,null)
D.bPh=new A.eF(0,0,0,0,null,null,D.apO,null)
D.ya=new A.b6(14,14)
D.bQF=new A.X("Bilhete",!1)
D.bRc=new A.X("Organizas",!1)
D.bRM=new A.X("Por entrar",!1)
D.bSa=new A.X("Sem bilhete pago",!1)
D.bXe=new A.kZ(186,186,8,C.fU,0,null)
D.c8A=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null)
D.bYz=new A.bF(D.c8A,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c7A=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cc,C.a4,null,null,null,null,null,null)
D.caq=new A.D("Entrada",null,C.hS,null,null,null,null,null,null,null)
D.cev=new A.D("Sem liga\xe7\xe3o",null,C.L,null,null,null,null,null,null,null)
D.ceR=new A.D("\xc0 procura de um QR\u2026",null,C.hR,null,null,null,null,null,null,null)
D.cgo=new A.D("Um QR para todos os eventos",null,C.L,null,null,null,null,null,null,null)
D.ck8=new B.abl(null)
D.ckf=new B.Xa(null)
D.ckG=new B.abW("D\xc1 ENTRADA EM",null)
D.ckH=new B.abW("HOJE",null)
D.clW=new B.ae2("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cn0=new B.aeP(null)
D.cng=new B.afr(null)})()};
(a=>{a["4Q2q1lb+OoOm3QBOcIpykurZKb0="]=a.current})($__dart_deferred_initializers__);