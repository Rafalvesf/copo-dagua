((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dty(d){return new B.Eu(d,null)},
Eu:function Eu(d,e){this.d=d
this.a=e},
aIp:function aIp(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c80:function c80(d){this.a=d},
c7T:function c7T(d){this.a=d},
c7U:function c7U(d){this.a=d},
c7V:function c7V(d,e){this.a=d
this.b=e},
c7Z:function c7Z(d){this.a=d},
c8_:function c8_(d){this.a=d},
c7W:function c7W(d){this.a=d},
c7X:function c7X(d,e){this.a=d
this.b=e},
c7Y:function c7Y(d,e){this.a=d
this.b=e},
cK9(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cK9=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.P().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aK("get_partner_invite",A.R(["p_token",d],y.w,u),u),$async$cK9)
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
v=new A.aMX(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cK9,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[188]
E=c[189]
B.Eu.prototype={
R(){return new B.aIp()}}
B.aIp.prototype={
ac(){this.ap()
$.aA.k4$.push(new B.c80(this))},
SS(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$SS=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gS()
n=o.a_(0,$.b7(),y.e)
if(n.a!==C.iz){o.a_(0,$.CN().gaX(),y.v).sa4(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dR){s.p(new B.c7T(s))
x=1
break}s.p(new B.c7U(s))
u=4
x=7
return A.d(A.aUI(s.a.d),$async$SS)
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
break}s.p(new B.c7V(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$SS,w)},
u(d){var x,w,v,u=this,t=null
if(u.gS().G($.b7(),y.e).a===C.iz){x=u.x
x=x==null?C.ko:A.tK(A.a([new A.fX("Voltar",new B.c7Z(d),!1,t)],y.u),t,t,x,C.op,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cK9(u.a.d)
u.w!==$&&A.aZ()
u.w=v
w=v}x=A.b7U(new B.c8_(u),w,y.s)}return A.cQ(t,C.by,A.bA(!0,new A.S(C.hx,A.bM(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.c80.prototype={
$1(d){return this.a.SS()},
$S:5}
B.c7T.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c7U.prototype={
$0(){return!0},
$S:0}
B.c7V.prototype={
$0(){var x=this.b,w=x instanceof A.cU
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c7Z.prototype={
$0(){return A.ad(this.a).bQ(0,"/home",null)},
$S:0}
B.c8_.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.ne)return C.ko
x=e.b
if(x==null||!x.c)return A.tK(A.a([new A.fX("Ir para o in\xedcio",new B.c7W(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.op,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.y(q,A.z(A.a([D.cbH,C.Q,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c1f,q,q,q)],r),C.F,C.h,C.l),C.r,q,q,new A.I(C.t,q,q,s,C.bs,q,C.x),q,q,q,C.cI,q,q,q)
v=this.a
return A.tK(A.a([new A.fX("Criar conta",new B.c7X(v,d),!1,q),A.hj(E.IN,new B.c7Y(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a1g,w)},
$S:1477}
B.c7W.prototype={
$0(){return A.ad(this.a).bQ(0,"/welcome",null)},
$S:0}
B.c7X.prototype={
$0(){var x=this.a
x.gS().a_(0,$.CN().gaX(),y.v).sa4(0,x.a.d)
A.ad(this.b).ak("/register?role=couple",null,y.q)},
$S:0}
B.c7Y.prototype={
$0(){var x=this.a
x.gS().a_(0,$.CN().gaX(),y.v).sa4(0,x.a.d)
A.ad(this.b).ak("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Eu,A.dB)
x(B.aIp,A.dv)
x(B.c80,A.bx)
w(A.bQ,[B.c7T,B.c7U,B.c7V,B.c7Z,B.c7W,B.c7X,B.c7Y])
x(B.c8_,A.cL)})()
A.bu(b.typeUniverse,JSON.parse('{"Eu":{"G":[],"e":[],"f":[]},"aIp":{"Z":["Eu"]}}'))
var y=(function rtii(){var x=A.x
return{e:x("cK"),u:x("r<e>"),i:x("t<@>"),y:x("a5<c,@>"),v:x("AU"),w:x("c"),b:x("@"),q:x("K?"),s:x("+inviterName,names,valid(c?,c,B)?"),r:x("~")}})();(function constants(){D.c1f=new A.Q(!0,C.z,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbH=new A.D("O QUE ISTO SIGNIFICA",null,C.aa7,null,null,null,null,null,null,null,null)})()};
(a=>{a["C8blFcfE9kJidTHK+K3MSelZcts="]=a.current})($__dart_deferred_initializers__);