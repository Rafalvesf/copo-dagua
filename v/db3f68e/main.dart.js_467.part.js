((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,C={
djq(d,e){return new C.Db(d,e,null)},
Db:function Db(d,e,f){this.d=d
this.e=e
this.a=f},
aDg:function aDg(d,e){var _=this
_.w=null
_.x=d
_.y=e
_.z=!1
_.d=$
_.c=_.a=null},
bNf:function bNf(d){this.a=d},
bNg:function bNg(d){this.a=d},
bNl:function bNl(){},
bNm:function bNm(d){this.a=d},
bNn:function bNn(d){this.a=d},
bNo:function bNo(d){this.a=d},
bNp:function bNp(){},
bNt:function bNt(d){this.a=d},
bNq:function bNq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bNk:function bNk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bNi:function bNi(d,e,f){this.a=d
this.b=e
this.c=f},
bNh:function bNh(d,e,f){this.a=d
this.b=e
this.c=f},
bNr:function bNr(d,e,f){this.a=d
this.b=e
this.c=f},
bNj:function bNj(d,e,f){this.a=d
this.b=e
this.c=f},
bNs:function bNs(d,e,f){this.a=d
this.b=e
this.c=f},
aul:function aul(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aq2:function aq2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h}},D
J=c[1]
A=c[0]
B=c[2]
E=c[174]
F=c[138]
C=a.updateHolder(c[49],C)
D=c[293]
C.Db.prototype={
P(){return new C.aDg(A.aH(y.w),new A.aI(B.ao,$.ac()))}}
C.aDg.prototype={
al(){var x,w,v,u,t,s=this
s.aH()
x=s.a.e.as
if(x!=null){s.w=A.C(x.h(0,"package_id"))
w=y.d.a(x.h(0,"extras_snapshot"))
w=J.ar(w==null?B.aj:w)
v=y.B
u=s.x
while(w.t()){t=w.gE(w)
if(v.b(t)&&typeof J.h(t,"id")=="string")u.B(0,A.a1(J.h(t,"id")))}w=A.C(x.h(0,"allergies"))
if(w==null)w=""
s.y.sbx(0,w)}},
m(){var x=this.y
x.Z$=$.ac()
x.X$=0
this.a7()},
D_(d,e){return this.bgg(d,e)},
bgg(a0,a1){var x=0,w=A.n(y.r),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$D_=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:r.q(new C.bNf(r))
u=4
l=r.a.e
k=r.x
k=A.V(k,A.u(k).c)
j=B.f.D(r.y.a.a)
if(j.length===0)j=null
x=7
return A.d(A.aTU(j,l.a,k,a0.a),$async$D_)
case 7:q=a3
k=r.gT()
l=$.CD()
k.ai(l.$1(r.a.d))
j=r.c
if(j==null){s=[1]
x=5
break}p=q.b
if(p==null){j.O(y.v).f.a4(D.bYE)
l=r.c
l.toString
A.ai(l).aj(null)
s=[1]
x=5
break}j=r.a.e
i=j.y
if(i==null)i=0
h=j.as
h=A.aK(h==null?null:h.h(0,"amount"))
if(h==null)h=null
if(h==null)h=0
x=8
return A.d(A.ZN(k,j.b,i-h+q.a,q.a),$async$D_)
case 8:o=a3
j=r.c
if(j==null){s=[1]
x=5
break}i=r.a.e
h=A.j9(q.a,o)
g=q.a
x=9
return A.d(A.ai(j).aq("/pay",new A.op(p,i.c,"guest_share",h,g,null,null,!1,null,null,null,null,null,null,null),y.q),$async$D_)
case 9:k.ai(l.$1(r.a.d))
l=r.c
if(l!=null)A.ai(l).aj(null)
s.push(6)
x=5
break
case 4:u=3
d=t.pop()
l=A.a9(d)
if(l instanceof A.cU){n=l
l=r.c
if(l==null){s=[1]
x=5
break}if(B.f.p(n.a,"closed"))e="A escolha j\xe1 fechou."
else e=B.f.p(n.a,"already_paid")?"J\xe1 pagaste a tua parte: n\xe3o d\xe1 para mudar.":"N\xe3o foi poss\xedvel guardar. Tenta outra vez."
m=e
l.O(y.v).f.a4(A.cA(null,null,null,null,null,B.z,null,A.i(m,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}else{l=r.c
if(l!=null)l.O(y.v).f.a4(B.ez)}s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new C.bNg(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$D_,w)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gT(),g=h.H($.cPY().$1(j.a.e.b),y.o)
g=g.gv(g)
if(g==null)g=B.xa
g=J.dc(g,new C.bNl())
x=A.V(g,g.$ti.i("z.E"))
h=h.H($.cPW().$1(j.a.e.b),y.z)
w=h.gv(h)
if(w==null)w=B.iI
v=A.eV(new A.a5(x,new C.bNm(j),A.a8(x).i("a5<1>")))
h=v==null
if(h)u=B.iI
else{g=J.dc(w,new C.bNn(v))
u=A.V(g,g.$ti.i("z.E"))}t=h?0:v.e+new A.a5(u,new C.bNo(j),A.a8(u).i("a5<1>")).d7(0,0,new C.bNp())
g=j.a.e
s=g.w
r=y.x
g=A.a([g.c],r)
if(s!=null)g.push("escolhe at\xe9 "+A.cW8(s))
q=y.u
g=A.a([B.fU,A.Kf("O teu menu",B.e.a3(g," \xb7 ")),new A.eW("A carta \xb7 "+x.length,24,i,!0,i)],q)
for(p=0;p<x.length;++p){o=p===0?0:10
n=x[p]
g.push(new A.Q(new A.a2(0,o,0,0),new C.aul(n,n.a===j.w,new C.bNq(j,x,p,w),i),i))}if(u.length!==0){o=F.bd8("Juntar ao "+v.c,i,i)
n=A.a0(22)
m=A.a([],q)
for(l=j.x,p=0;p<u.length;++p){k=u[p]
m.push(new C.aq2(k,l.p(0,k.a),p===u.length-1,new C.bNr(j,u,p),i))}B.e.n(g,A.a([o,A.D(i,A.B(m,B.w,B.j,B.m,0,B.v),B.r,i,i,new A.O(B.t,i,i,n,i,i,B.y),i,i,i,B.e9,i,i,i)],q))}g.push(D.aGv)
g.push(A.ho(!1,j.y,i,B.t,"Ex.: sem gl\xfaten, marisco",i,i,120,i))
g.push(B.bf)
o=!h
if(o){r=A.a([v.c],r)
n=j.x.a
if(n!==0)r.push("+ "+n+" extra")
g.push(new A.Q(B.et,A.R(A.a([A.a6(A.i(B.e.a3(r," \xb7 "),i,i,i,i,B.W,i,i,i),1),A.i(A.aQ(t,!1),i,i,i,i,B.bS,i,i,i)],q),B.w,B.j,B.m,0,i,i),i))}r=!o||j.z?i:new C.bNs(j,v,t)
q=A.cu(B.A,i,i,B.t,B.dZ,i,B.af,i,i,B.fB)
if(h)h="Escolhe um menu"
else h=j.a.e.e==="each"?"Escolher e pagar \xb7 "+A.aQ(t,!1):"Guardar escolha"
g.push(A.bE(A.i(h,i,i,i,i,i,i,i,i),r,q))
g.push(B.X)
g.push(A.i(j.a.e.e==="each"?"Pagas a tua parte na app. A taxa de servi\xe7o \xe9 paga por quem paga.":"Pagam os organizadores. Podes mudar at\xe9 a escolha fechar.",i,i,i,i,B.W,B.a5,i,i))
return A.cM(i,B.bx,A.ol(B.f9,140,g,new C.bNt(d),!0,!1),!0,i)}}
C.aul.prototype={
u(d){var x,w=null,v=this.d,u=v?B.t:B.A,t=v?B.t.cd(0.85):B.S,s=this.c,r=s.f?"desde ":"",q=A.aQ(s.e,!1),p=E.Cx(s.y),o=v?new A.O($.ap,w,w,A.a0(22),w,w,B.y):new A.O(B.t,w,w,A.a0(22),B.bb,w,B.y),n=v?B.t:w,m=v?w:A.bV(B.BY,1.5),l=v?A.b2(B.d8,$.ap,w,w,16):w
m=A.D(w,l,B.r,w,w,new A.O(n,w,m,w,w,w,B.aA),w,24,w,w,w,w,24)
n=y.u
p=A.a([A.R(A.a([A.a6(A.i(s.c,w,w,w,w,A.aG(w,w,u,w,w,w,w,w,w,w,w,16,w,w,B.J,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),B.ar,A.i(r+q+p,w,w,w,w,A.aG(w,w,u,w,w,w,w,w,w,w,w,16,w,w,B.J,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],n),B.G,B.j,B.m,0,w,w)],n)
r=B.f.D(s.d)
if(r.length!==0)B.e.n(p,A.a([B.at,A.i(r,w,w,w,w,A.aG(w,w,t,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w)],n))
if(v&&s.w.length!==0){r=A.a([A.D(w,w,B.r,B.t.cd(0.3),w,w,w,1,B.cr,w,w,w,w),D.cct,B.at],n)
for(q=s.w,l=q.length,x=0;x<q.length;q.length===l||(0,A.H)(q),++x)r.push(new A.Q(B.CG,A.R(A.a([D.bL7,new A.bT(1,B.ax,A.i(q[x],w,w,w,w,D.c2s,w,w,w),w)],n),B.G,B.j,B.m,0,w,w),w))
s=s.x
if(s!=null)B.e.n(r,A.a([B.aF,A.i("N\xc3O INCLUI: "+s,w,w,w,w,A.aG(w,w,t,w,w,w,w,w,w,w,w,12,w,w,B.J,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],n))
B.e.n(p,r)}return A.bm(w,!0,w,A.aU(A.fv(w,A.R(A.a([m,B.ag,A.a6(A.B(p,B.G,B.j,B.m,0,B.v),1)],n),B.G,B.j,B.m,0,w,w),w,B.aN,o,B.es,w,w,w,B.bg,w),this.e,w),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.a8,w)}}
C.aq2.prototype={
u(d){var x,w,v=this,u=null,t=v.d,s=v.e?u:B.ps,r=v.c,q=y.u,p=A.a([A.i(r.c,u,u,u,u,B.ap,u,u,u)],q),o=r.d
if(o.length!==0)p.push(A.i(B.e.a3(o," \xb7 "),u,u,u,u,B.W,u,u,u))
p=A.a6(A.B(p,B.G,B.j,B.m,0,B.v),1)
r=A.i("+"+A.aQ(r.e,!1)+E.Cx(r.f),u,u,u,u,B.bT,u,u,u)
o=t?$.ap:B.t
x=t?u:A.bV(B.A,1.5)
w=t?B.d8:B.ed
return A.bm(u,!0,u,A.aU(A.D(u,A.R(A.a([p,B.ar,r,B.ar,A.D(u,A.b2(w,t?B.t:B.A,u,u,18),B.r,u,u,new A.O(o,u,x,u,u,u,B.aA),u,36,u,u,u,u,36)],q),B.w,B.j,B.m,0,u,u),B.r,u,u,new A.O(u,u,s,u,u,u,B.y),u,u,u,B.hW,u,u,u),v.f,u),!1,u,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,B.a8,u)}}
var z=a.updateTypes([])
C.bNf.prototype={
$0(){return this.a.z=!0},
$S:0}
C.bNg.prototype={
$0(){return this.a.z=!1},
$S:0}
C.bNl.prototype={
$1(d){return d.y==="person"&&!d.f},
$S:55}
C.bNm.prototype={
$1(d){return d.a===this.a.w},
$S:55}
C.bNn.prototype={
$1(d){var x=d.r
return x.length===0||B.e.p(x,this.a.a)},
$S:76}
C.bNo.prototype={
$1(d){return this.a.x.p(0,d.a)},
$S:76}
C.bNp.prototype={
$2(d,e){return d+e.e},
$S:180}
C.bNt.prototype={
$0(){var x=this.a,w=A.ai(x).c
w===$&&A.b()
return w.jf()?A.ai(x).aj(null):A.ai(x).bS(0,"/guest-home",null)},
$S:0}
C.bNq.prototype={
$0(){var x=this,w=x.a
return w.q(new C.bNk(w,x.b,x.c,x.d))},
$S:0}
C.bNk.prototype={
$0(){var x=this,w=x.a,v=x.b,u=x.c
w.w=v[u].a
w.x.Dq(new C.bNi(x.d,v,u),!0)},
$S:0}
C.bNi.prototype={
$1(d){return!J.rG(this.a,new C.bNh(d,this.b,this.c))},
$S:8}
C.bNh.prototype={
$1(d){var x,w
if(d.a===this.a){x=this.b[this.c]
w=d.r
x=w.length===0||B.e.p(w,x.a)}else x=!1
return x},
$S:76}
C.bNr.prototype={
$0(){var x=this.a
return x.q(new C.bNj(x,this.b,this.c))},
$S:0}
C.bNj.prototype={
$0(){var x=this.a.x,w=this.b,v=this.c
return x.p(0,w[v].a)?x.K(0,w[v].a):x.B(0,w[v].a)},
$S:0}
C.bNs.prototype={
$0(){return this.a.D_(this.b,this.c)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Db,A.dD)
x(C.aDg,A.dy)
w(A.bR,[C.bNf,C.bNg,C.bNt,C.bNq,C.bNk,C.bNr,C.bNj,C.bNs])
w(A.bx,[C.bNl,C.bNm,C.bNn,C.bNo,C.bNi,C.bNh])
x(C.bNp,A.cR)
w(A.L,[C.aul,C.aq2])})()
A.br(b.typeUniverse,JSON.parse('{"Db":{"K":[],"e":[],"f":[]},"aDg":{"a_":["Db"]},"aul":{"L":[],"e":[],"f":[]},"aq2":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{z:x("ax<t<hM>>"),o:x("ax<t<hY>>"),x:x("r<c>"),u:x("r<e>"),B:x("a4<@,@>"),w:x("c"),v:x("ds"),d:x("t<@>?"),q:x("I?"),r:x("~")}})();(function constants(){D.aGv=new A.eW("Alergias",24,null,!0,null)
D.asn=new A.a2(0,7,8,0)
D.ajY=new A.a0H(null,B.t,null,2.5,null)
D.bL7=new A.Q(D.asn,D.ajY,null)
D.cat=new A.E("Escolha guardada.",null,null,null,null,null,null,null,null,null,null)
D.bYE=new A.bI(D.cat,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.z,null)
D.c2s=new A.M(!0,B.t,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4k=new A.M(!0,B.t,null,null,null,null,12,B.J,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cct=new A.E("INCLUI",null,D.c4k,null,null,null,null,null,null,null,null)})()};
(a=>{a["lk4KJSO1qXaz/bZyKCCUYKuVJy0="]=a.current})($__dart_deferred_initializers__);