((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
djT(d){return new B.a2Y(d,null)},
cQQ(d){var x,w=C.i.aS(new A.af(Date.now(),0,!1).d0(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a2Y:function a2Y(d,e){this.d=d
this.a=e},
aGm:function aGm(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c2c:function c2c(d,e){this.a=d
this.b=e},
c2d:function c2d(d,e){this.a=d
this.b=e},
c2e:function c2e(d){this.a=d},
c2h:function c2h(d){this.a=d},
c2i:function c2i(d){this.a=d},
c2j:function c2j(d){this.a=d},
c2k:function c2k(d){this.a=d},
c2g:function c2g(d,e){this.a=d
this.b=e},
c2l:function c2l(d,e,f){this.a=d
this.b=e
this.c=f},
c2m:function c2m(d,e){this.a=d
this.b=e},
c2f:function c2f(d,e){this.a=d
this.b=e},
aIQ:function aIQ(d,e,f){this.e=d
this.f=e
this.a=f},
aLG:function aLG(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
cmP:function cmP(){},
cmI:function cmI(){},
cmJ:function cmJ(d,e){this.a=d
this.b=e},
cmK:function cmK(d,e){this.a=d
this.b=e},
cmL:function cmL(){},
cmM:function cmM(d){this.a=d},
cmN:function cmN(){},
cmO:function cmO(d){this.a=d},
aT0(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aT0=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.T()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aU("review_join_request",A.S(["p_request",d,"p_approve",e],y.N,v),v),$async$aT0)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bg(0,A.S(["group_label",f],v,v)).W("id",u),$async$aT0)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aT0,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[46],B)
D=c[303]
B.a2Y.prototype={
R(){return new B.aGm(A.aF(y.N))}}
B.aGm.prototype={
KA(d,e,f){return this.bev(d,e,f)},
bev(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KA=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gT()
n=o.a1(0,$.jv().gaV(),y.E)
s.q(new B.c2c(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aT0(d.a,e,r),$async$KA)
case 6:o.ah($.akD().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dec(n,f),$async$KA)
case 9:case 8:o=d.c
p.a4(A.cz(null,null,null,null,null,C.z,null,A.i(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.W,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.q(new B.c2d(s,d))
p.a4(C.eq)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.c2e(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KA,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gT(),f=g.G($.cm(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.nR
else{g=g.G($.akD().$1(d),y.b)
g=g.gv(g)
x=g==null?C.nR:g}g=J.d7(x,new B.c2h(i))
w=A.W(g,g.$ti.i("z.E"))
v=A.eS(new A.a3(w,new B.c2i(i),A.a8(w).i("a3<1>")))
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
e=A.a([C.fP,A.JS("Pedidos para entrar",e)],u)
if(t)e.push(new A.dM("Pedidos",h,A.a([A.RL(A.a([new A.ij("Ver convidados",new B.c2j(a0),!0,h)],u),C.lo,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aLG(v,i.y,i.z,new B.c2k(i),new B.c2l(i,v,d),new A.dR(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.G)(g),++s){r=g[s]
l=r.f
k=C.i.aS(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAm()
if((j==null?0:j)>0)l.push("traz "+A.q(r.gAm()))
o.push(new A.i4(new B.aIQ(r,44,h),r.c,C.e.a3(l," \xb7 "),new A.o7("Ver",new B.c2m(i,r),!1,h),!1,h,!1,h))}t.push(new A.dM("Outros pedidos \xb7 "+q,h,A.a([A.f5(o,0)],u),16,h))}C.e.p(e,t)}return A.cP(h,C.cO,A.oc(C.f5,40,e,h,!0,!1),!0,h)}}
B.aIQ.prototype={
bc(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.uo().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cA(w.c,this.f,v,!1,!0,null)}}
B.aLG.prototype={
bc(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.uo().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gayr()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.cmP()
t=e.gAm()
v=A.a2(22)
s=e.c
r=y.p
s=A.a([A.bV(new A.cA(s,76,d?f:x.d,!1,!0,f),f,f),C.X,A.i(s,f,f,f,f,C.c4,C.a5,f,f)],r)
if(w.length!==0)s.push(A.i(w,f,f,f,f,C.Z,C.a5,f,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.p(q,A.a([u.$2(""+o,n),D.a7J],r))}if(p)C.e.p(q,A.a([u.$2(""+x.ch,"em comum"),D.a7J],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.q(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.p(s,A.a([C.ae,A.R(q,C.x,C.bT,C.o,0,f,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.e_(d,0,A.eP(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bk<1>")
l=0
for(;;){k=new A.bk(d,0,3,p)
k.ck(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bb(C.u,2,C.af,-1)
k=d[l]
m.push(new A.f0(l*22,f,f,f,f,f,A.C(f,new A.cA(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.O(f,f,new A.dY(j,j,j,j),f,f,f,C.az),f,f,f,f,f,f,f),f));++l}p=A.aO(new A.bH(C.aB,f,C.aH,C.z,m,f),32,32+(n-1)*22)
o=A.e_(d,0,A.eP(2,"count",q),o)
o=new A.am(o,new B.cmI(),o.$ti.i("am<b1.E,c>")).a3(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.p(s,A.a([C.Q,C.jj,C.ae,A.R(A.a([p,C.ak,A.a6(A.i("Em comum: "+o+d,2,f,f,f,C.Z,f,f,f),1)],r),C.x,C.j,C.o,0,f,f)],r))}d=e.f
if(e.gauh()!=null){q=e.gauh()
q.toString
s.push(new A.kF(q+" \xb7 "+B.cQQ(d),10,f))}else s.push(new A.kF(B.cQQ(d)[0].toUpperCase()+C.f.bD(B.cQQ(d),1),10,f))
s.push(C.Q)
s.push(D.cbQ)
s.push(C.X)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bAm[i]
p=q===h
o=p?$.ap:C.a8
p=p?C.u:C.A
d.push(new A.hH(A.fn(C.K,A.i(h,f,f,f,f,new A.M(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aN,new A.j3(o,f,f,f,C.ah),C.ek,f,38,f,C.dA,f),new B.cmJ(g,h),h,f))}s.push(A.eb(C.bc,d,C.r,C.bl,8,8))
if(!a0)s.push(new A.ij("Ver perfil",new B.cmK(a1,e),!0,f))
s.push(C.ae)
d=g.r
a0=A.a6(new A.ij("Recusar",d?new B.cmL():new B.cmM(g),!0,f),1)
s.push(A.R(A.a([a0,C.ak,A.a6(new A.ij("Aceitar",d?new B.cmN():new B.cmO(g),!1,f),1)],r),C.x,C.j,C.o,0,f,f))
return A.C(f,A.B(s,C.J,C.j,C.o,0,C.v),C.r,f,f,new A.O(C.u,f,f,v,f,f,C.y),f,f,C.lk,C.df,f,f,f)}}
var z=a.updateTypes([])
B.c2c.prototype={
$0(){var x=this.a
x.z=!0
x.x.B(0,this.b.a)
x.w=null},
$S:0}
B.c2d.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c2e.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c2h.prototype={
$1(d){return!this.a.x.n(0,d.a)},
$S:498}
B.c2i.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:498}
B.c2j.prototype={
$0(){return A.aj(this.a).ak(null)},
$S:0}
B.c2k.prototype={
$1(d){var x=this.a
return x.q(new B.c2g(x,d))},
$S:3}
B.c2g.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c2l.prototype={
$1(d){var x=this.c
x.toString
return this.a.KA(this.b,d,x)},
$S:10}
B.c2m.prototype={
$0(){var x=this.a
return x.q(new B.c2f(x,this.b))},
$S:0}
B.c2f.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.cmP.prototype={
$2(d,e){var x=null
return A.B(A.a([A.i(d,x,x,x,x,C.ap,x,x,x),A.i(e,x,x,x,x,C.b9,x,x,x)],y.p),C.x,C.j,C.o,0,C.v)},
$S:179}
B.cmI.prototype={
$1(d){return C.e.gM(d.b.split(" "))},
$S:1466}
B.cmJ.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.cmK.prototype={
$0(){return A.aj(this.a).az("/u/"+A.q(this.b.b),null,y.X)},
$S:0}
B.cmL.prototype={
$0(){},
$S:0}
B.cmM.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.cmN.prototype={
$0(){},
$S:0}
B.cmO.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a2Y,A.dD)
x(B.aGm,A.dv)
w(A.bR,[B.c2c,B.c2d,B.c2e,B.c2j,B.c2g,B.c2m,B.c2f,B.cmJ,B.cmK,B.cmL,B.cmM,B.cmN,B.cmO])
w(A.bx,[B.c2h,B.c2i,B.c2k,B.c2l,B.cmI])
w(A.eo,[B.aIQ,B.aLG])
x(B.cmP,A.cS)})()
A.bu(b.typeUniverse,JSON.parse('{"a2Y":{"I":[],"e":[],"f":[]},"aGm":{"a1":["a2Y"]},"aIQ":{"I":[],"e":[],"f":[]},"aLG":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{b:x("ax<r<p8>>"),m:x("ax<vt?>"),v:x("e8"),E:x("qr"),S:x("t<p8>"),s:x("t<c>"),p:x("t<e>"),N:x("c"),O:x("dR<c>"),q:x("dA"),z:x("@"),r:x("v"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bAm=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a7J=new A.c3(22,null,null,null)
D.cbQ=new A.D("Quem \xe9 para voc\xeas?",null,C.Z,null,null,null,null,null,null,null,null)})()};
(a=>{a["A+7ngioPoeO+DVg22SGYZ2ttL14="]=a.current})($__dart_deferred_initializers__);