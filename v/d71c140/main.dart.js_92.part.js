((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dps(d){return new B.Eq(d,null)},
Eq:function Eq(d,e){this.d=d
this.a=e},
aI5:function aI5(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c5P:function c5P(d){this.a=d},
c5H:function c5H(d){this.a=d},
c5I:function c5I(d){this.a=d},
c5J:function c5J(d,e){this.a=d
this.b=e},
c5N:function c5N(d){this.a=d},
c5O:function c5O(d){this.a=d},
c5K:function c5K(d){this.a=d},
c5L:function c5L(d,e){this.a=d
this.b=e},
c5M:function c5M(d,e){this.a=d
this.b=e},
cGK(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cGK=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.S().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aT("get_partner_invite",A.T(["p_token",d],y.w,u),u),$async$cGK)
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
v=new A.aMH(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cGK,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[188]
E=c[189]
B.Eq.prototype={
P(){return new B.aI5()}}
B.aI5.prototype={
ak(){this.aD()
$.az.k4$.push(new B.c5P(this))},
SC(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$SC=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gS()
n=o.a0(0,$.b8(),y.e)
if(n.a!==C.it){o.a0(0,$.CJ().gaW(),y.v).sa3(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dP){s.q(new B.c5H(s))
x=1
break}s.q(new B.c5I(s))
u=4
x=7
return A.d(A.aUo(s.a.d),$async$SC)
case 7:o.ai($.cl())
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
break}s.q(new B.c5J(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$SC,w)},
u(d){var x,w,v,u=this,t=null
if(u.gS().H($.b8(),y.e).a===C.it){x=u.x
x=x==null?C.kl:A.tJ(A.a([new A.fT("Voltar",new B.c5N(d),!1,t)],y.u),t,t,x,C.ok,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cGK(u.a.d)
u.w!==$&&A.aX()
u.w=v
w=v}x=A.cT1(new B.c5O(u),w,y.s)}return A.cO(t,C.by,A.bC(!0,new A.Q(C.f7,A.bO(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.c5P.prototype={
$1(d){return this.a.SC()},
$S:6}
B.c5H.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c5I.prototype={
$0(){return!0},
$S:0}
B.c5J.prototype={
$0(){var x=this.b,w=x instanceof A.cU
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c5N.prototype={
$0(){return A.ai(this.a).bS(0,"/home",null)},
$S:0}
B.c5O.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.q4)return C.kl
x=e.b
if(x==null||!x.c)return A.tJ(A.a([new A.fT("Ir para o in\xedcio",new B.c5K(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.ok,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.X(22)
r=y.u
s=A.A(q,A.B(A.a([D.cct,C.X,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c1U,q,q,q)],r),C.G,C.i,C.m,0,C.v),C.r,q,q,new A.M(C.t,q,q,s,C.bg,q,C.y),q,q,q,C.dk,q,q,q)
v=this.a
return A.tJ(A.a([new A.fT("Criar conta",new B.c5L(v,d),!1,q),A.hs(E.IW,new B.c5M(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a1G,w)},
$S:1471}
B.c5K.prototype={
$0(){return A.ai(this.a).bS(0,"/welcome",null)},
$S:0}
B.c5L.prototype={
$0(){var x=this.a
x.gS().a0(0,$.CJ().gaW(),y.v).sa3(0,x.a.d)
A.ai(this.b).ap("/register?role=couple",null,y.q)},
$S:0}
B.c5M.prototype={
$0(){var x=this.a
x.gS().a0(0,$.CJ().gaW(),y.v).sa3(0,x.a.d)
A.ai(this.b).ap("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Eq,A.dB)
x(B.aI5,A.dx)
x(B.c5P,A.bw)
w(A.bS,[B.c5H,B.c5I,B.c5J,B.c5N,B.c5K,B.c5L,B.c5M])
x(B.c5O,A.cQ)})()
A.bp(b.typeUniverse,JSON.parse('{"Eq":{"G":[],"e":[],"f":[]},"aI5":{"a_":["Eq"]}}'))
var y=(function rtii(){var x=A.w
return{e:x("cE"),u:x("r<e>"),i:x("t<@>"),y:x("a5<c,@>"),v:x("AW"),w:x("c"),b:x("@"),q:x("K?"),s:x("+inviterName,names,valid(c?,c,x)?"),r:x("~")}})();(function constants(){D.c1U=new A.N(!0,C.A,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cct=new A.C("O QUE ISTO SIGNIFICA",null,C.aav,null,null,null,null,null,null,null,null)})()};
(a=>{a["v8MePoK1zLN/rF6SQBCCqMHs1HA="]=a.current})($__dart_deferred_initializers__);