((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dbM(d){return new B.Dl(d,null)},
Dl:function Dl(d,e){this.d=d
this.a=e},
aEF:function aEF(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
bYm:function bYm(d){this.a=d},
bYe:function bYe(d){this.a=d},
bYf:function bYf(d){this.a=d},
bYg:function bYg(d,e){this.a=d
this.b=e},
bYk:function bYk(d){this.a=d},
bYl:function bYl(d){this.a=d},
bYh:function bYh(d){this.a=d},
bYi:function bYi(d,e){this.a=d
this.b=e},
bYj:function bYj(d,e){this.a=d
this.b=e},
cuO(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cuO=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.R().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.b2("get_partner_invite",A.Q(["p_token",d],y.w,u),u),$async$cuO)
case 3:t=m.a(f)
n=J.a5(t)
if(n.gY(t)){v=null
x=1
break}s=y.y.a(n.gN(t))
n=J.a5(s)
r=A.L(n.h(s,"partner_name_1"))
if(r==null)r=""
q=A.L(n.h(s,"partner_name_2"))
u=A.L(n.h(s,"inviter_name"))
p=u==null?null:C.f.D(u)
u=q==null||q.length===0?r:r+" & "+q
o=p==null||p.length===0?null:p
n=A.e2(n.h(s,"valid"))
v=new A.aIW(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cuO,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[194]
E=c[195]
B.Dl.prototype={
R(){return new B.aEF()}}
B.aEF.prototype={
aj(){this.aH()
$.ay.k4$.push(new B.bYm(this))},
RM(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$RM=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gU()
n=o.a1(0,$.b7(),y.e)
if(n.a!==C.hX){o.a1(0,$.BO().gaW(),y.v).sa2(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dG){s.q(new B.bYe(s))
x=1
break}s.q(new B.bYf(s))
u=4
x=7
return A.d(A.aQo(s.a.d),$async$RM)
case 7:o.al($.cC())
o=s.c
if(o==null){x=1
break}A.ar(o).bR(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.a7(m)
if(s.c==null){x=1
break}s.q(new B.bYg(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$RM,w)},
u(d){var x,w,v,u=this,t=null
if(u.gU().L($.b7(),y.e).a===C.hX){x=u.x
x=x==null?C.jK:A.t4(A.a([new A.fr("Voltar",new B.bYk(d),!1,t)],y.u),t,t,x,C.ny,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cuO(u.a.d)
u.w!==$&&A.aT()
u.w=v
w=v}x=A.cGp(new B.bYl(u),w,y.s)}return A.cP(t,C.by,A.bB(!0,new A.X(C.h4,A.bT(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.bYm.prototype={
$1(d){return this.a.RM()},
$S:7}
B.bYe.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.bYf.prototype={
$0(){return!0},
$S:0}
B.bYg.prototype={
$0(){var x=this.b,w=x instanceof A.cV
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.bYk.prototype={
$0(){return A.ar(this.a).bR(0,"/home",null)},
$S:0}
B.bYl.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.pi)return C.jK
x=e.b
if(x==null||!x.c)return A.t4(A.a([new A.fr("Ir para o in\xedcio",new B.bYh(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.ny,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.F(q,A.G(A.a([D.c71,C.a1,A.i("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,D.bXr,q,q,q)],r),C.J,C.l,C.q,0,C.w),C.r,q,q,new A.M(C.u,q,q,s,C.aH,q,C.y),q,q,q,C.cP,q,q,q)
v=this.a
return A.t4(A.a([new A.fr("Criar conta",new B.bYi(v,d),!1,q),A.ia(E.Hu,new B.bYj(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a0_,w)},
$S:1380}
B.bYh.prototype={
$0(){return A.ar(this.a).bR(0,"/welcome",null)},
$S:0}
B.bYi.prototype={
$0(){var x=this.a
x.gU().a1(0,$.BO().gaW(),y.v).sa2(0,x.a.d)
A.ar(this.b).aU("/register?role=couple",null,y.q)},
$S:0}
B.bYj.prototype={
$0(){var x=this.a
x.gU().a1(0,$.BO().gaW(),y.v).sa2(0,x.a.d)
A.ar(this.b).aU("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Dl,A.ds)
x(B.aEF,A.di)
x(B.bYm,A.bv)
w(A.bM,[B.bYe,B.bYf,B.bYg,B.bYk,B.bYh,B.bYi,B.bYj])
x(B.bYl,A.cM)})()
A.bt(b.typeUniverse,JSON.parse('{"Dl":{"I":[],"e":[],"f":[]},"aEF":{"a1":["Dl"]}}'))
var y=(function rtii(){var x=A.w
return{e:x("cx"),u:x("r<e>"),i:x("t<@>"),y:x("a3<c,@>"),v:x("A5"),w:x("c"),b:x("@"),q:x("J?"),s:x("+inviterName,names,valid(c?,c,z)?"),r:x("~")}})();(function constants(){D.bXr=new A.H(!0,C.A,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c71=new A.C("O QUE ISTO SIGNIFICA",null,C.a8n,null,null,null,null,null,null,null,null)})()};
(a=>{a["OTvwpcuEx2yhsJktj2xBZ1pCZ8g="]=a.current})($__dart_deferred_initializers__);