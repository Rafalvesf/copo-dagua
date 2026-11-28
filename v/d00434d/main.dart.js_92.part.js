((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dpC(d){return new B.Eq(d,null)},
Eq:function Eq(d,e){this.d=d
this.a=e},
aI7:function aI7(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c5X:function c5X(d){this.a=d},
c5P:function c5P(d){this.a=d},
c5Q:function c5Q(d){this.a=d},
c5R:function c5R(d,e){this.a=d
this.b=e},
c5V:function c5V(d){this.a=d},
c5W:function c5W(d){this.a=d},
c5S:function c5S(d){this.a=d},
c5T:function c5T(d,e){this.a=d
this.b=e},
c5U:function c5U(d,e){this.a=d
this.b=e},
cGT(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cGT=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.T().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aS("get_partner_invite",A.S(["p_token",d],y.w,u),u),$async$cGT)
case 3:t=m.a(f)
n=J.a7(t)
if(n.gY(t)){v=null
x=1
break}s=y.y.a(n.gM(t))
n=J.a7(s)
r=A.E(n.h(s,"partner_name_1"))
if(r==null)r=""
q=A.E(n.h(s,"partner_name_2"))
u=A.E(n.h(s,"inviter_name"))
p=u==null?null:C.f.C(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.dX(n.h(s,"valid"))
v=new A.aMJ(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cGT,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[188]
E=c[189]
B.Eq.prototype={
P(){return new B.aI7()}}
B.aI7.prototype={
ai(){this.aA()
$.az.k4$.push(new B.c5X(this))},
SF(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$SF=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gS()
n=o.a0(0,$.b8(),y.e)
if(n.a!==C.it){o.a0(0,$.CJ().gaX(),y.v).sa3(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dP){s.p(new B.c5P(s))
x=1
break}s.p(new B.c5Q(s))
u=4
x=7
return A.d(A.aUq(s.a.d),$async$SF)
case 7:o.aj($.cl())
o=s.c
if(o==null){x=1
break}A.ai(o).bS(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.a9(m)
if(s.c==null){x=1
break}s.p(new B.c5R(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$SF,w)},
u(d){var x,w,v,u=this,t=null
if(u.gS().H($.b8(),y.e).a===C.it){x=u.x
x=x==null?C.kl:A.tK(A.a([new A.fU("Voltar",new B.c5V(d),!1,t)],y.u),t,t,x,C.ok,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cGT(u.a.d)
u.w!==$&&A.aX()
u.w=v
w=v}x=A.cTb(new B.c5W(u),w,y.s)}return A.cO(t,C.by,A.bC(!0,new A.Q(C.f7,A.bO(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.c5X.prototype={
$1(d){return this.a.SF()},
$S:6}
B.c5P.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c5Q.prototype={
$0(){return!0},
$S:0}
B.c5R.prototype={
$0(){var x=this.b,w=x instanceof A.cU
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c5V.prototype={
$0(){return A.ai(this.a).bS(0,"/home",null)},
$S:0}
B.c5W.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.q7)return C.kl
x=e.b
if(x==null||!x.c)return A.tK(A.a([new A.fU("Ir para o in\xedcio",new B.c5S(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.ok,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.X(22)
r=y.u
s=A.A(q,A.B(A.a([D.ccx,C.X,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c1X,q,q,q)],r),C.G,C.i,C.m,0,C.v),C.r,q,q,new A.M(C.t,q,q,s,C.bg,q,C.y),q,q,q,C.dk,q,q,q)
v=this.a
return A.tK(A.a([new A.fU("Criar conta",new B.c5T(v,d),!1,q),A.hs(E.IW,new B.c5U(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a1H,w)},
$S:1471}
B.c5S.prototype={
$0(){return A.ai(this.a).bS(0,"/welcome",null)},
$S:0}
B.c5T.prototype={
$0(){var x=this.a
x.gS().a0(0,$.CJ().gaX(),y.v).sa3(0,x.a.d)
A.ai(this.b).ap("/register?role=couple",null,y.q)},
$S:0}
B.c5U.prototype={
$0(){var x=this.a
x.gS().a0(0,$.CJ().gaX(),y.v).sa3(0,x.a.d)
A.ai(this.b).ap("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Eq,A.dB)
x(B.aI7,A.dx)
x(B.c5X,A.bw)
w(A.bR,[B.c5P,B.c5Q,B.c5R,B.c5V,B.c5S,B.c5T,B.c5U])
x(B.c5W,A.cQ)})()
A.bp(b.typeUniverse,JSON.parse('{"Eq":{"G":[],"e":[],"f":[]},"aI7":{"a_":["Eq"]}}'))
var y=(function rtii(){var x=A.w
return{e:x("cE"),u:x("r<e>"),i:x("t<@>"),y:x("a5<c,@>"),v:x("AW"),w:x("c"),b:x("@"),q:x("K?"),s:x("+inviterName,names,valid(c?,c,x)?"),r:x("~")}})();(function constants(){D.c1X=new A.N(!0,C.A,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccx=new A.C("O QUE ISTO SIGNIFICA",null,C.aax,null,null,null,null,null,null,null,null)})()};
(a=>{a["1BXNCfpuzY80H4F51E2kQuzfvx8="]=a.current})($__dart_deferred_initializers__);