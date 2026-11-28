((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dFv(d){var x=B.eQ(new B.et(new B.a6(P.Xo,new A.cFq(d),y.A),new A.cFr(),y.U))
return x},
cFq:function cFq(d){this.a=d},
cFr:function cFr(){},
dvc(){return new A.a9J(null)},
aQ8:function aQ8(d,e){this.a=d
this.b=e},
a9J:function a9J(d){this.a=d},
aQ7:function aQ7(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cxs:function cxs(d){this.a=d},
cxg:function cxg(){},
cxh:function cxh(){},
cxi:function cxi(){},
cxr:function cxr(){},
cxj:function cxj(d,e){this.a=d
this.b=e},
cxk:function cxk(d){this.a=d},
cxf:function cxf(d){this.a=d},
cxl:function cxl(d){this.a=d},
cxe:function cxe(d){this.a=d},
cxm:function cxm(d,e){this.a=d
this.b=e},
cxn:function cxn(){},
cxo:function cxo(){},
cxp:function cxp(d,e){this.a=d
this.b=e},
cxq:function cxq(d,e){this.a=d
this.b=e},
cxd:function cxd(){},
aJu:function aJu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OK:function OK(d){this.a=d},
aJv:function aJv(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
c9H:function c9H(d){this.a=d},
c9G:function c9G(d,e){this.a=d
this.b=e},
c9I:function c9I(d){this.a=d},
c9F:function c9F(d,e){this.a=d
this.b=e},
c9J:function c9J(d,e){this.a=d
this.b=e},
c9E:function c9E(d){this.a=d},
afC:function afC(d){this.a=d},
chL:function chL(){},
chM:function chM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
chK:function chK(d){this.a=d},
dB8(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dFv(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
d9M(d,e,f){var x,w=B.du(e,0,null)
if(w.gdm(w)==="/partners"){x=w.gel().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ai(d).ap("/partners",new M.Li(x,!1),y.X)
return}B.ai(d).ap(e,null,y.X)},
PZ(d,e,f){return A.dIf(d,e,f)},
dIf(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$PZ=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a0(0,$.qg().gaX(),y.I)
if(!f.ax)j.NR(f.a)
q=f.r
x=q==="parceiros"&&C.f.b4(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a0(0,$.cl(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aV4(s,p),$async$PZ)
case 11:r=h
if(d.e!=null){p=r.a
B.ai(d).ap("/chat/"+p,r,y.X)}x=1
break
u=2
x=10
break
case 8:u=7
i=t.pop()
x=10
break
case 7:x=2
break
case 10:case 6:case 4:p=f.ay
x=q==="pagamentos"&&p!=null?12:13
break
case 12:x=d.e!=null?14:15
break
case 14:x=16
return B.d(B.rG(d,e,p,null,null),$async$PZ)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a0(0,$.djh().gef(),y.e),$async$PZ)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dB8(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9Q||l==null?18:19
break
case 18:x=20
return B.d(B.cc(null,new A.cJ1(f,l),!1,d,!0,!1,null,y.N),$async$PZ)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.F0(f.a),$async$PZ)
case 24:if(d.e!=null)d.O(y.q).f.a4(B.cx(null,null,null,null,null,C.z,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.d9M(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9P)j.Wb(f.a)
A.d9M(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$PZ,w)},
cQf:function cQf(){},
cJ1:function cJ1(d,e){this.a=d
this.b=e},
cIZ:function cIZ(d){this.a=d},
cJ_:function cJ_(d){this.a=d},
cJ0:function cJ0(d){this.a=d},
aV4(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aV4=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&B.b()
x=3
return B.d(p.R("proposals").az(0,"partner_id, partner_profiles(business_name, cover_photo_url)").X("id",e).dP(0),$async$aV4)
case 3:u=g
p=J.a7(u)
t=B.a2(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.rD(d,t),$async$aV4)
case 4:r=g
p=s==null
q=B.E(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.hV(r,q,B.E(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aV4,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[138]
I=c[162]
E=c[166]
K=c[186]
L=c[120]
M=c[133]
G=c[87]
N=c[248]
A=a.updateHolder(c[52],A)
D=c[405]
O=c[80]
P=c[406]
H=c[170]
Q=c[334]
A.aQ8.prototype={
I(){return"_TasksTab."+this.b}}
A.a9J.prototype={
P(){return new A.aQ7(D.Ap)}}
A.aQ7.prototype={
ai(){this.aA()
B.jh(new A.cxs(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().H($.qg(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cxg(),a1))
C.e.cP(e,new A.cxh())
x=f.b
w=x.length+new B.a6(d,new A.cxi(),a1).gA(0)
v=w+e.length
u=new A.cxr()
t=y.p
s=B.a([new B.qQ(new A.cxj(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ek("Por fazer",r===D.Ap,w,new A.cxk(h),g),new B.ek("Feito",r===D.adE,e.length,new A.cxl(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.po(s,g),D.aI6,new K.m4(r,16,!1,g),B.vf(g,g,"O vosso plano",C.hG,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ap){e=B.a([D.coW,D.aHD],t)
if(x.length===0)e.push(D.aHs)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.J)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9R?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.C(C.e.gM(C.f.f4(k,B.aV("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a2(k," \xb7 ")
i=n.ax?g:D.aHV
s.push(new B.i9(D.aHq,n.e,k,i,!0,new A.cxm(h,n),!1,g))}e.push(B.fb(s,0))}e.push(D.aHC)
e.push(D.bLT)
x=B.a([],t)
if(!new B.a6(d,new A.cxn(),a1).gV(0).t())x.push(D.aHu)
else for(d=C.e.gV(d),a0=new B.h6(d,new A.cxo(),a0.i("h6<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i9(new G.Kj(!1,!1,new A.cxp(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.fb(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aHB)
else for(o=0;o<e.length;e.length===a0||(0,B.J)(e),++o){n=e[o]
d.push(new B.i9(N.Ql,n.e,new A.cxq(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aHF,B.fb(d,0)],t))}return B.cO(g,C.cT,B.oo(D.bWF,40,q,g,!0,!1),!0,g)},
L9(d,e){return this.biS(d,e)},
biS(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$L9=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.cc(null,new A.cxd(),!1,d,!0,!0,null,y.g),$async$L9)
case 3:q=g
if(q==null){x=1
break}u=e.a0(0,$.qg().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mp(q.d,s,r,t),$async$L9)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L9,w)}}
A.aJu.prototype={}
A.OK.prototype={
P(){var x=$.ad()
return new A.aJv(new B.aJ(C.ap,x),new B.aJ(C.ap,x))}}
A.aJv.prototype={
m(){var x=this.d,w=$.ad()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.dO(B.B(B.a([B.h("Nova tarefa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a1,new H.mx("T\xedtulo",x.d,x.w,w,w,w),C.Q,new H.mx("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.Q,L.d0w("Prazo (opcional)",new A.c9H(x),x.f),C.aC,new O.a1d(x.r,new A.c9I(x),w),C.a1,new B.fU("Adicionar",new A.c9J(x,d),!1,w)],y.p),C.I,C.i,C.K,0,C.v),C.z,w,new B.a0(20,20,20,v.f.d+20),w,w,C.a2)}}
A.afC.prototype={
Lk(d,e,f,g){return this.bap(0,e,f,g)},
bap(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Lk=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cQw(g.a)
x=3
return B.d(f.a0(0,$.zi().$1(g.a).gef(),y.B),$async$Lk)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.U2(e,u,!1),$async$Lk)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lk,w)},
bc(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cw($.cl(),new A.chL(),y.v,s),s)
s=e.H($.cRn().$1(new B.YN(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dn(x))return C.ar
s=B.a([],y.G)
for(w=J.c5(x),v=w.gV(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.zi().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aH(y.N)
for(w=w.gV(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.Q(C.CV,B.B(B.a([D.bLF,D.bMu,new F.Lg(s,new A.chM(this,d,e,x),v,null)],y.p),C.I,C.i,C.m,0,C.v),null)}}
var z=a.updateTypes(["OK(O)","~(dT)","x(nx)"])
A.cFq.prototype={
$1(d){return d.a===this.a},
$S:464}
A.cFr.prototype={
$1(d){return d.b},
$S:1511}
A.cxs.prototype={
$0(){return this.a.gS().a0(0,$.qg().gaX(),y.I).jH()},
$S:1}
A.cxg.prototype={
$1(d){return d.x===C.z7},
$S:61}
A.cxh.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bE(0,x==null?d.ch:x)},
$S:169}
A.cxi.prototype={
$1(d){return d.x===C.ih},
$S:61}
A.cxr.prototype={
$1(d){return C.f.aW(C.j.k(B.aK(d)),2,"0")+"/"+C.f.aW(C.j.k(B.ax(d)),2,"0")},
$S:148}
A.cxj.prototype={
$0(){var x=this.a
return x.L9(this.b,x.gS())},
$S:0}
A.cxk.prototype={
$0(){var x=this.a
return x.p(new A.cxf(x))},
$S:0}
A.cxf.prototype={
$0(){return this.a.w=D.Ap},
$S:0}
A.cxl.prototype={
$0(){var x=this.a
return x.p(new A.cxe(x))},
$S:0}
A.cxe.prototype={
$0(){return this.a.w=D.adE},
$S:0}
A.cxm.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.PZ(w,x.gS(),this.b)},
$S:0}
A.cxn.prototype={
$1(d){return d.x===C.ih},
$S:61}
A.cxo.prototype={
$1(d){return d.x===C.ih},
$S:61}
A.cxp.prototype={
$0(){return this.a.gS().a0(0,$.qg().gaX(),y.I).F0(this.b.a)},
$S:0}
A.cxq.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:17}
A.cxd.prototype={
$1(d){return D.coF},
$S:z+0}
A.c9H.prototype={
$1(d){var x=this.a
return x.p(new A.c9G(x,d))},
$S:504}
A.c9G.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.c9I.prototype={
$1(d){var x=this.a
return x.p(new A.c9F(x,d))},
$S:104}
A.c9F.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.c9J.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.c9E(u))
if(u.w!=null)return
x=B.an(this.b,!1)
w=C.f.C(u.d.a.a)
v=C.f.C(u.e.a.a)
if(v.length===0)v=null
x.ak(new A.aJu(w,v,u.f,u.r))},
$S:0}
A.c9E.prototype={
$0(){var x=this.a
x.w=C.f.C(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.chL.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:36}
A.chM.prototype={
$1(d){var x=this
return x.a.Lk(0,x.b,x.c,J.cZW(x.d,new A.chK(d)))},
$S:z+1}
A.chK.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cQf.prototype={
$1(d){return this.aH4(d)},
aH4(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&B.b()
x=7
return B.d(p.R("task_templates").cj(0),$async$$1)
case 7:s=f
r=B.D(y.N,y.c)
for(p=J.aq(s),o=y.P;p.t();){q=p.gE(p)
J.b6(r,B.a2(J.i(o.a(q),"id")),B.d67(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bHG
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1512}
A.cJ1.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aaW,x,x,x)],v)
w=w.f
if(C.f.C(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.X,B.h(C.f.C(w),x,x,x,x,D.c6d,x,x,x)],v))}u.push(C.br)
u.push(B.DM(D.aEm,D.ccy,new A.cIZ(d),x))
if(this.b!=null)C.e.n(u,B.a([C.X,B.hs(Q.ab6,new A.cJ_(d),x)],v))
u.push(C.as)
u.push(B.cu(C.mx,x,x,new A.cJ0(d),x,x))
return B.bC(!0,new B.Q(C.NT,B.B(u,C.I,C.i,C.K,0,C.v),x),x,C.Z,!0)},
$S:46}
A.cIZ.prototype={
$0(){return B.an(this.a,!1).ak("done")},
$S:0}
A.cJ_.prototype={
$0(){return B.an(this.a,!1).ak("open")},
$S:0}
A.cJ0.prototype={
$0(){return B.an(this.a,!1).bB()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.cFq,A.cFr,A.cxg,A.cxi,A.cxr,A.cxn,A.cxo,A.cxd,A.c9H,A.c9I,A.chL,A.chM,A.chK,A.cQf,A.cJ1])
w(A.aQ8,B.f6)
w(A.a9J,B.dB)
w(A.aQ7,B.dx)
x(B.bR,[A.cxs,A.cxj,A.cxk,A.cxf,A.cxl,A.cxe,A.cxm,A.cxp,A.cxq,A.c9G,A.c9F,A.c9J,A.c9E,A.cIZ,A.cJ_,A.cJ0])
w(A.cxh,B.cQ)
w(A.aJu,B.K)
w(A.OK,B.G)
w(A.aJv,B.a_)
w(A.afC,B.ep)})()
B.bp(b.typeUniverse,JSON.parse('{"a9J":{"G":[],"e":[],"f":[]},"OK":{"G":[],"e":[],"f":[]},"aQ7":{"a_":["a9J"]},"aJv":{"a_":["OK"]},"afC":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ay<t<nx>?>"),D:x("ay<dT?>"),R:x("hV"),v:x("ee"),Z:x("nv"),e:x("F<a5<c,oO>>"),B:x("F<dT?>"),E:x("r<ek>"),G:x("r<dT>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oO>"),P:x("a5<c,@>"),U:x("et<+(c,c),c>"),w:x("dg"),N:x("c"),I:x("tZ"),z:x("rm"),c:x("oO"),A:x("a6<+(c,c)>"),g:x("aJu"),q:x("dq"),h:x("a5<c,@>?"),X:x("K?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aEm=new B.ba(C.dm,null,null,null,null,null)
D.aHq=new G.Kj(!1,!1,null,null)
D.aHA=new B.i9(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bec=x([D.aHA],y.p)
D.aHs=new B.Te(D.bec,0,null)
D.aHu=new B.i9(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aHB=new B.i9(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aHC=new E.Es("As vossas tarefas",null,null,null)
D.aHD=new E.Es("Pr\xf3ximas tarefas",null,null,null)
D.aHF=new E.Es("Feito",null,null,null)
D.aHV=new B.ew("Nova",C.db,null)
D.aI6=new B.m5("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bHG=new B.c1(C.cI,[],B.w("c1<c,oO>"))
D.ch2=new B.C("Sugest\xf5es para ti",null,C.bl,null,null,null,null,null,null,null,null)
D.bLF=new B.Q(C.bO,D.ch2,null)
D.ceV=new B.C("Criadas por voc\xeas, sem limite.",null,C.R,null,null,null,null,null,null,null,null)
D.bLT=new B.Q(C.jy,D.ceV,null)
D.auj=new B.a0(20,2,20,10)
D.cdN=new B.C("Com base no que tens procurado.",null,C.R,null,null,null,null,null,null,null,null)
D.bMu=new B.Q(D.auj,D.cdN,null)
D.ckL=B.c9("afC")
D.bWF=new B.fn([D.ckL],B.w("fn<ky>"))
D.c6d=new B.N(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccy=new B.C("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.coF=new A.OK(null)
D.coW=new A.afC(null)
D.Ap=new A.aQ8(0,"todo")
D.adE=new A.aQ8(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWq","djh",()=>B.eF(new A.cQf(),null,!1,null,null,y.r))})()};
(a=>{a["p7FqmhhvG4TSaBK44cvFuRVB4aM="]=a.current})($__dart_deferred_initializers__);