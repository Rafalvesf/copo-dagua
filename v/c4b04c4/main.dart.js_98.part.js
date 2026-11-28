((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dsw(d){return new B.Ew(d,null)},
Ew:function Ew(d,e){this.d=d
this.a=e},
aIw:function aIw(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c7E:function c7E(d){this.a=d},
c7w:function c7w(d){this.a=d},
c7x:function c7x(d){this.a=d},
c7y:function c7y(d,e){this.a=d
this.b=e},
c7C:function c7C(d){this.a=d},
c7D:function c7D(d){this.a=d},
c7z:function c7z(d){this.a=d},
c7A:function c7A(d,e){this.a=d
this.b=e},
c7B:function c7B(d,e){this.a=d
this.b=e},
cJu(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cJu=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.R().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aL("get_partner_invite",A.T(["p_token",d],y.w,u),u),$async$cJu)
case 3:t=m.a(f)
n=J.a7(t)
if(n.gZ(t)){v=null
x=1
break}s=y.y.a(n.gK(t))
n=J.a7(s)
r=A.C(n.h(s,"partner_name_1"))
if(r==null)r=""
q=A.C(n.h(s,"partner_name_2"))
u=A.C(n.h(s,"inviter_name"))
p=u==null?null:C.f.C(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.dY(n.h(s,"valid"))
v=new A.aN7(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cJu,w)}},D
J=c[1]
A=c[0]
C=c[2]
E=c[191]
B=a.updateHolder(c[8],B)
D=c[190]
B.Ew.prototype={
R(){return new B.aIw()}}
B.aIw.prototype={
ac(){this.au()
$.aB.k4$.push(new B.c7E(this))},
SZ(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$SZ=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gS()
n=o.a1(0,$.ba(),y.e)
if(n.a!==C.iB){o.a1(0,$.CO().gaX(),y.v).sa4(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dR){s.p(new B.c7w(s))
x=1
break}s.p(new B.c7x(s))
u=4
x=7
return A.d(A.aUS(s.a.d),$async$SZ)
case 7:o.aj($.cr())
o=s.c
if(o==null){x=1
break}A.ag(o).bS(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.a9(m)
if(s.c==null){x=1
break}s.p(new B.c7y(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$SZ,w)},
u(d){var x,w,v,u=this,t=null
if(u.gS().H($.ba(),y.e).a===C.iB){x=u.x
x=x==null?C.ky:A.tP(A.a([new A.fZ("Voltar",new B.c7C(d),!1,t)],y.u),t,t,x,C.oA,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cJu(u.a.d)
u.w!==$&&A.aX()
u.w=v
w=v}x=A.cW_(new B.c7D(u),w,y.s)}return A.cP(t,C.bA,A.bF(!0,new A.Q(C.ft,A.bN(x,t,t),t),t,C.a_,!0),!0,t)}}
var z=a.updateTypes([])
B.c7E.prototype={
$1(d){return this.a.SZ()},
$S:5}
B.c7w.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c7x.prototype={
$0(){return!0},
$S:0}
B.c7y.prototype={
$0(){var x=this.b,w=x instanceof A.cU
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c7C.prototype={
$0(){return A.ag(this.a).bS(0,"/home",null)},
$S:0}
B.c7D.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.qg)return C.ky
x=e.b
if(x==null||!x.c)return A.tP(A.a([new A.fZ("Ir para o in\xedcio",new B.c7z(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.oA,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.V(22)
r=y.u
s=A.z(q,A.x(A.a([D.ccP,C.S,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c2b,q,q,q)],r),C.H,C.h,C.l,0,C.u),C.r,q,q,new A.I(C.t,q,q,s,C.bi,q,C.y),q,q,q,C.dp,q,q,q)
v=this.a
return A.tP(A.a([new A.fZ("Criar conta",new B.c7A(v,d),!1,q),A.h5(E.J4,new B.c7B(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a1S,w)},
$S:1475}
B.c7z.prototype={
$0(){return A.ag(this.a).bS(0,"/welcome",null)},
$S:0}
B.c7A.prototype={
$0(){var x=this.a
x.gS().a1(0,$.CO().gaX(),y.v).sa4(0,x.a.d)
A.ag(this.b).ap("/register?role=couple",null,y.q)},
$S:0}
B.c7B.prototype={
$0(){var x=this.a
x.gS().a1(0,$.CO().gaX(),y.v).sa4(0,x.a.d)
A.ag(this.b).ap("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ew,A.dA)
x(B.aIw,A.dt)
x(B.c7E,A.bz)
w(A.bR,[B.c7w,B.c7x,B.c7y,B.c7C,B.c7z,B.c7A,B.c7B])
x(B.c7D,A.cN)})()
A.br(b.typeUniverse,JSON.parse('{"Ew":{"G":[],"e":[],"f":[]},"aIw":{"Y":["Ew"]}}'))
var y=(function rtii(){var x=A.w
return{e:x("cF"),u:x("r<e>"),i:x("t<@>"),y:x("a5<c,@>"),v:x("AZ"),w:x("c"),b:x("@"),q:x("L?"),s:x("+inviterName,names,valid(c?,c,y)?"),r:x("~")}})();(function constants(){D.c2b=new A.P(!0,C.A,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccP=new A.D("O QUE ISTO SIGNIFICA",null,C.aaG,null,null,null,null,null,null,null,null)})()};
(a=>{a["OOt7OQlgDjcl1gnZSQBZoPqoJXg="]=a.current})($__dart_deferred_initializers__);