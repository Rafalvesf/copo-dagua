((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
doN(d){return new B.a3G(d,null)},
cVf(d){var x,w=C.j.aM(new A.ad(Date.now(),0,!1).cC(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a3G:function a3G(d,e){this.d=d
this.a=e},
aHQ:function aHQ(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c5w:function c5w(d,e){this.a=d
this.b=e},
c5x:function c5x(d,e){this.a=d
this.b=e},
c5y:function c5y(d){this.a=d},
c5B:function c5B(d){this.a=d},
c5C:function c5C(d){this.a=d},
c5D:function c5D(d){this.a=d},
c5E:function c5E(d){this.a=d},
c5A:function c5A(d,e){this.a=d
this.b=e},
c5F:function c5F(d,e,f){this.a=d
this.b=e
this.c=f},
c5G:function c5G(d,e){this.a=d
this.b=e},
c5z:function c5z(d,e){this.a=d
this.b=e},
aKm:function aKm(d,e,f){this.e=d
this.f=e
this.a=f},
aNf:function aNf(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
cqE:function cqE(){},
cqx:function cqx(){},
cqy:function cqy(d,e){this.a=d
this.b=e},
cqz:function cqz(d,e){this.a=d
this.b=e},
cqA:function cqA(){},
cqB:function cqB(d){this.a=d},
cqC:function cqC(){},
cqD:function cqD(d){this.a=d},
aUM(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aUM=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.T()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aT("review_join_request",A.S(["p_request",d,"p_approve",e],y.N,v),v),$async$aUM)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.R("guests").bh(0,A.S(["group_label",f],v,v)).X("id",u),$async$aUM)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aUM,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[319]
B.a3G.prototype={
P(){return new B.aHQ(A.aH(y.N))}}
B.aHQ.prototype={
KP(d,e,f){return this.bga(d,e,f)},
bga(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KP=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a0(0,$.jy().gaW(),y.E)
s.q(new B.c5w(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aUM(d.a,e,r),$async$KP)
case 6:o.ai($.alR().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.diU(n,f),$async$KP)
case 9:case 8:o=d.c
p.a4(A.cB(null,null,null,null,null,C.z,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.q(new B.c5x(s,d))
p.a4(C.ez)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.c5y(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KP,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.H($.ck(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.oc
else{g=g.H($.alR().$1(d),y.b)
g=g.gv(g)
x=g==null?C.oc:g}g=J.dc(x,new B.c5B(i))
w=A.V(g,g.$ti.i("z.E"))
v=A.eV(new A.a6(w,new B.c5C(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eV(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.I)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lm(f.gco())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fV,A.Ki("Pedidos para entrar",e)],u)
if(t)e.push(new A.dP("Pedidos",h,A.a([A.Sf(A.a([new A.im("Ver convidados",new B.c5D(a0),!0,h)],u),C.jy,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aNf(v,i.y,i.z,new B.c5E(i),new B.c5F(i,v,d),new A.dT(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.I)(g),++s){r=g[s]
l=r.f
k=C.j.aM(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAu()
if((j==null?0:j)>0)l.push("traz "+A.q(r.gAu()))
o.push(new A.i9(new B.aKm(r,44,h),r.c,C.e.a2(l," \xb7 "),new A.oh("Ver",new B.c5G(i,r),!1,h),!1,h,!1,h))}t.push(new A.dP("Outros pedidos \xb7 "+q,h,A.a([A.fa(o,0)],u),16,h))}C.e.n(e,t)}return A.cO(h,C.cS,A.on(C.fb,40,e,h,!0,!1),!0,h)}}
B.aKm.prototype={
bc(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.H($.uy().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cw(w.c,this.f,v,!1,!0,null)}}
B.aNf.prototype={
bc(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.H($.uy().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gaza()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.cqE()
t=e.gAu()
v=A.Y(22)
s=e.c
r=y.p
s=A.a([A.bO(new A.cw(s,76,d?f:x.d,!1,!0,f),f,f),C.X,A.h(s,f,f,f,f,C.c6,C.a6,f,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.T,C.a6,f,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a8R],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8R],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.q(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ab,A.P(q,C.w,C.bV,C.m,0,f,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.e3(d,0,A.eT(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bm<1>")
l=0
for(;;){k=new A.bm(d,0,3,p)
k.ck(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bc(C.t,2,C.ag,-1)
k=d[l]
m.push(new A.eZ(l*22,f,f,f,f,f,A.A(f,new A.cw(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.M(f,f,new A.dR(j,j,j,j),f,f,f,C.ax),f,f,f,f,f,f,f),f));++l}p=A.aI(new A.bB(C.aA,f,C.aG,C.z,m,f),32,32+(n-1)*22)
o=A.e3(d,0,A.eT(2,"count",q),o)
o=new A.al(o,new B.cqx(),o.$ti.i("al<aZ.E,c>")).a2(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.Q,C.iC,C.ab,A.P(A.a([p,C.ai,A.a5(A.h("Em comum: "+o+d,2,f,f,f,C.T,f,f,f),1)],r),C.w,C.i,C.m,0,f,f)],r))}d=e.f
if(e.gauZ()!=null){q=e.gauZ()
q.toString
s.push(new A.kL(q+" \xb7 "+B.cVf(d),10,f))}else s.push(new A.kL(B.cVf(d)[0].toUpperCase()+C.f.bD(B.cVf(d),1),10,f))
s.push(C.Q)
s.push(D.cfr)
s.push(C.X)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bCz[i]
p=q===h
o=p?$.ar:C.ac
p=p?C.t:C.A
d.push(new A.hv(A.fv(C.L,A.h(h,f,f,f,f,new A.N(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aN,new A.j6(o,f,f,f,C.ad),C.eu,f,38,f,C.dj,f),new B.cqy(g,h),h,f))}s.push(A.ea(C.bd,d,C.r,C.bm,8,8))
if(!a0)s.push(new A.im("Ver perfil",new B.cqz(a1,e),!0,f))
s.push(C.ab)
d=g.r
a0=A.a5(new A.im("Recusar",d?new B.cqA():new B.cqB(g),!0,f),1)
s.push(A.P(A.a([a0,C.ai,A.a5(new A.im("Aceitar",d?new B.cqC():new B.cqD(g),!1,f),1)],r),C.w,C.i,C.m,0,f,f))
return A.A(f,A.B(s,C.I,C.i,C.m,0,C.v),C.r,f,f,new A.M(C.t,f,f,v,f,f,C.y),f,f,C.lu,C.dk,f,f,f)}}
var z=a.updateTypes([])
B.c5w.prototype={
$0(){var x=this.a
x.z=!0
x.x.B(0,this.b.a)
x.w=null},
$S:0}
B.c5x.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c5y.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c5B.prototype={
$1(d){return!this.a.x.p(0,d.a)},
$S:381}
B.c5C.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:381}
B.c5D.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0}
B.c5E.prototype={
$1(d){var x=this.a
return x.q(new B.c5A(x,d))},
$S:3}
B.c5A.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c5F.prototype={
$1(d){var x=this.c
x.toString
return this.a.KP(this.b,d,x)},
$S:10}
B.c5G.prototype={
$0(){var x=this.a
return x.q(new B.c5z(x,this.b))},
$S:0}
B.c5z.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.cqE.prototype={
$2(d,e){var x=null
return A.B(A.a([A.h(d,x,x,x,x,C.aj,x,x,x),A.h(e,x,x,x,x,C.ba,x,x,x)],y.p),C.w,C.i,C.m,0,C.v)},
$S:141}
B.cqx.prototype={
$1(d){return C.e.gM(d.b.split(" "))},
$S:1494}
B.cqy.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.cqz.prototype={
$0(){return A.ai(this.a).ar("/u/"+A.q(this.b.b),null,y.X)},
$S:0}
B.cqA.prototype={
$0(){},
$S:0}
B.cqB.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.cqC.prototype={
$0(){},
$S:0}
B.cqD.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3G,A.dB)
x(B.aHQ,A.dw)
w(A.bT,[B.c5w,B.c5x,B.c5y,B.c5D,B.c5A,B.c5G,B.c5z,B.cqy,B.cqz,B.cqA,B.cqB,B.cqC,B.cqD])
w(A.bx,[B.c5B,B.c5C,B.c5E,B.c5F,B.cqx])
w(A.eo,[B.aKm,B.aNf])
x(B.cqE,A.cQ)})()
A.bq(b.typeUniverse,JSON.parse('{"a3G":{"H":[],"e":[],"f":[]},"aHQ":{"a_":["a3G"]},"aKm":{"H":[],"e":[],"f":[]},"aNf":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{b:x("ax<t<pm>>"),m:x("ax<vE?>"),v:x("ed"),E:x("qG"),S:x("r<pm>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dT<c>"),q:x("dt"),z:x("@"),r:x("v"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bCz=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8R=new A.c4(22,null,null,null)
D.cfr=new A.D("Quem \xe9 para voc\xeas?",null,C.T,null,null,null,null,null,null,null,null)})()};
(a=>{a["fm4NW9rU9OIuAC5H33zuU+8Ia4Q="]=a.current})($__dart_deferred_initializers__);