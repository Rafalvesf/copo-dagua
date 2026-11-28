((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dnQ(d){return new B.Em(d,null)},
Em:function Em(d,e){this.d=d
this.a=e},
aHC:function aHC(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c4S:function c4S(d){this.a=d},
c4K:function c4K(d){this.a=d},
c4L:function c4L(d){this.a=d},
c4M:function c4M(d,e){this.a=d
this.b=e},
c4Q:function c4Q(d){this.a=d},
c4R:function c4R(d){this.a=d},
c4N:function c4N(d){this.a=d},
c4O:function c4O(d,e){this.a=d
this.b=e},
c4P:function c4P(d,e){this.a=d
this.b=e},
cFr(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cFr=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.T().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aT("get_partner_invite",A.S(["p_token",d],y.w,u),u),$async$cFr)
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
v=new A.aMa(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cFr,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[185]
E=c[186]
B.Em.prototype={
P(){return new B.aHC()}}
B.aHC.prototype={
al(){this.aH()
$.az.k4$.push(new B.c4S(this))},
Sv(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Sv=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gT()
n=o.a1(0,$.b8(),y.e)
if(n.a!==C.ij){o.a1(0,$.CG().gaX(),y.v).sa2(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dF){s.q(new B.c4K(s))
x=1
break}s.q(new B.c4L(s))
u=4
x=7
return A.d(A.aTP(s.a.d),$async$Sv)
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
break}s.q(new B.c4M(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Sv,w)},
u(d){var x,w,v,u=this,t=null
if(u.gT().H($.b8(),y.e).a===C.ij){x=u.x
x=x==null?C.kc:A.tG(A.a([new A.fI("Voltar",new B.c4Q(d),!1,t)],y.u),t,t,x,C.ob,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cFr(u.a.d)
u.w!==$&&A.aX()
u.w=v
w=v}x=A.cRC(new B.c4R(u),w,y.s)}return A.cM(t,C.bx,A.bC(!0,new A.R(C.f4,A.bN(x,t,t),t),t,C.a_,!0),!0,t)}}
var z=a.updateTypes([])
B.c4S.prototype={
$1(d){return this.a.Sv()},
$S:6}
B.c4K.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c4L.prototype={
$0(){return!0},
$S:0}
B.c4M.prototype={
$0(){var x=this.b,w=x instanceof A.cU
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c4Q.prototype={
$0(){return A.ai(this.a).bS(0,"/home",null)},
$S:0}
B.c4R.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.pY)return C.kc
x=e.b
if(x==null||!x.c)return A.tG(A.a([new A.fI("Ir para o in\xedcio",new B.c4N(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.ob,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.a0(22)
r=y.u
s=A.D(q,A.B(A.a([D.cbu,C.X,A.i("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c1_,q,q,q)],r),C.G,C.j,C.m,0,C.v),C.r,q,q,new A.O(C.t,q,q,s,C.bb,q,C.y),q,q,q,C.cX,q,q,q)
v=this.a
return A.tG(A.a([new A.fI("Criar conta",new B.c4O(v,d),!1,q),A.ia(E.IB,new B.c4P(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a1l,w)},
$S:1469}
B.c4N.prototype={
$0(){return A.ai(this.a).bS(0,"/welcome",null)},
$S:0}
B.c4O.prototype={
$0(){var x=this.a
x.gT().a1(0,$.CG().gaX(),y.v).sa2(0,x.a.d)
A.ai(this.b).ar("/register?role=couple",null,y.q)},
$S:0}
B.c4P.prototype={
$0(){var x=this.a
x.gT().a1(0,$.CG().gaX(),y.v).sa2(0,x.a.d)
A.ai(this.b).ar("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Em,A.dD)
x(B.aHC,A.dy)
x(B.c4S,A.bx)
w(A.bR,[B.c4K,B.c4L,B.c4M,B.c4Q,B.c4N,B.c4O,B.c4P])
x(B.c4R,A.cR)})()
A.bq(b.typeUniverse,JSON.parse('{"Em":{"K":[],"e":[],"f":[]},"aHC":{"a_":["Em"]}}'))
var y=(function rtii(){var x=A.w
return{e:x("cG"),u:x("r<e>"),i:x("t<@>"),y:x("a4<c,@>"),v:x("AV"),w:x("c"),b:x("@"),q:x("I?"),s:x("+inviterName,names,valid(c?,c,y)?"),r:x("~")}})();(function constants(){D.c1_=new A.M(!0,C.A,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbu=new A.E("O QUE ISTO SIGNIFICA",null,C.aa7,null,null,null,null,null,null,null,null)})()};
(a=>{a["dsWp5wX2dqXZk8NRzLzogFCUmCY="]=a.current})($__dart_deferred_initializers__);