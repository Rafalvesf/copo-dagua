((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dEM(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cYY(d){var x
A:{if(C.a7x===d){x="fotografia"
break A}if(C.Hp===d){x="coment\xe1rio"
break A}if(C.Hq===d||C.rW===d){x="mensagem"
break A}x=null}return x},
wy(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wy=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a1(0,$.ba(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.C(h).length===0?"esta pessoa":D.f.C(h)
x=3
return A.d(A.bZ(null,new B.cSi(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wy)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUI(d,i,j),$async$wy)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akQ(d,e,g,u),$async$wy)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wy,w)},
aUI(d,e,f){return B.dGE(d,e,f)},
dGE(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUI=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bZ(null,new B.cGd(e),!1,d,!0,!1,null,o),$async$aUI)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.R().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aL("report_content",A.T(["p_kind",B.dEM(e),"p_target",f,"p_reason",n],o,q),q),$async$aUI)
case 8:s="Obrigado. A equipa vai rever esta "+B.cYY(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a2(A.c3(null,null,null,null,null,D.z,null,A.h(s,null,null,null,null,null,null,null,null),null,D.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUI,w)},
V7:function V7(d,e){this.a=d
this.b=e},
cSi:function cSi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSf:function cSf(d){this.a=d},
cSg:function cSg(d){this.a=d},
cSh:function cSh(d){this.a=d},
cGd:function cGd(d){this.a=d},
cGc:function cGc(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[154],B)
C=c[240]
E=c[275]
F=c[161]
G=c[413]
B.V7.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cSi.prototype={
$1(d){var x=this,w=null,v=A.a([A.jl(!1,w,w,w,!0,w,w,w,!0,w,C.PW,w,w,w,w,new B.cSf(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cYY(x.a),w,w,w,w,C.c6T,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jl(!1,w,w,w,!0,w,w,w,!0,w,C.aEh,w,w,w,w,new B.cSg(d),!1,w,w,w,w,w,C.cap,w,A.h("Bloquear "+x.d,w,w,w,w,D.hf,w,w,w),w,w,w))
v.push(A.jl(!1,w,w,w,!0,w,w,w,!0,w,C.aE1,w,w,w,w,new B.cSh(d),!1,w,w,w,w,w,w,w,D.cU,w,w,w))
return A.bF(!0,new A.Q(D.co,A.x(v,D.w,D.h,D.K,0,D.u),w),w,D.a_,!0)},
$S:46}
B.cSf.prototype={
$0(){return A.am(this.a,!1).ae("report")},
$S:0}
B.cSg.prototype={
$0(){return A.am(this.a,!1).ae("block")},
$S:0}
B.cSh.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
B.cGd.prototype={
$1(d){var x,w,v=null,u=A.a([new A.Q(C.auB,A.h("Porque queres denunciar esta "+B.cYY(this.a)+"?",v,v,v,v,E.ab0,v,v,v),v),C.bM4],y.u)
for(x=0;x<6;++x){w=C.bvO[x]
u.push(A.jl(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cGc(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bF(!0,new A.Q(D.co,A.x(u,D.G,D.h,D.K,0,D.u),v),v,D.a_,!0)},
$S:46}
B.cGc.prototype={
$0(){return A.am(this.a,!1).ae(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.V7,A.f8)
w(A.bz,[B.cSi,B.cGd])
w(A.bR,[B.cSf,B.cSg,B.cSh,B.cGc])})()
var y={e:A.w("cF"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dn"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.Nw=new A.a2(0,0,0,2)
C.auB=new A.a2(20,8,20,4)
C.PW=new A.b7(G.Ep,null,D.fs,null,null,null)
C.aE1=new A.b7(D.em,null,null,null,null,null)
C.aEh=new A.b7(D.o6,null,D.A,null,null,null)
C.bTB=new A.a_("offensive","Ofensivo ou \xf3dio")
C.bSJ=new A.a_("harassment","Ass\xe9dio ou amea\xe7as")
C.bSb=new A.a_("sexual","Conte\xfado sexual")
C.bTt=new A.a_("violence","Viol\xeancia")
C.bT9=new A.a_("spam","Spam ou burla")
C.bSI=new A.a_("other","Outro motivo")
C.bvO=x([C.bTB,C.bSJ,C.bSb,C.bTt,C.bT9,C.bSI],A.w("r<+(c,c)>"))
C.au5=new A.a2(20,0,20,6)
C.cf9=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.ke,null,null,null,null,null,null,null,null)
C.bM4=new A.Q(C.au5,C.cf9,null)
C.a7x=new B.V7(0,"galleryPhoto")
C.Hp=new B.V7(1,"galleryComment")
C.Hq=new B.V7(2,"groupMessage")
C.rW=new B.V7(3,"message")
C.c6T=new A.P(!0,D.fs,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.cap=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["6XlGWRisY+DUhvifF8A9sYFZ4sA="]=a.current})($__dart_deferred_initializers__);