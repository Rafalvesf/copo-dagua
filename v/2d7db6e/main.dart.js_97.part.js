((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
drU(d){return new B.Et(d,null)},
Et:function Et(d,e){this.d=d
this.a=e},
aI9:function aI9(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c7f:function c7f(d){this.a=d},
c77:function c77(d){this.a=d},
c78:function c78(d){this.a=d},
c79:function c79(d,e){this.a=d
this.b=e},
c7d:function c7d(d){this.a=d},
c7e:function c7e(d){this.a=d},
c7a:function c7a(d){this.a=d},
c7b:function c7b(d,e){this.a=d
this.b=e},
c7c:function c7c(d,e){this.a=d
this.b=e},
cIR(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cIR=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.Q().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aK("get_partner_invite",A.R(["p_token",d],y.w,u),u),$async$cIR)
case 3:t=m.a(f)
n=J.a7(t)
if(n.gZ(t)){v=null
x=1
break}s=y.y.a(n.gL(t))
n=J.a7(s)
r=A.C(n.h(s,"partner_name_1"))
if(r==null)r=""
q=A.C(n.h(s,"partner_name_2"))
u=A.C(n.h(s,"inviter_name"))
p=u==null?null:C.f.B(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.dX(n.h(s,"valid"))
v=new A.aMK(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cIR,w)}},D
J=c[1]
A=c[0]
C=c[2]
E=c[195]
B=a.updateHolder(c[8],B)
D=c[194]
B.Et.prototype={
R(){return new B.aI9()}}
B.aI9.prototype={
ac(){this.ao()
$.aA.k4$.push(new B.c7f(this))},
SM(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$SM=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gS()
n=o.a0(0,$.b9(),y.e)
if(n.a!==C.ix){o.a0(0,$.CK().gaX(),y.v).sa4(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dR){s.p(new B.c77(s))
x=1
break}s.p(new B.c78(s))
u=4
x=7
return A.d(A.aUw(s.a.d),$async$SM)
case 7:o.ak($.cr())
o=s.c
if(o==null){x=1
break}A.ah(o).bQ(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.a9(m)
if(s.c==null){x=1
break}s.p(new B.c79(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$SM,w)},
u(d){var x,w,v,u=this,t=null
if(u.gS().G($.b9(),y.e).a===C.ix){x=u.x
x=x==null?C.km:A.tI(A.a([new A.fW("Voltar",new B.c7d(d),!1,t)],y.u),t,t,x,C.om,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cIR(u.a.d)
u.w!==$&&A.aZ()
u.w=v
w=v}x=A.b7G(new B.c7e(u),w,y.s)}return A.cP(t,C.bz,A.bD(!0,new A.S(C.fU,A.bM(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.c7f.prototype={
$1(d){return this.a.SM()},
$S:5}
B.c77.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c78.prototype={
$0(){return!0},
$S:0}
B.c79.prototype={
$0(){var x=this.b,w=x instanceof A.cT
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c7d.prototype={
$0(){return A.ah(this.a).bQ(0,"/home",null)},
$S:0}
B.c7e.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.ne)return C.km
x=e.b
if(x==null||!x.c)return A.tI(A.a([new A.fW("Ir para o in\xedcio",new B.c7a(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.om,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.x(q,A.A(A.a([D.cbK,C.Q,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c16,q,q,q)],r),C.G,C.h,C.l),C.r,q,q,new A.I(C.t,q,q,s,C.bi,q,C.x),q,q,q,C.dp,q,q,q)
v=this.a
return A.tI(A.a([new A.fW("Criar conta",new B.c7b(v,d),!1,q),A.h5(E.IJ,new B.c7c(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a1j,w)},
$S:1461}
B.c7a.prototype={
$0(){return A.ah(this.a).bQ(0,"/welcome",null)},
$S:0}
B.c7b.prototype={
$0(){var x=this.a
x.gS().a0(0,$.CK().gaX(),y.v).sa4(0,x.a.d)
A.ah(this.b).au("/register?role=couple",null,y.q)},
$S:0}
B.c7c.prototype={
$0(){var x=this.a
x.gS().a0(0,$.CK().gaX(),y.v).sa4(0,x.a.d)
A.ah(this.b).au("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Et,A.dz)
x(B.aI9,A.du)
x(B.c7f,A.bu)
w(A.bP,[B.c77,B.c78,B.c79,B.c7d,B.c7a,B.c7b,B.c7c])
x(B.c7e,A.cK)})()
A.bn(b.typeUniverse,JSON.parse('{"Et":{"G":[],"e":[],"f":[]},"aI9":{"Y":["Et"]}}'))
var y=(function rtii(){var x=A.w
return{e:x("cB"),u:x("r<e>"),i:x("t<@>"),y:x("a4<c,@>"),v:x("AR"),w:x("c"),b:x("@"),q:x("J?"),s:x("+inviterName,names,valid(c?,c,y)?"),r:x("~")}})();(function constants(){D.c16=new A.P(!0,C.z,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbK=new A.D("O QUE ISTO SIGNIFICA",null,C.aa6,null,null,null,null,null,null,null,null)})()};
(a=>{a["bG1FKwEx/LuvTV8C2hdmYDvGKI0="]=a.current})($__dart_deferred_initializers__);