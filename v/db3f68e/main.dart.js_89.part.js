((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dnQ(d){return new B.El(d,null)},
El:function El(d,e){this.d=d
this.a=e},
aHB:function aHB(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c4R:function c4R(d){this.a=d},
c4J:function c4J(d){this.a=d},
c4K:function c4K(d){this.a=d},
c4L:function c4L(d,e){this.a=d
this.b=e},
c4P:function c4P(d){this.a=d},
c4Q:function c4Q(d){this.a=d},
c4M:function c4M(d){this.a=d},
c4N:function c4N(d,e){this.a=d
this.b=e},
c4O:function c4O(d,e){this.a=d
this.b=e},
cFp(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cFp=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.T().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aT("get_partner_invite",A.S(["p_token",d],y.w,u),u),$async$cFp)
case 3:t=m.a(f)
n=J.a7(t)
if(n.gY(t)){v=null
x=1
break}s=y.y.a(n.gM(t))
n=J.a7(s)
r=A.C(n.h(s,"partner_name_1"))
if(r==null)r=""
q=A.C(n.h(s,"partner_name_2"))
u=A.C(n.h(s,"inviter_name"))
p=u==null?null:C.f.D(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.dU(n.h(s,"valid"))
v=new A.aM9(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cFp,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[184]
E=c[185]
B.El.prototype={
P(){return new B.aHB()}}
B.aHB.prototype={
al(){this.aH()
$.az.k4$.push(new B.c4R(this))},
SF(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$SF=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gT()
n=o.a1(0,$.b8(),y.e)
if(n.a!==C.il){o.a1(0,$.CF().gaX(),y.v).sa2(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dG){s.q(new B.c4J(s))
x=1
break}s.q(new B.c4K(s))
u=4
x=7
return A.d(A.aTO(s.a.d),$async$SF)
case 7:o.ai($.co())
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
break}s.q(new B.c4L(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$SF,w)},
u(d){var x,w,v,u=this,t=null
if(u.gT().H($.b8(),y.e).a===C.il){x=u.x
x=x==null?C.jm:A.tG(A.a([new A.fJ("Voltar",new B.c4P(d),!1,t)],y.u),t,t,x,C.ob,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cFp(u.a.d)
u.w!==$&&A.aX()
u.w=v
w=v}x=A.cRA(new B.c4Q(u),w,y.s)}return A.cM(t,C.bx,A.bC(!0,new A.Q(C.fj,A.bN(x,t,t),t),t,C.a_,!0),!0,t)}}
var z=a.updateTypes([])
B.c4R.prototype={
$1(d){return this.a.SF()},
$S:5}
B.c4J.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c4K.prototype={
$0(){return!0},
$S:0}
B.c4L.prototype={
$0(){var x=this.b,w=x instanceof A.cU
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c4P.prototype={
$0(){return A.ai(this.a).bS(0,"/home",null)},
$S:0}
B.c4Q.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.pY)return C.jm
x=e.b
if(x==null||!x.c)return A.tG(A.a([new A.fJ("Ir para o in\xedcio",new B.c4M(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.ob,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.a0(22)
r=y.u
s=A.D(q,A.B(A.a([D.cbl,C.X,A.i("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c0R,q,q,q)],r),C.G,C.j,C.m,0,C.v),C.r,q,q,new A.O(C.t,q,q,s,C.bb,q,C.y),q,q,q,C.cY,q,q,q)
v=this.a
return A.tG(A.a([new A.fJ("Criar conta",new B.c4N(v,d),!1,q),A.ia(E.ID,new B.c4O(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a1m,w)},
$S:1468}
B.c4M.prototype={
$0(){return A.ai(this.a).bS(0,"/welcome",null)},
$S:0}
B.c4N.prototype={
$0(){var x=this.a
x.gT().a1(0,$.CF().gaX(),y.v).sa2(0,x.a.d)
A.ai(this.b).aq("/register?role=couple",null,y.q)},
$S:0}
B.c4O.prototype={
$0(){var x=this.a
x.gT().a1(0,$.CF().gaX(),y.v).sa2(0,x.a.d)
A.ai(this.b).aq("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.El,A.dD)
x(B.aHB,A.dy)
x(B.c4R,A.bx)
w(A.bR,[B.c4J,B.c4K,B.c4L,B.c4P,B.c4M,B.c4N,B.c4O])
x(B.c4Q,A.cR)})()
A.br(b.typeUniverse,JSON.parse('{"El":{"K":[],"e":[],"f":[]},"aHB":{"a_":["El"]}}'))
var y=(function rtii(){var x=A.w
return{e:x("cG"),u:x("r<e>"),i:x("t<@>"),y:x("a4<c,@>"),v:x("AT"),w:x("c"),b:x("@"),q:x("I?"),s:x("+inviterName,names,valid(c?,c,y)?"),r:x("~")}})();(function constants(){D.c0R=new A.M(!0,C.A,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbl=new A.E("O QUE ISTO SIGNIFICA",null,C.aa6,null,null,null,null,null,null,null,null)})()};
(a=>{a["Z3fZvHz0mBYZuzrr0fTXDcaOmGk="]=a.current})($__dart_deferred_initializers__);