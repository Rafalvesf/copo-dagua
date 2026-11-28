((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
doM(d){return new B.Ep(d,null)},
Ep:function Ep(d,e){this.d=d
this.a=e},
aHP:function aHP(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c5v:function c5v(d){this.a=d},
c5n:function c5n(d){this.a=d},
c5o:function c5o(d){this.a=d},
c5p:function c5p(d,e){this.a=d
this.b=e},
c5t:function c5t(d){this.a=d},
c5u:function c5u(d){this.a=d},
c5q:function c5q(d){this.a=d},
c5r:function c5r(d,e){this.a=d
this.b=e},
c5s:function c5s(d,e){this.a=d
this.b=e},
cGg(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cGg=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.T().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aT("get_partner_invite",A.S(["p_token",d],y.w,u),u),$async$cGg)
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
p=u==null?null:C.f.D(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.dW(n.h(s,"valid"))
v=new A.aMq(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cGg,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[187]
E=c[188]
B.Ep.prototype={
P(){return new B.aHP()}}
B.aHP.prototype={
ak(){this.aD()
$.az.k4$.push(new B.c5v(this))},
Sz(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Sz=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gS()
n=o.a0(0,$.b8(),y.e)
if(n.a!==C.ir){o.a0(0,$.CI().gaW(),y.v).sa3(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dL){s.q(new B.c5n(s))
x=1
break}s.q(new B.c5o(s))
u=4
x=7
return A.d(A.aU5(s.a.d),$async$Sz)
case 7:o.ai($.ck())
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
break}s.q(new B.c5p(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Sz,w)},
u(d){var x,w,v,u=this,t=null
if(u.gS().H($.b8(),y.e).a===C.ir){x=u.x
x=x==null?C.kh:A.tH(A.a([new A.fT("Voltar",new B.c5t(d),!1,t)],y.u),t,t,x,C.oj,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cGg(u.a.d)
u.w!==$&&A.aX()
u.w=v
w=v}x=A.cSp(new B.c5u(u),w,y.s)}return A.cO(t,C.by,A.bF(!0,new A.Q(C.f6,A.bO(x,t,t),t),t,C.a_,!0),!0,t)}}
var z=a.updateTypes([])
B.c5v.prototype={
$1(d){return this.a.Sz()},
$S:5}
B.c5n.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c5o.prototype={
$0(){return!0},
$S:0}
B.c5p.prototype={
$0(){var x=this.b,w=x instanceof A.cU
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c5t.prototype={
$0(){return A.ai(this.a).bS(0,"/home",null)},
$S:0}
B.c5u.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.q4)return C.kh
x=e.b
if(x==null||!x.c)return A.tH(A.a([new A.fT("Ir para o in\xedcio",new B.c5q(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.oj,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.Y(22)
r=y.u
s=A.A(q,A.B(A.a([D.ccl,C.X,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c1N,q,q,q)],r),C.G,C.i,C.m,0,C.v),C.r,q,q,new A.M(C.t,q,q,s,C.bf,q,C.y),q,q,q,C.dk,q,q,q)
v=this.a
return A.tH(A.a([new A.fT("Criar conta",new B.c5r(v,d),!1,q),A.hX(E.IU,new B.c5s(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a1B,w)},
$S:1468}
B.c5q.prototype={
$0(){return A.ai(this.a).bS(0,"/welcome",null)},
$S:0}
B.c5r.prototype={
$0(){var x=this.a
x.gS().a0(0,$.CI().gaW(),y.v).sa3(0,x.a.d)
A.ai(this.b).ar("/register?role=couple",null,y.q)},
$S:0}
B.c5s.prototype={
$0(){var x=this.a
x.gS().a0(0,$.CI().gaW(),y.v).sa3(0,x.a.d)
A.ai(this.b).ar("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ep,A.dB)
x(B.aHP,A.dw)
x(B.c5v,A.bx)
w(A.bT,[B.c5n,B.c5o,B.c5p,B.c5t,B.c5q,B.c5r,B.c5s])
x(B.c5u,A.cQ)})()
A.bq(b.typeUniverse,JSON.parse('{"Ep":{"H":[],"e":[],"f":[]},"aHP":{"a_":["Ep"]}}'))
var y=(function rtii(){var x=A.w
return{e:x("cD"),u:x("r<e>"),i:x("t<@>"),y:x("a4<c,@>"),v:x("AW"),w:x("c"),b:x("@"),q:x("J?"),s:x("+inviterName,names,valid(c?,c,y)?"),r:x("~")}})();(function constants(){D.c1N=new A.N(!0,C.A,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccl=new A.D("O QUE ISTO SIGNIFICA",null,C.aap,null,null,null,null,null,null,null,null)})()};
(a=>{a["cEsEYTIi/RLXfmLrl6Ce1s3oRjc="]=a.current})($__dart_deferred_initializers__);