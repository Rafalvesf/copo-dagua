((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,E,A={
duJ(d){return new A.EY(d,null)},
EY:function EY(d,e){this.d=d
this.a=e},
aK4:function aK4(){var _=this
_.x=_.w=null
_.y=!1
_.d=$
_.c=_.a=null},
cgw:function cgw(d){this.a=d},
cgo:function cgo(d){this.a=d},
cgp:function cgp(d,e){this.a=d
this.b=e},
cgq:function cgq(d,e){this.a=d
this.b=e},
cgr:function cgr(d){this.a=d},
cgs:function cgs(d){this.a=d},
cgt:function cgt(d){this.a=d},
cgu:function cgu(d,e){this.a=d
this.b=e},
cgv:function cgv(d,e){this.a=d
this.b=e}},F
B=c[0]
C=c[2]
D=c[189]
E=c[182]
A=a.updateHolder(c[17],A)
F=c[330]
A.EY.prototype={
R(){return new A.aK4()}}
A.aK4.prototype={
ad(){this.aq()
$.az.k4$.push(new A.cgw(this))},
J1(){var x=0,w=B.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n
var $async$J1=B.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:B.tf("partner_invite_open",s.a.d.toUpperCase())
x=s.gS().a_(0,$.b7(),y.e).a!==C.iA?3:4
break
case 3:x=5
return B.d(B.aV3(s.a.d),$async$J1)
case 5:x=1
break
case 4:s.p(new A.cgo(s))
u=7
x=10
return B.d(B.akO(s.a.d),$async$J1)
case 10:r=e
if(s.c==null){x=1
break}s.p(new A.cgp(s,r))
u=2
x=9
break
case 7:u=6
n=t.pop()
o=B.a9(n)
if(o instanceof B.a5O){q=o
if(s.c==null){x=1
break}s.p(new A.cgq(s,q))}else throw n
x=9
break
case 6:x=2
break
case 9:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$J1,w)},
gamU(){var x=this.gS().a_(0,$.b7(),y.e).b
switch(x==null?null:x.e){case C.ep:x="/home"
break
case C.dQ:x="/partner-home"
break
default:x="/eventos"
break}return x},
u(d){var x,w,v,u,t=this,s=null,r="Continuar",q=t.gS().G($.b7(),y.e),p=t.w
if(q.a!==C.iA){x=B.a([new B.fY("Criar conta",new A.cgr(d),!1,s),new B.am(B.cJ(D.Iu,s,s,new A.cgs(d),s,s),s)],y.l)
x.push(new B.am(B.cJ(F.aap,s,s,new A.cgt(d),s,s),s))
w=B.tK(x,s,s,"Organiza o teu evento na \xc0 Nossa!: or\xe7amento, convidados, contratos e pagamentos seguros num s\xf3 s\xedtio. Cria conta (ou entra) e o convite fica ligado a ti. Contas novas t\xeam 50 % de desconto na taxa de servi\xe7o da primeira transa\xe7\xe3o.",C.FZ,"Foste convidado para a \xc0 Nossa!")}else{if(!t.y)x=p==null&&t.x==null
else x=!0
if(x)w=C.ks
else{x=t.x
if(x!=null)w=B.tK(B.a([new B.fY(r,new A.cgu(t,d),!1,s)],y.l),s,s,x,C.od,"N\xe3o deu para abrir o convite")
else{x=p.c
v=p.b
u=x?"Convite de "+v:"J\xe1 est\xe1s ligado a "+v
if(!p.d)x=x?v+" convidou-te para a \xc0 Nossa!. Tens 50 % de desconto na taxa de servi\xe7o da tua primeira transa\xe7\xe3o.":"Este convite j\xe1 n\xe3o conta para ti, mas podes usar a app normalmente."
else x=x?v+" convidou-te para a \xc0 Nossa!. Faz as reservas e os pagamentos com eles pela app: fica tudo com contrato, recibo e pagamento protegido.":"J\xe1 tinhas falado com "+v+" pela app \u2014 continua tudo como estava."
w=B.tK(B.a([new B.fY(r,new A.cgv(t,d),!1,s)],y.l),s,s,x,C.a0U,u)}}}return B.cP(s,C.by,B.bB(!0,new B.S(C.hw,B.bO(w,s,s),s),s,C.Z,!0),!0,s)}}
var z=a.updateTypes([])
A.cgw.prototype={
$1(d){return this.a.J1()},
$S:5}
A.cgo.prototype={
$0(){return this.a.y=!0},
$S:0}
A.cgp.prototype={
$0(){var x=this.a
x.y=!1
x.w=this.b},
$S:0}
A.cgq.prototype={
$0(){var x=this.a
x.y=!1
x.x=this.b.geS(0)},
$S:0}
A.cgr.prototype={
$0(){return B.ae(this.a).ak("/comecar",null,y.a)},
$S:0}
A.cgs.prototype={
$0(){return B.ae(this.a).ak("/login",null,y.a)},
$S:0}
A.cgt.prototype={
$0(){return E.a_j(this.a,null)},
$S:0}
A.cgu.prototype={
$0(){var x=this.a.gamU()
return B.ae(this.b).bQ(0,x,null)},
$S:0}
A.cgv.prototype={
$0(){var x=this.a.gamU()
return B.ae(this.b).bQ(0,x,null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.EY,B.dC)
x(A.aK4,B.dw)
x(A.cgw,B.bt)
w(B.bL,[A.cgo,A.cgp,A.cgq,A.cgr,A.cgs,A.cgt,A.cgu,A.cgv])})()
B.bq(b.typeUniverse,JSON.parse('{"EY":{"G":[],"e":[],"f":[]},"aK4":{"a_":["EY"]}}'))
var y={e:B.z("cH"),l:B.z("r<e>"),a:B.z("M?"),f:B.z("~")}};
(a=>{a["MJxf8Wg2/ooDHTQSwVLElE4Cexw="]=a.current})($__dart_deferred_initializers__);