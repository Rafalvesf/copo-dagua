((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,E,B={
deT(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cD6(d){var x
A:{if(C.a5_===d){x="fotografia"
break A}if(C.Fy===d){x="coment\xe1rio"
break A}if(C.Fz===d||C.qT===d){x="mensagem"
break A}x=null}return x},
vd(d,e,f,g,h,i,j){var x=0,w=A.m(y.v),v,u,t,s,r
var $async$vd=A.i(function(k,l){if(k===1)return A.j(l,w)
for(;;)switch(x){case 0:s=e.a2(0,$.b6(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.D(h).length===0?"esta pessoa":D.f.D(h)
x=3
return A.d(A.cx(null,new B.cwV(i,f,g,u),!0,d,!0,!1,null,y.w),$async$vd)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aN7(d,i,j),$async$vd)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(G.aMT(d,e,g,u),$async$vd)
case 9:case 8:case 1:return A.k(v,w)}})
return A.l($async$vd,w)},
aN7(d,e,f){return B.dgF(d,e,f)},
dgF(d,e,f){var x=0,w=A.m(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aN7=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.cx(null,new B.cmf(e),!0,d,!0,!1,null,o),$async$aN7)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aT("report_content",A.U(["p_kind",B.deT(e),"p_target",f,"p_reason",n],o,q),q),$async$aN7)
case 8:s="Obrigado. A equipa vai rever esta "+B.cD6(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.R(y.q).f.a3(A.cr(null,null,null,null,null,D.A,null,A.h(s,null,null,null,null,null,null,null),null,D.X,null,null,null,null,null,null,null,null,null,null))
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$aN7,w)},
RY:function RY(d,e){this.a=d
this.b=e},
cwV:function cwV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cwS:function cwS(d){this.a=d},
cwT:function cwT(d){this.a=d},
cwU:function cwU(d){this.a=d},
cmf:function cmf(d){this.a=d},
cme:function cme(d,e){this.a=d
this.b=e}},C,F,G
A=c[0]
D=c[2]
E=c[418]
B=a.updateHolder(c[147],B)
C=c[253]
F=c[416]
G=c[153]
B.RY.prototype={
J(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cwV.prototype={
$1(d){var x=this,w=null,v=A.a([A.iF(!1,w,w,w,!0,w,w,w,!0,w,C.NF,w,w,w,w,new B.cwS(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cD6(x.a),w,w,w,C.c0N,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.iF(!1,w,w,w,!0,w,w,w,!0,w,C.aAF,w,w,w,w,new B.cwT(d),!1,w,w,w,w,w,C.c4d,w,A.h("Bloquear "+x.d,w,w,w,D.eZ,w,w,w),w,w,w))
v.push(A.iF(!1,w,w,w,!0,w,w,w,!0,w,C.aAo,w,w,w,w,new B.cwU(d),!1,w,w,w,w,w,w,w,D.cP,w,w,w))
return A.bA(!0,new A.R(D.dW,A.D(v,D.x,D.j,D.V,0,D.w),w),w,D.Y,!0)},
$S:48}
B.cwS.prototype={
$0(){return A.ar(this.a,!1).ap("report")},
$S:0}
B.cwT.prototype={
$0(){return A.ar(this.a,!1).ap("block")},
$S:0}
B.cwU.prototype={
$0(){return A.ar(this.a,!1).bL()},
$S:0}
B.cmf.prototype={
$1(d){var x,w,v=null,u=A.a([new A.R(C.arv,A.h("Porque queres denunciar esta "+B.cD6(this.a)+"?",v,v,v,F.H_,v,v,v),v),C.bHh],y.u)
for(x=0;x<6;++x){w=C.brF[x]
u.push(A.iF(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cme(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bA(!0,new A.R(D.dW,A.D(u,D.J,D.j,D.V,0,D.w),v),v,D.Y,!0)},
$S:48}
B.cme.prototype={
$0(){return A.ar(this.a,!1).ap(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.RY,A.fn)
w(A.bq,[B.cwV,B.cmf])
w(A.bI,[B.cwS,B.cwT,B.cwU,B.cme])})()
var y={e:A.u("ct"),u:A.u("q<e>"),w:A.u("c"),q:A.u("dv"),b:A.u("@"),v:A.u("~")};(function constants(){var x=a.makeConstList
C.Lr=new A.Z(0,0,0,2)
C.arv=new A.Z(20,8,20,4)
C.NF=new A.aZ(E.CN,null,D.eu,null,null,null)
C.aAo=new A.aZ(D.hC,null,null,null,null,null)
C.aAF=new A.aZ(D.n3,null,D.z,null,null,null)
C.bOg=new A.a4("offensive","Ofensivo ou \xf3dio")
C.bNq=new A.a4("harassment","Ass\xe9dio ou amea\xe7as")
C.bMY=new A.a4("sexual","Conte\xfado sexual")
C.bO8=new A.a4("violence","Viol\xeancia")
C.bNS=new A.a4("spam","Spam ou burla")
C.bNp=new A.a4("other","Outro motivo")
C.brF=x([C.bOg,C.bNq,C.bMY,C.bO8,C.bNS,C.bNp],A.u("q<+(c,c)>"))
C.aqT=new A.Z(20,0,20,6)
C.c8L=new A.z("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.o0,null,null,null,null,null,null,null,null)
C.bHh=new A.R(C.aqT,C.c8L,null)
C.a5_=new B.RY(0,"galleryPhoto")
C.Fy=new B.RY(1,"galleryComment")
C.Fz=new B.RY(2,"groupMessage")
C.qT=new B.RY(3,"message")
C.c0N=new A.E(!0,D.eu,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c4d=new A.z("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["o5alC5GmmujVSIvPIifaNSfDpRE="]=a.current})($__dart_deferred_initializers__);