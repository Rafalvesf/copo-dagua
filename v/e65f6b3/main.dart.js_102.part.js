((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dbc(d){return new B.Dm(d,null)},
Dm:function Dm(d,e){this.d=d
this.a=e},
aEI:function aEI(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
bYv:function bYv(d){this.a=d},
bYn:function bYn(d){this.a=d},
bYo:function bYo(d){this.a=d},
bYp:function bYp(d,e){this.a=d
this.b=e},
bYt:function bYt(d){this.a=d},
bYu:function bYu(d){this.a=d},
bYq:function bYq(d){this.a=d},
bYr:function bYr(d,e){this.a=d
this.b=e},
bYs:function bYs(d,e){this.a=d
this.b=e},
cv1(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cv1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.R().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.b2("get_partner_invite",A.Q(["p_token",d],y.w,u),u),$async$cv1)
case 3:t=m.a(f)
n=J.a5(t)
if(n.gY(t)){v=null
x=1
break}s=y.y.a(n.gN(t))
n=J.a5(s)
r=A.L(n.h(s,"partner_name_1"))
if(r==null)r=""
q=A.L(n.h(s,"partner_name_2"))
u=A.L(n.h(s,"inviter_name"))
p=u==null?null:C.f.D(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.e2(n.h(s,"valid"))
v=new A.aIZ(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cv1,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[194]
E=c[195]
B.Dm.prototype={
P(){return new B.aEI()}}
B.aEI.prototype={
aj(){this.aH()
$.ay.k4$.push(new B.bYv(this))},
RM(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$RM=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gU()
n=o.a1(0,$.b7(),y.e)
if(n.a!==C.hY){o.a1(0,$.BP().gaW(),y.v).sa2(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dF){s.q(new B.bYn(s))
x=1
break}s.q(new B.bYo(s))
u=4
x=7
return A.d(A.aQq(s.a.d),$async$RM)
case 7:o.al($.cC())
o=s.c
if(o==null){x=1
break}A.ar(o).bR(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.a7(m)
if(s.c==null){x=1
break}s.q(new B.bYp(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$RM,w)},
u(d){var x,w,v,u=this,t=null
if(u.gU().L($.b7(),y.e).a===C.hY){x=u.x
x=x==null?C.jK:A.t4(A.a([new A.fr("Voltar",new B.bYt(d),!1,t)],y.u),t,t,x,C.nx,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cv1(u.a.d)
u.w!==$&&A.aT()
u.w=v
w=v}x=A.cGA(new B.bYu(u),w,y.s)}return A.cP(t,C.bA,A.bA(!0,new A.V(C.h5,A.bT(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.bYv.prototype={
$1(d){return this.a.RM()},
$S:7}
B.bYn.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.bYo.prototype={
$0(){return!0},
$S:0}
B.bYp.prototype={
$0(){var x=this.b,w=x instanceof A.cV
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.bYt.prototype={
$0(){return A.ar(this.a).bR(0,"/home",null)},
$S:0}
B.bYu.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.pj)return C.jK
x=e.b
if(x==null||!x.c)return A.t4(A.a([new A.fr("Ir para o in\xedcio",new B.bYq(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.nx,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.X(22)
r=y.u
s=A.F(q,A.G(A.a([D.c74,C.a1,A.i("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,D.bXu,q,q,q)],r),C.J,C.l,C.q,0,C.w),C.r,q,q,new A.M(C.u,q,q,s,C.aK,q,C.y),q,q,q,C.cP,q,q,q)
v=this.a
return A.t4(A.a([new A.fr("Criar conta",new B.bYr(v,d),!1,q),A.ia(E.Hq,new B.bYs(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a05,w)},
$S:1378}
B.bYq.prototype={
$0(){return A.ar(this.a).bR(0,"/welcome",null)},
$S:0}
B.bYr.prototype={
$0(){var x=this.a
x.gU().a1(0,$.BP().gaW(),y.v).sa2(0,x.a.d)
A.ar(this.b).aU("/register?role=couple",null,y.q)},
$S:0}
B.bYs.prototype={
$0(){var x=this.a
x.gU().a1(0,$.BP().gaW(),y.v).sa2(0,x.a.d)
A.ar(this.b).aU("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Dm,A.ds)
x(B.aEI,A.di)
x(B.bYv,A.bv)
w(A.bN,[B.bYn,B.bYo,B.bYp,B.bYt,B.bYq,B.bYr,B.bYs])
x(B.bYu,A.cM)})()
A.bt(b.typeUniverse,JSON.parse('{"Dm":{"I":[],"e":[],"f":[]},"aEI":{"a1":["Dm"]}}'))
var y=(function rtii(){var x=A.w
return{e:x("cw"),u:x("r<e>"),i:x("t<@>"),y:x("a3<c,@>"),v:x("A4"),w:x("c"),b:x("@"),q:x("J?"),s:x("+inviterName,names,valid(c?,c,z)?"),r:x("~")}})();(function constants(){D.bXu=new A.H(!0,C.A,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c74=new A.B("O QUE ISTO SIGNIFICA",null,C.a8s,null,null,null,null,null,null,null,null)})()};
(a=>{a["tAXBXwwFn0YpPc5Yo7Ef6qG+k5U="]=a.current})($__dart_deferred_initializers__);