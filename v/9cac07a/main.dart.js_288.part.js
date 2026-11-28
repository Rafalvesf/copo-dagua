((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dDf(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cXu(d){var x
A:{if(C.a7o===d){x="fotografia"
break A}if(C.Hl===d){x="coment\xe1rio"
break A}if(C.Hm===d||C.rT===d){x="mensagem"
break A}x=null}return x},
ww(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$ww=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a0(0,$.ba(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.C(h).length===0?"esta pessoa":D.f.C(h)
x=3
return A.d(A.c9(null,new B.cQQ(i,f,g,u),!1,d,!0,!1,null,y.w),$async$ww)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUv(d,i,j),$async$ww)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akK(d,e,g,u),$async$ww)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$ww,w)},
aUv(d,e,f){return B.dF5(d,e,f)},
dF5(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUv=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.c9(null,new B.cEW(e),!1,d,!0,!1,null,o),$async$aUv)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.S().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aM("report_content",A.T(["p_kind",B.dDf(e),"p_target",f,"p_reason",n],o,q),q),$async$aUv)
case 8:s="Obrigado. A equipa vai rever esta "+B.cXu(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a3(A.c6(null,null,null,null,null,D.z,null,A.h(s,null,null,null,null,null,null,null,null),null,D.V,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUv,w)},
V_:function V_(d,e){this.a=d
this.b=e},
cQQ:function cQQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cQN:function cQN(d){this.a=d},
cQO:function cQO(d){this.a=d},
cQP:function cQP(d){this.a=d},
cEW:function cEW(d){this.a=d},
cEV:function cEV(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[154],B)
C=c[240]
E=c[273]
F=c[160]
G=c[411]
B.V_.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cQQ.prototype={
$1(d){var x=this,w=null,v=A.a([A.jl(!1,w,w,w,!0,w,w,w,!0,w,C.PO,w,w,w,w,new B.cQN(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cXu(x.a),w,w,w,w,C.c6H,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jl(!1,w,w,w,!0,w,w,w,!0,w,C.aE7,w,w,w,w,new B.cQO(d),!1,w,w,w,w,w,C.cac,w,A.h("Bloquear "+x.d,w,w,w,w,D.hf,w,w,w),w,w,w))
v.push(A.jl(!1,w,w,w,!0,w,w,w,!0,w,C.aDS,w,w,w,w,new B.cQP(d),!1,w,w,w,w,w,w,w,D.cQ,w,w,w))
return A.bC(!0,new A.Q(D.cn,A.A(v,D.w,D.h,D.K,0,D.u),w),w,D.a_,!0)},
$S:43}
B.cQN.prototype={
$0(){return A.am(this.a,!1).ad("report")},
$S:0}
B.cQO.prototype={
$0(){return A.am(this.a,!1).ad("block")},
$S:0}
B.cQP.prototype={
$0(){return A.am(this.a,!1).bB()},
$S:0}
B.cEW.prototype={
$1(d){var x,w,v=null,u=A.a([new A.Q(C.aup,A.h("Porque queres denunciar esta "+B.cXu(this.a)+"?",v,v,v,v,E.aaR,v,v,v),v),C.bLU],y.u)
for(x=0;x<6;++x){w=C.bvD[x]
u.push(A.jl(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cEV(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bC(!0,new A.Q(D.cn,A.A(u,D.G,D.h,D.K,0,D.u),v),v,D.a_,!0)},
$S:43}
B.cEV.prototype={
$0(){return A.am(this.a,!1).ad(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.V_,A.f7)
w(A.bx,[B.cQQ,B.cEW])
w(A.bQ,[B.cQN,B.cQO,B.cQP,B.cEV])})()
var y={e:A.w("cE"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dm"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.Nq=new A.a0(0,0,0,2)
C.aup=new A.a0(20,8,20,4)
C.PO=new A.b7(G.El,null,D.fq,null,null,null)
C.aDS=new A.b7(D.ei,null,null,null,null,null)
C.aE7=new A.b7(D.o2,null,D.A,null,null,null)
C.bTo=new A.a3("offensive","Ofensivo ou \xf3dio")
C.bSw=new A.a3("harassment","Ass\xe9dio ou amea\xe7as")
C.bRZ=new A.a3("sexual","Conte\xfado sexual")
C.bTg=new A.a3("violence","Viol\xeancia")
C.bSX=new A.a3("spam","Spam ou burla")
C.bSv=new A.a3("other","Outro motivo")
C.bvD=x([C.bTo,C.bSw,C.bRZ,C.bTg,C.bSX,C.bSv],A.w("r<+(c,c)>"))
C.atT=new A.a0(20,0,20,6)
C.ceY=new A.C("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k9,null,null,null,null,null,null,null,null)
C.bLU=new A.Q(C.atT,C.ceY,null)
C.a7o=new B.V_(0,"galleryPhoto")
C.Hl=new B.V_(1,"galleryComment")
C.Hm=new B.V_(2,"groupMessage")
C.rT=new B.V_(3,"message")
C.c6H=new A.P(!0,D.fq,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.cac=new A.C("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["IkEuUxSvFfGePXek4uzjECeqbsk="]=a.current})($__dart_deferred_initializers__);