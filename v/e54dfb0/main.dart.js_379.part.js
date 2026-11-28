((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,E,F,G,C={
aVf(d){return C.dJ8(d)},
dJ8(a3){var x=0,w=B.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$aVf=B.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:d=30
a0=48
u=4
j=$.Q().b
j===$&&B.b()
x=7
return B.d(j.R("platform_settings").cn(0).V("id",1).dS(0),$async$aVf)
case 7:s=a5
j=B.aI(J.i(s,"cancellation_penalty_days"))
i=j==null?null:A.k.F(j)
d=i==null?30:i
j=B.aI(J.i(s,"deposit_refund_window_hours"))
h=j==null?null:A.k.F(j)
a0=h==null?48:h
u=2
x=6
break
case 4:u=3
a1=t.pop()
x=6
break
case 3:x=2
break
case 6:r=!0
q=null
p=!1
u=9
j=$.Q().b
j===$&&B.b()
x=12
return B.d(j.R("bookings").ak(0,"proposals(deposit_refundable), payments(type, status, paid_at, updated_at)").V("id",a3).cm(),$async$aVf)
case 12:o=a5
j=o
n=j==null?null:J.i(j,"proposals")
if(y.j.b(n))f=J.dr(n)?null:J.fx(n)
else f=n
m=f
j=y.Y.a(m)
j=B.dZ(j==null?null:J.i(j,"deposit_refundable"))
r=j!==!1
j=o
j=j==null?null:J.i(j,"payments")
y.g.a(j)
j=J.ap(j==null?A.am:j)
while(j.t()){l=j.gE(j)
if(!J.o(J.i(l,"status"),"paid"))continue
if(J.o(J.i(l,"type"),"deposit")){e=J.i(l,"paid_at")
if(e==null)e=J.i(l,"updated_at")
k=B.d5(B.Z(e==null?"":e))
if(k!=null)q=k}else p=!0}u=2
x=11
break
case 9:u=8
a2=t.pop()
x=11
break
case 8:x=2
break
case 11:v=new C.axi(q,a0)
x=1
break
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$aVf,w)},
axi:function axi(d,e){this.b=d
this.e=e},
alK(d,e){return C.dKA(d,e)},
dKA(d,e){var x=0,w=B.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m
var $async$alK=B.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&B.b()
q=y.z
x=7
return B.d(r.aM("booking_cancel_state",B.T(["p_booking_id",d],y.R,q),q),$async$alK)
case 7:s=g
if(y.f.b(s)){r=B.aI(J.i(s,"paid"))
if(r==null)r=0
q=J.i(s,"held_until")
q=B.d5(B.q(q==null?"":q))
q=q==null?null:q.dQ()
v=new C.a0V(r,q)
x=1
break}u=2
x=6
break
case 4:u=3
m=t.pop()
x=6
break
case 3:x=2
break
case 6:x=8
return B.d(C.aVf(d),$async$alK)
case 8:o=g
n=o.b
r=n==null
if(r)q=0
else q=e==null?0:e
v=new C.a0V(q,r?null:n.dQ().em(B.ef(0,o.e,0,0,0,0).a))
x=1
break
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$alK,w)},
df1(d){return F.Xp[B.fN(d)-1]+", "+B.aA(d)+" "+A.bn[B.ao(d)-1]+" \xe0s "+A.f.aW(A.j.k(B.id(d)),2,"0")+":"+A.f.aW(A.j.k(B.i_(d)),2,"0")},
dbh(d,e,f,g,h,i,j,k,l){return new C.C_(k,j,g,l,i,h,f,e,d,null)},
a0V:function a0V(d,e){this.a=d
this.b=e},
C_:function C_(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.a=m},
aE4:function aE4(d){this.d=d
this.c=this.a=null},
bNr:function bNr(d){this.a=d},
bNs:function bNs(d,e){this.a=d
this.b=e},
bNt:function bNt(d,e){this.a=d
this.b=e},
bNu:function bNu(d,e){this.a=d
this.b=e},
bNv:function bNv(d,e){this.a=d
this.b=e},
bNw:function bNw(d){this.a=d},
adm:function adm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ags:function ags(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aOB:function aOB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},D,H
J=c[1]
B=c[0]
A=c[2]
E=c[247]
F=c[416]
G=c[232]
C=a.updateHolder(c[75],C)
D=c[415]
H=c[248]
C.axi.prototype={}
C.a0V.prototype={}
C.C_.prototype={
P(){return new C.aE4(new B.aF(A.al,$.aa()))}}
C.aE4.prototype={
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a5()},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.r,i=j.a,h=j.b,g=h!=null,f=!g||new B.ac(Date.now(),0,!1).f7(h),e=l.a,d=e.e,a0=d&&!f,a1=!d&&!f&&i>0
if(d)if(a0){x="O sinal j\xe1 \xe9 teu"
w="Passaram 48 h desde que o cliente pagou o sinal e ele deixou de estar cativo. A partir daqui, a reserva s\xf3 pode ser cancelada pelo organizador."}else{w=i>0&&g?"O sinal ainda est\xe1 cativo (at\xe9 "+C.df1(h)+"). Se cancelares, o cliente recebe os "+B.aM(i,!0)+" de volta.":"O cliente ainda n\xe3o pagou nada. Se cancelares, a reserva fica sem efeito."
x="O cliente recebe tudo de volta"}else if(a1){x="Perdes o sinal de "+B.aM(i,!0)
w="Pagaste o sinal h\xe1 mais de 48 h: j\xe1 \xe9 de "+l.a.f+". Se cancelares, n\xe3o \xe9 devolvido."}else if(i>0&&g){w="Pagaste o sinal h\xe1 menos de 48 h. Se cancelares at\xe9 "+C.df1(h)+", recebes o sinal todo de volta."
x="O sinal ainda \xe9 devolvido"}else{w="Se cancelares, "+e.f+" \xe9 avisado e a reserva fica sem efeito."
x="Ainda n\xe3o pagaste nada"}h=!a0
v=!h||a1?A.fl:A.fk
if(a0)u="Se n\xe3o conseguires mesmo fazer o evento, fala com a equipa \xc0 Nossa!."
else{e=l.a
if(e.e)u="O cliente \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
else{g=i>0&&f&&g?"Depois dessa hora, o sinal deixa de ser devolvido. Esta a\xe7\xe3o n\xe3o pode ser desfeita.":e.f+" \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
u=g}}g=B.a([],y.L)
e=i>0
if(e){d=l.a.e?"Sinal pago pelo cliente":"Sinal pago"
g.push(new B.a0(d,B.aM(i,!0)))}if(l.a.e&&e)g.push(new B.a0("Devolvido ao cliente",B.aM(i,!0)))
d=l.a
if(!d.e){t=d.w
t=(t==null?0:t)>0}else t=!1
if(t){d=d.w
d.toString
g.push(new B.a0("Resto ("+B.aM(d,!0)+")","J\xe1 n\xe3o pagas"))}d=B.ax(a2,k,y.w).w
t=l.a
s=y.p
t=B.O(B.a([B.a4(B.x(B.a([B.h(t.c,k,k,k,k,A.bl,k,k,k),A.aX,B.h(t.d,k,k,k,k,A.O,k,k,k)],s),A.H,A.h,A.l,0,A.u),1),A.ah,new C.aOB(A.em,"Fechar",new C.bNr(a2),k)],s),A.v,A.h,A.l,0,k,k)
r=B.a([B.qr(B.O(B.a([B.z(k,k,A.r,k,k,new B.I(B.Q8(v),k,k,k,k,k,A.aw),k,8,A.dC,k,k,k,8),A.ah,B.a4(B.x(B.a([B.h(x,k,k,k,k,A.ab,k,k,k),A.aX,B.h(w,k,k,k,k,A.c4,k,k,k)],s),A.H,A.h,A.l,0,A.u),1)],s),A.H,A.h,A.l,0,k,k),A.t,E.iP,16,v)],s)
q=l.a
if(q.e)q=q.y!=null||q.z!=null
else q=!1
if(q){q=B.W(22)
p=B.a([],s)
if(l.a.y!=null)p.push(new C.adm("Propor outro dia","O sinal fica para o dia novo",new C.bNs(l,a2),k))
o=l.a
if(o.y!=null&&o.z!=null)p.push(A.lH)
if(l.a.z!=null)p.push(new C.adm("Pedir altera\xe7\xe3o","Pessoas, hora ou o que est\xe1 inclu\xeddo",new C.bNt(l,a2),k))
A.e.n(r,B.a([A.a1,D.c9h,A.R,B.z(k,B.x(p,A.v,A.h,A.l,0,A.u),A.r,k,k,new B.I(A.a7,k,k,q,k,k,A.y),k,k,k,A.cA,k,k,k)],s))}if(g.length!==0&&h){q=B.W(22)
p=B.a([],s)
for(n=0;o=g.length,n<o;++n){o=n===o-1?k:A.hv
m=g[n]
p.push(B.z(k,B.O(B.a([new B.bI(1,A.ar,B.h(m.a,k,k,k,k,A.O,k,k,k),k),B.h(m.b,k,k,k,k,A.bF,k,k,k)],s),A.v,A.h,A.l,0,k,k),A.r,k,k,new B.I(k,k,o,k,k,k,A.y),k,48,k,k,k,k,k))}g=B.a([A.a1,D.ccZ,A.R,B.z(k,B.x(p,A.v,A.h,A.l,0,A.u),A.r,k,k,new B.I(A.a7,k,k,q,k,k,A.y),k,k,k,A.cA,k,k,k)],s)
if(!l.a.e&&e)A.e.n(g,B.a([A.R,B.O(B.a([D.aAp,B.h(B.aM(a1?0:i,!0),k,k,k,k,A.bZ,k,k,k)],s),A.eT,A.h,A.l,0,A.aM,k)],s))
A.e.n(r,g)}if(h){h=l.a
g=h.e
e=B.h(g?"PORQU\xca":"PORQU\xca (SE QUISERES)",k,k,k,k,A.aO,k,k,k)
q=B.W(26)
A.e.n(r,B.a([A.a1,e,A.R,B.z(A.bg,B.cs(k,A.a8,!1,k,!0,A.z,k,B.cu(),l.d,k,k,k,k,k,2,B.iK(k,A.bu,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,A.mG,g?"Diz ao cliente porque cancelas":"Diz a "+h.f+" o que mudou",k,k,k,k,!0,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),A.X,!0,k,!0,k,!1,k,A.aD,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,A.aq,k,k,k,k,k,k,k,k,k,k,k,A.fg,!0,A.at,k,A.b2,k,k,k,k),A.r,k,k,new B.I(A.a7,k,k,q,k,k,A.y),k,52,k,A.fY,k,k,k)],s))}r.push(A.a1)
r.push(B.h(u,k,k,k,k,A.c4,k,k,k))
h=B.dR(B.x(r,A.G,A.h,A.l,0,A.u),A.z,k,A.ei,k,k,A.a2)
if(a0)g="Falar com a equipa"
else g=a1?"Cancelar e perder o sinal":"Cancelar reserva"
g=B.a4(new C.ags(g,!0,a0?new C.bNu(l,a2):new C.bNv(l,a2),k),1)
e=a0?"OK":"Manter reserva"
return B.bF(!0,new B.R(new B.a2(0,0,0,d.f.d),B.x(B.a([new B.R(A.jL,t,k),new B.dc(1,A.b6,h,k),new B.R(G.qE,B.O(B.a([g,A.ag,B.a4(new C.ags(e,!1,new C.bNw(a2),k),1)],s),A.v,A.h,A.l,0,k,k),k)],s),A.G,A.h,A.K,0,A.u),k),k,A.a_,!1)}}
C.adm.prototype={
u(d){var x=null,w=y.p
return B.eC(!1,x,!0,new B.e4(H.uc,B.O(B.a([B.a4(B.x(B.a([B.h(this.c,x,x,x,x,A.ab,x,x,x),B.h(this.d,x,x,x,x,A.O,x,x,x)],w),A.H,A.h,A.K,0,A.u),1),D.aEq],w),A.v,A.h,A.l,0,x,x),x),x,!0,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,x)}}
C.ags.prototype={
u(d){var x,w=null,v=this.e,u=this.c
if(this.d){x=B.fK(w,w,A.t,w,w,w,w,w,w,A.A,w,w,A.i8,w,A.ad,A.c9,w,w,A.d1,w)
x=B.h9(B.h(u,2,w,w,w,w,A.a6,w,w),v,x)
v=x}else{x=B.co(A.A,w,w,A.t,w,A.i8,A.ad,w,w,A.d1)
x=B.bG(B.h(u,2,w,w,w,w,A.a6,w,w),v,x)
v=x}return B.aH(v,52,w)}}
C.aOB.prototype={
u(d){var x=null
return B.b8(x,!0,x,B.cM(x,B.z(A.L,B.b6(this.c,A.t,x,x,20),A.r,x,x,A.cg,x,44,x,x,x,x,44),A.X,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,A.aL),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,A.a5,x)}}
var z=a.updateTypes([])
C.bNr.prototype={
$0(){return B.am(this.a,!1).bu()},
$S:0}
C.bNs.prototype={
$0(){B.am(this.b,!1).bu()
this.a.a.y.$0()},
$S:0}
C.bNt.prototype={
$0(){B.am(this.b,!1).bu()
this.a.a.z.$0()},
$S:0}
C.bNu.prototype={
$0(){B.am(this.b,!1).bu()
var x=this.a.a.x
if(x!=null)x.$0()},
$S:0}
C.bNv.prototype={
$0(){return B.am(this.b,!1).af(A.f.C(this.a.d.a.a))},
$S:0}
C.bNw.prototype={
$0(){return B.am(this.a,!1).bu()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.L,[C.axi,C.a0V])
w(C.C_,B.G)
w(C.aE4,B.Y)
x(B.bQ,[C.bNr,C.bNs,C.bNt,C.bNu,C.bNv,C.bNw])
x(B.J,[C.adm,C.ags,C.aOB])})()
B.bs(b.typeUniverse,JSON.parse('{"C_":{"G":[],"e":[],"f":[]},"aE4":{"Y":["C_"]},"adm":{"J":[],"e":[],"f":[]},"ags":{"J":[],"e":[],"f":[]},"aOB":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{D:x("a0V"),L:x("r<+(c,c)>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("di"),N:x("axi"),R:x("c"),z:x("@"),g:x("t<@>?"),Y:x("a5<@,@>?")}})();(function constants(){D.cih=new B.D("Recebes de volta",null,A.O,null,null,null,null,null,null,null,null)
D.aAp=new B.bI(1,A.ar,D.cih,null)
D.aEq=new B.b7(A.PE,null,A.V,null,null,null)
D.c9h=new B.D("O QUE PODES FAZER",null,A.aO,null,null,null,null,null,null,null,null)
D.ccZ=new B.D("AS CONTAS",null,A.aO,null,null,null,null,null,null,null,null)})()};
(a=>{a["1z54D60x7Kyp04D8bxC0WpwPUcY="]=a.current})($__dart_deferred_initializers__);