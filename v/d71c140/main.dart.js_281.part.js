((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dBR(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cW9(d){var x
A:{if(C.a7o===d){x="fotografia"
break A}if(C.Hh===d){x="coment\xe1rio"
break A}if(C.Hi===d||C.rL===d){x="mensagem"
break A}x=null}return x},
wu(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wu=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a0(0,$.b8(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.C(h).length===0?"esta pessoa":D.f.C(h)
x=3
return A.d(A.cc(null,new B.cPw(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wu)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUh(d,i,j),$async$wu)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akA(d,e,g,u),$async$wu)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wu,w)},
aUh(d,e,f){return B.dDI(d,e,f)},
dDI(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUh=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.cc(null,new B.cDF(e),!1,d,!0,!1,null,o),$async$aUh)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.S().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aT("report_content",A.T(["p_kind",B.dBR(e),"p_target",f,"p_reason",n],o,q),q),$async$aUh)
case 8:s="Obrigado. A equipa vai rever esta "+B.cW9(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a4(A.cB(null,null,null,null,null,D.z,null,A.h(s,null,null,null,null,null,null,null,null),null,D.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUh,w)},
US:function US(d,e){this.a=d
this.b=e},
cPw:function cPw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cPt:function cPt(d){this.a=d},
cPu:function cPu(d){this.a=d},
cPv:function cPv(d){this.a=d},
cDF:function cDF(d){this.a=d},
cDE:function cDE(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[153],B)
C=c[234]
E=c[269]
F=c[161]
G=c[409]
B.US.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cPw.prototype={
$1(d){var x=this,w=null,v=A.a([A.jj(!1,w,w,w,!0,w,w,w,!0,w,C.PL,w,w,w,w,new B.cPt(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cW9(x.a),w,w,w,w,C.c6C,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jj(!1,w,w,w,!0,w,w,w,!0,w,C.aEa,w,w,w,w,new B.cPu(d),!1,w,w,w,w,w,C.ca7,w,A.h("Bloquear "+x.d,w,w,w,w,D.hb,w,w,w),w,w,w))
v.push(A.jj(!1,w,w,w,!0,w,w,w,!0,w,C.aDX,w,w,w,w,new B.cPv(d),!1,w,w,w,w,w,w,w,D.cP,w,w,w))
return A.bC(!0,new A.Q(D.cm,A.B(v,D.w,D.i,D.K,0,D.v),w),w,D.Z,!0)},
$S:46}
B.cPt.prototype={
$0(){return A.an(this.a,!1).aj("report")},
$S:0}
B.cPu.prototype={
$0(){return A.an(this.a,!1).aj("block")},
$S:0}
B.cPv.prototype={
$0(){return A.an(this.a,!1).bB()},
$S:0}
B.cDF.prototype={
$1(d){var x,w,v=null,u=A.a([new A.Q(C.auu,A.h("Porque queres denunciar esta "+B.cW9(this.a)+"?",v,v,v,v,E.IQ,v,v,v),v),C.bLW],y.u)
for(x=0;x<6;++x){w=C.bvF[x]
u.push(A.jj(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cDE(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bC(!0,new A.Q(D.cm,A.B(u,D.I,D.i,D.K,0,D.v),v),v,D.Z,!0)},
$S:46}
B.cDE.prototype={
$0(){return A.an(this.a,!1).aj(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.US,A.f6)
w(A.bw,[B.cPw,B.cDF])
w(A.bS,[B.cPt,B.cPu,B.cPv,B.cDE])})()
var y={e:A.w("cE"),u:A.w("r<e>"),w:A.w("c"),q:A.w("du"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.No=new A.a0(0,0,0,2)
C.auu=new A.a0(20,8,20,4)
C.PL=new A.ba(G.Ej,null,D.fo,null,null,null)
C.aDX=new A.ba(D.ew,null,null,null,null,null)
C.aEa=new A.ba(D.nV,null,D.A,null,null,null)
C.bTs=new A.a3("offensive","Ofensivo ou \xf3dio")
C.bSx=new A.a3("harassment","Ass\xe9dio ou amea\xe7as")
C.bRZ=new A.a3("sexual","Conte\xfado sexual")
C.bTj=new A.a3("violence","Viol\xeancia")
C.bT0=new A.a3("spam","Spam ou burla")
C.bSw=new A.a3("other","Outro motivo")
C.bvF=x([C.bTs,C.bSx,C.bRZ,C.bTj,C.bT0,C.bSw],A.w("r<+(c,c)>"))
C.atY=new A.a0(20,0,20,6)
C.ceM=new A.C("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k3,null,null,null,null,null,null,null,null)
C.bLW=new A.Q(C.atY,C.ceM,null)
C.a7o=new B.US(0,"galleryPhoto")
C.Hh=new B.US(1,"galleryComment")
C.Hi=new B.US(2,"groupMessage")
C.rL=new B.US(3,"message")
C.c6C=new A.N(!0,D.fo,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.ca7=new A.C("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["uZF542aFoYDf9/Z9QXLQlTsUZs8="]=a.current})($__dart_deferred_initializers__);