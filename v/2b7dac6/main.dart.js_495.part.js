((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dsn(d){return new B.a45(d,null)},
cYG(d){var x,w=C.j.aP(new A.ac(Date.now(),0,!1).cH(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a45:function a45(d,e){this.d=d
this.a=e},
aIf:function aIf(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c7I:function c7I(d,e){this.a=d
this.b=e},
c7J:function c7J(d,e){this.a=d
this.b=e},
c7K:function c7K(d){this.a=d},
c7N:function c7N(d){this.a=d},
c7O:function c7O(d){this.a=d},
c7P:function c7P(d){this.a=d},
c7Q:function c7Q(d){this.a=d},
c7M:function c7M(d,e){this.a=d
this.b=e},
c7R:function c7R(d,e,f){this.a=d
this.b=e
this.c=f},
c7S:function c7S(d,e){this.a=d
this.b=e},
c7L:function c7L(d,e){this.a=d
this.b=e},
aKN:function aKN(d,e,f){this.e=d
this.f=e
this.a=f},
aND:function aND(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
ctL:function ctL(){},
ctE:function ctE(){},
ctF:function ctF(d,e){this.a=d
this.b=e},
ctG:function ctG(d,e){this.a=d
this.b=e},
ctH:function ctH(){},
ctI:function ctI(d){this.a=d},
ctJ:function ctJ(){},
ctK:function ctK(d){this.a=d},
aVg(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aVg=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.Q()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aK("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aVg)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bj(0,A.R(["group_label",f],v,v)).V("id",u),$async$aVg)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aVg,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[323]
B.a45.prototype={
R(){return new B.aIf(A.aL(y.N))}}
B.aIf.prototype={
L0(d,e,f){return this.bgs(d,e,f)},
bgs(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$L0=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a0(0,$.jE().gaX(),y.E)
s.p(new B.c7I(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aVg(d.a,e,r),$async$L0)
case 6:o.ak($.amf().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dmt(n,f),$async$L0)
case 9:case 8:o=d.c
p.a1(A.c0(null,null,null,null,null,C.y,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c7J(s,d))
p.a1(C.eE)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c7K(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$L0,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.G($.cq(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.of
else{g=g.G($.amf().$1(d),y.b)
g=g.gv(g)
x=g==null?C.of:g}g=J.da(x,new B.c7N(i))
w=A.U(g,g.$ti.i("y.E"))
v=A.eR(new A.a6(w,new B.c7O(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eR(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.ls(f.gcw())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.h1,A.Kq("Pedidos para entrar",e)],u)
if(t)e.push(new A.dx("Pedidos",h,A.a([A.St(A.a([new A.i7("Ver convidados",new B.c7P(a0),!0,h)],u),C.iK,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aND(v,i.y,i.z,new B.c7Q(i),new B.c7R(i,v,d),new A.dU(t,y.O))],u)
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
o.push(new A.hX(new B.aKN(r,44,h),r.c,C.e.a2(l," \xb7 "),new A.nC("Ver",new B.c7S(i,r),!1,h),!1,h,!1,h))}t.push(new A.dx("Outros pedidos \xb7 "+q,h,A.a([A.eV(o,0)],u),16,h))}C.e.n(e,t)}return A.cP(h,C.d1,A.op(C.fc,40,e,h,!0,!1),!0,h)}}
B.aKN.prototype={
bb(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.o4().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.ci(w.c,this.f,v,!1,!0,null)}}
B.aND.prototype={
bb(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.o4().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXP()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.ctL()
t=e.gAz()
v=A.W(22)
s=e.c
r=y.p
s=A.a([A.bL(new A.ci(s,76,d?f:x.d,!1,!0,f),f,f),C.R,A.h(s,f,f,f,f,C.bZ,C.a4,f,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.M,C.a4,f,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a8s],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8s],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.q(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ac,A.O(q,C.v,C.bR,C.l,0,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.dG(d,0,A.ew(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bk<1>")
l=0
for(;;){k=new A.bk(d,0,3,p)
k.ce(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bf(C.t,2,C.ai,-1)
k=d[l]
m.push(new A.eF(l*22,f,f,f,f,f,A.x(f,new A.ci(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.K(f,f,new A.dO(j,j,j,j),f,f,f,C.as),f,f,f,f,f,f,f),f));++l}p=A.aH(new A.bB(C.ax,f,C.aE,C.y,m,f),32,32+(n-1)*22)
o=A.dG(d,0,A.ew(2,"count",q),o)
o=new A.ak(o,new B.ctE(),o.$ti.i("ak<aW.E,c>")).a2(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.Q,C.iH,C.ac,A.O(A.a([p,C.ae,A.a4(A.h("Em comum: "+o+d,2,f,f,f,C.M,f,f,f),1)],r),C.v,C.h,C.l,0,f)],r))}d=e.f
if(e.gavn()!=null){q=e.gavn()
q.toString
s.push(new A.kp(q+" \xb7 "+B.cYG(d),10,f))}else s.push(new A.kp(B.cYG(d)[0].toUpperCase()+C.f.bF(B.cYG(d),1),10,f))
s.push(C.Q)
s.push(D.ceJ)
s.push(C.R)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBO[i]
p=q===h
o=p?$.at:C.a5
p=p?C.t:C.z
d.push(new A.ih(A.fA(C.K,A.h(h,f,f,f,f,new A.P(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aO,new A.j9(o,f,f,f,C.ab),C.ex,f,38,f,C.cH,f),new B.ctF(g,h),h,f))}s.push(A.e_(C.be,d,C.r,C.bl,8,8))
if(!a0)s.push(new A.i7("Ver perfil",new B.ctG(a1,e),!0,f))
s.push(C.ac)
d=g.r
a0=A.a4(new A.i7("Recusar",d?new B.ctH():new B.ctI(g),!0,f),1)
s.push(A.O(A.a([a0,C.ae,A.a4(new A.i7("Aceitar",d?new B.ctJ():new B.ctK(g),!1,f),1)],r),C.v,C.h,C.l,0,f))
return A.x(f,A.A(s,C.E,C.h,C.l),C.r,f,f,new A.K(C.t,f,f,v,f,f,C.x),f,f,C.ls,C.d3,f,f,f)}}
var z=a.updateTypes([])
B.c7I.prototype={
$0(){var x=this.a
x.z=!0
x.x.C(0,this.b.a)
x.w=null},
$S:0}
B.c7J.prototype={
$0(){return this.a.x.M(0,this.b.a)},
$S:0}
B.c7K.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c7N.prototype={
$1(d){return!this.a.x.q(0,d.a)},
$S:509}
B.c7O.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:509}
B.c7P.prototype={
$0(){return A.ae(this.a).ae(null)},
$S:0}
B.c7Q.prototype={
$1(d){var x=this.a
return x.p(new B.c7M(x,d))},
$S:3}
B.c7M.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c7R.prototype={
$1(d){var x=this.c
x.toString
return this.a.L0(this.b,d,x)},
$S:10}
B.c7S.prototype={
$0(){var x=this.a
return x.p(new B.c7L(x,this.b))},
$S:0}
B.c7L.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.ctL.prototype={
$2(d,e){var x=null
return A.A(A.a([A.h(d,x,x,x,x,C.a9,x,x,x),A.h(e,x,x,x,x,C.bd,x,x,x)],y.p),C.v,C.h,C.l)},
$S:152}
B.ctE.prototype={
$1(d){return C.e.gL(d.b.split(" "))},
$S:476}
B.ctF.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.ctG.prototype={
$0(){return A.ae(this.a).am("/u/"+A.q(this.b.b),null,y.X)},
$S:0}
B.ctH.prototype={
$0(){},
$S:0}
B.ctI.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.ctJ.prototype={
$0(){},
$S:0}
B.ctK.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a45,A.dA)
x(B.aIf,A.du)
w(A.bO,[B.c7I,B.c7J,B.c7K,B.c7P,B.c7M,B.c7S,B.c7L,B.ctF,B.ctG,B.ctH,B.ctI,B.ctJ,B.ctK])
w(A.bw,[B.c7N,B.c7O,B.c7Q,B.c7R,B.ctE])
w(A.et,[B.aKN,B.aND])
x(B.ctL,A.cK)})()
A.br(b.typeUniverse,JSON.parse('{"a45":{"G":[],"e":[],"f":[]},"aIf":{"Y":["a45"]},"aKN":{"G":[],"e":[],"f":[]},"aND":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{b:x("az<t<pm>>"),m:x("az<rb?>"),v:x("ec"),E:x("qI"),S:x("r<pm>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dU<c>"),q:x("dq"),z:x("@"),r:x("v"),X:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBO=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8s=new A.c_(22,null,null,null)
D.ceJ=new A.D("Quem \xe9 para voc\xeas?",null,C.M,null,null,null,null,null,null,null,null)})()};
(a=>{a["QmxULDlrEr20cSYo92IAyAE9aWQ="]=a.current})($__dart_deferred_initializers__);