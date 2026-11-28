((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dpt(d){return new B.a3Q(d,null)},
cVS(d){var x,w=C.j.aN(new A.ac(Date.now(),0,!1).cK(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a3Q:function a3Q(d,e){this.d=d
this.a=e},
aI6:function aI6(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c5Q:function c5Q(d,e){this.a=d
this.b=e},
c5R:function c5R(d,e){this.a=d
this.b=e},
c5S:function c5S(d){this.a=d},
c5V:function c5V(d){this.a=d},
c5W:function c5W(d){this.a=d},
c5X:function c5X(d){this.a=d},
c5Y:function c5Y(d){this.a=d},
c5U:function c5U(d,e){this.a=d
this.b=e},
c5Z:function c5Z(d,e,f){this.a=d
this.b=e
this.c=f},
c6_:function c6_(d,e){this.a=d
this.b=e},
c5T:function c5T(d,e){this.a=d
this.b=e},
aKD:function aKD(d,e,f){this.e=d
this.f=e
this.a=f},
aNw:function aNw(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
cr7:function cr7(){},
cr0:function cr0(){},
cr1:function cr1(d,e){this.a=d
this.b=e},
cr2:function cr2(d,e){this.a=d
this.b=e},
cr3:function cr3(){},
cr4:function cr4(d){this.a=d},
cr5:function cr5(){},
cr6:function cr6(d){this.a=d},
aV3(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aV3=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.S()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aT("review_join_request",A.T(["p_request",d,"p_approve",e],y.N,v),v),$async$aV3)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.R("guests").bh(0,A.T(["group_label",f],v,v)).X("id",u),$async$aV3)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aV3,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[321]
B.a3Q.prototype={
P(){return new B.aI6(A.aH(y.N))}}
B.aI6.prototype={
KS(d,e,f){return this.bgh(d,e,f)},
bgh(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KS=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a0(0,$.jy().gaW(),y.E)
s.q(new B.c5Q(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aV3(d.a,e,r),$async$KS)
case 6:o.ai($.am6().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.djA(n,f),$async$KS)
case 9:case 8:o=d.c
p.a4(A.cB(null,null,null,null,null,C.z,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.q(new B.c5R(s,d))
p.a4(C.eB)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.c5S(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KS,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.H($.cl(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.od
else{g=g.H($.am6().$1(d),y.b)
g=g.gv(g)
x=g==null?C.od:g}g=J.d5(x,new B.c5V(i))
w=A.U(g,g.$ti.i("z.E"))
v=A.eV(new A.a6(w,new B.c5W(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eV(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.J)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lm(f.gco())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fY,A.Kk("Pedidos para entrar",e)],u)
if(t)e.push(new A.dQ("Pedidos",h,A.a([A.Si(A.a([new A.im("Ver convidados",new B.c5X(a0),!0,h)],u),C.jB,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aNw(v,i.y,i.z,new B.c5Y(i),new B.c5Z(i,v,d),new A.dU(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.J)(g),++s){r=g[s]
l=r.f
k=C.j.aN(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAu()
if((j==null?0:j)>0)l.push("traz "+A.q(r.gAu()))
o.push(new A.i9(new B.aKD(r,44,h),r.c,C.e.a2(l," \xb7 "),new A.oi("Ver",new B.c6_(i,r),!1,h),!1,h,!1,h))}t.push(new A.dQ("Outros pedidos \xb7 "+q,h,A.a([A.fb(o,0)],u),16,h))}C.e.n(e,t)}return A.cO(h,C.cT,A.oo(C.fc,40,e,h,!0,!1),!0,h)}}
B.aKD.prototype={
bc(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.H($.uA().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cv(w.c,this.f,v,!1,!0,null)}}
B.aNw.prototype={
bc(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.H($.uA().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gazf()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.cr7()
t=e.gAu()
v=A.X(22)
s=e.c
r=y.p
s=A.a([A.bO(new A.cv(s,76,d?f:x.d,!1,!0,f),f,f),C.X,A.h(s,f,f,f,f,C.c4,C.a6,f,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.R,C.a6,f,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a8W],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8W],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.q(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ac,A.P(q,C.w,C.bV,C.m,0,f,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.e4(d,0,A.eT(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bm<1>")
l=0
for(;;){k=new A.bm(d,0,3,p)
k.ck(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bc(C.t,2,C.ai,-1)
k=d[l]
m.push(new A.eZ(l*22,f,f,f,f,f,A.A(f,new A.cv(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.M(f,f,new A.dS(j,j,j,j),f,f,f,C.ax),f,f,f,f,f,f,f),f));++l}p=A.aI(new A.bD(C.aA,f,C.aH,C.z,m,f),32,32+(n-1)*22)
o=A.e4(d,0,A.eT(2,"count",q),o)
o=new A.al(o,new B.cr0(),o.$ti.i("al<aZ.E,c>")).a2(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.Q,C.iE,C.ac,A.P(A.a([p,C.ae,A.a4(A.h("Em comum: "+o+d,2,f,f,f,C.R,f,f,f),1)],r),C.w,C.i,C.m,0,f,f)],r))}d=e.f
if(e.gav3()!=null){q=e.gav3()
q.toString
s.push(new A.kL(q+" \xb7 "+B.cVS(d),10,f))}else s.push(new A.kL(B.cVS(d)[0].toUpperCase()+C.f.bF(B.cVS(d),1),10,f))
s.push(C.Q)
s.push(D.cfC)
s.push(C.X)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bCG[i]
p=q===h
o=p?$.ar:C.aa
p=p?C.t:C.A
d.push(new A.hx(A.fv(C.L,A.h(h,f,f,f,f,new A.N(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aN,new A.j6(o,f,f,f,C.ad),C.ev,f,38,f,C.dj,f),new B.cr1(g,h),h,f))}s.push(A.eb(C.bf,d,C.r,C.bn,8,8))
if(!a0)s.push(new A.im("Ver perfil",new B.cr2(a1,e),!0,f))
s.push(C.ac)
d=g.r
a0=A.a4(new A.im("Recusar",d?new B.cr3():new B.cr4(g),!0,f),1)
s.push(A.P(A.a([a0,C.ae,A.a4(new A.im("Aceitar",d?new B.cr5():new B.cr6(g),!1,f),1)],r),C.w,C.i,C.m,0,f,f))
return A.A(f,A.B(s,C.I,C.i,C.m,0,C.v),C.r,f,f,new A.M(C.t,f,f,v,f,f,C.y),f,f,C.lA,C.dk,f,f,f)}}
var z=a.updateTypes([])
B.c5Q.prototype={
$0(){var x=this.a
x.z=!0
x.x.B(0,this.b.a)
x.w=null},
$S:0}
B.c5R.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c5S.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c5V.prototype={
$1(d){return!this.a.x.p(0,d.a)},
$S:508}
B.c5W.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:508}
B.c5X.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0}
B.c5Y.prototype={
$1(d){var x=this.a
return x.q(new B.c5U(x,d))},
$S:3}
B.c5U.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c5Z.prototype={
$1(d){var x=this.c
x.toString
return this.a.KS(this.b,d,x)},
$S:10}
B.c6_.prototype={
$0(){var x=this.a
return x.q(new B.c5T(x,this.b))},
$S:0}
B.c5T.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.cr7.prototype={
$2(d,e){var x=null
return A.B(A.a([A.h(d,x,x,x,x,C.aj,x,x,x),A.h(e,x,x,x,x,C.bc,x,x,x)],y.p),C.w,C.i,C.m,0,C.v)},
$S:143}
B.cr0.prototype={
$1(d){return C.e.gM(d.b.split(" "))},
$S:1497}
B.cr1.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.cr2.prototype={
$0(){return A.ai(this.a).ap("/u/"+A.q(this.b.b),null,y.X)},
$S:0}
B.cr3.prototype={
$0(){},
$S:0}
B.cr4.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.cr5.prototype={
$0(){},
$S:0}
B.cr6.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3Q,A.dB)
x(B.aI6,A.dx)
w(A.bS,[B.c5Q,B.c5R,B.c5S,B.c5X,B.c5U,B.c6_,B.c5T,B.cr1,B.cr2,B.cr3,B.cr4,B.cr5,B.cr6])
w(A.bw,[B.c5V,B.c5W,B.c5Y,B.c5Z,B.cr0])
w(A.ep,[B.aKD,B.aNw])
x(B.cr7,A.cQ)})()
A.bp(b.typeUniverse,JSON.parse('{"a3Q":{"G":[],"e":[],"f":[]},"aI6":{"a_":["a3Q"]},"aKD":{"G":[],"e":[],"f":[]},"aNw":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{b:x("ay<t<pm>>"),m:x("ay<vF?>"),v:x("ee"),E:x("qI"),S:x("r<pm>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dU<c>"),q:x("du"),z:x("@"),r:x("v"),X:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bCG=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8W=new A.c4(22,null,null,null)
D.cfC=new A.C("Quem \xe9 para voc\xeas?",null,C.R,null,null,null,null,null,null,null,null)})()};
(a=>{a["ltYHW5ISJzaMjEIE+mS4PvG5n3I="]=a.current})($__dart_deferred_initializers__);