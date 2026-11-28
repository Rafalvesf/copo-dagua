((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dsU(d){return new B.a3S(d,null)},
cYZ(d){var x,w=C.j.aO(new A.ac(Date.now(),0,!1).co(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a3S:function a3S(d,e){this.d=d
this.a=e},
aHV:function aHV(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c7b:function c7b(d,e){this.a=d
this.b=e},
c7c:function c7c(d,e){this.a=d
this.b=e},
c7d:function c7d(d){this.a=d},
c7g:function c7g(d){this.a=d},
c7h:function c7h(d){this.a=d},
c7i:function c7i(d){this.a=d},
c7j:function c7j(d){this.a=d},
c7f:function c7f(d,e){this.a=d
this.b=e},
c7k:function c7k(d,e,f){this.a=d
this.b=e
this.c=f},
c7l:function c7l(d,e){this.a=d
this.b=e},
c7e:function c7e(d,e){this.a=d
this.b=e},
aKr:function aKr(d,e,f){this.e=d
this.f=e
this.a=f},
aNj:function aNj(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
ctQ:function ctQ(){},
ctJ:function ctJ(){},
ctK:function ctK(d,e){this.a=d
this.b=e},
ctL:function ctL(d,e){this.a=d
this.b=e},
ctM:function ctM(){},
ctN:function ctN(d){this.a=d},
ctO:function ctO(){},
ctP:function ctP(d){this.a=d},
aUV(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aUV=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.Q()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aH("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aUV)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bh(0,A.R(["group_label",f],v,v)).U("id",u),$async$aUV)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aUV,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[321]
B.a3S.prototype={
R(){return new B.aHV(A.aL(y.N))}}
B.aHV.prototype={
KG(d,e,f){return this.bf5(d,e,f)},
bf5(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KG=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a_(0,$.jC().gaX(),y.E)
s.p(new B.c7b(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aUV(d.a,e,r),$async$KG)
case 6:o.aj($.alT().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dn0(n,f),$async$KG)
case 9:case 8:o=d.c
p.a0(A.bY(null,null,null,null,null,C.y,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c7c(s,d))
p.a0(C.eC)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c7d(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KG,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.G($.cq(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.o7
else{g=g.G($.alT().$1(d),y.b)
g=g.gv(g)
x=g==null?C.o7:g}g=J.db(x,new B.c7g(i))
w=A.U(g,g.$ti.i("w.E"))
v=A.eL(new A.a6(w,new B.c7h(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eL(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lt(f.gcw())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fw,A.Er("Pedidos para entrar",e)],u)
if(t)e.push(new A.c2("Pedidos",h,A.a([A.JH(A.a([new A.hg("Ver convidados",new B.c7i(a0),!0,h)],u),C.iK,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aNj(v,i.y,i.z,new B.c7j(i),new B.c7k(i,v,d),new A.e8(t,y.O))],u)
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
o.push(new A.il(new B.aKr(r,44,h),r.c,C.e.a1(l," \xb7 "),new A.mL("Ver",new B.c7l(i,r),!1,h),!1,h,!1,h))}t.push(new A.c2("Outros pedidos \xb7 "+q,h,A.a([A.eR(o,0)],u),16,h))}C.e.n(e,t)}return A.cP(h,C.cP,A.nJ(C.eZ,40,e,h,!0,!1),!0,h)}}
B.aKr.prototype={
b9(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.o8().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cg(w.c,this.f,v,!1,!0,null)}}
B.aNj.prototype={
b9(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.o8().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXp()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.ctQ()
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
C.e.n(q,A.a([u.$2(""+o,n),D.a8d],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8d],r))
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
o=new A.ak(o,new B.ctJ(),o.$ti.i("ak<aW.E,c>")).a1(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.R,C.iI,C.ac,A.O(A.a([p,C.ab,A.a4(A.h("Em comum: "+o+d,2,f,f,f,C.L,f,f),1)],r),C.v,C.h,C.l,0,f)],r))}d=e.f
if(e.gauB()!=null){q=e.gauB()
q.toString
s.push(new A.h4(q+" \xb7 "+B.cYZ(d),10,f))}else s.push(new A.h4(B.cYZ(d)[0].toUpperCase()+C.f.bE(B.cYZ(d),1),10,f))
s.push(C.R)
s.push(D.caK)
s.push(C.P)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBB[i]
p=q===h
o=p?$.au:C.a4
p=p?C.t:C.z
d.push(new A.hR(A.fH(C.K,A.h(h,f,f,f,f,new A.P(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f),f,C.aL,new A.k4(o,f,f,f,C.aa),C.eQ,f,38,f,C.cG,f),new B.ctK(g,h),h,f))}s.push(A.e4(C.bf,d,C.r,C.bk,8,8))
if(!a0)s.push(new A.hg("Ver perfil",new B.ctL(a1,e),!0,f))
s.push(C.ac)
d=g.r
a0=A.a4(new A.hg("Recusar",d?new B.ctM():new B.ctN(g),!0,f),1)
s.push(A.O(A.a([a0,C.ab,A.a4(new A.hg("Aceitar",d?new B.ctO():new B.ctP(g),!1,f),1)],r),C.v,C.h,C.l,0,f))
return A.x(f,A.z(s,C.E,C.h,C.l),C.r,f,f,new A.I(C.t,f,f,v,f,f,C.x),f,f,C.nk,C.cH,f,f,f)}}
var z=a.updateTypes([])
B.c7b.prototype={
$0(){var x=this.a
x.z=!0
x.x.C(0,this.b.a)
x.w=null},
$S:0}
B.c7c.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c7d.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c7g.prototype={
$1(d){return!this.a.x.t(0,d.a)},
$S:444}
B.c7h.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:444}
B.c7i.prototype={
$0(){return A.ae(this.a).af(null)},
$S:0}
B.c7j.prototype={
$1(d){var x=this.a
return x.p(new B.c7f(x,d))},
$S:3}
B.c7f.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c7k.prototype={
$1(d){var x=this.c
x.toString
return this.a.KG(this.b,d,x)},
$S:10}
B.c7l.prototype={
$0(){var x=this.a
return x.p(new B.c7e(x,this.b))},
$S:0}
B.c7e.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.ctQ.prototype={
$2(d,e){var x=null
return A.z(A.a([A.h(d,x,x,x,x,C.a9,x,x),A.h(e,x,x,x,x,C.be,x,x)],y.p),C.v,C.h,C.l)},
$S:132}
B.ctJ.prototype={
$1(d){return C.e.gJ(d.b.split(" "))},
$S:503}
B.ctK.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.ctL.prototype={
$0(){return A.ae(this.a).ak("/u/"+A.p(this.b.b),null,y.X)},
$S:0}
B.ctM.prototype={
$0(){},
$S:0}
B.ctN.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.ctO.prototype={
$0(){},
$S:0}
B.ctP.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3S,A.dC)
x(B.aHV,A.dw)
w(A.bL,[B.c7b,B.c7c,B.c7d,B.c7i,B.c7f,B.c7l,B.c7e,B.ctK,B.ctL,B.ctM,B.ctN,B.ctO,B.ctP])
w(A.bs,[B.c7g,B.c7h,B.c7j,B.c7k,B.ctJ])
w(A.ew,[B.aKr,B.aNj])
x(B.ctQ,A.cK)})()
A.bq(b.typeUniverse,JSON.parse('{"a3S":{"G":[],"e":[],"f":[]},"aHV":{"a0":["a3S"]},"aKr":{"G":[],"e":[],"f":[]},"aNj":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.y
return{b:x("ax<t<pq>>"),m:x("ax<r7?>"),v:x("ec"),E:x("qF"),S:x("r<pq>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("e8<c>"),q:x("dl"),z:x("@"),r:x("v"),X:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBB=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8d=new A.c5(22,null,null,null)
D.caK=new A.D("Quem \xe9 para voc\xeas?",null,C.L,null,null,null,null,null,null,null)})()};
(a=>{a["njeoVTYVcKk1bNXPXbxYdV9+Bec="]=a.current})($__dart_deferred_initializers__);