((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dqO(d){return new B.Eu(d,null)},
Eu:function Eu(d,e){this.d=d
this.a=e},
aIj:function aIj(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c6B:function c6B(d){this.a=d},
c6t:function c6t(d){this.a=d},
c6u:function c6u(d){this.a=d},
c6v:function c6v(d,e){this.a=d
this.b=e},
c6z:function c6z(d){this.a=d},
c6A:function c6A(d){this.a=d},
c6w:function c6w(d){this.a=d},
c6x:function c6x(d,e){this.a=d
this.b=e},
c6y:function c6y(d,e){this.a=d
this.b=e},
cI1(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cI1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.S().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aM("get_partner_invite",A.T(["p_token",d],y.w,u),u),$async$cI1)
case 3:t=m.a(f)
n=J.a7(t)
if(n.gZ(t)){v=null
x=1
break}s=y.y.a(n.gM(t))
n=J.a7(s)
r=A.D(n.h(s,"partner_name_1"))
if(r==null)r=""
q=A.D(n.h(s,"partner_name_2"))
u=A.D(n.h(s,"inviter_name"))
p=u==null?null:C.f.C(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.dX(n.h(s,"valid"))
v=new A.aMT(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cI1,w)}},D
J=c[1]
A=c[0]
C=c[2]
E=c[191]
B=a.updateHolder(c[8],B)
D=c[190]
B.Eu.prototype={
P(){return new B.aIj()}}
B.aIj.prototype={
ag(){this.aA()
$.az.k4$.push(new B.c6B(this))},
SR(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$SR=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gS()
n=o.a0(0,$.ba(),y.e)
if(n.a!==C.iw){o.a0(0,$.CM().gaX(),y.v).sa4(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dO){s.p(new B.c6t(s))
x=1
break}s.p(new B.c6u(s))
u=4
x=7
return A.d(A.aUC(s.a.d),$async$SR)
case 7:o.ak($.cm())
o=s.c
if(o==null){x=1
break}A.ai(o).bQ(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.a9(m)
if(s.c==null){x=1
break}s.p(new B.c6v(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$SR,w)},
u(d){var x,w,v,u=this,t=null
if(u.gS().H($.ba(),y.e).a===C.iw){x=u.x
x=x==null?C.kq:A.tL(A.a([new A.fV("Voltar",new B.c6z(d),!1,t)],y.u),t,t,x,C.ou,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cI1(u.a.d)
u.w!==$&&A.aX()
u.w=v
w=v}x=A.cUn(new B.c6A(u),w,y.s)}return A.cP(t,C.bz,A.bC(!0,new A.Q(C.fs,A.bO(x,t,t),t),t,C.a_,!0),!0,t)}}
var z=a.updateTypes([])
B.c6B.prototype={
$1(d){return this.a.SR()},
$S:6}
B.c6t.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c6u.prototype={
$0(){return!0},
$S:0}
B.c6v.prototype={
$0(){var x=this.b,w=x instanceof A.cT
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c6z.prototype={
$0(){return A.ai(this.a).bQ(0,"/home",null)},
$S:0}
B.c6A.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.qc)return C.kq
x=e.b
if(x==null||!x.c)return A.tL(A.a([new A.fV("Ir para o in\xedcio",new B.c6w(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.ou,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.B(q,A.A(A.a([D.ccB,C.S,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c1X,q,q,q)],r),C.H,C.h,C.l,0,C.u),C.r,q,q,new A.M(C.t,q,q,s,C.bh,q,C.y),q,q,q,C.dn,q,q,q)
v=this.a
return A.tL(A.a([new A.fV("Criar conta",new B.c6x(v,d),!1,q),A.hf(E.J_,new B.c6y(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a1J,w)},
$S:1469}
B.c6w.prototype={
$0(){return A.ai(this.a).bQ(0,"/welcome",null)},
$S:0}
B.c6x.prototype={
$0(){var x=this.a
x.gS().a0(0,$.CM().gaX(),y.v).sa4(0,x.a.d)
A.ai(this.b).au("/register?role=couple",null,y.q)},
$S:0}
B.c6y.prototype={
$0(){var x=this.a
x.gS().a0(0,$.CM().gaX(),y.v).sa4(0,x.a.d)
A.ai(this.b).au("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Eu,A.dC)
x(B.aIj,A.dy)
x(B.c6B,A.bx)
w(A.bQ,[B.c6t,B.c6u,B.c6v,B.c6z,B.c6w,B.c6x,B.c6y])
x(B.c6A,A.cO)})()
A.bn(b.typeUniverse,JSON.parse('{"Eu":{"G":[],"e":[],"f":[]},"aIj":{"Z":["Eu"]}}'))
var y=(function rtii(){var x=A.w
return{e:x("cE"),u:x("r<e>"),i:x("t<@>"),y:x("a5<c,@>"),v:x("AX"),w:x("c"),b:x("@"),q:x("J?"),s:x("+inviterName,names,valid(c?,c,x)?"),r:x("~")}})();(function constants(){D.c1X=new A.P(!0,C.A,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccB=new A.C("O QUE ISTO SIGNIFICA",null,C.aax,null,null,null,null,null,null,null,null)})()};
(a=>{a["98ko0xditSkdqZOBq4JAQikX7Qc="]=a.current})($__dart_deferred_initializers__);