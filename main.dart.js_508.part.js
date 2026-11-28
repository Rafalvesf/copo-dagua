((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dtJ(d){return new B.a4p(d,null)},
cZz(d){var x,w=C.j.aL(new A.aa(Date.now(),0,!1).cc(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a4p:function a4p(d,e){this.d=d
this.a=e},
aIX:function aIX(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c8f:function c8f(d,e){this.a=d
this.b=e},
c8g:function c8g(d,e){this.a=d
this.b=e},
c8h:function c8h(d){this.a=d},
c8k:function c8k(d){this.a=d},
c8l:function c8l(d){this.a=d},
c8m:function c8m(d){this.a=d},
c8n:function c8n(d){this.a=d},
c8j:function c8j(d,e){this.a=d
this.b=e},
c8o:function c8o(d,e,f){this.a=d
this.b=e
this.c=f},
c8p:function c8p(d,e){this.a=d
this.b=e},
c8i:function c8i(d,e){this.a=d
this.b=e},
aLv:function aLv(d,e,f){this.e=d
this.f=e
this.a=f},
aOm:function aOm(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
ctc:function ctc(){},
ct5:function ct5(){},
ct6:function ct6(d,e){this.a=d
this.b=e},
ct7:function ct7(d,e){this.a=d
this.b=e},
ct8:function ct8(){},
ct9:function ct9(d){this.a=d},
cta:function cta(){},
ctb:function ctb(d){this.a=d},
aW_(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aW_=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.Q()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aH("review_join_request",A.R(["p_request",d,"p_approve",e],y.N,v),v),$async$aW_)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.R("guests").bg(0,A.R(["group_label",f],v,v)).V("id",u),$async$aW_)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aW_,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[326]
B.a4p.prototype={
P(){return new B.aIX(A.aN(y.N))}}
B.aIX.prototype={
KJ(d,e,f){return this.bg6(d,e,f)},
bg6(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$KJ=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a0(0,$.ji().gb1(),y.E)
s.p(new B.c8f(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aW_(d.a,e,r),$async$KJ)
case 6:o.ak($.a01().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dnS(n,f),$async$KJ)
case 9:case 8:o=d.c
p.a4(A.c7(null,null,null,null,null,C.x,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c8g(s,d))
p.a4(C.e_)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c8h(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KJ,w)},
t(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.G($.cp(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.ob
else{g=g.G($.a01().$1(d),y.b)
g=g.gv(g)
x=g==null?C.ob:g}g=J.dP(x,new B.c8k(i))
w=A.U(g,g.$ti.i("z.E"))
v=A.f9(new A.a7(w,new B.c8l(i),A.a8(w).i("a7<1>")))
if(v==null)v=A.f9(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.I)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.kj(f.gcw())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.fC,A.EA("Pedidos para entrar",e)],u)
if(t)e.push(new A.c1("Pedidos",h,A.a([A.JS(A.a([new A.h6("Ver convidados",new B.c8m(a0),!0,h)],u),C.h1,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aOm(v,i.y,i.z,new B.c8n(i),new B.c8o(i,v,d),new A.dr(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.I)(g),++s){r=g[s]
l=r.f
k=C.j.aL(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAp()
if((j==null?0:j)>0)l.push("traz "+A.p(r.gAp()))
o.push(new A.im(new B.aLv(r,44,h),r.c,C.e.a1(l," \xb7 "),new A.mc("Ver",new B.c8p(i,r),!1,h),!1,h,!1,h))}t.push(new A.c1("Outros pedidos \xb7 "+q,h,A.a([A.eQ(o,0)],u),16,h))}C.e.n(e,t)}return A.cO(h,C.cS,A.nO(C.eZ,40,e,h,!0,!1),!0,h)}}
B.aLv.prototype={
b8(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.G($.oa().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cg(w.c,this.f,v,!1,!0,null)}}
B.aOm.prototype={
b8(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.G($.oa().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXA()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.ctc()
t=e.gAp()
v=A.W(22)
s=e.c
r=y.p
s=A.a([A.bG(new A.cg(s,76,d?f:x.d,!1,!0,f),f,f),C.M,A.h(s,f,f,f,f,C.cd,C.a3,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.L,C.a3,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a8w],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a8w],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.p(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ae,A.N(q,C.u,C.bT,C.l,0,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.dq(d,0,A.eu(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bm<1>")
l=0
for(;;){k=new A.bm(d,0,3,p)
k.cf(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.b8(C.t,2,C.ag,-1)
k=d[l]
m.push(new A.eU(l*22,f,f,f,f,f,A.w(f,new A.cg(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.O(f,f,new A.dQ(j,j,j,j),f,f,f,C.ar),f,f,f,f,f,f,f),f));++l}p=A.aG(new A.by(C.aw,f,C.aC,C.x,m,f),32,32+(n-1)*22)
o=A.dq(d,0,A.eu(2,"count",q),o)
o=new A.ak(o,new B.ct5(),o.$ti.i("ak<aX.E,c>")).a1(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.S,C.iI,C.ae,A.N(A.a([p,C.ab,A.a5(A.h("Em comum: "+o+d,2,f,f,f,C.L,f,f),1)],r),C.u,C.h,C.l,0,f)],r))}d=e.f
if(e.gav3()!=null){q=e.gav3()
q.toString
s.push(new A.fL(q+" \xb7 "+B.cZz(d),10,f))}else s.push(new A.fL(B.cZz(d)[0].toUpperCase()+C.f.bF(B.cZz(d),1),10,f))
s.push(C.S)
s.push(D.cby)
s.push(C.M)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bBA[i]
p=q===h
o=p?$.ay:C.ac
p=p?C.t:C.z
d.push(new A.iF(A.fv(C.J,A.h(h,f,f,f,f,new A.P(!0,p,f,f,f,f,14,C.E,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f),f,C.aK,new A.dD(o,f,f,f,C.a9),C.fv,f,38,f,C.cF,f),new B.ct6(g,h),h,f))}s.push(A.em(C.bl,d,C.r,C.bq,8,8))
if(!a0)s.push(new A.h6("Ver perfil",new B.ct7(a1,e),!0,f))
s.push(C.ae)
d=g.r
a0=A.a5(new A.h6("Recusar",d?new B.ct8():new B.ct9(g),!0,f),1)
s.push(A.N(A.a([a0,C.ab,A.a5(new A.h6("Aceitar",d?new B.cta():new B.ctb(g),!1,f),1)],r),C.u,C.h,C.l,0,f))
return A.w(f,A.x(s,C.F,C.h,C.l),C.r,f,f,new A.O(C.t,f,f,v,f,f,C.y),f,f,C.np,C.ck,f,f,f)}}
var z=a.updateTypes([])
B.c8f.prototype={
$0(){var x=this.a
x.z=!0
x.x.B(0,this.b.a)
x.w=null},
$S:0}
B.c8g.prototype={
$0(){return this.a.x.K(0,this.b.a)},
$S:0}
B.c8h.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c8k.prototype={
$1(d){return!this.a.x.u(0,d.a)},
$S:519}
B.c8l.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:519}
B.c8m.prototype={
$0(){return A.iL(this.a,!0)},
$S:0}
B.c8n.prototype={
$1(d){var x=this.a
return x.p(new B.c8j(x,d))},
$S:3}
B.c8j.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c8o.prototype={
$1(d){var x=this.c
x.toString
return this.a.KJ(this.b,d,x)},
$S:10}
B.c8p.prototype={
$0(){var x=this.a
return x.p(new B.c8i(x,this.b))},
$S:0}
B.c8i.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.ctc.prototype={
$2(d,e){var x=null
return A.x(A.a([A.h(d,x,x,x,x,C.aa,x,x),A.h(e,x,x,x,x,C.bk,x,x)],y.p),C.u,C.h,C.l)},
$S:192}
B.ct5.prototype={
$1(d){return C.e.gJ(d.b.split(" "))},
$S:490}
B.ct6.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.ct7.prototype={
$0(){return A.ae(this.a).ag("/u/"+A.p(this.b.b),null,y.X)},
$S:0}
B.ct8.prototype={
$0(){},
$S:0}
B.ct9.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.cta.prototype={
$0(){},
$S:0}
B.ctb.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a4p,A.dB)
x(B.aIX,A.dx)
w(A.bO,[B.c8f,B.c8g,B.c8h,B.c8m,B.c8j,B.c8p,B.c8i,B.ct6,B.ct7,B.ct8,B.ct9,B.cta,B.ctb])
w(A.bv,[B.c8k,B.c8l,B.c8n,B.c8o,B.ct5])
w(A.ev,[B.aLv,B.aOm])
x(B.ctc,A.cL)})()
A.bq(b.typeUniverse,JSON.parse('{"a4p":{"G":[],"e":[],"f":[]},"aIX":{"Z":["a4p"]},"aLv":{"G":[],"e":[],"f":[]},"aOm":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{b:x("ax<t<pt>>"),m:x("ax<r4?>"),v:x("en"),E:x("qG"),S:x("r<pt>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dr<c>"),q:x("dj"),z:x("@"),r:x("v"),X:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bBA=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a8w=new A.bU(22,null,null,null)
D.cby=new A.E("Quem \xe9 para voc\xeas?",null,C.L,null,null,null,null,null,null,null)})()};
(a=>{a["tfU7QaxQnuEmPXRpD3J2ERN6KY4="]=a.current})($__dart_deferred_initializers__);