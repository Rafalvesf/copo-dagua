((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dsJ(d){return new B.a41(d,null)},
cYX(d){var x,w=C.j.aP(new A.ac(Date.now(),0,!1).cA(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a41:function a41(d,e){this.d=d
this.a=e},
aId:function aId(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c7F:function c7F(d,e){this.a=d
this.b=e},
c7G:function c7G(d,e){this.a=d
this.b=e},
c7H:function c7H(d){this.a=d},
c7K:function c7K(d){this.a=d},
c7L:function c7L(d){this.a=d},
c7M:function c7M(d){this.a=d},
c7N:function c7N(d){this.a=d},
c7J:function c7J(d,e){this.a=d
this.b=e},
c7O:function c7O(d,e,f){this.a=d
this.b=e
this.c=f},
c7P:function c7P(d,e){this.a=d
this.b=e},
c7I:function c7I(d,e){this.a=d
this.b=e},
aKL:function aKL(d,e,f){this.e=d
this.f=e
this.a=f},
aNB:function aNB(d,e,f,g,h,i){var _=this
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
aVf(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aVf=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.P()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aK("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aVf)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bj(0,A.R(["group_label",f],v,v)).V("id",u),$async$aVf)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aVf,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[324]
B.a41.prototype={
R(){return new B.aId(A.aL(y.N))}}
B.aId.prototype={
L1(d,e,f){return this.bgw(d,e,f)},
bgw(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$L1=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a1(0,$.jF().gaX(),y.E)
s.p(new B.c7F(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aVf(d.a,e,r),$async$L1)
case 6:o.ak($.amb().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dmP(n,f),$async$L1)
case 9:case 8:o=d.c
p.a2(A.c0(null,null,null,null,null,C.y,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c7G(s,d))
p.a2(C.eE)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c7H(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$L1,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.G($.cr(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.oh
else{g=g.G($.amb().$1(d),y.b)
g=g.gv(g)
x=g==null?C.oh:g}g=J.db(x,new B.c7K(i))
w=A.U(g,g.$ti.i("x.E"))
v=A.eL(new A.a5(w,new B.c7L(i),A.a8(w).i("a5<1>")))
if(v==null)v=A.eL(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lt(f.gcB())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.h0,A.Ew("Pedidos para entrar",e)],u)
if(t)e.push(new A.cc("Pedidos",h,A.a([A.JL(A.a([new A.hJ("Ver convidados",new B.c7M(a0),!0,h)],u),C.iL,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aNB(v,i.y,i.z,new B.c7N(i),new B.c7O(i,v,d),new A.dU(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.H)(g),++s){r=g[s]
l=r.f
k=C.j.aP(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAA()
if((j==null?0:j)>0)l.push("traz "+A.q(r.gAA()))
o.push(new A.ir(new B.aKL(r,44,h),r.c,C.e.a0(l," \xb7 "),new A.mP("Ver",new B.c7P(i,r),!1,h),!1,h,!1,h))}t.push(new A.cc("Outros pedidos \xb7 "+q,h,A.a([A.eT(o,0)],u),16,h))}C.e.n(e,t)}return A.cQ(h,C.d1,A.or(C.fh,40,e,h,!0,!1),!0,h)}}
B.aKL.prototype={
bb(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.o7().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.ci(w.c,this.f,v,!1,!0,null)}}
B.aNB.prototype={
bb(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.o7().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXS()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.ctU()
t=e.gAA()
v=A.W(22)
s=e.c
r=y.p
s=A.a([A.bL(new A.ci(s,76,d?f:x.d,!1,!0,f),f,f),C.Q,A.h(s,f,f,f,f,C.c1,C.a4,f,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.L,C.a4,f,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a8p],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8p],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.q(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ab,A.O(q,C.v,C.bS,C.l,0,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.dC(d,0,A.ew(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bk<1>")
l=0
for(;;){k=new A.bk(d,0,3,p)
k.cf(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bf(C.t,2,C.ai,-1)
k=d[l]
m.push(new A.eF(l*22,f,f,f,f,f,A.B(f,new A.ci(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.K(f,f,new A.dO(j,j,j,j),f,f,f,C.as),f,f,f,f,f,f,f),f));++l}p=A.aH(new A.bB(C.ax,f,C.aD,C.y,m,f),32,32+(n-1)*22)
o=A.dC(d,0,A.ew(2,"count",q),o)
o=new A.ak(o,new B.ctN(),o.$ti.i("ak<aV.E,c>")).a0(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.R,C.iJ,C.ab,A.O(A.a([p,C.ad,A.a6(A.h("Em comum: "+o+d,2,f,f,f,C.L,f,f,f),1)],r),C.v,C.h,C.l,0,f)],r))}d=e.f
if(e.gavo()!=null){q=e.gavo()
q.toString
s.push(new A.hX(q+" \xb7 "+B.cYX(d),10,f))}else s.push(new A.hX(B.cYX(d)[0].toUpperCase()+C.f.bF(B.cYX(d),1),10,f))
s.push(C.R)
s.push(D.ceD)
s.push(C.Q)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBS[i]
p=q===h
o=p?$.au:C.a5
p=p?C.t:C.z
d.push(new A.ih(A.fB(C.K,A.h(h,f,f,f,f,new A.Q(!0,p,f,f,f,f,14,C.G,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aO,new A.jb(o,f,f,f,C.ac),C.ey,f,38,f,C.cP,f),new B.ctO(g,h),h,f))}s.push(A.e1(C.bd,d,C.r,C.bj,8,8))
if(!a0)s.push(new A.hJ("Ver perfil",new B.ctP(a1,e),!0,f))
s.push(C.ab)
d=g.r
a0=A.a6(new A.hJ("Recusar",d?new B.ctQ():new B.ctR(g),!0,f),1)
s.push(A.O(A.a([a0,C.ad,A.a6(new A.hJ("Aceitar",d?new B.ctS():new B.ctT(g),!1,f),1)],r),C.v,C.h,C.l,0,f))
return A.B(f,A.A(s,C.E,C.h,C.l),C.r,f,f,new A.K(C.t,f,f,v,f,f,C.x),f,f,C.nt,C.cH,f,f,f)}}
var z=a.updateTypes([])
B.c7F.prototype={
$0(){var x=this.a
x.z=!0
x.x.C(0,this.b.a)
x.w=null},
$S:0}
B.c7G.prototype={
$0(){return this.a.x.M(0,this.b.a)},
$S:0}
B.c7H.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c7K.prototype={
$1(d){return!this.a.x.q(0,d.a)},
$S:516}
B.c7L.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:516}
B.c7M.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0}
B.c7N.prototype={
$1(d){var x=this.a
return x.p(new B.c7J(x,d))},
$S:3}
B.c7J.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c7O.prototype={
$1(d){var x=this.c
x.toString
return this.a.L1(this.b,d,x)},
$S:10}
B.c7P.prototype={
$0(){var x=this.a
return x.p(new B.c7I(x,this.b))},
$S:0}
B.c7I.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.ctU.prototype={
$2(d,e){var x=null
return A.A(A.a([A.h(d,x,x,x,x,C.a9,x,x,x),A.h(e,x,x,x,x,C.bf,x,x,x)],y.p),C.v,C.h,C.l)},
$S:149}
B.ctN.prototype={
$1(d){return C.e.gJ(d.b.split(" "))},
$S:489}
B.ctO.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.ctP.prototype={
$0(){return A.ae(this.a).al("/u/"+A.q(this.b.b),null,y.X)},
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
x(B.a41,A.dA)
x(B.aId,A.dv)
w(A.bO,[B.c7F,B.c7G,B.c7H,B.c7M,B.c7J,B.c7P,B.c7I,B.ctO,B.ctP,B.ctQ,B.ctR,B.ctS,B.ctT])
w(A.bw,[B.c7K,B.c7L,B.c7N,B.c7O,B.ctN])
w(A.et,[B.aKL,B.aNB])
x(B.ctU,A.cK)})()
A.bt(b.typeUniverse,JSON.parse('{"a41":{"G":[],"e":[],"f":[]},"aId":{"Y":["a41"]},"aKL":{"G":[],"e":[],"f":[]},"aNB":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{b:x("az<t<pp>>"),m:x("az<ra?>"),v:x("ed"),E:x("qI"),S:x("r<pp>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dU<c>"),q:x("dr"),z:x("@"),r:x("v"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBS=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8p=new A.c_(22,null,null,null)
D.ceD=new A.D("Quem \xe9 para voc\xeas?",null,C.L,null,null,null,null,null,null,null,null)})()};
(a=>{a["qprOtRVVUJuEPPPELLRBwzq8YCM="]=a.current})($__dart_deferred_initializers__);