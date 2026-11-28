((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dnH(d){return new B.a3C(d,null)},
cUm(d){var x,w=C.i.aS(new A.ae(Date.now(),0,!1).cV(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a3C:function a3C(d,e){this.d=d
this.a=e},
aHB:function aHB(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c4P:function c4P(d,e){this.a=d
this.b=e},
c4Q:function c4Q(d,e){this.a=d
this.b=e},
c4R:function c4R(d){this.a=d},
c4U:function c4U(d){this.a=d},
c4V:function c4V(d){this.a=d},
c4W:function c4W(d){this.a=d},
c4X:function c4X(d){this.a=d},
c4T:function c4T(d,e){this.a=d
this.b=e},
c4Y:function c4Y(d,e,f){this.a=d
this.b=e
this.c=f},
c4Z:function c4Z(d,e){this.a=d
this.b=e},
c4S:function c4S(d,e){this.a=d
this.b=e},
aK5:function aK5(d,e,f){this.e=d
this.f=e
this.a=f},
aMZ:function aMZ(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
cpL:function cpL(){},
cpE:function cpE(){},
cpF:function cpF(d,e){this.a=d
this.b=e},
cpG:function cpG(d,e){this.a=d
this.b=e},
cpH:function cpH(){},
cpI:function cpI(d){this.a=d},
cpJ:function cpJ(){},
cpK:function cpK(d){this.a=d},
aUs(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aUs=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.T()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aT("review_join_request",A.S(["p_request",d,"p_approve",e],y.N,v),v),$async$aUs)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.R("guests").bh(0,A.S(["group_label",f],v,v)).W("id",u),$async$aUs)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aUs,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[315]
B.a3C.prototype={
P(){return new B.aHB(A.aH(y.N))}}
B.aHB.prototype={
KT(d,e,f){return this.bfQ(d,e,f)},
bfQ(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KT=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gT()
n=o.a1(0,$.jx().gaX(),y.E)
s.q(new B.c4P(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aUs(d.a,e,r),$async$KT)
case 6:o.ai($.alF().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dhQ(n,f),$async$KT)
case 9:case 8:o=d.c
p.a4(A.cA(null,null,null,null,null,C.z,null,A.i(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.q(new B.c4Q(s,d))
p.a4(C.ey)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.c4R(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KT,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gT(),f=g.H($.co(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.o3
else{g=g.H($.alF().$1(d),y.b)
g=g.gv(g)
x=g==null?C.o3:g}g=J.dc(x,new B.c4U(i))
w=A.V(g,g.$ti.i("z.E"))
v=A.eV(new A.a5(w,new B.c4V(i),A.a8(w).i("a5<1>")))
if(v==null)v=A.eV(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.K)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lm(f.gcu())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fV,A.Ke("Pedidos para entrar",e)],u)
if(t)e.push(new A.dN("Pedidos",h,A.a([A.Sa(A.a([new A.im("Ver convidados",new B.c4W(a0),!0,h)],u),C.jy,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aMZ(v,i.y,i.z,new B.c4X(i),new B.c4Y(i,v,d),new A.dR(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.K)(g),++s){r=g[s]
l=r.f
k=C.i.aS(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAx()
if((j==null?0:j)>0)l.push("traz "+A.q(r.gAx()))
o.push(new A.i8(new B.aK5(r,44,h),r.c,C.e.a3(l," \xb7 "),new A.og("Ver",new B.c4Z(i,r),!1,h),!1,h,!1,h))}t.push(new A.dN("Outros pedidos \xb7 "+q,h,A.a([A.fa(o,0)],u),16,h))}C.e.n(e,t)}return A.cM(h,C.cP,A.ol(C.f8,40,e,h,!0,!1),!0,h)}}
B.aK5.prototype={
bc(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.H($.ux().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cF(w.c,this.f,v,!1,!0,null)}}
B.aMZ.prototype={
bc(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.H($.ux().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gaz7()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.cpL()
t=e.gAx()
v=A.a0(22)
s=e.c
r=y.p
s=A.a([A.bN(new A.cF(s,76,d?f:x.d,!1,!0,f),f,f),C.X,A.i(s,f,f,f,f,C.c4,C.a5,f,f)],r)
if(w.length!==0)s.push(A.i(w,f,f,f,f,C.W,C.a5,f,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a8B],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8B],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.q(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.aa,A.Q(q,C.w,C.bU,C.m,0,f,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
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
m.push(new A.eZ(l*22,f,f,f,f,f,A.D(f,new A.cF(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.O(f,f,new A.dV(j,j,j,j),f,f,f,C.az),f,f,f,f,f,f,f),f));++l}p=A.aJ(new A.bB(C.aB,f,C.aG,C.z,m,f),32,32+(n-1)*22)
o=A.e3(d,0,A.eT(2,"count",q),o)
o=new A.al(o,new B.cpE(),o.$ti.i("al<aZ.E,c>")).a3(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.P,C.fh,C.aa,A.Q(A.a([p,C.ak,A.a6(A.i("Em comum: "+o+d,2,f,f,f,C.W,f,f,f),1)],r),C.w,C.j,C.m,0,f,f)],r))}d=e.f
if(e.gauW()!=null){q=e.gauW()
q.toString
s.push(new A.kI(q+" \xb7 "+B.cUm(d),10,f))}else s.push(new A.kI(B.cUm(d)[0].toUpperCase()+C.f.bD(B.cUm(d),1),10,f))
s.push(C.P)
s.push(D.cel)
s.push(C.X)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBV[i]
p=q===h
o=p?$.ap:C.ac
p=p?C.t:C.A
d.push(new A.hM(A.fv(C.K,A.i(h,f,f,f,f,new A.M(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aM,new A.j5(o,f,f,f,C.af),C.er,f,38,f,C.dC,f),new B.cpF(g,h),h,f))}s.push(A.e9(C.bc,d,C.r,C.bj,8,8))
if(!a0)s.push(new A.im("Ver perfil",new B.cpG(a1,e),!0,f))
s.push(C.aa)
d=g.r
a0=A.a6(new A.im("Recusar",d?new B.cpH():new B.cpI(g),!0,f),1)
s.push(A.Q(A.a([a0,C.ak,A.a6(new A.im("Aceitar",d?new B.cpJ():new B.cpK(g),!1,f),1)],r),C.w,C.j,C.m,0,f,f))
return A.D(f,A.B(s,C.J,C.j,C.m,0,C.v),C.r,f,f,new A.O(C.t,f,f,v,f,f,C.y),f,f,C.ls,C.cZ,f,f,f)}}
var z=a.updateTypes([])
B.c4P.prototype={
$0(){var x=this.a
x.z=!0
x.x.B(0,this.b.a)
x.w=null},
$S:0}
B.c4Q.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c4R.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c4U.prototype={
$1(d){return!this.a.x.p(0,d.a)},
$S:503}
B.c4V.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:503}
B.c4W.prototype={
$0(){return A.ai(this.a).aj(null)},
$S:0}
B.c4X.prototype={
$1(d){var x=this.a
return x.q(new B.c4T(x,d))},
$S:3}
B.c4T.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c4Y.prototype={
$1(d){var x=this.c
x.toString
return this.a.KT(this.b,d,x)},
$S:10}
B.c4Z.prototype={
$0(){var x=this.a
return x.q(new B.c4S(x,this.b))},
$S:0}
B.c4S.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.cpL.prototype={
$2(d,e){var x=null
return A.B(A.a([A.i(d,x,x,x,x,C.ao,x,x,x),A.i(e,x,x,x,x,C.b9,x,x,x)],y.p),C.w,C.j,C.m,0,C.v)},
$S:181}
B.cpE.prototype={
$1(d){return C.e.gM(d.b.split(" "))},
$S:1492}
B.cpF.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.cpG.prototype={
$0(){return A.ai(this.a).aq("/u/"+A.q(this.b.b),null,y.X)},
$S:0}
B.cpH.prototype={
$0(){},
$S:0}
B.cpI.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.cpJ.prototype={
$0(){},
$S:0}
B.cpK.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3C,A.dD)
x(B.aHB,A.dy)
w(A.bR,[B.c4P,B.c4Q,B.c4R,B.c4W,B.c4T,B.c4Z,B.c4S,B.cpF,B.cpG,B.cpH,B.cpI,B.cpJ,B.cpK])
w(A.bx,[B.c4U,B.c4V,B.c4X,B.c4Y,B.cpE])
w(A.en,[B.aK5,B.aMZ])
x(B.cpL,A.cR)})()
A.br(b.typeUniverse,JSON.parse('{"a3C":{"J":[],"e":[],"f":[]},"aHB":{"a_":["a3C"]},"aK5":{"J":[],"e":[],"f":[]},"aMZ":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{b:x("ax<t<pi>>"),m:x("ax<vD?>"),v:x("ed"),E:x("qC"),S:x("r<pi>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dR<c>"),q:x("ds"),z:x("@"),r:x("v"),X:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBV=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8B=new A.c8(22,null,null,null)
D.cel=new A.E("Quem \xe9 para voc\xeas?",null,C.W,null,null,null,null,null,null,null,null)})()};
(a=>{a["itgxL5pAKq68JzUHcMNZYgao2Iw="]=a.current})($__dart_deferred_initializers__);