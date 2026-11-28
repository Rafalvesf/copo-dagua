((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dsl(d){return new B.a3Q(d,null)},
cYu(d){var x,w=C.j.aO(new A.ac(Date.now(),0,!1).cs(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a3Q:function a3Q(d,e){this.d=d
this.a=e},
aHI:function aHI(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c6Q:function c6Q(d,e){this.a=d
this.b=e},
c6R:function c6R(d,e){this.a=d
this.b=e},
c6S:function c6S(d){this.a=d},
c6V:function c6V(d){this.a=d},
c6W:function c6W(d){this.a=d},
c6X:function c6X(d){this.a=d},
c6Y:function c6Y(d){this.a=d},
c6U:function c6U(d,e){this.a=d
this.b=e},
c6Z:function c6Z(d,e,f){this.a=d
this.b=e
this.c=f},
c7_:function c7_(d,e){this.a=d
this.b=e},
c6T:function c6T(d,e){this.a=d
this.b=e},
aKe:function aKe(d,e,f){this.e=d
this.f=e
this.a=f},
aN5:function aN5(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
ctp:function ctp(){},
cti:function cti(){},
ctj:function ctj(d,e){this.a=d
this.b=e},
ctk:function ctk(d,e){this.a=d
this.b=e},
ctl:function ctl(){},
ctm:function ctm(d){this.a=d},
ctn:function ctn(){},
cto:function cto(d){this.a=d},
aUF(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aUF=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.Q()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aG("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aUF)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bh(0,A.R(["group_label",f],v,v)).U("id",u),$async$aUF)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aUF,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[321]
B.a3Q.prototype={
S(){return new B.aHI(A.aL(y.N))}}
B.aHI.prototype={
KE(d,e,f){return this.beX(d,e,f)},
beX(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KE=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gR()
n=o.a_(0,$.jC().gaX(),y.E)
s.p(new B.c6Q(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aUF(d.a,e,r),$async$KE)
case 6:o.aj($.alM().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dmt(n,f),$async$KE)
case 9:case 8:o=d.c
p.a0(A.bY(null,null,null,null,null,C.y,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c6R(s,d))
p.a0(C.eB)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c6S(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KE,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gR(),f=g.G($.cp(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.o5
else{g=g.G($.alM().$1(d),y.b)
g=g.gv(g)
x=g==null?C.o5:g}g=J.db(x,new B.c6V(i))
w=A.U(g,g.$ti.i("w.E"))
v=A.eL(new A.a6(w,new B.c6W(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eL(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lt(f.gcv())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fv,A.Ep("Pedidos para entrar",e)],u)
if(t)e.push(new A.c2("Pedidos",h,A.a([A.JD(A.a([new A.hf("Ver convidados",new B.c6X(a0),!0,h)],u),C.iK,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aN5(v,i.y,i.z,new B.c6Y(i),new B.c6Z(i,v,d),new A.ee(t,y.O))],u)
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
o.push(new A.il(new B.aKe(r,44,h),r.c,C.e.a1(l," \xb7 "),new A.mK("Ver",new B.c7_(i,r),!1,h),!1,h,!1,h))}t.push(new A.c2("Outros pedidos \xb7 "+q,h,A.a([A.eR(o,0)],u),16,h))}C.e.n(e,t)}return A.cP(h,C.cP,A.nI(C.eZ,40,e,h,!0,!1),!0,h)}}
B.aKe.prototype={
b9(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.o7().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cg(w.c,this.f,v,!1,!0,null)}}
B.aN5.prototype={
b9(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.o7().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXo()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.ctp()
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
C.e.n(q,A.a([u.$2(""+o,n),D.a89],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a89],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.p(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ac,A.N(q,C.v,C.bR,C.l,0,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
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
m.push(new A.eF(l*22,f,f,f,f,f,A.x(f,new A.cg(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.I(f,f,new A.dM(j,j,j,j),f,f,f,C.ap),f,f,f,f,f,f,f),f));++l}p=A.aK(new A.bC(C.aw,f,C.aC,C.y,m,f),32,32+(n-1)*22)
o=A.dz(d,0,A.et(2,"count",q),o)
o=new A.ai(o,new B.cti(),o.$ti.i("ai<aV.E,c>")).a1(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.R,C.iI,C.ac,A.N(A.a([p,C.ab,A.a4(A.h("Em comum: "+o+d,2,f,f,f,C.L,f,f),1)],r),C.v,C.h,C.l,0,f)],r))}d=e.f
if(e.gauy()!=null){q=e.gauy()
q.toString
s.push(new A.h4(q+" \xb7 "+B.cYu(d),10,f))}else s.push(new A.h4(B.cYu(d)[0].toUpperCase()+C.f.bD(B.cYu(d),1),10,f))
s.push(C.R)
s.push(D.caA)
s.push(C.P)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBx[i]
p=q===h
o=p?$.au:C.a4
p=p?C.t:C.z
d.push(new A.ia(A.fH(C.K,A.h(h,f,f,f,f,new A.P(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f),f,C.aL,new A.k2(o,f,f,f,C.aa),C.eQ,f,38,f,C.cG,f),new B.ctj(g,h),h,f))}s.push(A.e4(C.bf,d,C.r,C.bk,8,8))
if(!a0)s.push(new A.hf("Ver perfil",new B.ctk(a1,e),!0,f))
s.push(C.ac)
d=g.r
a0=A.a4(new A.hf("Recusar",d?new B.ctl():new B.ctm(g),!0,f),1)
s.push(A.N(A.a([a0,C.ab,A.a4(new A.hf("Aceitar",d?new B.ctn():new B.cto(g),!1,f),1)],r),C.v,C.h,C.l,0,f))
return A.x(f,A.z(s,C.E,C.h,C.l),C.r,f,f,new A.I(C.t,f,f,v,f,f,C.x),f,f,C.ni,C.cH,f,f,f)}}
var z=a.updateTypes([])
B.c6Q.prototype={
$0(){var x=this.a
x.z=!0
x.x.C(0,this.b.a)
x.w=null},
$S:0}
B.c6R.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c6S.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c6V.prototype={
$1(d){return!this.a.x.t(0,d.a)},
$S:410}
B.c6W.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:410}
B.c6X.prototype={
$0(){return A.ad(this.a).af(null)},
$S:0}
B.c6Y.prototype={
$1(d){var x=this.a
return x.p(new B.c6U(x,d))},
$S:3}
B.c6U.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c6Z.prototype={
$1(d){var x=this.c
x.toString
return this.a.KE(this.b,d,x)},
$S:10}
B.c7_.prototype={
$0(){var x=this.a
return x.p(new B.c6T(x,this.b))},
$S:0}
B.c6T.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.ctp.prototype={
$2(d,e){var x=null
return A.z(A.a([A.h(d,x,x,x,x,C.a9,x,x),A.h(e,x,x,x,x,C.be,x,x)],y.p),C.v,C.h,C.l)},
$S:148}
B.cti.prototype={
$1(d){return C.e.gJ(d.b.split(" "))},
$S:322}
B.ctj.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.ctk.prototype={
$0(){return A.ad(this.a).ak("/u/"+A.p(this.b.b),null,y.X)},
$S:0}
B.ctl.prototype={
$0(){},
$S:0}
B.ctm.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.ctn.prototype={
$0(){},
$S:0}
B.cto.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3Q,A.dC)
x(B.aHI,A.dw)
w(A.bL,[B.c6Q,B.c6R,B.c6S,B.c6X,B.c6U,B.c7_,B.c6T,B.ctj,B.ctk,B.ctl,B.ctm,B.ctn,B.cto])
w(A.bs,[B.c6V,B.c6W,B.c6Y,B.c6Z,B.cti])
w(A.ew,[B.aKe,B.aN5])
x(B.ctp,A.cK)})()
A.bq(b.typeUniverse,JSON.parse('{"a3Q":{"G":[],"e":[],"f":[]},"aHI":{"a0":["a3Q"]},"aKe":{"G":[],"e":[],"f":[]},"aN5":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.y
return{b:x("ax<t<pp>>"),m:x("ax<r4?>"),v:x("eb"),E:x("qC"),S:x("r<pp>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("ee<c>"),q:x("dl"),z:x("@"),r:x("v"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBx=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a89=new A.c5(22,null,null,null)
D.caA=new A.D("Quem \xe9 para voc\xeas?",null,C.L,null,null,null,null,null,null,null)})()};
(a=>{a["jm4nmOhLRCvo27mnGK+j3Lbkwi8="]=a.current})($__dart_deferred_initializers__);