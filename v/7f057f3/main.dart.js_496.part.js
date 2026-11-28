((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dte(d){return new B.a4h(d,null)},
cZt(d){var x,w=C.j.aQ(new A.ac(Date.now(),0,!1).cJ(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a4h:function a4h(d,e){this.d=d
this.a=e},
aIO:function aIO(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c8g:function c8g(d,e){this.a=d
this.b=e},
c8h:function c8h(d,e){this.a=d
this.b=e},
c8i:function c8i(d){this.a=d},
c8l:function c8l(d){this.a=d},
c8m:function c8m(d){this.a=d},
c8n:function c8n(d){this.a=d},
c8o:function c8o(d){this.a=d},
c8k:function c8k(d,e){this.a=d
this.b=e},
c8p:function c8p(d,e,f){this.a=d
this.b=e
this.c=f},
c8q:function c8q(d,e){this.a=d
this.b=e},
c8j:function c8j(d,e){this.a=d
this.b=e},
aLl:function aLl(d,e,f){this.e=d
this.f=e
this.a=f},
aOe:function aOe(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
cuk:function cuk(){},
cud:function cud(){},
cue:function cue(d,e){this.a=d
this.b=e},
cuf:function cuf(d,e){this.a=d
this.b=e},
cug:function cug(){},
cuh:function cuh(d){this.a=d},
cui:function cui(){},
cuj:function cuj(d){this.a=d},
aVP(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aVP=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.Q()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aM("review_join_request",A.T(["p_request",d,"p_approve",e],y.N,v),v),$async$aVP)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.P("guests").bi(0,A.T(["group_label",f],v,v)).V("id",u),$async$aVP)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aVP,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[324]
B.a4h.prototype={
R(){return new B.aIO(A.aK(y.N))}}
B.aIO.prototype={
Li(d,e,f){return this.bhT(d,e,f)},
bhT(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$Li=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a2(0,$.jF().gaY(),y.E)
s.p(new B.c8g(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aVP(d.a,e,r),$async$Li)
case 6:o.al($.amH().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dnl(n,f),$async$Li)
case 9:case 8:o=d.c
p.a1(A.c1(null,null,null,null,null,C.z,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c8h(s,d))
p.a1(C.eE)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c8i(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Li,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.H($.cs(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.ou
else{g=g.H($.amH().$1(d),y.b)
g=g.gv(g)
x=g==null?C.ou:g}g=J.da(x,new B.c8l(i))
w=A.U(g,g.$ti.i("B.E"))
v=A.eV(new A.a6(w,new B.c8m(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eV(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lq(f.gcD())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.h6,A.KA("Pedidos para entrar",e)],u)
if(t)e.push(new A.dU("Pedidos",h,A.a([A.SF(A.a([new A.iq("Ver convidados",new B.c8n(a0),!0,h)],u),C.jM,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aOe(v,i.y,i.z,new B.c8o(i),new B.c8p(i,v,d),new A.dW(t,y.O))],u)
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
o.push(new A.ia(new B.aLl(r,44,h),r.c,C.e.a0(l," \xb7 "),new A.oq("Ver",new B.c8q(i,r),!1,h),!1,h,!1,h))}t.push(new A.dU("Outros pedidos \xb7 "+q,h,A.a([A.ff(o,0)],u),16,h))}C.e.n(e,t)}return A.cQ(h,C.d2,A.ow(C.fd,40,e,h,!0,!1),!0,h)}}
B.aLl.prototype={
bf(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.H($.od().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cq(w.c,this.f,v,!1,!0,null)}}
B.aOe.prototype={
bf(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.H($.od().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gYk()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.cuk()
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
o=new A.aj(o,new B.cud(),o.$ti.i("aj<aZ.E,c>")).a0(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.S,C.iM,C.ae,A.O(A.a([p,C.ag,A.a4(A.h("Em comum: "+o+d,2,f,f,f,C.O,f,f,f),1)],r),C.w,C.h,C.l,0,f,f)],r))}d=e.f
if(e.gawf()!=null){q=e.gawf()
q.toString
s.push(new A.kQ(q+" \xb7 "+B.cZt(d),10,f))}else s.push(new A.kQ(B.cZt(d)[0].toUpperCase()+C.f.bF(B.cZt(d),1),10,f))
s.push(C.S)
s.push(D.cg7)
s.push(C.R)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bCW[i]
p=q===h
o=p?$.au:C.a7
p=p?C.t:C.A
d.push(new A.hA(A.fy(C.L,A.h(h,f,f,f,f,new A.P(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aO,new A.ja(o,f,f,f,C.ad),C.ex,f,38,f,C.cJ,f),new B.cue(g,h),h,f))}s.push(A.e1(C.bf,d,C.r,C.bl,8,8))
if(!a0)s.push(new A.iq("Ver perfil",new B.cuf(a1,e),!0,f))
s.push(C.ae)
d=g.r
a0=A.a4(new A.iq("Recusar",d?new B.cug():new B.cuh(g),!0,f),1)
s.push(A.O(A.a([a0,C.ag,A.a4(new A.iq("Aceitar",d?new B.cui():new B.cuj(g),!1,f),1)],r),C.w,C.h,C.l,0,f,f))
return A.z(f,A.y(s,C.G,C.h,C.l,0,C.u),C.r,f,f,new A.I(C.t,f,f,v,f,f,C.y),f,f,C.lI,C.dr,f,f,f)}}
var z=a.updateTypes([])
B.c8g.prototype={
$0(){var x=this.a
x.z=!0
x.x.B(0,this.b.a)
x.w=null},
$S:0}
B.c8h.prototype={
$0(){return this.a.x.M(0,this.b.a)},
$S:0}
B.c8i.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c8l.prototype={
$1(d){return!this.a.x.q(0,d.a)},
$S:512}
B.c8m.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:512}
B.c8n.prototype={
$0(){return A.ai(this.a).af(null)},
$S:0}
B.c8o.prototype={
$1(d){var x=this.a
return x.p(new B.c8k(x,d))},
$S:3}
B.c8k.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c8p.prototype={
$1(d){var x=this.c
x.toString
return this.a.Li(this.b,d,x)},
$S:10}
B.c8q.prototype={
$0(){var x=this.a
return x.p(new B.c8j(x,this.b))},
$S:0}
B.c8j.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.cuk.prototype={
$2(d,e){var x=null
return A.y(A.a([A.h(d,x,x,x,x,C.ab,x,x,x),A.h(e,x,x,x,x,C.bd,x,x,x)],y.p),C.w,C.h,C.l,0,C.u)},
$S:145}
B.cud.prototype={
$1(d){return C.e.gL(d.b.split(" "))},
$S:480}
B.cue.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.cuf.prototype={
$0(){return A.ai(this.a).aw("/u/"+A.q(this.b.b),null,y.X)},
$S:0}
B.cug.prototype={
$0(){},
$S:0}
B.cuh.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.cui.prototype={
$0(){},
$S:0}
B.cuj.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a4h,A.dA)
x(B.aIO,A.du)
w(A.bQ,[B.c8g,B.c8h,B.c8i,B.c8n,B.c8k,B.c8q,B.c8j,B.cue,B.cuf,B.cug,B.cuh,B.cui,B.cuj])
w(A.by,[B.c8l,B.c8m,B.c8o,B.c8p,B.cud])
w(A.ex,[B.aLl,B.aOe])
x(B.cuk,A.cL)})()
A.bs(b.typeUniverse,JSON.parse('{"a4h":{"G":[],"e":[],"f":[]},"aIO":{"Y":["a4h"]},"aLl":{"G":[],"e":[],"f":[]},"aOe":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{b:x("ay<t<pt>>"),m:x("ay<rj?>"),v:x("ek"),E:x("qP"),S:x("r<pt>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dW<c>"),q:x("dp"),z:x("@"),r:x("v"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bCW=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a92=new A.c0(22,null,null,null)
D.cg7=new A.D("Quem \xe9 para voc\xeas?",null,C.O,null,null,null,null,null,null,null,null)})()};
(a=>{a["qfKccYM8Q+aHa7r2g2p9qR3ZEc8="]=a.current})($__dart_deferred_initializers__);