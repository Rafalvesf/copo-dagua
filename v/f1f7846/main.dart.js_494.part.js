((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dsm(d){return new B.a43(d,null)},
cYG(d){var x,w=C.j.aS(new A.ac(Date.now(),0,!1).cL(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a43:function a43(d,e){this.d=d
this.a=e},
aIv:function aIv(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c7w:function c7w(d,e){this.a=d
this.b=e},
c7x:function c7x(d,e){this.a=d
this.b=e},
c7y:function c7y(d){this.a=d},
c7B:function c7B(d){this.a=d},
c7C:function c7C(d){this.a=d},
c7D:function c7D(d){this.a=d},
c7E:function c7E(d){this.a=d},
c7A:function c7A(d,e){this.a=d
this.b=e},
c7F:function c7F(d,e,f){this.a=d
this.b=e
this.c=f},
c7G:function c7G(d,e){this.a=d
this.b=e},
c7z:function c7z(d,e){this.a=d
this.b=e},
aL2:function aL2(d,e,f){this.e=d
this.f=e
this.a=f},
aNW:function aNW(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
cty:function cty(){},
ctr:function ctr(){},
cts:function cts(d,e){this.a=d
this.b=e},
ctt:function ctt(d,e){this.a=d
this.b=e},
ctu:function ctu(){},
ctv:function ctv(d){this.a=d},
ctw:function ctw(){},
ctx:function ctx(d){this.a=d},
aVv(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aVv=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.R()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aL("review_join_request",A.T(["p_request",d,"p_approve",e],y.N,v),v),$async$aVv)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bh(0,A.T(["group_label",f],v,v)).V("id",u),$async$aVv)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aVv,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[325]
B.a43.prototype={
R(){return new B.aIv(A.aK(y.N))}}
B.aIv.prototype={
L9(d,e,f){return this.bh4(d,e,f)},
bh4(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$L9=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a1(0,$.jA().gaX(),y.E)
s.p(new B.c7w(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aVv(d.a,e,r),$async$L9)
case 6:o.aj($.amp().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dmt(n,f),$async$L9)
case 9:case 8:o=d.c
p.a2(A.c3(null,null,null,null,null,C.z,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c7x(s,d))
p.a2(C.eD)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c7y(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$L9,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.H($.cr(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.oq
else{g=g.H($.amp().$1(d),y.b)
g=g.gv(g)
x=g==null?C.oq:g}g=J.d7(x,new B.c7B(i))
w=A.U(g,g.$ti.i("B.E"))
v=A.eV(new A.a6(w,new B.c7C(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eV(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lo(f.gcB())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.h1,A.Kt("Pedidos para entrar",e)],u)
if(t)e.push(new A.dU("Pedidos",h,A.a([A.Sw(A.a([new A.io("Ver convidados",new B.c7D(a0),!0,h)],u),C.jJ,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aNW(v,i.y,i.z,new B.c7E(i),new B.c7F(i,v,d),new A.dW(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.H)(g),++s){r=g[s]
l=r.f
k=C.j.aS(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAE()
if((j==null?0:j)>0)l.push("traz "+A.q(r.gAE()))
o.push(new A.i8(new B.aL2(r,44,h),r.c,C.e.a0(l," \xb7 "),new A.om("Ver",new B.c7G(i,r),!1,h),!1,h,!1,h))}t.push(new A.dU("Outros pedidos \xb7 "+q,h,A.a([A.fc(o,0)],u),16,h))}C.e.n(e,t)}return A.cP(h,C.cY,A.os(C.fd,40,e,h,!0,!1),!0,h)}}
B.aL2.prototype={
bg(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.H($.o8().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cp(w.c,this.f,v,!1,!0,null)}}
B.aNW.prototype={
bg(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.H($.o8().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXY()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.cty()
t=e.gAE()
v=A.V(22)
s=e.c
r=y.p
s=A.a([A.bN(new A.cp(s,76,d?f:x.d,!1,!0,f),f,f),C.S,A.h(s,f,f,f,f,C.c2,C.a6,f,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.N,C.a6,f,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a94],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a94],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.q(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ad,A.N(q,C.w,C.bW,C.l,0,f,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.dM(d,0,A.eF(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bl<1>")
l=0
for(;;){k=new A.bl(d,0,3,p)
k.ce(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bb(C.t,2,C.ai,-1)
k=d[l]
m.push(new A.eM(l*22,f,f,f,f,f,A.z(f,new A.cp(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.I(f,f,new A.dN(j,j,j,j),f,f,f,C.aw),f,f,f,f,f,f,f),f));++l}p=A.aH(new A.bD(C.aA,f,C.aG,C.z,m,f),32,32+(n-1)*22)
o=A.dM(d,0,A.eF(2,"count",q),o)
o=new A.aj(o,new B.ctr(),o.$ti.i("aj<aZ.E,c>")).a0(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.R,C.iM,C.ad,A.N(A.a([p,C.ag,A.a4(A.h("Em comum: "+o+d,2,f,f,f,C.N,f,f,f),1)],r),C.w,C.h,C.l,0,f,f)],r))}d=e.f
if(e.gavI()!=null){q=e.gavI()
q.toString
s.push(new A.kM(q+" \xb7 "+B.cYG(d),10,f))}else s.push(new A.kM(B.cYG(d)[0].toUpperCase()+C.f.bF(B.cYG(d),1),10,f))
s.push(C.R)
s.push(D.cg2)
s.push(C.S)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bCS[i]
p=q===h
o=p?$.au:C.a7
p=p?C.t:C.A
d.push(new A.hz(A.fw(C.L,A.h(h,f,f,f,f,new A.P(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aO,new A.j7(o,f,f,f,C.ae),C.ey,f,38,f,C.cP,f),new B.cts(g,h),h,f))}s.push(A.e1(C.bf,d,C.r,C.bl,8,8))
if(!a0)s.push(new A.io("Ver perfil",new B.ctt(a1,e),!0,f))
s.push(C.ad)
d=g.r
a0=A.a4(new A.io("Recusar",d?new B.ctu():new B.ctv(g),!0,f),1)
s.push(A.N(A.a([a0,C.ag,A.a4(new A.io("Aceitar",d?new B.ctw():new B.ctx(g),!1,f),1)],r),C.w,C.h,C.l,0,f,f))
return A.z(f,A.x(s,C.G,C.h,C.l,0,C.u),C.r,f,f,new A.I(C.t,f,f,v,f,f,C.y),f,f,C.lE,C.dp,f,f,f)}}
var z=a.updateTypes([])
B.c7w.prototype={
$0(){var x=this.a
x.z=!0
x.x.B(0,this.b.a)
x.w=null},
$S:0}
B.c7x.prototype={
$0(){return this.a.x.L(0,this.b.a)},
$S:0}
B.c7y.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c7B.prototype={
$1(d){return!this.a.x.q(0,d.a)},
$S:417}
B.c7C.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:417}
B.c7D.prototype={
$0(){return A.ah(this.a).ae(null)},
$S:0}
B.c7E.prototype={
$1(d){var x=this.a
return x.p(new B.c7A(x,d))},
$S:3}
B.c7A.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c7F.prototype={
$1(d){var x=this.c
x.toString
return this.a.L9(this.b,d,x)},
$S:10}
B.c7G.prototype={
$0(){var x=this.a
return x.p(new B.c7z(x,this.b))},
$S:0}
B.c7z.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.cty.prototype={
$2(d,e){var x=null
return A.x(A.a([A.h(d,x,x,x,x,C.ab,x,x,x),A.h(e,x,x,x,x,C.bb,x,x,x)],y.p),C.w,C.h,C.l,0,C.u)},
$S:153}
B.ctr.prototype={
$1(d){return C.e.gK(d.b.split(" "))},
$S:518}
B.cts.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.ctt.prototype={
$0(){return A.ah(this.a).av("/u/"+A.q(this.b.b),null,y.X)},
$S:0}
B.ctu.prototype={
$0(){},
$S:0}
B.ctv.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.ctw.prototype={
$0(){},
$S:0}
B.ctx.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a43,A.dD)
x(B.aIv,A.dz)
w(A.bR,[B.c7w,B.c7x,B.c7y,B.c7D,B.c7A,B.c7G,B.c7z,B.cts,B.ctt,B.ctu,B.ctv,B.ctw,B.ctx])
w(A.bz,[B.c7B,B.c7C,B.c7E,B.c7F,B.ctr])
w(A.eq,[B.aL2,B.aNW])
x(B.cty,A.cN)})()
A.bq(b.typeUniverse,JSON.parse('{"a43":{"G":[],"e":[],"f":[]},"aIv":{"Y":["a43"]},"aL2":{"G":[],"e":[],"f":[]},"aNW":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{b:x("ay<t<pq>>"),m:x("ay<rg?>"),v:x("ef"),E:x("qN"),S:x("r<pq>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dW<c>"),q:x("dn"),z:x("@"),r:x("v"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bCS=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a94=new A.c0(22,null,null,null)
D.cg2=new A.D("Quem \xe9 para voc\xeas?",null,C.N,null,null,null,null,null,null,null,null)})()};
(a=>{a["7vyGjOFBQCPGYrU+sezjgbbS13I="]=a.current})($__dart_deferred_initializers__);