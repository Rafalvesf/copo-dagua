((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dEq(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cYB(d){var x
A:{if(C.a7w===d){x="fotografia"
break A}if(C.Hp===d){x="coment\xe1rio"
break A}if(C.Hq===d||C.rW===d){x="mensagem"
break A}x=null}return x},
wz(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wz=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a1(0,$.ba(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.C(h).length===0?"esta pessoa":D.f.C(h)
x=3
return A.d(A.c1(null,new B.cRW(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wz)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUG(d,i,j),$async$wz)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akQ(d,e,g,u),$async$wz)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wz,w)},
aUG(d,e,f){return B.dGi(d,e,f)},
dGi(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUG=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.c1(null,new B.cFS(e),!1,d,!0,!1,null,o),$async$aUG)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.R().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aM("report_content",A.T(["p_kind",B.dEq(e),"p_target",f,"p_reason",n],o,q),q),$async$aUG)
case 8:s="Obrigado. A equipa vai rever esta "+B.cYB(e)+" em menos de 24 horas."
u=2
x=7
break
case 5:u=4
m=t.pop()
s="N\xe3o foi poss\xedvel enviar a den\xfancia. Tenta outra vez."
x=7
break
case 4:x=2
break
case 7:if(d.e!=null)d.O(y.q).f.a3(A.c7(null,null,null,null,null,D.z,null,A.h(s,null,null,null,null,null,null,null,null),null,D.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUG,w)},
V4:function V4(d,e){this.a=d
this.b=e},
cRW:function cRW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cRT:function cRT(d){this.a=d},
cRU:function cRU(d){this.a=d},
cRV:function cRV(d){this.a=d},
cFS:function cFS(d){this.a=d},
cFR:function cFR(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[154],B)
C=c[240]
E=c[275]
F=c[160]
G=c[412]
B.V4.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cRW.prototype={
$1(d){var x=this,w=null,v=A.a([A.jl(!1,w,w,w,!0,w,w,w,!0,w,C.PW,w,w,w,w,new B.cRT(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cYB(x.a),w,w,w,w,C.c6P,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jl(!1,w,w,w,!0,w,w,w,!0,w,C.aEc,w,w,w,w,new B.cRU(d),!1,w,w,w,w,w,C.cal,w,A.h("Bloquear "+x.d,w,w,w,w,D.hf,w,w,w),w,w,w))
v.push(A.jl(!1,w,w,w,!0,w,w,w,!0,w,C.aDX,w,w,w,w,new B.cRV(d),!1,w,w,w,w,w,w,w,D.cU,w,w,w))
return A.bE(!0,new A.Q(D.cn,A.y(v,D.w,D.h,D.K,0,D.u),w),w,D.a_,!0)},
$S:47}
B.cRT.prototype={
$0(){return A.am(this.a,!1).ae("report")},
$S:0}
B.cRU.prototype={
$0(){return A.am(this.a,!1).ae("block")},
$S:0}
B.cRV.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
B.cFS.prototype={
$1(d){var x,w,v=null,u=A.a([new A.Q(C.auw,A.h("Porque queres denunciar esta "+B.cYB(this.a)+"?",v,v,v,v,E.ab_,v,v,v),v),C.bM0],y.u)
for(x=0;x<6;++x){w=C.bvK[x]
u.push(A.jl(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cFR(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bE(!0,new A.Q(D.cn,A.y(u,D.G,D.h,D.K,0,D.u),v),v,D.a_,!0)},
$S:47}
B.cFR.prototype={
$0(){return A.am(this.a,!1).ae(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.V4,A.f8)
w(A.by,[B.cRW,B.cFS])
w(A.bR,[B.cRT,B.cRU,B.cRV,B.cFR])})()
var y={e:A.w("cF"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dn"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.Nw=new A.a2(0,0,0,2)
C.auw=new A.a2(20,8,20,4)
C.PW=new A.b7(G.Eo,null,D.fr,null,null,null)
C.aDX=new A.b7(D.em,null,null,null,null,null)
C.aEc=new A.b7(D.o6,null,D.A,null,null,null)
C.bTx=new A.a1("offensive","Ofensivo ou \xf3dio")
C.bSF=new A.a1("harassment","Ass\xe9dio ou amea\xe7as")
C.bS7=new A.a1("sexual","Conte\xfado sexual")
C.bTp=new A.a1("violence","Viol\xeancia")
C.bT5=new A.a1("spam","Spam ou burla")
C.bSE=new A.a1("other","Outro motivo")
C.bvK=x([C.bTx,C.bSF,C.bS7,C.bTp,C.bT5,C.bSE],A.w("r<+(c,c)>"))
C.au0=new A.a2(20,0,20,6)
C.cf7=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.ke,null,null,null,null,null,null,null,null)
C.bM0=new A.Q(C.au0,C.cf7,null)
C.a7w=new B.V4(0,"galleryPhoto")
C.Hp=new B.V4(1,"galleryComment")
C.Hq=new B.V4(2,"groupMessage")
C.rW=new B.V4(3,"message")
C.c6P=new A.P(!0,D.fr,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.cal=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["c6Mp44DYcMFiz6LCRPDQGJj4/Pk="]=a.current})($__dart_deferred_initializers__);