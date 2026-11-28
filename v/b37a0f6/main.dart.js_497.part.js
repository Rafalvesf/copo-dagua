((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dtk(d){return new B.a4i(d,null)},
cZz(d){var x,w=C.j.aQ(new A.ac(Date.now(),0,!1).cJ(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a4i:function a4i(d,e){this.d=d
this.a=e},
aIP:function aIP(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c8i:function c8i(d,e){this.a=d
this.b=e},
c8j:function c8j(d,e){this.a=d
this.b=e},
c8k:function c8k(d){this.a=d},
c8n:function c8n(d){this.a=d},
c8o:function c8o(d){this.a=d},
c8p:function c8p(d){this.a=d},
c8q:function c8q(d){this.a=d},
c8m:function c8m(d,e){this.a=d
this.b=e},
c8r:function c8r(d,e,f){this.a=d
this.b=e
this.c=f},
c8s:function c8s(d,e){this.a=d
this.b=e},
c8l:function c8l(d,e){this.a=d
this.b=e},
aLm:function aLm(d,e,f){this.e=d
this.f=e
this.a=f},
aOf:function aOf(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
cun:function cun(){},
cug:function cug(){},
cuh:function cuh(d,e){this.a=d
this.b=e},
cui:function cui(d,e){this.a=d
this.b=e},
cuj:function cuj(){},
cuk:function cuk(d){this.a=d},
cul:function cul(){},
cum:function cum(d){this.a=d},
aVQ(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aVQ=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.Q()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aM("review_join_request",A.T(["p_request",d,"p_approve",e],y.N,v),v),$async$aVQ)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bi(0,A.T(["group_label",f],v,v)).V("id",u),$async$aVQ)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aVQ,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[325]
B.a4i.prototype={
R(){return new B.aIP(A.aK(y.N))}}
B.aIP.prototype={
Li(d,e,f){return this.bhT(d,e,f)},
bhT(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$Li=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a0(0,$.jF().gaY(),y.E)
s.p(new B.c8i(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aVQ(d.a,e,r),$async$Li)
case 6:o.al($.amI().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dnr(n,f),$async$Li)
case 9:case 8:o=d.c
p.a2(A.c1(null,null,null,null,null,C.z,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c8j(s,d))
p.a2(C.eE)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c8k(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Li,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.H($.cr(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.ou
else{g=g.H($.amI().$1(d),y.b)
g=g.gv(g)
x=g==null?C.ou:g}g=J.da(x,new B.c8n(i))
w=A.U(g,g.$ti.i("B.E"))
v=A.eV(new A.a6(w,new B.c8o(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eV(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lr(f.gcD())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.h6,A.KA("Pedidos para entrar",e)],u)
if(t)e.push(new A.dU("Pedidos",h,A.a([A.SF(A.a([new A.iq("Ver convidados",new B.c8p(a0),!0,h)],u),C.jM,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aOf(v,i.y,i.z,new B.c8q(i),new B.c8r(i,v,d),new A.dW(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.H)(g),++s){r=g[s]
l=r.f
k=C.j.aQ(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAM()
if((j==null?0:j)>0)l.push("traz "+A.q(r.gAM()))
o.push(new A.ia(new B.aLm(r,44,h),r.c,C.e.a1(l," \xb7 "),new A.or("Ver",new B.c8s(i,r),!1,h),!1,h,!1,h))}t.push(new A.dU("Outros pedidos \xb7 "+q,h,A.a([A.ff(o,0)],u),16,h))}C.e.n(e,t)}return A.cQ(h,C.d2,A.ox(C.fd,40,e,h,!0,!1),!0,h)}}
B.aLm.prototype={
bf(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.H($.od().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cq(w.c,this.f,v,!1,!0,null)}}
B.aOf.prototype={
bf(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.H($.od().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gYk()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.cun()
t=e.gAM()
v=A.W(22)
s=e.c
r=y.p
s=A.a([A.bK(new A.cq(s,76,d?f:x.d,!1,!0,f),f,f),C.R,A.h(s,f,f,f,f,C.bZ,C.a6,f,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.O,C.a6,f,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a92],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a92],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.q(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ae,A.O(q,C.w,C.bW,C.l,0,f,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.dM(d,0,A.eE(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bl<1>")
l=0
for(;;){k=new A.bl(d,0,3,p)
k.cf(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bc(C.t,2,C.ai,-1)
k=d[l]
m.push(new A.eM(l*22,f,f,f,f,f,A.z(f,new A.cq(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.I(f,f,new A.dN(j,j,j,j),f,f,f,C.aw),f,f,f,f,f,f,f),f));++l}p=A.aH(new A.bB(C.ay,f,C.aE,C.z,m,f),32,32+(n-1)*22)
o=A.dM(d,0,A.eE(2,"count",q),o)
o=new A.aj(o,new B.cug(),o.$ti.i("aj<aZ.E,c>")).a1(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.S,C.iM,C.ae,A.O(A.a([p,C.ag,A.a4(A.h("Em comum: "+o+d,2,f,f,f,C.O,f,f,f),1)],r),C.w,C.h,C.l,0,f,f)],r))}d=e.f
if(e.gawf()!=null){q=e.gawf()
q.toString
s.push(new A.kR(q+" \xb7 "+B.cZz(d),10,f))}else s.push(new A.kR(B.cZz(d)[0].toUpperCase()+C.f.bF(B.cZz(d),1),10,f))
s.push(C.S)
s.push(D.cg7)
s.push(C.R)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bCW[i]
p=q===h
o=p?$.au:C.a7
p=p?C.t:C.A
d.push(new A.hA(A.fy(C.L,A.h(h,f,f,f,f,new A.P(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aO,new A.ja(o,f,f,f,C.ad),C.ex,f,38,f,C.cJ,f),new B.cuh(g,h),h,f))}s.push(A.e1(C.bf,d,C.r,C.bm,8,8))
if(!a0)s.push(new A.iq("Ver perfil",new B.cui(a1,e),!0,f))
s.push(C.ae)
d=g.r
a0=A.a4(new A.iq("Recusar",d?new B.cuj():new B.cuk(g),!0,f),1)
s.push(A.O(A.a([a0,C.ag,A.a4(new A.iq("Aceitar",d?new B.cul():new B.cum(g),!1,f),1)],r),C.w,C.h,C.l,0,f,f))
return A.z(f,A.y(s,C.G,C.h,C.l,0,C.u),C.r,f,f,new A.I(C.t,f,f,v,f,f,C.y),f,f,C.lI,C.dr,f,f,f)}}
var z=a.updateTypes([])
B.c8i.prototype={
$0(){var x=this.a
x.z=!0
x.x.B(0,this.b.a)
x.w=null},
$S:0}
B.c8j.prototype={
$0(){return this.a.x.M(0,this.b.a)},
$S:0}
B.c8k.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c8n.prototype={
$1(d){return!this.a.x.q(0,d.a)},
$S:512}
B.c8o.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:512}
B.c8p.prototype={
$0(){return A.ai(this.a).af(null)},
$S:0}
B.c8q.prototype={
$1(d){var x=this.a
return x.p(new B.c8m(x,d))},
$S:3}
B.c8m.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c8r.prototype={
$1(d){var x=this.c
x.toString
return this.a.Li(this.b,d,x)},
$S:10}
B.c8s.prototype={
$0(){var x=this.a
return x.p(new B.c8l(x,this.b))},
$S:0}
B.c8l.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.cun.prototype={
$2(d,e){var x=null
return A.y(A.a([A.h(d,x,x,x,x,C.ab,x,x,x),A.h(e,x,x,x,x,C.bd,x,x,x)],y.p),C.w,C.h,C.l,0,C.u)},
$S:145}
B.cug.prototype={
$1(d){return C.e.gL(d.b.split(" "))},
$S:480}
B.cuh.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.cui.prototype={
$0(){return A.ai(this.a).aw("/u/"+A.q(this.b.b),null,y.X)},
$S:0}
B.cuj.prototype={
$0(){},
$S:0}
B.cuk.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.cul.prototype={
$0(){},
$S:0}
B.cum.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a4i,A.dA)
x(B.aIP,A.du)
w(A.bQ,[B.c8i,B.c8j,B.c8k,B.c8p,B.c8m,B.c8s,B.c8l,B.cuh,B.cui,B.cuj,B.cuk,B.cul,B.cum])
w(A.bw,[B.c8n,B.c8o,B.c8q,B.c8r,B.cug])
w(A.ex,[B.aLm,B.aOf])
x(B.cun,A.cL)})()
A.bs(b.typeUniverse,JSON.parse('{"a4i":{"G":[],"e":[],"f":[]},"aIP":{"Y":["a4i"]},"aLm":{"G":[],"e":[],"f":[]},"aOf":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{b:x("ay<t<pu>>"),m:x("ay<rj?>"),v:x("ef"),E:x("qP"),S:x("r<pu>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dW<c>"),q:x("dp"),z:x("@"),r:x("v"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bCW=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a92=new A.c0(22,null,null,null)
D.cg7=new A.D("Quem \xe9 para voc\xeas?",null,C.O,null,null,null,null,null,null,null,null)})()};
(a=>{a["GB0Qerjgj65Vk8egNE1Cc8BO3NM="]=a.current})($__dart_deferred_initializers__);