((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
djy(d){return new B.DZ(d,null)},
DZ:function DZ(d,e){this.d=d
this.a=e},
aG5:function aG5(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c1z:function c1z(d){this.a=d},
c1r:function c1r(d){this.a=d},
c1s:function c1s(d){this.a=d},
c1t:function c1t(d,e){this.a=d
this.b=e},
c1x:function c1x(d){this.a=d},
c1y:function c1y(d){this.a=d},
c1u:function c1u(d){this.a=d},
c1v:function c1v(d,e){this.a=d
this.b=e},
c1w:function c1w(d,e){this.a=d
this.b=e},
cBM(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cBM=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.T().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aU("get_partner_invite",A.R(["p_token",d],y.w,u),u),$async$cBM)
case 3:t=m.a(f)
n=J.a7(t)
if(n.gY(t)){v=null
x=1
break}s=y.y.a(n.gM(t))
n=J.a7(s)
r=A.J(n.h(s,"partner_name_1"))
if(r==null)r=""
q=A.J(n.h(s,"partner_name_2"))
u=A.J(n.h(s,"inviter_name"))
p=u==null?null:C.f.D(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.dR(n.h(s,"valid"))
v=new A.aKC(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cBM,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[177]
E=c[178]
B.DZ.prototype={
R(){return new B.aG5()}}
B.aG5.prototype={
am(){this.aJ()
$.aB.k4$.push(new B.c1z(this))},
Sb(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Sb=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gT()
n=o.a1(0,$.b8(),y.e)
if(n.a!==C.ig){o.a1(0,$.Ck().gaV(),y.v).sa2(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dN){s.q(new B.c1r(s))
x=1
break}s.q(new B.c1s(s))
u=4
x=7
return A.d(A.aS7(s.a.d),$async$Sb)
case 7:o.ah($.cm())
o=s.c
if(o==null){x=1
break}A.aj(o).bQ(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.a9(m)
if(s.c==null){x=1
break}s.q(new B.c1t(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Sb,w)},
u(d){var x,w,v,u=this,t=null
if(u.gT().G($.b8(),y.e).a===C.ig){x=u.x
x=x==null?C.jb:A.tr(A.a([new A.fD("Voltar",new B.c1x(d),!1,t)],y.u),t,t,x,C.nY,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cBM(u.a.d)
u.w!==$&&A.aY()
u.w=v
w=v}x=A.cNI(new B.c1y(u),w,y.s)}return A.cP(t,C.bE,A.bH(!0,new A.S(C.hi,A.bT(x,t,t),t),t,C.a0,!0),!0,t)}}
var z=a.updateTypes([])
B.c1z.prototype={
$1(d){return this.a.Sb()},
$S:5}
B.c1r.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c1s.prototype={
$0(){return!0},
$S:0}
B.c1t.prototype={
$0(){var x=this.b,w=x instanceof A.cS
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c1x.prototype={
$0(){return A.aj(this.a).bQ(0,"/home",null)},
$S:0}
B.c1y.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.pI)return C.jb
x=e.b
if(x==null||!x.c)return A.tr(A.a([new A.fD("Ir para o in\xedcio",new B.c1u(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.nY,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.a2(22)
r=y.u
s=A.B(q,A.C(A.a([D.c8b,C.Z,A.i("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.bYM,q,q,q)],r),C.I,C.j,C.p,0,C.v),C.r,q,q,new A.O(C.u,q,q,s,C.bb,q,C.y),q,q,q,C.df,q,q,q)
v=this.a
return A.tr(A.a([new A.fD("Criar conta",new B.c1v(v,d),!1,q),A.iM(E.HW,new B.c1w(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a0s,w)},
$S:1441}
B.c1u.prototype={
$0(){return A.aj(this.a).bQ(0,"/welcome",null)},
$S:0}
B.c1v.prototype={
$0(){var x=this.a
x.gT().a1(0,$.Ck().gaV(),y.v).sa2(0,x.a.d)
A.aj(this.b).az("/register?role=couple",null,y.q)},
$S:0}
B.c1w.prototype={
$0(){var x=this.a
x.gT().a1(0,$.Ck().gaV(),y.v).sa2(0,x.a.d)
A.aj(this.b).az("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.DZ,A.dD)
x(B.aG5,A.dv)
x(B.c1z,A.bx)
w(A.bR,[B.c1r,B.c1s,B.c1t,B.c1x,B.c1u,B.c1v,B.c1w])
x(B.c1y,A.cT)})()
A.bw(b.typeUniverse,JSON.parse('{"DZ":{"I":[],"e":[],"f":[]},"aG5":{"a1":["DZ"]}}'))
var y=(function rtii(){var x=A.x
return{e:x("cG"),u:x("t<e>"),i:x("r<@>"),y:x("a5<c,@>"),v:x("Av"),w:x("c"),b:x("@"),q:x("L?"),s:x("+inviterName,names,valid(c?,c,z)?"),r:x("~")}})();(function constants(){D.bYM=new A.M(!0,C.A,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8b=new A.D("O QUE ISTO SIGNIFICA",null,C.a91,null,null,null,null,null,null,null,null)})()};
(a=>{a["5bBWt4MsNWNyQllZE21PYDaS7pM="]=a.current})($__dart_deferred_initializers__);