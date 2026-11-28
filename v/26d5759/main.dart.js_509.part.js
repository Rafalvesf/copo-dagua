((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dtY(d){return new B.a49(d,null)},
cZY(d){var x,w=C.j.aO(new A.ab(Date.now(),0,!1).cg(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a49:function a49(d,e){this.d=d
this.a=e},
aIh:function aIh(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c7T:function c7T(d,e){this.a=d
this.b=e},
c7U:function c7U(d,e){this.a=d
this.b=e},
c7V:function c7V(d){this.a=d},
c7Y:function c7Y(d){this.a=d},
c7Z:function c7Z(d){this.a=d},
c8_:function c8_(d){this.a=d},
c80:function c80(d){this.a=d},
c7X:function c7X(d,e){this.a=d
this.b=e},
c81:function c81(d,e,f){this.a=d
this.b=e
this.c=f},
c82:function c82(d,e){this.a=d
this.b=e},
c7W:function c7W(d,e){this.a=d
this.b=e},
aKO:function aKO(d,e,f){this.e=d
this.f=e
this.a=f},
aNG:function aNG(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
cuB:function cuB(){},
cuu:function cuu(){},
cuv:function cuv(d,e){this.a=d
this.b=e},
cuw:function cuw(d,e){this.a=d
this.b=e},
cux:function cux(){},
cuy:function cuy(d){this.a=d},
cuz:function cuz(){},
cuA:function cuA(d){this.a=d},
aVj(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aVj=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.Q()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aG("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aVj)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bh(0,A.R(["group_label",f],v,v)).V("id",u),$async$aVj)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aVj,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[321]
B.a49.prototype={
R(){return new B.aIh(A.aL(y.N))}}
B.aIh.prototype={
KH(d,e,f){return this.bfk(d,e,f)},
bfk(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KH=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a_(0,$.jC().gaX(),y.E)
s.p(new B.c7T(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aVj(d.a,e,r),$async$KH)
case 6:o.ai($.ama().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.do5(n,f),$async$KH)
case 9:case 8:o=d.c
p.a0(A.bZ(null,null,null,null,null,C.y,null,A.i(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c7U(s,d))
p.a0(C.eD)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c7V(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KH,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.G($.cq(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.o7
else{g=g.G($.ama().$1(d),y.b)
g=g.gv(g)
x=g==null?C.o7:g}g=J.db(x,new B.c7Y(i))
w=A.U(g,g.$ti.i("w.E"))
v=A.eK(new A.a6(w,new B.c7Z(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eK(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lu(f.gcA())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fx,A.Ex("Pedidos para entrar",e)],u)
if(t)e.push(new A.c3("Pedidos",h,A.a([A.JT(A.a([new A.hk("Ver convidados",new B.c8_(a0),!0,h)],u),C.iN,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aNG(v,i.y,i.z,new B.c80(i),new B.c81(i,v,d),new A.e4(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.H)(g),++s){r=g[s]
l=r.f
k=C.j.aO(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAp()
if((j==null?0:j)>0)l.push("traz "+A.p(r.gAp()))
o.push(new A.ip(new B.aKO(r,44,h),r.c,C.e.a2(l," \xb7 "),new A.mN("Ver",new B.c82(i,r),!1,h),!1,h,!1,h))}t.push(new A.c3("Outros pedidos \xb7 "+q,h,A.a([A.eR(o,0)],u),16,h))}C.e.n(e,t)}return A.cP(h,C.cQ,A.nL(C.eZ,40,e,h,!0,!1),!0,h)}}
B.aKO.prototype={
b9(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.o9().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.ch(w.c,this.f,v,!1,!0,null)}}
B.aNG.prototype={
b9(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.o9().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXw()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.cuB()
t=e.gAp()
v=A.W(22)
s=e.c
r=y.p
s=A.a([A.bO(new A.ch(s,76,d?f:x.d,!1,!0,f),f,f),C.P,A.i(s,f,f,f,f,C.c6,C.a4,f)],r)
if(w.length!==0)s.push(A.i(w,f,f,f,f,C.L,C.a4,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a8f],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8f],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.p(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ad,A.O(q,C.u,C.bQ,C.l,0,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.dz(d,0,A.et(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bn<1>")
l=0
for(;;){k=new A.bn(d,0,3,p)
k.cc(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bd(C.t,2,C.ag,-1)
k=d[l]
m.push(new A.eM(l*22,f,f,f,f,f,A.x(f,new A.ch(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.J(f,f,new A.dN(j,j,j,j),f,f,f,C.ap),f,f,f,f,f,f,f),f));++l}p=A.aK(new A.bA(C.aw,f,C.aD,C.y,m,f),32,32+(n-1)*22)
o=A.dz(d,0,A.et(2,"count",q),o)
o=new A.ak(o,new B.cuu(),o.$ti.i("ak<aV.E,c>")).a2(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.R,C.iL,C.ad,A.O(A.a([p,C.ac,A.a5(A.i("Em comum: "+o+d,2,f,f,f,C.L,f,f),1)],r),C.u,C.h,C.l,0,f)],r))}d=e.f
if(e.gauG()!=null){q=e.gauG()
q.toString
s.push(new A.h7(q+" \xb7 "+B.cZY(d),10,f))}else s.push(new A.h7(B.cZY(d)[0].toUpperCase()+C.f.bF(B.cZY(d),1),10,f))
s.push(C.R)
s.push(D.caV)
s.push(C.P)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBE[i]
p=q===h
o=p?$.au:C.a3
p=p?C.t:C.z
d.push(new A.hz(A.fJ(C.K,A.i(h,f,f,f,f,new A.P(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f),f,C.aL,new A.hd(o,f,f,f,C.ab),C.eQ,f,38,f,C.cI,f),new B.cuv(g,h),h,f))}s.push(A.e5(C.bh,d,C.r,C.bl,8,8))
if(!a0)s.push(new A.hk("Ver perfil",new B.cuw(a1,e),!0,f))
s.push(C.ad)
d=g.r
a0=A.a5(new A.hk("Recusar",d?new B.cux():new B.cuy(g),!0,f),1)
s.push(A.O(A.a([a0,C.ac,A.a5(new A.hk("Aceitar",d?new B.cuz():new B.cuA(g),!1,f),1)],r),C.u,C.h,C.l,0,f))
return A.x(f,A.y(s,C.E,C.h,C.l),C.r,f,f,new A.J(C.t,f,f,v,f,f,C.x),f,f,C.ni,C.cJ,f,f,f)}}
var z=a.updateTypes([])
B.c7T.prototype={
$0(){var x=this.a
x.z=!0
x.x.C(0,this.b.a)
x.w=null},
$S:0}
B.c7U.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c7V.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c7Y.prototype={
$1(d){return!this.a.x.t(0,d.a)},
$S:519}
B.c7Z.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:519}
B.c8_.prototype={
$0(){return A.ae(this.a).ah(null)},
$S:0}
B.c80.prototype={
$1(d){var x=this.a
return x.p(new B.c7X(x,d))},
$S:3}
B.c7X.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c81.prototype={
$1(d){var x=this.c
x.toString
return this.a.KH(this.b,d,x)},
$S:10}
B.c82.prototype={
$0(){var x=this.a
return x.p(new B.c7W(x,this.b))},
$S:0}
B.c7W.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.cuB.prototype={
$2(d,e){var x=null
return A.y(A.a([A.i(d,x,x,x,x,C.a9,x,x),A.i(e,x,x,x,x,C.bg,x,x)],y.p),C.u,C.h,C.l)},
$S:129}
B.cuu.prototype={
$1(d){return C.e.gJ(d.b.split(" "))},
$S:494}
B.cuv.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.cuw.prototype={
$0(){return A.ae(this.a).aj("/u/"+A.p(this.b.b),null,y.X)},
$S:0}
B.cux.prototype={
$0(){},
$S:0}
B.cuy.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.cuz.prototype={
$0(){},
$S:0}
B.cuA.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a49,A.dC)
x(B.aIh,A.dw)
w(A.bL,[B.c7T,B.c7U,B.c7V,B.c8_,B.c7X,B.c82,B.c7W,B.cuv,B.cuw,B.cux,B.cuy,B.cuz,B.cuA])
w(A.bu,[B.c7Y,B.c7Z,B.c80,B.c81,B.cuu])
w(A.ew,[B.aKO,B.aNG])
x(B.cuB,A.cL)})()
A.br(b.typeUniverse,JSON.parse('{"a49":{"G":[],"e":[],"f":[]},"aIh":{"a_":["a49"]},"aKO":{"G":[],"e":[],"f":[]},"aNG":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.C
return{b:x("ax<t<ps>>"),m:x("ax<r9?>"),v:x("ed"),E:x("qI"),S:x("r<ps>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("e4<c>"),q:x("dl"),z:x("@"),r:x("v"),X:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBE=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8f=new A.c6(22,null,null,null)
D.caV=new A.E("Quem \xe9 para voc\xeas?",null,C.L,null,null,null,null,null,null,null)})()};
(a=>{a["cHfGRJh9I2XgwtwgTV9uFE+LdKE="]=a.current})($__dart_deferred_initializers__);