((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dFM(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cZS(d){var x
A:{if(C.a7v===d){x="fotografia"
break A}if(C.Hp===d){x="coment\xe1rio"
break A}if(C.Hq===d||C.t_===d){x="mensagem"
break A}x=null}return x},
wA(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wA=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a0(0,$.ba(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.C(h).length===0?"esta pessoa":D.f.C(h)
x=3
return A.d(A.bZ(null,new B.cTd(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wA)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aV1(d,i,j),$async$wA)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.ala(d,e,g,u),$async$wA)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wA,w)},
aV1(d,e,f){return B.dHE(d,e,f)},
dHE(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aV1=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bZ(null,new B.cH6(e),!1,d,!0,!1,null,o),$async$aV1)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aM("report_content",A.T(["p_kind",B.dFM(e),"p_target",f,"p_reason",n],o,q),q),$async$aV1)
case 8:s="Obrigado. A equipa vai rever esta "+B.cZS(e)+" em menos de 24 horas."
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
return A.m($async$aV1,w)},
Vf:function Vf(d,e){this.a=d
this.b=e},
cTd:function cTd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTa:function cTa(d){this.a=d},
cTb:function cTb(d){this.a=d},
cTc:function cTc(d){this.a=d},
cH6:function cH6(d){this.a=d},
cH5:function cH5(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[156],B)
C=c[242]
E=c[275]
F=c[162]
G=c[414]
B.Vf.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cTd.prototype={
$1(d){var x=this,w=null,v=A.a([A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.PW,w,w,w,w,new B.cTa(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cZS(x.a),w,w,w,w,C.c6X,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.aEm,w,w,w,w,new B.cTb(d),!1,w,w,w,w,w,C.cat,w,A.h("Bloquear "+x.d,w,w,w,w,D.hj,w,w,w),w,w,w))
v.push(A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.aE6,w,w,w,w,new B.cTc(d),!1,w,w,w,w,w,w,w,D.cV,w,w,w))
return A.bF(!0,new A.R(D.cn,A.y(v,D.w,D.h,D.K,0,D.u),w),w,D.a_,!0)},
$S:44}
B.cTa.prototype={
$0(){return A.am(this.a,!1).af("report")},
$S:0}
B.cTb.prototype={
$0(){return A.am(this.a,!1).af("block")},
$S:0}
B.cTc.prototype={
$0(){return A.am(this.a,!1).bv()},
$S:0}
B.cH6.prototype={
$1(d){var x,w,v=null,u=A.a([new A.R(C.auD,A.h("Porque queres denunciar esta "+B.cZS(this.a)+"?",v,v,v,v,E.ab0,v,v,v),v),C.bM8],y.u)
for(x=0;x<6;++x){w=C.bvT[x]
u.push(A.jp(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cH5(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bF(!0,new A.R(D.cn,A.y(u,D.G,D.h,D.K,0,D.u),v),v,D.a_,!0)},
$S:44}
B.cH5.prototype={
$0(){return A.am(this.a,!1).af(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Vf,A.f3)
w(A.bw,[B.cTd,B.cH6])
w(A.bQ,[B.cTa,B.cTb,B.cTc,B.cH5])})()
var y={e:A.w("cF"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dp"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.Nw=new A.a2(0,0,0,2)
C.auD=new A.a2(20,8,20,4)
C.PW=new A.b8(G.Ep,null,D.fr,null,null,null)
C.aE6=new A.b8(D.em,null,null,null,null,null)
C.aEm=new A.b8(D.oa,null,D.A,null,null,null)
C.bTF=new A.a0("offensive","Ofensivo ou \xf3dio")
C.bSN=new A.a0("harassment","Ass\xe9dio ou amea\xe7as")
C.bSf=new A.a0("sexual","Conte\xfado sexual")
C.bTx=new A.a0("violence","Viol\xeancia")
C.bTd=new A.a0("spam","Spam ou burla")
C.bSM=new A.a0("other","Outro motivo")
C.bvT=x([C.bTF,C.bSN,C.bSf,C.bTx,C.bTd,C.bSM],A.w("r<+(c,c)>"))
C.au6=new A.a2(20,0,20,6)
C.cfe=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.kf,null,null,null,null,null,null,null,null)
C.bM8=new A.R(C.au6,C.cfe,null)
C.a7v=new B.Vf(0,"galleryPhoto")
C.Hp=new B.Vf(1,"galleryComment")
C.Hq=new B.Vf(2,"groupMessage")
C.t_=new B.Vf(3,"message")
C.c6X=new A.P(!0,D.fr,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.cat=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["GuIJUZXHTPstj15Nz+M17CpOB4U="]=a.current})($__dart_deferred_initializers__);