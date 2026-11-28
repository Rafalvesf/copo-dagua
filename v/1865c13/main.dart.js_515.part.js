((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dHU(d){var x=B.eK(new B.ep(new B.a6(P.Wz,new A.cH_(d),y.A),new A.cH0(),y.U))
return x},
cH_:function cH_(d){this.a=d},
cH0:function cH0(){},
dxB(){return new A.a9A(null)},
aPA:function aPA(d,e){this.a=d
this.b=e},
a9A:function a9A(d){this.a=d},
aPz:function aPz(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
czi:function czi(d){this.a=d},
cz6:function cz6(){},
cz7:function cz7(){},
cz8:function cz8(){},
czh:function czh(){},
cz9:function cz9(d,e){this.a=d
this.b=e},
cza:function cza(d){this.a=d},
cz5:function cz5(d){this.a=d},
czb:function czb(d){this.a=d},
cz4:function cz4(d){this.a=d},
czc:function czc(d,e){this.a=d
this.b=e},
czd:function czd(){},
cze:function cze(){},
czf:function czf(d,e){this.a=d
this.b=e},
czg:function czg(d,e){this.a=d
this.b=e},
cz3:function cz3(){},
aJ_:function aJ_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OM:function OM(d){this.a=d},
aJ0:function aJ0(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
caj:function caj(d){this.a=d},
cai:function cai(d,e){this.a=d
this.b=e},
cak:function cak(d){this.a=d},
cah:function cah(d,e){this.a=d
this.b=e},
cal:function cal(d,e){this.a=d
this.b=e},
cag:function cag(d){this.a=d},
afl:function afl(d){this.a=d},
ciJ:function ciJ(){},
ciK:function ciK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ciI:function ciI(d){this.a=d},
dDu(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dHU(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
dbV(d,e,f){var x,w=B.dz(e,0,null)
if(w.gdh(w)==="/partners"){x=w.gei().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ac(d).ak("/partners",new M.Le(x,!1),y.X)
return}B.ac(d).ak(e,null,y.X)},
Q3(d,e,f){return A.dKG(d,e,f)},
dKG(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
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
return B.d(A.aUz(s,p),$async$Q3)
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
return B.d(B.rz(d,e,p,null,null),$async$Q3)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a_(0,$.dly().gdG(),y.e),$async$Q3)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dDu(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a93||l==null?18:19
break
case 18:x=20
return B.d(B.bP(null,new A.cKO(f,l),!1,d,!0,!1,null,y.N),$async$Q3)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EN(f.a),$async$Q3)
case 24:if(d.e!=null)d.O(y.q).f.a1(B.bZ(null,null,null,null,null,C.y,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.dbV(d,l,m)
case 22:x=1
break
case 19:if(q===C.a92)j.W0(f.a)
A.dbV(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Q3,w)},
cSo:function cSo(){},
cKO:function cKO(d,e){this.a=d
this.b=e},
cKL:function cKL(d){this.a=d},
cKM:function cKM(d){this.a=d},
cKN:function cKN(d){this.a=d},
aUz(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aUz=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.P().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").ai(0,"partner_id, partner_profiles(business_name, cover_photo_url)").U("id",e).dM(0),$async$aUz)
case 3:u=g
p=J.a7(u)
t=B.Y(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.q5(d,t),$async$aUz)
case 4:r=g
p=s==null
q=B.B(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eA(r,q,t,B.B(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.jV)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aUz,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[141]
I=c[163]
E=c[151]
K=c[185]
L=c[123]
M=c[136]
G=c[86]
N=c[249]
A=a.updateHolder(c[52],A)
D=c[405]
O=c[79]
P=c[406]
H=c[170]
Q=c[333]
A.aPA.prototype={
I(){return"_TasksTab."+this.b}}
A.a9A.prototype={
S(){return new A.aPz(D.A7)}}
A.aPz.prototype={
ad(){this.aq()
B.ji(new A.czi(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gR().G($.zb(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cz6(),a1))
C.e.cq(e,new A.cz7())
x=f.b
w=x.length+new B.a6(d,new A.cz8(),a1).gA(0)
v=w+e.length
u=new A.czh()
t=y.p
s=B.a([new B.qG(new A.cz9(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ei("Por fazer",r===D.A7,w,new A.cza(h),g),new B.ei("Feito",r===D.acB,e.length,new A.czb(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pp(s,g),D.aGY,new K.m9(r,16,!1,g),B.vg(g,g,"O vosso plano",C.hD,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.A7){e=B.a([D.cn4,D.aGy],t)
if(x.length===0)e.push(D.aGo)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.G)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a94?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.B(C.e.gJ(C.f.eW(k,B.aQ("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a0(k," \xb7 ")
i=n.ax?g:D.aGM
s.push(new B.ik(D.aGm,n.e,k,i,!0,new A.czc(h,n),!1,g))}e.push(B.eR(s,0))}e.push(D.aGx)
e.push(D.bKD)
x=B.a([],t)
if(!new B.a6(d,new A.czd(),a1).gX(0).q())x.push(D.aGp)
else for(d=C.e.gX(d),a0=new B.fO(d,new A.cze(),a0.i("fO<1>"));a0.q();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.p(u.$1(s))
x.push(new B.ik(new G.Kf(!1,!1,new A.czf(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eR(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGu)
else for(o=0;o<e.length;e.length===a0||(0,B.G)(e),++o){n=e[o]
d.push(new B.ik(N.PE,n.e,new A.czg(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGw,B.eR(d,0)],t))}return B.cO(g,C.cQ,B.nG(D.bVf,40,q,g,!0,!1),!0,g)},
KU(d,e){return this.bhq(d,e)},
bhq(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$KU=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bP(null,new A.cz3(),!1,d,!0,!0,null,y.g),$async$KU)
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
A.aJ_.prototype={}
A.OM.prototype={
S(){var x=$.aa()
return new A.aJ0(new B.aE(C.ak,x),new B.aE(C.ak,x))}}
A.aJ0.prototype={
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a7()},
u(d){var x=this,w=null,v=B.aS(d,w,y.w).w
return B.dR(B.z(B.a([B.h("Nova tarefa",w,w,w,w,B.ax(d).ok.r,w,w),C.a_,new H.nm("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.nm("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d2D("Prazo (opcional)",new A.caj(x),x.f),C.aA,new O.a1b(x.r,new A.cak(x),w),C.a_,new B.fW("Adicionar",new A.cal(x,d),!1,w)],y.p),C.E,C.h,C.J),C.y,w,new B.a3(20,20,20,v.f.d+20),w,C.av)}}
A.afl.prototype={
L4(d,e,f,g){return this.b8O(0,e,f,g)},
b8O(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$L4=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cSF(g.a)
x=3
return B.d(f.a_(0,$.ww().$1(g.a).gdG(),y.B),$async$L4)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.U3(e,u,!1),$async$L4)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L4,w)},
b9(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cC($.co(),new A.ciJ(),y.v,s),s)
s=e.G($.cTw().$1(new B.YM(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.de(x))return C.ao
s=B.a([],y.G)
for(w=J.c8(x),v=w.gX(x),u=y.D;v.q();){t=v.gE(v)
t=e.G($.ww().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aK(y.N)
for(w=w.gX(x);w.q();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.S(C.Cy,B.z(B.a([D.bKf,D.bKg,new F.La(s,new A.ciK(this,d,e,x),v,null)],y.p),C.E,C.h,C.l),null)}}
var z=a.updateTypes(["OM(O)","~(dn)","C(ny)"])
A.cH_.prototype={
$1(d){return d.a===this.a},
$S:458}
A.cH0.prototype={
$1(d){return d.b},
$S:1518}
A.czi.prototype={
$0(){return this.a.gR().a_(0,$.zb().gaX(),y.I).jy()},
$S:1}
A.cz6.prototype={
$1(d){return d.x===C.yS},
$S:61}
A.cz7.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bA(0,x==null?d.ch:x)},
$S:177}
A.cz8.prototype={
$1(d){return d.x===C.ip},
$S:61}
A.czh.prototype={
$1(d){return C.f.aT(C.j.k(B.aD(d)),2,"0")+"/"+C.f.aT(C.j.k(B.av(d)),2,"0")},
$S:157}
A.cz9.prototype={
$0(){var x=this.a
return x.KU(this.b,x.gR())},
$S:0}
A.cza.prototype={
$0(){var x=this.a
return x.p(new A.cz5(x))},
$S:0}
A.cz5.prototype={
$0(){return this.a.w=D.A7},
$S:0}
A.czb.prototype={
$0(){var x=this.a
return x.p(new A.cz4(x))},
$S:0}
A.cz4.prototype={
$0(){return this.a.w=D.acB},
$S:0}
A.czc.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Q3(w,x.gR(),this.b)},
$S:0}
A.czd.prototype={
$1(d){return d.x===C.ip},
$S:61}
A.cze.prototype={
$1(d){return d.x===C.ip},
$S:61}
A.czf.prototype={
$0(){return this.a.gR().a_(0,$.zb().gaX(),y.I).EN(this.b.a)},
$S:0}
A.czg.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.p(this.b.$1(v))},
$S:18}
A.cz3.prototype={
$1(d){return D.cmP},
$S:z+0}
A.caj.prototype={
$1(d){var x=this.a
return x.p(new A.cai(x,d))},
$S:324}
A.cai.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cak.prototype={
$1(d){var x=this.a
return x.p(new A.cah(x,d))},
$S:136}
A.cah.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cal.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cag(u))
if(u.w!=null)return
x=B.al(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.ae(new A.aJ_(w,v,u.f,u.r))},
$S:0}
A.cag.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.ciJ.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:37}
A.ciK.prototype={
$1(d){var x=this
return x.a.L4(0,x.b,x.c,J.d11(x.d,new A.ciI(d)))},
$S:z+1}
A.ciI.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cSo.prototype={
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
J.b2(r,B.Y(J.i(o.a(q),"id")),B.d8f(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGs
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
A.cKO.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aaa,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.P,B.h(C.f.B(w),x,x,x,x,D.c4u,x,x)],v))}u.push(C.bN)
u.push(B.zU(D.aDi,D.cft,new A.cKL(d),x))
if(this.b!=null)C.e.n(u,B.a([C.P,B.hh(Q.aaB,new A.cKM(d),x)],v))
u.push(C.ar)
u.push(B.cE(C.mk,x,x,new A.cKN(d),x,x))
return B.bA(!0,new B.S(C.Nb,B.z(u,C.E,C.h,C.J),x),x,C.Z,!0)},
$S:33}
A.cKL.prototype={
$0(){return B.al(this.a,!1).ae("done")},
$S:0}
A.cKM.prototype={
$0(){return B.al(this.a,!1).ae("open")},
$S:0}
A.cKN.prototype={
$0(){return B.al(this.a,!1).bj()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bt,[A.cH_,A.cH0,A.cz6,A.cz8,A.czh,A.czd,A.cze,A.cz3,A.caj,A.cak,A.ciJ,A.ciK,A.ciI,A.cSo,A.cKO])
w(A.aPA,B.ff)
w(A.a9A,B.dB)
w(A.aPz,B.dv)
x(B.bK,[A.czi,A.cz9,A.cza,A.cz5,A.czb,A.cz4,A.czc,A.czf,A.czg,A.cai,A.cah,A.cal,A.cag,A.cKL,A.cKM,A.cKN])
w(A.cz7,B.cJ)
w(A.aJ_,B.L)
w(A.OM,B.H)
w(A.aJ0,B.a1)
w(A.afl,B.ev)})()
B.bq(b.typeUniverse,JSON.parse('{"a9A":{"H":[],"e":[],"f":[]},"OM":{"H":[],"e":[],"f":[]},"aPz":{"a1":["a9A"]},"aJ0":{"a1":["OM"]},"afl":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.y
return{F:x("aw<t<ny>?>"),D:x("aw<dn?>"),R:x("eA"),v:x("eb"),Z:x("nx"),e:x("F<a5<c,oM>>"),B:x("F<dn?>"),E:x("r<ei>"),G:x("r<dn>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oM>"),P:x("a5<c,@>"),U:x("ep<+(c,c),c>"),w:x("ds"),N:x("c"),I:x("tU"),z:x("Bl"),c:x("oM"),A:x("a6<+(c,c)>"),g:x("aJ_"),q:x("dp"),h:x("a5<c,@>?"),X:x("L?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDi=new B.b7(C.dm,null,null,null,null,null)
D.aGm=new G.Kf(!1,!1,null,null)
D.aGt=new B.ik(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bd5=x([D.aGt],y.p)
D.aGo=new B.Tc(D.bd5,0,null)
D.aGp=new B.ik(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGu=new B.ik(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGw=new E.Ej("Feito",null)
D.aGx=new E.Ej("As vossas tarefas",null)
D.aGy=new E.Ej("Pr\xf3ximas tarefas",null)
D.aGM=new B.dT("Nova",C.cV,null)
D.aGY=new B.lc("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGs=new B.c5(C.cI,[],B.y("c5<c,oM>"))
D.ca4=new B.D("Sugest\xf5es para ti",null,C.bi,null,null,null,null,null,null,null)
D.bKf=new B.S(C.bG,D.ca4,null)
D.at6=new B.a3(20,2,20,10)
D.c78=new B.D("Com base no que tens procurado.",null,C.L,null,null,null,null,null,null,null)
D.bKg=new B.S(D.at6,D.c78,null)
D.cb_=new B.D("Criadas por voc\xeas, sem limite.",null,C.L,null,null,null,null,null,null,null)
D.bKD=new B.S(C.jA,D.cb_,null)
D.ciU=B.c9("afl")
D.bVf=new B.fm([D.ciU],B.y("fm<kV>"))
D.c4u=new B.Q(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cft=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null)
D.cmP=new A.OM(null)
D.cn4=new A.afl(null)
D.A7=new A.aPA(0,"todo")
D.acB=new A.aPA(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZ1","dly",()=>B.ey(new A.cSo(),null,!1,null,null,y.r))})()};
(a=>{a["8Yn95RwRj9ZLWqPi1YM5engkY/M="]=a.current})($__dart_deferred_initializers__);