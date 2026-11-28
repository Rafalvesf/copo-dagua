((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dtk(d){return new B.Ew(d,null)},
Ew:function Ew(d,e){this.d=d
this.a=e},
aIi:function aIi(){var _=this
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
cJC(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cJC=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.Q().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aG("get_partner_invite",A.R(["p_token",d],y.w,u),u),$async$cJC)
case 3:t=m.a(f)
n=J.a6(t)
if(n.gY(t)){v=null
x=1
break}s=y.y.a(n.gJ(t))
n=J.a6(s)
r=A.A(n.h(s,"partner_name_1"))
if(r==null)r=""
q=A.A(n.h(s,"partner_name_2"))
u=A.A(n.h(s,"inviter_name"))
p=u==null?null:C.f.B(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.dW(n.h(s,"valid"))
v=new A.aMR(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cJC,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[188]
E=c[189]
B.Ew.prototype={
P(){return new B.aIi()}}
B.aIi.prototype={
ac(){this.ap()
$.az.k4$.push(new B.c7c(this))},
Sm(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Sm=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gR()
n=o.a_(0,$.b7(),y.e)
if(n.a!==C.iA){o.a_(0,$.CO().gaX(),y.v).sa1(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dF){s.n(new B.c74(s))
x=1
break}s.n(new B.c75(s))
u=4
x=7
return A.d(A.aUA(s.a.d),$async$Sm)
case 7:o.ai($.cq())
o=s.c
if(o==null){x=1
break}A.ae(o).bR(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.a9(m)
if(s.c==null){x=1
break}s.n(new B.c76(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Sm,w)},
u(d){var x,w,v,u=this,t=null
if(u.gR().G($.b7(),y.e).a===C.iA){x=u.x
x=x==null?C.kr:A.tP(A.a([new A.fY("Voltar",new B.c7a(d),!1,t)],y.u),t,t,x,C.of,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cJC(u.a.d)
u.w!==$&&A.b_()
u.w=v
w=v}x=A.b7I(new B.c7b(u),w,y.s)}return A.cP(t,C.by,A.bB(!0,new A.S(C.hx,A.bN(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.c7c.prototype={
$1(d){return this.a.Sm()},
$S:5}
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
$0(){return A.ae(this.a).bR(0,"/home",null)},
$S:0}
B.c7b.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.n8)return C.kr
x=e.b
if(x==null||!x.c)return A.tP(A.a([new A.fY("Ir para o in\xedcio",new B.c77(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.of,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.w(q,A.x(A.a([D.cfb,C.P,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c0C,q,q)],r),C.G,C.h,C.l),C.r,q,q,new A.J(C.t,q,q,s,C.bs,q,C.x),q,q,q,C.cJ,q,q,q)
v=this.a
return A.tP(A.a([new A.fY("Criar conta",new B.c78(v,d),!1,q),new A.ak(A.hm(E.Iv,new B.c79(v,d),q),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a0Y,w)},
$S:1482}
B.c77.prototype={
$0(){return A.ae(this.a).bR(0,"/welcome",null)},
$S:0}
B.c78.prototype={
$0(){var x=this.a
x.gR().a_(0,$.CO().gaX(),y.v).sa1(0,x.a.d)
A.ae(this.b).ah("/register?role=couple",null,y.q)},
$S:0}
B.c79.prototype={
$0(){var x=this.a
x.gR().a_(0,$.CO().gaX(),y.v).sa1(0,x.a.d)
A.ae(this.b).ah("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ew,A.dC)
x(B.aIi,A.dw)
x(B.c7c,A.bu)
w(A.bL,[B.c74,B.c75,B.c76,B.c7a,B.c77,B.c78,B.c79])
x(B.c7b,A.cL)})()
A.br(b.typeUniverse,JSON.parse('{"Ew":{"G":[],"e":[],"f":[]},"aIi":{"Z":["Ew"]}}'))
var y=(function rtii(){var x=A.B
return{e:x("cI"),u:x("r<e>"),i:x("t<@>"),y:x("a3<c,@>"),v:x("AV"),w:x("c"),b:x("@"),q:x("M?"),s:x("+inviterName,names,valid(c?,c,C)?"),r:x("~")}})();(function constants(){D.c0C=new A.P(!0,C.z,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cfb=new A.D("O QUE ISTO SIGNIFICA",null,C.a9V,null,null,null,null,null,null,null)})()};
(a=>{a["9Bq7LVagEIGD+HVV04oDVmUZMMA="]=a.current})($__dart_deferred_initializers__);