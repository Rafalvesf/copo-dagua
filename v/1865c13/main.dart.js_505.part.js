((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
drV(d){return new B.a3N(d,null)},
cY4(d){var x,w=C.j.aO(new A.ae(Date.now(),0,!1).cu(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a3N:function a3N(d,e){this.d=d
this.a=e},
aHF:function aHF(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c6B:function c6B(d,e){this.a=d
this.b=e},
c6C:function c6C(d,e){this.a=d
this.b=e},
c6D:function c6D(d){this.a=d},
c6G:function c6G(d){this.a=d},
c6H:function c6H(d){this.a=d},
c6I:function c6I(d){this.a=d},
c6J:function c6J(d){this.a=d},
c6F:function c6F(d,e){this.a=d
this.b=e},
c6K:function c6K(d,e,f){this.a=d
this.b=e
this.c=f},
c6L:function c6L(d,e){this.a=d
this.b=e},
c6E:function c6E(d,e){this.a=d
this.b=e},
aKb:function aKb(d,e,f){this.e=d
this.f=e
this.a=f},
aN1:function aN1(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
ct3:function ct3(){},
csX:function csX(){},
csY:function csY(d,e){this.a=d
this.b=e},
csZ:function csZ(d,e){this.a=d
this.b=e},
ct_:function ct_(){},
ct0:function ct0(d){this.a=d},
ct1:function ct1(){},
ct2:function ct2(d){this.a=d},
aUA(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aUA=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.P()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aG("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aUA)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bh(0,A.R(["group_label",f],v,v)).U("id",u),$async$aUA)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aUA,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[320]
B.a3N.prototype={
S(){return new B.aHF(A.aK(y.N))}}
B.aHF.prototype={
KF(d,e,f){return this.beS(d,e,f)},
beS(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KF=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gR()
n=o.a_(0,$.jB().gaX(),y.E)
s.p(new B.c6B(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aUA(d.a,e,r),$async$KF)
case 6:o.aj($.alJ().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dm2(n,f),$async$KF)
case 9:case 8:o=d.c
p.a1(A.bZ(null,null,null,null,null,C.y,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c6C(s,d))
p.a1(C.eB)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c6D(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KF,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gR(),f=g.G($.co(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.o4
else{g=g.G($.alJ().$1(d),y.b)
g=g.gv(g)
x=g==null?C.o4:g}g=J.da(x,new B.c6G(i))
w=A.U(g,g.$ti.i("w.E"))
v=A.eK(new A.a6(w,new B.c6H(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eK(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.G)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.ls(f.gcv())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fu,A.Ek("Pedidos para entrar",e)],u)
if(t)e.push(new A.c1("Pedidos",h,A.a([A.Jz(A.a([new A.he("Ver convidados",new B.c6I(a0),!0,h)],u),C.iK,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aN1(v,i.y,i.z,new B.c6J(i),new B.c6K(i,v,d),new A.ee(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.G)(g),++s){r=g[s]
l=r.f
k=C.j.aO(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAj()
if((j==null?0:j)>0)l.push("traz "+A.p(r.gAj()))
o.push(new A.ik(new B.aKb(r,44,h),r.c,C.e.a0(l," \xb7 "),new A.mJ("Ver",new B.c6L(i,r),!1,h),!1,h,!1,h))}t.push(new A.c1("Outros pedidos \xb7 "+q,h,A.a([A.eR(o,0)],u),16,h))}C.e.n(e,t)}return A.cO(h,C.cQ,A.nG(C.eZ,40,e,h,!0,!1),!0,h)}}
B.aKb.prototype={
b9(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.o5().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cf(w.c,this.f,v,!1,!0,null)}}
B.aN1.prototype={
b9(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.o5().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXm()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.ct3()
t=e.gAj()
v=A.W(22)
s=e.c
r=y.p
s=A.a([A.bN(new A.cf(s,76,d?f:x.d,!1,!0,f),f,f),C.P,A.h(s,f,f,f,f,C.c1,C.a4,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.L,C.a4,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a88],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a88],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.p(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ac,A.N(q,C.v,C.bR,C.l,0,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.dy(d,0,A.es(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bj<1>")
l=0
for(;;){k=new A.bj(d,0,3,p)
k.cd(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bf(C.t,2,C.aj,-1)
k=d[l]
m.push(new A.eE(l*22,f,f,f,f,f,A.x(f,new A.cf(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.I(f,f,new A.dL(j,j,j,j),f,f,f,C.ap),f,f,f,f,f,f,f),f));++l}p=A.aJ(new A.bC(C.aw,f,C.aC,C.y,m,f),32,32+(n-1)*22)
o=A.dy(d,0,A.es(2,"count",q),o)
o=new A.ai(o,new B.csX(),o.$ti.i("ai<aU.E,c>")).a0(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.R,C.iI,C.ac,A.N(A.a([p,C.ab,A.a4(A.h("Em comum: "+o+d,2,f,f,f,C.L,f,f),1)],r),C.v,C.h,C.l,0,f)],r))}d=e.f
if(e.gauv()!=null){q=e.gauv()
q.toString
s.push(new A.h3(q+" \xb7 "+B.cY4(d),10,f))}else s.push(new A.h3(B.cY4(d)[0].toUpperCase()+C.f.bD(B.cY4(d),1),10,f))
s.push(C.R)
s.push(D.cat)
s.push(C.P)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBu[i]
p=q===h
o=p?$.at:C.a3
p=p?C.t:C.z
d.push(new A.i9(A.fF(C.K,A.h(h,f,f,f,f,new A.Q(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f),f,C.aL,new A.k1(o,f,f,f,C.aa),C.eQ,f,38,f,C.cG,f),new B.csY(g,h),h,f))}s.push(A.e3(C.bf,d,C.r,C.bk,8,8))
if(!a0)s.push(new A.he("Ver perfil",new B.csZ(a1,e),!0,f))
s.push(C.ac)
d=g.r
a0=A.a4(new A.he("Recusar",d?new B.ct_():new B.ct0(g),!0,f),1)
s.push(A.N(A.a([a0,C.ab,A.a4(new A.he("Aceitar",d?new B.ct1():new B.ct2(g),!1,f),1)],r),C.v,C.h,C.l,0,f))
return A.x(f,A.z(s,C.E,C.h,C.l),C.r,f,f,new A.I(C.t,f,f,v,f,f,C.x),f,f,C.ni,C.cH,f,f,f)}}
var z=a.updateTypes([])
B.c6B.prototype={
$0(){var x=this.a
x.z=!0
x.x.C(0,this.b.a)
x.w=null},
$S:0}
B.c6C.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c6D.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c6G.prototype={
$1(d){return!this.a.x.t(0,d.a)},
$S:479}
B.c6H.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:479}
B.c6I.prototype={
$0(){return A.ac(this.a).ae(null)},
$S:0}
B.c6J.prototype={
$1(d){var x=this.a
return x.p(new B.c6F(x,d))},
$S:3}
B.c6F.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c6K.prototype={
$1(d){var x=this.c
x.toString
return this.a.KF(this.b,d,x)},
$S:10}
B.c6L.prototype={
$0(){var x=this.a
return x.p(new B.c6E(x,this.b))},
$S:0}
B.c6E.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.ct3.prototype={
$2(d,e){var x=null
return A.z(A.a([A.h(d,x,x,x,x,C.a9,x,x),A.h(e,x,x,x,x,C.be,x,x)],y.p),C.v,C.h,C.l)},
$S:146}
B.csX.prototype={
$1(d){return C.e.gJ(d.b.split(" "))},
$S:402}
B.csY.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.csZ.prototype={
$0(){return A.ac(this.a).ak("/u/"+A.p(this.b.b),null,y.X)},
$S:0}
B.ct_.prototype={
$0(){},
$S:0}
B.ct0.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.ct1.prototype={
$0(){},
$S:0}
B.ct2.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3N,A.dB)
x(B.aHF,A.dv)
w(A.bK,[B.c6B,B.c6C,B.c6D,B.c6I,B.c6F,B.c6L,B.c6E,B.csY,B.csZ,B.ct_,B.ct0,B.ct1,B.ct2])
w(A.bt,[B.c6G,B.c6H,B.c6J,B.c6K,B.csX])
w(A.ev,[B.aKb,B.aN1])
x(B.ct3,A.cJ)})()
A.bq(b.typeUniverse,JSON.parse('{"a3N":{"H":[],"e":[],"f":[]},"aHF":{"a1":["a3N"]},"aKb":{"H":[],"e":[],"f":[]},"aN1":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.y
return{b:x("aw<t<pn>>"),m:x("aw<r2?>"),v:x("eb"),E:x("qA"),S:x("r<pn>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("ee<c>"),q:x("dp"),z:x("@"),r:x("v"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBu=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a88=new A.c4(22,null,null,null)
D.cat=new A.D("Quem \xe9 para voc\xeas?",null,C.L,null,null,null,null,null,null,null)})()};
(a=>{a["PanKy0CZD3u0/8UweeSbvqnKo6k="]=a.current})($__dart_deferred_initializers__);