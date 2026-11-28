((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
aUC(d){return C.dJ2(d)},
dJ2(a3){var x=0,w=A.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$aUC=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:d=30
a0=48
u=4
j=$.Q().b
j===$&&A.b()
x=7
return A.d(j.S("platform_settings").cu(0).X("id",1).e9(0),$async$aUC)
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
return A.d(j.S("bookings").an(0,"proposals(deposit_refundable), payments(type, status, paid_at, updated_at)").X("id",a3).cl(),$async$aUC)
case 12:o=a5
j=o
n=j==null?null:J.i(j,"proposals")
if(y.j.b(n))f=J.de(n)?null:J.fs(n)
else f=n
m=f
j=y.Y.a(m)
j=A.dW(j==null?null:J.i(j,"deposit_refundable"))
r=j!==!1
j=o
j=j==null?null:J.i(j,"payments")
y.g.a(j)
j=J.ao(j==null?B.aj:j)
while(j.q()){l=j.gE(j)
if(!J.o(J.i(l,"status"),"paid"))continue
if(J.o(J.i(l,"type"),"deposit")){e=J.i(l,"paid_at")
if(e==null)e=J.i(l,"updated_at")
k=A.d3(A.a_(e==null?"":e))
if(k!=null)q=k}else p=!0}u=2
x=11
break
case 9:u=8
a2=t.pop()
x=11
break
case 8:x=2
break
case 11:v=new C.awV(q,a0)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUC,w)},
awV:function awV(d,e){this.b=d
this.e=e},
ala(d,e){return C.dKw(d,e)},
dKw(d,e){var x=0,w=A.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m
var $async$ala=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aG("booking_cancel_state",A.R(["p_booking_id",d],y.R,q),q),$async$ala)
case 7:s=g
if(y.f.b(s)){r=A.aD(J.i(s,"paid"))
if(r==null)r=0
q=J.i(s,"held_until")
q=A.d3(A.p(q==null?"":q))
q=q==null?null:q.dJ()
v=new C.a0M(r,q)
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
return A.d(C.aUC(d),$async$ala)
case 8:o=g
n=o.b
r=n==null
if(r)q=0
else q=e==null?0:e
v=new C.a0M(q,r?null:n.dJ().en(A.ei(0,o.e,0,0,0,0).a))
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ala,w)},
deH(d){return F.Wz[A.fI(d)-1]+", "+A.aE(d)+" "+B.bi[A.aw(d)-1]+" \xe0s "+B.f.aT(B.j.k(A.i_(d)),2,"0")+":"+B.f.aT(B.j.k(A.hQ(d)),2,"0")},
daT(d,e,f,g,h,i,j,k,l){return new C.BS(k,j,g,l,i,h,f,e,d,null)},
a0M:function a0M(d,e){this.a=d
this.b=e},
BS:function BS(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDI:function aDI(d){this.d=d
this.c=this.a=null},
bMU:function bMU(d){this.a=d},
bMV:function bMV(d,e){this.a=d
this.b=e},
bMW:function bMW(d,e){this.a=d
this.b=e},
bMX:function bMX(d,e){this.a=d
this.b=e},
bMY:function bMY(d,e){this.a=d
this.b=e},
bMZ:function bMZ(d){this.a=d},
acZ:function acZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ag2:function ag2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aNY:function aNY(d,e,f,g){var _=this
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
C.awV.prototype={}
C.a0M.prototype={}
C.BS.prototype={
P(){return new C.aDI(new A.aF(B.ak,$.aa()))}}
C.aDI.prototype={
m(){var x=this.d
x.Z$=$.aa()
x.V$=0
this.a6()},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.r,i=j.a,h=j.b,g=h!=null,f=!g||new A.ad(Date.now(),0,!1).fg(h),e=l.a,d=e.e,a0=d&&!f,a1=!d&&!f&&i>0
if(d)if(a0){x="O sinal j\xe1 \xe9 teu"
w="Passaram 48 h desde que o cliente pagou o sinal e ele deixou de estar cativo. A partir daqui, a reserva s\xf3 pode ser cancelada pelo organizador."}else{w=i>0&&g?"O sinal ainda est\xe1 cativo (at\xe9 "+C.deH(h)+"). Se cancelares, o cliente recebe os "+A.aJ(i,!0)+" de volta.":"O cliente ainda n\xe3o pagou nada. Se cancelares, a reserva fica sem efeito."
x="O cliente recebe tudo de volta"}else if(a1){x="Perdes o sinal de "+A.aJ(i,!0)
w="Pagaste o sinal h\xe1 mais de 48 h: j\xe1 \xe9 de "+l.a.f+". Se cancelares, n\xe3o \xe9 devolvido."}else if(i>0&&g){w="Pagaste o sinal h\xe1 menos de 48 h. Se cancelares at\xe9 "+C.deH(h)+", recebes o sinal todo de volta."
x="O sinal ainda \xe9 devolvido"}else{w="Se cancelares, "+e.f+" \xe9 avisado e a reserva fica sem efeito."
x="Ainda n\xe3o pagaste nada"}h=!a0
v=!h||a1?B.f5:B.f4
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
t=A.O(A.a([A.a5(A.x(A.a([A.h(t.c,k,k,k,k,B.bj,k,k),B.aU,A.h(t.d,k,k,k,k,B.L,k,k)],s),B.G,B.h,B.l),1),B.ae,new C.aNY(B.el,"Fechar",new C.bMU(a2),k)],s),B.u,B.h,B.l,0,k)
r=A.a([A.pc(A.O(A.a([A.w(k,k,B.r,k,k,new A.J(A.HS(v),k,k,k,k,k,B.ap),k,8,B.dl,k,k,k,8),B.ae,A.a5(A.x(A.a([A.h(x,k,k,k,k,B.a9,k,k),B.aU,A.h(w,k,k,k,k,B.c_,k,k)],s),B.G,B.h,B.l),1)],s),B.G,B.h,B.l,0,k),B.t,E.i7,16,v)],s)
q=l.a
if(q.e)q=q.y!=null||q.z!=null
else q=!1
if(q){q=A.W(22)
p=A.a([],s)
if(l.a.y!=null)p.push(new C.acZ("Propor outro dia","O sinal fica para o dia novo",new C.bMV(l,a2),k))
o=l.a
if(o.y!=null&&o.z!=null)p.push(B.ln)
if(l.a.z!=null)p.push(new C.acZ("Pedir altera\xe7\xe3o","Pessoas, hora ou o que est\xe1 inclu\xeddo",new C.bMW(l,a2),k))
B.e.p(r,A.a([B.a_,D.ccT,B.P,A.w(k,A.x(p,B.u,B.h,B.l),B.r,k,k,new A.J(B.a3,k,k,q,k,k,B.x),k,k,k,B.cs,k,k,k)],s))}if(g.length!==0&&h){q=A.W(22)
p=A.a([],s)
for(n=0;o=g.length,n<o;++n){o=n===o-1?k:B.fp
m=g[n]
p.push(A.w(k,A.O(A.a([new A.bK(1,B.at,A.h(m.a,k,k,k,k,B.L,k,k),k),A.h(m.b,k,k,k,k,B.bx,k,k)],s),B.u,B.h,B.l,0,k),B.r,k,k,new A.J(k,k,o,k,k,k,B.x),k,48,k,k,k,k,k))}g=A.a([B.a_,D.ccf,B.P,A.w(k,A.x(p,B.u,B.h,B.l),B.r,k,k,new A.J(B.a3,k,k,q,k,k,B.x),k,k,k,B.cs,k,k,k)],s)
if(!l.a.e&&e)B.e.p(g,A.a([B.P,A.O(A.a([D.azB,A.h(A.aJ(a1?0:i,!0),k,k,k,k,B.c6,k,k)],s),B.ee,B.h,B.l,0,B.aJ)],s))
B.e.p(r,g)}if(h){h=l.a
g=h.e
e=A.h(g?"PORQU\xca":"PORQU\xca (SE QUISERES)",k,k,k,k,B.aH,k,k)
q=A.W(26)
B.e.p(r,A.a([B.a_,e,B.P,A.w(B.bc,A.cs(k,B.a6,!1,k,!0,B.y,k,A.cu(),l.d,k,k,k,k,k,2,A.ja(k,B.b1,k,k,k,k,k,k,!0,B.b1,k,k,k,k,k,k,!1,k,k,k,k,B.b1,k,k,k,k,k,k,k,k,B.mj,g?"Diz ao cliente porque cancelas":"Diz a "+h.f+" o que mudou",k,k,k,k,!0,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.U,!0,k,!0,k,!1,k,B.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.al,k,k,k,k,k,k,k,k,k,k,k,B.fj,!0,B.au,k,B.b0,k,k,k,k),B.r,k,k,new A.J(B.a3,k,k,q,k,k,B.x),k,52,k,B.fs,k,k,k)],s))}r.push(B.a_)
r.push(A.h(u,k,k,k,k,B.c_,k,k))
h=A.dR(A.x(r,B.E,B.h,B.l),B.y,k,B.eh,k,B.av)
if(a0)g="Falar com a equipa"
else g=a1?"Cancelar e perder o sinal":"Cancelar reserva"
g=A.a5(new C.ag2(g,!0,a0?new C.bMX(l,a2):new C.bMY(l,a2),k),1)
e=a0?"OK":"Manter reserva"
return A.bB(!0,new A.S(new A.a4(0,0,0,d.f.d),A.x(A.a([new A.S(B.jG,t,k),new A.dg(1,B.bb,h,k),new A.S(G.q_,A.O(A.a([g,B.ac,A.a5(new C.ag2(e,!1,new C.bMZ(a2),k),1)],s),B.u,B.h,B.l,0,k),k)],s),B.E,B.h,B.J),k),k,B.Z,!1)}}
C.acZ.prototype={
u(d){var x=null,w=y.p
return A.eY(!1,x,!0,new A.ec(H.tH,A.O(A.a([A.a5(A.x(A.a([A.h(this.c,x,x,x,x,B.a9,x,x),A.h(this.d,x,x,x,x,B.L,x,x)],w),B.G,B.h,B.J),1),D.aDi],w),B.u,B.h,B.l,0,x),x),x,!0,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,x)}}
C.ag2.prototype={
u(d){var x,w=null,v=this.e,u=this.c
if(this.d){x=A.fN(w,w,B.t,w,w,w,w,w,w,B.z,w,w,B.i6,w,B.ab,B.c7,w,w,B.cY,w)
x=new A.ak(A.hm(A.h(u,2,w,w,w,w,B.a4,w),v,x),w)
v=x}else{x=A.ce(B.z,w,w,B.t,w,B.i6,B.ab,w,w,B.cY)
x=new A.ak(A.bD(A.h(u,2,w,w,w,w,B.a4,w),v,x),w)
v=x}return A.aK(v,52,w)}}
C.aNY.prototype={
u(d){var x=null
return A.bh(x,!0,x,A.cp(x,A.w(B.K,A.b9(this.c,B.t,x,x,20),B.r,x,x,B.bV,x,44,x,x,x,x,44),B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,B.aE),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
var z=a.updateTypes([])
C.bMU.prototype={
$0(){return A.an(this.a,!1).bj()},
$S:0}
C.bMV.prototype={
$0(){A.an(this.b,!1).bj()
this.a.a.y.$0()},
$S:0}
C.bMW.prototype={
$0(){A.an(this.b,!1).bj()
this.a.a.z.$0()},
$S:0}
C.bMX.prototype={
$0(){A.an(this.b,!1).bj()
var x=this.a.a.x
if(x!=null)x.$0()},
$S:0}
C.bMY.prototype={
$0(){return A.an(this.b,!1).aq(B.f.B(this.a.d.a.a))},
$S:0}
C.bMZ.prototype={
$0(){return A.an(this.a,!1).bj()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.M,[C.awV,C.a0M])
w(C.BS,A.G)
w(C.aDI,A.Z)
x(A.bL,[C.bMU,C.bMV,C.bMW,C.bMX,C.bMY,C.bMZ])
x(A.L,[C.acZ,C.ag2,C.aNY])})()
A.br(b.typeUniverse,JSON.parse('{"BS":{"G":[],"e":[],"f":[]},"aDI":{"Z":["BS"]},"acZ":{"L":[],"e":[],"f":[]},"ag2":{"L":[],"e":[],"f":[]},"aNY":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{D:x("a0M"),L:x("r<+(c,c)>"),p:x("r<e>"),j:x("t<@>"),f:x("a3<@,@>"),w:x("dv"),N:x("awV"),R:x("c"),z:x("@"),g:x("t<@>?"),Y:x("a3<@,@>?")}})();(function constants(){D.cd5=new A.D("Recebes de volta",null,B.L,null,null,null,null,null,null,null)
D.azB=new A.bK(1,B.at,D.cd5,null)
D.aDi=new A.b8(B.OT,null,B.W,null,null,null)
D.ccf=new A.D("AS CONTAS",null,B.aH,null,null,null,null,null,null,null)
D.ccT=new A.D("O QUE PODES FAZER",null,B.aH,null,null,null,null,null,null,null)})()};
(a=>{a["iFemk6GFCY17LDjjuCmR5P9RxPU="]=a.current})($__dart_deferred_initializers__);