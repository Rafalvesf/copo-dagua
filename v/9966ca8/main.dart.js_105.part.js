((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dt9(d){return new B.Ep(d,null)},
Ep:function Ep(d,e){this.d=d
this.a=e},
aI_:function aI_(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c7k:function c7k(d){this.a=d},
c7c:function c7c(d){this.a=d},
c7d:function c7d(d){this.a=d},
c7e:function c7e(d,e){this.a=d
this.b=e},
c7i:function c7i(d){this.a=d},
c7j:function c7j(d){this.a=d},
c7f:function c7f(d){this.a=d},
c7g:function c7g(d,e){this.a=d
this.b=e},
c7h:function c7h(d,e){this.a=d
this.b=e},
cJB(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cJB=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.Q().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aH("get_partner_invite",A.R(["p_token",d],y.w,u),u),$async$cJB)
case 3:t=m.a(f)
n=J.a7(t)
if(n.gY(t)){v=null
x=1
break}s=y.y.a(n.gJ(t))
n=J.a7(s)
r=A.C(n.h(s,"partner_name_1"))
if(r==null)r=""
q=A.C(n.h(s,"partner_name_2"))
u=A.C(n.h(s,"inviter_name"))
p=u==null?null:C.f.B(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.dW(n.h(s,"valid"))
v=new A.aMz(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cJB,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[188]
E=c[189]
B.Ep.prototype={
R(){return new B.aI_()}}
B.aI_.prototype={
ad(){this.aq()
$.az.k4$.push(new B.c7k(this))},
Sm(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Sm=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gS()
n=o.a_(0,$.b7(),y.e)
if(n.a!==C.iA){o.a_(0,$.CH().gaX(),y.v).sa1(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dQ){s.p(new B.c7c(s))
x=1
break}s.p(new B.c7d(s))
u=4
x=7
return A.d(A.aUh(s.a.d),$async$Sm)
case 7:o.ai($.cq())
o=s.c
if(o==null){x=1
break}A.ae(o).bQ(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.a9(m)
if(s.c==null){x=1
break}s.p(new B.c7e(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Sm,w)},
u(d){var x,w,v,u=this,t=null
if(u.gS().G($.b7(),y.e).a===C.iA){x=u.x
x=x==null?C.ks:A.tK(A.a([new A.fZ("Voltar",new B.c7i(d),!1,t)],y.u),t,t,x,C.of,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cJB(u.a.d)
u.w!==$&&A.b_()
u.w=v
w=v}x=A.b7n(new B.c7j(u),w,y.s)}return A.cP(t,C.by,A.bB(!0,new A.S(C.hw,A.bO(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.c7k.prototype={
$1(d){return this.a.Sm()},
$S:5}
B.c7c.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c7d.prototype={
$0(){return!0},
$S:0}
B.c7e.prototype={
$0(){var x=this.b,w=x instanceof A.cU
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c7i.prototype={
$0(){return A.ae(this.a).bQ(0,"/home",null)},
$S:0}
B.c7j.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.n8)return C.ks
x=e.b
if(x==null||!x.c)return A.tK(A.a([new A.fZ("Ir para o in\xedcio",new B.c7f(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.of,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.x(q,A.y(A.a([D.cf_,C.P,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c0s,q,q)],r),C.G,C.h,C.l),C.r,q,q,new A.I(C.t,q,q,s,C.bq,q,C.x),q,q,q,C.cI,q,q,q)
v=this.a
return A.tK(A.a([new A.fZ("Criar conta",new B.c7g(v,d),!1,q),new A.am(A.hk(E.Iu,new B.c7h(v,d),q),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a0U,w)},
$S:1484}
B.c7f.prototype={
$0(){return A.ae(this.a).bQ(0,"/welcome",null)},
$S:0}
B.c7g.prototype={
$0(){var x=this.a
x.gS().a_(0,$.CH().gaX(),y.v).sa1(0,x.a.d)
A.ae(this.b).aj("/register?role=couple",null,y.q)},
$S:0}
B.c7h.prototype={
$0(){var x=this.a
x.gS().a_(0,$.CH().gaX(),y.v).sa1(0,x.a.d)
A.ae(this.b).aj("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ep,A.dC)
x(B.aI_,A.dw)
x(B.c7k,A.bt)
w(A.bL,[B.c7c,B.c7d,B.c7e,B.c7i,B.c7f,B.c7g,B.c7h])
x(B.c7j,A.cK)})()
A.br(b.typeUniverse,JSON.parse('{"Ep":{"H":[],"e":[],"f":[]},"aI_":{"a_":["Ep"]}}'))
var y=(function rtii(){var x=A.A
return{e:x("cH"),u:x("r<e>"),i:x("t<@>"),y:x("a3<c,@>"),v:x("AQ"),w:x("c"),b:x("@"),q:x("M?"),s:x("+inviterName,names,valid(c?,c,B)?"),r:x("~")}})();(function constants(){D.c0s=new A.P(!0,C.z,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cf_=new A.D("O QUE ISTO SIGNIFICA",null,C.a9S,null,null,null,null,null,null,null)})()};
(a=>{a["rr67VttwLCRLvajbyskqBbkcdtE="]=a.current})($__dart_deferred_initializers__);