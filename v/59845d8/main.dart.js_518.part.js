((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dJj(d){var x=B.eL(new B.eq(new B.a6(P.WD,new A.cIc(d),y.A),new A.cId(),y.U))
return x},
cIc:function cIc(d){this.a=d},
cId:function cId(){},
dyY(){return new A.a9O(null)},
aQ5:function aQ5(d,e){this.a=d
this.b=e},
a9O:function a9O(d){this.a=d},
aQ4:function aQ4(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cAo:function cAo(d){this.a=d},
cAc:function cAc(){},
cAd:function cAd(){},
cAe:function cAe(){},
cAn:function cAn(){},
cAf:function cAf(d,e){this.a=d
this.b=e},
cAg:function cAg(d){this.a=d},
cAb:function cAb(d){this.a=d},
cAh:function cAh(d){this.a=d},
cAa:function cAa(d){this.a=d},
cAi:function cAi(d,e){this.a=d
this.b=e},
cAj:function cAj(){},
cAk:function cAk(){},
cAl:function cAl(d,e){this.a=d
this.b=e},
cAm:function cAm(d,e){this.a=d
this.b=e},
cA9:function cA9(){},
aJr:function aJr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OV:function OV(d){this.a=d},
aJs:function aJs(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cbf:function cbf(d){this.a=d},
cbe:function cbe(d,e){this.a=d
this.b=e},
cbg:function cbg(d){this.a=d},
cbd:function cbd(d,e){this.a=d
this.b=e},
cbh:function cbh(d,e){this.a=d
this.b=e},
cbc:function cbc(d){this.a=d},
afA:function afA(d){this.a=d},
cjH:function cjH(){},
cjI:function cjI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjG:function cjG(d){this.a=d},
dER(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dJj(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
dde(d,e,f){var x,w=B.dA(e,0,null)
if(w.gdi(w)==="/partners"){x=w.gek().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ae(d).aj("/partners",new M.Ln(x,!1),y.X)
return}B.ae(d).aj(e,null,y.X)},
Qc(d,e,f){return A.dM7(d,e,f)},
dM7(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qc=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a_(0,$.zg().gaX(),y.I)
if(!f.ax)j.Ns(f.a)
q=f.r
x=q==="parceiros"&&C.f.b1(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a_(0,$.cq(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aV5(s,p),$async$Qc)
case 11:r=h
if(d.e!=null){p=r.a
B.ae(d).aj("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rF(d,e,p,null,null),$async$Qc)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a_(0,$.dmV().gdI(),y.e),$async$Qc)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dER(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9a||l==null?18:19
break
case 18:x=20
return B.d(B.bQ(null,new A.cM1(f,l),!1,d,!0,!1,null,y.N),$async$Qc)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EU(f.a),$async$Qc)
case 24:if(d.e!=null)d.O(y.q).f.a0(B.bY(null,null,null,null,null,C.y,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.dde(d,l,m)
case 22:x=1
break
case 19:if(q===C.a99)j.W7(f.a)
A.dde(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qc,w)},
cTF:function cTF(){},
cM1:function cM1(d,e){this.a=d
this.b=e},
cLZ:function cLZ(d){this.a=d},
cM_:function cM_(d){this.a=d},
cM0:function cM0(d){this.a=d},
aV5(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aV5=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").al(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",e).e9(0),$async$aV5)
case 3:u=g
p=J.a7(u)
t=B.Y(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.q9(d,t),$async$aV5)
case 4:r=g
p=s==null
q=B.C(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eB(r,q,t,B.C(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.jW)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aV5,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[141]
I=c[163]
E=c[151]
K=c[186]
L=c[123]
M=c[136]
G=c[86]
N=c[250]
A=a.updateHolder(c[52],A)
D=c[406]
O=c[79]
P=c[407]
H=c[170]
Q=c[334]
A.aQ5.prototype={
I(){return"_TasksTab."+this.b}}
A.a9O.prototype={
R(){return new A.aQ4(D.Aa)}}
A.aQ4.prototype={
ad(){this.aq()
B.j6(new A.cAo(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().G($.zg(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cAc(),a1))
C.e.ct(e,new A.cAd())
x=f.b
w=x.length+new B.a6(d,new A.cAe(),a1).gA(0)
v=w+e.length
u=new A.cAn()
t=y.p
s=B.a([new B.qM(new A.cAf(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ek("Por fazer",r===D.Aa,w,new A.cAg(h),g),new B.ek("Feito",r===D.acG,e.length,new A.cAh(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pt(s,g),D.aH2,new K.mb(r,16,!1,g),B.vj(g,g,"O vosso plano",C.hG,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Aa){e=B.a([D.cnj,D.aGD],t)
if(x.length===0)e.push(D.aGt)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.G)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9b?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.B(C.e.gJ(C.f.eW(k,B.aS("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a2(k," \xb7 ")
i=n.ax?g:D.aGR
s.push(new B.io(D.aGr,n.e,k,i,!0,new A.cAi(h,n),!1,g))}e.push(B.eR(s,0))}e.push(D.aGC)
e.push(D.bKJ)
x=B.a([],t)
if(!new B.a6(d,new A.cAj(),a1).gX(0).q())x.push(D.aGu)
else for(d=C.e.gX(d),a0=new B.fz(d,new A.cAk(),a0.i("fz<1>"));a0.q();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.p(u.$1(s))
x.push(new B.io(new G.Ko(!1,!1,new A.cAl(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eR(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGz)
else for(o=0;o<e.length;e.length===a0||(0,B.G)(e),++o){n=e[o]
d.push(new B.io(N.PI,n.e,new A.cAm(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGB,B.eR(d,0)],t))}return B.cP(g,C.cP,B.nJ(D.bVq,40,q,g,!0,!1),!0,g)},
KX(d,e){return this.bhK(d,e)},
bhK(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$KX=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bQ(null,new A.cA9(),!1,d,!0,!0,null,y.g),$async$KX)
case 3:q=g
if(q==null){x=1
break}u=e.a_(0,$.zg().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mg(q.d,s,r,t),$async$KX)
case 4:case 1:return B.l(v,w)}})
return B.m($async$KX,w)}}
A.aJr.prototype={}
A.OV.prototype={
R(){var x=$.aa()
return new A.aJs(new B.aF(C.ak,x),new B.aF(C.ak,x))}}
A.aJs.prototype={
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.aT(d,w,y.w).w
return B.dS(B.y(B.a([B.h("Nova tarefa",w,w,w,w,B.ay(d).ok.r,w,w),C.a_,new H.no("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.no("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d3T("Prazo (opcional)",new A.cbf(x),x.f),C.aA,new O.a1l(x.r,new A.cbg(x),w),C.a_,new B.fZ("Adicionar",new A.cbh(x,d),!1,w)],y.p),C.E,C.h,C.J),C.y,w,new B.a4(20,20,20,v.f.d+20),w,C.av)}}
A.afA.prototype={
L7(d,e,f,g){return this.b96(0,e,f,g)},
b96(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$L7=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cTW(g.a)
x=3
return B.d(f.a_(0,$.wA().$1(g.a).gdI(),y.B),$async$L7)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Uf(e,u,!1),$async$L7)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L7,w)},
ba(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cC($.cq(),new A.cjH(),y.v,s),s)
s=e.G($.cUO().$1(new B.YX(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dg(x))return C.ao
s=B.a([],y.G)
for(w=J.c8(x),v=w.gX(x),u=y.D;v.q();){t=v.gE(v)
t=e.G($.wA().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aL(y.N)
for(w=w.gX(x);w.q();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.S(C.CC,B.y(B.a([D.bKl,D.bKm,new F.Lj(s,new A.cjI(this,d,e,x),v,null)],y.p),C.E,C.h,C.l),null)}}
var z=a.updateTypes(["OV(N)","~(dq)","B(nA)"])
A.cIc.prototype={
$1(d){return d.a===this.a},
$S:464}
A.cId.prototype={
$1(d){return d.b},
$S:1526}
A.cAo.prototype={
$0(){return this.a.gS().a_(0,$.zg().gaX(),y.I).je()},
$S:1}
A.cAc.prototype={
$1(d){return d.x===C.yV},
$S:60}
A.cAd.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bA(0,x==null?d.ch:x)},
$S:172}
A.cAe.prototype={
$1(d){return d.x===C.ir},
$S:60}
A.cAn.prototype={
$1(d){return C.f.aT(C.j.k(B.aE(d)),2,"0")+"/"+C.f.aT(C.j.k(B.aw(d)),2,"0")},
$S:155}
A.cAf.prototype={
$0(){var x=this.a
return x.KX(this.b,x.gS())},
$S:0}
A.cAg.prototype={
$0(){var x=this.a
return x.p(new A.cAb(x))},
$S:0}
A.cAb.prototype={
$0(){return this.a.w=D.Aa},
$S:0}
A.cAh.prototype={
$0(){var x=this.a
return x.p(new A.cAa(x))},
$S:0}
A.cAa.prototype={
$0(){return this.a.w=D.acG},
$S:0}
A.cAi.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qc(w,x.gS(),this.b)},
$S:0}
A.cAj.prototype={
$1(d){return d.x===C.ir},
$S:60}
A.cAk.prototype={
$1(d){return d.x===C.ir},
$S:60}
A.cAl.prototype={
$0(){return this.a.gS().a_(0,$.zg().gaX(),y.I).EU(this.b.a)},
$S:0}
A.cAm.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.p(this.b.$1(v))},
$S:18}
A.cA9.prototype={
$1(d){return D.cn3},
$S:z+0}
A.cbf.prototype={
$1(d){var x=this.a
return x.p(new A.cbe(x,d))},
$S:529}
A.cbe.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cbg.prototype={
$1(d){var x=this.a
return x.p(new A.cbd(x,d))},
$S:137}
A.cbd.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cbh.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cbc(u))
if(u.w!=null)return
x=B.al(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.ag(new A.aJr(w,v,u.f,u.r))},
$S:0}
A.cbc.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cjH.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:38}
A.cjI.prototype={
$1(d){var x=this
return x.a.L7(0,x.b,x.c,J.d2j(x.d,new A.cjG(d)))},
$S:z+1}
A.cjG.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cTF.prototype={
$1(d){return this.aGB(d)},
aGB(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").cl(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ao(s),o=y.P;p.q();){q=p.gE(p)
J.b2(r,B.Y(J.i(o.a(q),"id")),B.d9y(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGy
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1527}
A.cM1.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aag,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.P,B.h(C.f.B(w),x,x,x,x,D.c4I,x,x)],v))}u.push(C.bO)
u.push(new B.am(B.zZ(D.aDn,D.cfI,new A.cLZ(d),x),x))
if(this.b!=null)C.e.n(u,B.a([C.P,new B.am(B.hk(Q.aaG,new A.cM_(d),x),x)],v))
u.push(C.ar)
u.push(new B.am(B.cJ(C.mp,x,x,new A.cM0(d),x,x),x))
return B.bB(!0,new B.S(C.Nf,B.y(u,C.E,C.h,C.J),x),x,C.Z,!0)},
$S:31}
A.cLZ.prototype={
$0(){return B.al(this.a,!1).ag("done")},
$S:0}
A.cM_.prototype={
$0(){return B.al(this.a,!1).ag("open")},
$S:0}
A.cM0.prototype={
$0(){return B.al(this.a,!1).bk()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bt,[A.cIc,A.cId,A.cAc,A.cAe,A.cAn,A.cAj,A.cAk,A.cA9,A.cbf,A.cbg,A.cjH,A.cjI,A.cjG,A.cTF,A.cM1])
w(A.aQ5,B.fg)
w(A.a9O,B.dC)
w(A.aQ4,B.dw)
x(B.bL,[A.cAo,A.cAf,A.cAg,A.cAb,A.cAh,A.cAa,A.cAi,A.cAl,A.cAm,A.cbe,A.cbd,A.cbh,A.cbc,A.cLZ,A.cM_,A.cM0])
w(A.cAd,B.cK)
w(A.aJr,B.M)
w(A.OV,B.H)
w(A.aJs,B.a_)
w(A.afA,B.ew)})()
B.br(b.typeUniverse,JSON.parse('{"a9O":{"H":[],"e":[],"f":[]},"OV":{"H":[],"e":[],"f":[]},"aQ4":{"a_":["a9O"]},"aJs":{"a_":["OV"]},"afA":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.z
return{F:x("ax<t<nA>?>"),D:x("ax<dq?>"),R:x("eB"),v:x("ed"),Z:x("nz"),e:x("F<a3<c,oQ>>"),B:x("F<dq?>"),E:x("r<ek>"),G:x("r<dq>"),s:x("r<c>"),p:x("r<e>"),r:x("a3<c,oQ>"),P:x("a3<c,@>"),U:x("eq<+(c,c),c>"),w:x("du"),N:x("c"),I:x("tY"),z:x("Bt"),c:x("oQ"),A:x("a6<+(c,c)>"),g:x("aJr"),q:x("dl"),h:x("a3<c,@>?"),X:x("M?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDn=new B.b8(C.dp,null,null,null,null,null)
D.aGr=new G.Ko(!1,!1,null,null)
D.aGy=new B.io(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bda=x([D.aGy],y.p)
D.aGt=new B.To(D.bda,0,null)
D.aGu=new B.io(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGz=new B.io(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGB=new E.Es("Feito",null)
D.aGC=new E.Es("As vossas tarefas",null)
D.aGD=new E.Es("Pr\xf3ximas tarefas",null)
D.aGR=new B.dU("Nova",C.cU,null)
D.aH2=new B.lf("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGy=new B.c6(C.cJ,[],B.z("c6<c,oQ>"))
D.caj=new B.D("Sugest\xf5es para ti",null,C.bi,null,null,null,null,null,null,null)
D.bKl=new B.S(C.bG,D.caj,null)
D.ata=new B.a4(20,2,20,10)
D.c7n=new B.D("Com base no que tens procurado.",null,C.L,null,null,null,null,null,null,null)
D.bKm=new B.S(D.ata,D.c7n,null)
D.cbe=new B.D("Criadas por voc\xeas, sem limite.",null,C.L,null,null,null,null,null,null,null)
D.bKJ=new B.S(C.jB,D.cbe,null)
D.cj8=B.ca("afA")
D.bVq=new B.fn([D.cj8],B.z("fn<l_>"))
D.c4I=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cfI=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null)
D.cn3=new A.OV(null)
D.cnj=new A.afA(null)
D.Aa=new A.aQ5(0,"todo")
D.acG=new A.aQ5(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_y","dmV",()=>B.ez(new A.cTF(),null,!1,null,null,y.r))})()};
(a=>{a["qJJfx3/FY+U63LJhTV2DtZYyoO0="]=a.current})($__dart_deferred_initializers__);