((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
drE(d){return new B.a3N(d,null)},
cXP(d){var x,w=C.j.aO(new A.ae(Date.now(),0,!1).cu(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a3N:function a3N(d,e){this.d=d
this.a=e},
aHC:function aHC(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c6s:function c6s(d,e){this.a=d
this.b=e},
c6t:function c6t(d,e){this.a=d
this.b=e},
c6u:function c6u(d){this.a=d},
c6x:function c6x(d){this.a=d},
c6y:function c6y(d){this.a=d},
c6z:function c6z(d){this.a=d},
c6A:function c6A(d){this.a=d},
c6w:function c6w(d,e){this.a=d
this.b=e},
c6B:function c6B(d,e,f){this.a=d
this.b=e
this.c=f},
c6C:function c6C(d,e){this.a=d
this.b=e},
c6v:function c6v(d,e){this.a=d
this.b=e},
aK8:function aK8(d,e,f){this.e=d
this.f=e
this.a=f},
aMZ:function aMZ(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
csT:function csT(){},
csM:function csM(){},
csN:function csN(d,e){this.a=d
this.b=e},
csO:function csO(d,e){this.a=d
this.b=e},
csP:function csP(){},
csQ:function csQ(d){this.a=d},
csR:function csR(){},
csS:function csS(d){this.a=d},
aUx(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aUx=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.P()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aG("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aUx)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bg(0,A.R(["group_label",f],v,v)).U("id",u),$async$aUx)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aUx,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[318]
B.a3N.prototype={
S(){return new B.aHC(A.aK(y.N))}}
B.aHC.prototype={
KF(d,e,f){return this.beS(d,e,f)},
beS(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KF=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gR()
n=o.a_(0,$.jB().gaX(),y.E)
s.p(new B.c6s(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aUx(d.a,e,r),$async$KF)
case 6:o.aj($.alI().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dlM(n,f),$async$KF)
case 9:case 8:o=d.c
p.a1(A.bZ(null,null,null,null,null,C.y,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c6t(s,d))
p.a1(C.eC)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c6u(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KF,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gR(),f=g.G($.co(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.o5
else{g=g.G($.alI().$1(d),y.b)
g=g.gv(g)
x=g==null?C.o5:g}g=J.da(x,new B.c6x(i))
w=A.U(g,g.$ti.i("w.E"))
v=A.eK(new A.a6(w,new B.c6y(i),A.a8(w).i("a6<1>")))
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
e=A.a([C.ft,A.Ek("Pedidos para entrar",e)],u)
if(t)e.push(new A.c1("Pedidos",h,A.a([A.Jz(A.a([new A.he("Ver convidados",new B.c6z(a0),!0,h)],u),C.iK,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aMZ(v,i.y,i.z,new B.c6A(i),new B.c6B(i,v,d),new A.ee(t,y.O))],u)
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
o.push(new A.ik(new B.aK8(r,44,h),r.c,C.e.a0(l," \xb7 "),new A.mK("Ver",new B.c6C(i,r),!1,h),!1,h,!1,h))}t.push(new A.c1("Outros pedidos \xb7 "+q,h,A.a([A.eR(o,0)],u),16,h))}C.e.n(e,t)}return A.cO(h,C.cR,A.nG(C.eZ,40,e,h,!0,!1),!0,h)}}
B.aK8.prototype={
b9(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.o4().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cf(w.c,this.f,v,!1,!0,null)}}
B.aMZ.prototype={
b9(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.o4().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXk()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.csT()
t=e.gAj()
v=A.W(22)
s=e.c
r=y.p
s=A.a([A.bM(new A.cf(s,76,d?f:x.d,!1,!0,f),f,f),C.P,A.h(s,f,f,f,f,C.c1,C.a4,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.L,C.a4,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a88],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a88],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.p(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ac,A.O(q,C.v,C.bX,C.l,0,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.dy(d,0,A.es(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bi<1>")
l=0
for(;;){k=new A.bi(d,0,3,p)
k.cd(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bf(C.t,2,C.aj,-1)
k=d[l]
m.push(new A.eE(l*22,f,f,f,f,f,A.x(f,new A.cf(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.I(f,f,new A.dL(j,j,j,j),f,f,f,C.ap),f,f,f,f,f,f,f),f));++l}p=A.aJ(new A.bC(C.aw,f,C.aC,C.y,m,f),32,32+(n-1)*22)
o=A.dy(d,0,A.es(2,"count",q),o)
o=new A.ai(o,new B.csM(),o.$ti.i("ai<aU.E,c>")).a0(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.R,C.iI,C.ac,A.O(A.a([p,C.ab,A.a4(A.h("Em comum: "+o+d,2,f,f,f,C.L,f,f),1)],r),C.v,C.h,C.l,0,f)],r))}d=e.f
if(e.gauv()!=null){q=e.gauv()
q.toString
s.push(new A.h2(q+" \xb7 "+B.cXP(d),10,f))}else s.push(new A.h2(B.cXP(d)[0].toUpperCase()+C.f.bD(B.cXP(d),1),10,f))
s.push(C.R)
s.push(D.cau)
s.push(C.P)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBt[i]
p=q===h
o=p?$.at:C.a3
p=p?C.t:C.z
d.push(new A.i9(A.fF(C.K,A.h(h,f,f,f,f,new A.Q(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f),f,C.aL,new A.k1(o,f,f,f,C.aa),C.ew,f,38,f,C.cG,f),new B.csN(g,h),h,f))}s.push(A.e_(C.be,d,C.r,C.bk,8,8))
if(!a0)s.push(new A.he("Ver perfil",new B.csO(a1,e),!0,f))
s.push(C.ac)
d=g.r
a0=A.a4(new A.he("Recusar",d?new B.csP():new B.csQ(g),!0,f),1)
s.push(A.O(A.a([a0,C.ab,A.a4(new A.he("Aceitar",d?new B.csR():new B.csS(g),!1,f),1)],r),C.v,C.h,C.l,0,f))
return A.x(f,A.y(s,C.E,C.h,C.l),C.r,f,f,new A.I(C.t,f,f,v,f,f,C.x),f,f,C.nh,C.cH,f,f,f)}}
var z=a.updateTypes([])
B.c6s.prototype={
$0(){var x=this.a
x.z=!0
x.x.C(0,this.b.a)
x.w=null},
$S:0}
B.c6t.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c6u.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c6x.prototype={
$1(d){return!this.a.x.t(0,d.a)},
$S:479}
B.c6y.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:479}
B.c6z.prototype={
$0(){return A.ac(this.a).ae(null)},
$S:0}
B.c6A.prototype={
$1(d){var x=this.a
return x.p(new B.c6w(x,d))},
$S:3}
B.c6w.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c6B.prototype={
$1(d){var x=this.c
x.toString
return this.a.KF(this.b,d,x)},
$S:10}
B.c6C.prototype={
$0(){var x=this.a
return x.p(new B.c6v(x,this.b))},
$S:0}
B.c6v.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.csT.prototype={
$2(d,e){var x=null
return A.y(A.a([A.h(d,x,x,x,x,C.a9,x,x),A.h(e,x,x,x,x,C.bf,x,x)],y.p),C.v,C.h,C.l)},
$S:146}
B.csM.prototype={
$1(d){return C.e.gJ(d.b.split(" "))},
$S:402}
B.csN.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.csO.prototype={
$0(){return A.ac(this.a).ak("/u/"+A.p(this.b.b),null,y.X)},
$S:0}
B.csP.prototype={
$0(){},
$S:0}
B.csQ.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.csR.prototype={
$0(){},
$S:0}
B.csS.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3N,A.dA)
x(B.aHC,A.dv)
w(A.bN,[B.c6s,B.c6t,B.c6u,B.c6z,B.c6w,B.c6C,B.c6v,B.csN,B.csO,B.csP,B.csQ,B.csR,B.csS])
w(A.bv,[B.c6x,B.c6y,B.c6A,B.c6B,B.csM])
w(A.ev,[B.aK8,B.aMZ])
x(B.csT,A.cJ)})()
A.bt(b.typeUniverse,JSON.parse('{"a3N":{"H":[],"e":[],"f":[]},"aHC":{"a1":["a3N"]},"aK8":{"H":[],"e":[],"f":[]},"aMZ":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{b:x("aw<t<pn>>"),m:x("aw<r3?>"),v:x("ea"),E:x("qB"),S:x("r<pn>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("ee<c>"),q:x("dp"),z:x("@"),r:x("v"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBt=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a88=new A.c4(22,null,null,null)
D.cau=new A.D("Quem \xe9 para voc\xeas?",null,C.L,null,null,null,null,null,null,null)})()};
(a=>{a["4AB7gMZ1lYDAc+DVcse2AXKLebU="]=a.current})($__dart_deferred_initializers__);