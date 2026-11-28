((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,E,A={
dtp(d){return new A.ES(d,null)},
ES:function ES(d,e){this.d=d
this.a=e},
aJH:function aJH(){var _=this
_.x=_.w=null
_.y=!1
_.d=$
_.c=_.a=null},
cfA:function cfA(d){this.a=d},
cfs:function cfs(d){this.a=d},
cft:function cft(d,e){this.a=d
this.b=e},
cfu:function cfu(d,e){this.a=d
this.b=e},
cfv:function cfv(d){this.a=d},
cfw:function cfw(d){this.a=d},
cfx:function cfx(d){this.a=d},
cfy:function cfy(d,e){this.a=d
this.b=e},
cfz:function cfz(d,e){this.a=d
this.b=e}},F
B=c[0]
C=c[2]
D=c[186]
E=c[179]
A=a.updateHolder(c[17],A)
F=c[327]
A.ES.prototype={
S(){return new A.aJH()}}
A.aJH.prototype={
ad(){this.aq()
$.ay.k4$.push(new A.cfA(this))},
J0(){var x=0,w=B.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n
var $async$J0=B.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:B.ta("partner_invite_open",s.a.d.toUpperCase())
x=s.gR().a_(0,$.b6(),y.e).a!==C.iy?3:4
break
case 3:x=5
return B.d(B.aUB(s.a.d),$async$J0)
case 5:x=1
break
case 4:s.p(new A.cfs(s))
u=7
x=10
return B.d(B.akz(s.a.d),$async$J0)
case 10:r=e
if(s.c==null){x=1
break}s.p(new A.cft(s,r))
u=2
x=9
break
case 7:u=6
n=t.pop()
o=B.a9(n)
if(o instanceof B.a5G){q=o
if(s.c==null){x=1
break}s.p(new A.cfu(s,q))}else throw n
x=9
break
case 6:x=2
break
case 9:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$J0,w)},
gamO(){var x=this.gR().a_(0,$.b6(),y.e).b
switch(x==null?null:x.e){case C.en:x="/home"
break
case C.dP:x="/partner-home"
break
default:x="/eventos"
break}return x},
u(d){var x,w,v,u,t=this,s=null,r="Continuar",q=t.gR().G($.b6(),y.e),p=t.w
if(q.a!==C.iy){x=B.a([new B.fV("Criar conta",new A.cfv(d),!1,s),B.cE(D.Iq,s,s,new A.cfw(d),s,s)],y.l)
x.push(B.cE(F.aaj,s,s,new A.cfx(d),s,s))
w=B.tF(x,s,s,"Organiza o teu evento na \xc0 Nossa!: or\xe7amento, convidados, contratos e pagamentos seguros num s\xf3 s\xedtio. Cria conta (ou entra) e o convite fica ligado a ti. Contas novas t\xeam 50 % de desconto na taxa de servi\xe7o da primeira transa\xe7\xe3o.",C.FV,"Foste convidado para a \xc0 Nossa!")}else{if(!t.y)x=p==null&&t.x==null
else x=!0
if(x)w=C.km
else{x=t.x
if(x!=null)w=B.tF(B.a([new B.fV(r,new A.cfy(t,d),!1,s)],y.l),s,s,x,C.od,"N\xe3o deu para abrir o convite")
else{x=p.c
v=p.b
u=x?"Convite de "+v:"J\xe1 est\xe1s ligado a "+v
if(!p.d)x=x?v+" convidou-te para a \xc0 Nossa!. Tens 50 % de desconto na taxa de servi\xe7o da tua primeira transa\xe7\xe3o.":"Este convite j\xe1 n\xe3o conta para ti, mas podes usar a app normalmente."
else x=x?v+" convidou-te para a \xc0 Nossa!. Faz as reservas e os pagamentos com eles pela app: fica tudo com contrato, recibo e pagamento protegido.":"J\xe1 tinhas falado com "+v+" pela app \u2014 continua tudo como estava."
w=B.tF(B.a([new B.fV(r,new A.cfz(t,d),!1,s)],y.l),s,s,x,C.a0R,u)}}}return B.cO(s,C.by,B.bA(!0,new B.S(C.hu,B.bM(w,s,s),s),s,C.Z,!0),!0,s)}}
var z=a.updateTypes([])
A.cfA.prototype={
$1(d){return this.a.J0()},
$S:5}
A.cfs.prototype={
$0(){return this.a.y=!0},
$S:0}
A.cft.prototype={
$0(){var x=this.a
x.y=!1
x.w=this.b},
$S:0}
A.cfu.prototype={
$0(){var x=this.a
x.y=!1
x.x=this.b.geS(0)},
$S:0}
A.cfv.prototype={
$0(){return B.ac(this.a).ak("/comecar",null,y.a)},
$S:0}
A.cfw.prototype={
$0(){return B.ac(this.a).ak("/login",null,y.a)},
$S:0}
A.cfx.prototype={
$0(){return E.a_b(this.a,null)},
$S:0}
A.cfy.prototype={
$0(){var x=this.a.gamO()
return B.ac(this.b).bQ(0,x,null)},
$S:0}
A.cfz.prototype={
$0(){var x=this.a.gamO()
return B.ac(this.b).bQ(0,x,null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ES,B.dA)
x(A.aJH,B.dv)
x(A.cfA,B.bv)
w(B.bN,[A.cfs,A.cft,A.cfu,A.cfv,A.cfw,A.cfx,A.cfy,A.cfz])})()
B.bt(b.typeUniverse,JSON.parse('{"ES":{"H":[],"e":[],"f":[]},"aJH":{"a1":["ES"]}}'))
var y={e:B.z("cF"),l:B.z("r<e>"),a:B.z("L?"),f:B.z("~")}};
(a=>{a["ORbpUY9R4VngW/38My0zCCgyrho="]=a.current})($__dart_deferred_initializers__);