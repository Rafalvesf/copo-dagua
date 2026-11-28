((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dtv(d){return new B.a46(d,null)},
cZF(d){var x,w=C.j.aP(new A.ac(Date.now(),0,!1).cA(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a46:function a46(d,e){this.d=d
this.a=e},
aIp:function aIp(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c8_:function c8_(d,e){this.a=d
this.b=e},
c80:function c80(d,e){this.a=d
this.b=e},
c81:function c81(d){this.a=d},
c84:function c84(d){this.a=d},
c85:function c85(d){this.a=d},
c86:function c86(d){this.a=d},
c87:function c87(d){this.a=d},
c83:function c83(d,e){this.a=d
this.b=e},
c88:function c88(d,e,f){this.a=d
this.b=e
this.c=f},
c89:function c89(d,e){this.a=d
this.b=e},
c82:function c82(d,e){this.a=d
this.b=e},
aKW:function aKW(d,e,f){this.e=d
this.f=e
this.a=f},
aNM:function aNM(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
cuv:function cuv(){},
cuo:function cuo(){},
cup:function cup(d,e){this.a=d
this.b=e},
cuq:function cuq(d,e){this.a=d
this.b=e},
cur:function cur(){},
cus:function cus(d){this.a=d},
cut:function cut(){},
cuu:function cuu(d){this.a=d},
aVp(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aVp=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.P()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aK("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aVp)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bi(0,A.R(["group_label",f],v,v)).U("id",u),$async$aVp)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aVp,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[322]
B.a46.prototype={
R(){return new B.aIp(A.aL(y.N))}}
B.aIp.prototype={
L4(d,e,f){return this.bgL(d,e,f)},
bgL(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$L4=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a_(0,$.jF().gaX(),y.E)
s.p(new B.c8_(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aVp(d.a,e,r),$async$L4)
case 6:o.aj($.amk().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dnB(n,f),$async$L4)
case 9:case 8:o=d.c
p.a2(A.bZ(null,null,null,null,null,C.y,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c80(s,d))
p.a2(C.eF)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c81(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$L4,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.G($.cr(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.oh
else{g=g.G($.amk().$1(d),y.b)
g=g.gv(g)
x=g==null?C.oh:g}g=J.dc(x,new B.c84(i))
w=A.U(g,g.$ti.i("w.E"))
v=A.eL(new A.a6(w,new B.c85(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eL(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lu(f.gcB())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fv,A.Ex("Pedidos para entrar",e)],u)
if(t)e.push(new A.c5("Pedidos",h,A.a([A.JL(A.a([new A.hu("Ver convidados",new B.c86(a0),!0,h)],u),C.iL,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aNM(v,i.y,i.z,new B.c87(i),new B.c88(i,v,d),new A.dU(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.H)(g),++s){r=g[s]
l=r.f
k=C.j.aP(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAA()
if((j==null?0:j)>0)l.push("traz "+A.q(r.gAA()))
o.push(new A.ir(new B.aKW(r,44,h),r.c,C.e.a1(l," \xb7 "),new A.mP("Ver",new B.c89(i,r),!1,h),!1,h,!1,h))}t.push(new A.c5("Outros pedidos \xb7 "+q,h,A.a([A.eT(o,0)],u),16,h))}C.e.n(e,t)}return A.cQ(h,C.cV,A.nN(C.f2,40,e,h,!0,!1),!0,h)}}
B.aKW.prototype={
ba(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.oa().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cj(w.c,this.f,v,!1,!0,null)}}
B.aNM.prototype={
ba(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.oa().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXX()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.cuv()
t=e.gAA()
v=A.W(22)
s=e.c
r=y.p
s=A.a([A.bM(new A.cj(s,76,d?f:x.d,!1,!0,f),f,f),C.Q,A.h(s,f,f,f,f,C.c1,C.a5,f,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.L,C.a5,f,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a8w],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8w],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.q(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ad,A.O(q,C.v,C.bS,C.l,0,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.dD(d,0,A.ew(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bk<1>")
l=0
for(;;){k=new A.bk(d,0,3,p)
k.cf(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bg(C.t,2,C.ai,-1)
k=d[l]
m.push(new A.eF(l*22,f,f,f,f,f,A.y(f,new A.cj(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.J(f,f,new A.dN(j,j,j,j),f,f,f,C.aq),f,f,f,f,f,f,f),f));++l}p=A.aH(new A.bC(C.ax,f,C.aD,C.y,m,f),32,32+(n-1)*22)
o=A.dD(d,0,A.ew(2,"count",q),o)
o=new A.ak(o,new B.cuo(),o.$ti.i("ak<aV.E,c>")).a1(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.R,C.iJ,C.ad,A.O(A.a([p,C.ac,A.a4(A.h("Em comum: "+o+d,2,f,f,f,C.L,f,f,f),1)],r),C.v,C.h,C.l,0,f)],r))}d=e.f
if(e.gavx()!=null){q=e.gavx()
q.toString
s.push(new A.hg(q+" \xb7 "+B.cZF(d),10,f))}else s.push(new A.hg(B.cZF(d)[0].toUpperCase()+C.f.bF(B.cZF(d),1),10,f))
s.push(C.R)
s.push(D.ceX)
s.push(C.Q)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bC4[i]
p=q===h
o=p?$.au:C.a4
p=p?C.t:C.z
d.push(new A.ih(A.fC(C.K,A.h(h,f,f,f,f,new A.Q(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aO,new A.jc(o,f,f,f,C.ab),C.ey,f,38,f,C.cH,f),new B.cup(g,h),h,f))}s.push(A.e2(C.be,d,C.r,C.bj,8,8))
if(!a0)s.push(new A.hu("Ver perfil",new B.cuq(a1,e),!0,f))
s.push(C.ad)
d=g.r
a0=A.a4(new A.hu("Recusar",d?new B.cur():new B.cus(g),!0,f),1)
s.push(A.O(A.a([a0,C.ac,A.a4(new A.hu("Aceitar",d?new B.cut():new B.cuu(g),!1,f),1)],r),C.v,C.h,C.l,0,f))
return A.y(f,A.z(s,C.E,C.h,C.l),C.r,f,f,new A.J(C.t,f,f,v,f,f,C.x),f,f,C.nt,C.cI,f,f,f)}}
var z=a.updateTypes([])
B.c8_.prototype={
$0(){var x=this.a
x.z=!0
x.x.C(0,this.b.a)
x.w=null},
$S:0}
B.c80.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c81.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c84.prototype={
$1(d){return!this.a.x.q(0,d.a)},
$S:511}
B.c85.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:511}
B.c86.prototype={
$0(){return A.ad(this.a).ae(null)},
$S:0}
B.c87.prototype={
$1(d){var x=this.a
return x.p(new B.c83(x,d))},
$S:3}
B.c83.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c88.prototype={
$1(d){var x=this.c
x.toString
return this.a.L4(this.b,d,x)},
$S:10}
B.c89.prototype={
$0(){var x=this.a
return x.p(new B.c82(x,this.b))},
$S:0}
B.c82.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.cuv.prototype={
$2(d,e){var x=null
return A.z(A.a([A.h(d,x,x,x,x,C.a9,x,x,x),A.h(e,x,x,x,x,C.bf,x,x,x)],y.p),C.v,C.h,C.l)},
$S:150}
B.cuo.prototype={
$1(d){return C.e.gJ(d.b.split(" "))},
$S:478}
B.cup.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.cuq.prototype={
$0(){return A.ad(this.a).ak("/u/"+A.q(this.b.b),null,y.X)},
$S:0}
B.cur.prototype={
$0(){},
$S:0}
B.cus.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.cut.prototype={
$0(){},
$S:0}
B.cuu.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a46,A.dA)
x(B.aIp,A.dv)
w(A.bQ,[B.c8_,B.c80,B.c81,B.c86,B.c83,B.c89,B.c82,B.cup,B.cuq,B.cur,B.cus,B.cut,B.cuu])
w(A.bx,[B.c84,B.c85,B.c87,B.c88,B.cuo])
w(A.ex,[B.aKW,B.aNM])
x(B.cuv,A.cL)})()
A.bu(b.typeUniverse,JSON.parse('{"a46":{"G":[],"e":[],"f":[]},"aIp":{"Y":["a46"]},"aKW":{"G":[],"e":[],"f":[]},"aNM":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.x
return{b:x("az<t<pr>>"),m:x("az<rc?>"),v:x("ee"),E:x("qJ"),S:x("r<pr>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dU<c>"),q:x("dr"),z:x("@"),r:x("v"),X:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bC4=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8w=new A.bY(22,null,null,null)
D.ceX=new A.D("Quem \xe9 para voc\xeas?",null,C.L,null,null,null,null,null,null,null,null)})()};
(a=>{a["V5Jq0A9/GRSffgdCk3l2UeD+KIM="]=a.current})($__dart_deferred_initializers__);