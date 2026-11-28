((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={cDz:function cDz(){},cFP:function cFP(){},
do1(d){return new C.a7v(d,null)},
a7v:function a7v(d,e){this.d=d
this.a=e},
agp:function agp(d,e,f){var _=this
_.w=$
_.x=d
_.y=e
_.z=f
_.at=_.as=_.Q=null
_.ax=!1
_.ay=!0
_.d=$
_.c=_.a=null},
cq_:function cq_(d){this.a=d},
cpZ:function cpZ(){},
cpU:function cpU(d,e){this.a=d
this.b=e},
cpP:function cpP(d){this.a=d},
cpQ:function cpQ(){},
cpR:function cpR(){},
cpS:function cpS(d,e){this.a=d
this.b=e},
cpT:function cpT(d){this.a=d},
cpX:function cpX(d){this.a=d},
cpW:function cpW(){},
cpY:function cpY(d){this.a=d},
cpV:function cpV(d,e){this.a=d
this.b=e},
aDr:function aDr(d,e){this.e=d
this.a=e},
bOh:function bOh(){},
bOg:function bOg(){},
bOf:function bOf(){},
cJM(d,e,f,g,h){var x=0,w=A.n(y.v),v,u
var $async$cJM=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:v=$.T()
u=v.b
u===$&&A.b()
u=u.P("messages")
v=v.b.gbE().e.a
x=2
return A.d(u.dd(0,A.S(["conversation_id",d,"sender_role","partner","sender_id",(v==null?null:v.r).a,"body","Enviou uma proposta: "+h+" \u2014 "+A.aP(f,!1)+" (sinal "+A.aP(e,!1)+")","proposal_id",g,"proposal_title",h,"proposal_price",f,"proposal_deposit_amount",e],y.w,y.E)),$async$cJM)
case 2:return A.l(null,w)}})
return A.m($async$cJM,w)}},D,F,G
J=c[1]
A=c[0]
B=c[2]
E=c[152]
C=a.updateHolder(c[33],C)
D=c[330]
F=c[111]
G=c[244]
C.a7v.prototype={
R(){var x=$.ad()
return new C.agp(new A.aI(B.ao,x),new A.aI(B.ao,x),new A.aI(B.ao,x))}}
C.agp.prototype={
gUi(d){var x,w=this.w
if(w===$){x=this.a.d.w
if(x==null)x=""
w=this.w=new A.aI(new A.bD(x,B.aJ,B.aA),$.ad())}return w},
am(){this.aJ()
this.y.al(0,new C.cq_(this))},
m(){var x=this,w=x.gUi(0),v=w.Z$=$.ad()
w.X$=0
w=x.x
w.Z$=v
w.X$=0
w=x.y
w.Z$=v
w.X$=0
w=x.z
w.Z$=v
w.X$=0
x.a8()},
bkl(){var x=this,w=B.f.D(x.y.a.a)
x.q(new C.cpU(x,A.fi(A.b_(w,",","."))))
return x.Q==null&&x.as==null},
zY(){var x=0,w=A.n(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$zY=A.j(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:if(!s.bkl()){x=1
break}k=s.c
k.toString
j=s.y
i=B.f.D(j.a.a)
i=A.fi(A.b_(i,",","."))
i.toString
x=3
return A.d(E.ajz(k,i),$async$zY)
case 3:if(!a4){x=1
break}if(s.c==null){x=1
break}s.q(new C.cpP(s))
u=5
r=B.f.D(s.gUi(0).a.a)
k=B.f.D(j.a.a)
k=A.fi(A.b_(k,",","."))
k.toString
q=k
k=s.gT()
j=y.b
p=A.iv(k.a1(0,$.cMb(),y.D),new C.cpQ(),new C.cpR(),j,j)
o=A.iS(B.k.a7(q*p/100,2))
j=$.T()
i=j.b
i===$&&A.b()
h=s.a.d
g=B.f.D(s.x.a.a)
if(g.length===0)g=null
f=B.f.D(s.z.a.a)
if(f.length===0)f=null
e=y.m
a2=A
x=8
return A.d(i.aU("send_proposal",A.S(["p_quote_request_id",h.a,"p_title",r,"p_description",g,"p_price",q,"p_payment_terms",f,"p_deposit_refundable",s.ay],y.w,e),e),$async$zY)
case 8:n=a2.a_(a4)
u=10
i=s.a.d
j=j.b.gbE().e.a
x=13
return A.d(A.ug(i.c,(j==null?null:j.r).a),$async$zY)
case 13:m=a4
x=14
return A.d(C.cJM(m,o,q,n,r),$async$zY)
case 14:u=5
x=12
break
case 10:u=9
a0=t.pop()
x=12
break
case 9:x=5
break
case 12:k.ah($.wh())
k=s.c
if(k==null){x=1
break}A.aj(k).ak(null)
k=s.c
if(k==null){x=1
break}A.aj(k).ak(null)
u=2
x=7
break
case 5:u=4
a1=t.pop()
k=A.a9(a1)
if(k instanceof A.cT){l=k
if(s.c==null){x=1
break}s.q(new C.cpS(s,l))}else{if(s.c==null){x=1
break}s.q(new C.cpT(s))}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$zY,w)},
u(d){var x,w,v,u,t,s,r,q=this,p=null,o="Enviar proposta",n=q.gT().G($.cMb(),y.D)
n=n.gv(n)
x=(n==null?0:n)>=100
n=y.u
w=A.a([A.aO(p,A.aw(d,B.b7,y.x).w.r.b,p),A.xv(!1,!0,"Para "+q.a.d.d,o,34,20,p)],n)
n=A.a([],n)
v=q.at
if(v!=null)n.push(new A.IL(v,p))
n.push(A.hl(!1,q.gUi(0),q.Q,B.u,p,p,"T\xedtulo do servi\xe7o",p,p))
n.push(B.a4)
n.push(D.bIm)
n.push(B.X)
v=A.a2(22)
n.push(A.C(p,A.cM(p,B.aa,!1,p,!0,B.z,p,A.cQ(),q.x,p,p,p,p,p,2,D.aE9,B.a3,!0,p,!0,p,!1,p,B.aK,p,p,p,p,p,p,p,p,4,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.au,p,p,p,p,p,p,p,p,p,p,p,B.hE,!0,B.as,p,B.b8,p,p,p,p),B.r,p,p,new A.O(B.u,p,p,v,p,p,B.y),p,p,p,D.as5,p,p,p))
n.push(B.a4)
v=q.y
n.push(A.hl(!1,v,q.as,B.u,p,B.iV,"Valor total (\u20ac)",p,new C.cpX(q)))
n.push(B.Q)
n.push(new C.aDr(v.a.a,p))
n.push(B.Q)
v=A.a2(22)
u=q.ay
t=$.ap
s=A.i(x?"Cancel\xe1vel nas primeiras 48 h":"Sinal cancel\xe1vel",p,p,p,p,B.mg,p,p,p)
if(x)r=u?"O cliente paga tudo ao aceitar. Se cancelar nas 48 h depois de pagar, recebe tudo de volta; depois valem as tuas regras de cancelamento.":"O cliente paga tudo ao aceitar. Se cancelar, valem as tuas regras de cancelamento. Se fores tu a cancelar, recebe tudo de volta."
else r=u?"Se o organizador cancelar nas 48 h depois de pagar, recebe o sinal de volta. Depois disso, fica contigo.":"Se o organizador cancelar, o sinal fica sempre contigo. Se fores tu a cancelar, o organizador recebe tudo de volta."
n.push(A.C(p,A.a8s(t,p,new C.cpY(q),A.i(r,p,p,p,p,B.Z,p,p,p),s,u),B.r,p,p,new A.O(B.u,p,p,v,p,p,B.y),p,p,p,p,p,p,p))
n.push(B.Q)
n.push(A.hl(!1,q.z,p,B.u,"Ex.: restante at\xe9 30 dias antes",p,"Condi\xe7\xf5es de pagamento (opcional)",p,p))
n.push(B.bf)
n.push(new A.fC(o,q.gbg2(),q.ax,p))
return A.cP(p,B.bE,A.bG(!0,new A.m6(w,A.dV(A.B(n,B.J,B.j,B.o,0,B.v),B.z,p,G.ML,p,p,B.a1),p),p,B.a_,!1),!0,p)}}
C.aDr.prototype={
bc(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a5.G($.cMb(),y.D),a3=a2.gv(a2)
a2=$.T().b
a2===$&&A.b()
a2=a2.gbE().e.a
a2=a2==null?a1:a2.r
x=a2==null?a1:a2.a
a2=y.y
if(x==null){w=a5.G($.un(),a2)
v=w.gv(w)}else{w=a5.G($.Cn().$1(x),a2)
v=w.gv(w)}a2=a5.G($.cUv(),a2)
u=a2.gv(a2)
if(u==null)u=B.f1
if(a3==null||v==null)return B.aq
a2=B.f.D(this.e)
a2=A.b_(a2," ","")
t=A.fi(A.b_(a2,",","."))
a2=t==null
s=v.lc(a2?0:t)
w=new C.bOh()
r=a2?a1:t*a3/100
q=a2?a1:F.cSM(t,r,s)
if(a2)p=a1
else{q.toString
p=q-t}o=r==null
n=o?a1:A.j8(r,s)
m=B.k.aq(s,1)===0?B.k.a7(s,0):B.k.a7(s,1)
l=a3>=100
k=!a2
if(!k||o)j=a1
else j=l?u.Wv(t,t):u.Wv(r,t)+u.Wv(t-r,t)
if(a2)i=a1
else{j.toString
i=t-j}h=o||a2?a1:r-u.Wv(r,t)
g=!k||t<=0||j==null?a1:j/t*100
if(g==null)f=""
else{a2=B.k.a7(g,B.k.aq(g,1)===0?0:1)
f=" ("+A.b_(a2,".",",")+"%)"}a2=new C.bOg()
o=A.a2(16)
k=a2.$3$muted("O teu valor",w.$1(t),!0)
e=p==null?"\u2014":"+ "+A.q(w.$1(p))
d=y.u
e=A.a([k,a2.$3$muted("Taxa de servi\xe7o do cliente ("+m+"% + 1 \u20ac/pagamento)",e,!0),a2.$3$strong("Total para o cliente",w.$1(q),!0),D.M3],d)
k=u.a
if(!(k.length===0&&u.b<=0)){a0=j==null?"\u2014":"\u2212 "+A.q(w.$1(j))
B.e.p(e,A.a([a2.$3$muted("A tua taxa de servi\xe7o"+f,a0,!0),a2.$3$strong("Recebes no total",w.$1(i),!0)],d))}if(!l){a0=a2.$3$strong("Sinal ("+B.k.a7(a3,0)+"%) para o cliente",w.$1(n),!0)
B.e.p(e,A.a([D.M3,a0,a2.$3$muted("Recebes de sinal",w.$1(k.length===0&&u.b<=0?r:h),!0)],d))}e.push(B.ar)
if(!(k.length===0&&u.b<=0)){a2=u.Mi(new C.bOf())
w=l?"Sem sinal: o cliente paga tudo ao aceitar e recebes 3 dias depois do evento.":"Recebes o sinal 48 h depois de o cliente o pagar e o restante 3 dias depois do evento."
w="O cliente paga a taxa de servi\xe7o por cima do teu valor. A tua \xe9 de "+a2+" do valor da reserva, mais 1 \u20ac por pagamento. "+w+" Valores com IVA inclu\xeddo."
a2=w}else a2="A taxa de servi\xe7o \xe9 paga pelo cliente, por cima do teu valor \u2014 recebes o valor por inteiro."
e.push(A.i(a2,a1,a1,a1,a1,B.oG,a1,a1,a1))
return A.C(a1,A.B(e,B.J,B.j,B.o,0,B.v),B.r,a1,a1,new A.O(B.a8,a1,a1,o,a1,a1,B.y),a1,a1,a1,D.aru,a1,a1,a1)}}
var z=a.updateTypes(["F<~>()"])
C.cDz.prototype={
$1(d){return this.aF3(d)},
aF3(d){var x=0,w=A.n(y.b),v,u=2,t=[],s,r,q,p,o,n
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=$.T().b
o===$&&A.b()
q=o.gbE().e.a
q=q==null?null:q.r
s=q==null?null:q.a
x=s!=null?3:4
break
case 3:u=6
q=y.m
x=9
return A.d(o.aU("partner_deposit_pct",A.S(["p_partner_id",s],y.w,q),q),$async$$1)
case 9:r=f
if(typeof r=="number"){v=r
x=1
break}u=2
x=8
break
case 6:u=5
n=t.pop()
x=8
break
case 5:x=2
break
case 8:case 4:v=d.G($.ddB().gej(),y.j)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:186}
C.cFP.prototype={
$1(d){return this.aFX(d)},
aFX(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.T().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.P("platform_settings").aw(0,"deposit_percentage").W("id",1).dN(0),$async$$1)
case 3:v=t.dp(s.h(f,"deposit_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:186}
C.cq_.prototype={
$0(){return this.a.q(new C.cpZ())},
$S:0}
C.cpZ.prototype={
$0(){},
$S:0}
C.cpU.prototype={
$0(){var x,w=this.a
w.Q=B.f.D(w.gUi(0).a.a).length===0?"Indica um t\xedtulo para a proposta":null
x=this.b
w.as=x==null||x<=0?"Indica um valor total v\xe1lido":null},
$S:0}
C.cpP.prototype={
$0(){var x=this.a
x.ax=!0
x.at=null},
$S:0}
C.cpQ.prototype={
$1(d){return d},
$S:1}
C.cpR.prototype={
$0(){return 20},
$S:112}
C.cpS.prototype={
$0(){var x,w=this.a
w.ax=!1
x=this.b.b
if(x==="P0001")x="Este pedido j\xe1 teve uma proposta enviada ou j\xe1 n\xe3o est\xe1 dispon\xedvel."
else x=x==="P0008"?"Este cliente j\xe1 tem uma reserva contigo. S\xf3 podes enviar outra proposta se essa for cancelada sem nada pago.":"N\xe3o foi poss\xedvel enviar a proposta."
w.at=x},
$S:0}
C.cpT.prototype={
$0(){var x=this.a
x.ax=!1
x.at="N\xe3o foi poss\xedvel enviar a proposta."},
$S:0}
C.cpX.prototype={
$1(d){return this.a.q(new C.cpW())},
$S:3}
C.cpW.prototype={
$0(){},
$S:0}
C.cpY.prototype={
$1(d){var x=this.a
return x.q(new C.cpV(x,d))},
$S:10}
C.cpV.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bOh.prototype={
$1(d){return d==null?"\u2014":A.aP(d,!0)},
$S:256}
C.bOg.prototype={
$4$muted$strong(d,e,f,g){var x,w=null,v=g?14:13,u=g?B.F:B.bg
v=A.a6(A.i(d,w,w,w,w,A.aH(w,w,g?B.A:B.T,w,w,w,w,w,w,w,w,v,w,w,u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
u=g?14:13
x=g?B.F:B.bg
return new A.Q(B.Cb,A.R(A.a([v,A.i(e,w,w,w,w,A.aH(w,w,f?B.T:B.A,w,w,w,w,w,w,w,w,u,w,w,x,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.u),B.x,B.j,B.o,0,w,w),w)},
$2(d,e){return this.$4$muted$strong(d,e,!1,!1)},
$3$muted(d,e,f){return this.$4$muted$strong(d,e,f,!1)},
$3$strong(d,e,f){return this.$4$muted$strong(d,e,!1,f)},
$S:1394}
C.bOf.prototype={
$1(d){return A.aP(d,!1)},
$S:177};(function installTearOffs(){var x=a._instance_0u
x(C.agp.prototype,"gbg2","zY",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bx,[C.cDz,C.cFP,C.cpQ,C.cpX,C.cpY,C.bOh,C.bOg,C.bOf])
w(C.a7v,A.dD)
w(C.agp,A.dv)
x(A.bR,[C.cq_,C.cpZ,C.cpU,C.cpP,C.cpR,C.cpS,C.cpT,C.cpW,C.cpV])
w(C.aDr,A.eo)})()
A.bu(b.typeUniverse,JSON.parse('{"a7v":{"I":[],"e":[],"f":[]},"agp":{"a1":["a7v"]},"aDr":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{y:x("ax<f3>"),D:x("ax<P>"),j:x("P/"),u:x("t<e>"),x:x("dx"),E:x("L"),w:x("c"),b:x("P"),m:x("@"),v:x("~")}})();(function constants(){D.M3=new A.kk(16,null,null,null,B.br,null)
D.aru=new A.a0(14,10,14,10)
D.as5=new A.a0(18,12,18,12)
D.aE9=new A.dU(null,null,null,null,null,null,null,null,null,null,"Conta o que est\xe1 inclu\xeddo.",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,B.ce,null,null,B.ce,B.ce,!0,null,null,null,null)
D.bIm=new A.kn("Descri\xe7\xe3o (opcional)",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dOK","cMb",()=>A.ez(new C.cDz(),null,!1,null,null,y.b))
x($,"dPO","ddB",()=>A.ez(new C.cFP(),null,!1,null,null,y.b))})()};
(a=>{a["4pAwBag2vMfg62Yc5DNwe7f38Ic="]=a.current})($__dart_deferred_initializers__);