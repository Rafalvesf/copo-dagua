((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dsu(d){return new B.a45(d,null)},
cYM(d){var x,w=C.j.aP(new A.ac(Date.now(),0,!1).cw(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a45:function a45(d,e){this.d=d
this.a=e},
aIf:function aIf(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c7J:function c7J(d,e){this.a=d
this.b=e},
c7K:function c7K(d,e){this.a=d
this.b=e},
c7L:function c7L(d){this.a=d},
c7O:function c7O(d){this.a=d},
c7P:function c7P(d){this.a=d},
c7Q:function c7Q(d){this.a=d},
c7R:function c7R(d){this.a=d},
c7N:function c7N(d,e){this.a=d
this.b=e},
c7S:function c7S(d,e,f){this.a=d
this.b=e
this.c=f},
c7T:function c7T(d,e){this.a=d
this.b=e},
c7M:function c7M(d,e){this.a=d
this.b=e},
aKN:function aKN(d,e,f){this.e=d
this.f=e
this.a=f},
aND:function aND(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
ctR:function ctR(){},
ctK:function ctK(){},
ctL:function ctL(d,e){this.a=d
this.b=e},
ctM:function ctM(d,e){this.a=d
this.b=e},
ctN:function ctN(){},
ctO:function ctO(d){this.a=d},
ctP:function ctP(){},
ctQ:function ctQ(d){this.a=d},
aVh(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aVh=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.Q()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aK("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aVh)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bj(0,A.R(["group_label",f],v,v)).V("id",u),$async$aVh)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aVh,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[324]
B.a45.prototype={
R(){return new B.aIf(A.aL(y.N))}}
B.aIf.prototype={
L1(d,e,f){return this.bgu(d,e,f)},
bgu(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$L1=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a1(0,$.jE().gaX(),y.E)
s.p(new B.c7J(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aVh(d.a,e,r),$async$L1)
case 6:o.ak($.amf().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dmA(n,f),$async$L1)
case 9:case 8:o=d.c
p.a2(A.c0(null,null,null,null,null,C.y,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c7K(s,d))
p.a2(C.eE)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c7L(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$L1,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.G($.cq(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.og
else{g=g.G($.amf().$1(d),y.b)
g=g.gv(g)
x=g==null?C.og:g}g=J.db(x,new B.c7O(i))
w=A.U(g,g.$ti.i("x.E"))
v=A.eR(new A.a4(w,new B.c7P(i),A.a8(w).i("a4<1>")))
if(v==null)v=A.eR(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.ls(f.gcz())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.h1,A.Eu("Pedidos para entrar",e)],u)
if(t)e.push(new A.d0("Pedidos",h,A.a([A.JJ(A.a([new A.i6("Ver convidados",new B.c7Q(a0),!0,h)],u),C.iL,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aND(v,i.y,i.z,new B.c7R(i),new B.c7S(i,v,d),new A.dU(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.H)(g),++s){r=g[s]
l=r.f
k=C.j.aP(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAz()
if((j==null?0:j)>0)l.push("traz "+A.q(r.gAz()))
o.push(new A.i9(new B.aKN(r,44,h),r.c,C.e.a0(l," \xb7 "),new A.nC("Ver",new B.c7T(i,r),!1,h),!1,h,!1,h))}t.push(new A.d0("Outros pedidos \xb7 "+q,h,A.a([A.eV(o,0)],u),16,h))}C.e.n(e,t)}return A.cP(h,C.d1,A.op(C.fg,40,e,h,!0,!1),!0,h)}}
B.aKN.prototype={
bb(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.o4().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.ci(w.c,this.f,v,!1,!0,null)}}
B.aND.prototype={
bb(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.o4().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXR()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.ctR()
t=e.gAz()
v=A.W(22)
s=e.c
r=y.p
s=A.a([A.bL(new A.ci(s,76,d?f:x.d,!1,!0,f),f,f),C.R,A.h(s,f,f,f,f,C.c1,C.a4,f,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.M,C.a4,f,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a8r],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8r],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.q(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ac,A.O(q,C.v,C.bR,C.l,0,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.dG(d,0,A.ew(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bk<1>")
l=0
for(;;){k=new A.bk(d,0,3,p)
k.ce(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bf(C.t,2,C.ai,-1)
k=d[l]
m.push(new A.eF(l*22,f,f,f,f,f,A.y(f,new A.ci(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.K(f,f,new A.dO(j,j,j,j),f,f,f,C.as),f,f,f,f,f,f,f),f));++l}p=A.aH(new A.bB(C.ax,f,C.aD,C.y,m,f),32,32+(n-1)*22)
o=A.dG(d,0,A.ew(2,"count",q),o)
o=new A.ak(o,new B.ctK(),o.$ti.i("ak<aW.E,c>")).a0(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.Q,C.iJ,C.ac,A.O(A.a([p,C.ae,A.a5(A.h("Em comum: "+o+d,2,f,f,f,C.M,f,f,f),1)],r),C.v,C.h,C.l,0,f)],r))}d=e.f
if(e.gavo()!=null){q=e.gavo()
q.toString
s.push(new A.jH(q+" \xb7 "+B.cYM(d),10,f))}else s.push(new A.jH(B.cYM(d)[0].toUpperCase()+C.f.bF(B.cYM(d),1),10,f))
s.push(C.Q)
s.push(D.ceG)
s.push(C.R)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBN[i]
p=q===h
o=p?$.at:C.a5
p=p?C.t:C.z
d.push(new A.ih(A.fA(C.K,A.h(h,f,f,f,f,new A.P(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aO,new A.ja(o,f,f,f,C.ab),C.ex,f,38,f,C.cH,f),new B.ctL(g,h),h,f))}s.push(A.e_(C.bf,d,C.r,C.bk,8,8))
if(!a0)s.push(new A.i6("Ver perfil",new B.ctM(a1,e),!0,f))
s.push(C.ac)
d=g.r
a0=A.a5(new A.i6("Recusar",d?new B.ctN():new B.ctO(g),!0,f),1)
s.push(A.O(A.a([a0,C.ae,A.a5(new A.i6("Aceitar",d?new B.ctP():new B.ctQ(g),!1,f),1)],r),C.v,C.h,C.l,0,f))
return A.y(f,A.A(s,C.E,C.h,C.l),C.r,f,f,new A.K(C.t,f,f,v,f,f,C.x),f,f,C.ns,C.d3,f,f,f)}}
var z=a.updateTypes([])
B.c7J.prototype={
$0(){var x=this.a
x.z=!0
x.x.C(0,this.b.a)
x.w=null},
$S:0}
B.c7K.prototype={
$0(){return this.a.x.M(0,this.b.a)},
$S:0}
B.c7L.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c7O.prototype={
$1(d){return!this.a.x.q(0,d.a)},
$S:509}
B.c7P.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:509}
B.c7Q.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0}
B.c7R.prototype={
$1(d){var x=this.a
return x.p(new B.c7N(x,d))},
$S:3}
B.c7N.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c7S.prototype={
$1(d){var x=this.c
x.toString
return this.a.L1(this.b,d,x)},
$S:10}
B.c7T.prototype={
$0(){var x=this.a
return x.p(new B.c7M(x,this.b))},
$S:0}
B.c7M.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.ctR.prototype={
$2(d,e){var x=null
return A.A(A.a([A.h(d,x,x,x,x,C.a9,x,x,x),A.h(e,x,x,x,x,C.be,x,x,x)],y.p),C.v,C.h,C.l)},
$S:152}
B.ctK.prototype={
$1(d){return C.e.gL(d.b.split(" "))},
$S:476}
B.ctL.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.ctM.prototype={
$0(){return A.ae(this.a).am("/u/"+A.q(this.b.b),null,y.X)},
$S:0}
B.ctN.prototype={
$0(){},
$S:0}
B.ctO.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.ctP.prototype={
$0(){},
$S:0}
B.ctQ.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a45,A.dA)
x(B.aIf,A.dv)
w(A.bP,[B.c7J,B.c7K,B.c7L,B.c7Q,B.c7N,B.c7T,B.c7M,B.ctL,B.ctM,B.ctN,B.ctO,B.ctP,B.ctQ])
w(A.bw,[B.c7O,B.c7P,B.c7R,B.c7S,B.ctK])
w(A.et,[B.aKN,B.aND])
x(B.ctR,A.cK)})()
A.br(b.typeUniverse,JSON.parse('{"a45":{"G":[],"e":[],"f":[]},"aIf":{"Y":["a45"]},"aKN":{"G":[],"e":[],"f":[]},"aND":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{b:x("az<t<pn>>"),m:x("az<rb?>"),v:x("ec"),E:x("qI"),S:x("r<pn>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dU<c>"),q:x("dr"),z:x("@"),r:x("v"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBN=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8r=new A.c_(22,null,null,null)
D.ceG=new A.D("Quem \xe9 para voc\xeas?",null,C.M,null,null,null,null,null,null,null,null)})()};
(a=>{a["iGjhCwj5z5S6yMpA7D2RFtBd8sw="]=a.current})($__dart_deferred_initializers__);