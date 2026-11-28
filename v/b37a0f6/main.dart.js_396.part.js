((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
aVb(d){return C.dIV(d)},
dIV(a3){var x=0,w=A.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$aVb=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:d=30
a0=48
u=4
j=$.Q().b
j===$&&A.b()
x=7
return A.d(j.P("platform_settings").cn(0).V("id",1).dS(0),$async$aVb)
case 7:s=a5
j=A.aI(J.i(s,"cancellation_penalty_days"))
i=j==null?null:B.k.F(j)
d=i==null?30:i
j=A.aI(J.i(s,"deposit_refund_window_hours"))
h=j==null?null:B.k.F(j)
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
j===$&&A.b()
x=12
return A.d(j.P("bookings").ak(0,"proposals(deposit_refundable), payments(type, status, paid_at, updated_at)").V("id",a3).cm(),$async$aVb)
case 12:o=a5
j=o
n=j==null?null:J.i(j,"proposals")
if(y.j.b(n))f=J.dr(n)?null:J.fx(n)
else f=n
m=f
j=y.Y.a(m)
j=A.dY(j==null?null:J.i(j,"deposit_refundable"))
r=j!==!1
j=o
j=j==null?null:J.i(j,"payments")
y.g.a(j)
j=J.ap(j==null?B.am:j)
while(j.t()){l=j.gE(j)
if(!J.o(J.i(l,"status"),"paid"))continue
if(J.o(J.i(l,"type"),"deposit")){e=J.i(l,"paid_at")
if(e==null)e=J.i(l,"updated_at")
k=A.d5(A.Z(e==null?"":e))
if(k!=null)q=k}else p=!0}u=2
x=11
break
case 9:u=8
a2=t.pop()
x=11
break
case 8:x=2
break
case 11:v=new C.axg(q,a0)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aVb,w)},
axg:function axg(d,e){this.b=d
this.e=e},
alG(d,e){return C.dKm(d,e)},
dKm(d,e){var x=0,w=A.n(y.p),v,u=2,t=[],s,r,q,p,o,n,m
var $async$alG=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aM("booking_cancel_state",A.T(["p_booking_id",d],y.R,q),q),$async$alG)
case 7:s=g
if(y.f.b(s)){r=A.aI(J.i(s,"paid"))
if(r==null)r=0
q=J.i(s,"held_until")
q=A.d5(A.q(q==null?"":q))
q=q==null?null:q.dQ()
v=new C.a0R(r,q)
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
return A.d(C.aVb(d),$async$alG)
case 8:o=g
n=o.b
r=n==null
if(r)q=0
else q=e==null?0:e
v=new C.a0R(q,r?null:n.dQ().em(A.ee(0,o.e,0,0,0,0).a))
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$alG,w)},
deO(d){return F.Xo[A.fN(d)-1]+", "+A.aA(d)+" "+B.bn[A.ao(d)-1]+" \xe0s "+B.f.aX(B.j.k(A.id(d)),2,"0")+":"+B.f.aX(B.j.k(A.i_(d)),2,"0")},
db3(d,e,f,g,h,i,j){return new C.C_(i,h,e,j,g,f,d,null)},
a0R:function a0R(d,e){this.a=d
this.b=e},
C_:function C_(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aE2:function aE2(d){this.d=d
this.c=this.a=null},
bNj:function bNj(d){this.a=d},
bNk:function bNk(d,e){this.a=d
this.b=e},
bNl:function bNl(d,e){this.a=d
this.b=e},
bNm:function bNm(d){this.a=d},
agn:function agn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aOz:function aOz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},D
J=c[1]
A=c[0]
B=c[2]
E=c[247]
F=c[416]
G=c[232]
C=a.updateHolder(c[75],C)
D=c[415]
C.axg.prototype={}
C.a0R.prototype={}
C.C_.prototype={
R(){return new C.aE2(new A.aF(B.al,$.aa()))}}
C.aE2.prototype={
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a5()},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.r,i=j.a,h=j.b,g=h!=null,f=!g||new A.ac(Date.now(),0,!1).f7(h),e=l.a,d=e.e,a0=d&&!f,a1=!d&&!f&&i>0
if(d)if(a0){x="O sinal j\xe1 \xe9 teu"
w="Passaram 48 h desde que o cliente pagou o sinal e ele deixou de estar cativo. A partir daqui, a reserva s\xf3 pode ser cancelada pelo organizador."}else{w=i>0&&g?"O sinal ainda est\xe1 cativo (at\xe9 "+C.deO(h)+"). Se cancelares, o cliente recebe os "+A.aM(i,!0)+" de volta.":"O cliente ainda n\xe3o pagou nada. Se cancelares, a reserva fica sem efeito."
x="O cliente recebe tudo de volta"}else if(a1){x="Perdes o sinal de "+A.aM(i,!0)
w="Pagaste o sinal h\xe1 mais de 48 h: j\xe1 \xe9 de "+l.a.f+". Se cancelares, n\xe3o \xe9 devolvido."}else if(i>0&&g){w="Pagaste o sinal h\xe1 menos de 48 h. Se cancelares at\xe9 "+C.deO(h)+", recebes o sinal todo de volta."
x="O sinal ainda \xe9 devolvido"}else{w="Se cancelares, "+e.f+" \xe9 avisado e a reserva fica sem efeito."
x="Ainda n\xe3o pagaste nada"}h=!a0
v=!h||a1?B.fl:B.fk
if(a0)u="Se n\xe3o conseguires mesmo fazer o evento, fala com a equipa \xc0 Nossa!."
else{e=l.a
if(e.e)u="O cliente \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
else{g=i>0&&f&&g?"Depois dessa hora, o sinal deixa de ser devolvido. Esta a\xe7\xe3o n\xe3o pode ser desfeita.":e.f+" \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
u=g}}g=A.a([],y.L)
e=i>0
if(e){d=l.a.e?"Sinal pago pelo cliente":"Sinal pago"
g.push(new A.a0(d,A.aM(i,!0)))}if(l.a.e&&e)g.push(new A.a0("Devolvido ao cliente",A.aM(i,!0)))
d=l.a
if(!d.e){t=d.w
t=(t==null?0:t)>0}else t=!1
if(t){d=d.w
d.toString
g.push(new A.a0("Resto ("+A.aM(d,!0)+")","J\xe1 n\xe3o pagas"))}d=A.ax(a2,k,y.w).w
t=l.a
s=y.D
t=A.O(A.a([A.a4(A.y(A.a([A.h(t.c,k,k,k,k,B.bl,k,k,k),B.aX,A.h(t.d,k,k,k,k,B.O,k,k,k)],s),B.H,B.h,B.l,0,B.u),1),B.ah,new C.aOz(B.em,"Fechar",new C.bNj(a2),k)],s),B.w,B.h,B.l,0,k,k)
r=A.a([A.qq(A.O(A.a([A.z(k,k,B.r,k,k,new A.I(A.Q8(v),k,k,k,k,k,B.aw),k,8,B.dC,k,k,k,8),B.ah,A.a4(A.y(A.a([A.h(x,k,k,k,k,B.ab,k,k,k),B.aX,A.h(w,k,k,k,k,B.c6,k,k,k)],s),B.H,B.h,B.l,0,B.u),1)],s),B.H,B.h,B.l,0,k,k),B.t,E.iP,16,v)],s)
if(g.length!==0&&h){q=A.W(22)
p=A.a([],s)
for(o=0;n=g.length,o<n;++o){n=o===n-1?k:B.hw
m=g[o]
p.push(A.z(k,A.O(A.a([new A.bI(1,B.ar,A.h(m.a,k,k,k,k,B.O,k,k,k),k),A.h(m.b,k,k,k,k,B.bF,k,k,k)],s),B.w,B.h,B.l,0,k,k),B.r,k,k,new A.I(k,k,n,k,k,k,B.y),k,48,k,k,k,k,k))}g=A.a([B.a1,D.ccU,B.R,A.z(k,A.y(p,B.w,B.h,B.l,0,B.u),B.r,k,k,new A.I(B.a7,k,k,q,k,k,B.y),k,k,k,B.cL,k,k,k)],s)
if(!l.a.e&&e)B.e.n(g,A.a([B.R,A.O(A.a([D.aAn,A.h(A.aM(a1?0:i,!0),k,k,k,k,B.bZ,k,k,k)],s),B.eT,B.h,B.l,0,B.aM,k)],s))
B.e.n(r,g)}if(h){h=l.a
g=h.e
e=A.h(g?"PORQU\xca":"PORQU\xca (SE QUISERES)",k,k,k,k,B.aP,k,k,k)
q=A.W(26)
B.e.n(r,A.a([B.a1,e,B.R,A.z(B.bg,A.cw(k,B.a8,!1,k,!0,B.z,k,A.cz(),l.d,k,k,k,k,k,2,A.iK(k,B.bA,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.mF,g?"Diz ao cliente porque cancelas":"Diz a "+h.f+" o que mudou",k,k,k,k,!0,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.X,!0,k,!0,k,!1,k,B.aF,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aq,k,k,k,k,k,k,k,k,k,k,k,B.fg,!0,B.at,k,B.b3,k,k,k,k),B.r,k,k,new A.I(B.a7,k,k,q,k,k,B.y),k,52,k,B.fY,k,k,k)],s))}r.push(B.a1)
r.push(A.h(u,k,k,k,k,B.c6,k,k,k))
h=A.dR(A.y(r,B.G,B.h,B.l,0,B.u),B.z,k,B.ei,k,k,B.a2)
if(a0)g="Falar com a equipa"
else g=a1?"Cancelar e perder o sinal":"Cancelar reserva"
g=A.a4(new C.agn(g,!0,a0?new C.bNk(l,a2):new C.bNl(l,a2),k),1)
e=a0?"OK":"Manter reserva"
return A.bF(!0,new A.R(new A.a2(0,0,0,d.f.d),A.y(A.a([new A.R(B.jL,t,k),new A.dc(1,B.b6,h,k),new A.R(G.qE,A.O(A.a([g,B.ag,A.a4(new C.agn(e,!1,new C.bNm(a2),k),1)],s),B.w,B.h,B.l,0,k,k),k)],s),B.G,B.h,B.K,0,B.u),k),k,B.a_,!1)}}
C.agn.prototype={
u(d){var x,w=null,v=this.e,u=this.c
if(this.d){x=A.fK(w,w,B.t,w,w,w,w,w,w,B.A,w,w,B.iO,w,B.ad,B.c9,w,w,B.d1,w)
x=A.h8(A.h(u,2,w,w,w,w,B.a6,w,w),v,x)
v=x}else{x=A.co(B.A,w,w,B.t,w,B.iO,B.ad,w,w,B.d1)
x=A.bG(A.h(u,2,w,w,w,w,B.a6,w,w),v,x)
v=x}return A.aH(v,52,w)}}
C.aOz.prototype={
u(d){var x=null
return A.b7(x,!0,x,A.cM(x,A.z(B.L,A.b6(this.c,B.t,x,x,20),B.r,x,x,B.cg,x,44,x,x,x,x,44),B.X,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,B.aL),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
var z=a.updateTypes([])
C.bNj.prototype={
$0(){return A.am(this.a,!1).bv()},
$S:0}
C.bNk.prototype={
$0(){A.am(this.b,!1).bv()
var x=this.a.a.x
if(x!=null)x.$0()},
$S:0}
C.bNl.prototype={
$0(){return A.am(this.b,!1).af(B.f.C(this.a.d.a.a))},
$S:0}
C.bNm.prototype={
$0(){return A.am(this.a,!1).bv()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[C.axg,C.a0R])
w(C.C_,A.G)
w(C.aE2,A.Y)
x(A.bQ,[C.bNj,C.bNk,C.bNl,C.bNm])
x(A.J,[C.agn,C.aOz])})()
A.bs(b.typeUniverse,JSON.parse('{"C_":{"G":[],"e":[],"f":[]},"aE2":{"Y":["C_"]},"agn":{"J":[],"e":[],"f":[]},"aOz":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{p:x("a0R"),L:x("r<+(c,c)>"),D:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("di"),N:x("axg"),R:x("c"),z:x("@"),g:x("t<@>?"),Y:x("a5<@,@>?")}})();(function constants(){D.cia=new A.D("Recebes de volta",null,B.O,null,null,null,null,null,null,null,null)
D.aAn=new A.bI(1,B.ar,D.cia,null)
D.ccU=new A.D("AS CONTAS",null,B.aP,null,null,null,null,null,null,null,null)})()};
(a=>{a["Q2enXSKKw6xSrgV4JRS9yZVIQWs="]=a.current})($__dart_deferred_initializers__);