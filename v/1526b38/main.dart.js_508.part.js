((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dtI(d){return new B.a47(d,null)},
cZJ(d){var x,w=C.j.aO(new A.ab(Date.now(),0,!1).cf(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a47:function a47(d,e){this.d=d
this.a=e},
aIj:function aIj(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c7M:function c7M(d,e){this.a=d
this.b=e},
c7N:function c7N(d,e){this.a=d
this.b=e},
c7O:function c7O(d){this.a=d},
c7R:function c7R(d){this.a=d},
c7S:function c7S(d){this.a=d},
c7T:function c7T(d){this.a=d},
c7U:function c7U(d){this.a=d},
c7Q:function c7Q(d,e){this.a=d
this.b=e},
c7V:function c7V(d,e,f){this.a=d
this.b=e
this.c=f},
c7W:function c7W(d,e){this.a=d
this.b=e},
c7P:function c7P(d,e){this.a=d
this.b=e},
aKQ:function aKQ(d,e,f){this.e=d
this.f=e
this.a=f},
aNI:function aNI(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
cuq:function cuq(){},
cuj:function cuj(){},
cuk:function cuk(d,e){this.a=d
this.b=e},
cul:function cul(d,e){this.a=d
this.b=e},
cum:function cum(){},
cun:function cun(d){this.a=d},
cuo:function cuo(){},
cup:function cup(d){this.a=d},
aVj(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aVj=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.P()
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
B.a47.prototype={
R(){return new B.aIj(A.aL(y.N))}}
B.aIj.prototype={
KI(d,e,f){return this.bfk(d,e,f)},
bfk(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KI=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a_(0,$.jC().gaX(),y.E)
s.p(new B.c7M(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aVj(d.a,e,r),$async$KI)
case 6:o.ai($.ama().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dnP(n,f),$async$KI)
case 9:case 8:o=d.c
p.a0(A.bY(null,null,null,null,null,C.y,null,A.i(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c7N(s,d))
p.a0(C.eD)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c7O(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KI,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.G($.cq(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.o8
else{g=g.G($.ama().$1(d),y.b)
g=g.gv(g)
x=g==null?C.o8:g}g=J.db(x,new B.c7R(i))
w=A.U(g,g.$ti.i("w.E"))
v=A.eL(new A.a6(w,new B.c7S(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eL(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.G)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lu(f.gcz())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fx,A.Ew("Pedidos para entrar",e)],u)
if(t)e.push(new A.c2("Pedidos",h,A.a([A.JP(A.a([new A.hi("Ver convidados",new B.c7T(a0),!0,h)],u),C.iN,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aNI(v,i.y,i.z,new B.c7U(i),new B.c7V(i,v,d),new A.e8(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.G)(g),++s){r=g[s]
l=r.f
k=C.j.aO(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAr()
if((j==null?0:j)>0)l.push("traz "+A.p(r.gAr()))
o.push(new A.ip(new B.aKQ(r,44,h),r.c,C.e.a2(l," \xb7 "),new A.mM("Ver",new B.c7W(i,r),!1,h),!1,h,!1,h))}t.push(new A.c2("Outros pedidos \xb7 "+q,h,A.a([A.eR(o,0)],u),16,h))}C.e.n(e,t)}return A.cP(h,C.cP,A.nJ(C.f_,40,e,h,!0,!1),!0,h)}}
B.aKQ.prototype={
ba(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.o8().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.ch(w.c,this.f,v,!1,!0,null)}}
B.aNI.prototype={
ba(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.o8().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXw()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.cuq()
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
C.e.n(q,A.a([u.$2(""+o,n),D.a8d],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8d],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.p(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ad,A.O(q,C.v,C.bR,C.l,0,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
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
m.push(new A.eF(l*22,f,f,f,f,f,A.x(f,new A.ch(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.J(f,f,new A.dN(j,j,j,j),f,f,f,C.ap),f,f,f,f,f,f,f),f));++l}p=A.aK(new A.bA(C.aw,f,C.aC,C.y,m,f),32,32+(n-1)*22)
o=A.dz(d,0,A.et(2,"count",q),o)
o=new A.ak(o,new B.cuj(),o.$ti.i("ak<aW.E,c>")).a2(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.R,C.iL,C.ad,A.O(A.a([p,C.ac,A.a5(A.i("Em comum: "+o+d,2,f,f,f,C.L,f,f),1)],r),C.v,C.h,C.l,0,f)],r))}d=e.f
if(e.gauG()!=null){q=e.gauG()
q.toString
s.push(new A.h6(q+" \xb7 "+B.cZJ(d),10,f))}else s.push(new A.h6(B.cZJ(d)[0].toUpperCase()+C.f.bF(B.cZJ(d),1),10,f))
s.push(C.R)
s.push(D.caO)
s.push(C.P)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBz[i]
p=q===h
o=p?$.au:C.a3
p=p?C.t:C.z
d.push(new A.hz(A.fJ(C.K,A.i(h,f,f,f,f,new A.Q(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f),f,C.aL,new A.ho(o,f,f,f,C.ab),C.eR,f,38,f,C.cH,f),new B.cuk(g,h),h,f))}s.push(A.e4(C.bf,d,C.r,C.bl,8,8))
if(!a0)s.push(new A.hi("Ver perfil",new B.cul(a1,e),!0,f))
s.push(C.ad)
d=g.r
a0=A.a5(new A.hi("Recusar",d?new B.cum():new B.cun(g),!0,f),1)
s.push(A.O(A.a([a0,C.ac,A.a5(new A.hi("Aceitar",d?new B.cuo():new B.cup(g),!1,f),1)],r),C.v,C.h,C.l,0,f))
return A.x(f,A.y(s,C.E,C.h,C.l),C.r,f,f,new A.J(C.t,f,f,v,f,f,C.x),f,f,C.nj,C.cI,f,f,f)}}
var z=a.updateTypes([])
B.c7M.prototype={
$0(){var x=this.a
x.z=!0
x.x.C(0,this.b.a)
x.w=null},
$S:0}
B.c7N.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c7O.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c7R.prototype={
$1(d){return!this.a.x.t(0,d.a)},
$S:514}
B.c7S.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:514}
B.c7T.prototype={
$0(){return A.ae(this.a).ah(null)},
$S:0}
B.c7U.prototype={
$1(d){var x=this.a
return x.p(new B.c7Q(x,d))},
$S:3}
B.c7Q.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c7V.prototype={
$1(d){var x=this.c
x.toString
return this.a.KI(this.b,d,x)},
$S:10}
B.c7W.prototype={
$0(){var x=this.a
return x.p(new B.c7P(x,this.b))},
$S:0}
B.c7P.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.cuq.prototype={
$2(d,e){var x=null
return A.y(A.a([A.i(d,x,x,x,x,C.a9,x,x),A.i(e,x,x,x,x,C.be,x,x)],y.p),C.v,C.h,C.l)},
$S:128}
B.cuj.prototype={
$1(d){return C.e.gJ(d.b.split(" "))},
$S:481}
B.cuk.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.cul.prototype={
$0(){return A.ae(this.a).aj("/u/"+A.p(this.b.b),null,y.X)},
$S:0}
B.cum.prototype={
$0(){},
$S:0}
B.cun.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.cuo.prototype={
$0(){},
$S:0}
B.cup.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a47,A.dC)
x(B.aIj,A.dw)
w(A.bL,[B.c7M,B.c7N,B.c7O,B.c7T,B.c7Q,B.c7W,B.c7P,B.cuk,B.cul,B.cum,B.cun,B.cuo,B.cup])
w(A.bu,[B.c7R,B.c7S,B.c7U,B.c7V,B.cuj])
w(A.ew,[B.aKQ,B.aNI])
x(B.cuq,A.cK)})()
A.br(b.typeUniverse,JSON.parse('{"a47":{"H":[],"e":[],"f":[]},"aIj":{"a_":["a47"]},"aKQ":{"H":[],"e":[],"f":[]},"aNI":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{b:x("ax<t<ps>>"),m:x("ax<r9?>"),v:x("ed"),E:x("qI"),S:x("r<ps>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("e8<c>"),q:x("dl"),z:x("@"),r:x("v"),X:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBz=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8d=new A.c5(22,null,null,null)
D.caO=new A.D("Quem \xe9 para voc\xeas?",null,C.L,null,null,null,null,null,null,null)})()};
(a=>{a["Im1zaldANFo8wJ5lH82kYHflwUs="]=a.current})($__dart_deferred_initializers__);