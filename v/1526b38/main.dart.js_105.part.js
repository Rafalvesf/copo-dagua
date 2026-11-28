((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dtH(d){return new B.Et(d,null)},
Et:function Et(d,e){this.d=d
this.a=e},
aIi:function aIi(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c7L:function c7L(d){this.a=d},
c7D:function c7D(d){this.a=d},
c7E:function c7E(d){this.a=d},
c7F:function c7F(d,e){this.a=d
this.b=e},
c7J:function c7J(d){this.a=d},
c7K:function c7K(d){this.a=d},
c7G:function c7G(d){this.a=d},
c7H:function c7H(d,e){this.a=d
this.b=e},
c7I:function c7I(d,e){this.a=d
this.b=e},
cK3(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cK3=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.P().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aG("get_partner_invite",A.R(["p_token",d],y.w,u),u),$async$cK3)
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
n=A.dW(n.h(s,"valid"))
v=new A.aMS(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cK3,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[188]
E=c[189]
B.Et.prototype={
R(){return new B.aIi()}}
B.aIi.prototype={
ad(){this.aq()
$.az.k4$.push(new B.c7L(this))},
So(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$So=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gS()
n=o.a_(0,$.b7(),y.e)
if(n.a!==C.iB){o.a_(0,$.CL().gaX(),y.v).sa1(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dQ){s.p(new B.c7D(s))
x=1
break}s.p(new B.c7E(s))
u=4
x=7
return A.d(A.aUA(s.a.d),$async$So)
case 7:o.ai($.cq())
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
break}s.p(new B.c7F(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$So,w)},
u(d){var x,w,v,u=this,t=null
if(u.gS().G($.b7(),y.e).a===C.iB){x=u.x
x=x==null?C.ks:A.tM(A.a([new A.fY("Voltar",new B.c7J(d),!1,t)],y.u),t,t,x,C.of,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cK3(u.a.d)
u.w!==$&&A.b_()
u.w=v
w=v}x=A.b7H(new B.c7K(u),w,y.s)}return A.cP(t,C.by,A.bB(!0,new A.S(C.hx,A.bO(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.c7L.prototype={
$1(d){return this.a.So()},
$S:5}
B.c7D.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c7E.prototype={
$0(){return!0},
$S:0}
B.c7F.prototype={
$0(){var x=this.b,w=x instanceof A.cU
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c7J.prototype={
$0(){return A.ae(this.a).bQ(0,"/home",null)},
$S:0}
B.c7K.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.n8)return C.ks
x=e.b
if(x==null||!x.c)return A.tM(A.a([new A.fY("Ir para o in\xedcio",new B.c7G(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.of,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.x(q,A.y(A.a([D.cf5,C.P,A.i("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c0x,q,q)],r),C.G,C.h,C.l),C.r,q,q,new A.J(C.t,q,q,s,C.br,q,C.x),q,q,q,C.cI,q,q,q)
v=this.a
return A.tM(A.a([new A.fY("Criar conta",new B.c7H(v,d),!1,q),new A.am(A.hk(E.Iv,new B.c7I(v,d),q),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a0W,w)},
$S:1486}
B.c7G.prototype={
$0(){return A.ae(this.a).bQ(0,"/welcome",null)},
$S:0}
B.c7H.prototype={
$0(){var x=this.a
x.gS().a_(0,$.CL().gaX(),y.v).sa1(0,x.a.d)
A.ae(this.b).aj("/register?role=couple",null,y.q)},
$S:0}
B.c7I.prototype={
$0(){var x=this.a
x.gS().a_(0,$.CL().gaX(),y.v).sa1(0,x.a.d)
A.ae(this.b).aj("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Et,A.dC)
x(B.aIi,A.dw)
x(B.c7L,A.bu)
w(A.bL,[B.c7D,B.c7E,B.c7F,B.c7J,B.c7G,B.c7H,B.c7I])
x(B.c7K,A.cK)})()
A.br(b.typeUniverse,JSON.parse('{"Et":{"H":[],"e":[],"f":[]},"aIi":{"a_":["Et"]}}'))
var y=(function rtii(){var x=A.z
return{e:x("cH"),u:x("r<e>"),i:x("t<@>"),y:x("a3<c,@>"),v:x("AS"),w:x("c"),b:x("@"),q:x("M?"),s:x("+inviterName,names,valid(c?,c,C)?"),r:x("~")}})();(function constants(){D.c0x=new A.Q(!0,C.z,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cf5=new A.D("O QUE ISTO SIGNIFICA",null,C.a9T,null,null,null,null,null,null,null)})()};
(a=>{a["1X7V+TKtuGrIQKYbya+1bNKkKgc="]=a.current})($__dart_deferred_initializers__);