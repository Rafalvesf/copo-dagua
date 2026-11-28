((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dsI(d){return new B.Et(d,null)},
Et:function Et(d,e){this.d=d
this.a=e},
aIc:function aIc(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c7E:function c7E(d){this.a=d},
c7w:function c7w(d){this.a=d},
c7x:function c7x(d){this.a=d},
c7y:function c7y(d,e){this.a=d
this.b=e},
c7C:function c7C(d){this.a=d},
c7D:function c7D(d){this.a=d},
c7z:function c7z(d){this.a=d},
c7A:function c7A(d,e){this.a=d
this.b=e},
c7B:function c7B(d,e){this.a=d
this.b=e},
cJu(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cJu=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.P().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aK("get_partner_invite",A.R(["p_token",d],y.w,u),u),$async$cJu)
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
return A.m($async$cJu,w)}},D
J=c[1]
A=c[0]
C=c[2]
E=c[190]
B=a.updateHolder(c[8],B)
D=c[189]
B.Et.prototype={
R(){return new B.aIc()}}
B.aIc.prototype={
ac(){this.ap()
$.aA.k4$.push(new B.c7E(this))},
SO(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$SO=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gS()
n=o.a1(0,$.b8(),y.e)
if(n.a!==C.iy){o.a1(0,$.CM().gaX(),y.v).sa4(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dQ){s.p(new B.c7w(s))
x=1
break}s.p(new B.c7x(s))
u=4
x=7
return A.d(A.aUx(s.a.d),$async$SO)
case 7:o.ak($.cr())
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
break}s.p(new B.c7y(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$SO,w)},
u(d){var x,w,v,u=this,t=null
if(u.gS().G($.b8(),y.e).a===C.iy){x=u.x
x=x==null?C.kk:A.tJ(A.a([new A.fX("Voltar",new B.c7C(d),!1,t)],y.u),t,t,x,C.oo,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cJu(u.a.d)
u.w!==$&&A.aY()
u.w=v
w=v}x=A.b7J(new B.c7D(u),w,y.s)}return A.cQ(t,C.bx,A.bD(!0,new A.T(C.hw,A.bL(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.c7E.prototype={
$1(d){return this.a.SO()},
$S:5}
B.c7w.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c7x.prototype={
$0(){return!0},
$S:0}
B.c7y.prototype={
$0(){var x=this.b,w=x instanceof A.cU
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c7C.prototype={
$0(){return A.ae(this.a).bQ(0,"/home",null)},
$S:0}
B.c7D.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.ne)return C.kk
x=e.b
if(x==null||!x.c)return A.tJ(A.a([new A.fX("Ir para o in\xedcio",new B.c7z(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.oo,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.B(q,A.A(A.a([D.cbl,C.Q,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c0W,q,q,q)],r),C.F,C.h,C.l),C.r,q,q,new A.K(C.t,q,q,s,C.br,q,C.x),q,q,q,C.cH,q,q,q)
v=this.a
return A.tJ(A.a([new A.fX("Criar conta",new B.c7A(v,d),!1,q),A.hh(E.II,new B.c7B(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a1a,w)},
$S:1472}
B.c7z.prototype={
$0(){return A.ae(this.a).bQ(0,"/welcome",null)},
$S:0}
B.c7A.prototype={
$0(){var x=this.a
x.gS().a1(0,$.CM().gaX(),y.v).sa4(0,x.a.d)
A.ae(this.b).al("/register?role=couple",null,y.q)},
$S:0}
B.c7B.prototype={
$0(){var x=this.a
x.gS().a1(0,$.CM().gaX(),y.v).sa4(0,x.a.d)
A.ae(this.b).al("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Et,A.dA)
x(B.aIc,A.dv)
x(B.c7E,A.bw)
w(A.bO,[B.c7w,B.c7x,B.c7y,B.c7C,B.c7z,B.c7A,B.c7B])
x(B.c7D,A.cK)})()
A.bt(b.typeUniverse,JSON.parse('{"Et":{"G":[],"e":[],"f":[]},"aIc":{"Y":["Et"]}}'))
var y=(function rtii(){var x=A.w
return{e:x("cJ"),u:x("r<e>"),i:x("t<@>"),y:x("a4<c,@>"),v:x("AT"),w:x("c"),b:x("@"),q:x("J?"),s:x("+inviterName,names,valid(c?,c,z)?"),r:x("~")}})();(function constants(){D.c0W=new A.Q(!0,C.z,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbl=new A.D("O QUE ISTO SIGNIFICA",null,C.aa0,null,null,null,null,null,null,null,null)})()};
(a=>{a["SNcKT3egLmA6eFAVrkpqOzR2yCo="]=a.current})($__dart_deferred_initializers__);