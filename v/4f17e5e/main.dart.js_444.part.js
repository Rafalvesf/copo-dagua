((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
djt(d){return new B.a2P(d,null)},
cQt(d){var x,w=C.i.aS(new A.af(Date.now(),0,!1).d0(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a2P:function a2P(d,e){this.d=d
this.a=e},
aG6:function aG6(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c1u:function c1u(d,e){this.a=d
this.b=e},
c1v:function c1v(d,e){this.a=d
this.b=e},
c1w:function c1w(d){this.a=d},
c1z:function c1z(d){this.a=d},
c1A:function c1A(d){this.a=d},
c1B:function c1B(d){this.a=d},
c1C:function c1C(d){this.a=d},
c1y:function c1y(d,e){this.a=d
this.b=e},
c1D:function c1D(d,e,f){this.a=d
this.b=e
this.c=f},
c1E:function c1E(d,e){this.a=d
this.b=e},
c1x:function c1x(d,e){this.a=d
this.b=e},
aIA:function aIA(d,e,f){this.e=d
this.f=e
this.a=f},
aLq:function aLq(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
cm6:function cm6(){},
cm_:function cm_(){},
cm0:function cm0(d,e){this.a=d
this.b=e},
cm1:function cm1(d,e){this.a=d
this.b=e},
cm2:function cm2(){},
cm3:function cm3(d){this.a=d},
cm4:function cm4(){},
cm5:function cm5(d){this.a=d},
aSM(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aSM=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.T()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aU("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aSM)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bg(0,A.R(["group_label",f],v,v)).W("id",u),$async$aSM)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aSM,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[46],B)
D=c[277]
B.a2P.prototype={
R(){return new B.aG6(A.aF(y.N))}}
B.aG6.prototype={
Ky(d,e,f){return this.ber(d,e,f)},
ber(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$Ky=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gT()
n=o.a1(0,$.ju().gaV(),y.E)
s.q(new B.c1u(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aSM(d.a,e,r),$async$Ky)
case 6:o.ah($.aks().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.ddQ(n,f),$async$Ky)
case 9:case 8:o=d.c
p.a4(A.cz(null,null,null,null,null,C.z,null,A.i(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.W,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.q(new B.c1v(s,d))
p.a4(C.eo)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.c1w(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Ky,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gT(),f=g.G($.cm(),y.B).b,e=f==null,d=e?h:f.a
if(d==null)x=C.nR
else{g=g.G($.aks().$1(d),y.b)
g=g.gv(g)
x=g==null?C.nR:g}g=J.d7(x,new B.c1z(i))
w=A.W(g,g.$ti.i("y.E"))
v=A.eS(new A.a3(w,new B.c1A(i),A.a8(w).i("a3<1>")))
if(v==null)v=A.eS(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.G)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lj(f.gcu())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fN,A.JO("Pedidos para entrar",e)],u)
if(t)e.push(new A.dM("Pedidos",h,A.a([A.RE(A.a([new A.ij("Ver convidados",new B.c1B(a0),!0,h)],u),C.ll,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aLq(v,i.y,i.z,new B.c1C(i),new B.c1D(i,v,d),new A.dV(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.G)(g),++s){r=g[s]
l=r.f
k=C.i.aS(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAl()
if((j==null?0:j)>0)l.push("traz "+A.q(r.gAl()))
o.push(new A.i4(new B.aIA(r,44,h),r.c,C.e.a3(l," \xb7 "),new A.o6("Ver",new B.c1E(i,r),!1,h),!1,h,!1,h))}t.push(new A.dM("Outros pedidos \xb7 "+q,h,A.a([A.f4(o,0)],u),16,h))}C.e.p(e,t)}return A.cP(h,C.cO,A.ob(C.f4,40,e,h,!0,!1),!0,h)}}
B.aIA.prototype={
bc(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.ul().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cA(w.c,this.f,v,!1,!0,null)}}
B.aLq.prototype={
bc(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.ul().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gayp()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.cm6()
t=e.gAl()
v=A.a2(22)
s=e.c
r=y.p
s=A.a([A.bT(new A.cA(s,76,d?f:x.d,!1,!0,f),f,f),C.Z,A.i(s,f,f,f,f,C.c5,C.a5,f,f)],r)
if(w.length!==0)s.push(A.i(w,f,f,f,f,C.Y,C.a5,f,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.p(q,A.a([u.$2(""+o,n),D.a7D],r))}if(p)C.e.p(q,A.a([u.$2(""+x.ch,"em comum"),D.a7D],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.q(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.p(s,A.a([C.af,A.Q(q,C.x,C.bU,C.p,0,f,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.dY(d,0,A.eP(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bk<1>")
l=0
for(;;){k=new A.bk(d,0,3,p)
k.ck(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bb(C.u,2,C.ae,-1)
k=d[l]
m.push(new A.f7(l*22,f,f,f,f,f,A.B(f,new A.cA(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.O(f,f,new A.dW(j,j,j,j),f,f,f,C.az),f,f,f,f,f,f,f),f));++l}p=A.aO(new A.bK(C.aC,f,C.aH,C.z,m,f),32,32+(n-1)*22)
o=A.dY(d,0,A.eP(2,"count",q),o)
o=new A.am(o,new B.cm_(),o.$ti.i("am<b1.E,c>")).a3(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.p(s,A.a([C.R,C.ji,C.af,A.Q(A.a([p,C.al,A.a6(A.i("Em comum: "+o+d,2,f,f,f,C.Y,f,f,f),1)],r),C.x,C.j,C.p,0,f,f)],r))}d=e.f
if(e.gauf()!=null){q=e.gauf()
q.toString
s.push(new A.l0(q+" \xb7 "+B.cQt(d),10,f))}else s.push(new A.l0(B.cQt(d)[0].toUpperCase()+C.f.bD(B.cQt(d),1),10,f))
s.push(C.R)
s.push(D.cb0)
s.push(C.Z)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bA3[i]
p=q===h
o=p?$.ap:C.aa
p=p?C.u:C.A
d.push(new A.hH(A.fn(C.K,A.i(h,f,f,f,f,new A.M(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aN,new A.j3(o,f,f,f,C.ah),C.ei,f,38,f,C.dA,f),new B.cm0(g,h),h,f))}s.push(A.em(C.be,d,C.r,C.bm,8,8))
if(!a0)s.push(new A.ij("Ver perfil",new B.cm1(a1,e),!0,f))
s.push(C.af)
d=g.r
a0=A.a6(new A.ij("Recusar",d?new B.cm2():new B.cm3(g),!0,f),1)
s.push(A.Q(A.a([a0,C.al,A.a6(new A.ij("Aceitar",d?new B.cm4():new B.cm5(g),!1,f),1)],r),C.x,C.j,C.p,0,f,f))
return A.B(f,A.C(s,C.J,C.j,C.p,0,C.v),C.r,f,f,new A.O(C.u,f,f,v,f,f,C.y),f,f,C.n7,C.df,f,f,f)}}
var z=a.updateTypes([])
B.c1u.prototype={
$0(){var x=this.a
x.z=!0
x.x.B(0,this.b.a)
x.w=null},
$S:0}
B.c1v.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c1w.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c1z.prototype={
$1(d){return!this.a.x.n(0,d.a)},
$S:304}
B.c1A.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:304}
B.c1B.prototype={
$0(){return A.aj(this.a).ak(null)},
$S:0}
B.c1C.prototype={
$1(d){var x=this.a
return x.q(new B.c1y(x,d))},
$S:3}
B.c1y.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c1D.prototype={
$1(d){var x=this.c
x.toString
return this.a.Ky(this.b,d,x)},
$S:10}
B.c1E.prototype={
$0(){var x=this.a
return x.q(new B.c1x(x,this.b))},
$S:0}
B.c1x.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.cm6.prototype={
$2(d,e){var x=null
return A.C(A.a([A.i(d,x,x,x,x,C.aq,x,x,x),A.i(e,x,x,x,x,C.b9,x,x,x)],y.p),C.x,C.j,C.p,0,C.v)},
$S:176}
B.cm_.prototype={
$1(d){return C.e.gM(d.b.split(" "))},
$S:1466}
B.cm0.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.cm1.prototype={
$0(){return A.aj(this.a).az("/u/"+A.q(this.b.b),null,y.X)},
$S:0}
B.cm2.prototype={
$0(){},
$S:0}
B.cm3.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.cm4.prototype={
$0(){},
$S:0}
B.cm5.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a2P,A.dD)
x(B.aG6,A.dv)
w(A.bR,[B.c1u,B.c1v,B.c1w,B.c1B,B.c1y,B.c1E,B.c1x,B.cm0,B.cm1,B.cm2,B.cm3,B.cm4,B.cm5])
w(A.bx,[B.c1z,B.c1A,B.c1C,B.c1D,B.cm_])
w(A.eo,[B.aIA,B.aLq])
x(B.cm6,A.cS)})()
A.bw(b.typeUniverse,JSON.parse('{"a2P":{"I":[],"e":[],"f":[]},"aG6":{"a1":["a2P"]},"aIA":{"I":[],"e":[],"f":[]},"aLq":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.x
return{b:x("ax<r<p7>>"),m:x("ax<vp?>"),E:x("qq"),S:x("t<p7>"),s:x("t<c>"),p:x("t<e>"),N:x("c"),O:x("dV<c>"),B:x("ea"),q:x("dA"),z:x("@"),r:x("v"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bA3=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a7D=new A.c7(22,null,null,null)
D.cb0=new A.D("Quem \xe9 para voc\xeas?",null,C.Y,null,null,null,null,null,null,null,null)})()};
(a=>{a["B31RIxvvmowQMf4cZO5VJUN47tI="]=a.current})($__dart_deferred_initializers__);