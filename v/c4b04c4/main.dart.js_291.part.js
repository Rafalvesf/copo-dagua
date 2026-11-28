((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dEX(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cZ7(d){var x
A:{if(C.a7x===d){x="fotografia"
break A}if(C.Hp===d){x="coment\xe1rio"
break A}if(C.Hq===d||C.rZ===d){x="mensagem"
break A}x=null}return x},
wy(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wy=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a1(0,$.ba(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.C(h).length===0?"esta pessoa":D.f.C(h)
x=3
return A.d(A.bZ(null,new B.cSr(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wy)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUK(d,i,j),$async$wy)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akS(d,e,g,u),$async$wy)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wy,w)},
aUK(d,e,f){return B.dGP(d,e,f)},
dGP(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUK=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bZ(null,new B.cGm(e),!1,d,!0,!1,null,o),$async$aUK)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.R().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aL("report_content",A.T(["p_kind",B.dEX(e),"p_target",f,"p_reason",n],o,q),q),$async$aUK)
case 8:s="Obrigado. A equipa vai rever esta "+B.cZ7(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a2(A.c1(null,null,null,null,null,D.z,null,A.h(s,null,null,null,null,null,null,null,null),null,D.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUK,w)},
V8:function V8(d,e){this.a=d
this.b=e},
cSr:function cSr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSo:function cSo(d){this.a=d},
cSp:function cSp(d){this.a=d},
cSq:function cSq(d){this.a=d},
cGm:function cGm(d){this.a=d},
cGl:function cGl(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[154],B)
C=c[240]
E=c[275]
F=c[161]
G=c[413]
B.V8.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cSr.prototype={
$1(d){var x=this,w=null,v=A.a([A.jm(!1,w,w,w,!0,w,w,w,!0,w,C.PW,w,w,w,w,new B.cSo(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cZ7(x.a),w,w,w,w,C.c6U,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jm(!1,w,w,w,!0,w,w,w,!0,w,C.aEi,w,w,w,w,new B.cSp(d),!1,w,w,w,w,w,C.caq,w,A.h("Bloquear "+x.d,w,w,w,w,D.hh,w,w,w),w,w,w))
v.push(A.jm(!1,w,w,w,!0,w,w,w,!0,w,C.aE2,w,w,w,w,new B.cSq(d),!1,w,w,w,w,w,w,w,D.cU,w,w,w))
return A.bF(!0,new A.Q(D.co,A.x(v,D.w,D.h,D.K,0,D.u),w),w,D.a_,!0)},
$S:46}
B.cSo.prototype={
$0(){return A.am(this.a,!1).ae("report")},
$S:0}
B.cSp.prototype={
$0(){return A.am(this.a,!1).ae("block")},
$S:0}
B.cSq.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
B.cGm.prototype={
$1(d){var x,w,v=null,u=A.a([new A.Q(C.auC,A.h("Porque queres denunciar esta "+B.cZ7(this.a)+"?",v,v,v,v,E.ab0,v,v,v),v),C.bM5],y.u)
for(x=0;x<6;++x){w=C.bvP[x]
u.push(A.jm(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cGl(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bF(!0,new A.Q(D.co,A.x(u,D.G,D.h,D.K,0,D.u),v),v,D.a_,!0)},
$S:46}
B.cGl.prototype={
$0(){return A.am(this.a,!1).ae(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.V8,A.f8)
w(A.bz,[B.cSr,B.cGm])
w(A.bR,[B.cSo,B.cSp,B.cSq,B.cGl])})()
var y={e:A.w("cF"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dn"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.Nw=new A.a2(0,0,0,2)
C.auC=new A.a2(20,8,20,4)
C.PW=new A.b7(G.Eq,null,D.fs,null,null,null)
C.aE2=new A.b7(D.en,null,null,null,null,null)
C.aEi=new A.b7(D.o9,null,D.A,null,null,null)
C.bTC=new A.Z("offensive","Ofensivo ou \xf3dio")
C.bSK=new A.Z("harassment","Ass\xe9dio ou amea\xe7as")
C.bSc=new A.Z("sexual","Conte\xfado sexual")
C.bTu=new A.Z("violence","Viol\xeancia")
C.bTa=new A.Z("spam","Spam ou burla")
C.bSJ=new A.Z("other","Outro motivo")
C.bvP=x([C.bTC,C.bSK,C.bSc,C.bTu,C.bTa,C.bSJ],A.w("r<+(c,c)>"))
C.au6=new A.a2(20,0,20,6)
C.cfa=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.kf,null,null,null,null,null,null,null,null)
C.bM5=new A.Q(C.au6,C.cfa,null)
C.a7x=new B.V8(0,"galleryPhoto")
C.Hp=new B.V8(1,"galleryComment")
C.Hq=new B.V8(2,"groupMessage")
C.rZ=new B.V8(3,"message")
C.c6U=new A.P(!0,D.fs,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.caq=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["HuBcVUKl9VIsLHsvK7MrX7SgDMA="]=a.current})($__dart_deferred_initializers__);