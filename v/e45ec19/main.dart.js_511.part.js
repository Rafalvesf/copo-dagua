((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dtA(d){return new B.a4b(d,null)},
cZC(d){var x,w=C.j.aO(new A.ad(Date.now(),0,!1).cf(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a4b:function a4b(d,e){this.d=d
this.a=e},
aIp:function aIp(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c7o:function c7o(d,e){this.a=d
this.b=e},
c7p:function c7p(d,e){this.a=d
this.b=e},
c7q:function c7q(d){this.a=d},
c7t:function c7t(d){this.a=d},
c7u:function c7u(d){this.a=d},
c7v:function c7v(d){this.a=d},
c7w:function c7w(d){this.a=d},
c7s:function c7s(d,e){this.a=d
this.b=e},
c7x:function c7x(d,e,f){this.a=d
this.b=e
this.c=f},
c7y:function c7y(d,e){this.a=d
this.b=e},
c7r:function c7r(d,e){this.a=d
this.b=e},
aKX:function aKX(d,e,f){this.e=d
this.f=e
this.a=f},
aNO:function aNO(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
cu7:function cu7(){},
cu0:function cu0(){},
cu1:function cu1(d,e){this.a=d
this.b=e},
cu2:function cu2(d,e){this.a=d
this.b=e},
cu3:function cu3(){},
cu4:function cu4(d){this.a=d},
cu5:function cu5(){},
cu6:function cu6(d){this.a=d},
aVq(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aVq=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.Q()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aH("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aVq)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.S("guests").bm(0,A.R(["group_label",f],v,v)).X("id",u),$async$aVq)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aVq,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[321]
B.a4b.prototype={
P(){return new B.aIp(A.aN(y.N))}}
B.aIp.prototype={
KG(d,e,f){return this.bfh(d,e,f)},
bfh(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KG=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gR()
n=o.a0(0,$.jF().gaX(),y.E)
s.n(new B.c7o(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aVq(d.a,e,r),$async$KG)
case 6:o.ai($.amg().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dnK(n,f),$async$KG)
case 9:case 8:o=d.c
p.a1(A.bZ(null,null,null,null,null,C.y,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.n(new B.c7p(s,d))
p.a1(C.eD)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.n(new B.c7q(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KG,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gR(),f=g.G($.cq(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.o7
else{g=g.G($.amg().$1(d),y.b)
g=g.gv(g)
x=g==null?C.o7:g}g=J.dm(x,new B.c7t(i))
w=A.U(g,g.$ti.i("y.E"))
v=A.f4(new A.a7(w,new B.c7u(i),A.a8(w).i("a7<1>")))
if(v==null)v=A.f4(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.la(f.gcs())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fy,A.EB("Pedidos para entrar",e)],u)
if(t)e.push(new A.c3("Pedidos",h,A.a([A.JV(A.a([new A.hk("Ver convidados",new B.c7v(a0),!0,h)],u),C.iO,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aNO(v,i.y,i.z,new B.c7w(i),new B.c7x(i,v,d),new A.e4(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.H)(g),++s){r=g[s]
l=r.f
k=C.j.aO(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAn()
if((j==null?0:j)>0)l.push("traz "+A.p(r.gAn()))
o.push(new A.io(new B.aKX(r,44,h),r.c,C.e.a_(l," \xb7 "),new A.mQ("Ver",new B.c7y(i,r),!1,h),!1,h,!1,h))}t.push(new A.c3("Outros pedidos \xb7 "+q,h,A.a([A.eQ(o,0)],u),16,h))}C.e.p(e,t)}return A.cP(h,C.cQ,A.nO(C.f_,40,e,h,!0,!1),!0,h)}}
B.aKX.prototype={
b9(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.oa().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.ch(w.c,this.f,v,!1,!0,null)}}
B.aNO.prototype={
b9(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.oa().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXt()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.cu7()
t=e.gAn()
v=A.W(22)
s=e.c
r=y.p
s=A.a([A.bM(new A.ch(s,76,d?f:x.d,!1,!0,f),f,f),C.P,A.h(s,f,f,f,f,C.c7,C.a4,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.L,C.a4,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.p(q,A.a([u.$2(""+o,n),D.a8h],r))}if(p)C.e.p(q,A.a([u.$2(""+x.ch,"em comum"),D.a8h],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.p(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.p(s,A.a([C.ad,A.O(q,C.u,C.bQ,C.l,0,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.dr(d,0,A.et(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bl<1>")
l=0
for(;;){k=new A.bl(d,0,3,p)
k.cc(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bc(C.t,2,C.ag,-1)
k=d[l]
m.push(new A.eL(l*22,f,f,f,f,f,A.w(f,new A.ch(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.J(f,f,new A.dN(j,j,j,j),f,f,f,C.aq),f,f,f,f,f,f,f),f));++l}p=A.aK(new A.bA(C.aw,f,C.aD,C.y,m,f),32,32+(n-1)*22)
o=A.dr(d,0,A.et(2,"count",q),o)
o=new A.al(o,new B.cu0(),o.$ti.i("al<aY.E,c>")).a_(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.p(s,A.a([C.R,C.iM,C.ad,A.O(A.a([p,C.ac,A.a5(A.h("Em comum: "+o+d,2,f,f,f,C.L,f,f),1)],r),C.u,C.h,C.l,0,f)],r))}d=e.f
if(e.gauC()!=null){q=e.gauC()
q.toString
s.push(new A.h8(q+" \xb7 "+B.cZC(d),10,f))}else s.push(new A.h8(B.cZC(d)[0].toUpperCase()+C.f.bF(B.cZC(d),1),10,f))
s.push(C.R)
s.push(D.cb8)
s.push(C.P)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBN[i]
p=q===h
o=p?$.au:C.a3
p=p?C.t:C.z
d.push(new A.hz(A.fL(C.K,A.h(h,f,f,f,f,new A.P(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f),f,C.aL,new A.fJ(o,f,f,f,C.ab),C.eR,f,38,f,C.cJ,f),new B.cu1(g,h),h,f))}s.push(A.e5(C.bi,d,C.r,C.bl,8,8))
if(!a0)s.push(new A.hk("Ver perfil",new B.cu2(a1,e),!0,f))
s.push(C.ad)
d=g.r
a0=A.a5(new A.hk("Recusar",d?new B.cu3():new B.cu4(g),!0,f),1)
s.push(A.O(A.a([a0,C.ac,A.a5(new A.hk("Aceitar",d?new B.cu5():new B.cu6(g),!1,f),1)],r),C.u,C.h,C.l,0,f))
return A.w(f,A.x(s,C.E,C.h,C.l),C.r,f,f,new A.J(C.t,f,f,v,f,f,C.x),f,f,C.nj,C.cB,f,f,f)}}
var z=a.updateTypes([])
B.c7o.prototype={
$0(){var x=this.a
x.z=!0
x.x.C(0,this.b.a)
x.w=null},
$S:0}
B.c7p.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c7q.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c7t.prototype={
$1(d){return!this.a.x.t(0,d.a)},
$S:473}
B.c7u.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:473}
B.c7v.prototype={
$0(){return A.iO(this.a,!0)},
$S:0}
B.c7w.prototype={
$1(d){var x=this.a
return x.n(new B.c7s(x,d))},
$S:3}
B.c7s.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c7x.prototype={
$1(d){var x=this.c
x.toString
return this.a.KG(this.b,d,x)},
$S:10}
B.c7y.prototype={
$0(){var x=this.a
return x.n(new B.c7r(x,this.b))},
$S:0}
B.c7r.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.cu7.prototype={
$2(d,e){var x=null
return A.x(A.a([A.h(d,x,x,x,x,C.a9,x,x),A.h(e,x,x,x,x,C.bh,x,x)],y.p),C.u,C.h,C.l)},
$S:125}
B.cu0.prototype={
$1(d){return C.e.gJ(d.b.split(" "))},
$S:348}
B.cu1.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.cu2.prototype={
$0(){return A.ae(this.a).ag("/u/"+A.p(this.b.b),null,y.X)},
$S:0}
B.cu3.prototype={
$0(){},
$S:0}
B.cu4.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.cu5.prototype={
$0(){},
$S:0}
B.cu6.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a4b,A.dC)
x(B.aIp,A.dx)
w(A.bL,[B.c7o,B.c7p,B.c7q,B.c7v,B.c7s,B.c7y,B.c7r,B.cu1,B.cu2,B.cu3,B.cu4,B.cu5,B.cu6])
w(A.bu,[B.c7t,B.c7u,B.c7w,B.c7x,B.cu0])
w(A.ew,[B.aKX,B.aNO])
x(B.cu7,A.cL)})()
A.br(b.typeUniverse,JSON.parse('{"a4b":{"G":[],"e":[],"f":[]},"aIp":{"Z":["a4b"]},"aKX":{"G":[],"e":[],"f":[]},"aNO":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.A
return{b:x("ax<t<ps>>"),m:x("ax<ra?>"),v:x("ed"),E:x("qJ"),S:x("r<ps>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("e4<c>"),q:x("dj"),z:x("@"),r:x("v"),X:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBN=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8h=new A.c6(22,null,null,null)
D.cb8=new A.D("Quem \xe9 para voc\xeas?",null,C.L,null,null,null,null,null,null,null)})()};
(a=>{a["ex6zYRDKxBiiHaEciwYvVdGV1nA="]=a.current})($__dart_deferred_initializers__);