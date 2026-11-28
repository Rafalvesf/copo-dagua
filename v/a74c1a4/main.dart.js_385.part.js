((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
aTR(d){return C.dHg(d)},
dHg(a3){var x=0,w=A.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$aTR=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:d=30
a0=48
u=4
j=$.P().b
j===$&&A.b()
x=7
return A.d(j.P("platform_settings").ck(0).U("id",1).dM(0),$async$aTR)
case 7:s=a5
j=A.aC(J.i(s,"cancellation_penalty_days"))
i=j==null?null:B.k.F(j)
d=i==null?30:i
j=A.aC(J.i(s,"deposit_refund_window_hours"))
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
j=$.P().b
j===$&&A.b()
x=12
return A.d(j.P("bookings").ai(0,"proposals(deposit_refundable), payments(type, status, paid_at, updated_at)").U("id",a3).cf(),$async$aTR)
case 12:o=a5
j=o
n=j==null?null:J.i(j,"proposals")
if(y.j.b(n))f=J.de(n)?null:J.fh(n)
else f=n
m=f
j=y.Y.a(m)
j=A.dU(j==null?null:J.i(j,"deposit_refundable"))
r=j!==!1
j=o
j=j==null?null:J.i(j,"payments")
y.g.a(j)
j=J.an(j==null?B.ai:j)
while(j.q()){l=j.gE(j)
if(!J.o(J.i(l,"status"),"paid"))continue
if(J.o(J.i(l,"type"),"deposit")){e=J.i(l,"paid_at")
if(e==null)e=J.i(l,"updated_at")
k=A.d0(A.Y(e==null?"":e))
if(k!=null)q=k}else p=!0}u=2
x=11
break
case 9:u=8
a2=t.pop()
x=11
break
case 8:x=2
break
case 11:v=new C.awk(q,a0)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aTR,w)},
awk:function awk(d,e){this.b=d
this.e=e},
akG(d,e){return C.dII(d,e)},
dII(d,e){var x=0,w=A.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m
var $async$akG=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aG("booking_cancel_state",A.R(["p_booking_id",d],y.R,q),q),$async$akG)
case 7:s=g
if(y.f.b(s)){r=A.aC(J.i(s,"paid"))
if(r==null)r=0
q=J.i(s,"held_until")
q=A.d0(A.p(q==null?"":q))
q=q==null?null:q.dF()
v=new C.a0q(r,q)
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
return A.d(C.aTR(d),$async$akG)
case 8:o=g
n=o.b
r=n==null
if(r)q=0
else q=e==null?0:e
v=new C.a0q(q,r?null:n.dF().ek(A.e9(0,o.e,0,0,0,0).a))
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akG,w)},
dd1(d){return F.Wr[A.fD(d)-1]+", "+A.aD(d)+" "+B.bg[A.av(d)-1]+" \xe0s "+B.f.aT(B.j.k(A.hX(d)),2,"0")+":"+B.f.aT(B.j.k(A.hN(d)),2,"0")},
d9h(d,e,f,g,h,i,j,k,l){return new C.BE(k,j,g,l,i,h,f,e,d,null)},
a0q:function a0q(d,e){this.a=d
this.b=e},
BE:function BE(d,e,f,g,h,i,j,k,l,m){var _=this
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
aD2:function aD2(d){this.d=d
this.c=this.a=null},
bMk:function bMk(d){this.a=d},
bMl:function bMl(d,e){this.a=d
this.b=e},
bMm:function bMm(d,e){this.a=d
this.b=e},
bMn:function bMn(d,e){this.a=d
this.b=e},
bMo:function bMo(d,e){this.a=d
this.b=e},
bMp:function bMp(d){this.a=d},
acz:function acz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afB:function afB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aNe:function aNe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},D,H
J=c[1]
A=c[0]
B=c[2]
E=c[239]
F=c[409]
G=c[224]
C=a.updateHolder(c[75],C)
D=c[408]
H=c[240]
C.awk.prototype={}
C.a0q.prototype={}
C.BE.prototype={
S(){return new C.aD2(new A.aE(B.ak,$.aa()))}}
C.aD2.prototype={
m(){var x=this.d
x.Z$=$.aa()
x.W$=0
this.a7()},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.r,i=j.a,h=j.b,g=h!=null,f=!g||new A.ae(Date.now(),0,!1).fe(h),e=l.a,d=e.e,a0=d&&!f,a1=!d&&!f&&i>0
if(d)if(a0){x="O sinal j\xe1 \xe9 teu"
w="Passaram 48 h desde que o cliente pagou o sinal e ele deixou de estar cativo. A partir daqui, a reserva s\xf3 pode ser cancelada pelo organizador."}else{w=i>0&&g?"O sinal ainda est\xe1 cativo (at\xe9 "+C.dd1(h)+"). Se cancelares, o cliente recebe os "+A.aI(i,!0)+" de volta.":"O cliente ainda n\xe3o pagou nada. Se cancelares, a reserva fica sem efeito."
x="O cliente recebe tudo de volta"}else if(a1){x="Perdes o sinal de "+A.aI(i,!0)
w="Pagaste o sinal h\xe1 mais de 48 h: j\xe1 \xe9 de "+l.a.f+". Se cancelares, n\xe3o \xe9 devolvido."}else if(i>0&&g){w="Pagaste o sinal h\xe1 menos de 48 h. Se cancelares at\xe9 "+C.dd1(h)+", recebes o sinal todo de volta."
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
g.push(new A.X(d,A.aI(i,!0)))}if(l.a.e&&e)g.push(new A.X("Devolvido ao cliente",A.aI(i,!0)))
d=l.a
if(!d.e){t=d.w
t=(t==null?0:t)>0}else t=!1
if(t){d=d.w
d.toString
g.push(new A.X("Resto ("+A.aI(d,!0)+")","J\xe1 n\xe3o pagas"))}d=A.aR(a2,k,y.w).w
t=l.a
s=y.p
t=A.O(A.a([A.a4(A.y(A.a([A.h(t.c,k,k,k,k,B.bj,k,k),B.aU,A.h(t.d,k,k,k,k,B.L,k,k)],s),B.G,B.h,B.l),1),B.af,new C.aNe(B.ei,"Fechar",new C.bMk(a2),k)],s),B.v,B.h,B.l,0,k)
r=A.a([A.p8(A.O(A.a([A.x(k,k,B.r,k,k,new A.I(A.HA(v),k,k,k,k,k,B.ap),k,8,B.dj,k,k,k,8),B.af,A.a4(A.y(A.a([A.h(x,k,k,k,k,B.a9,k,k),B.aU,A.h(w,k,k,k,k,B.bZ,k,k)],s),B.G,B.h,B.l),1)],s),B.G,B.h,B.l,0,k),B.t,E.i2,16,v)],s)
q=l.a
if(q.e)q=q.y!=null||q.z!=null
else q=!1
if(q){q=A.W(22)
p=A.a([],s)
if(l.a.y!=null)p.push(new C.acz("Propor outro dia","O sinal fica para o dia novo",new C.bMl(l,a2),k))
o=l.a
if(o.y!=null&&o.z!=null)p.push(B.lk)
if(l.a.z!=null)p.push(new C.acz("Pedir altera\xe7\xe3o","Pessoas, hora ou o que est\xe1 inclu\xeddo",new C.bMm(l,a2),k))
B.e.n(r,A.a([B.a0,D.cct,B.P,A.x(k,A.y(p,B.v,B.h,B.l),B.r,k,k,new A.I(B.a3,k,k,q,k,k,B.x),k,k,k,B.cr,k,k,k)],s))}if(g.length!==0&&h){q=A.W(22)
p=A.a([],s)
for(n=0;o=g.length,n<o;++n){o=n===o-1?k:B.fm
m=g[n]
p.push(A.x(k,A.O(A.a([new A.bI(1,B.at,A.h(m.a,k,k,k,k,B.L,k,k),k),A.h(m.b,k,k,k,k,B.bx,k,k)],s),B.v,B.h,B.l,0,k),B.r,k,k,new A.I(k,k,o,k,k,k,B.x),k,48,k,k,k,k,k))}g=A.a([B.a0,D.cbQ,B.P,A.x(k,A.y(p,B.v,B.h,B.l),B.r,k,k,new A.I(B.a3,k,k,q,k,k,B.x),k,k,k,B.cr,k,k,k)],s)
if(!l.a.e&&e)B.e.n(g,A.a([B.P,A.O(A.a([D.azq,A.h(A.aI(a1?0:i,!0),k,k,k,k,B.c1,k,k)],s),B.ec,B.h,B.l,0,B.aJ)],s))
B.e.n(r,g)}if(h){h=l.a
g=h.e
e=A.h(g?"PORQU\xca":"PORQU\xca (SE QUISERES)",k,k,k,k,B.aH,k,k)
q=A.W(26)
B.e.n(r,A.a([B.a0,e,B.P,A.x(B.ba,A.cp(k,B.a5,!1,k,!0,B.y,k,A.cr(),l.d,k,k,k,k,k,2,A.j3(k,B.br,k,k,k,k,k,k,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.me,g?"Diz ao cliente porque cancelas":"Diz a "+h.f+" o que mudou",k,k,k,k,!0,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.W,!0,k,!0,k,!1,k,B.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.al,k,k,k,k,k,k,k,k,k,k,k,B.fh,!0,B.au,k,B.b_,k,k,k,k),B.r,k,k,new A.I(B.a3,k,k,q,k,k,B.x),k,52,k,B.fU,k,k,k)],s))}r.push(B.a0)
r.push(A.h(u,k,k,k,k,B.bZ,k,k))
h=A.dR(A.y(r,B.E,B.h,B.l),B.y,k,B.ee,k,B.av)
if(a0)g="Falar com a equipa"
else g=a1?"Cancelar e perder o sinal":"Cancelar reserva"
g=A.a4(new C.afB(g,!0,a0?new C.bMn(l,a2):new C.bMo(l,a2),k),1)
e=a0?"OK":"Manter reserva"
return A.bA(!0,new A.S(new A.a3(0,0,0,d.f.d),A.y(A.a([new A.S(B.jC,t,k),new A.dl(1,B.bc,h,k),new A.S(G.pZ,A.O(A.a([g,B.ab,A.a4(new C.afB(e,!1,new C.bMp(a2),k),1)],s),B.v,B.h,B.l,0,k),k)],s),B.E,B.h,B.J),k),k,B.Z,!1)}}
C.acz.prototype={
u(d){var x=null,w=y.p
return A.eW(!1,x,!0,new A.e8(H.tF,A.O(A.a([A.a4(A.y(A.a([A.h(this.c,x,x,x,x,B.a9,x,x),A.h(this.d,x,x,x,x,B.L,x,x)],w),B.G,B.h,B.J),1),D.aD8],w),B.v,B.h,B.l,0,x),x),x,!0,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,x)}}
C.afB.prototype={
u(d){var x,w=null,v=this.e,u=this.c
if(this.d){x=A.fK(w,w,B.t,w,w,w,w,w,w,B.z,w,w,B.i1,w,B.aa,B.c6,w,w,B.d_,w)
x=A.hh(A.h(u,2,w,w,w,w,B.a4,w),v,x)
v=x}else{x=A.cc(B.z,w,w,B.t,w,B.i1,B.aa,w,w,B.d_)
x=A.bB(A.h(u,2,w,w,w,w,B.a4,w),v,x)
v=x}return A.aJ(v,52,w)}}
C.aNe.prototype={
u(d){var x=null
return A.bk(x,!0,x,A.ct(x,A.x(B.K,A.b8(this.c,B.t,x,x,20),B.r,x,x,B.c_,x,44,x,x,x,x,44),B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,B.aF),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a6,x)}}
var z=a.updateTypes([])
C.bMk.prototype={
$0(){return A.am(this.a,!1).bl()},
$S:0}
C.bMl.prototype={
$0(){A.am(this.b,!1).bl()
this.a.a.y.$0()},
$S:0}
C.bMm.prototype={
$0(){A.am(this.b,!1).bl()
this.a.a.z.$0()},
$S:0}
C.bMn.prototype={
$0(){A.am(this.b,!1).bl()
var x=this.a.a.x
if(x!=null)x.$0()},
$S:0}
C.bMo.prototype={
$0(){return A.am(this.b,!1).ae(B.f.B(this.a.d.a.a))},
$S:0}
C.bMp.prototype={
$0(){return A.am(this.a,!1).bl()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[C.awk,C.a0q])
w(C.BE,A.H)
w(C.aD2,A.a1)
x(A.bN,[C.bMk,C.bMl,C.bMm,C.bMn,C.bMo,C.bMp])
x(A.M,[C.acz,C.afB,C.aNe])})()
A.bt(b.typeUniverse,JSON.parse('{"BE":{"H":[],"e":[],"f":[]},"aD2":{"a1":["BE"]},"acz":{"M":[],"e":[],"f":[]},"afB":{"M":[],"e":[],"f":[]},"aNe":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{D:x("a0q"),L:x("r<+(c,c)>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("ds"),N:x("awk"),R:x("c"),z:x("@"),g:x("t<@>?"),Y:x("a5<@,@>?")}})();(function constants(){D.ccF=new A.D("Recebes de volta",null,B.L,null,null,null,null,null,null,null)
D.azq=new A.bI(1,B.at,D.ccF,null)
D.aD8=new A.b7(B.OK,null,B.V,null,null,null)
D.cbQ=new A.D("AS CONTAS",null,B.aH,null,null,null,null,null,null,null)
D.cct=new A.D("O QUE PODES FAZER",null,B.aH,null,null,null,null,null,null,null)})()};
(a=>{a["6dPEBDKJqo4n/T5YXYyV7mTFz3k="]=a.current})($__dart_deferred_initializers__);