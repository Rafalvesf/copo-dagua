((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
drD(d){return new B.Eh(d,null)},
Eh:function Eh(d,e){this.d=d
this.a=e},
aHB:function aHB(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c6r:function c6r(d){this.a=d},
c6j:function c6j(d){this.a=d},
c6k:function c6k(d){this.a=d},
c6l:function c6l(d,e){this.a=d
this.b=e},
c6p:function c6p(d){this.a=d},
c6q:function c6q(d){this.a=d},
c6m:function c6m(d){this.a=d},
c6n:function c6n(d,e){this.a=d
this.b=e},
c6o:function c6o(d,e){this.a=d
this.b=e},
cIk(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cIk=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.P().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aG("get_partner_invite",A.R(["p_token",d],y.w,u),u),$async$cIk)
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
n=A.dU(n.h(s,"valid"))
v=new A.aM8(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cIk,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[185]
E=c[186]
B.Eh.prototype={
S(){return new B.aHB()}}
B.aHB.prototype={
ad(){this.aq()
$.ay.k4$.push(new B.c6r(this))},
Sd(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Sd=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gR()
n=o.a_(0,$.b6(),y.e)
if(n.a!==C.iy){o.a_(0,$.CA().gaX(),y.v).sa4(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dP){s.p(new B.c6j(s))
x=1
break}s.p(new B.c6k(s))
u=4
x=7
return A.d(A.aTP(s.a.d),$async$Sd)
case 7:o.aj($.co())
o=s.c
if(o==null){x=1
break}A.ac(o).bQ(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.a9(m)
if(s.c==null){x=1
break}s.p(new B.c6l(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Sd,w)},
u(d){var x,w,v,u=this,t=null
if(u.gR().G($.b6(),y.e).a===C.iy){x=u.x
x=x==null?C.km:A.tF(A.a([new A.fV("Voltar",new B.c6p(d),!1,t)],y.u),t,t,x,C.od,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cIk(u.a.d)
u.w!==$&&A.b_()
u.w=v
w=v}x=A.b6U(new B.c6q(u),w,y.s)}return A.cO(t,C.by,A.bA(!0,new A.S(C.hu,A.bM(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.c6r.prototype={
$1(d){return this.a.Sd()},
$S:5}
B.c6j.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c6k.prototype={
$0(){return!0},
$S:0}
B.c6l.prototype={
$0(){var x=this.b,w=x instanceof A.cS
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c6p.prototype={
$0(){return A.ac(this.a).bQ(0,"/home",null)},
$S:0}
B.c6q.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.n2)return C.km
x=e.b
if(x==null||!x.c)return A.tF(A.a([new A.fV("Ir para o in\xedcio",new B.c6m(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.od,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.x(q,A.y(A.a([D.ceM,C.P,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c0k,q,q)],r),C.G,C.h,C.l),C.r,q,q,new A.I(C.t,q,q,s,C.bq,q,C.x),q,q,q,C.cH,q,q,q)
v=this.a
return A.tF(A.a([new A.fV("Criar conta",new B.c6n(v,d),!1,q),A.hh(E.Iq,new B.c6o(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a0R,w)},
$S:1476}
B.c6m.prototype={
$0(){return A.ac(this.a).bQ(0,"/welcome",null)},
$S:0}
B.c6n.prototype={
$0(){var x=this.a
x.gR().a_(0,$.CA().gaX(),y.v).sa4(0,x.a.d)
A.ac(this.b).ak("/register?role=couple",null,y.q)},
$S:0}
B.c6o.prototype={
$0(){var x=this.a
x.gR().a_(0,$.CA().gaX(),y.v).sa4(0,x.a.d)
A.ac(this.b).ak("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Eh,A.dA)
x(B.aHB,A.dv)
x(B.c6r,A.bv)
w(A.bN,[B.c6j,B.c6k,B.c6l,B.c6p,B.c6m,B.c6n,B.c6o])
x(B.c6q,A.cJ)})()
A.bt(b.typeUniverse,JSON.parse('{"Eh":{"H":[],"e":[],"f":[]},"aHB":{"a1":["Eh"]}}'))
var y=(function rtii(){var x=A.z
return{e:x("cF"),u:x("r<e>"),i:x("t<@>"),y:x("a5<c,@>"),v:x("AK"),w:x("c"),b:x("@"),q:x("L?"),s:x("+inviterName,names,valid(c?,c,C)?"),r:x("~")}})();(function constants(){D.c0k=new A.Q(!0,C.z,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ceM=new A.D("O QUE ISTO SIGNIFICA",null,C.a9L,null,null,null,null,null,null,null)})()};
(a=>{a["rGgwScUxfFK1i0+jiqjDwbCz1Ss="]=a.current})($__dart_deferred_initializers__);