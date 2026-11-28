((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
ds_(d){return new B.a44(d,null)},
cYj(d){var x,w=C.j.aT(new A.ad(Date.now(),0,!1).cK(d).a,864e8)
if(w<=0)x="pediu hoje"
else x=w===1?"pediu ontem":"pediu h\xe1 "+w+" dias"
return x},
a44:function a44(d,e){this.d=d
this.a=e},
aIt:function aIt(d){var _=this
_.w=$
_.x=d
_.y=null
_.z=!1
_.d=$
_.c=_.a=null},
c7d:function c7d(d,e){this.a=d
this.b=e},
c7e:function c7e(d,e){this.a=d
this.b=e},
c7f:function c7f(d){this.a=d},
c7i:function c7i(d){this.a=d},
c7j:function c7j(d){this.a=d},
c7k:function c7k(d){this.a=d},
c7l:function c7l(d){this.a=d},
c7h:function c7h(d,e){this.a=d
this.b=e},
c7m:function c7m(d,e,f){this.a=d
this.b=e
this.c=f},
c7n:function c7n(d,e){this.a=d
this.b=e},
c7g:function c7g(d,e){this.a=d
this.b=e},
aL0:function aL0(d,e,f){this.e=d
this.f=e
this.a=f},
aNU:function aNU(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i},
ctf:function ctf(){},
ct8:function ct8(){},
ct9:function ct9(d,e){this.a=d
this.b=e},
cta:function cta(d,e){this.a=d
this.b=e},
ctb:function ctb(){},
ctc:function ctc(d){this.a=d},
ctd:function ctd(){},
cte:function cte(d){this.a=d},
aVs(d,e,f){var x=0,w=A.n(y.H),v,u,t,s
var $async$aVs=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:t=$.R()
s=t.b
s===$&&A.b()
v=y.z
x=2
return A.d(s.aM("review_join_request",A.T(["p_request",d,"p_approve",e],y.N,v),v),$async$aVs)
case 2:u=h
x=e&&f!=null&&typeof u=="string"?3:4
break
case 3:x=5
return A.d(t.b.R("guests").bh(0,A.T(["group_label",f],v,v)).V("id",u),$async$aVs)
case 5:case 4:return A.l(null,w)}})
return A.m($async$aVs,w)}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[48],B)
D=c[325]
B.a44.prototype={
P(){return new B.aIt(A.aJ(y.N))}}
B.aIt.prototype={
L8(d,e,f){return this.bgZ(d,e,f)},
bgZ(d,e,f){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m
var $async$L8=A.j(function(g,h){if(g===1){u.push(h)
x=v}for(;;)switch(x){case 0:p=s.c.O(y.q).f
o=s.gS()
n=o.a1(0,$.jA().gaX(),y.E)
s.p(new B.c7d(s,d))
r=e?s.y:null
s.y=null
v=3
x=6
return A.d(B.aVs(d.a,e,r),$async$L8)
case 6:o.aj($.amo().$1(f))
x=e?7:8
break
case 7:x=9
return A.d(J.dm6(n,f),$async$L8)
case 9:case 8:o=d.c
p.a3(A.c7(null,null,null,null,null,C.z,null,A.h(e?o+" est\xe1 na lista de convidados.":"Pedido de "+o+" recusado.",null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
t.push(5)
x=4
break
case 3:v=2
m=u.pop()
if(s.c!=null)s.p(new B.c7e(s,d))
p.a3(C.eD)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new B.c7f(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$L8,w)},
u(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gS(),f=g.H($.cr(),y.v).b,e=f==null,d=e?h:f.a
if(d==null)x=C.oq
else{g=g.H($.amo().$1(d),y.b)
g=g.gv(g)
x=g==null?C.oq:g}g=J.d7(x,new B.c7i(i))
w=A.U(g,g.$ti.i("A.E"))
v=A.eV(new A.a6(w,new B.c7j(i),A.a8(w).i("a6<1>")))
if(v==null)v=A.eV(w)
g=A.a([],y.S)
for(u=w.length,t=v==null,s=0;s<w.length;w.length===u||(0,A.H)(w),++s){r=w[s]
q=t?h:v.a
if(r.a!==q)g.push(r)}p=e?"":A.lo(f.gcB())
e=w.length
if(e===0)e=p
else{u=e===1?"pessoa quer":"pessoas querem"
u=""+e+" "+u+" entrar no "+p
e=u}u=y.p
e=A.a([C.h0,A.Kr("Pedidos para entrar",e)],u)
if(t)e.push(new A.dT("Pedidos",h,A.a([A.St(A.a([new A.io("Ver convidados",new B.c7k(a0),!0,h)],u),C.jJ,"Respondeste a todos os pedidos. Os novos aparecem aqui.","Est\xe1 tudo tratado")],u),16,h))
else{t=v.a
t=A.a([new B.aNU(v,i.y,i.z,new B.c7l(i),new B.c7m(i,v,d),new A.dV(t,y.O))],u)
q=g.length
if(q!==0){o=A.a([],u)
for(n=g.length,m=y.s,s=0;s<g.length;g.length===n||(0,A.H)(g),++s){r=g[s]
l=r.f
k=C.j.aT(0-l.b+1000*(Date.now()-l.a),864e8)
if(k<=0)l="pediu hoje"
else l=k===1?"pediu ontem":"pediu h\xe1 "+k+" dias"
l=A.a([l],m)
j=r.gAC()
if((j==null?0:j)>0)l.push("traz "+A.q(r.gAC()))
o.push(new A.i8(new B.aL0(r,44,h),r.c,C.e.a0(l," \xb7 "),new A.on("Ver",new B.c7n(i,r),!1,h),!1,h,!1,h))}t.push(new A.dT("Outros pedidos \xb7 "+q,h,A.a([A.fc(o,0)],u),16,h))}C.e.n(e,t)}return A.cP(h,C.cY,A.ot(C.fc,40,e,h,!0,!1),!0,h)}}
B.aL0.prototype={
bg(d,e){var x,w=this.e,v=w.b
if(v==null)x=null
else{v=e.H($.o9().$1(v),y.m)
x=v.gv(v)}v=x==null?null:x.d
return new A.cp(w.c,this.f,v,!1,!0,null)}}
B.aNU.prototype={
bg(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.e,d=e.b,a0=d==null
if(a0)x=f
else{d=a2.H($.o9().$1(d),y.m)
x=d.gv(d)}d=x==null
w=d?f:x.gXV()
if(w==null){v=e.d
if(v==null)v=e.e
w=v==null?"":v}u=new B.ctf()
t=e.gAC()
v=A.W(22)
s=e.c
r=y.p
s=A.a([A.bN(new A.cp(s,76,d?f:x.d,!1,!0,f),f,f),C.S,A.h(s,f,f,f,f,C.c2,C.a6,f,f)],r)
if(w.length!==0)s.push(A.h(w,f,f,f,f,C.O,C.a6,f,f))
if(!d||t!=null){q=A.a([],r)
p=!d
if(p){o=x.as
n=o===1?"evento":"eventos"
C.e.n(q,A.a([u.$2(""+o,n),D.a93],r))}if(p)C.e.n(q,A.a([u.$2(""+x.ch,"em comum"),D.a93],r))
if(t!=null){p=t===0
o=p?"S\xf3":"+"+A.q(t)
q.push(u.$2(o,p?"vem sozinho":"traz"))}C.e.n(s,A.a([C.ac,A.N(q,C.w,C.bW,C.l,0,f,f)],r))}if(!d&&x.ay.length!==0){d=x.ay
q=y.r
p=A.a8(d)
o=p.c
n=A.dM(d,0,A.eF(3,"count",q),o).gA(0)
m=A.a([],r)
p=p.i("bl<1>")
l=0
for(;;){k=new A.bl(d,0,3,p)
k.ce(d,0,3,o)
if(!(l<k.gA(0)))break
j=new A.bb(C.t,2,C.ai,-1)
k=d[l]
m.push(new A.eM(l*22,f,f,f,f,f,A.B(f,new A.cp(k.b,28,k.c,!1,!0,f),C.r,f,f,new A.L(f,f,new A.dS(j,j,j,j),f,f,f,C.aw),f,f,f,f,f,f,f),f));++l}p=A.aG(new A.bD(C.az,f,C.aG,C.z,m,f),32,32+(n-1)*22)
o=A.dM(d,0,A.eF(2,"count",q),o)
o=new A.aj(o,new B.ct8(),o.$ti.i("aj<aY.E,c>")).a0(0,", ")
d=x.ch
d=d>2?" e mais "+(d-2):""
C.e.n(s,A.a([C.R,C.iL,C.ac,A.N(A.a([p,C.ag,A.a4(A.h("Em comum: "+o+d,2,f,f,f,C.O,f,f,f),1)],r),C.w,C.h,C.l,0,f,f)],r))}d=e.f
if(e.gavE()!=null){q=e.gavE()
q.toString
s.push(new A.kM(q+" \xb7 "+B.cYj(d),10,f))}else s.push(new A.kM(B.cYj(d)[0].toUpperCase()+C.f.bF(B.cYj(d),1),10,f))
s.push(C.R)
s.push(D.cg_)
s.push(C.S)
d=A.a([],r)
for(q=g.f,i=0;i<6;++i){h=D.bCN[i]
p=q===h
o=p?$.at:C.a7
p=p?C.t:C.A
d.push(new A.hz(A.fw(C.L,A.h(h,f,f,f,f,new A.P(!0,p,f,f,f,f,14,C.F,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),f,C.aO,new A.j7(o,f,f,f,C.ad),C.ey,f,38,f,C.cO,f),new B.ct9(g,h),h,f))}s.push(A.e1(C.bf,d,C.r,C.bl,8,8))
if(!a0)s.push(new A.io("Ver perfil",new B.cta(a1,e),!0,f))
s.push(C.ac)
d=g.r
a0=A.a4(new A.io("Recusar",d?new B.ctb():new B.ctc(g),!0,f),1)
s.push(A.N(A.a([a0,C.ag,A.a4(new A.io("Aceitar",d?new B.ctd():new B.cte(g),!1,f),1)],r),C.w,C.h,C.l,0,f,f))
return A.B(f,A.y(s,C.G,C.h,C.l,0,C.u),C.r,f,f,new A.L(C.t,f,f,v,f,f,C.y),f,f,C.lE,C.dn,f,f,f)}}
var z=a.updateTypes([])
B.c7d.prototype={
$0(){var x=this.a
x.z=!0
x.x.B(0,this.b.a)
x.w=null},
$S:0}
B.c7e.prototype={
$0(){return this.a.x.L(0,this.b.a)},
$S:0}
B.c7f.prototype={
$0(){return this.a.z=!1},
$S:0}
B.c7i.prototype={
$1(d){return!this.a.x.q(0,d.a)},
$S:417}
B.c7j.prototype={
$1(d){var x=this.a,w=x.w
if(w===$)w=x.w=x.a.d
return d.a===w},
$S:417}
B.c7k.prototype={
$0(){return A.ah(this.a).ae(null)},
$S:0}
B.c7l.prototype={
$1(d){var x=this.a
return x.p(new B.c7h(x,d))},
$S:3}
B.c7h.prototype={
$0(){var x=this.a,w=this.b
return x.y=x.y===w?null:w},
$S:0}
B.c7m.prototype={
$1(d){var x=this.c
x.toString
return this.a.L8(this.b,d,x)},
$S:10}
B.c7n.prototype={
$0(){var x=this.a
return x.p(new B.c7g(x,this.b))},
$S:0}
B.c7g.prototype={
$0(){var x=this.a
x.w=this.b.a
x.y=null},
$S:0}
B.ctf.prototype={
$2(d,e){var x=null
return A.y(A.a([A.h(d,x,x,x,x,C.ae,x,x,x),A.h(e,x,x,x,x,C.bb,x,x,x)],y.p),C.w,C.h,C.l,0,C.u)},
$S:150}
B.ct8.prototype={
$1(d){return C.e.gK(d.b.split(" "))},
$S:517}
B.ct9.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
B.cta.prototype={
$0(){return A.ah(this.a).av("/u/"+A.q(this.b.b),null,y.X)},
$S:0}
B.ctb.prototype={
$0(){},
$S:0}
B.ctc.prototype={
$0(){return this.a.x.$1(!1)},
$S:0}
B.ctd.prototype={
$0(){},
$S:0}
B.cte.prototype={
$0(){return this.a.x.$1(!0)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a44,A.dD)
x(B.aIt,A.dz)
w(A.bR,[B.c7d,B.c7e,B.c7f,B.c7k,B.c7h,B.c7n,B.c7g,B.ct9,B.cta,B.ctb,B.ctc,B.ctd,B.cte])
w(A.by,[B.c7i,B.c7j,B.c7l,B.c7m,B.ct8])
w(A.eq,[B.aL0,B.aNU])
x(B.ctf,A.cN)})()
A.bq(b.typeUniverse,JSON.parse('{"a44":{"G":[],"e":[],"f":[]},"aIt":{"Y":["a44"]},"aL0":{"G":[],"e":[],"f":[]},"aNU":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{b:x("ay<t<pq>>"),m:x("ay<rg?>"),v:x("ef"),E:x("qN"),S:x("r<pq>"),s:x("r<c>"),p:x("r<e>"),N:x("c"),O:x("dV<c>"),q:x("dn"),z:x("@"),r:x("v"),X:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bCN=x(["Fam\xedlia","Amigos","Trabalho","Vizinhos","Escola / Faculdade","Outro"],y.s)
D.a93=new A.c_(22,null,null,null)
D.cg_=new A.D("Quem \xe9 para voc\xeas?",null,C.O,null,null,null,null,null,null,null,null)})()};
(a=>{a["E8pF4yo3WEkC4tBt0wrxUltC/ns="]=a.current})($__dart_deferred_initializers__);