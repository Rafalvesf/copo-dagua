((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,E,A={
dtW(d){return new A.F4(d,null)},
F4:function F4(d,e){this.d=d
this.a=e},
aKi:function aKi(){var _=this
_.x=_.w=null
_.y=!1
_.d=$
_.c=_.a=null},
cgh:function cgh(d){this.a=d},
cg9:function cg9(d){this.a=d},
cga:function cga(d,e){this.a=d
this.b=e},
cgb:function cgb(d,e){this.a=d
this.b=e},
cgc:function cgc(d){this.a=d},
cgd:function cgd(d){this.a=d},
cge:function cge(d){this.a=d},
cgf:function cgf(d,e){this.a=d
this.b=e},
cgg:function cgg(d,e){this.a=d
this.b=e}},F
B=c[0]
C=c[2]
D=c[194]
E=c[186]
A=a.updateHolder(c[17],A)
F=c[336]
A.F4.prototype={
R(){return new A.aKi()}}
A.aKi.prototype={
ac(){this.ao()
$.aA.k4$.push(new A.cgh(this))},
Jo(){var x=0,w=B.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Jo=B.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:B.td("partner_invite_open",s.a.d.toUpperCase())
x=s.gS().a0(0,$.b9(),y.e).a!==C.ix?3:4
break
case 3:x=5
return B.d(B.aVl(s.a.d),$async$Jo)
case 5:x=1
break
case 4:s.p(new A.cg9(s))
u=7
x=10
return B.d(B.al6(s.a.d),$async$Jo)
case 10:r=e
if(s.c==null){x=1
break}s.p(new A.cga(s,r))
u=2
x=9
break
case 7:u=6
n=t.pop()
o=B.a9(n)
if(o instanceof B.a5Z){q=o
if(s.c==null){x=1
break}s.p(new A.cgb(s,q))}else throw n
x=9
break
case 6:x=2
break
case 9:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Jo,w)},
ganx(){var x=this.gS().a0(0,$.b9(),y.e).b
switch(x==null?null:x.e){case C.eo:x="/home"
break
case C.dR:x="/partner-home"
break
default:x="/eventos"
break}return x},
u(d){var x,w,v,u,t=this,s=null,r="Continuar",q=t.gS().G($.b9(),y.e),p=t.w
if(q.a!==C.ix){x=B.a([new B.fW("Criar conta",new A.cgc(d),!1,s),B.cx(D.IK,s,s,new A.cgd(d),s,s)],y.l)
x.push(B.cx(F.aaW,s,s,new A.cge(d),s,s))
w=B.tI(x,s,s,"Organiza o teu evento na \xc0 Nossa!: or\xe7amento, convidados, contratos e pagamentos seguros num s\xf3 s\xedtio. Cria conta (ou entra) e o convite fica ligado a ti. Contas novas t\xeam 50 % de desconto na taxa de servi\xe7o da primeira transa\xe7\xe3o.",C.G9,"Foste convidado para a \xc0 Nossa!")}else{if(!t.y)x=p==null&&t.x==null
else x=!0
if(x)w=C.km
else{x=t.x
if(x!=null)w=B.tI(B.a([new B.fW(r,new A.cgf(t,d),!1,s)],y.l),s,s,x,C.om,"N\xe3o deu para abrir o convite")
else{x=p.c
v=p.b
u=x?"Convite de "+v:"J\xe1 est\xe1s ligado a "+v
if(!p.d)x=x?v+" convidou-te para a \xc0 Nossa!. Tens 50 % de desconto na taxa de servi\xe7o da tua primeira transa\xe7\xe3o.":"Este convite j\xe1 n\xe3o conta para ti, mas podes usar a app normalmente."
else x=x?v+" convidou-te para a \xc0 Nossa!. Faz as reservas e os pagamentos com eles pela app: fica tudo com contrato, recibo e pagamento protegido.":"J\xe1 tinhas falado com "+v+" pela app \u2014 continua tudo como estava."
w=B.tI(B.a([new B.fW(r,new A.cgg(t,d),!1,s)],y.l),s,s,x,C.a1k,u)}}}return B.cP(s,C.by,B.bD(!0,new B.S(C.fV,B.bM(w,s,s),s),s,C.Z,!0),!0,s)}}
var z=a.updateTypes([])
A.cgh.prototype={
$1(d){return this.a.Jo()},
$S:5}
A.cg9.prototype={
$0(){return this.a.y=!0},
$S:0}
A.cga.prototype={
$0(){var x=this.a
x.y=!1
x.w=this.b},
$S:0}
A.cgb.prototype={
$0(){var x=this.a
x.y=!1
x.x=this.b.geT(0)},
$S:0}
A.cgc.prototype={
$0(){return B.ah(this.a).au("/comecar",null,y.a)},
$S:0}
A.cgd.prototype={
$0(){return B.ah(this.a).au("/login",null,y.a)},
$S:0}
A.cge.prototype={
$0(){return E.a_q(this.a,null)},
$S:0}
A.cgf.prototype={
$0(){var x=this.a.ganx()
return B.ah(this.b).bQ(0,x,null)},
$S:0}
A.cgg.prototype={
$0(){var x=this.a.ganx()
return B.ah(this.b).bQ(0,x,null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.F4,B.dz)
x(A.aKi,B.du)
x(A.cgh,B.bw)
w(B.bP,[A.cg9,A.cga,A.cgb,A.cgc,A.cgd,A.cge,A.cgf,A.cgg])})()
B.bn(b.typeUniverse,JSON.parse('{"F4":{"G":[],"e":[],"f":[]},"aKi":{"Y":["F4"]}}'))
var y={e:B.w("cH"),l:B.w("r<e>"),a:B.w("J?"),f:B.w("~")}};
(a=>{a["rfx8lVWlCwGmrCTnuyn54PJ5JkA="]=a.current})($__dart_deferred_initializers__);