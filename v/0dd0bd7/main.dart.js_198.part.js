((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,E,A={
du0(d){return new A.ET(d,null)},
ET:function ET(d,e){this.d=d
this.a=e},
aJM:function aJM(){var _=this
_.x=_.w=null
_.y=!1
_.d=$
_.c=_.a=null},
cg_:function cg_(d){this.a=d},
cfS:function cfS(d){this.a=d},
cfT:function cfT(d,e){this.a=d
this.b=e},
cfU:function cfU(d,e){this.a=d
this.b=e},
cfV:function cfV(d){this.a=d},
cfW:function cfW(d){this.a=d},
cfX:function cfX(d){this.a=d},
cfY:function cfY(d,e){this.a=d
this.b=e},
cfZ:function cfZ(d,e){this.a=d
this.b=e}},F
B=c[0]
C=c[2]
D=c[189]
E=c[182]
A=a.updateHolder(c[17],A)
F=c[330]
A.ET.prototype={
S(){return new A.aJM()}}
A.aJM.prototype={
ad(){this.aq()
$.ay.k4$.push(new A.cg_(this))},
J_(){var x=0,w=B.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n
var $async$J_=B.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:B.tb("partner_invite_open",s.a.d.toUpperCase())
x=s.gR().a_(0,$.b6(),y.e).a!==C.iy?3:4
break
case 3:x=5
return B.d(B.aUH(s.a.d),$async$J_)
case 5:x=1
break
case 4:s.p(new A.cfS(s))
u=7
x=10
return B.d(B.akC(s.a.d),$async$J_)
case 10:r=e
if(s.c==null){x=1
break}s.p(new A.cfT(s,r))
u=2
x=9
break
case 7:u=6
n=t.pop()
o=B.a9(n)
if(o instanceof B.a5J){q=o
if(s.c==null){x=1
break}s.p(new A.cfU(s,q))}else throw n
x=9
break
case 6:x=2
break
case 9:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$J_,w)},
gamQ(){var x=this.gR().a_(0,$.b6(),y.e).b
switch(x==null?null:x.e){case C.en:x="/home"
break
case C.dQ:x="/partner-home"
break
default:x="/eventos"
break}return x},
u(d){var x,w,v,u,t=this,s=null,r="Continuar",q=t.gR().G($.b6(),y.e),p=t.w
if(q.a!==C.iy){x=B.a([new B.fV("Criar conta",new A.cfV(d),!1,s),B.cG(D.Is,s,s,new A.cfW(d),s,s)],y.l)
x.push(B.cG(F.aam,s,s,new A.cfX(d),s,s))
w=B.tG(x,s,s,"Organiza o teu evento na \xc0 Nossa!: or\xe7amento, convidados, contratos e pagamentos seguros num s\xf3 s\xedtio. Cria conta (ou entra) e o convite fica ligado a ti. Contas novas t\xeam 50 % de desconto na taxa de servi\xe7o da primeira transa\xe7\xe3o.",C.FX,"Foste convidado para a \xc0 Nossa!")}else{if(!t.y)x=p==null&&t.x==null
else x=!0
if(x)w=C.kp
else{x=t.x
if(x!=null)w=B.tG(B.a([new B.fV(r,new A.cfY(t,d),!1,s)],y.l),s,s,x,C.oc,"N\xe3o deu para abrir o convite")
else{x=p.c
v=p.b
u=x?"Convite de "+v:"J\xe1 est\xe1s ligado a "+v
if(!p.d)x=x?v+" convidou-te para a \xc0 Nossa!. Tens 50 % de desconto na taxa de servi\xe7o da tua primeira transa\xe7\xe3o.":"Este convite j\xe1 n\xe3o conta para ti, mas podes usar a app normalmente."
else x=x?v+" convidou-te para a \xc0 Nossa!. Faz as reservas e os pagamentos com eles pela app: fica tudo com contrato, recibo e pagamento protegido.":"J\xe1 tinhas falado com "+v+" pela app \u2014 continua tudo como estava."
w=B.tG(B.a([new B.fV(r,new A.cfZ(t,d),!1,s)],y.l),s,s,x,C.a0S,u)}}}return B.cO(s,C.by,B.bz(!0,new B.S(C.hu,B.bN(w,s,s),s),s,C.Z,!0),!0,s)}}
var z=a.updateTypes([])
A.cg_.prototype={
$1(d){return this.a.J_()},
$S:5}
A.cfS.prototype={
$0(){return this.a.y=!0},
$S:0}
A.cfT.prototype={
$0(){var x=this.a
x.y=!1
x.w=this.b},
$S:0}
A.cfU.prototype={
$0(){var x=this.a
x.y=!1
x.x=this.b.geS(0)},
$S:0}
A.cfV.prototype={
$0(){return B.ad(this.a).ak("/comecar",null,y.a)},
$S:0}
A.cfW.prototype={
$0(){return B.ad(this.a).ak("/login",null,y.a)},
$S:0}
A.cfX.prototype={
$0(){return E.a_d(this.a,null)},
$S:0}
A.cfY.prototype={
$0(){var x=this.a.gamQ()
return B.ad(this.b).bQ(0,x,null)},
$S:0}
A.cfZ.prototype={
$0(){var x=this.a.gamQ()
return B.ad(this.b).bQ(0,x,null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ET,B.dB)
x(A.aJM,B.dv)
x(A.cg_,B.br)
w(B.bK,[A.cfS,A.cfT,A.cfU,A.cfV,A.cfW,A.cfX,A.cfY,A.cfZ])})()
B.bp(b.typeUniverse,JSON.parse('{"ET":{"G":[],"e":[],"f":[]},"aJM":{"a0":["ET"]}}'))
var y={e:B.y("cE"),l:B.y("r<e>"),a:B.y("L?"),f:B.y("~")}};
(a=>{a["OxmSsiF3uF9oUJppSKYz6Z2fZbk="]=a.current})($__dart_deferred_initializers__);