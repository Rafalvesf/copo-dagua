((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dsY(d){return new B.a3U(d,null)},
cZ2(d){var x,w=C.j.aO(new A.ac(Date.now(),0,!1).co(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a3U:function a3U(d,e){this.d=d
this.a=e},
aI_:function aI_(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c7f:function c7f(d,e){this.a=d
this.b=e},
c7g:function c7g(d,e){this.a=d
this.b=e},
c7h:function c7h(d){this.a=d},
c7k:function c7k(d){this.a=d},
c7l:function c7l(d){this.a=d},
c7m:function c7m(d){this.a=d},
c7n:function c7n(d){this.a=d},
c7j:function c7j(d,e){this.a=d
this.b=e},
c7o:function c7o(d,e,f){this.a=d
this.b=e
this.c=f},
c7p:function c7p(d,e){this.a=d
this.b=e},
c7i:function c7i(d,e){this.a=d
this.b=e},
aKw:function aKw(d,e,f){this.e=d
this.f=e
this.a=f},
aNo:function aNo(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
ctU:function ctU(){},
ctN:function ctN(){},
ctO:function ctO(d,e){this.a=d
this.b=e},
ctP:function ctP(d,e){this.a=d
this.b=e},
ctQ:function ctQ(){},
ctR:function ctR(d){this.a=d},
ctS:function ctS(){},
ctT:function ctT(d){this.a=d},
aV_(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aV_=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.Q()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aH("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aV_)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bh(0,A.R(["group_label",f],v,v)).U("id",u),$async$aV_)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aV_,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[321]
B.a3U.prototype={
R(){return new B.aI_(A.aL(y.N))}}
B.aI_.prototype={
KG(d,e,f){return this.bf7(d,e,f)},
bf7(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KG=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a_(0,$.jC().gaX(),y.E)
s.p(new B.c7f(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aV_(d.a,e,r),$async$KG)
case 6:o.aj($.alX().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dn4(n,f),$async$KG)
case 9:case 8:o=d.c
p.a0(A.bY(null,null,null,null,null,C.y,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c7g(s,d))
p.a0(C.eD)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c7h(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KG,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.G($.cq(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.o6
else{g=g.G($.alX().$1(d),y.b)
g=g.gv(g)
x=g==null?C.o6:g}g=J.db(x,new B.c7k(i))
w=A.U(g,g.$ti.i("w.E"))
v=A.eL(new A.a6(w,new B.c7l(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eL(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lu(f.gcw())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fw,A.Er("Pedidos para entrar",e)],u)
if(t)e.push(new A.c2("Pedidos",h,A.a([A.JH(A.a([new A.hh("Ver convidados",new B.c7m(a0),!0,h)],u),C.iM,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aNo(v,i.y,i.z,new B.c7n(i),new B.c7o(i,v,d),new A.e8(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.H)(g),++s){r=g[s]
l=r.f
k=C.j.aO(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAl()
if((j==null?0:j)>0)l.push("traz "+A.p(r.gAl()))
o.push(new A.im(new B.aKw(r,44,h),r.c,C.e.a1(l," \xb7 "),new A.mL("Ver",new B.c7p(i,r),!1,h),!1,h,!1,h))}t.push(new A.c2("Outros pedidos \xb7 "+q,h,A.a([A.eR(o,0)],u),16,h))}C.e.n(e,t)}return A.cP(h,C.cP,A.nJ(C.f_,40,e,h,!0,!1),!0,h)}}
B.aKw.prototype={
b9(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.o8().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cg(w.c,this.f,v,!1,!0,null)}}
B.aNo.prototype={
b9(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.o8().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXr()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.ctU()
t=e.gAl()
v=A.W(22)
s=e.c
r=y.p
s=A.a([A.bO(new A.cg(s,76,d?f:x.d,!1,!0,f),f,f),C.P,A.h(s,f,f,f,f,C.c3,C.a3,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.L,C.a3,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a8c],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8c],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.p(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ac,A.O(q,C.v,C.bR,C.l,0,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.dz(d,0,A.et(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bk<1>")
l=0
for(;;){k=new A.bk(d,0,3,p)
k.cd(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bg(C.t,2,C.aj,-1)
k=d[l]
m.push(new A.eF(l*22,f,f,f,f,f,A.x(f,new A.cg(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.I(f,f,new A.dN(j,j,j,j),f,f,f,C.ap),f,f,f,f,f,f,f),f));++l}p=A.aK(new A.bA(C.aw,f,C.aC,C.y,m,f),32,32+(n-1)*22)
o=A.dz(d,0,A.et(2,"count",q),o)
o=new A.ak(o,new B.ctN(),o.$ti.i("ak<aW.E,c>")).a1(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.R,C.iK,C.ac,A.O(A.a([p,C.ab,A.a4(A.h("Em comum: "+o+d,2,f,f,f,C.L,f,f),1)],r),C.v,C.h,C.l,0,f)],r))}d=e.f
if(e.gauC()!=null){q=e.gauC()
q.toString
s.push(new A.h5(q+" \xb7 "+B.cZ2(d),10,f))}else s.push(new A.h5(B.cZ2(d)[0].toUpperCase()+C.f.bE(B.cZ2(d),1),10,f))
s.push(C.R)
s.push(D.caI)
s.push(C.P)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBz[i]
p=q===h
o=p?$.au:C.a4
p=p?C.t:C.z
d.push(new A.hR(A.fH(C.K,A.h(h,f,f,f,f,new A.P(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f),f,C.aL,new A.k4(o,f,f,f,C.aa),C.eR,f,38,f,C.cG,f),new B.ctO(g,h),h,f))}s.push(A.e4(C.bf,d,C.r,C.bk,8,8))
if(!a0)s.push(new A.hh("Ver perfil",new B.ctP(a1,e),!0,f))
s.push(C.ac)
d=g.r
a0=A.a4(new A.hh("Recusar",d?new B.ctQ():new B.ctR(g),!0,f),1)
s.push(A.O(A.a([a0,C.ab,A.a4(new A.hh("Aceitar",d?new B.ctS():new B.ctT(g),!1,f),1)],r),C.v,C.h,C.l,0,f))
return A.x(f,A.y(s,C.E,C.h,C.l),C.r,f,f,new A.I(C.t,f,f,v,f,f,C.x),f,f,C.nj,C.cH,f,f,f)}}
var z=a.updateTypes([])
B.c7f.prototype={
$0(){var x=this.a
x.z=!0
x.x.C(0,this.b.a)
x.w=null},
$S:0}
B.c7g.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c7h.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c7k.prototype={
$1(d){return!this.a.x.t(0,d.a)},
$S:444}
B.c7l.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:444}
B.c7m.prototype={
$0(){return A.ae(this.a).af(null)},
$S:0}
B.c7n.prototype={
$1(d){var x=this.a
return x.p(new B.c7j(x,d))},
$S:3}
B.c7j.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c7o.prototype={
$1(d){var x=this.c
x.toString
return this.a.KG(this.b,d,x)},
$S:10}
B.c7p.prototype={
$0(){var x=this.a
return x.p(new B.c7i(x,this.b))},
$S:0}
B.c7i.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.ctU.prototype={
$2(d,e){var x=null
return A.y(A.a([A.h(d,x,x,x,x,C.a9,x,x),A.h(e,x,x,x,x,C.be,x,x)],y.p),C.v,C.h,C.l)},
$S:132}
B.ctN.prototype={
$1(d){return C.e.gJ(d.b.split(" "))},
$S:503}
B.ctO.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.ctP.prototype={
$0(){return A.ae(this.a).ak("/u/"+A.p(this.b.b),null,y.X)},
$S:0}
B.ctQ.prototype={
$0(){},
$S:0}
B.ctR.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.ctS.prototype={
$0(){},
$S:0}
B.ctT.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3U,A.dC)
x(B.aI_,A.dw)
w(A.bL,[B.c7f,B.c7g,B.c7h,B.c7m,B.c7j,B.c7p,B.c7i,B.ctO,B.ctP,B.ctQ,B.ctR,B.ctS,B.ctT])
w(A.bt,[B.c7k,B.c7l,B.c7n,B.c7o,B.ctN])
w(A.ew,[B.aKw,B.aNo])
x(B.ctU,A.cK)})()
A.bq(b.typeUniverse,JSON.parse('{"a3U":{"G":[],"e":[],"f":[]},"aI_":{"a_":["a3U"]},"aKw":{"G":[],"e":[],"f":[]},"aNo":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{b:x("ax<t<pq>>"),m:x("ax<r7?>"),v:x("ec"),E:x("qF"),S:x("r<pq>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("e8<c>"),q:x("dl"),z:x("@"),r:x("v"),X:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBz=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8c=new A.c5(22,null,null,null)
D.caI=new A.D("Quem \xe9 para voc\xeas?",null,C.L,null,null,null,null,null,null,null)})()};
(a=>{a["IVfOw49juq2Jza3KV2C7eAyM1NI="]=a.current})($__dart_deferred_initializers__);