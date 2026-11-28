((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
drZ(d){return new B.Ew(d,null)},
Ew:function Ew(d,e){this.d=d
this.a=e},
aIs:function aIs(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c7c:function c7c(d){this.a=d},
c74:function c74(d){this.a=d},
c75:function c75(d){this.a=d},
c76:function c76(d,e){this.a=d
this.b=e},
c7a:function c7a(d){this.a=d},
c7b:function c7b(d){this.a=d},
c77:function c77(d){this.a=d},
c78:function c78(d,e){this.a=d
this.b=e},
c79:function c79(d,e){this.a=d
this.b=e},
cJ0(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cJ0=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.R().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aM("get_partner_invite",A.T(["p_token",d],y.w,u),u),$async$cJ0)
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
v=new A.aN3(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cJ0,w)}},D
J=c[1]
A=c[0]
C=c[2]
E=c[191]
B=a.updateHolder(c[8],B)
D=c[190]
B.Ew.prototype={
P(){return new B.aIs()}}
B.aIs.prototype={
ad(){this.ar()
$.az.k4$.push(new B.c7c(this))},
SX(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$SX=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gS()
n=o.a1(0,$.ba(),y.e)
if(n.a!==C.iz){o.a1(0,$.CN().gaX(),y.v).sa4(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dQ){s.p(new B.c74(s))
x=1
break}s.p(new B.c75(s))
u=4
x=7
return A.d(A.aUN(s.a.d),$async$SX)
case 7:o.aj($.cr())
o=s.c
if(o==null){x=1
break}A.ah(o).bS(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.a9(m)
if(s.c==null){x=1
break}s.p(new B.c76(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$SX,w)},
u(d){var x,w,v,u=this,t=null
if(u.gS().H($.ba(),y.e).a===C.iz){x=u.x
x=x==null?C.ku:A.tO(A.a([new A.fZ("Voltar",new B.c7a(d),!1,t)],y.u),t,t,x,C.ox,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cJ0(u.a.d)
u.w!==$&&A.aX()
u.w=v
w=v}x=A.cVu(new B.c7b(u),w,y.s)}return A.cP(t,C.bz,A.bE(!0,new A.Q(C.ft,A.bN(x,t,t),t),t,C.a_,!0),!0,t)}}
var z=a.updateTypes([])
B.c7c.prototype={
$1(d){return this.a.SX()},
$S:6}
B.c74.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c75.prototype={
$0(){return!0},
$S:0}
B.c76.prototype={
$0(){var x=this.b,w=x instanceof A.cU
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c7a.prototype={
$0(){return A.ah(this.a).bS(0,"/home",null)},
$S:0}
B.c7b.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.qe)return C.ku
x=e.b
if(x==null||!x.c)return A.tO(A.a([new A.fZ("Ir para o in\xedcio",new B.c77(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.ox,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.B(q,A.y(A.a([D.ccL,C.S,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c26,q,q,q)],r),C.H,C.h,C.l,0,C.u),C.r,q,q,new A.L(C.t,q,q,s,C.bi,q,C.y),q,q,q,C.dn,q,q,q)
v=this.a
return A.tO(A.a([new A.fZ("Criar conta",new B.c78(v,d),!1,q),A.h5(E.J4,new B.c79(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a1R,w)},
$S:1475}
B.c77.prototype={
$0(){return A.ah(this.a).bS(0,"/welcome",null)},
$S:0}
B.c78.prototype={
$0(){var x=this.a
x.gS().a1(0,$.CN().gaX(),y.v).sa4(0,x.a.d)
A.ah(this.b).av("/register?role=couple",null,y.q)},
$S:0}
B.c79.prototype={
$0(){var x=this.a
x.gS().a1(0,$.CN().gaX(),y.v).sa4(0,x.a.d)
A.ah(this.b).av("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ew,A.dD)
x(B.aIs,A.dz)
x(B.c7c,A.by)
w(A.bR,[B.c74,B.c75,B.c76,B.c7a,B.c77,B.c78,B.c79])
x(B.c7b,A.cN)})()
A.bq(b.typeUniverse,JSON.parse('{"Ew":{"G":[],"e":[],"f":[]},"aIs":{"Y":["Ew"]}}'))
var y=(function rtii(){var x=A.w
return{e:x("cF"),u:x("r<e>"),i:x("t<@>"),y:x("a5<c,@>"),v:x("AY"),w:x("c"),b:x("@"),q:x("K?"),s:x("+inviterName,names,valid(c?,c,x)?"),r:x("~")}})();(function constants(){D.c26=new A.P(!0,C.A,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccL=new A.D("O QUE ISTO SIGNIFICA",null,C.aaF,null,null,null,null,null,null,null,null)})()};
(a=>{a["txYak/WoUcldju+yEk9nRpjkMgg="]=a.current})($__dart_deferred_initializers__);