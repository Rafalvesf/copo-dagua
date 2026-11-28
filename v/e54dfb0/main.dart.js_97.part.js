((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dtx(d){return new B.EA(d,null)},
EA:function EA(d,e){this.d=d
this.a=e},
aIQ:function aIQ(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c8r:function c8r(d){this.a=d},
c8j:function c8j(d){this.a=d},
c8k:function c8k(d){this.a=d},
c8l:function c8l(d,e){this.a=d
this.b=e},
c8p:function c8p(d){this.a=d},
c8q:function c8q(d){this.a=d},
c8m:function c8m(d){this.a=d},
c8n:function c8n(d,e){this.a=d
this.b=e},
c8o:function c8o(d,e){this.a=d
this.b=e},
cKt(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cKt=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.Q().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aM("get_partner_invite",A.T(["p_token",d],y.w,u),u),$async$cKt)
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
p=u==null?null:C.f.C(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.dZ(n.h(s,"valid"))
v=new A.aNr(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cKt,w)}},D
J=c[1]
A=c[0]
C=c[2]
E=c[193]
B=a.updateHolder(c[8],B)
D=c[192]
B.EA.prototype={
P(){return new B.aIQ()}}
B.aIQ.prototype={
ad(){this.ao()
$.aB.k4$.push(new B.c8r(this))},
Th(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Th=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gS()
n=o.a0(0,$.ba(),y.e)
if(n.a!==C.iC){o.a0(0,$.CU().gaY(),y.v).sa4(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dR){s.p(new B.c8j(s))
x=1
break}s.p(new B.c8k(s))
u=4
x=7
return A.d(A.aVd(s.a.d),$async$Th)
case 7:o.al($.cr())
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
break}s.p(new B.c8l(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Th,w)},
u(d){var x,w,v,u=this,t=null
if(u.gS().H($.ba(),y.e).a===C.iC){x=u.x
x=x==null?C.ky:A.tQ(A.a([new A.h0("Voltar",new B.c8p(d),!1,t)],y.u),t,t,x,C.oB,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cKt(u.a.d)
u.w!==$&&A.aX()
u.w=v
w=v}x=A.b8n(new B.c8q(u),w,y.s)}return A.cQ(t,C.bB,A.bF(!0,new A.R(C.ft,A.bK(x,t,t),t),t,C.a_,!0),!0,t)}}
var z=a.updateTypes([])
B.c8r.prototype={
$1(d){return this.a.Th()},
$S:5}
B.c8j.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c8k.prototype={
$0(){return!0},
$S:0}
B.c8l.prototype={
$0(){var x=this.b,w=x instanceof A.cU
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c8p.prototype={
$0(){return A.ai(this.a).bS(0,"/home",null)},
$S:0}
B.c8q.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.nt)return C.ky
x=e.b
if(x==null||!x.c)return A.tQ(A.a([new A.h0("Ir para o in\xedcio",new B.c8m(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.oB,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.z(q,A.x(A.a([D.ccX,C.R,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c2i,q,q,q)],r),C.H,C.h,C.l,0,C.u),C.r,q,q,new A.I(C.t,q,q,s,C.bj,q,C.y),q,q,q,C.dr,q,q,q)
v=this.a
return A.tQ(A.a([new A.h0("Criar conta",new B.c8n(v,d),!1,q),A.h9(E.J4,new B.c8o(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a1R,w)},
$S:1475}
B.c8m.prototype={
$0(){return A.ai(this.a).bS(0,"/welcome",null)},
$S:0}
B.c8n.prototype={
$0(){var x=this.a
x.gS().a0(0,$.CU().gaY(),y.v).sa4(0,x.a.d)
A.ai(this.b).aw("/register?role=couple",null,y.q)},
$S:0}
B.c8o.prototype={
$0(){var x=this.a
x.gS().a0(0,$.CU().gaY(),y.v).sa4(0,x.a.d)
A.ai(this.b).aw("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.EA,A.dA)
x(B.aIQ,A.du)
x(B.c8r,A.bw)
w(A.bQ,[B.c8j,B.c8k,B.c8l,B.c8p,B.c8m,B.c8n,B.c8o])
x(B.c8q,A.cL)})()
A.bs(b.typeUniverse,JSON.parse('{"EA":{"G":[],"e":[],"f":[]},"aIQ":{"Y":["EA"]}}'))
var y=(function rtii(){var x=A.w
return{e:x("cF"),u:x("r<e>"),i:x("t<@>"),y:x("a5<c,@>"),v:x("B2"),w:x("c"),b:x("@"),q:x("L?"),s:x("+inviterName,names,valid(c?,c,y)?"),r:x("~")}})();(function constants(){D.c2i=new A.P(!0,C.A,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccX=new A.D("O QUE ISTO SIGNIFICA",null,C.aaG,null,null,null,null,null,null,null,null)})()};
(a=>{a["TD2TZ5TZdKSyGHea+WAkWkPWSRI="]=a.current})($__dart_deferred_initializers__);