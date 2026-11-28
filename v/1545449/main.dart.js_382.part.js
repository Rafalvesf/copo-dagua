((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={cGW:function cGW(){},cJe:function cJe(){},
dsd(d){return new C.a8g(d,null)},
a8g:function a8g(d,e){this.d=d
this.a=e},
aho:function aho(d,e,f){var _=this
_.w=$
_.x=d
_.y=e
_.z=f
_.at=_.as=_.Q=null
_.ax=!1
_.ay=!0
_.d=$
_.c=_.a=null},
ct6:function ct6(d){this.a=d},
ct5:function ct5(){},
ct0:function ct0(d,e){this.a=d
this.b=e},
csW:function csW(d){this.a=d},
csX:function csX(){},
csY:function csY(){},
csZ:function csZ(d,e){this.a=d
this.b=e},
ct_:function ct_(d){this.a=d},
ct3:function ct3(d){this.a=d},
ct2:function ct2(){},
ct4:function ct4(d){this.a=d},
ct1:function ct1(d,e){this.a=d
this.b=e},
aEG:function aEG(d,e){this.e=d
this.a=e},
bQV:function bQV(){},
bQU:function bQU(){},
bQT:function bQT(){},
cNl(d,e,f,g,h){var x=0,w=A.n(y.v),v,u
var $async$cNl=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:v=$.T()
u=v.b
u===$&&A.b()
u=u.R("messages")
v=v.b.gbE().e.a
x=2
return A.d(u.de(0,A.S(["conversation_id",d,"sender_role","partner","sender_id",(v==null?null:v.r).a,"body","Enviou uma proposta: "+h+" \u2014 "+A.aQ(f,!1)+" (sinal "+A.aQ(e,!1)+")","proposal_id",g,"proposal_title",h,"proposal_price",f,"proposal_deposit_amount",e],y.w,y.E)),$async$cNl)
case 2:return A.l(null,w)}})
return A.m($async$cNl,w)}},D,F,G
J=c[1]
A=c[0]
B=c[2]
E=c[156]
C=a.updateHolder(c[35],C)
D=c[341]
F=c[114]
G=c[248]
C.a8g.prototype={
P(){var x=$.ac()
return new C.aho(new A.aI(B.ao,x),new A.aI(B.ao,x),new A.aI(B.ao,x))}}
C.aho.prototype={
gUP(d){var x,w=this.w
if(w===$){x=this.a.d.w
if(x==null)x=""
w=this.w=new A.aI(new A.bJ(x,B.aL,B.aD),$.ac())}return w},
al(){this.aH()
this.y.am(0,new C.ct6(this))},
m(){var x=this,w=x.gUP(0),v=w.Z$=$.ac()
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
x.a7()},
blK(){var x=this,w=B.f.D(x.y.a.a)
x.q(new C.ct0(x,A.fo(A.b0(w,",","."))))
return x.Q==null&&x.as==null},
A8(){var x=0,w=A.n(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$A8=A.j(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:if(!s.blK()){x=1
break}k=s.c
k.toString
j=s.y
i=B.f.D(j.a.a)
i=A.fo(A.b0(i,",","."))
i.toString
x=3
return A.d(E.akB(k,i),$async$A8)
case 3:if(!a4){x=1
break}if(s.c==null){x=1
break}s.q(new C.csW(s))
u=5
r=B.f.D(s.gUP(0).a.a)
k=B.f.D(j.a.a)
k=A.fo(A.b0(k,",","."))
k.toString
q=k
k=s.gT()
j=y.b
p=A.iz(k.a1(0,$.cPN(),y.D),new C.csX(),new C.csY(),j,j)
o=A.iU(B.k.a8(q*p/100,2))
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
return A.d(i.aT("send_proposal",A.S(["p_quote_request_id",h.a,"p_title",r,"p_description",g,"p_price",q,"p_payment_terms",f,"p_deposit_refundable",s.ay],y.w,e),e),$async$A8)
case 8:n=a2.a1(a4)
u=10
i=s.a.d
j=j.b.gbE().e.a
x=13
return A.d(A.uq(i.c,(j==null?null:j.r).a),$async$A8)
case 13:m=a4
x=14
return A.d(C.cNl(m,o,q,n,r),$async$A8)
case 14:u=5
x=12
break
case 10:u=9
a0=t.pop()
x=12
break
case 9:x=5
break
case 12:k.ai($.wv())
k=s.c
if(k==null){x=1
break}A.ai(k).aj(null)
k=s.c
if(k==null){x=1
break}A.ai(k).aj(null)
u=2
x=7
break
case 5:u=4
a1=t.pop()
k=A.a9(a1)
if(k instanceof A.cU){l=k
if(s.c==null){x=1
break}s.q(new C.csZ(s,l))}else{if(s.c==null){x=1
break}s.q(new C.ct_(s))}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$A8,w)},
u(d){var x,w,v,u,t,s,r,q=this,p=null,o="Enviar proposta",n=q.gT().H($.cPN(),y.D)
n=n.gv(n)
x=(n==null?0:n)>=100
n=y.u
w=A.a([A.aJ(p,A.aw(d,B.b5,y.x).w.r.b,p),A.vr(!1,!0,"Para "+q.a.d.d,o,34,20,p)],n)
n=A.a([],n)
v=q.at
if(v!=null)n.push(new A.J8(v,p))
n.push(A.ho(!1,q.gUP(0),q.Q,B.t,p,p,"T\xedtulo do servi\xe7o",p,p))
n.push(B.a3)
n.push(D.bK5)
n.push(B.X)
v=A.a0(22)
n.push(A.D(p,A.cN(p,B.a9,!1,p,!0,B.z,p,A.cQ(),q.x,p,p,p,p,p,2,D.aFt,B.a2,!0,p,!0,p,!1,p,B.aJ,p,p,p,p,p,p,p,p,4,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.aw,p,p,p,p,p,p,p,p,p,p,p,B.h9,!0,B.au,p,B.b8,p,p,p,p),B.r,p,p,new A.O(B.t,p,p,v,p,p,B.y),p,p,p,D.atc,p,p,p))
n.push(B.a3)
v=q.y
n.push(A.ho(!1,v,q.as,B.t,p,B.j0,"Valor total (\u20ac)",p,new C.ct3(q)))
n.push(B.P)
n.push(new C.aEG(v.a.a,p))
n.push(B.P)
v=A.a0(22)
u=q.ay
t=$.ap
s=A.i(x?"Cancel\xe1vel nas primeiras 48 h":"Sinal cancel\xe1vel",p,p,p,p,B.mq,p,p,p)
if(x)r=u?"O cliente paga tudo ao aceitar. Se cancelar nas 48 h depois de pagar, recebe tudo de volta; depois valem as tuas regras de cancelamento.":"O cliente paga tudo ao aceitar. Se cancelar, valem as tuas regras de cancelamento. Se fores tu a cancelar, recebe tudo de volta."
else r=u?"Se o organizador cancelar nas 48 h depois de pagar, recebe o sinal de volta. Depois disso, fica contigo.":"Se o organizador cancelar, o sinal fica sempre contigo. Se fores tu a cancelar, o organizador recebe tudo de volta."
n.push(A.D(p,A.a9c(t,p,new C.ct4(q),A.i(r,p,p,p,p,B.W,p,p,p),s,u),B.r,p,p,new A.O(B.t,p,p,v,p,p,B.y),p,p,p,p,p,p,p))
n.push(B.P)
n.push(A.ho(!1,q.z,p,B.t,"Ex.: restante at\xe9 30 dias antes",p,"Condi\xe7\xf5es de pagamento (opcional)",p,p))
n.push(B.bf)
n.push(new A.fJ(o,q.gbhp(),q.ax,p))
return A.cM(p,B.bx,A.bC(!0,new A.mg(w,A.dX(A.B(n,B.I,B.j,B.m,0,B.v),B.z,p,G.Nw,p,p,B.a1),p),p,B.a_,!1),!0,p)}}
C.aEG.prototype={
bc(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a5.H($.cPN(),y.D),a3=a2.gv(a2)
a2=$.T().b
a2===$&&A.b()
a2=a2.gbE().e.a
a2=a2==null?a1:a2.r
x=a2==null?a1:a2.a
a2=y.y
if(x==null){w=a5.H($.uw(),a2)
v=w.gv(w)}else{w=a5.H($.CE().$1(x),a2)
v=w.gv(w)}a2=a5.H($.cY3(),a2)
u=a2.gv(a2)
if(u==null)u=B.f6
if(a3==null||v==null)return B.as
a2=B.f.D(this.e)
a2=A.b0(a2," ","")
t=A.fo(A.b0(a2,",","."))
a2=t==null
s=v.lg(a2?0:t)
w=new C.bQV()
r=a2?a1:t*a3/100
q=a2?a1:F.cWj(t,r,s)
if(a2)p=a1
else{q.toString
p=q-t}o=r==null
n=o?a1:A.j9(r,s)
m=B.k.ar(s,1)===0?B.k.a8(s,0):B.k.a8(s,1)
l=a3>=100
k=!a2
if(!k||o)j=a1
else j=l?u.X0(t,t):u.X0(r,t)+u.X0(t-r,t)
if(a2)i=a1
else{j.toString
i=t-j}h=o||a2?a1:r-u.X0(r,t)
g=!k||t<=0||j==null?a1:j/t*100
if(g==null)f=""
else{a2=B.k.a8(g,B.k.ar(g,1)===0?0:1)
f=" ("+A.b0(a2,".",",")+"%)"}a2=new C.bQU()
o=A.a0(16)
k=a2.$3$muted("O teu valor",w.$1(t),!0)
e=p==null?"\u2014":"+ "+A.q(w.$1(p))
d=y.u
e=A.a([k,a2.$3$muted("Taxa de servi\xe7o do cliente ("+m+"% + 1 \u20ac/pagamento)",e,!0),a2.$3$strong("Total para o cliente",w.$1(q),!0),D.MK],d)
k=u.a
if(!(k.length===0&&u.b<=0)){a0=j==null?"\u2014":"\u2212 "+A.q(w.$1(j))
B.e.n(e,A.a([a2.$3$muted("A tua taxa de servi\xe7o"+f,a0,!0),a2.$3$strong("Recebes no total",w.$1(i),!0)],d))}if(!l){a0=a2.$3$strong("Sinal ("+B.k.a8(a3,0)+"%) para o cliente",w.$1(n),!0)
B.e.n(e,A.a([D.MK,a0,a2.$3$muted("Recebes de sinal",w.$1(k.length===0&&u.b<=0?r:h),!0)],d))}e.push(B.at)
if(!(k.length===0&&u.b<=0)){a2=u.MG(new C.bQT())
w=l?"Sem sinal: o cliente paga tudo ao aceitar e recebes 3 dias depois do evento.":"Recebes o sinal 48 h depois de o cliente o pagar e o restante 3 dias depois do evento."
w="O cliente paga a taxa de servi\xe7o por cima do teu valor. A tua \xe9 de "+a2+" do valor da reserva, mais 1 \u20ac por pagamento. "+w+" Valores com IVA inclu\xeddo."
a2=w}else a2="A taxa de servi\xe7o \xe9 paga pelo cliente, por cima do teu valor \u2014 recebes o valor por inteiro."
e.push(A.i(a2,a1,a1,a1,a1,B.oT,a1,a1,a1))
return A.D(a1,A.B(e,B.I,B.j,B.m,0,B.v),B.r,a1,a1,new A.O(B.ac,a1,a1,o,a1,a1,B.y),a1,a1,a1,D.asC,a1,a1,a1)}}
var z=a.updateTypes(["F<~>()"])
C.cGW.prototype={
$1(d){return this.aFQ(d)},
aFQ(d){var x=0,w=A.n(y.b),v,u=2,t=[],s,r,q,p,o,n
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
return A.d(o.aT("partner_deposit_pct",A.S(["p_partner_id",s],y.w,q),q),$async$$1)
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
case 8:case 4:v=d.H($.dhp().gem(),y.j)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:157}
C.cJe.prototype={
$1(d){return this.aGJ(d)},
aGJ(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.T().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.R("platform_settings").az(0,"deposit_percentage").W("id",1).dP(0),$async$$1)
case 3:v=t.dt(s.h(f,"deposit_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:157}
C.ct6.prototype={
$0(){return this.a.q(new C.ct5())},
$S:0}
C.ct5.prototype={
$0(){},
$S:0}
C.ct0.prototype={
$0(){var x,w=this.a
w.Q=B.f.D(w.gUP(0).a.a).length===0?"Indica um t\xedtulo para a proposta":null
x=this.b
w.as=x==null||x<=0?"Indica um valor total v\xe1lido":null},
$S:0}
C.csW.prototype={
$0(){var x=this.a
x.ax=!0
x.at=null},
$S:0}
C.csX.prototype={
$1(d){return d},
$S:2}
C.csY.prototype={
$0(){return 20},
$S:108}
C.csZ.prototype={
$0(){var x,w=this.a
w.ax=!1
x=this.b.b
if(x==="P0001")x="Este pedido j\xe1 teve uma proposta enviada ou j\xe1 n\xe3o est\xe1 dispon\xedvel."
else x=x==="P0008"?"Este cliente j\xe1 tem uma reserva contigo. S\xf3 podes enviar outra proposta se essa for cancelada sem nada pago.":"N\xe3o foi poss\xedvel enviar a proposta."
w.at=x},
$S:0}
C.ct_.prototype={
$0(){var x=this.a
x.ax=!1
x.at="N\xe3o foi poss\xedvel enviar a proposta."},
$S:0}
C.ct3.prototype={
$1(d){return this.a.q(new C.ct2())},
$S:3}
C.ct2.prototype={
$0(){},
$S:0}
C.ct4.prototype={
$1(d){var x=this.a
return x.q(new C.ct1(x,d))},
$S:10}
C.ct1.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bQV.prototype={
$1(d){return d==null?"\u2014":A.aQ(d,!0)},
$S:264}
C.bQU.prototype={
$4$muted$strong(d,e,f,g){var x,w=null,v=g?14:13,u=g?B.J:B.bh
v=A.a6(A.i(d,w,w,w,w,A.aG(w,w,g?B.A:B.S,w,w,w,w,w,w,w,w,v,w,w,u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
u=g?14:13
x=g?B.J:B.bh
return new A.Q(B.CH,A.R(A.a([v,A.i(e,w,w,w,w,A.aG(w,w,f?B.S:B.A,w,w,w,w,w,w,w,w,u,w,w,x,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.u),B.w,B.j,B.m,0,w,w),w)},
$2(d,e){return this.$4$muted$strong(d,e,!1,!1)},
$3$muted(d,e,f){return this.$4$muted$strong(d,e,f,!1)},
$3$strong(d,e,f){return this.$4$muted$strong(d,e,!1,f)},
$S:1421}
C.bQT.prototype={
$1(d){return A.aQ(d,!1)},
$S:152};(function installTearOffs(){var x=a._instance_0u
x(C.aho.prototype,"gbhp","A8",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bx,[C.cGW,C.cJe,C.csX,C.ct3,C.ct4,C.bQV,C.bQU,C.bQT])
w(C.a8g,A.dD)
w(C.aho,A.dy)
x(A.bR,[C.ct6,C.ct5,C.ct0,C.csW,C.csY,C.csZ,C.ct_,C.ct2,C.ct1])
w(C.aEG,A.en)})()
A.br(b.typeUniverse,JSON.parse('{"a8g":{"K":[],"e":[],"f":[]},"aho":{"a_":["a8g"]},"aEG":{"K":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{y:x("ax<f8>"),D:x("ax<P>"),j:x("P/"),u:x("r<e>"),x:x("dn"),E:x("I"),w:x("c"),b:x("P"),m:x("@"),v:x("~")}})();(function constants(){D.MK=new A.kk(16,null,null,null,B.bv,null)
D.asC=new A.a2(14,10,14,10)
D.atc=new A.a2(18,12,18,12)
D.aFt=new A.dT(null,null,null,null,null,null,null,null,null,null,"Conta o que est\xe1 inclu\xeddo.",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,B.ca,null,null,B.ca,B.ca,!0,null,null,null,null)
D.bK5=new A.ko("Descri\xe7\xe3o (opcional)",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTb","cPN",()=>A.eE(new C.cGW(),null,!1,null,null,y.b))
x($,"dUf","dhp",()=>A.eE(new C.cJe(),null,!1,null,null,y.b))})()};
(a=>{a["Q8PN77D9zVd1mRDil1CnhKr5qL8="]=a.current})($__dart_deferred_initializers__);