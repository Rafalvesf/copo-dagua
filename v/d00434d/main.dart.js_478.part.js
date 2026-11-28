((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dpD(d){return new B.a3R(d,null)},
cW1(d){var x,w=C.j.aN(new A.ac(Date.now(),0,!1).cK(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a3R:function a3R(d,e){this.d=d
this.a=e},
aI8:function aI8(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c5Y:function c5Y(d,e){this.a=d
this.b=e},
c5Z:function c5Z(d,e){this.a=d
this.b=e},
c6_:function c6_(d){this.a=d},
c62:function c62(d){this.a=d},
c63:function c63(d){this.a=d},
c64:function c64(d){this.a=d},
c65:function c65(d){this.a=d},
c61:function c61(d,e){this.a=d
this.b=e},
c66:function c66(d,e,f){this.a=d
this.b=e
this.c=f},
c67:function c67(d,e){this.a=d
this.b=e},
c60:function c60(d,e){this.a=d
this.b=e},
aKF:function aKF(d,e,f){this.e=d
this.f=e
this.a=f},
aNy:function aNy(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
crg:function crg(){},
cr9:function cr9(){},
cra:function cra(d,e){this.a=d
this.b=e},
crb:function crb(d,e){this.a=d
this.b=e},
crc:function crc(){},
crd:function crd(d){this.a=d},
cre:function cre(){},
crf:function crf(d){this.a=d},
aV5(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aV5=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.T()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aS("review_join_request",A.S(["p_request",d,"p_approve",e],y.N,v),v),$async$aV5)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.R("guests").bh(0,A.S(["group_label",f],v,v)).X("id",u),$async$aV5)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aV5,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[321]
B.a3R.prototype={
P(){return new B.aI8(A.aH(y.N))}}
B.aI8.prototype={
KV(d,e,f){return this.bgm(d,e,f)},
bgm(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KV=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a0(0,$.jy().gaX(),y.E)
s.p(new B.c5Y(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aV5(d.a,e,r),$async$KV)
case 6:o.aj($.am7().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.djK(n,f),$async$KV)
case 9:case 8:o=d.c
p.a4(A.cx(null,null,null,null,null,C.z,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c5Z(s,d))
p.a4(C.eB)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c6_(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KV,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.H($.cl(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.od
else{g=g.H($.am7().$1(d),y.b)
g=g.gv(g)
x=g==null?C.od:g}g=J.d2(x,new B.c62(i))
w=A.U(g,g.$ti.i("z.E"))
v=A.eQ(new A.a6(w,new B.c63(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eQ(w)
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
if(t)e.push(new A.dQ("Pedidos",h,A.a([A.Sj(A.a([new A.io("Ver convidados",new B.c64(a0),!0,h)],u),C.jB,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aNy(v,i.y,i.z,new B.c65(i),new B.c66(i,v,d),new A.dU(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.J)(g),++s){r=g[s]
l=r.f
k=C.j.aN(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAv()
if((j==null?0:j)>0)l.push("traz "+A.q(r.gAv()))
o.push(new A.i9(new B.aKF(r,44,h),r.c,C.e.a2(l," \xb7 "),new A.oi("Ver",new B.c67(i,r),!1,h),!1,h,!1,h))}t.push(new A.dQ("Outros pedidos \xb7 "+q,h,A.a([A.fb(o,0)],u),16,h))}C.e.n(e,t)}return A.cO(h,C.cT,A.oo(C.fc,40,e,h,!0,!1),!0,h)}}
B.aKF.prototype={
bc(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.H($.uB().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cv(w.c,this.f,v,!1,!0,null)}}
B.aNy.prototype={
bc(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.H($.uB().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gazi()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.crg()
t=e.gAv()
v=A.X(22)
s=e.c
r=y.p
s=A.a([A.bO(new A.cv(s,76,d?f:x.d,!1,!0,f),f,f),C.X,A.h(s,f,f,f,f,C.c4,C.a6,f,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.R,C.a6,f,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a8Y],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8Y],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.q(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ac,A.P(q,C.w,C.bV,C.m,0,f,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.e4(d,0,A.eU(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bm<1>")
l=0
for(;;){k=new A.bm(d,0,3,p)
k.ck(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bc(C.t,2,C.ai,-1)
k=d[l]
m.push(new A.eZ(l*22,f,f,f,f,f,A.A(f,new A.cv(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.M(f,f,new A.dS(j,j,j,j),f,f,f,C.ax),f,f,f,f,f,f,f),f));++l}p=A.aI(new A.bD(C.aA,f,C.aH,C.z,m,f),32,32+(n-1)*22)
o=A.e4(d,0,A.eU(2,"count",q),o)
o=new A.al(o,new B.cr9(),o.$ti.i("al<aZ.E,c>")).a2(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.Q,C.iE,C.ac,A.P(A.a([p,C.ae,A.a4(A.h("Em comum: "+o+d,2,f,f,f,C.R,f,f,f),1)],r),C.w,C.i,C.m,0,f,f)],r))}d=e.f
if(e.gav6()!=null){q=e.gav6()
q.toString
s.push(new A.kL(q+" \xb7 "+B.cW1(d),10,f))}else s.push(new A.kL(B.cW1(d)[0].toUpperCase()+C.f.bF(B.cW1(d),1),10,f))
s.push(C.Q)
s.push(D.cfG)
s.push(C.X)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bCH[i]
p=q===h
o=p?$.ar:C.aa
p=p?C.t:C.A
d.push(new A.hx(A.fv(C.L,A.h(h,f,f,f,f,new A.N(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aN,new A.j6(o,f,f,f,C.ad),C.ev,f,38,f,C.dj,f),new B.cra(g,h),h,f))}s.push(A.eb(C.bf,d,C.r,C.bn,8,8))
if(!a0)s.push(new A.io("Ver perfil",new B.crb(a1,e),!0,f))
s.push(C.ac)
d=g.r
a0=A.a4(new A.io("Recusar",d?new B.crc():new B.crd(g),!0,f),1)
s.push(A.P(A.a([a0,C.ae,A.a4(new A.io("Aceitar",d?new B.cre():new B.crf(g),!1,f),1)],r),C.w,C.i,C.m,0,f,f))
return A.A(f,A.B(s,C.I,C.i,C.m,0,C.v),C.r,f,f,new A.M(C.t,f,f,v,f,f,C.y),f,f,C.lB,C.dk,f,f,f)}}
var z=a.updateTypes([])
B.c5Y.prototype={
$0(){var x=this.a
x.z=!0
x.x.B(0,this.b.a)
x.w=null},
$S:0}
B.c5Z.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c6_.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c62.prototype={
$1(d){return!this.a.x.q(0,d.a)},
$S:508}
B.c63.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:508}
B.c64.prototype={
$0(){return A.ai(this.a).ak(null)},
$S:0}
B.c65.prototype={
$1(d){var x=this.a
return x.p(new B.c61(x,d))},
$S:3}
B.c61.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c66.prototype={
$1(d){var x=this.c
x.toString
return this.a.KV(this.b,d,x)},
$S:10}
B.c67.prototype={
$0(){var x=this.a
return x.p(new B.c60(x,this.b))},
$S:0}
B.c60.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.crg.prototype={
$2(d,e){var x=null
return A.B(A.a([A.h(d,x,x,x,x,C.aj,x,x,x),A.h(e,x,x,x,x,C.bc,x,x,x)],y.p),C.w,C.i,C.m,0,C.v)},
$S:143}
B.cr9.prototype={
$1(d){return C.e.gM(d.b.split(" "))},
$S:1497}
B.cra.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.crb.prototype={
$0(){return A.ai(this.a).ap("/u/"+A.q(this.b.b),null,y.X)},
$S:0}
B.crc.prototype={
$0(){},
$S:0}
B.crd.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.cre.prototype={
$0(){},
$S:0}
B.crf.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3R,A.dB)
x(B.aI8,A.dx)
w(A.bR,[B.c5Y,B.c5Z,B.c6_,B.c64,B.c61,B.c67,B.c60,B.cra,B.crb,B.crc,B.crd,B.cre,B.crf])
w(A.bw,[B.c62,B.c63,B.c65,B.c66,B.cr9])
w(A.ep,[B.aKF,B.aNy])
x(B.crg,A.cQ)})()
A.bp(b.typeUniverse,JSON.parse('{"a3R":{"G":[],"e":[],"f":[]},"aI8":{"a_":["a3R"]},"aKF":{"G":[],"e":[],"f":[]},"aNy":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{b:x("ay<t<pm>>"),m:x("ay<vG?>"),v:x("ee"),E:x("qJ"),S:x("r<pm>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dU<c>"),q:x("dq"),z:x("@"),r:x("v"),X:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bCH=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8Y=new A.c4(22,null,null,null)
D.cfG=new A.C("Quem \xe9 para voc\xeas?",null,C.R,null,null,null,null,null,null,null,null)})()};
(a=>{a["uL3tS0UuaHHttvsjBqfEvfq1FU8="]=a.current})($__dart_deferred_initializers__);