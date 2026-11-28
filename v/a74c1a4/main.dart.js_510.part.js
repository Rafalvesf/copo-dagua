((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dHD(d){var x=B.eK(new B.ep(new B.a6(P.Wz,new A.cGP(d),y.A),new A.cGQ(),y.U))
return x},
cGP:function cGP(d){this.a=d},
cGQ:function cGQ(){},
dxk(){return new A.a9A(null)},
aPx:function aPx(d,e){this.a=d
this.b=e},
a9A:function a9A(d){this.a=d},
aPw:function aPw(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cz7:function cz7(d){this.a=d},
cyW:function cyW(){},
cyX:function cyX(){},
cyY:function cyY(){},
cz6:function cz6(){},
cyZ:function cyZ(d,e){this.a=d
this.b=e},
cz_:function cz_(d){this.a=d},
cyV:function cyV(d){this.a=d},
cz0:function cz0(d){this.a=d},
cyU:function cyU(d){this.a=d},
cz1:function cz1(d,e){this.a=d
this.b=e},
cz2:function cz2(){},
cz3:function cz3(){},
cz4:function cz4(d,e){this.a=d
this.b=e},
cz5:function cz5(d,e){this.a=d
this.b=e},
cyT:function cyT(){},
aIX:function aIX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OM:function OM(d){this.a=d},
aIY:function aIY(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
caa:function caa(d){this.a=d},
ca9:function ca9(d,e){this.a=d
this.b=e},
cab:function cab(d){this.a=d},
ca8:function ca8(d,e){this.a=d
this.b=e},
cac:function cac(d,e){this.a=d
this.b=e},
ca7:function ca7(d){this.a=d},
afk:function afk(d){this.a=d},
ciy:function ciy(){},
ciz:function ciz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cix:function cix(d){this.a=d},
dDd(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dHD(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
dbE(d,e,f){var x,w=B.dz(e,0,null)
if(w.gdh(w)==="/partners"){x=w.gei().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ac(d).ak("/partners",new M.Le(x,!1),y.X)
return}B.ac(d).ak(e,null,y.X)},
Q3(d,e,f){return A.dKp(d,e,f)},
dKp(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Q3=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a_(0,$.zb().gaX(),y.I)
if(!f.ax)j.Np(f.a)
q=f.r
x=q==="parceiros"&&C.f.b1(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a_(0,$.co(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aUw(s,p),$async$Q3)
case 11:r=h
if(d.e!=null){p=r.a
B.ac(d).ak("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rA(d,e,p,null,null),$async$Q3)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a_(0,$.dlh().gdG(),y.e),$async$Q3)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dDd(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a92||l==null?18:19
break
case 18:x=20
return B.d(B.bS(null,new A.cKD(f,l),!1,d,!0,!1,null,y.N),$async$Q3)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EN(f.a),$async$Q3)
case 24:if(d.e!=null)d.O(y.q).f.a1(B.bZ(null,null,null,null,null,C.y,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.dbE(d,l,m)
case 22:x=1
break
case 19:if(q===C.a91)j.VZ(f.a)
A.dbE(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Q3,w)},
cS9:function cS9(){},
cKD:function cKD(d,e){this.a=d
this.b=e},
cKA:function cKA(d){this.a=d},
cKB:function cKB(d){this.a=d},
cKC:function cKC(d){this.a=d},
aUw(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aUw=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.P().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").ai(0,"partner_id, partner_profiles(business_name, cover_photo_url)").U("id",e).dM(0),$async$aUw)
case 3:u=g
p=J.a7(u)
t=B.Y(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.q5(d,t),$async$aUw)
case 4:r=g
p=s==null
q=B.B(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eA(r,q,t,B.B(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.jS)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aUw,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[140]
I=c[162]
E=c[150]
K=c[183]
L=c[122]
M=c[135]
G=c[86]
N=c[247]
A=a.updateHolder(c[52],A)
D=c[403]
O=c[79]
P=c[404]
H=c[169]
Q=c[331]
A.aPx.prototype={
I(){return"_TasksTab."+this.b}}
A.a9A.prototype={
S(){return new A.aPw(D.A6)}}
A.aPw.prototype={
ad(){this.aq()
B.ji(new A.cz7(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gR().G($.zb(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cyW(),a1))
C.e.cq(e,new A.cyX())
x=f.b
w=x.length+new B.a6(d,new A.cyY(),a1).gA(0)
v=w+e.length
u=new A.cz6()
t=y.p
s=B.a([new B.qH(new A.cyZ(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ei("Por fazer",r===D.A6,w,new A.cz_(h),g),new B.ei("Feito",r===D.acA,e.length,new A.cz0(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pp(s,g),D.aGX,new K.m9(r,16,!1,g),B.vg(g,g,"O vosso plano",C.hC,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.A6){e=B.a([D.cn5,D.aGx],t)
if(x.length===0)e.push(D.aGn)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.G)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a93?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.B(C.e.gJ(C.f.eW(k,B.aS("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a0(k," \xb7 ")
i=n.ax?g:D.aGL
s.push(new B.ik(D.aGl,n.e,k,i,!0,new A.cz1(h,n),!1,g))}e.push(B.eR(s,0))}e.push(D.aGw)
e.push(D.bKC)
x=B.a([],t)
if(!new B.a6(d,new A.cz2(),a1).gX(0).q())x.push(D.aGo)
else for(d=C.e.gX(d),a0=new B.h9(d,new A.cz3(),a0.i("h9<1>"));a0.q();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.p(u.$1(s))
x.push(new B.ik(new G.Kf(!1,!1,new A.cz4(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eR(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGt)
else for(o=0;o<e.length;e.length===a0||(0,B.G)(e),++o){n=e[o]
d.push(new B.ik(N.PE,n.e,new A.cz5(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGv,B.eR(d,0)],t))}return B.cO(g,C.cR,B.nG(D.bVe,40,q,g,!0,!1),!0,g)},
KU(d,e){return this.bhq(d,e)},
bhq(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$KU=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bS(null,new A.cyT(),!1,d,!0,!0,null,y.g),$async$KU)
case 3:q=g
if(q==null){x=1
break}u=e.a_(0,$.zb().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Md(q.d,s,r,t),$async$KU)
case 4:case 1:return B.l(v,w)}})
return B.m($async$KU,w)}}
A.aIX.prototype={}
A.OM.prototype={
S(){var x=$.aa()
return new A.aIY(new B.aE(C.ak,x),new B.aE(C.ak,x))}}
A.aIY.prototype={
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a7()},
u(d){var x=this,w=null,v=B.aR(d,w,y.w).w
return B.dR(B.y(B.a([B.h("Nova tarefa",w,w,w,w,B.ax(d).ok.r,w,w),C.a0,new H.mx("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.mx("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d2m("Prazo (opcional)",new A.caa(x),x.f),C.aA,new O.a1b(x.r,new A.cab(x),w),C.a0,new B.fV("Adicionar",new A.cac(x,d),!1,w)],y.p),C.E,C.h,C.J),C.y,w,new B.a3(20,20,20,v.f.d+20),w,C.av)}}
A.afk.prototype={
L4(d,e,f,g){return this.b8O(0,e,f,g)},
b8O(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$L4=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cSq(g.a)
x=3
return B.d(f.a_(0,$.ww().$1(g.a).gdG(),y.B),$async$L4)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.U3(e,u,!1),$async$L4)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L4,w)},
b9(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cC($.co(),new A.ciy(),y.v,s),s)
s=e.G($.cTh().$1(new B.YM(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.de(x))return C.ao
s=B.a([],y.G)
for(w=J.c8(x),v=w.gX(x),u=y.D;v.q();){t=v.gE(v)
t=e.G($.ww().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aK(y.N)
for(w=w.gX(x);w.q();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.S(C.Cx,B.y(B.a([D.bKe,D.bKf,new F.La(s,new A.ciz(this,d,e,x),v,null)],y.p),C.E,C.h,C.l),null)}}
var z=a.updateTypes(["OM(N)","~(dn)","C(ny)"])
A.cGP.prototype={
$1(d){return d.a===this.a},
$S:458}
A.cGQ.prototype={
$1(d){return d.b},
$S:1518}
A.cz7.prototype={
$0(){return this.a.gR().a_(0,$.zb().gaX(),y.I).jy()},
$S:1}
A.cyW.prototype={
$1(d){return d.x===C.yS},
$S:61}
A.cyX.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bA(0,x==null?d.ch:x)},
$S:177}
A.cyY.prototype={
$1(d){return d.x===C.ip},
$S:61}
A.cz6.prototype={
$1(d){return C.f.aT(C.j.k(B.aD(d)),2,"0")+"/"+C.f.aT(C.j.k(B.av(d)),2,"0")},
$S:157}
A.cyZ.prototype={
$0(){var x=this.a
return x.KU(this.b,x.gR())},
$S:0}
A.cz_.prototype={
$0(){var x=this.a
return x.p(new A.cyV(x))},
$S:0}
A.cyV.prototype={
$0(){return this.a.w=D.A6},
$S:0}
A.cz0.prototype={
$0(){var x=this.a
return x.p(new A.cyU(x))},
$S:0}
A.cyU.prototype={
$0(){return this.a.w=D.acA},
$S:0}
A.cz1.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Q3(w,x.gR(),this.b)},
$S:0}
A.cz2.prototype={
$1(d){return d.x===C.ip},
$S:61}
A.cz3.prototype={
$1(d){return d.x===C.ip},
$S:61}
A.cz4.prototype={
$0(){return this.a.gR().a_(0,$.zb().gaX(),y.I).EN(this.b.a)},
$S:0}
A.cz5.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.p(this.b.$1(v))},
$S:18}
A.cyT.prototype={
$1(d){return D.cmQ},
$S:z+0}
A.caa.prototype={
$1(d){var x=this.a
return x.p(new A.ca9(x,d))},
$S:324}
A.ca9.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cab.prototype={
$1(d){var x=this.a
return x.p(new A.ca8(x,d))},
$S:136}
A.ca8.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cac.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.ca7(u))
if(u.w!=null)return
x=B.am(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.ae(new A.aIX(w,v,u.f,u.r))},
$S:0}
A.ca7.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.ciy.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:37}
A.ciz.prototype={
$1(d){var x=this
return x.a.L4(0,x.b,x.c,J.d0M(x.d,new A.cix(d)))},
$S:z+1}
A.cix.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cS9.prototype={
$1(d){return this.aGq(d)},
aGq(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").ck(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.an(s),o=y.P;p.q();){q=p.gE(p)
J.b2(r,B.Y(J.i(o.a(q),"id")),B.d7Z(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGr
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1519}
A.cKD.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aa9,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.P,B.h(C.f.B(w),x,x,x,x,D.c4v,x,x)],v))}u.push(C.bN)
u.push(B.zU(D.aDh,D.cfu,new A.cKA(d),x))
if(this.b!=null)C.e.n(u,B.a([C.P,B.hh(Q.aaA,new A.cKB(d),x)],v))
u.push(C.ar)
u.push(B.cE(C.mj,x,x,new A.cKC(d),x,x))
return B.bA(!0,new B.S(C.Nb,B.y(u,C.E,C.h,C.J),x),x,C.Z,!0)},
$S:36}
A.cKA.prototype={
$0(){return B.am(this.a,!1).ae("done")},
$S:0}
A.cKB.prototype={
$0(){return B.am(this.a,!1).ae("open")},
$S:0}
A.cKC.prototype={
$0(){return B.am(this.a,!1).bl()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bv,[A.cGP,A.cGQ,A.cyW,A.cyY,A.cz6,A.cz2,A.cz3,A.cyT,A.caa,A.cab,A.ciy,A.ciz,A.cix,A.cS9,A.cKD])
w(A.aPx,B.ff)
w(A.a9A,B.dA)
w(A.aPw,B.dv)
x(B.bN,[A.cz7,A.cyZ,A.cz_,A.cyV,A.cz0,A.cyU,A.cz1,A.cz4,A.cz5,A.ca9,A.ca8,A.cac,A.ca7,A.cKA,A.cKB,A.cKC])
w(A.cyX,B.cJ)
w(A.aIX,B.L)
w(A.OM,B.H)
w(A.aIY,B.a1)
w(A.afk,B.ev)})()
B.bt(b.typeUniverse,JSON.parse('{"a9A":{"H":[],"e":[],"f":[]},"OM":{"H":[],"e":[],"f":[]},"aPw":{"a1":["a9A"]},"aIY":{"a1":["OM"]},"afk":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.z
return{F:x("aw<t<ny>?>"),D:x("aw<dn?>"),R:x("eA"),v:x("ea"),Z:x("nx"),e:x("F<a5<c,oL>>"),B:x("F<dn?>"),E:x("r<ei>"),G:x("r<dn>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oL>"),P:x("a5<c,@>"),U:x("ep<+(c,c),c>"),w:x("ds"),N:x("c"),I:x("tU"),z:x("Bl"),c:x("oL"),A:x("a6<+(c,c)>"),g:x("aIX"),q:x("dp"),h:x("a5<c,@>?"),X:x("L?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDh=new B.b7(C.dm,null,null,null,null,null)
D.aGl=new G.Kf(!1,!1,null,null)
D.aGs=new B.ik(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bd4=x([D.aGs],y.p)
D.aGn=new B.Tc(D.bd4,0,null)
D.aGo=new B.ik(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGt=new B.ik(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGv=new E.Ej("Feito",null)
D.aGw=new E.Ej("As vossas tarefas",null)
D.aGx=new E.Ej("Pr\xf3ximas tarefas",null)
D.aGL=new B.dT("Nova",C.cW,null)
D.aGX=new B.lc("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGr=new B.c5(C.cI,[],B.z("c5<c,oL>"))
D.ca5=new B.D("Sugest\xf5es para ti",null,C.bj,null,null,null,null,null,null,null)
D.bKe=new B.S(C.bG,D.ca5,null)
D.at5=new B.a3(20,2,20,10)
D.c79=new B.D("Com base no que tens procurado.",null,C.L,null,null,null,null,null,null,null)
D.bKf=new B.S(D.at5,D.c79,null)
D.cb0=new B.D("Criadas por voc\xeas, sem limite.",null,C.L,null,null,null,null,null,null,null)
D.bKC=new B.S(C.kt,D.cb0,null)
D.ciV=B.c9("afk")
D.bVe=new B.fm([D.ciV],B.z("fm<kV>"))
D.c4v=new B.Q(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cfu=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null)
D.cmQ=new A.OM(null)
D.cn5=new A.afk(null)
D.A6=new A.aPx(0,"todo")
D.acA=new A.aPx(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYK","dlh",()=>B.ey(new A.cS9(),null,!1,null,null,y.r))})()};
(a=>{a["WnliQPx5c31AaMQkITQ5UaB6Des="]=a.current})($__dart_deferred_initializers__);