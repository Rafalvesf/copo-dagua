((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dtR(d){return new B.a4a(d,null)},
cZR(d){var x,w=C.j.aO(new A.ab(Date.now(),0,!1).cf(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a4a:function a4a(d,e){this.d=d
this.a=e},
aIl:function aIl(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c7U:function c7U(d,e){this.a=d
this.b=e},
c7V:function c7V(d,e){this.a=d
this.b=e},
c7W:function c7W(d){this.a=d},
c7Z:function c7Z(d){this.a=d},
c8_:function c8_(d){this.a=d},
c80:function c80(d){this.a=d},
c81:function c81(d){this.a=d},
c7Y:function c7Y(d,e){this.a=d
this.b=e},
c82:function c82(d,e,f){this.a=d
this.b=e
this.c=f},
c83:function c83(d,e){this.a=d
this.b=e},
c7X:function c7X(d,e){this.a=d
this.b=e},
aKS:function aKS(d,e,f){this.e=d
this.f=e
this.a=f},
aNK:function aNK(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
cuy:function cuy(){},
cur:function cur(){},
cus:function cus(d,e){this.a=d
this.b=e},
cut:function cut(d,e){this.a=d
this.b=e},
cuu:function cuu(){},
cuv:function cuv(d){this.a=d},
cuw:function cuw(){},
cux:function cux(d){this.a=d},
aVl(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aVl=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.P()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aG("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aVl)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bh(0,A.R(["group_label",f],v,v)).V("id",u),$async$aVl)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aVl,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[321]
B.a4a.prototype={
R(){return new B.aIl(A.aL(y.N))}}
B.aIl.prototype={
KI(d,e,f){return this.bfk(d,e,f)},
bfk(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KI=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a_(0,$.jC().gaX(),y.E)
s.p(new B.c7U(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aVl(d.a,e,r),$async$KI)
case 6:o.ai($.amc().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dnY(n,f),$async$KI)
case 9:case 8:o=d.c
p.a0(A.bZ(null,null,null,null,null,C.y,null,A.i(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c7V(s,d))
p.a0(C.eD)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c7W(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KI,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.G($.cq(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.o8
else{g=g.G($.amc().$1(d),y.b)
g=g.gv(g)
x=g==null?C.o8:g}g=J.db(x,new B.c7Z(i))
w=A.U(g,g.$ti.i("w.E"))
v=A.eL(new A.a6(w,new B.c8_(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eL(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lu(f.gcz())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fx,A.Ex("Pedidos para entrar",e)],u)
if(t)e.push(new A.c3("Pedidos",h,A.a([A.JR(A.a([new A.hj("Ver convidados",new B.c80(a0),!0,h)],u),C.iN,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aNK(v,i.y,i.z,new B.c81(i),new B.c82(i,v,d),new A.e4(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.H)(g),++s){r=g[s]
l=r.f
k=C.j.aO(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAr()
if((j==null?0:j)>0)l.push("traz "+A.p(r.gAr()))
o.push(new A.ip(new B.aKS(r,44,h),r.c,C.e.a2(l," \xb7 "),new A.mN("Ver",new B.c83(i,r),!1,h),!1,h,!1,h))}t.push(new A.c3("Outros pedidos \xb7 "+q,h,A.a([A.eR(o,0)],u),16,h))}C.e.n(e,t)}return A.cP(h,C.cP,A.nK(C.f_,40,e,h,!0,!1),!0,h)}}
B.aKS.prototype={
b9(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.o8().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.ch(w.c,this.f,v,!1,!0,null)}}
B.aNK.prototype={
b9(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.o8().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXw()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.cuy()
t=e.gAr()
v=A.W(22)
s=e.c
r=y.p
s=A.a([A.bO(new A.ch(s,76,d?f:x.d,!1,!0,f),f,f),C.P,A.i(s,f,f,f,f,C.c6,C.a4,f)],r)
if(w.length!==0)s.push(A.i(w,f,f,f,f,C.L,C.a4,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a8h],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8h],r))
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
k.cd(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.be(C.t,2,C.ag,-1)
k=d[l]
m.push(new A.eF(l*22,f,f,f,f,f,A.x(f,new A.ch(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.J(f,f,new A.dN(j,j,j,j),f,f,f,C.ap),f,f,f,f,f,f,f),f));++l}p=A.aK(new A.bA(C.aw,f,C.aD,C.y,m,f),32,32+(n-1)*22)
o=A.dz(d,0,A.et(2,"count",q),o)
o=new A.ak(o,new B.cur(),o.$ti.i("ak<aW.E,c>")).a2(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.R,C.iL,C.ad,A.O(A.a([p,C.ac,A.a5(A.i("Em comum: "+o+d,2,f,f,f,C.L,f,f),1)],r),C.u,C.h,C.l,0,f)],r))}d=e.f
if(e.gauG()!=null){q=e.gauG()
q.toString
s.push(new A.h6(q+" \xb7 "+B.cZR(d),10,f))}else s.push(new A.h6(B.cZR(d)[0].toUpperCase()+C.f.bF(B.cZR(d),1),10,f))
s.push(C.R)
s.push(D.caS)
s.push(C.P)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBB[i]
p=q===h
o=p?$.au:C.a3
p=p?C.t:C.z
d.push(new A.hz(A.fJ(C.K,A.i(h,f,f,f,f,new A.Q(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f),f,C.aL,new A.hc(o,f,f,f,C.ab),C.eR,f,38,f,C.cH,f),new B.cus(g,h),h,f))}s.push(A.e5(C.bg,d,C.r,C.bl,8,8))
if(!a0)s.push(new A.hj("Ver perfil",new B.cut(a1,e),!0,f))
s.push(C.ad)
d=g.r
a0=A.a5(new A.hj("Recusar",d?new B.cuu():new B.cuv(g),!0,f),1)
s.push(A.O(A.a([a0,C.ac,A.a5(new A.hj("Aceitar",d?new B.cuw():new B.cux(g),!1,f),1)],r),C.u,C.h,C.l,0,f))
return A.x(f,A.y(s,C.E,C.h,C.l),C.r,f,f,new A.J(C.t,f,f,v,f,f,C.x),f,f,C.nj,C.cI,f,f,f)}}
var z=a.updateTypes([])
B.c7U.prototype={
$0(){var x=this.a
x.z=!0
x.x.C(0,this.b.a)
x.w=null},
$S:0}
B.c7V.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c7W.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c7Z.prototype={
$1(d){return!this.a.x.t(0,d.a)},
$S:514}
B.c8_.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:514}
B.c80.prototype={
$0(){return A.ae(this.a).ah(null)},
$S:0}
B.c81.prototype={
$1(d){var x=this.a
return x.p(new B.c7Y(x,d))},
$S:3}
B.c7Y.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c82.prototype={
$1(d){var x=this.c
x.toString
return this.a.KI(this.b,d,x)},
$S:10}
B.c83.prototype={
$0(){var x=this.a
return x.p(new B.c7X(x,this.b))},
$S:0}
B.c7X.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.cuy.prototype={
$2(d,e){var x=null
return A.y(A.a([A.i(d,x,x,x,x,C.a9,x,x),A.i(e,x,x,x,x,C.bf,x,x)],y.p),C.u,C.h,C.l)},
$S:153}
B.cur.prototype={
$1(d){return C.e.gJ(d.b.split(" "))},
$S:481}
B.cus.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.cut.prototype={
$0(){return A.ae(this.a).aj("/u/"+A.p(this.b.b),null,y.X)},
$S:0}
B.cuu.prototype={
$0(){},
$S:0}
B.cuv.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.cuw.prototype={
$0(){},
$S:0}
B.cux.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a4a,A.dC)
x(B.aIl,A.dw)
w(A.bL,[B.c7U,B.c7V,B.c7W,B.c80,B.c7Y,B.c83,B.c7X,B.cus,B.cut,B.cuu,B.cuv,B.cuw,B.cux])
w(A.bu,[B.c7Z,B.c8_,B.c81,B.c82,B.cur])
w(A.ew,[B.aKS,B.aNK])
x(B.cuy,A.cK)})()
A.br(b.typeUniverse,JSON.parse('{"a4a":{"G":[],"e":[],"f":[]},"aIl":{"a_":["a4a"]},"aKS":{"G":[],"e":[],"f":[]},"aNK":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{b:x("ax<t<ps>>"),m:x("ax<r9?>"),v:x("ed"),E:x("qI"),S:x("r<ps>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("e4<c>"),q:x("dl"),z:x("@"),r:x("v"),X:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBB=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8h=new A.c6(22,null,null,null)
D.caS=new A.D("Quem \xe9 para voc\xeas?",null,C.L,null,null,null,null,null,null,null)})()};
(a=>{a["b4L8wVNf4ionEZhs2/GGXIHdLLo="]=a.current})($__dart_deferred_initializers__);