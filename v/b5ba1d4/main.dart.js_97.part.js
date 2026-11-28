((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dsr(d){return new B.Er(d,null)},
Er:function Er(d,e){this.d=d
this.a=e},
aIc:function aIc(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c7H:function c7H(d){this.a=d},
c7z:function c7z(d){this.a=d},
c7A:function c7A(d){this.a=d},
c7B:function c7B(d,e){this.a=d
this.b=e},
c7F:function c7F(d){this.a=d},
c7G:function c7G(d){this.a=d},
c7C:function c7C(d){this.a=d},
c7D:function c7D(d,e){this.a=d
this.b=e},
c7E:function c7E(d,e){this.a=d
this.b=e},
cJj(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cJj=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.P().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aK("get_partner_invite",A.R(["p_token",d],y.w,u),u),$async$cJj)
case 3:t=m.a(f)
n=J.a7(t)
if(n.gZ(t)){v=null
x=1
break}s=y.y.a(n.gJ(t))
n=J.a7(s)
r=A.C(n.h(s,"partner_name_1"))
if(r==null)r=""
q=A.C(n.h(s,"partner_name_2"))
u=A.C(n.h(s,"inviter_name"))
p=u==null?null:C.f.B(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.dW(n.h(s,"valid"))
v=new A.aML(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cJj,w)}},D
J=c[1]
A=c[0]
C=c[2]
E=c[191]
B=a.updateHolder(c[8],B)
D=c[190]
B.Er.prototype={
R(){return new B.aIc()}}
B.aIc.prototype={
ac(){this.ap()
$.aA.k4$.push(new B.c7H(this))},
SO(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$SO=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gS()
n=o.a1(0,$.b8(),y.e)
if(n.a!==C.iy){o.a1(0,$.CL().gaX(),y.v).sa4(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dQ){s.p(new B.c7z(s))
x=1
break}s.p(new B.c7A(s))
u=4
x=7
return A.d(A.aUx(s.a.d),$async$SO)
case 7:o.ak($.cq())
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
break}s.p(new B.c7B(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$SO,w)},
u(d){var x,w,v,u=this,t=null
if(u.gS().G($.b8(),y.e).a===C.iy){x=u.x
x=x==null?C.kl:A.tJ(A.a([new A.fX("Voltar",new B.c7F(d),!1,t)],y.u),t,t,x,C.on,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cJj(u.a.d)
u.w!==$&&A.aZ()
u.w=v
w=v}x=A.b7K(new B.c7G(u),w,y.s)}return A.cQ(t,C.bx,A.bD(!0,new A.S(C.fU,A.bL(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.c7H.prototype={
$1(d){return this.a.SO()},
$S:5}
B.c7z.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c7A.prototype={
$0(){return!0},
$S:0}
B.c7B.prototype={
$0(){var x=this.b,w=x instanceof A.cU
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c7F.prototype={
$0(){return A.ae(this.a).bQ(0,"/home",null)},
$S:0}
B.c7G.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.nc)return C.kl
x=e.b
if(x==null||!x.c)return A.tJ(A.a([new A.fX("Ir para o in\xedcio",new B.c7C(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.on,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.A(q,A.B(A.a([D.cbh,C.Q,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c0R,q,q,q)],r),C.G,C.h,C.l),C.r,q,q,new A.K(C.t,q,q,s,C.bp,q,C.x),q,q,q,C.cY,q,q,q)
v=this.a
return A.tJ(A.a([new A.fX("Criar conta",new B.c7D(v,d),!1,q),A.hh(E.II,new B.c7E(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a1b,w)},
$S:1468}
B.c7C.prototype={
$0(){return A.ae(this.a).bQ(0,"/welcome",null)},
$S:0}
B.c7D.prototype={
$0(){var x=this.a
x.gS().a1(0,$.CL().gaX(),y.v).sa4(0,x.a.d)
A.ae(this.b).am("/register?role=couple",null,y.q)},
$S:0}
B.c7E.prototype={
$0(){var x=this.a
x.gS().a1(0,$.CL().gaX(),y.v).sa4(0,x.a.d)
A.ae(this.b).am("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Er,A.dA)
x(B.aIc,A.dv)
x(B.c7H,A.bw)
w(A.bO,[B.c7z,B.c7A,B.c7B,B.c7F,B.c7C,B.c7D,B.c7E])
x(B.c7G,A.cL)})()
A.br(b.typeUniverse,JSON.parse('{"Er":{"G":[],"e":[],"f":[]},"aIc":{"Y":["Er"]}}'))
var y=(function rtii(){var x=A.w
return{e:x("cJ"),u:x("r<e>"),i:x("t<@>"),y:x("a6<c,@>"),v:x("AS"),w:x("c"),b:x("@"),q:x("J?"),s:x("+inviterName,names,valid(c?,c,z)?"),r:x("~")}})();(function constants(){D.c0R=new A.Q(!0,C.z,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbh=new A.D("O QUE ISTO SIGNIFICA",null,C.aa_,null,null,null,null,null,null,null,null)})()};
(a=>{a["ylec8Y5Bcsh9d3clrDZZkJ7g5Uk="]=a.current})($__dart_deferred_initializers__);