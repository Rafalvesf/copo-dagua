((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dFp(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cZl(d){var x
A:{if(C.a6E===d){x="fotografia"
break A}if(C.GT===d){x="coment\xe1rio"
break A}if(C.GU===d||C.rp===d){x="mensagem"
break A}x=null}return x},
wu(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wu=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a_(0,$.b7(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bQ(null,new B.cSH(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wu)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aU8(d,i,j),$async$wu)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akq(d,e,g,u),$async$wu)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wu,w)},
aU8(d,e,f){return B.dHk(d,e,f)},
dHk(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aU8=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bQ(null,new B.cGe(e),!1,d,!0,!1,null,o),$async$aU8)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aH("report_content",A.R(["p_kind",B.dFp(e),"p_target",f,"p_reason",n],o,q),q),$async$aU8)
case 8:s="Obrigado. A equipa vai rever esta "+B.cZl(e)+" em menos de 24 horas."
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
return A.m($async$aU8,w)},
V2:function V2(d,e){this.a=d
this.b=e},
cSH:function cSH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSE:function cSE(d){this.a=d},
cSF:function cSF(d){this.a=d},
cSG:function cSG(d){this.a=d},
cGe:function cGe(d){this.a=d},
cGd:function cGd(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[157],B)
C=c[237]
E=c[271]
F=c[162]
G=c[410]
B.V2.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cSH.prototype={
$1(d){var x=this,w=null,v=A.a([A.jn(!1,w,w,w,!0,w,w,w,!0,w,C.P6,w,w,w,w,new B.cSE(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cZl(x.a),w,w,w,w,C.c57,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jn(!1,w,w,w,!0,w,w,w,!0,w,C.aDb,w,w,w,w,new B.cSF(d),!1,w,w,w,w,w,C.c7V,w,A.h("Bloquear "+x.d,w,w,w,w,D.it,w,w),w,w,w))
v.push(A.jn(!1,w,w,w,!0,w,w,w,!0,w,C.aCX,w,w,w,w,new B.cSG(d),!1,w,w,w,w,w,w,w,D.cZ,w,w,w))
return A.bB(!0,new A.S(D.cj,A.y(v,D.v,D.h,D.J),w),w,D.Z,!0)},
$S:32}
B.cSE.prototype={
$0(){return A.al(this.a,!1).af("report")},
$S:0}
B.cSF.prototype={
$0(){return A.al(this.a,!1).af("block")},
$S:0}
B.cSG.prototype={
$0(){return A.al(this.a,!1).bk()},
$S:0}
B.cGe.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atn,A.h("Porque queres denunciar esta "+B.cZl(this.a)+"?",v,v,v,v,E.aac,v,v),v),C.bLm],y.u)
for(x=0;x<6;++x){w=C.buA[x]
u.push(A.jn(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cGd(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bB(!0,new A.S(D.cj,A.y(u,D.E,D.h,D.J),v),v,D.Z,!0)},
$S:32}
B.cGd.prototype={
$0(){return A.al(this.a,!1).af(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.V2,A.fg)
w(A.bt,[B.cSH,B.cGe])
w(A.bL,[B.cSE,B.cSF,B.cSG,B.cGd])})()
var y={e:A.z("cH"),u:A.z("r<e>"),w:A.z("c"),q:A.z("dl"),b:A.z("@"),v:A.z("~")};(function constants(){var x=a.makeConstList
C.MN=new A.a3(0,0,0,2)
C.atn=new A.a3(20,8,20,4)
C.P6=new A.b8(G.DV,null,D.fQ,null,null,null)
C.aCX=new A.b8(D.ek,null,null,null,null,null)
C.aDb=new A.b8(D.nM,null,D.z,null,null,null)
C.bSl=new A.X("offensive","Ofensivo ou \xf3dio")
C.bRq=new A.X("harassment","Ass\xe9dio ou amea\xe7as")
C.bQT=new A.X("sexual","Conte\xfado sexual")
C.bSd=new A.X("violence","Viol\xeancia")
C.bRR=new A.X("spam","Spam ou burla")
C.bRp=new A.X("other","Outro motivo")
C.buA=x([C.bSl,C.bRq,C.bQT,C.bSd,C.bRR,C.bRp],A.z("r<+(c,c)>"))
C.asR=new A.a3(20,0,20,6)
C.cdC=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.ka,null,null,null,null,null,null,null)
C.bLm=new A.S(C.asR,C.cdC,null)
C.a6E=new B.V2(0,"galleryPhoto")
C.GT=new B.V2(1,"galleryComment")
C.GU=new B.V2(2,"groupMessage")
C.rp=new B.V2(3,"message")
C.c57=new A.P(!0,D.fQ,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c7V=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["DHLmzxiQUzxhLV6XrLIyt2X0CwE="]=a.current})($__dart_deferred_initializers__);