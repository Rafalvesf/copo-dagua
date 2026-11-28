((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
aUj(d){return C.dIP(d)},
dIP(a3){var x=0,w=A.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$aUj=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:d=30
a0=48
u=4
j=$.Q().b
j===$&&A.b()
x=7
return A.d(j.P("platform_settings").cl(0).V("id",1).e9(0),$async$aUj)
case 7:s=a5
j=A.aD(J.i(s,"cancellation_penalty_days"))
i=j==null?null:B.k.F(j)
d=i==null?30:i
j=A.aD(J.i(s,"deposit_refund_window_hours"))
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
return A.d(j.P("bookings").al(0,"proposals(deposit_refundable), payments(type, status, paid_at, updated_at)").V("id",a3).cj(),$async$aUj)
case 12:o=a5
j=o
n=j==null?null:J.i(j,"proposals")
if(y.j.b(n))f=J.dg(n)?null:J.fi(n)
else f=n
m=f
j=y.Y.a(m)
j=A.dW(j==null?null:J.i(j,"deposit_refundable"))
r=j!==!1
j=o
j=j==null?null:J.i(j,"payments")
y.g.a(j)
j=J.ao(j==null?B.ai:j)
while(j.q()){l=j.gE(j)
if(!J.o(J.i(l,"status"),"paid"))continue
if(J.o(J.i(l,"type"),"deposit")){e=J.i(l,"paid_at")
if(e==null)e=J.i(l,"updated_at")
k=A.d2(A.Y(e==null?"":e))
if(k!=null)q=k}else p=!0}u=2
x=11
break
case 9:u=8
a2=t.pop()
x=11
break
case 8:x=2
break
case 11:v=new C.awE(q,a0)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUj,w)},
awE:function awE(d,e){this.b=d
this.e=e},
akV(d,e){return C.dKh(d,e)},
dKh(d,e){var x=0,w=A.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m
var $async$akV=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aH("booking_cancel_state",A.R(["p_booking_id",d],y.R,q),q),$async$akV)
case 7:s=g
if(y.f.b(s)){r=A.aD(J.i(s,"paid"))
if(r==null)r=0
q=J.i(s,"held_until")
q=A.d2(A.p(q==null?"":q))
q=q==null?null:q.dH()
v=new C.a0y(r,q)
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
return A.d(C.aUj(d),$async$akV)
case 8:o=g
n=o.b
r=n==null
if(r)q=0
else q=e==null?0:e
v=new C.a0y(q,r?null:n.dH().em(A.ej(0,o.e,0,0,0,0).a))
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akV,w)},
deu(d){return F.Wu[A.fF(d)-1]+", "+A.aE(d)+" "+B.bg[A.aw(d)-1]+" \xe0s "+B.f.aT(B.j.k(A.hZ(d)),2,"0")+":"+B.f.aT(B.j.k(A.hO(d)),2,"0")},
daK(d,e,f,g,h,i,j,k,l){return new C.BL(k,j,g,l,i,h,f,e,d,null)},
a0y:function a0y(d,e){this.a=d
this.b=e},
BL:function BL(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDo:function aDo(d){this.d=d
this.c=this.a=null},
bN0:function bN0(d){this.a=d},
bN1:function bN1(d,e){this.a=d
this.b=e},
bN2:function bN2(d,e){this.a=d
this.b=e},
bN3:function bN3(d,e){this.a=d
this.b=e},
bN4:function bN4(d,e){this.a=d
this.b=e},
bN5:function bN5(d){this.a=d},
acJ:function acJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afN:function afN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aNF:function aNF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},D,H
J=c[1]
A=c[0]
B=c[2]
E=c[242]
F=c[412]
G=c[227]
C=a.updateHolder(c[75],C)
D=c[411]
H=c[243]
C.awE.prototype={}
C.a0y.prototype={}
C.BL.prototype={
R(){return new C.aDo(new A.aF(B.ak,$.aa()))}}
C.aDo.prototype={
m(){var x=this.d
x.Z$=$.aa()
x.W$=0
this.a6()},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.r,i=j.a,h=j.b,g=h!=null,f=!g||new A.ab(Date.now(),0,!1).fe(h),e=l.a,d=e.e,a0=d&&!f,a1=!d&&!f&&i>0
if(d)if(a0){x="O sinal j\xe1 \xe9 teu"
w="Passaram 48 h desde que o cliente pagou o sinal e ele deixou de estar cativo. A partir daqui, a reserva s\xf3 pode ser cancelada pelo organizador."}else{w=i>0&&g?"O sinal ainda est\xe1 cativo (at\xe9 "+C.deu(h)+"). Se cancelares, o cliente recebe os "+A.aJ(i,!0)+" de volta.":"O cliente ainda n\xe3o pagou nada. Se cancelares, a reserva fica sem efeito."
x="O cliente recebe tudo de volta"}else if(a1){x="Perdes o sinal de "+A.aJ(i,!0)
w="Pagaste o sinal h\xe1 mais de 48 h: j\xe1 \xe9 de "+l.a.f+". Se cancelares, n\xe3o \xe9 devolvido."}else if(i>0&&g){w="Pagaste o sinal h\xe1 menos de 48 h. Se cancelares at\xe9 "+C.deu(h)+", recebes o sinal todo de volta."
x="O sinal ainda \xe9 devolvido"}else{w="Se cancelares, "+e.f+" \xe9 avisado e a reserva fica sem efeito."
x="Ainda n\xe3o pagaste nada"}h=!a0
v=!h||a1?B.f6:B.f5
if(a0)u="Se n\xe3o conseguires mesmo fazer o evento, fala com a equipa \xc0 Nossa!."
else{e=l.a
if(e.e)u="O cliente \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
else{g=i>0&&f&&g?"Depois dessa hora, o sinal deixa de ser devolvido. Esta a\xe7\xe3o n\xe3o pode ser desfeita.":e.f+" \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
u=g}}g=A.a([],y.L)
e=i>0
if(e){d=l.a.e?"Sinal pago pelo cliente":"Sinal pago"
g.push(new A.X(d,A.aJ(i,!0)))}if(l.a.e&&e)g.push(new A.X("Devolvido ao cliente",A.aJ(i,!0)))
d=l.a
if(!d.e){t=d.w
t=(t==null?0:t)>0}else t=!1
if(t){d=d.w
d.toString
g.push(new A.X("Resto ("+A.aJ(d,!0)+")","J\xe1 n\xe3o pagas"))}d=A.aT(a2,k,y.w).w
t=l.a
s=y.p
t=A.O(A.a([A.a5(A.y(A.a([A.h(t.c,k,k,k,k,B.bi,k,k),B.aU,A.h(t.d,k,k,k,k,B.L,k,k)],s),B.G,B.h,B.l),1),B.ae,new C.aNF(B.ek,"Fechar",new C.bN0(a2),k)],s),B.v,B.h,B.l,0,k)
r=A.a([A.pc(A.O(A.a([A.x(k,k,B.r,k,k,new A.I(A.HH(v),k,k,k,k,k,B.ap),k,8,B.dk,k,k,k,8),B.ae,A.a5(A.y(A.a([A.h(x,k,k,k,k,B.a9,k,k),B.aU,A.h(w,k,k,k,k,B.c_,k,k)],s),B.G,B.h,B.l),1)],s),B.G,B.h,B.l,0,k),B.t,E.i4,16,v)],s)
q=l.a
if(q.e)q=q.y!=null||q.z!=null
else q=!1
if(q){q=A.W(22)
p=A.a([],s)
if(l.a.y!=null)p.push(new C.acJ("Propor outro dia","O sinal fica para o dia novo",new C.bN1(l,a2),k))
o=l.a
if(o.y!=null&&o.z!=null)p.push(B.lm)
if(l.a.z!=null)p.push(new C.acJ("Pedir altera\xe7\xe3o","Pessoas, hora ou o que est\xe1 inclu\xeddo",new C.bN2(l,a2),k))
B.e.n(r,A.a([B.a_,D.ccH,B.P,A.x(k,A.y(p,B.v,B.h,B.l),B.r,k,k,new A.I(B.a4,k,k,q,k,k,B.x),k,k,k,B.cs,k,k,k)],s))}if(g.length!==0&&h){q=A.W(22)
p=A.a([],s)
for(n=0;o=g.length,n<o;++n){o=n===o-1?k:B.fp
m=g[n]
p.push(A.x(k,A.O(A.a([new A.bJ(1,B.at,A.h(m.a,k,k,k,k,B.L,k,k),k),A.h(m.b,k,k,k,k,B.bx,k,k)],s),B.v,B.h,B.l,0,k),B.r,k,k,new A.I(k,k,o,k,k,k,B.x),k,48,k,k,k,k,k))}g=A.a([B.a_,D.cc3,B.P,A.x(k,A.y(p,B.v,B.h,B.l),B.r,k,k,new A.I(B.a4,k,k,q,k,k,B.x),k,k,k,B.cs,k,k,k)],s)
if(!l.a.e&&e)B.e.n(g,A.a([B.P,A.O(A.a([D.azw,A.h(A.aJ(a1?0:i,!0),k,k,k,k,B.c3,k,k)],s),B.ed,B.h,B.l,0,B.aJ)],s))
B.e.n(r,g)}if(h){h=l.a
g=h.e
e=A.h(g?"PORQU\xca":"PORQU\xca (SE QUISERES)",k,k,k,k,B.aH,k,k)
q=A.W(26)
B.e.n(r,A.a([B.a_,e,B.P,A.x(B.bc,A.cs(k,B.a6,!1,k,!0,B.y,k,A.cu(),l.d,k,k,k,k,k,2,A.j8(k,B.br,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.mj,g?"Diz ao cliente porque cancelas":"Diz a "+h.f+" o que mudou",k,k,k,k,!0,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.U,!0,k,!0,k,!1,k,B.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.al,k,k,k,k,k,k,k,k,k,k,k,B.fj,!0,B.au,k,B.b0,k,k,k,k),B.r,k,k,new A.I(B.a4,k,k,q,k,k,B.x),k,52,k,B.fs,k,k,k)],s))}r.push(B.a_)
r.push(A.h(u,k,k,k,k,B.c_,k,k))
h=A.dS(A.y(r,B.E,B.h,B.l),B.y,k,B.eg,k,B.av)
if(a0)g="Falar com a equipa"
else g=a1?"Cancelar e perder o sinal":"Cancelar reserva"
g=A.a5(new C.afN(g,!0,a0?new C.bN3(l,a2):new C.bN4(l,a2),k),1)
e=a0?"OK":"Manter reserva"
return A.bB(!0,new A.S(new A.a4(0,0,0,d.f.d),A.y(A.a([new A.S(B.jF,t,k),new A.di(1,B.bb,h,k),new A.S(G.q0,A.O(A.a([g,B.ab,A.a5(new C.afN(e,!1,new C.bN5(a2),k),1)],s),B.v,B.h,B.l,0,k),k)],s),B.E,B.h,B.J),k),k,B.Z,!1)}}
C.acJ.prototype={
u(d){var x=null,w=y.p
return A.eY(!1,x,!0,new A.ec(H.tJ,A.O(A.a([A.a5(A.y(A.a([A.h(this.c,x,x,x,x,B.a9,x,x),A.h(this.d,x,x,x,x,B.L,x,x)],w),B.G,B.h,B.J),1),D.aDe],w),B.v,B.h,B.l,0,x),x),x,!0,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,x)}}
C.afN.prototype={
u(d){var x,w=null,v=this.e,u=this.c
if(this.d){x=A.fM(w,w,B.t,w,w,w,w,w,w,B.z,w,w,B.i3,w,B.aa,B.c7,w,w,B.cY,w)
x=new A.am(A.hk(A.h(u,2,w,w,w,w,B.a3,w),v,x),w)
v=x}else{x=A.cc(B.z,w,w,B.t,w,B.i3,B.aa,w,w,B.cY)
x=new A.am(A.bD(A.h(u,2,w,w,w,w,B.a3,w),v,x),w)
v=x}return A.aK(v,52,w)}}
C.aNF.prototype={
u(d){var x=null
return A.bj(x,!0,x,A.cp(x,A.x(B.K,A.b9(this.c,B.t,x,x,20),B.r,x,x,B.bV,x,44,x,x,x,x,44),B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,B.aD),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
var z=a.updateTypes([])
C.bN0.prototype={
$0(){return A.al(this.a,!1).bk()},
$S:0}
C.bN1.prototype={
$0(){A.al(this.b,!1).bk()
this.a.a.y.$0()},
$S:0}
C.bN2.prototype={
$0(){A.al(this.b,!1).bk()
this.a.a.z.$0()},
$S:0}
C.bN3.prototype={
$0(){A.al(this.b,!1).bk()
var x=this.a.a.x
if(x!=null)x.$0()},
$S:0}
C.bN4.prototype={
$0(){return A.al(this.b,!1).af(B.f.B(this.a.d.a.a))},
$S:0}
C.bN5.prototype={
$0(){return A.al(this.a,!1).bk()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.M,[C.awE,C.a0y])
w(C.BL,A.H)
w(C.aDo,A.a_)
x(A.bL,[C.bN0,C.bN1,C.bN2,C.bN3,C.bN4,C.bN5])
x(A.L,[C.acJ,C.afN,C.aNF])})()
A.br(b.typeUniverse,JSON.parse('{"BL":{"H":[],"e":[],"f":[]},"aDo":{"a_":["BL"]},"acJ":{"L":[],"e":[],"f":[]},"afN":{"L":[],"e":[],"f":[]},"aNF":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.A
return{D:x("a0y"),L:x("r<+(c,c)>"),p:x("r<e>"),j:x("t<@>"),f:x("a3<@,@>"),w:x("du"),N:x("awE"),R:x("c"),z:x("@"),g:x("t<@>?"),Y:x("a3<@,@>?")}})();(function constants(){D.ccU=new A.D("Recebes de volta",null,B.L,null,null,null,null,null,null,null)
D.azw=new A.bJ(1,B.at,D.ccU,null)
D.aDe=new A.b8(B.ON,null,B.W,null,null,null)
D.cc3=new A.D("AS CONTAS",null,B.aH,null,null,null,null,null,null,null)
D.ccH=new A.D("O QUE PODES FAZER",null,B.aH,null,null,null,null,null,null,null)})()};
(a=>{a["NwdzjkDVJMkoSMmKnRZpdTC/Wds="]=a.current})($__dart_deferred_initializers__);