((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d3C(d){return new B.CC(d,null)},
CC:function CC(d,e){this.d=d
this.a=e},
aBy:function aBy(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
bRI:function bRI(d){this.a=d},
bRA:function bRA(d){this.a=d},
bRB:function bRB(d){this.a=d},
bRC:function bRC(d,e){this.a=d
this.b=e},
bRG:function bRG(d){this.a=d},
bRH:function bRH(d){this.a=d},
bRD:function bRD(d){this.a=d},
bRE:function bRE(d,e){this.a=d
this.b=e},
bRF:function bRF(d,e){this.a=d
this.b=e},
coP(d){var x=0,w=A.m(y.s),v,u,t,s,r,q,p,o,n,m
var $async$coP=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:n=$.Q().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aT("get_partner_invite",A.U(["p_token",d],y.w,u),u),$async$coP)
case 3:t=m.a(f)
n=J.a3(t)
if(n.gZ(t)){v=null
x=1
break}s=y.y.a(n.gO(t))
n=J.a3(s)
r=A.I(n.h(s,"partner_name_1"))
if(r==null)r=""
q=A.I(n.h(s,"partner_name_2"))
u=A.I(n.h(s,"inviter_name"))
p=u==null?null:C.f.D(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.dT(n.h(s,"valid"))
v=new A.aFN(o,u,n===!0)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$coP,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[198]
E=c[199]
B.CC.prototype={
S(){return new B.aBy()}}
B.aBy.prototype={
ak(){this.aE()
$.az.ry$.push(new B.bRI(this))},
QP(){var x=0,w=A.m(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$QP=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gV()
n=o.a2(0,$.b6(),y.e)
if(n.a!==C.hU){o.a2(0,$.B8().gaR(),y.v).sa1(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dC){s.p(new B.bRA(s))
x=1
break}s.p(new B.bRB(s))
u=4
x=7
return A.d(A.aNc(s.a.d),$async$QP)
case 7:o.ai($.cw())
o=s.c
if(o==null){x=1
break}A.ap(o).bN(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.af(m)
if(s.c==null){x=1
break}s.p(new B.bRC(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$QP,w)},
u(d){var x,w,v,u=this,t=null
if(u.gV().M($.b6(),y.e).a===C.hU){x=u.x
x=x==null?C.jC:A.rF(A.a([new A.fi("Voltar",new B.bRG(d),!1,t)],y.u),t,t,x,C.no,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.coP(u.a.d)
u.w!==$&&A.aS()
u.w=v
w=v}x=A.cAe(new B.bRH(u),w,y.s)}return A.cM(t,C.by,A.bA(!0,new A.R(C.fY,A.bP(x,t,t),t),t,C.Y,!0),!0,t)}}
var z=a.updateTypes([])
B.bRI.prototype={
$1(d){return this.a.QP()},
$S:7}
B.bRA.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.bRB.prototype={
$0(){return!0},
$S:0}
B.bRC.prototype={
$0(){var x=this.b,w=x instanceof A.cT
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.bRG.prototype={
$0(){return A.ap(this.a).bN(0,"/home",null)},
$S:0}
B.bRH.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.p5)return C.jC
x=e.b
if(x==null||!x.c)return A.rF(A.a([new A.fi("Ir para o in\xedcio",new B.bRD(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.no,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.B(q,A.D(A.a([D.c6x,C.Z,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,D.bWP,q,q,q)],r),C.I,C.j,C.q,0,C.w),C.r,q,q,new A.J(C.u,q,q,s,C.aJ,q,C.y),q,q,q,C.cN,q,q,q)
v=this.a
return A.rF(A.a([new A.fi("Criar conta",new B.bRE(v,d),!1,q),A.h8(E.H5,new B.bRF(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a_v,w)},
$S:1304}
B.bRD.prototype={
$0(){return A.ap(this.a).bN(0,"/welcome",null)},
$S:0}
B.bRE.prototype={
$0(){var x=this.a
x.gV().a2(0,$.B8().gaR(),y.v).sa1(0,x.a.d)
A.ap(this.b).aQ("/register?role=couple",null,y.q)},
$S:0}
B.bRF.prototype={
$0(){var x=this.a
x.gV().a2(0,$.B8().gaR(),y.v).sa1(0,x.a.d)
A.ap(this.b).aQ("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CC,A.dk)
x(B.aBy,A.df)
x(B.bRI,A.bq)
w(A.bI,[B.bRA,B.bRB,B.bRC,B.bRG,B.bRD,B.bRE,B.bRF])
x(B.bRH,A.cG)})()
A.bj(b.typeUniverse,JSON.parse('{"CC":{"F":[],"e":[]},"aBy":{"a_":["CC"]}}'))
var y=(function rtii(){var x=A.u
return{e:x("ct"),u:x("q<e>"),i:x("r<@>"),y:x("a6<c,@>"),v:x("zp"),w:x("c"),b:x("@"),q:x("H?"),s:x("+inviterName,names,valid(c?,c,y)?"),r:x("~")}})();(function constants(){D.bWP=new A.E(!0,C.z,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6x=new A.z("O QUE ISTO SIGNIFICA",null,C.a7R,null,null,null,null,null,null,null,null)})()};
(a=>{a["wChyw+yPI4/r3hBLfFoKLe8ca60="]=a.current})($__dart_deferred_initializers__);