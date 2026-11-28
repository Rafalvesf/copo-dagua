((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
aVd(d){return C.dJE(d)},
dJE(a3){var x=0,w=A.n(y.N),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$aVd=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:d=30
a0=48
u=4
j=$.Q().b
j===$&&A.b()
x=7
return A.d(j.R("platform_settings").cu(0).V("id",1).e9(0),$async$aVd)
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
return A.d(j.R("bookings").al(0,"proposals(deposit_refundable), payments(type, status, paid_at, updated_at)").V("id",a3).cd(),$async$aVd)
case 12:o=a5
j=o
n=j==null?null:J.i(j,"proposals")
if(y.j.b(n))f=J.dF(n)?null:J.fF(n)
else f=n
m=f
j=y.Y.a(m)
j=A.dS(j==null?null:J.i(j,"deposit_refundable"))
r=j!==!1
j=o
j=j==null?null:J.i(j,"payments")
y.g.a(j)
j=J.ao(j==null?B.ah:j)
while(j.q()){l=j.gE(j)
if(!J.o(J.i(l,"status"),"paid"))continue
if(J.o(J.i(l,"type"),"deposit")){e=J.i(l,"paid_at")
if(e==null)e=J.i(l,"updated_at")
k=A.d0(A.a0(e==null?"":e))
if(k!=null)q=k}else p=!0}u=2
x=11
break
case 9:u=8
a2=t.pop()
x=11
break
case 8:x=2
break
case 11:v=new C.axx(q,a0)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aVd,w)},
axx:function axx(d,e){this.b=d
this.e=e},
alE(d,e){return C.dL5(d,e)},
dL5(d,e){var x=0,w=A.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m
var $async$alE=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
q=y.z
x=7
return A.d(r.aH("booking_cancel_state",A.R(["p_booking_id",d],y.R,q),q),$async$alE)
case 7:s=g
if(y.f.b(s)){r=A.aF(J.i(s,"paid"))
if(r==null)r=0
q=J.i(s,"held_until")
q=A.d0(A.p(q==null?"":q))
q=q==null?null:q.dH()
v=new C.a0Z(r,q)
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
return A.d(C.aVd(d),$async$alE)
case 8:o=g
n=o.b
r=n==null
if(r)q=0
else q=e==null?0:e
v=new C.a0Z(q,r?null:n.dH().ea(A.e8(0,o.e,0,0,0,0).a))
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$alE,w)},
dfd(d){return F.WP[A.eC(d)-1]+", "+A.ax(d)+" "+B.be[A.aq(d)-1]+" \xe0s "+B.f.aP(B.j.k(A.i0(d)),2,"0")+":"+B.f.aP(B.j.k(A.hN(d)),2,"0")},
dbm(d,e,f,g,h,i,j,k,l){return new C.BP(k,j,g,l,i,h,f,e,d,null)},
a0Z:function a0Z(d,e){this.a=d
this.b=e},
BP:function BP(d,e,f,g,h,i,j,k,l,m){var _=this
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
bNT:function bNT(d){this.a=d},
bNU:function bNU(d,e){this.a=d
this.b=e},
bNV:function bNV(d,e){this.a=d
this.b=e},
bNW:function bNW(d,e){this.a=d
this.b=e},
bNX:function bNX(d,e){this.a=d
this.b=e},
bNY:function bNY(d){this.a=d},
adi:function adi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agv:function agv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aOC:function aOC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},D
J=c[1]
A=c[0]
B=c[2]
E=c[244]
F=c[414]
G=c[228]
C=a.updateHolder(c[75],C)
D=c[413]
C.axx.prototype={}
C.a0Z.prototype={}
C.BP.prototype={
P(){return new C.aEl(new A.aH(B.ap,$.aa()))}}
C.aEl.prototype={
m(){var x=this.d
x.a_$=$.aa()
x.X$=0
this.a6()},
t(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.r,i=j.a,h=j.b,g=h!=null,f=!g||new A.ab(Date.now(),0,!1).f3(h),e=l.a,d=e.e,a0=d&&!f,a1=!d&&!f&&i>0
if(d)if(a0){x="O sinal j\xe1 \xe9 teu"
w="Passaram 48 h desde que o cliente pagou o sinal e ele deixou de estar cativo. A partir daqui, a reserva s\xf3 pode ser cancelada pelo organizador."}else{w=i>0&&g?"O sinal ainda est\xe1 cativo (at\xe9 "+C.dfd(h)+"). Se cancelares, o cliente recebe os "+A.aL(i,!0)+" de volta.":"O cliente ainda n\xe3o pagou nada. Se cancelares, a reserva fica sem efeito."
x="O cliente recebe tudo de volta"}else if(a1){x="Perdes o sinal de "+A.aL(i,!0)
w="Pagaste o sinal h\xe1 mais de 48 h: j\xe1 \xe9 de "+l.a.f+". Se cancelares, n\xe3o \xe9 devolvido."}else if(i>0&&g){w="Pagaste o sinal h\xe1 menos de 48 h. Se cancelares at\xe9 "+C.dfd(h)+", recebes o sinal todo de volta."
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
g.push(new A.X("Resto ("+A.aL(d,!0)+")","J\xe1 n\xe3o pagas"))}d=A.aU(a2,k,y.w).w
t=l.a
s=y.p
t=A.M(A.a([A.a4(A.y(A.a([A.h(t.c,k,k,k,k,B.b3,k,k),B.aR,A.h(t.d,k,k,k,k,B.L,k,k)],s),B.G,B.h,B.l),1),B.ae,new C.aOC(B.eC,"Fechar",new C.bNT(a2),k)],s),B.u,B.h,B.l,0,k)
r=A.a([A.p9(A.M(A.a([A.w(k,k,B.r,k,k,new A.O(A.HP(v),k,k,k,k,k,B.am),k,8,B.e6,k,k,k,8),B.ae,A.a4(A.y(A.a([A.h(x,k,k,k,k,B.ac,k,k),B.aR,A.h(w,k,k,k,k,B.bJ,k,k)],s),B.G,B.h,B.l),1)],s),B.G,B.h,B.l,0,k),B.t,B.fg,16,v)],s)
q=l.a
if(q.e)q=q.y!=null||q.z!=null
else q=!1
if(q){q=A.W(22)
p=A.a([],s)
if(l.a.y!=null)p.push(new C.adi("Propor outro dia","O sinal fica para o dia novo",new C.bNU(l,a2),k))
o=l.a
if(o.y!=null&&o.z!=null)p.push(B.lC)
if(l.a.z!=null)p.push(new C.adi("Pedir altera\xe7\xe3o","Pessoas, hora ou o que est\xe1 inclu\xeddo",new C.bNV(l,a2),k))
B.e.n(r,A.a([B.a0,D.cdr,B.M,A.w(k,A.y(p,B.u,B.h,B.l),B.r,k,k,new A.O(B.a5,k,k,q,k,k,B.z),k,k,k,B.cN,k,k,k)],s))}if(g.length!==0&&h){q=A.W(22)
p=A.a([],s)
for(n=0;o=g.length,n<o;++n){o=n===o-1?k:B.fU
m=g[n]
p.push(A.w(k,A.M(A.a([new A.bJ(1,B.at,A.h(m.a,k,k,k,k,B.L,k,k),k),A.h(m.b,k,k,k,k,B.bK,k,k)],s),B.u,B.h,B.l,0,k),B.r,k,k,new A.O(k,k,o,k,k,k,B.z),k,48,k,k,k,k,k))}g=A.a([B.a0,D.ccP,B.M,A.w(k,A.y(p,B.u,B.h,B.l),B.r,k,k,new A.O(B.a5,k,k,q,k,k,B.z),k,k,k,B.cN,k,k,k)],s)
if(!l.a.e&&e)B.e.n(g,A.a([B.M,A.M(A.a([D.azM,A.h(A.aL(a1?0:i,!0),k,k,k,k,B.ce,k,k)],s),B.ew,B.h,B.l,0,B.aM)],s))
B.e.n(r,g)}if(h){h=l.a
g=h.e
e=A.h(g?"PORQU\xca":"PORQU\xca (SE QUISERES)",k,k,k,k,B.aH,k,k)
q=A.W(26)
B.e.n(r,A.a([B.a0,e,B.M,A.w(B.bh,A.cr(k,B.a9,!1,k,!0,B.y,k,A.ct(),l.d,k,k,k,k,k,2,A.iV(k,B.aS,k,k,k,k,k,k,!0,B.aS,k,k,k,k,k,k,!1,k,k,k,k,B.aS,k,k,k,k,k,k,k,k,B.l6,g?"Diz ao cliente porque cancelas":"Diz a "+h.f+" o que mudou",k,k,k,k,!0,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.Y,!0,k,!0,k,!1,k,B.aB,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ak,k,k,k,k,k,k,k,k,k,k,k,B.eI,!0,B.ax,k,B.b2,k,k,k,k),B.r,k,k,new A.O(B.a5,k,k,q,k,k,B.z),k,52,k,B.fh,k,k,k)],s))}r.push(B.a0)
r.push(A.h(u,k,k,k,k,B.bJ,k,k))
h=A.dU(A.y(r,B.F,B.h,B.l),B.y,k,B.ej,k,B.au)
if(a0)g="Falar com a equipa"
else g=a1?"Cancelar e perder o sinal":"Cancelar reserva"
g=A.a4(new C.agv(g,!0,a0?new C.bNW(l,a2):new C.bNX(l,a2),k),1)
e=a0?"OK":"Manter reserva"
return A.bE(!0,new A.S(new A.a3(0,0,0,d.f.d),A.y(A.a([new A.S(B.jP,t,k),new A.dl(1,B.bc,h,k),new A.S(G.nx,A.M(A.a([g,B.aa,A.a4(new C.agv(e,!1,new C.bNY(a2),k),1)],s),B.u,B.h,B.l,0,k),k)],s),B.F,B.h,B.I),k),k,B.Z,!1)}}
C.adi.prototype={
t(d){var x=null,w=y.p
return A.eZ(!1,x,!0,new A.e7(E.B9,A.M(A.a([A.a4(A.y(A.a([A.h(this.c,x,x,x,x,B.ac,x,x),A.h(this.d,x,x,x,x,B.L,x,x)],w),B.G,B.h,B.I),1),D.aDy],w),B.u,B.h,B.l,0,x),x),x,!0,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,x)}}
C.agv.prototype={
t(d){var x,w=null,v=this.e,u=this.c
if(this.d){x=A.fY(w,w,B.t,w,w,w,w,w,w,B.x,w,w,B.iN,w,B.ab,B.c4,w,w,B.df,w)
x=new A.am(A.ht(A.h(u,2,w,w,w,w,B.a6,w),v,x),w)
v=x}else{x=A.cc(B.x,w,w,B.t,w,B.iN,B.ab,w,w,B.df)
x=new A.am(A.bD(A.h(u,2,w,w,w,w,B.a6,w),v,x),w)
v=x}return A.aG(v,52,w)}}
C.aOC.prototype={
t(d){var x=null
return A.b9(x,!0,x,A.cG(x,A.w(B.J,A.b4(this.c,B.t,x,x,20),B.r,x,x,B.bG,x,44,x,x,x,x,44),B.Y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,this.e,x,x,x,x,x,x,!1,B.aI),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x)}}
var z=a.updateTypes([])
C.bNT.prototype={
$0(){return A.an(this.a,!1).bi()},
$S:0}
C.bNU.prototype={
$0(){A.an(this.b,!1).bi()
this.a.a.y.$0()},
$S:0}
C.bNV.prototype={
$0(){A.an(this.b,!1).bi()
this.a.a.z.$0()},
$S:0}
C.bNW.prototype={
$0(){A.an(this.b,!1).bi()
var x=this.a.a.x
if(x!=null)x.$0()},
$S:0}
C.bNX.prototype={
$0(){return A.an(this.b,!1).ar(B.f.C(this.a.d.a.a))},
$S:0}
C.bNY.prototype={
$0(){return A.an(this.a,!1).bi()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[C.axx,C.a0Z])
w(C.BP,A.G)
w(C.aEl,A.Z)
x(A.bN,[C.bNT,C.bNU,C.bNV,C.bNW,C.bNX,C.bNY])
x(A.H,[C.adi,C.agv,C.aOC])})()
A.bq(b.typeUniverse,JSON.parse('{"BP":{"G":[],"e":[],"f":[]},"aEl":{"Z":["BP"]},"adi":{"H":[],"e":[],"f":[]},"agv":{"H":[],"e":[],"f":[]},"aOC":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{D:x("a0Z"),L:x("r<+(c,c)>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("dC"),N:x("axx"),R:x("c"),z:x("@"),g:x("t<@>?"),Y:x("a5<@,@>?")}})();(function constants(){D.cdC=new A.F("Recebes de volta",null,B.L,null,null,null,null,null,null,null)
D.azM=new A.bJ(1,B.at,D.cdC,null)
D.aDy=new A.b8(B.P6,null,B.V,null,null,null)
D.ccP=new A.F("AS CONTAS",null,B.aH,null,null,null,null,null,null,null)
D.cdr=new A.F("O QUE PODES FAZER",null,B.aH,null,null,null,null,null,null,null)})()};
(a=>{a["bdQiQynsEAPFOjSvHfts2RvF8Mk="]=a.current})($__dart_deferred_initializers__);