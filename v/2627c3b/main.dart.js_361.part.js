((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={cxV:function cxV(){},cA5:function cA5(){},
dhU(d){return new C.a6B(d,null)},
a6B:function a6B(d,e){this.d=d
this.a=e},
aft:function aft(d,e,f){var _=this
_.w=$
_.x=d
_.y=e
_.z=f
_.at=_.as=_.Q=null
_.ax=!1
_.ay=!0
_.d=$
_.c=_.a=null},
cki:function cki(d){this.a=d},
ckh:function ckh(){},
ckc:function ckc(d,e){this.a=d
this.b=e},
ck7:function ck7(d){this.a=d},
ck8:function ck8(){},
ck9:function ck9(){},
cka:function cka(d,e){this.a=d
this.b=e},
ckb:function ckb(d){this.a=d},
ckf:function ckf(d){this.a=d},
cke:function cke(){},
ckg:function ckg(d){this.a=d},
ckd:function ckd(d,e){this.a=d
this.b=e},
aCd:function aCd(d,e){this.e=d
this.a=e},
bLd:function bLd(){},
bLc:function bLc(){},
bLb:function bLb(){},
cDZ(d,e,f,g,h){var x=0,w=A.n(y.v),v,u
var $async$cDZ=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:v=$.R()
u=v.b
u===$&&A.b()
u=u.P("messages")
v=v.b.gbF().e.a
x=2
return A.d(u.d9(0,A.Q(["conversation_id",d,"sender_role","partner","sender_id",(v==null?null:v.r).a,"body","Enviou uma proposta: "+h+" \u2014 "+A.aX(f,!1)+" (sinal "+A.aX(e,!1)+")","proposal_id",g,"proposal_title",h,"proposal_price",f,"proposal_deposit_amount",e],y.w,y.E)),$async$cDZ)
case 2:return A.l(null,w)}})
return A.m($async$cDZ,w)}},D,F,G
J=c[1]
A=c[0]
B=c[2]
E=c[148]
C=a.updateHolder(c[32],C)
D=c[318]
F=c[107]
G=c[319]
C.a6B.prototype={
S(){var x=$.ae()
return new C.aft(new A.aH(B.am,x),new A.aH(B.am,x),new A.aH(B.am,x))}}
C.aft.prototype={
gU_(d){var x,w=this.w
if(w===$){x=this.a.d.w
if(x==null)x=""
w=this.w=new A.aH(new A.bG(x,B.aK,B.aA),$.ae())}return w},
al(){this.aI()
this.y.ak(0,new C.cki(this))},
m(){var x=this,w=x.gU_(0),v=w.a0$=$.ae()
w.W$=0
w=x.x
w.a0$=v
w.W$=0
w=x.y
w.a0$=v
w.W$=0
w=x.z
w.a0$=v
w.W$=0
x.aa()},
bjh(){var x=this,w=B.f.D(x.y.a.a)
x.q(new C.ckc(x,A.f9(A.b1(w,",","."))))
return x.Q==null&&x.as==null},
zO(){var x=0,w=A.n(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$zO=A.j(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:if(!s.bjh()){x=1
break}k=s.c
k.toString
j=s.y
i=B.f.D(j.a.a)
i=A.f9(A.b1(i,",","."))
i.toString
x=3
return A.d(E.aiC(k,i),$async$zO)
case 3:if(!a4){x=1
break}if(s.c==null){x=1
break}s.q(new C.ck7(s))
u=5
r=B.f.D(s.gU_(0).a.a)
k=B.f.D(j.a.a)
k=A.f9(A.b1(k,",","."))
k.toString
q=k
k=s.gU()
j=y.b
p=A.ip(k.a2(0,$.cGl(),y.D),new C.ck8(),new C.ck9(),j,j)
o=A.j3(B.j.a4(q*p/100,2))
j=$.R()
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
return A.d(i.b1("send_proposal",A.Q(["p_quote_request_id",h.a,"p_title",r,"p_description",g,"p_price",q,"p_payment_terms",f,"p_deposit_refundable",s.ay],y.w,e),e),$async$zO)
case 8:n=a2.a2(a4)
u=10
i=s.a.d
j=j.b.gbF().e.a
x=13
return A.d(A.tV((j==null?null:j.r).a,i.c),$async$zO)
case 13:m=a4
x=14
return A.d(C.cDZ(m,o,q,n,r),$async$zO)
case 14:u=5
x=12
break
case 10:u=9
a0=t.pop()
x=12
break
case 9:x=5
break
case 12:k.aj($.vT())
k=s.c
if(k==null){x=1
break}A.ar(k).ar(null)
k=s.c
if(k==null){x=1
break}A.ar(k).ar(null)
u=2
x=7
break
case 5:u=4
a1=t.pop()
k=A.a9(a1)
if(k instanceof A.cW){l=k
if(s.c==null){x=1
break}s.q(new C.cka(s,l))}else{if(s.c==null){x=1
break}s.q(new C.ckb(s))}x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$zO,w)},
u(d){var x,w,v,u,t,s,r,q=this,p=null,o="Enviar proposta",n=q.gU().L($.cGl(),y.D)
n=n.gv(n)
x=(n==null?0:n)>=100
n=y.u
w=A.a([A.aM(p,A.av(d,B.bb,y.x).w.r.b,p),A.uR(!1,!0,"Para "+q.a.d.d,o,34,20,p)],n)
n=A.a([],n)
v=q.at
if(v!=null)n.push(new A.Ii(v,p))
n.push(A.hi(!1,q.gU_(0),q.Q,B.u,p,p,"T\xedtulo do servi\xe7o",p,p))
n.push(B.a7)
n.push(D.bHs)
n.push(B.Y)
v=A.X(22)
n.push(A.C(p,A.cR(p,B.aa,!1,p,!0,B.A,p,A.cT(),q.x,p,p,p,p,p,2,D.aDE,B.a1,!0,p,!0,p,!1,p,B.aN,p,p,p,p,p,p,p,p,4,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ay,p,p,p,p,p,p,p,p,p,p,p,B.jA,!0,B.as,p,B.bc,p,p,p,p),B.r,p,p,new A.L(B.u,p,p,v,p,p,B.y),p,p,p,D.arQ,p,p,p))
n.push(B.a7)
v=q.y
n.push(A.hi(!1,v,q.as,B.u,p,B.iI,"Valor total (\u20ac)",p,new C.ckf(q)))
n.push(B.V)
n.push(new C.aCd(v.a.a,p))
n.push(B.V)
v=A.X(22)
u=q.ay
t=$.aj
s=A.i(x?"Cancel\xe1vel nas primeiras 48 h":"Sinal cancel\xe1vel",p,p,p,p,B.om,p,p,p)
if(x)r=u?"O cliente paga tudo ao aceitar. Se cancelar nas 48 h depois de pagar, recebe tudo de volta; depois valem as tuas regras de cancelamento.":"O cliente paga tudo ao aceitar. Se cancelar, valem as tuas regras de cancelamento. Se fores tu a cancelar, recebe tudo de volta."
else r=u?"Se o organizador cancelar nas 48 h depois de pagar, recebe o sinal de volta. Depois disso, fica contigo.":"Se o organizador cancelar, o sinal fica sempre contigo. Se fores tu a cancelar, o organizador recebe tudo de volta."
n.push(A.C(p,A.ax9(t,p,new C.ckg(q),A.i(r,p,p,p,p,B.a3,p,p,p),s,u),B.r,p,p,new A.L(B.u,p,p,v,p,p,B.y),p,p,p,p,p,p,p))
n.push(B.V)
n.push(A.hi(!1,q.z,p,B.u,"Ex.: restante at\xe9 30 dias antes",p,"Condi\xe7\xf5es de pagamento (opcional)",p,p))
n.push(B.bi)
n.push(new A.fu(o,q.gbeZ(),q.ax,p))
return A.cP(p,B.bC,A.bE(!0,new A.l_(w,A.eg(A.E(n,B.J,B.k,B.p,0,B.w),B.A,p,G.Mv,p,B.a2),p),p,B.Z,!1),!0,p)}}
C.aCd.prototype={
bg(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a5.L($.cGl(),y.D),a3=a2.gv(a2)
a2=$.R().b
a2===$&&A.b()
a2=a2.gbF().e.a
a2=a2==null?a1:a2.r
x=a2==null?a1:a2.a
a2=y.y
if(x==null){w=a5.L($.vS(),a2)
v=w.gv(w)}else{w=a5.L($.BV().$1(x),a2)
v=w.gv(w)}a2=a5.L($.cOA(),a2)
u=a2.gv(a2)
if(u==null)u=B.fb
if(a3==null||v==null)return B.aq
a2=B.f.D(this.e)
a2=A.b1(a2," ","")
t=A.f9(A.b1(a2,",","."))
a2=t==null
s=v.lI(a2?0:t)
w=new C.bLd()
r=a2?a1:t*a3/100
q=a2?a1:F.cMT(t,r,s)
if(a2)p=a1
else{q.toString
p=q-t}o=r==null
n=o?a1:A.ic(r,s)
m=B.j.an(s,1)===0?B.j.a4(s,0):B.j.a4(s,1)
l=a3>=100
k=!a2
if(!k||o)j=a1
else j=l?u.Wb(t,t):u.Wb(r,t)+u.Wb(t-r,t)
if(a2)i=a1
else{j.toString
i=t-j}h=o||a2?a1:r-u.Wb(r,t)
g=!k||t<=0||j==null?a1:j/t*100
if(g==null)f=""
else{a2=B.j.a4(g,B.j.an(g,1)===0?0:1)
f=" ("+A.b1(a2,".",",")+"%)"}a2=new C.bLc()
o=A.X(16)
k=a2.$3$muted("O teu valor",w.$1(t),!0)
e=p==null?"\u2014":"+ "+A.q(w.$1(p))
d=y.u
e=A.a([k,a2.$3$muted("Taxa de servi\xe7o do cliente ("+m+"% + 1 \u20ac/pagamento)",e,!0),a2.$3$strong("Total para o cliente",w.$1(q),!0),D.LQ],d)
k=u.a
if(!(k.length===0&&u.b<=0)){a0=j==null?"\u2014":"\u2212 "+A.q(w.$1(j))
B.e.p(e,A.a([a2.$3$muted("A tua taxa de servi\xe7o"+f,a0,!0),a2.$3$strong("Recebes no total",w.$1(i),!0)],d))}if(!l){a0=a2.$3$strong("Sinal ("+B.j.a4(a3,0)+"%) para o cliente",w.$1(n),!0)
B.e.p(e,A.a([D.LQ,a0,a2.$3$muted("Recebes de sinal",w.$1(k.length===0&&u.b<=0?r:h),!0)],d))}e.push(B.ar)
if(!(k.length===0&&u.b<=0)){a2=u.M_(new C.bLb())
w=l?"Sem sinal: o cliente paga tudo ao aceitar e recebes 3 dias depois do evento.":"Recebes o sinal 48 h depois de o cliente o pagar e o restante 3 dias depois do evento."
w="O cliente paga a taxa de servi\xe7o por cima do teu valor. A tua \xe9 de "+a2+" do valor da reserva, mais 1 \u20ac por pagamento. "+w+" Valores com IVA inclu\xeddo."
a2=w}else a2="A taxa de servi\xe7o \xe9 paga pelo cliente, por cima do teu valor \u2014 recebes o valor por inteiro."
e.push(A.i(a2,a1,a1,a1,a1,B.ol,a1,a1,a1))
return A.C(a1,A.E(e,B.J,B.k,B.p,0,B.w),B.r,a1,a1,new A.L(B.ag,a1,a1,o,a1,a1,B.y),a1,a1,a1,D.ard,a1,a1,a1)}}
var z=a.updateTypes(["G<~>()"])
C.cxV.prototype={
$1(d){return this.aEh(d)},
aEh(d){var x=0,w=A.n(y.b),v,u=2,t=[],s,r,q,p,o,n
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:o=$.R().b
o===$&&A.b()
q=o.gbF().e.a
q=q==null?null:q.r
s=q==null?null:q.a
x=s!=null?3:4
break
case 3:u=6
q=y.m
x=9
return A.d(o.b1("partner_deposit_pct",A.Q(["p_partner_id",s],y.w,q),q),$async$$1)
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
case 8:case 4:v=d.L($.d7C().geP(),y.j)
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:172}
C.cA5.prototype={
$1(d){return this.aF8(d)},
aF8(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.R().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.P("platform_settings").aG(0,"deposit_percentage").V("id",1).dO(0),$async$$1)
case 3:v=t.dA(s.h(f,"deposit_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:172}
C.cki.prototype={
$0(){return this.a.q(new C.ckh())},
$S:0}
C.ckh.prototype={
$0(){},
$S:0}
C.ckc.prototype={
$0(){var x,w=this.a
w.Q=B.f.D(w.gU_(0).a.a).length===0?"Indica um t\xedtulo para a proposta":null
x=this.b
w.as=x==null||x<=0?"Indica um valor total v\xe1lido":null},
$S:0}
C.ck7.prototype={
$0(){var x=this.a
x.ax=!0
x.at=null},
$S:0}
C.ck8.prototype={
$1(d){return d},
$S:1}
C.ck9.prototype={
$0(){return 20},
$S:105}
C.cka.prototype={
$0(){var x,w=this.a
w.ax=!1
x=this.b.b
if(x==="P0001")x="Este pedido j\xe1 teve uma proposta enviada ou j\xe1 n\xe3o est\xe1 dispon\xedvel."
else x=x==="P0008"?"Este cliente j\xe1 tem uma reserva contigo. S\xf3 podes enviar outra proposta se essa for cancelada sem nada pago.":"N\xe3o foi poss\xedvel enviar a proposta."
w.at=x},
$S:0}
C.ckb.prototype={
$0(){var x=this.a
x.ax=!1
x.at="N\xe3o foi poss\xedvel enviar a proposta."},
$S:0}
C.ckf.prototype={
$1(d){return this.a.q(new C.cke())},
$S:3}
C.cke.prototype={
$0(){},
$S:0}
C.ckg.prototype={
$1(d){var x=this.a
return x.q(new C.ckd(x,d))},
$S:10}
C.ckd.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bLd.prototype={
$1(d){return d==null?"\u2014":A.aX(d,!0)},
$S:209}
C.bLc.prototype={
$4$muted$strong(d,e,f,g){var x,w=null,v=g?14:13,u=g?B.F:B.be
v=A.a7(A.i(d,w,w,w,w,A.aF(w,w,g?B.z:B.P,w,w,w,w,w,w,w,w,v,w,w,u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
u=g?14:13
x=g?B.F:B.be
return new A.T(B.ub,A.S(A.a([v,A.i(e,w,w,w,w,A.aF(w,w,f?B.P:B.z,w,w,w,w,w,w,w,w,u,w,w,x,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.u),B.x,B.k,B.p,0,w,w),w)},
$2(d,e){return this.$4$muted$strong(d,e,!1,!1)},
$3$muted(d,e,f){return this.$4$muted$strong(d,e,f,!1)},
$3$strong(d,e,f){return this.$4$muted$strong(d,e,!1,f)},
$S:1350}
C.bLb.prototype={
$1(d){return A.aX(d,!1)},
$S:177};(function installTearOffs(){var x=a._instance_0u
x(C.aft.prototype,"gbeZ","zO",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bx,[C.cxV,C.cA5,C.ck8,C.ckf,C.ckg,C.bLd,C.bLc,C.bLb])
w(C.a6B,A.dw)
w(C.aft,A.dq)
x(A.bS,[C.cki,C.ckh,C.ckc,C.ck7,C.ck9,C.cka,C.ckb,C.cke,C.ckd])
w(C.aCd,A.eD)})()
A.bu(b.typeUniverse,JSON.parse('{"a6B":{"I":[],"e":[],"f":[]},"aft":{"a1":["a6B"]},"aCd":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{y:x("aB<eZ>"),D:x("aB<U>"),j:x("U/"),u:x("r<e>"),x:x("dy"),E:x("K"),w:x("c"),b:x("U"),m:x("@"),v:x("~")}})();(function constants(){D.LQ=new A.lj(16,null,null,null,B.bL,null)
D.ard=new A.a0(14,10,14,10)
D.arQ=new A.a0(18,12,18,12)
D.aDE=new A.e3(null,null,null,null,null,null,null,null,null,null,"Conta o que est\xe1 inclu\xeddo.",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,B.cv,null,null,B.cv,B.cv,!0,null,null,null,null)
D.bHs=new A.kD("Descri\xe7\xe3o (opcional)",null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dIb","cGl",()=>A.eE(new C.cxV(),null,!1,null,null,y.b))
x($,"dJb","d7C",()=>A.eE(new C.cA5(),null,!1,null,null,y.b))})()};
(a=>{a["VyBQnof5OQH28AYJez/K0Ku4w0k="]=a.current})($__dart_deferred_initializers__);