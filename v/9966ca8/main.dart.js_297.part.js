((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dFC(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cZy(d){var x
A:{if(C.a6E===d){x="fotografia"
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
return A.d(A.bQ(null,new B.cSU(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wu)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aU9(d,i,j),$async$wu)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akq(d,e,g,u),$async$wu)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wu,w)},
aU9(d,e,f){return B.dHx(d,e,f)},
dHx(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aU9=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bQ(null,new B.cGn(e),!1,d,!0,!1,null,o),$async$aU9)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aH("report_content",A.R(["p_kind",B.dFC(e),"p_target",f,"p_reason",n],o,q),q),$async$aU9)
case 8:s="Obrigado. A equipa vai rever esta "+B.cZy(e)+" em menos de 24 horas."
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
return A.m($async$aU9,w)},
V2:function V2(d,e){this.a=d
this.b=e},
cSU:function cSU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSR:function cSR(d){this.a=d},
cSS:function cSS(d){this.a=d},
cST:function cST(d){this.a=d},
cGn:function cGn(d){this.a=d},
cGm:function cGm(d,e){this.a=d
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
B.cSU.prototype={
$1(d){var x=this,w=null,v=A.a([A.jn(!1,w,w,w,!0,w,w,w,!0,w,C.P6,w,w,w,w,new B.cSR(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cZy(x.a),w,w,w,w,C.c57,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jn(!1,w,w,w,!0,w,w,w,!0,w,C.aDb,w,w,w,w,new B.cSS(d),!1,w,w,w,w,w,C.c7V,w,A.h("Bloquear "+x.d,w,w,w,w,D.it,w,w),w,w,w))
v.push(A.jn(!1,w,w,w,!0,w,w,w,!0,w,C.aCX,w,w,w,w,new B.cST(d),!1,w,w,w,w,w,w,w,D.cZ,w,w,w))
return A.bB(!0,new A.S(D.cj,A.y(v,D.v,D.h,D.J),w),w,D.Z,!0)},
$S:31}
B.cSR.prototype={
$0(){return A.al(this.a,!1).af("report")},
$S:0}
B.cSS.prototype={
$0(){return A.al(this.a,!1).af("block")},
$S:0}
B.cST.prototype={
$0(){return A.al(this.a,!1).bk()},
$S:0}
B.cGn.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atn,A.h("Porque queres denunciar esta "+B.cZy(this.a)+"?",v,v,v,v,E.aac,v,v),v),C.bLm],y.u)
for(x=0;x<6;++x){w=C.buA[x]
u.push(A.jn(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cGm(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bB(!0,new A.S(D.cj,A.y(u,D.E,D.h,D.J),v),v,D.Z,!0)},
$S:31}
B.cGm.prototype={
$0(){return A.al(this.a,!1).af(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.V2,A.fg)
w(A.bt,[B.cSU,B.cGn])
w(A.bL,[B.cSR,B.cSS,B.cST,B.cGm])})()
var y={e:A.A("cH"),u:A.A("r<e>"),w:A.A("c"),q:A.A("dl"),b:A.A("@"),v:A.A("~")};(function constants(){var x=a.makeConstList
C.MN=new A.a4(0,0,0,2)
C.atn=new A.a4(20,8,20,4)
C.P6=new A.b8(G.DW,null,D.fR,null,null,null)
C.aCX=new A.b8(D.ek,null,null,null,null,null)
C.aDb=new A.b8(D.nN,null,D.z,null,null,null)
C.bSl=new A.X("offensive","Ofensivo ou \xf3dio")
C.bRq=new A.X("harassment","Ass\xe9dio ou amea\xe7as")
C.bQT=new A.X("sexual","Conte\xfado sexual")
C.bSd=new A.X("violence","Viol\xeancia")
C.bRR=new A.X("spam","Spam ou burla")
C.bRp=new A.X("other","Outro motivo")
C.buA=x([C.bSl,C.bRq,C.bQT,C.bSd,C.bRR,C.bRp],A.A("r<+(c,c)>"))
C.asR=new A.a4(20,0,20,6)
C.cdC=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.ka,null,null,null,null,null,null,null)
C.bLm=new A.S(C.asR,C.cdC,null)
C.a6E=new B.V2(0,"galleryPhoto")
C.GT=new B.V2(1,"galleryComment")
C.GU=new B.V2(2,"groupMessage")
C.rq=new B.V2(3,"message")
C.c57=new A.P(!0,D.fR,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c7V=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["UEKVSD3P6xtwl1I8Df6Zzs8gMWw="]=a.current})($__dart_deferred_initializers__);