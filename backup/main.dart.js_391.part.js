((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
aVf(d){return C.dJr(d)},
dJr(a3){var x=0,w=A.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$aVf=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:d=30
a0=48
u=4
j=$.Q().b
j===$&&A.b()
x=7
return A.d(j.R("platform_settings").cu(0).V("id",1).e9(0),$async$aVf)
case 7:s=a5
j=A.aF(J.i(s,"cancellation_penalty_days"))
i=j==null?null:B.k.F(j)
d=i==null?30:i
j=A.aF(J.i(s,"deposit_refund_window_hours"))
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
return A.d(j.R("bookings").al(0,"proposals(deposit_refundable), payments(type, status, paid_at, updated_at)").V("id",a3).cd(),$async$aVf)
case 12:o=a5
j=o
n=j==null?null:J.i(j,"proposals")
if(y.j.b(n))f=J.dG(n)?null:J.fG(n)
else f=n
m=f
j=y.Y.a(m)
j=A.dS(j==null?null:J.i(j,"deposit_refundable"))
r=j!==!1
j=o
j=j==null?null:J.i(j,"payments")
y.g.a(j)
j=J.an(j==null?B.aj:j)
while(j.q()){l=j.gE(j)
if(!J.o(J.i(l,"status"),"paid"))continue
if(J.o(J.i(l,"type"),"deposit")){e=J.i(l,"paid_at")
if(e==null)e=J.i(l,"updated_at")
k=A.d_(A.a0(e==null?"":e))
if(k!=null)q=k}else p=!0}u=2
x=11
break
case 9:u=8
a2=t.pop()
x=11
break
case 8:x=2
break
case 11:v=new C.axw(q,a0)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aVf,w)},
axw:function axw(d,e){this.b=d
this.e=e},
alC(d,e){return C.dKT(d,e)},
dKT(d,e){var x=0,w=A.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m
var $async$alC=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aH("booking_cancel_state",A.R(["p_booking_id",d],y.R,q),q),$async$alC)
case 7:s=g
if(y.f.b(s)){r=A.aF(J.i(s,"paid"))
if(r==null)r=0
q=J.i(s,"held_until")
q=A.d_(A.p(q==null?"":q))
q=q==null?null:q.dH()
v=new C.a0X(r,q)
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
return A.d(C.aVf(d),$async$alC)
case 8:o=g
n=o.b
r=n==null
if(r)q=0
else q=e==null?0:e
v=new C.a0X(q,r?null:n.dH().ea(A.e8(0,o.e,0,0,0,0).a))
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$alC,w)},
df1(d){return F.WJ[A.ey(d)-1]+", "+A.aw(d)+" "+B.bd[A.aq(d)-1]+" \xe0s "+B.f.aN(B.j.k(A.i0(d)),2,"0")+":"+B.f.aN(B.j.k(A.hN(d)),2,"0")},
dba(d,e,f,g,h,i,j,k,l){return new C.BR(k,j,g,l,i,h,f,e,d,null)},
a0X:function a0X(d,e){this.a=d
this.b=e},
BR:function BR(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEl:function aEl(d){this.d=d
this.c=this.a=null},
bNP:function bNP(d,e){this.a=d
this.b=e},
bNQ:function bNQ(d,e){this.a=d
this.b=e},
bNR:function bNR(d,e){this.a=d
this.b=e},
bNS:function bNS(d,e){this.a=d
this.b=e},
bNT:function bNT(d){this.a=d},
adg:function adg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ags:function ags(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},D
J=c[1]
A=c[0]
B=c[2]
E=c[244]
F=c[415]
G=c[228]
C=a.updateHolder(c[75],C)
D=c[414]
C.axw.prototype={}
C.a0X.prototype={}
C.BR.prototype={
P(){return new C.aEl(new A.aI(B.aq,$.ab()))}}
C.aEl.prototype={
m(){var x=this.d
x.a_$=$.ab()
x.X$=0
this.a6()},
t(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.r,i=j.a,h=j.b,g=h!=null,f=!g||new A.aa(Date.now(),0,!1).f3(h),e=l.a,d=e.e,a0=d&&!f,a1=!d&&!f&&i>0
if(d)if(a0){x="O sinal j\xe1 \xe9 teu"
w="Passaram 48 h desde que o cliente pagou o sinal e ele deixou de estar cativo. A partir daqui, a reserva s\xf3 pode ser cancelada pelo organizador."}else{w=i>0&&g?"O sinal ainda est\xe1 cativo (at\xe9 "+C.df1(h)+"). Se cancelares, o cliente recebe os "+A.aL(i,!0)+" de volta.":"O cliente ainda n\xe3o pagou nada. Se cancelares, a reserva fica sem efeito."
x="O cliente recebe tudo de volta"}else if(a1){x="Perdes o sinal de "+A.aL(i,!0)
w="Pagaste o sinal h\xe1 mais de 48 h: j\xe1 \xe9 de "+l.a.f+". Se cancelares, n\xe3o \xe9 devolvido."}else if(i>0&&g){w="Pagaste o sinal h\xe1 menos de 48 h. Se cancelares at\xe9 "+C.df1(h)+", recebes o sinal todo de volta."
x="O sinal ainda \xe9 devolvido"}else{w="Se cancelares, "+e.f+" \xe9 avisado e a reserva fica sem efeito."
x="Ainda n\xe3o pagaste nada"}h=!a0
v=!h||a1?B.f8:B.f7
if(a0)u="Se n\xe3o conseguires mesmo fazer o evento, fala com a equipa \xc0 Nossa!."
else{e=l.a
if(e.e)u="O cliente \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
else{g=i>0&&f&&g?"Depois dessa hora, o sinal deixa de ser devolvido. Esta a\xe7\xe3o n\xe3o pode ser desfeita.":e.f+" \xe9 avisado na conversa. Esta a\xe7\xe3o n\xe3o pode ser desfeita."
u=g}}g=A.a([],y.L)
e=i>0
if(e){d=l.a.e?"Sinal pago pelo cliente":"Sinal pago"
g.push(new A.X(d,A.aL(i,!0)))}if(l.a.e&&e)g.push(new A.X("Devolvido ao cliente",A.aL(i,!0)))
d=l.a
if(!d.e){t=d.w
t=(t==null?0:t)>0}else t=!1
if(t){d=d.w
d.toString
g.push(new A.X("Resto ("+A.aL(d,!0)+")","J\xe1 n\xe3o pagas"))}d=A.aT(a2,k,y.w).w
t=l.a
s=y.p
t=A.N(A.a([A.a5(A.x(A.a([A.h(t.c,k,k,k,k,B.b4,k,k),B.aS,A.h(t.d,k,k,k,k,B.L,k,k)],s),B.G,B.h,B.l),1),B.af,B.ag],s),B.u,B.h,B.l,0,k)
r=A.a([A.pb(A.N(A.a([A.w(k,k,B.r,k,k,new A.O(A.HR(v),k,k,k,k,k,B.ar),k,8,B.e6,k,k,k,8),B.af,A.a5(A.x(A.a([A.h(x,k,k,k,k,B.aa,k,k),B.aS,A.h(w,k,k,k,k,B.bK,k,k)],s),B.G,B.h,B.l),1)],s),B.G,B.h,B.l,0,k),B.t,B.ff,16,v)],s)
q=l.a
if(q.e)q=q.y!=null||q.z!=null
else q=!1
if(q){q=A.W(22)
p=A.a([],s)
if(l.a.y!=null)p.push(new C.adg("Propor outro dia","O sinal fica para o dia novo",new C.bNP(l,a2),k))
o=l.a
if(o.y!=null&&o.z!=null)p.push(B.lA)
if(l.a.z!=null)p.push(new C.adg("Pedir altera\xe7\xe3o","Pessoas, hora ou o que est\xe1 inclu\xeddo",new C.bNQ(l,a2),k))
B.e.n(r,A.a([B.a0,D.cdx,B.M,A.w(k,A.x(p,B.u,B.h,B.l),B.r,k,k,new A.O(B.ac,k,k,q,k,k,B.y),k,k,k,B.cN,k,k,k)],s))}if(g.length!==0&&h){q=A.W(22)
p=A.a([],s)
for(n=0;o=g.length,n<o;++n){o=n===o-1?k:B.fT
m=g[n]
p.push(A.w(k,A.N(A.a([new A.bK(1,B.au,A.h(m.a,k,k,k,k,B.L,k,k),k),A.h(m.b,k,k,k,k,B.bL,k,k)],s),B.u,B.h,B.l,0,k),B.r,k,k,new A.O(k,k,o,k,k,k,B.y),k,48,k,k,k,k,k))}g=A.a([B.a0,D.ccV,B.M,A.w(k,A.x(p,B.u,B.h,B.l),B.r,k,k,new A.O(B.ac,k,k,q,k,k,B.y),k,k,k,B.cN,k,k,k)],s)
if(!l.a.e&&e)B.e.n(g,A.a([B.M,A.N(A.a([D.azL,A.h(A.aL(a1?0:i,!0),k,k,k,k,B.cd,k,k)],s),B.ew,B.h,B.l,0,B.aM)],s))
B.e.n(r,g)}if(h){h=l.a
g=h.e
e=A.h(g?"PORQU\xca":"PORQU\xca (SE QUISERES)",k,k,k,k,B.aH,k,k)
q=A.W(26)
p=A.bE(B.z,1.5)
B.e.n(r,A.a([B.a0,e,B.M,A.w(B.bi,A.cr(k,B.a8,!1,k,!0,B.x,k,A.ct(),l.d,k,k,k,k,k,2,A.iV(k,B.aT,k,k,k,k,k,k,!0,B.aT,k,k,k,k,k,k,!1,k,k,k,k,B.aT,k,k,k,k,k,k,k,k,B.l4,g?"Diz ao cliente porque cancelas":"Diz a "+h.f+" o que mudou",k,k,k,k,!0,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.a_,!0,k,!0,k,!1,k,B.aD,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.am,k,k,k,k,k,k,k,k,k,k,k,B.eH,!0,B.ay,k,B.b3,k,k,k,k),B.r,k,k,new A.O(B.t,k,p,q,k,k,B.y),k,52,k,B.fg,k,k,k)],s))}r.push(B.a0)
r.push(A.h(u,k,k,k,k,B.bK,k,k))
h=A.dU(A.x(r,B.F,B.h,B.l),B.x,k,B.ek,k,B.av)
if(a0)g="Falar com a equipa"
else g=a1?"Cancelar e perder o sinal":"Cancelar reserva"
g=A.a5(new C.ags(g,!0,a0?new C.bNR(l,a2):new C.bNS(l,a2),k),1)
e=a0?"OK":"Manter reserva"
return A.bF(!0,new A.S(new A.a3(0,0,0,d.f.d),A.x(A.a([new A.S(B.jN,t,k),new A.dg(1,B.be,h,k),new A.S(G.nu,A.N(A.a([g,B.ab,A.a5(new C.ags(e,!1,new C.bNT(a2),k),1)],s),B.u,B.h,B.l,0,k),k)],s),B.F,B.h,B.I),k),k,B.Y,!1)}}
C.adg.prototype={
t(d){var x=null,w=y.p
return A.f_(!1,x,!0,new A.e7(E.B5,A.N(A.a([A.a5(A.x(A.a([A.h(this.c,x,x,x,x,B.aa,x,x),A.h(this.d,x,x,x,x,B.L,x,x)],w),B.G,B.h,B.I),1),D.aDx],w),B.u,B.h,B.l,0,x),x),x,!0,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,x)}}
C.ags.prototype={
t(d){var x,w=null,v=this.e,u=this.c
if(this.d){x=A.fZ(w,w,B.t,w,w,w,w,w,w,B.z,w,w,B.iL,w,B.a9,B.bm,w,w,B.df,w)
x=new A.am(A.ht(A.h(u,2,w,w,w,w,B.a3,w),v,x),w)
v=x}else{x=A.cd(B.a4,w,w,B.t,w,B.iL,B.a9,w,w,B.df)
x=new A.am(A.bD(A.h(u,2,w,w,w,w,B.a3,w),v,x),w)
v=x}return A.aG(v,52,w)}}
var z=a.updateTypes([])
C.bNP.prototype={
$0(){A.ap(this.b,!1).by()
this.a.a.y.$0()},
$S:0}
C.bNQ.prototype={
$0(){A.ap(this.b,!1).by()
this.a.a.z.$0()},
$S:0}
C.bNR.prototype={
$0(){A.ap(this.b,!1).by()
var x=this.a.a.x
if(x!=null)x.$0()},
$S:0}
C.bNS.prototype={
$0(){return A.ap(this.b,!1).au(B.f.C(this.a.d.a.a))},
$S:0}
C.bNT.prototype={
$0(){return A.ap(this.a,!1).by()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[C.axw,C.a0X])
w(C.BR,A.G)
w(C.aEl,A.Z)
x(A.bO,[C.bNP,C.bNQ,C.bNR,C.bNS,C.bNT])
x(A.H,[C.adg,C.ags])})()
A.bq(b.typeUniverse,JSON.parse('{"BR":{"G":[],"e":[],"f":[]},"aEl":{"Z":["BR"]},"adg":{"H":[],"e":[],"f":[]},"ags":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{D:x("a0X"),L:x("r<+(c,c)>"),p:x("r<e>"),j:x("t<@>"),f:x("a4<@,@>"),w:x("dC"),N:x("axw"),R:x("c"),z:x("@"),g:x("t<@>?"),Y:x("a4<@,@>?")}})();(function constants(){D.cdI=new A.E("Recebes de volta",null,B.L,null,null,null,null,null,null,null)
D.azL=new A.bK(1,B.au,D.cdI,null)
D.aDx=new A.ba(B.P0,null,B.V,null,null,null)
D.ccV=new A.E("AS CONTAS",null,B.aH,null,null,null,null,null,null,null)
D.cdx=new A.E("O QUE PODES FAZER",null,B.aH,null,null,null,null,null,null,null)})()};
(a=>{a["BHfprup53XLKeQbc/C9z+hQo0eI="]=a.current})($__dart_deferred_initializers__);