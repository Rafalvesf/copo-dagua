((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dFl(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cZh(d){var x
A:{if(C.a6F===d){x="fotografia"
break A}if(C.GT===d){x="coment\xe1rio"
break A}if(C.GU===d||C.rq===d){x="mensagem"
break A}x=null}return x},
wu(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wu=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a_(0,$.b7(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bQ(null,new B.cSD(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wu)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aU3(d,i,j),$async$wu)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akm(d,e,g,u),$async$wu)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wu,w)},
aU3(d,e,f){return B.dHg(d,e,f)},
dHg(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aU3=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bQ(null,new B.cGa(e),!1,d,!0,!1,null,o),$async$aU3)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aH("report_content",A.R(["p_kind",B.dFl(e),"p_target",f,"p_reason",n],o,q),q),$async$aU3)
case 8:s="Obrigado. A equipa vai rever esta "+B.cZh(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a0(A.bY(null,null,null,null,null,D.y,null,A.h(s,null,null,null,null,null,null,null),null,D.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aU3,w)},
V1:function V1(d,e){this.a=d
this.b=e},
cSD:function cSD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSA:function cSA(d){this.a=d},
cSB:function cSB(d){this.a=d},
cSC:function cSC(d){this.a=d},
cGa:function cGa(d){this.a=d},
cG9:function cG9(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[157],B)
C=c[237]
E=c[271]
F=c[162]
G=c[410]
B.V1.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cSD.prototype={
$1(d){var x=this,w=null,v=A.a([A.jn(!1,w,w,w,!0,w,w,w,!0,w,C.P7,w,w,w,w,new B.cSA(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cZh(x.a),w,w,w,w,C.c59,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jn(!1,w,w,w,!0,w,w,w,!0,w,C.aDd,w,w,w,w,new B.cSB(d),!1,w,w,w,w,w,C.c7X,w,A.h("Bloquear "+x.d,w,w,w,w,D.is,w,w),w,w,w))
v.push(A.jn(!1,w,w,w,!0,w,w,w,!0,w,C.aCZ,w,w,w,w,new B.cSC(d),!1,w,w,w,w,w,w,w,D.cZ,w,w,w))
return A.bB(!0,new A.S(D.cj,A.z(v,D.v,D.h,D.J),w),w,D.Z,!0)},
$S:32}
B.cSA.prototype={
$0(){return A.al(this.a,!1).af("report")},
$S:0}
B.cSB.prototype={
$0(){return A.al(this.a,!1).af("block")},
$S:0}
B.cSC.prototype={
$0(){return A.al(this.a,!1).bk()},
$S:0}
B.cGa.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atp,A.h("Porque queres denunciar esta "+B.cZh(this.a)+"?",v,v,v,v,E.aad,v,v),v),C.bLo],y.u)
for(x=0;x<6;++x){w=C.buC[x]
u.push(A.jn(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cG9(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bB(!0,new A.S(D.cj,A.z(u,D.E,D.h,D.J),v),v,D.Z,!0)},
$S:32}
B.cG9.prototype={
$0(){return A.al(this.a,!1).af(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.V1,A.fg)
w(A.bs,[B.cSD,B.cGa])
w(A.bL,[B.cSA,B.cSB,B.cSC,B.cG9])})()
var y={e:A.y("cH"),u:A.y("r<e>"),w:A.y("c"),q:A.y("dl"),b:A.y("@"),v:A.y("~")};(function constants(){var x=a.makeConstList
C.MO=new A.a3(0,0,0,2)
C.atp=new A.a3(20,8,20,4)
C.P7=new A.b8(G.DV,null,D.fQ,null,null,null)
C.aCZ=new A.b8(D.ek,null,null,null,null,null)
C.aDd=new A.b8(D.nN,null,D.z,null,null,null)
C.bSn=new A.X("offensive","Ofensivo ou \xf3dio")
C.bRs=new A.X("harassment","Ass\xe9dio ou amea\xe7as")
C.bQV=new A.X("sexual","Conte\xfado sexual")
C.bSf=new A.X("violence","Viol\xeancia")
C.bRT=new A.X("spam","Spam ou burla")
C.bRr=new A.X("other","Outro motivo")
C.buC=x([C.bSn,C.bRs,C.bQV,C.bSf,C.bRT,C.bRr],A.y("r<+(c,c)>"))
C.asT=new A.a3(20,0,20,6)
C.cdE=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k9,null,null,null,null,null,null,null)
C.bLo=new A.S(C.asT,C.cdE,null)
C.a6F=new B.V1(0,"galleryPhoto")
C.GT=new B.V1(1,"galleryComment")
C.GU=new B.V1(2,"groupMessage")
C.rq=new B.V1(3,"message")
C.c59=new A.P(!0,D.fQ,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c7X=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["M7wWunR7aHD1AWwJPOJumW9KEG0="]=a.current})($__dart_deferred_initializers__);