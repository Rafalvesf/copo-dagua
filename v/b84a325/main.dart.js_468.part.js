((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dnR(d){return new B.a3C(d,null)},
cUq(d){var x,w=C.i.aS(new A.ae(Date.now(),0,!1).cV(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a3C:function a3C(d,e){this.d=d
this.a=e},
aHD:function aHD(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c4T:function c4T(d,e){this.a=d
this.b=e},
c4U:function c4U(d,e){this.a=d
this.b=e},
c4V:function c4V(d){this.a=d},
c4Y:function c4Y(d){this.a=d},
c4Z:function c4Z(d){this.a=d},
c5_:function c5_(d){this.a=d},
c50:function c50(d){this.a=d},
c4X:function c4X(d,e){this.a=d
this.b=e},
c51:function c51(d,e,f){this.a=d
this.b=e
this.c=f},
c52:function c52(d,e){this.a=d
this.b=e},
c4W:function c4W(d,e){this.a=d
this.b=e},
aK6:function aK6(d,e,f){this.e=d
this.f=e
this.a=f},
aN_:function aN_(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
cpO:function cpO(){},
cpH:function cpH(){},
cpI:function cpI(d,e){this.a=d
this.b=e},
cpJ:function cpJ(d,e){this.a=d
this.b=e},
cpK:function cpK(){},
cpL:function cpL(d){this.a=d},
cpM:function cpM(){},
cpN:function cpN(d){this.a=d},
aUu(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aUu=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.T()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aT("review_join_request",A.S(["p_request",d,"p_approve",e],y.N,v),v),$async$aUu)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.R("guests").bh(0,A.S(["group_label",f],v,v)).W("id",u),$async$aUu)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aUu,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[318]
B.a3C.prototype={
P(){return new B.aHD(A.aH(y.N))}}
B.aHD.prototype={
KM(d,e,f){return this.bfL(d,e,f)},
bfL(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KM=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gT()
n=o.a1(0,$.jx().gaX(),y.E)
s.q(new B.c4T(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aUu(d.a,e,r),$async$KM)
case 6:o.ai($.alI().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.di_(n,f),$async$KM)
case 9:case 8:o=d.c
p.a4(A.cA(null,null,null,null,null,C.z,null,A.i(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.q(new B.c4U(s,d))
p.a4(C.ex)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.c4V(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KM,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gT(),f=g.H($.co(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.o4
else{g=g.H($.alI().$1(d),y.b)
g=g.gv(g)
x=g==null?C.o4:g}g=J.dc(x,new B.c4Y(i))
w=A.V(g,g.$ti.i("z.E"))
v=A.eW(new A.a5(w,new B.c4Z(i),A.a8(w).i("a5<1>")))
if(v==null)v=A.eW(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.ln(f.gcu())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fS,A.Ke("Pedidos para entrar",e)],u)
if(t)e.push(new A.dN("Pedidos",h,A.a([A.S7(A.a([new A.im("Ver convidados",new B.c5_(a0),!0,h)],u),C.ju,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aN_(v,i.y,i.z,new B.c50(i),new B.c51(i,v,d),new A.dR(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.H)(g),++s){r=g[s]
l=r.f
k=C.i.aS(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAu()
if((j==null?0:j)>0)l.push("traz "+A.q(r.gAu()))
o.push(new A.i8(new B.aK6(r,44,h),r.c,C.e.a3(l," \xb7 "),new A.of("Ver",new B.c52(i,r),!1,h),!1,h,!1,h))}t.push(new A.dN("Outros pedidos \xb7 "+q,h,A.a([A.fa(o,0)],u),16,h))}C.e.n(e,t)}return A.cM(h,C.cP,A.ol(C.f9,40,e,h,!0,!1),!0,h)}}
B.aK6.prototype={
bc(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.H($.ux().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cF(w.c,this.f,v,!1,!0,null)}}
B.aN_.prototype={
bc(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.H($.ux().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gaz0()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.cpO()
t=e.gAu()
v=A.a0(22)
s=e.c
r=y.p
s=A.a([A.bN(new A.cF(s,76,d?f:x.d,!1,!0,f),f,f),C.X,A.i(s,f,f,f,f,C.bS,C.a5,f,f)],r)
if(w.length!==0)s.push(A.i(w,f,f,f,f,C.W,C.a5,f,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a8z],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8z],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.q(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.aa,A.Q(q,C.w,C.bV,C.m,0,f,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.e3(d,0,A.eT(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bl<1>")
l=0
for(;;){k=new A.bl(d,0,3,p)
k.ck(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bd(C.t,2,C.ah,-1)
k=d[l]
m.push(new A.f_(l*22,f,f,f,f,f,A.D(f,new A.cF(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.O(f,f,new A.dV(j,j,j,j),f,f,f,C.aA),f,f,f,f,f,f,f),f));++l}p=A.aJ(new A.bB(C.aC,f,C.aH,C.z,m,f),32,32+(n-1)*22)
o=A.e3(d,0,A.eT(2,"count",q),o)
o=new A.al(o,new B.cpH(),o.$ti.i("al<aZ.E,c>")).a3(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.P,C.fi,C.aa,A.Q(A.a([p,C.ai,A.a6(A.i("Em comum: "+o+d,2,f,f,f,C.W,f,f,f),1)],r),C.w,C.j,C.m,0,f,f)],r))}d=e.f
if(e.gauP()!=null){q=e.gauP()
q.toString
s.push(new A.kJ(q+" \xb7 "+B.cUq(d),10,f))}else s.push(new A.kJ(B.cUq(d)[0].toUpperCase()+C.f.bD(B.cUq(d),1),10,f))
s.push(C.P)
s.push(D.cez)
s.push(C.X)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBZ[i]
p=q===h
o=p?$.ap:C.ac
p=p?C.t:C.A
d.push(new A.hN(A.fv(C.L,A.i(h,f,f,f,f,new A.M(!0,p,f,f,f,f,14,C.J,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aN,new A.j5(o,f,f,f,C.af),C.er,f,38,f,C.dA,f),new B.cpI(g,h),h,f))}s.push(A.ea(C.bc,d,C.r,C.bj,8,8))
if(!a0)s.push(new A.im("Ver perfil",new B.cpJ(a1,e),!0,f))
s.push(C.aa)
d=g.r
a0=A.a6(new A.im("Recusar",d?new B.cpK():new B.cpL(g),!0,f),1)
s.push(A.Q(A.a([a0,C.ai,A.a6(new A.im("Aceitar",d?new B.cpM():new B.cpN(g),!1,f),1)],r),C.w,C.j,C.m,0,f,f))
return A.D(f,A.B(s,C.I,C.j,C.m,0,C.v),C.r,f,f,new A.O(C.t,f,f,v,f,f,C.y),f,f,C.lo,C.cX,f,f,f)}}
var z=a.updateTypes([])
B.c4T.prototype={
$0(){var x=this.a
x.z=!0
x.x.B(0,this.b.a)
x.w=null},
$S:0}
B.c4U.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c4V.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c4Y.prototype={
$1(d){return!this.a.x.p(0,d.a)},
$S:505}
B.c4Z.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:505}
B.c5_.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0}
B.c50.prototype={
$1(d){var x=this.a
return x.q(new B.c4X(x,d))},
$S:3}
B.c4X.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c51.prototype={
$1(d){var x=this.c
x.toString
return this.a.KM(this.b,d,x)},
$S:10}
B.c52.prototype={
$0(){var x=this.a
return x.q(new B.c4W(x,this.b))},
$S:0}
B.c4W.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.cpO.prototype={
$2(d,e){var x=null
return A.B(A.a([A.i(d,x,x,x,x,C.ap,x,x,x),A.i(e,x,x,x,x,C.b9,x,x,x)],y.p),C.w,C.j,C.m,0,C.v)},
$S:180}
B.cpH.prototype={
$1(d){return C.e.gM(d.b.split(" "))},
$S:1494}
B.cpI.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.cpJ.prototype={
$0(){return A.ai(this.a).ar("/u/"+A.q(this.b.b),null,y.X)},
$S:0}
B.cpK.prototype={
$0(){},
$S:0}
B.cpL.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.cpM.prototype={
$0(){},
$S:0}
B.cpN.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3C,A.dD)
x(B.aHD,A.dy)
w(A.bR,[B.c4T,B.c4U,B.c4V,B.c5_,B.c4X,B.c52,B.c4W,B.cpI,B.cpJ,B.cpK,B.cpL,B.cpM,B.cpN])
w(A.bx,[B.c4Y,B.c4Z,B.c50,B.c51,B.cpH])
w(A.en,[B.aK6,B.aN_])
x(B.cpO,A.cR)})()
A.bq(b.typeUniverse,JSON.parse('{"a3C":{"K":[],"e":[],"f":[]},"aHD":{"a_":["a3C"]},"aK6":{"K":[],"e":[],"f":[]},"aN_":{"K":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{b:x("ax<t<pj>>"),m:x("ax<vD?>"),v:x("ed"),E:x("qD"),S:x("r<pj>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dR<c>"),q:x("ds"),z:x("@"),r:x("v"),X:x("I?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBZ=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8z=new A.c3(22,null,null,null)
D.cez=new A.E("Quem \xe9 para voc\xeas?",null,C.W,null,null,null,null,null,null,null,null)})()};
(a=>{a["7uQFV5msUK1TPfYZupfJcO5Y9WQ="]=a.current})($__dart_deferred_initializers__);