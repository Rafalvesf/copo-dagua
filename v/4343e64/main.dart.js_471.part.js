((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,C={
cyB(d){return C.dvO(d)},
dvO(d){var x=0,w=A.n(y.S),v,u=2,t=[],s,r,q,p,o
var $async$cyB=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d==null){v=0
x=1
break}u=4
r=$.R().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.b1("other_organizers_count",A.Q(["p_wedding_id",d],y.N,q),q),$async$cyB)
case 7:s=f
q=A.aR(s)
r=q==null?null:B.j.G(q)
if(r==null)r=0
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
v=0
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cyB,w)},
aQP(d,e,f){var x=0,w=A.n(y.u),v,u
var $async$aQP=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:x=3
return A.d(C.cyB(e),$async$aQP)
case 3:u=h
if(d.e==null){v=null
x=1
break}v=A.ha(!0,new C.cuM(u,f),d,y.y)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aQP,w)},
cuM:function cuM(d,e){this.a=d
this.b=e},
cuK:function cuK(d){this.a=d},
cuL:function cuL(d){this.a=d},
drw(d){var x,w,v,u,t,s,r,q,p=null,o=J.a5(d),n=y.h,m=n.a(o.h(d,"partner_profiles")),l=n.a(o.h(d,"quote_requests")),k=m==null,j=k?p:J.h(m,"partner_profile_categories")
y.g.a(j)
x=j==null?B.an:j
j=J.a5(x)
w=j.gY(x)?p:n.a(J.h(y.P.a(j.gN(x)),"partner_categories"))
n=l==null
v=A.M(n?p:J.h(l,"event_date"))
j=A.a2(o.h(d,"id"))
u=A.a2(n?p:J.h(l,"wedding_id"))
n=A.M(k?p:J.h(m,"business_name"))
if(n==null)n="Parceiro"
k=A.M(o.h(d,"partner_id"))
A.M(w==null?p:J.h(w,"label_pt"))
t=A.a2(o.h(d,"title"))
A.M(o.h(d,"description"))
s=A.dA(o.h(d,"price"))
r=A.dA(o.h(d,"deposit_amount"))
q=v==null?p:A.dc(v)
o=A.e0(o.h(d,"deposit_refundable"))
return new C.lY(j,u,n,k,t,s,r,q,o!==!1)},
aiv(d,e){var x=0,w=A.n(y.H),v,u,t
var $async$aiv=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:t=$.R().b
t===$&&A.b()
v=y.z
x=2
return A.d(t.b1("accept_proposal",A.Q(["p_proposal_id",d],y.N,v),v),$async$aiv)
case 2:u=g
x=e&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(G.aRt(u,!0),$async$aiv)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aiv,w)},
aiG(d){var x=0,w=A.n(y.T),v,u,t
var $async$aiG=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.R().b
t===$&&A.b()
x=3
return A.d(t.P("proposals").aG(0,"status").V("id",d).dM(),$async$aiG)
case 3:u=f
v=A.M(u==null?null:J.h(u,"status"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aiG,w)},
cA1:function cA1(){},
cA0:function cA0(){},
lY:function lY(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.w=i
_.x=j
_.y=k
_.z=l},
Ys(d,e,f,g){return C.dwG(d,e,f,g)},
dwG(d,e,f,g){var x=0,w=A.n(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j
var $async$Ys=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(A.cB(null,new C.cAC(e),!0,d,!0,!0,null,y.I),$async$Ys)
case 3:l=i
if(l==null){v=!1
x=1
break}s=null
r=null
q=null
s=l.a
r=l.b
q=l.c
u=5
o=$.R().b
o===$&&A.b()
n=y.z
x=8
return A.d(o.b1("reject_proposal",A.Q(["p_proposal_id",f,"p_reason",s,"p_message",q],y.N,n),n),$async$Ys)
case 8:u=2
x=7
break
case 5:u=4
k=t.pop()
if(d.e!=null)d.R(y.q).f.a5(D.bVi)
v=!1
x=1
break
x=7
break
case 4:x=2
break
case 7:u=10
p=A.a(["Recus\xe1mos a proposta. Motivo: "+A.q(r)+"."],y.s)
if(q!=null)J.bM(p,q)
x=13
return A.d(g.$1(J.la(p,"\n")),$async$Ys)
case 13:u=2
x=12
break
case 10:u=9
j=t.pop()
x=12
break
case 9:x=2
break
case 12:v=!0
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ys,w)},
cAC:function cAC(d){this.a=d},
La:function La(d,e){this.c=d
this.a=e},
aJy:function aJy(d){var _=this
_.d=null
_.e=d
_.c=_.a=null},
cfU:function cfU(d,e){this.a=d
this.b=e},
cfT:function cfT(d,e){this.a=d
this.b=e},
cfV:function cfV(d,e){this.a=d
this.b=e},
cfS:function cfS(d){this.a=d},
OK(d,e,f){return C.dvH(d,e,f)},
dvH(a0,a1,a2){var x=0,w=A.n(y.a),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$OK=A.j(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:f={}
f.a=f.b=f.c=null
u=4
l=$.R().b
l===$&&A.b()
k=y.N
j=y.z
x=7
return A.d(l.b1("booking_extra_options",A.Q(["p_booking_id",a1],k,j),j),$async$OK)
case 7:s=a4
r=A.a([],y.t)
l=y.g.a(s)
l=J.ay(l==null?B.an:l)
i=y.f
while(l.t()){q=l.gE(l)
J.bM(r,J.hr(i.a(q),k,j))}h=r
f.c=h
if(h.length===0){v=null
x=1
break}r=$.R().b
r===$&&A.b()
x=8
return A.d(r.P("bookings").aG(0,"total_amount, deposit_amount").V("id",a1).dO(0),$async$OK)
case 8:p=a4
f.b=A.dA(J.h(p,"total_amount"))
f.a=A.dA(J.h(p,"deposit_amount"))
u=2
x=6
break
case 4:u=3
e=t.pop()
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:if(a0.e==null){v=null
x=1
break}x=9
return A.d(A.cB(null,new C.cyq(f,a2),!0,a0,!0,!0,null,y.C),$async$OK)
case 9:o=a4
if(o!=null){r=o
r=r.gY(r)}else r=!0
if(r){v=null
x=1
break}u=11
r=$.R().b
r===$&&A.b()
l=y.N
k=y.z
x=14
return A.d(r.b1("add_booking_extras",A.Q(["p_booking_id",a1,"p_extra_ids",o.bz(0)],l,k),k),$async$OK)
case 14:n=a4
m=J.hr(y.f.a(n),l,k)
k=A.dA(J.h(m,"total"))
l=A.dA(J.h(m,"deposit"))
v=new A.a6(k,l)
x=1
break
u=2
x=13
break
case 11:u=10
d=t.pop()
if(a0.e!=null)a0.R(y.q).f.a5(D.bVF)
v=null
x=1
break
x=13
break
case 10:x=2
break
case 13:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$OK,w)},
cyq:function cyq(d,e){this.a=d
this.b=e},
Nb:function Nb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDh:function aDh(d){this.d=d
this.c=this.a=null},
bOY:function bOY(d){this.a=d},
bOZ:function bOZ(){},
bP_:function bP_(d,e){this.a=d
this.b=e},
bOX:function bOX(d,e){this.a=d
this.b=e},
bP0:function bP0(d){this.a=d},
bP1:function bP1(d,e){this.a=d
this.b=e}},D,G
J=c[1]
A=c[0]
B=c[2]
E=c[200]
F=c[395]
C=a.updateHolder(c[69],C)
D=c[192]
G=c[106]
C.lY.prototype={}
C.La.prototype={
S(){return new C.aJy(new A.aH(B.am,$.ae()))}}
C.aJy.prototype={
m(){var x=this.e
x.a0$=$.ae()
x.W$=0
this.aa()},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=y.p,j=A.a([A.S(A.a([A.a7(A.E(A.a([D.c8i,B.ar,A.i(m.a.c,l,l,l,l,B.a3,l,l,l)],k),B.I,B.k,B.p,0,B.w),1),B.ak,F.v3],k),B.I,B.k,B.p,0,l,l),B.a7,D.c5Q,B.Y],k)
for(x=0;x<4;++x){w={}
v=D.VB[x]
w.a=null
u=v.a
w.a=u
t=v.c
s=m.d===u
r=s?$.aj:B.ag
q=new A.b_(22,22)
if(s)p=l
else{o=new A.be(B.P,1.5,B.af,-1)
p=new A.e8(o,o,o,o)}n=s?A.C(l,l,B.r,l,l,new A.L($.aj,l,l,l,l,l,B.aF),l,12,l,l,l,l,12):l
p=A.C(B.O,n,B.r,l,l,new A.L(B.u,l,p,l,l,l,B.aF),l,22,l,l,l,l,22)
n=s?B.u:B.z
v=A.a([A.i(v.b,l,l,l,l,new A.H(!0,n,l,l,l,l,16,B.F,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],k)
if(t.length!==0){n=m.d===w.a?B.u.c_(0.85):B.P
v.push(A.i(t,l,l,l,l,new A.H(!0,n,l,l,l,l,13,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l))}v=A.ff(l,A.S(A.a([p,B.ak,new A.bT(1,B.av,A.E(v,B.I,B.k,B.p,0,B.w),l)],k),B.x,B.k,B.p,0,l,l),l,B.aL,new A.L(r,l,l,new A.bY(q,q,q,q),l,l,B.y),B.ei,l,l,l,B.b9,l)
j.push(new A.T(B.cS,new A.kg(new A.pg(l,l,l,l,l,s,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.a8,l,l,l,l),!1,!1,l,!1,!1,new A.hC(v,new C.cfU(w,m),l,l),l),l))}j.push(B.Y)
j.push(D.c6v)
j.push(B.Y)
k=m.a.c
j.push(A.cR(l,B.aa,!1,l,!0,B.A,l,A.cT(),m.e,l,l,l,l,l,2,A.ja(l,new A.ey(4,A.X(22),B.ab),l,B.b9,l,l,"",l,!0,new A.ey(4,A.X(22),B.ab),l,l,l,l,l,B.ag,!0,l,l,l,l,new A.ey(4,A.X(22),B.cz),l,l,l,l,l,l,l,l,l,"Uma palavra para "+k+"\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.a1,!0,l,!0,l,!1,l,B.aN,l,l,l,l,l,l,500,l,5,2,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.ay,l,l,l,l,l,l,l,l,l,l,l,B.jA,!0,B.as,l,B.iH,l,l,l,l))
j.push(B.Y)
j.push(A.i(m.a.c+" recebe o motivo e a mensagem na conversa.",l,l,l,l,B.a3,l,l,l))
j.push(B.bi)
k=m.d==null?l:new C.cfV(m,d)
j.push(A.aM(A.bB(D.c5C,k,A.cc(B.z,B.z.c_(0.35),B.u,B.u,l,l,B.a9,l,l,B.fZ)),52,l))
return A.eg(A.E(j,B.J,B.k,B.U,0,B.w),B.A,l,B.ay,l,B.a2)}}
C.Nb.prototype={
S(){return new C.aDh(A.aJ(y.N))}}
C.aDh.prototype={
u(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="id",a0=f.a,a1=a0.e,a2=a0.d,a3=a1>=a2-0.005,a4=a2<=0?1:a1/a2
a0=a0.c
x=new A.a4(a0,new C.bOY(f),A.a8(a0).i("a4<1>")).dA(0,0,new C.bOZ())
w=f.a.d+x
v=a3?w:A.j3(B.j.a4(w*a4,2))
a0=y.p
a1=A.S(A.a([A.a7(A.E(A.a([D.c5k,B.ar,A.i("Aceitaste a proposta. "+f.a.f+" tem extras para o teu pedido.",e,e,e,e,B.a3,e,e,e)],a0),B.I,B.k,B.p,0,B.w),1),B.ak,F.v3],a0),B.I,B.k,B.p,0,e,e)
a2=A.X(22)
u=A.a([],a0)
for(t=A.fH(f.a.c,0,y.P),s=J.ay(t.a),r=t.b,t=new A.cM(s,r,A.u(t).i("cM<1>")),q=y.g,p=f.d,o=y.j;t.t();){n={}
m=t.c
m=m>=0?new A.a6(r+m,s.gE(s)):A.ah(A.ci())
n.a=null
l=n.a=m.b
k=J.a5(l)
j=p.n(0,k.h(l,d))
m=m.a===0?e:B.tb
k=p.n(0,k.h(l,d))?$.aj:B.u
if(p.n(0,J.h(n.a,d)))i=e
else{h=new A.be(B.P,1.5,B.af,-1)
i=new A.e8(h,h,h,h)}g=p.n(0,J.h(n.a,d))?E.Do:e
i=A.C(e,g,B.r,e,e,new A.L(k,e,i,e,e,e,B.aF),e,22,e,e,e,e,22)
k=A.a([A.i(A.a2(J.h(n.a,"name")),e,e,e,e,B.aD,e,e,e)],a0)
g=q.a(J.h(n.a,"details"))
if(J.ev(g==null?B.an:g))k.push(A.i(J.la(o.a(J.h(n.a,"details"))," \xb7 "),e,e,e,e,B.a3,e,e,e))
m=A.C(e,A.S(A.a([i,B.ak,new A.bT(1,B.av,A.E(k,B.I,B.k,B.U,0,B.w),e),B.aw,A.i("+ "+A.aX(A.dA(J.h(n.a,"amount")),!1),e,e,e,e,B.aD,e,e,e)],a0),B.x,B.k,B.p,0,e,e),B.r,e,B.kP,m,e,e,e,e,e,e,e)
u.push(new A.kg(new A.pg(e,e,e,e,e,j,!0,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,B.a8,e,e,e,e),!1,!1,e,!1,!1,new A.hC(m,new C.bP_(n,f),e,e),e))}a1=A.a([a1,B.a7,A.C(e,A.E(u,B.x,B.k,B.p,0,B.w),B.r,e,e,new A.L(B.ag,e,e,a2,e,e,B.y),e,e,e,B.e2,e,e,e),B.a7],a0)
if(!a3)a1.push(A.S(A.a([D.ays,A.i(A.aX(w,!1),e,e,e,e,B.a3,e,e,e)],a0),B.x,B.k,B.p,0,e,e))
a1.push(B.az)
a1.push(A.S(A.a([A.a7(A.i(a3?"A pagar agora":"Sinal ("+B.j.aH(a4*100)+" %) agora",e,e,e,e,B.a3,e,e,e),1),A.i(A.aX(v,!0),e,e,e,e,B.cs,e,e,e)],a0),B.x,B.k,B.p,0,e,e))
a1.push(E.IR)
a1.push(B.bi)
a1.push(A.S(A.a([A.a7(A.aZ(A.C(B.O,D.c4_,B.r,e,e,D.bSE,e,52,e,e,e,e,e),new C.bP0(a5),e),1),B.ax,A.a7(A.aZ(A.C(B.O,A.i("Continuar \xb7 "+A.aX(v,!0),1,e,e,e,B.a8P,e,e,e),B.r,e,e,B.a6I,e,52,e,e,e,e,e),new C.bP1(f,a5),e),2)],a0),B.x,B.k,B.p,0,e,e))
return A.eg(A.E(a1,B.J,B.k,B.U,0,B.w),B.A,e,B.ay,e,B.a2)}}
var z=a.updateTypes(["G<t<lY>>(au)","La(N)","Nb(N)","lY(a3<c,@>)"])
C.cuM.prototype={
$1(d){var x=null,w=", a conversa, os pagamentos e as tarefas. Se for uma surpresa, guarda-a s\xf3 para ti.",v=this.b
return new A.eU(D.cbQ,A.i(this.a>0?"Os outros organizadores podem ver a contrata\xe7\xe3o de "+v+w:"Se convidares outro organizador, ele vai poder ver a contrata\xe7\xe3o de "+v+w,x,x,x,x,x,x,x,x),A.a([A.cm(D.c4i,x,x,new C.cuK(d),x,x),A.bB(D.c5Z,new C.cuL(d),x)],y.p),x)},
$S:20}
C.cuK.prototype={
$0(){return A.at(this.a,!1).ar(!0)},
$S:0}
C.cuL.prototype={
$0(){return A.at(this.a,!1).ar(!1)},
$S:0}
C.cA1.prototype={
$1(d){return this.aF6(d)},
aF6(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=y.T
t=d.L(A.cH($.bb(),new C.cA0(),y.D,u),u)
if(t==null){v=D.Vd
x=1
break}u=$.R().b
u===$&&A.b()
s=J
x=3
return A.d(u.P("proposals").aG(0,"id, partner_id, title, description, price, deposit_amount, deposit_refundable, quote_requests(wedding_id, event_date), partner_profiles(business_name, partner_profile_categories(partner_categories(label_pt)))").V("couple_id",t).V("status","sent").du(0,"created_at",!1),$async$$1)
case 3:v=s.d0(f,C.duR(),y.M).bz(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+0}
C.cA0.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.cAC.prototype={
$1(d){return new C.La(this.a,null)},
$S:z+1}
C.cfU.prototype={
$0(){var x=this.b
return x.q(new C.cfT(this.a,x))},
$S:0}
C.cfT.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
C.cfV.prototype={
$0(){var x,w=this.a,v=B.e.pi(D.VB,new C.cfS(w)),u=B.f.D(w.e.a.a)
w=A.at(this.b,!1)
x=u.length===0?null:u
w.ar(new A.cg(v.a,v.b,x))},
$S:0}
C.cfS.prototype={
$1(d){return d.a===this.a.d},
$S:1260}
C.cyq.prototype={
$1(d){var x=this.a
return new C.Nb(x.c,x.b,x.a,this.b,null)},
$S:z+2}
C.bOY.prototype={
$1(d){return this.a.d.n(0,J.h(d,"id"))},
$S:39}
C.bOZ.prototype={
$2(d,e){return d+A.dA(J.h(e,"amount"))},
$S:158}
C.bP_.prototype={
$0(){var x=this.b
return x.q(new C.bOX(this.a,x))},
$S:0}
C.bOX.prototype={
$0(){var x,w=this.b.d,v=this.a,u=w.n(0,J.h(v.a,"id"))
v=v.a
x=J.a5(v)
return u?w.J(0,x.h(v,"id")):w.B(0,A.a2(x.h(v,"id")))},
$S:0}
C.bP0.prototype={
$0(){return A.at(this.a,!1).ar(A.aJ(y.N))},
$S:0}
C.bP1.prototype={
$0(){return A.at(this.b,!1).ar(A.eF(this.a.d,y.N))},
$S:0};(function installTearOffs(){var x=a._static_1
x(C,"duR","drw",3)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bx,[C.cuM,C.cA1,C.cA0,C.cAC,C.cfS,C.cyq,C.bOY])
x(A.bS,[C.cuK,C.cuL,C.cfU,C.cfT,C.cfV,C.bP_,C.bOX,C.bP0,C.bP1])
w(C.lY,A.K)
x(A.I,[C.La,C.Nb])
x(A.a1,[C.aJy,C.aDh])
w(C.bOZ,A.cS)})()
A.bu(b.typeUniverse,JSON.parse('{"La":{"I":[],"e":[],"f":[]},"aJy":{"a1":["La"]},"Nb":{"I":[],"e":[],"f":[]},"aDh":{"a1":["Nb"]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cw"),t:x("r<a3<c,@>>"),s:x("r<c>"),p:x("r<e>"),b:x("t<lY>"),j:x("t<@>"),P:x("a3<c,@>"),f:x("a3<@,@>"),M:x("lY"),I:x("+(c,c,c?)"),C:x("bF<c>"),N:x("c"),q:x("dJ"),y:x("z"),z:x("@"),S:x("v"),g:x("t<@>?"),h:x("a3<c,@>?"),a:x("+(U,U)?"),T:x("c?"),u:x("z?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c9R=new A.A("Reserva + extras",null,B.a3,null,null,null,null,null,null,null,null)
D.ays=new A.bT(1,B.av,D.c9R,null)
D.Vd=x([],A.w("r<lY>"))
D.bQ0=new A.cg("price","O pre\xe7o","Ficou acima do que quer\xedamos gastar")
D.bQb=new A.cg("date","A data ou o hor\xe1rio","N\xe3o d\xe1 para o nosso evento")
D.bQi=new A.cg("other_partner","Escolhemos outro parceiro","")
D.bQ1=new A.cg("other","Outro motivo","")
D.VB=x([D.bQ0,D.bQb,D.bQi,D.bQ1],A.w("r<+(c,c,c)>"))
D.bSE=new A.jB(B.u,null,null,null,B.a7B)
D.caa=new A.A("N\xe3o foi poss\xedvel aceitar a proposta. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.a7t=new A.bX(D.caa,null,null,null,null,null,null,null,null,null,null,null,null,B.X,!1,null,null,null,B.A,null)
D.cbi=new A.A("N\xe3o foi poss\xedvel recusar a proposta. Tenta outra vez.",null,null,null,null,null,null,null,null,null,null)
D.bVi=new A.bX(D.cbi,null,null,null,null,null,null,null,null,null,null,null,null,B.X,!1,null,null,null,B.A,null)
D.c5r=new A.A("N\xe3o foi poss\xedvel juntar os extras. Segue sem eles.",null,null,null,null,null,null,null,null,null,null)
D.bVF=new A.bX(D.c5r,null,null,null,null,null,null,null,null,null,null,null,null,B.X,!1,null,null,null,B.A,null)
D.c4_=new A.A("Sem extras",null,B.c1,null,null,null,null,null,null,null,null)
D.c4i=new A.A("S\xf3 para mim",null,null,null,null,null,null,null,null,null,null)
D.c5k=new A.A("Queres juntar alguma coisa?",null,B.by,null,null,null,null,null,null,null,null)
D.c5C=new A.A("Recusar proposta",null,null,null,null,null,null,null,null,null,null)
D.c5Q=new A.A("PORQU\xca?",null,B.bO,null,null,null,null,null,null,null,null)
D.c5Z=new A.A("Partilhar",null,null,null,null,null,null,null,null,null,null)
D.c6v=new A.A("MENSAGEM (OPCIONAL)",null,B.bO,null,null,null,null,null,null,null,null)
D.c8i=new A.A("Recusar a proposta?",null,B.by,null,null,null,null,null,null,null,null)
D.cbQ=new A.A("Partilhar esta contrata\xe7\xe3o?",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dJa","P5",()=>A.eE(new C.cA1(),null,!1,null,null,y.b))})()};
(a=>{a["CII1aLroy7oxXbsuY75iaaPIPbk="]=a.current})($__dart_deferred_initializers__);