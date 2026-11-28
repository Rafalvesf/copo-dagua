((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dtu(d){return new B.Eu(d,null)},
Eu:function Eu(d,e){this.d=d
this.a=e},
aIo:function aIo(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c7Z:function c7Z(d){this.a=d},
c7R:function c7R(d){this.a=d},
c7S:function c7S(d){this.a=d},
c7T:function c7T(d,e){this.a=d
this.b=e},
c7X:function c7X(d){this.a=d},
c7Y:function c7Y(d){this.a=d},
c7U:function c7U(d){this.a=d},
c7V:function c7V(d,e){this.a=d
this.b=e},
c7W:function c7W(d,e){this.a=d
this.b=e},
cK5(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cK5=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.P().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aK("get_partner_invite",A.R(["p_token",d],y.w,u),u),$async$cK5)
case 3:t=m.a(f)
n=J.a7(t)
if(n.gZ(t)){v=null
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
n=A.dX(n.h(s,"valid"))
v=new A.aMW(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cK5,w)}},D
J=c[1]
A=c[0]
C=c[2]
E=c[189]
B=a.updateHolder(c[8],B)
D=c[188]
B.Eu.prototype={
R(){return new B.aIo()}}
B.aIo.prototype={
ac(){this.ap()
$.aA.k4$.push(new B.c7Z(this))},
SS(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$SS=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gS()
n=o.a_(0,$.b7(),y.e)
if(n.a!==C.iz){o.a_(0,$.CN().gaX(),y.v).sa4(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dQ){s.p(new B.c7R(s))
x=1
break}s.p(new B.c7S(s))
u=4
x=7
return A.d(A.aUH(s.a.d),$async$SS)
case 7:o.aj($.cr())
o=s.c
if(o==null){x=1
break}A.ad(o).bQ(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.a9(m)
if(s.c==null){x=1
break}s.p(new B.c7T(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$SS,w)},
u(d){var x,w,v,u=this,t=null
if(u.gS().G($.b7(),y.e).a===C.iz){x=u.x
x=x==null?C.kn:A.tK(A.a([new A.fX("Voltar",new B.c7X(d),!1,t)],y.u),t,t,x,C.oo,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cK5(u.a.d)
u.w!==$&&A.aY()
u.w=v
w=v}x=A.b7T(new B.c7Y(u),w,y.s)}return A.cQ(t,C.by,A.bB(!0,new A.S(C.hx,A.bM(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.c7Z.prototype={
$1(d){return this.a.SS()},
$S:5}
B.c7R.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c7S.prototype={
$0(){return!0},
$S:0}
B.c7T.prototype={
$0(){var x=this.b,w=x instanceof A.cU
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c7X.prototype={
$0(){return A.ad(this.a).bQ(0,"/home",null)},
$S:0}
B.c7Y.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.ne)return C.kn
x=e.b
if(x==null||!x.c)return A.tK(A.a([new A.fX("Ir para o in\xedcio",new B.c7U(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.oo,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.y(q,A.z(A.a([D.cbE,C.Q,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c1c,q,q,q)],r),C.G,C.h,C.l),C.r,q,q,new A.J(C.t,q,q,s,C.bs,q,C.x),q,q,q,C.cI,q,q,q)
v=this.a
return A.tK(A.a([new A.fX("Criar conta",new B.c7V(v,d),!1,q),A.hi(E.IN,new B.c7W(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a1g,w)},
$S:1477}
B.c7U.prototype={
$0(){return A.ad(this.a).bQ(0,"/welcome",null)},
$S:0}
B.c7V.prototype={
$0(){var x=this.a
x.gS().a_(0,$.CN().gaX(),y.v).sa4(0,x.a.d)
A.ad(this.b).ak("/register?role=couple",null,y.q)},
$S:0}
B.c7W.prototype={
$0(){var x=this.a
x.gS().a_(0,$.CN().gaX(),y.v).sa4(0,x.a.d)
A.ad(this.b).ak("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Eu,A.dA)
x(B.aIo,A.dv)
x(B.c7Z,A.bx)
w(A.bQ,[B.c7R,B.c7S,B.c7T,B.c7X,B.c7U,B.c7V,B.c7W])
x(B.c7Y,A.cL)})()
A.bu(b.typeUniverse,JSON.parse('{"Eu":{"G":[],"e":[],"f":[]},"aIo":{"Y":["Eu"]}}'))
var y=(function rtii(){var x=A.x
return{e:x("cK"),u:x("r<e>"),i:x("t<@>"),y:x("a5<c,@>"),v:x("AU"),w:x("c"),b:x("@"),q:x("K?"),s:x("+inviterName,names,valid(c?,c,B)?"),r:x("~")}})();(function constants(){D.c1c=new A.Q(!0,C.z,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbE=new A.D("O QUE ISTO SIGNIFICA",null,C.aa7,null,null,null,null,null,null,null,null)})()};
(a=>{a["Yys1t2VXuKwj0v0IcUyQIg1NZX4="]=a.current})($__dart_deferred_initializers__);