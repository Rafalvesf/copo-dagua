((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dsk(d){return new B.Em(d,null)},
Em:function Em(d,e){this.d=d
this.a=e},
aHH:function aHH(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c6P:function c6P(d){this.a=d},
c6H:function c6H(d){this.a=d},
c6I:function c6I(d){this.a=d},
c6J:function c6J(d,e){this.a=d
this.b=e},
c6N:function c6N(d){this.a=d},
c6O:function c6O(d){this.a=d},
c6K:function c6K(d){this.a=d},
c6L:function c6L(d,e){this.a=d
this.b=e},
c6M:function c6M(d,e){this.a=d
this.b=e},
cIT(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cIT=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.Q().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aG("get_partner_invite",A.R(["p_token",d],y.w,u),u),$async$cIT)
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
v=new A.aMf(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cIT,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[188]
E=c[189]
B.Em.prototype={
S(){return new B.aHH()}}
B.aHH.prototype={
ad(){this.aq()
$.az.k4$.push(new B.c6P(this))},
Sh(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Sh=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gR()
n=o.a_(0,$.b7(),y.e)
if(n.a!==C.iy){o.a_(0,$.CE().gaX(),y.v).sa4(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dQ){s.p(new B.c6H(s))
x=1
break}s.p(new B.c6I(s))
u=4
x=7
return A.d(A.aTW(s.a.d),$async$Sh)
case 7:o.aj($.cp())
o=s.c
if(o==null){x=1
break}A.ad(o).bQ(0,"/evento",null)
u=2
x=6
break
case 4:u=3
m=t.pop()
r=A.a9(m)
if(s.c==null){x=1
break}s.p(new B.c6J(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Sh,w)},
u(d){var x,w,v,u=this,t=null
if(u.gR().G($.b7(),y.e).a===C.iy){x=u.x
x=x==null?C.kp:A.tH(A.a([new A.fW("Voltar",new B.c6N(d),!1,t)],y.u),t,t,x,C.oc,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cIT(u.a.d)
u.w!==$&&A.b0()
u.w=v
w=v}x=A.b71(new B.c6O(u),w,y.s)}return A.cP(t,C.by,A.bA(!0,new A.S(C.hu,A.bO(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.c6P.prototype={
$1(d){return this.a.Sh()},
$S:5}
B.c6H.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c6I.prototype={
$0(){return!0},
$S:0}
B.c6J.prototype={
$0(){var x=this.b,w=x instanceof A.cT
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c6N.prototype={
$0(){return A.ad(this.a).bQ(0,"/home",null)},
$S:0}
B.c6O.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.n5)return C.kp
x=e.b
if(x==null||!x.c)return A.tH(A.a([new A.fW("Ir para o in\xedcio",new B.c6K(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.oc,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.x(q,A.z(A.a([D.ceS,C.P,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c0k,q,q)],r),C.G,C.h,C.l),C.r,q,q,new A.I(C.t,q,q,s,C.bq,q,C.x),q,q,q,C.cH,q,q,q)
v=this.a
return A.tH(A.a([new A.fW("Criar conta",new B.c6L(v,d),!1,q),new A.al(A.hi(E.It,new B.c6M(v,d),q),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a0S,w)},
$S:1477}
B.c6K.prototype={
$0(){return A.ad(this.a).bQ(0,"/welcome",null)},
$S:0}
B.c6L.prototype={
$0(){var x=this.a
x.gR().a_(0,$.CE().gaX(),y.v).sa4(0,x.a.d)
A.ad(this.b).ak("/register?role=couple",null,y.q)},
$S:0}
B.c6M.prototype={
$0(){var x=this.a
x.gR().a_(0,$.CE().gaX(),y.v).sa4(0,x.a.d)
A.ad(this.b).ak("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Em,A.dC)
x(B.aHH,A.dw)
x(B.c6P,A.bs)
w(A.bL,[B.c6H,B.c6I,B.c6J,B.c6N,B.c6K,B.c6L,B.c6M])
x(B.c6O,A.cK)})()
A.bq(b.typeUniverse,JSON.parse('{"Em":{"G":[],"e":[],"f":[]},"aHH":{"a0":["Em"]}}'))
var y=(function rtii(){var x=A.y
return{e:x("cF"),u:x("r<e>"),i:x("t<@>"),y:x("a5<c,@>"),v:x("AO"),w:x("c"),b:x("@"),q:x("L?"),s:x("+inviterName,names,valid(c?,c,C)?"),r:x("~")}})();(function constants(){D.c0k=new A.P(!0,C.z,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ceS=new A.D("O QUE ISTO SIGNIFICA",null,C.a9P,null,null,null,null,null,null,null)})()};
(a=>{a["+9x1qMVCtY0GS+4NEAggQoh5Or4="]=a.current})($__dart_deferred_initializers__);