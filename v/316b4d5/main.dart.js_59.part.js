((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dtI(d){return new B.Ex(d,null)},
Ex:function Ex(d,e){this.d=d
this.a=e},
aIW:function aIW(){var _=this
_.w=$
_.x=null
_.y=!1
_.d=$
_.c=_.a=null},
c8f:function c8f(d){this.a=d},
c87:function c87(d){this.a=d},
c88:function c88(d){this.a=d},
c89:function c89(d,e){this.a=d
this.b=e},
c8d:function c8d(d){this.a=d},
c8e:function c8e(d){this.a=d},
c8a:function c8a(d){this.a=d},
c8b:function c8b(d,e){this.a=d
this.b=e},
c8c:function c8c(d,e){this.a=d
this.b=e},
cJy(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cJy=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.Q().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aH("get_partner_invite",A.R(["p_token",d],y.w,u),u),$async$cJy)
case 3:t=m.a(f)
n=J.a6(t)
if(n.gY(t)){v=null
x=1
break}s=y.y.a(n.gJ(t))
n=J.a6(s)
r=A.y(n.h(s,"partner_name_1"))
if(r==null)r=""
q=A.y(n.h(s,"partner_name_2"))
u=A.y(n.h(s,"inviter_name"))
p=u==null?null:C.f.C(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.dS(n.h(s,"valid"))
v=new A.aNv(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cJy,w)}},D,E,F
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[188]
E=c[190]
F=c[189]
B.Ex.prototype={
P(){return new B.aIW()}}
B.aIW.prototype={
ad(){this.ao()
$.aA.k4$.push(new B.c8f(this))},
Sy(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Sy=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.y){x=1
break}q=s.gS()
p=q.a0(0,$.bb(),y.e)
if(p.a!==C.ix){q.a0(0,$.CM().gb1(),y.v).sZ(0,s.a.d)
x=1
break}o=p.b
if((o==null?null:o.e)===C.d4){s.p(new B.c87(s))
x=1
break}s.p(new B.c88(s))
u=4
x=7
return A.d(A.aVd(s.a.d),$async$Sy)
case 7:q.ak($.cp())
q=s.c
if(q==null){x=1
break}A.ae(q).bQ(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.a9(m)
if(s.c==null){x=1
break}s.p(new B.c89(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Sy,w)},
t(d){var x,w,v,u=this,t=null
if(u.gS().G($.bb(),y.e).a===C.ix){x=u.x
x=x==null?C.ku:A.tN(A.a([new A.h_("Voltar",new B.c8d(d),!1,t)],y.u),t,t,x,C.om,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cJy(u.a.d)
u.w!==$&&A.b_()
u.w=v
w=v}x=A.b8x(new B.c8e(u),w,y.s)}return A.cO(t,C.bA,A.bF(!0,new A.S(C.i6,A.bG(x,t,t),t),t,C.Y,!0),!0,t)}}
var z=a.updateTypes([])
B.c8f.prototype={
$1(d){return this.a.Sy()},
$S:5}
B.c87.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c88.prototype={
$0(){return this.a.y=!0},
$S:0}
B.c89.prototype={
$0(){var x,w,v=this.a
v.y=!1
x=this.b
w=x instanceof A.cQ
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
v.x=x},
$S:0}
B.c8d.prototype={
$0(){return A.ae(this.a).bQ(0,"/home",null)},
$S:0}
B.c8e.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.ng)return C.ku
x=e.b
if(x==null||!x.c)return A.tN(A.a([new A.h_("Ir para o in\xedcio",new B.c8a(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.om,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.w(q,A.x(A.a([D.cfN,C.M,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c17,q,q)],r),C.G,C.h,C.l),C.r,q,q,new A.O(C.t,q,q,s,C.bv,q,C.y),q,q,q,C.ck,q,q,q)
v=this.a
return A.tN(A.a([new A.h_("Criar conta",new B.c8b(v,d),!1,q),new A.am(A.ht(F.IC,new B.c8c(v,d),q),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a18,w)},
$S:1494}
B.c8a.prototype={
$0(){return A.ae(this.a).bQ(0,"/welcome",null)},
$S:0}
B.c8b.prototype={
$0(){var x=this.a
x.gS().a0(0,$.CM().gb1(),y.v).sZ(0,x.a.d)
A.ae(this.b).ag("/register?role=couple",null,y.q)},
$S:0}
B.c8c.prototype={
$0(){var x=this.a
x.gS().a0(0,$.CM().gb1(),y.v).sZ(0,x.a.d)
A.ae(this.b).ag("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ex,A.dB)
x(B.aIW,A.dx)
x(B.c8f,A.bv)
w(A.bO,[B.c87,B.c88,B.c89,B.c8d,B.c8a,B.c8b,B.c8c])
x(B.c8e,A.cM)})()
A.bq(b.typeUniverse,JSON.parse('{"Ex":{"G":[],"e":[],"f":[]},"aIW":{"Z":["Ex"]}}'))
var y=(function rtii(){var x=A.B
return{e:x("cI"),u:x("r<e>"),i:x("t<@>"),y:x("a4<c,@>"),v:x("AU"),w:x("c"),b:x("@"),q:x("L?"),s:x("+inviterName,names,valid(c?,c,C)?"),r:x("~")}})();(function constants(){D.c17=new A.P(!0,C.z,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cfN=new A.E("O QUE ISTO SIGNIFICA",null,E.aa7,null,null,null,null,null,null,null)})()};
(a=>{a["P+bas7uNZwfZIck2QqP0ghsKfAg="]=a.current})($__dart_deferred_initializers__);