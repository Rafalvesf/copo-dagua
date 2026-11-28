((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dtW(d){return new B.a4s(d,null)},
cZL(d){var x,w=C.j.aO(new A.ab(Date.now(),0,!1).cc(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a4s:function a4s(d,e){this.d=d
this.a=e},
aIX:function aIX(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c8k:function c8k(d,e){this.a=d
this.b=e},
c8l:function c8l(d,e){this.a=d
this.b=e},
c8m:function c8m(d){this.a=d},
c8p:function c8p(d){this.a=d},
c8q:function c8q(d){this.a=d},
c8r:function c8r(d){this.a=d},
c8s:function c8s(d){this.a=d},
c8o:function c8o(d,e){this.a=d
this.b=e},
c8t:function c8t(d,e,f){this.a=d
this.b=e
this.c=f},
c8u:function c8u(d,e){this.a=d
this.b=e},
c8n:function c8n(d,e){this.a=d
this.b=e},
aLv:function aLv(d,e,f){this.e=d
this.f=e
this.a=f},
aOl:function aOl(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
ctl:function ctl(){},
cte:function cte(){},
ctf:function ctf(d,e){this.a=d
this.b=e},
ctg:function ctg(d,e){this.a=d
this.b=e},
cth:function cth(){},
cti:function cti(d){this.a=d},
ctj:function ctj(){},
ctk:function ctk(d){this.a=d},
aVY(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aVY=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.Q()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aH("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aVY)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.R("guests").bg(0,A.R(["group_label",f],v,v)).V("id",u),$async$aVY)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aVY,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[326]
B.a4s.prototype={
P(){return new B.aIX(A.aO(y.N))}}
B.aIX.prototype={
KJ(d,e,f){return this.bg7(d,e,f)},
bg7(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KJ=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a0(0,$.ji().gb1(),y.E)
s.p(new B.c8k(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aVY(d.a,e,r),$async$KJ)
case 6:o.ak($.a04().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.do4(n,f),$async$KJ)
case 9:case 8:o=d.c
p.a4(A.c7(null,null,null,null,null,C.y,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c8l(s,d))
p.a4(C.dZ)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c8m(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KJ,w)},
t(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.G($.cp(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.of
else{g=g.G($.a04().$1(d),y.b)
g=g.gv(g)
x=g==null?C.of:g}g=J.dP(x,new B.c8p(i))
w=A.U(g,g.$ti.i("z.E"))
v=A.f8(new A.a7(w,new B.c8q(i),A.a8(w).i("a7<1>")))
if(v==null)v=A.f8(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.I)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.kl(f.gcw())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fD,A.Ey("Pedidos para entrar",e)],u)
if(t)e.push(new A.c1("Pedidos",h,A.a([A.JS(A.a([new A.h6("Ver convidados",new B.c8r(a0),!0,h)],u),C.h2,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aOl(v,i.y,i.z,new B.c8s(i),new B.c8t(i,v,d),new A.dq(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.I)(g),++s){r=g[s]
l=r.f
k=C.j.aO(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAp()
if((j==null?0:j)>0)l.push("traz "+A.p(r.gAp()))
o.push(new A.im(new B.aLv(r,44,h),r.c,C.e.a1(l," \xb7 "),new A.ma("Ver",new B.c8u(i,r),!1,h),!1,h,!1,h))}t.push(new A.c1("Outros pedidos \xb7 "+q,h,A.a([A.eQ(o,0)],u),16,h))}C.e.n(e,t)}return A.cP(h,C.cR,A.nN(C.eZ,40,e,h,!0,!1),!0,h)}}
B.aLv.prototype={
b8(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.o8().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cg(w.c,this.f,v,!1,!0,null)}}
B.aOl.prototype={
b8(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.o8().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXD()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.ctl()
t=e.gAp()
v=A.W(22)
s=e.c
r=y.p
s=A.a([A.bG(new A.cg(s,76,d?f:x.d,!1,!0,f),f,f),C.M,A.h(s,f,f,f,f,C.ce,C.a6,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.L,C.a6,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a8y],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8y],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.p(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ad,A.M(q,C.u,C.bT,C.l,0,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.dp(d,0,A.eu(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bm<1>")
l=0
for(;;){k=new A.bm(d,0,3,p)
k.cf(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bd(C.t,2,C.af,-1)
k=d[l]
m.push(new A.eU(l*22,f,f,f,f,f,A.w(f,new A.cg(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.O(f,f,new A.dT(j,j,j,j),f,f,f,C.am),f,f,f,f,f,f,f),f));++l}p=A.aG(new A.bB(C.av,f,C.aC,C.y,m,f),32,32+(n-1)*22)
o=A.dp(d,0,A.eu(2,"count",q),o)
o=new A.ak(o,new B.cte(),o.$ti.i("ak<aX.E,c>")).a1(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.S,C.iK,C.ad,A.M(A.a([p,C.aa,A.a4(A.h("Em comum: "+o+d,2,f,f,f,C.L,f,f),1)],r),C.u,C.h,C.l,0,f)],r))}d=e.f
if(e.gav3()!=null){q=e.gav3()
q.toString
s.push(new A.fK(q+" \xb7 "+B.cZL(d),10,f))}else s.push(new A.fK(B.cZL(d)[0].toUpperCase()+C.f.bE(B.cZL(d),1),10,f))
s.push(C.S)
s.push(D.cbt)
s.push(C.M)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBB[i]
p=q===h
o=p?$.ay:C.a5
p=p?C.t:C.x
d.push(new A.iF(A.fu(C.J,A.h(h,f,f,f,f,new A.P(!0,p,f,f,f,f,14,C.E,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f),f,C.aK,new A.dO(o,f,f,f,C.ab),C.fx,f,38,f,C.cF,f),new B.ctf(g,h),h,f))}s.push(A.em(C.bj,d,C.r,C.bo,8,8))
if(!a0)s.push(new A.h6("Ver perfil",new B.ctg(a1,e),!0,f))
s.push(C.ad)
d=g.r
a0=A.a4(new A.h6("Recusar",d?new B.cth():new B.cti(g),!0,f),1)
s.push(A.M(A.a([a0,C.aa,A.a4(new A.h6("Aceitar",d?new B.ctj():new B.ctk(g),!1,f),1)],r),C.u,C.h,C.l,0,f))
return A.w(f,A.y(s,C.F,C.h,C.l),C.r,f,f,new A.O(C.t,f,f,v,f,f,C.z),f,f,C.nt,C.ck,f,f,f)}}
var z=a.updateTypes([])
B.c8k.prototype={
$0(){var x=this.a
x.z=!0
x.x.B(0,this.b.a)
x.w=null},
$S:0}
B.c8l.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c8m.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c8p.prototype={
$1(d){return!this.a.x.u(0,d.a)},
$S:519}
B.c8q.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:519}
B.c8r.prototype={
$0(){return A.iL(this.a,!0)},
$S:0}
B.c8s.prototype={
$1(d){var x=this.a
return x.p(new B.c8o(x,d))},
$S:3}
B.c8o.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c8t.prototype={
$1(d){var x=this.c
x.toString
return this.a.KJ(this.b,d,x)},
$S:10}
B.c8u.prototype={
$0(){var x=this.a
return x.p(new B.c8n(x,this.b))},
$S:0}
B.c8n.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.ctl.prototype={
$2(d,e){var x=null
return A.y(A.a([A.h(d,x,x,x,x,C.ac,x,x),A.h(e,x,x,x,x,C.bi,x,x)],y.p),C.u,C.h,C.l)},
$S:192}
B.cte.prototype={
$1(d){return C.e.gJ(d.b.split(" "))},
$S:490}
B.ctf.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.ctg.prototype={
$0(){return A.ae(this.a).ag("/u/"+A.p(this.b.b),null,y.X)},
$S:0}
B.cth.prototype={
$0(){},
$S:0}
B.cti.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.ctj.prototype={
$0(){},
$S:0}
B.ctk.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a4s,A.dB)
x(B.aIX,A.dx)
w(A.bN,[B.c8k,B.c8l,B.c8m,B.c8r,B.c8o,B.c8u,B.c8n,B.ctf,B.ctg,B.cth,B.cti,B.ctj,B.ctk])
w(A.bv,[B.c8p,B.c8q,B.c8s,B.c8t,B.cte])
w(A.ev,[B.aLv,B.aOl])
x(B.ctl,A.cM)})()
A.bq(b.typeUniverse,JSON.parse('{"a4s":{"G":[],"e":[],"f":[]},"aIX":{"Z":["a4s"]},"aLv":{"G":[],"e":[],"f":[]},"aOl":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{b:x("aw<t<pr>>"),m:x("aw<r2?>"),v:x("en"),E:x("qE"),S:x("r<pr>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dq<c>"),q:x("di"),z:x("@"),r:x("v"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBB=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8y=new A.bX(22,null,null,null)
D.cbt=new A.F("Quem \xe9 para voc\xeas?",null,C.L,null,null,null,null,null,null,null)})()};
(a=>{a["SQYhweAp37/+pZAMbXjoKWDnxfo="]=a.current})($__dart_deferred_initializers__);