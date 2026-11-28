((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dsT(d){return new B.Eo(d,null)},
Eo:function Eo(d,e){this.d=d
this.a=e},
aHU:function aHU(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c7a:function c7a(d){this.a=d},
c72:function c72(d){this.a=d},
c73:function c73(d){this.a=d},
c74:function c74(d,e){this.a=d
this.b=e},
c78:function c78(d){this.a=d},
c79:function c79(d){this.a=d},
c75:function c75(d){this.a=d},
c76:function c76(d,e){this.a=d
this.b=e},
c77:function c77(d,e){this.a=d
this.b=e},
cJn(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cJn=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.Q().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aH("get_partner_invite",A.R(["p_token",d],y.w,u),u),$async$cJn)
case 3:t=m.a(f)
n=J.a7(t)
if(n.gY(t)){v=null
x=1
break}s=y.y.a(n.gJ(t))
n=J.a7(s)
r=A.B(n.h(s,"partner_name_1"))
if(r==null)r=""
q=A.B(n.h(s,"partner_name_2"))
u=A.B(n.h(s,"inviter_name"))
p=u==null?null:C.f.B(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.dV(n.h(s,"valid"))
v=new A.aMt(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cJn,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[188]
E=c[189]
B.Eo.prototype={
R(){return new B.aHU()}}
B.aHU.prototype={
ad(){this.aq()
$.az.k4$.push(new B.c7a(this))},
Si(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Si=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gS()
n=o.a_(0,$.b7(),y.e)
if(n.a!==C.iy){o.a_(0,$.CF().gaX(),y.v).sa4(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dQ){s.p(new B.c72(s))
x=1
break}s.p(new B.c73(s))
u=4
x=7
return A.d(A.aUb(s.a.d),$async$Si)
case 7:o.aj($.cq())
o=s.c
if(o==null){x=1
break}A.ae(o).bQ(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.a9(m)
if(s.c==null){x=1
break}s.p(new B.c74(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Si,w)},
u(d){var x,w,v,u=this,t=null
if(u.gS().G($.b7(),y.e).a===C.iy){x=u.x
x=x==null?C.ks:A.tK(A.a([new A.fX("Voltar",new B.c78(d),!1,t)],y.u),t,t,x,C.oe,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cJn(u.a.d)
u.w!==$&&A.b_()
u.w=v
w=v}x=A.b7g(new B.c79(u),w,y.s)}return A.cP(t,C.by,A.bB(!0,new A.S(C.hu,A.bO(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.c7a.prototype={
$1(d){return this.a.Si()},
$S:5}
B.c72.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c73.prototype={
$0(){return!0},
$S:0}
B.c74.prototype={
$0(){var x=this.b,w=x instanceof A.cT
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c78.prototype={
$0(){return A.ae(this.a).bQ(0,"/home",null)},
$S:0}
B.c79.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.n7)return C.ks
x=e.b
if(x==null||!x.c)return A.tK(A.a([new A.fX("Ir para o in\xedcio",new B.c75(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.oe,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.x(q,A.z(A.a([D.cf1,C.P,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c0u,q,q)],r),C.G,C.h,C.l),C.r,q,q,new A.I(C.t,q,q,s,C.bq,q,C.x),q,q,q,C.cH,q,q,q)
v=this.a
return A.tK(A.a([new A.fX("Criar conta",new B.c76(v,d),!1,q),new A.am(A.hi(E.Iu,new B.c77(v,d),q),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a0V,w)},
$S:1482}
B.c75.prototype={
$0(){return A.ae(this.a).bQ(0,"/welcome",null)},
$S:0}
B.c76.prototype={
$0(){var x=this.a
x.gS().a_(0,$.CF().gaX(),y.v).sa4(0,x.a.d)
A.ae(this.b).ak("/register?role=couple",null,y.q)},
$S:0}
B.c77.prototype={
$0(){var x=this.a
x.gS().a_(0,$.CF().gaX(),y.v).sa4(0,x.a.d)
A.ae(this.b).ak("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Eo,A.dC)
x(B.aHU,A.dw)
x(B.c7a,A.bs)
w(A.bL,[B.c72,B.c73,B.c74,B.c78,B.c75,B.c76,B.c77])
x(B.c79,A.cK)})()
A.bq(b.typeUniverse,JSON.parse('{"Eo":{"G":[],"e":[],"f":[]},"aHU":{"a0":["Eo"]}}'))
var y=(function rtii(){var x=A.y
return{e:x("cH"),u:x("r<e>"),i:x("t<@>"),y:x("a5<c,@>"),v:x("AP"),w:x("c"),b:x("@"),q:x("M?"),s:x("+inviterName,names,valid(c?,c,C)?"),r:x("~")}})();(function constants(){D.c0u=new A.P(!0,C.z,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cf1=new A.D("O QUE ISTO SIGNIFICA",null,C.a9T,null,null,null,null,null,null,null)})()};
(a=>{a["nHGPjQjBNHfkJyBsqK9E4frT/qk="]=a.current})($__dart_deferred_initializers__);