((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,H,I,K,L,C={
d6S(d,e){return new C.Ck(e,d,null)},
Ck:function Ck(d,e,f){this.d=d
this.e=e
this.a=f},
aAp:function aAp(d,e){var _=this
_.w=null
_.x=d
_.y=e
_.z=!1
_.d=$
_.c=_.a=null},
bHi:function bHi(d){this.a=d},
bHj:function bHj(d){this.a=d},
bHo:function bHo(){},
bHp:function bHp(d){this.a=d},
bHq:function bHq(d){this.a=d},
bHr:function bHr(d){this.a=d},
bHs:function bHs(){},
bHw:function bHw(d){this.a=d},
bHt:function bHt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHn:function bHn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHl:function bHl(d,e,f){this.a=d
this.b=e
this.c=f},
bHk:function bHk(d,e,f){this.a=d
this.b=e
this.c=f},
bHu:function bHu(d,e,f){this.a=d
this.b=e
this.c=f},
bHm:function bHm(d,e,f){this.a=d
this.b=e
this.c=f},
bHv:function bHv(d,e,f){this.a=d
this.b=e
this.c=f},
arP:function arP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ctJ(d,e,f,g){var x=0,w=A.n(y.I),v,u,t,s,r,q,p
var $async$ctJ=A.j(function(h,i){if(h===1)return A.k(i,w)
for(;;)switch(x){case 0:r=$.R().b
r===$&&A.b()
u=y.N
t=y.z
q=A
p=y.f
x=3
return A.d(r.b2("choose_my_menu",A.Q(["p_booking_id",e,"p_package_id",g,"p_extra_ids",f,"p_allergies",d],u,t),t),$async$ctJ)
case 3:s=q.ei(p.a(i),u,t)
t=A.L(s.h(0,"payment_id"))
v=new A.aIw(A.dR(s.h(0,"amount")),t)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$ctJ,w)}},D
J=c[1]
A=c[0]
B=c[2]
E=c[273]
F=c[158]
G=c[171]
H=c[272]
I=c[188]
K=c[219]
L=c[95]
C=a.updateHolder(c[45],C)
D=c[271]
C.Ck.prototype={
P(){return new C.aAp(A.aJ(y.N),new A.aG(B.al,$.ad()))}}
C.aAp.prototype={
aj(){var x,w,v,u,t,s=this
s.aH()
x=s.a.e.Q
if(x!=null){s.w=A.L(x.h(0,"package_id"))
w=y.g.a(x.h(0,"extras_snapshot"))
w=J.aA(w==null?B.an:w)
v=y.f
u=s.x
while(w.t()){t=w.gG(w)
if(v.b(t)&&typeof J.h(t,"id")=="string")u.B(0,A.a2(J.h(t,"id")))}w=A.L(x.h(0,"allergies"))
if(w==null)w=""
s.y.sbz(0,w)}},
m(){var x=this.y
x.a0$=$.ad()
x.V$=0
this.a8()},
Cz(d,e){return this.bdc(d,e)},
bdc(a0,a1){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Cz=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:r.q(new C.bHi(r))
u=4
l=r.a.e
k=r.x
k=A.U(k,A.u(k).c)
j=B.f.D(r.y.a.a)
if(j.length===0)j=null
x=7
return A.d(C.ctJ(j,l.a,k,a0.a),$async$Cz)
case 7:q=a3
k=r.gU()
l=$.aRN()
k.al(l.$1(r.a.d))
j=r.c
if(j==null){s=[1]
x=5
break}p=q.b
if(p==null){j.R(y.q).f.a7(D.bUl)
l=r.c
l.toString
A.ar(l).aC(null)
s=[1]
x=5
break}x=8
return A.d(k.a1(0,$.YM().gf_(),y.o),$async$Cz)
case 8:o=a3
j=r.c
if(j==null){s=[1]
x=5
break}i=r.a.e
h=A.ii(q.a,o)
g=q.a
x=9
return A.d(A.ar(j).aU("/pay",new A.rZ(p,i.c,"guest_share",h,g,null,null,!1,null,null,null,null,null),y.O),$async$Cz)
case 9:k.al(l.$1(r.a.d))
l=r.c
if(l!=null)A.ar(l).aC(null)
s.push(6)
x=5
break
case 4:u=3
d=t.pop()
l=A.a7(d)
if(l instanceof A.cV){n=l
l=r.c
if(l==null){s=[1]
x=5
break}if(B.f.n(n.a,"closed"))e="A escolha j\xe1 fechou."
else e=B.f.n(n.a,"already_paid")?"J\xe1 pagaste a tua parte: n\xe3o d\xe1 para mudar.":"N\xe3o foi poss\xedvel guardar. Tenta outra vez."
m=e
l.R(y.q).f.a7(A.cB(null,null,null,null,null,B.z,null,A.i(m,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}else{l=r.c
if(l!=null)l.R(y.q).f.a7(B.fk)}s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.q(new C.bHj(r))
x=s.pop()
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Cz,w)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gU(),g=h.L($.cMM().$1(j.a.e.b),y.X)
g=g.gv(g)
if(g==null)g=H.Em
g=J.dr(g,new C.bHo())
x=A.U(g,g.$ti.i("y.E"))
h=h.L($.cMJ().$1(j.a.e.b),y.R)
w=h.gv(h)
if(w==null)w=E.k6
v=A.i_(new A.a4(x,new C.bHp(j),A.a6(x).i("a4<1>")))
h=v==null
if(h)u=E.k6
else{g=J.dr(w,new C.bHq(v))
u=A.U(g,g.$ti.i("y.E"))}t=h?0:v.e+new A.a4(u,new C.bHr(j),A.a6(u).i("a4<1>")).dG(0,0,new C.bHs())
g=j.a.e
s=g.w
r=y.s
g=A.a([g.c],r)
if(s!=null)g.push("escolhe at\xe9 "+A.d_I(s))
q=y.p
g=A.a([B.im,L.cQO("O teu menu",B.e.aa(g," \xb7 ")),new A.hJ("A carta \xb7 "+x.length,24,i,i)],q)
for(p=0;p<x.length;++p){o=p===0?0:10
n=x[p]
g.push(new A.V(new A.a0(0,o,0,0),new C.arP(n,n.a===j.w,new C.bHt(j,x,p,w),i),i))}if(u.length!==0){o=v.c
n=A.X(22)
m=A.a([],q)
for(l=j.x,p=0;p<u.length;++p){k=u[p]
m.push(new F.a0v(k,l.n(0,k.a),p===u.length-1,new C.bHu(j,u,p),i))}B.e.p(g,A.a([new A.kw("Juntar ao "+o,i,i,24,i),A.F(i,A.G(m,B.x,B.l,B.q,0,B.w),B.r,i,i,new A.M(B.u,i,i,n,i,i,B.y),i,i,i,B.eg,i,i,i)],q))}g.push(D.aEd)
g.push(A.hg(!1,j.y,i,B.u,"Ex.: sem gl\xfaten, marisco",i,i,120,i))
g.push(B.bw)
o=!h
if(o){r=A.a([v.c],r)
n=j.x.a
if(n!==0)r.push("+ "+n+" extra")
g.push(new A.V(B.dJ,A.Y(A.a([A.a9(A.i(B.e.aa(r," \xb7 "),i,i,i,B.a6,i,i,i),1),A.i(A.b8(t,!1),i,i,i,B.cI,i,i,i)],q),B.x,B.l,B.q,0,i,i),i))}r=!o||j.z?i:new C.bHv(j,v,t)
q=A.cf(B.A,i,i,B.u,B.dD,i,B.ac,i,i,B.kp)
if(h)h="Escolhe um menu"
else h=j.a.e.e==="each"?"Escolher e pagar \xb7 "+A.b8(t,!1):"Guardar escolha"
g.push(A.bD(A.i(h,i,i,i,i,i,i,i),r,q))
g.push(B.a1)
g.push(A.i(j.a.e.e==="each"?"Pagas a tua parte na app. A taxa de servi\xe7o \xe9 paga por quem paga.":"Pagam os organizadores. Podes mudar at\xe9 a escolha fechar.",i,i,i,B.a6,B.a5,i,i))
return A.cP(i,B.bA,I.rM(K.hm,140,g,new C.bHw(d),!0),!0,i)}}
C.arP.prototype={
u(d){var x,w=null,v=this.d,u=v?B.u:B.A,t=v?B.u.c4(0.85):B.Q,s=this.c,r=s.f?"desde ":"",q=A.b8(s.e,!1),p=G.OF(s.y),o=v?new A.M($.an,w,w,A.X(22),w,w,B.y):new A.M(B.u,w,w,A.X(22),B.aK,w,B.y),n=v?B.u:w,m=v?w:A.cx(B.mC,1.5),l=v?A.b6(B.de,$.an,w,w,16):w
m=A.F(w,l,B.r,w,w,new A.M(n,w,m,w,w,w,B.aI),w,24,w,w,w,w,24)
n=y.p
p=A.a([A.Y(A.a([A.a9(A.i(s.c,w,w,w,A.aH(w,w,u,w,w,w,w,w,w,w,w,16,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1),B.ax,A.i(r+q+p,w,w,w,A.aH(w,w,u,w,w,w,w,w,w,w,w,16,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],n),B.J,B.l,B.q,0,w,w)],n)
r=B.f.D(s.d)
if(r.length!==0)B.e.p(p,A.a([B.au,A.i(r,w,w,w,A.aH(w,w,t,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w)],n))
if(v&&s.w.length!==0){r=A.a([A.F(w,w,B.r,B.u.c4(0.3),w,w,w,1,B.ef,w,w,w,w),D.c8f,B.au],n)
for(q=s.w,l=q.length,x=0;x<q.length;q.length===l||(0,A.K)(q),++x)r.push(new A.V(B.LY,A.Y(A.a([D.bIL,new A.c0(1,B.aw,A.i(q[x],w,w,w,D.bZg,w,w,w),w)],n),B.J,B.l,B.q,0,w,w),w))
s=s.x
if(s!=null)B.e.p(r,A.a([B.aD,A.i("N\xc3O INCLUI: "+s,w,w,w,A.aH(w,w,t,w,w,w,w,w,w,w,w,12,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],n))
B.e.p(p,r)}return A.bz(w,!0,w,A.b0(A.fw(w,A.Y(A.a([m,B.am,A.a9(A.G(p,B.J,B.l,B.q,0,B.w),1)],n),B.J,B.l,B.q,0,w,w),w,B.aP,o,B.eT,w,w,w,B.bc,w),this.e,w),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.ab,w)}}
var z=a.updateTypes(["z(fK)","z(fL)","S(S,fK)"])
C.bHi.prototype={
$0(){return this.a.z=!0},
$S:0}
C.bHj.prototype={
$0(){return this.a.z=!1},
$S:0}
C.bHo.prototype={
$1(d){return d.y==="person"&&!d.f},
$S:z+1}
C.bHp.prototype={
$1(d){return d.a===this.a.w},
$S:z+1}
C.bHq.prototype={
$1(d){var x=d.r
return x.length===0||B.e.n(x,this.a.a)},
$S:z+0}
C.bHr.prototype={
$1(d){return this.a.x.n(0,d.a)},
$S:z+0}
C.bHs.prototype={
$2(d,e){return d+e.e},
$S:z+2}
C.bHw.prototype={
$0(){var x=this.a,w=A.ar(x).c
w===$&&A.b()
return w.jq()?A.ar(x).aC(null):A.ar(x).bR(0,"/guest-home",null)},
$S:0}
C.bHt.prototype={
$0(){var x=this,w=x.a
return w.q(new C.bHn(w,x.b,x.c,x.d))},
$S:0}
C.bHn.prototype={
$0(){var x=this,w=x.a,v=x.b,u=x.c
w.w=v[u].a
w.x.CY(new C.bHl(x.d,v,u),!0)},
$S:0}
C.bHl.prototype={
$1(d){return!J.P0(this.a,new C.bHk(d,this.b,this.c))},
$S:8}
C.bHk.prototype={
$1(d){var x,w
if(d.a===this.a){x=this.b[this.c]
w=d.r
x=w.length===0||B.e.n(w,x.a)}else x=!1
return x},
$S:z+0}
C.bHu.prototype={
$0(){var x=this.a
return x.q(new C.bHm(x,this.b,this.c))},
$S:0}
C.bHm.prototype={
$0(){var x=this.a.x,w=this.b,v=this.c
return x.n(0,w[v].a)?x.J(0,w[v].a):x.B(0,w[v].a)},
$S:0}
C.bHv.prototype={
$0(){return this.a.Cz(this.b,this.c)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Ck,A.ds)
x(C.aAp,A.di)
w(A.bN,[C.bHi,C.bHj,C.bHw,C.bHt,C.bHn,C.bHu,C.bHm,C.bHv])
w(A.bv,[C.bHo,C.bHp,C.bHq,C.bHr,C.bHl,C.bHk])
x(C.bHs,A.cM)
x(C.arP,A.O)})()
A.bt(b.typeUniverse,JSON.parse('{"Ck":{"I":[],"e":[],"f":[]},"aAp":{"a1":["Ck"]},"arP":{"O":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{R:x("aE<t<fK>>"),X:x("aE<t<fL>>"),o:x("E<S>"),s:x("r<c>"),p:x("r<e>"),f:x("a3<@,@>"),I:x("+amount,paymentId(S,c?)"),N:x("c"),q:x("dF"),z:x("@"),g:x("t<@>?"),O:x("J?"),H:x("~")}})();(function constants(){D.aEd=new A.hJ("Alergias",24,null,null)
D.aqM=new A.a0(0,7,8,0)
D.aik=new A.a__(null,B.u,2.5,null)
D.bIL=new A.V(D.aqM,D.aik,null)
D.c6m=new A.B("Escolha guardada.",null,null,null,null,null,null,null,null,null,null)
D.bUl=new A.bX(D.c6m,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.z,null)
D.bZg=new A.H(!0,B.u,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c0j=new A.H(!0,B.u,null,null,null,null,12,B.F,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8f=new A.B("INCLUI",null,D.c0j,null,null,null,null,null,null,null,null)})()};
(a=>{a["D/YTZO08TZ0lscW4poaEbaT0R3s="]=a.current})($__dart_deferred_initializers__);