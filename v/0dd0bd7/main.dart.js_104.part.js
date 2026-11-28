((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dse(d){return new B.Ei(d,null)},
Ei:function Ei(d,e){this.d=d
this.a=e},
aHG:function aHG(){var _=this
_.w=$
_.x=null
_.d=$
_.c=_.a=null},
c6N:function c6N(d){this.a=d},
c6F:function c6F(d){this.a=d},
c6G:function c6G(d){this.a=d},
c6H:function c6H(d,e){this.a=d
this.b=e},
c6L:function c6L(d){this.a=d},
c6M:function c6M(d){this.a=d},
c6I:function c6I(d){this.a=d},
c6J:function c6J(d,e){this.a=d
this.b=e},
c6K:function c6K(d,e){this.a=d
this.b=e},
cIN(d){var x=0,w=A.n(y.s),v,u,t,s,r,q,p,o,n,m
var $async$cIN=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=$.Q().b
n===$&&A.b()
u=y.b
m=y.i
x=3
return A.d(n.aG("get_partner_invite",A.R(["p_token",d],y.w,u),u),$async$cIN)
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
v=new A.aMd(o,u,n===!0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cIN,w)}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[8],B)
D=c[188]
E=c[189]
B.Ei.prototype={
S(){return new B.aHG()}}
B.aHG.prototype={
ad(){this.aq()
$.ay.k4$.push(new B.c6N(this))},
Sh(){var x=0,w=A.n(y.r),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Sh=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=s.gR()
n=o.a_(0,$.b6(),y.e)
if(n.a!==C.iy){o.a_(0,$.CB().gaX(),y.v).sa4(0,s.a.d)
x=1
break}q=n.b
if((q==null?null:q.e)===C.dQ){s.p(new B.c6F(s))
x=1
break}s.p(new B.c6G(s))
u=4
x=7
return A.d(A.aTU(s.a.d),$async$Sh)
case 7:o.aj($.co())
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
break}s.p(new B.c6H(s,r))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Sh,w)},
u(d){var x,w,v,u=this,t=null
if(u.gR().G($.b6(),y.e).a===C.iy){x=u.x
x=x==null?C.kp:A.tG(A.a([new A.fV("Voltar",new B.c6L(d),!1,t)],y.u),t,t,x,C.oc,"N\xe3o deu para entrar")}else{w=u.w
if(w===$){v=B.cIN(u.a.d)
u.w!==$&&A.b_()
u.w=v
w=v}x=A.b7_(new B.c6M(u),w,y.s)}return A.cO(t,C.by,A.bz(!0,new A.S(C.hu,A.bN(x,t,t),t),t,C.Z,!0),!0,t)}}
var z=a.updateTypes([])
B.c6N.prototype={
$1(d){return this.a.Sh()},
$S:5}
B.c6F.prototype={
$0(){return this.a.x="Entra com a tua conta pessoal para organizar \u2014 a conta de parceiro \xe9 para o teu neg\xf3cio."},
$S:0}
B.c6G.prototype={
$0(){return!0},
$S:0}
B.c6H.prototype={
$0(){var x=this.b,w=x instanceof A.cS
if(w&&x.b==="P0002")x="Este link de convite n\xe3o \xe9 v\xe1lido."
else if(w&&x.b==="P0007")x="Este convite j\xe1 foi usado."
else x=w&&x.b==="P0008"?"Este convite expirou \u2014 pede um novo link.":"N\xe3o foi poss\xedvel aceitar o convite. Tenta novamente."
this.a.x=x},
$S:0}
B.c6L.prototype={
$0(){return A.ad(this.a).bQ(0,"/home",null)},
$S:0}
B.c6M.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null
if(e.a!==C.n5)return C.kp
x=e.b
if(x==null||!x.c)return A.tG(A.a([new A.fV("Ir para o in\xedcio",new B.c6I(d),!1,q)],y.u),q,q,"Pode j\xe1 ter sido usado ou quem te convidou criou um novo. Pede-lhe um link novo para organizarem juntos.",C.oc,"Este convite j\xe1 n\xe3o \xe9 v\xe1lido")
w=x.b
v=x.a
u=v==null
t=!u?v+" convidou-te para organizarem o evento juntos.":"Convidam-te para organizar o evento com eles."
s=A.W(22)
r=y.u
s=A.x(q,A.z(A.a([D.ceS,C.P,A.h("Ficas com acesso ao evento para ajudarem a organizar, lado a lado. "+(u?"Quem te convidou":v)+" escolhe o que podes fazer.",q,q,q,q,D.c0k,q,q)],r),C.G,C.h,C.l),C.r,q,q,new A.I(C.t,q,q,s,C.bq,q,C.x),q,q,q,C.cH,q,q,q)
v=this.a
return A.tG(A.a([new A.fV("Criar conta",new B.c6J(v,d),!1,q),A.hh(E.Is,new B.c6K(v,d),q)],r),s,"CONVITE PARA ORGANIZAR",t,C.a0S,w)},
$S:1476}
B.c6I.prototype={
$0(){return A.ad(this.a).bQ(0,"/welcome",null)},
$S:0}
B.c6J.prototype={
$0(){var x=this.a
x.gR().a_(0,$.CB().gaX(),y.v).sa4(0,x.a.d)
A.ad(this.b).ak("/register?role=couple",null,y.q)},
$S:0}
B.c6K.prototype={
$0(){var x=this.a
x.gR().a_(0,$.CB().gaX(),y.v).sa4(0,x.a.d)
A.ad(this.b).ak("/login",null,y.q)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ei,A.dB)
x(B.aHG,A.dv)
x(B.c6N,A.br)
w(A.bK,[B.c6F,B.c6G,B.c6H,B.c6L,B.c6I,B.c6J,B.c6K])
x(B.c6M,A.cJ)})()
A.bp(b.typeUniverse,JSON.parse('{"Ei":{"G":[],"e":[],"f":[]},"aHG":{"a0":["Ei"]}}'))
var y=(function rtii(){var x=A.y
return{e:x("cE"),u:x("r<e>"),i:x("t<@>"),y:x("a5<c,@>"),v:x("AL"),w:x("c"),b:x("@"),q:x("L?"),s:x("+inviterName,names,valid(c?,c,C)?"),r:x("~")}})();(function constants(){D.c0k=new A.P(!0,C.z,null,null,null,null,17,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ceS=new A.D("O QUE ISTO SIGNIFICA",null,C.a9P,null,null,null,null,null,null,null)})()};
(a=>{a["Sj8nvW9UP7WwJqHHVis2gWIrnlk="]=a.current})($__dart_deferred_initializers__);