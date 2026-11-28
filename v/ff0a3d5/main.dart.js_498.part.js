((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
drZ(d){return new B.a43(d,null)},
cYj(d){var x,w=C.j.aP(new A.ac(Date.now(),0,!1).cH(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a43:function a43(d,e){this.d=d
this.a=e},
aIb:function aIb(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c7k:function c7k(d,e){this.a=d
this.b=e},
c7l:function c7l(d,e){this.a=d
this.b=e},
c7m:function c7m(d){this.a=d},
c7p:function c7p(d){this.a=d},
c7q:function c7q(d){this.a=d},
c7r:function c7r(d){this.a=d},
c7s:function c7s(d){this.a=d},
c7o:function c7o(d,e){this.a=d
this.b=e},
c7t:function c7t(d,e,f){this.a=d
this.b=e
this.c=f},
c7u:function c7u(d,e){this.a=d
this.b=e},
c7n:function c7n(d,e){this.a=d
this.b=e},
aKI:function aKI(d,e,f){this.e=d
this.f=e
this.a=f},
aNB:function aNB(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
cto:function cto(){},
cth:function cth(){},
cti:function cti(d,e){this.a=d
this.b=e},
ctj:function ctj(d,e){this.a=d
this.b=e},
ctk:function ctk(){},
ctl:function ctl(d){this.a=d},
ctm:function ctm(){},
ctn:function ctn(d){this.a=d},
aVd(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aVd=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.Q()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aK("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aVd)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bj(0,A.R(["group_label",f],v,v)).V("id",u),$async$aVd)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aVd,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[328]
B.a43.prototype={
R(){return new B.aIb(A.aL(y.N))}}
B.aIb.prototype={
L0(d,e,f){return this.bgp(d,e,f)},
bgp(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$L0=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a0(0,$.jE().gaX(),y.E)
s.p(new B.c7k(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aVd(d.a,e,r),$async$L0)
case 6:o.ak($.amc().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dm4(n,f),$async$L0)
case 9:case 8:o=d.c
p.a2(A.c0(null,null,null,null,null,C.y,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c7l(s,d))
p.a2(C.eE)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c7m(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$L0,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.G($.cr(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.of
else{g=g.G($.amc().$1(d),y.b)
g=g.gv(g)
x=g==null?C.of:g}g=J.da(x,new B.c7p(i))
w=A.U(g,g.$ti.i("B.E"))
v=A.eS(new A.a6(w,new B.c7q(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eS(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lq(f.gcz())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.h2,A.Kq("Pedidos para entrar",e)],u)
if(t)e.push(new A.dR("Pedidos",h,A.a([A.Sq(A.a([new A.io("Ver convidados",new B.c7r(a0),!0,h)],u),C.jE,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aNB(v,i.y,i.z,new B.c7s(i),new B.c7t(i,v,d),new A.dV(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.H)(g),++s){r=g[s]
l=r.f
k=C.j.aP(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAz()
if((j==null?0:j)>0)l.push("traz "+A.q(r.gAz()))
o.push(new A.i8(new B.aKI(r,44,h),r.c,C.e.a1(l," \xb7 "),new A.oh("Ver",new B.c7u(i,r),!1,h),!1,h,!1,h))}t.push(new A.dR("Outros pedidos \xb7 "+q,h,A.a([A.fd(o,0)],u),16,h))}C.e.n(e,t)}return A.cP(h,C.d1,A.on(C.fb,40,e,h,!0,!1),!0,h)}}
B.aKI.prototype={
bc(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.o3().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cq(w.c,this.f,v,!1,!0,null)}}
B.aNB.prototype={
bc(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.o3().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXO()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.cto()
t=e.gAz()
v=A.W(22)
s=e.c
r=y.p
s=A.a([A.bM(new A.cq(s,76,d?f:x.d,!1,!0,f),f,f),C.Q,A.h(s,f,f,f,f,C.bV,C.a5,f,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.N,C.a5,f,f))
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
n=A.dL(d,0,A.eA(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bk<1>")
l=0
for(;;){k=new A.bk(d,0,3,p)
k.ce(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bf(C.t,2,C.aj,-1)
k=d[l]
m.push(new A.eH(l*22,f,f,f,f,f,A.x(f,new A.cq(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.I(f,f,new A.dN(j,j,j,j),f,f,f,C.au),f,f,f,f,f,f,f),f));++l}p=A.aH(new A.bB(C.ax,f,C.aE,C.y,m,f),32,32+(n-1)*22)
o=A.dL(d,0,A.eA(2,"count",q),o)
o=new A.aj(o,new B.cth(),o.$ti.i("aj<aY.E,c>")).a1(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.R,C.iI,C.ad,A.O(A.a([p,C.af,A.a5(A.h("Em comum: "+o+d,2,f,f,f,C.N,f,f,f),1)],r),C.v,C.h,C.l,0,f)],r))}d=e.f
if(e.gavn()!=null){q=e.gavn()
q.toString
s.push(new A.kO(q+" \xb7 "+B.cYj(d),10,f))}else s.push(new A.kO(B.cYj(d)[0].toUpperCase()+C.f.bF(B.cYj(d),1),10,f))
s.push(C.R)
s.push(D.cf2)
s.push(C.Q)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBU[i]
p=q===h
o=p?$.at:C.a6
p=p?C.t:C.z
d.push(new A.hw(A.fB(C.K,A.h(h,f,f,f,f,new A.P(!0,p,f,f,f,f,14,C.E,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aO,new A.j9(o,f,f,f,C.ac),C.ew,f,38,f,C.cH,f),new B.cti(g,h),h,f))}s.push(A.e0(C.be,d,C.r,C.bl,8,8))
if(!a0)s.push(new A.io("Ver perfil",new B.ctj(a1,e),!0,f))
s.push(C.ad)
d=g.r
a0=A.a5(new A.io("Recusar",d?new B.ctk():new B.ctl(g),!0,f),1)
s.push(A.O(A.a([a0,C.af,A.a5(new A.io("Aceitar",d?new B.ctm():new B.ctn(g),!1,f),1)],r),C.v,C.h,C.l,0,f))
return A.x(f,A.A(s,C.F,C.h,C.l),C.r,f,f,new A.I(C.t,f,f,v,f,f,C.x),f,f,C.lu,C.dp,f,f,f)}}
var z=a.updateTypes([])
B.c7k.prototype={
$0(){var x=this.a
x.z=!0
x.x.C(0,this.b.a)
x.w=null},
$S:0}
B.c7l.prototype={
$0(){return this.a.x.M(0,this.b.a)},
$S:0}
B.c7m.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c7p.prototype={
$1(d){return!this.a.x.q(0,d.a)},
$S:524}
B.c7q.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:524}
B.c7r.prototype={
$0(){return A.ah(this.a).ae(null)},
$S:0}
B.c7s.prototype={
$1(d){var x=this.a
return x.p(new B.c7o(x,d))},
$S:3}
B.c7o.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c7t.prototype={
$1(d){var x=this.c
x.toString
return this.a.L0(this.b,d,x)},
$S:10}
B.c7u.prototype={
$0(){var x=this.a
return x.p(new B.c7n(x,this.b))},
$S:0}
B.c7n.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.cto.prototype={
$2(d,e){var x=null
return A.A(A.a([A.h(d,x,x,x,x,C.aa,x,x,x),A.h(e,x,x,x,x,C.bb,x,x,x)],y.p),C.v,C.h,C.l)},
$S:149}
B.cth.prototype={
$1(d){return C.e.gL(d.b.split(" "))},
$S:335}
B.cti.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.ctj.prototype={
$0(){return A.ah(this.a).av("/u/"+A.q(this.b.b),null,y.X)},
$S:0}
B.ctk.prototype={
$0(){},
$S:0}
B.ctl.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.ctm.prototype={
$0(){},
$S:0}
B.ctn.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a43,A.dz)
x(B.aIb,A.du)
w(A.bP,[B.c7k,B.c7l,B.c7m,B.c7r,B.c7o,B.c7u,B.c7n,B.cti,B.ctj,B.ctk,B.ctl,B.ctm,B.ctn])
w(A.bu,[B.c7p,B.c7q,B.c7s,B.c7t,B.cth])
w(A.et,[B.aKI,B.aNB])
x(B.cto,A.cK)})()
A.bn(b.typeUniverse,JSON.parse('{"a43":{"G":[],"e":[],"f":[]},"aIb":{"Y":["a43"]},"aKI":{"G":[],"e":[],"f":[]},"aNB":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{b:x("ay<t<pl>>"),m:x("ay<r9?>"),v:x("ed"),E:x("qG"),S:x("r<pl>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dV<c>"),q:x("dp"),z:x("@"),r:x("v"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBU=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8w=new A.c_(22,null,null,null)
D.cf2=new A.D("Quem \xe9 para voc\xeas?",null,C.N,null,null,null,null,null,null,null,null)})()};
(a=>{a["9RyWY1RPju/1DcGYEm2rE4KhEwQ="]=a.current})($__dart_deferred_initializers__);