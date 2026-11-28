((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dA_(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cUB(d){var x
A:{if(C.a70===d){x="fotografia"
break A}if(C.GT===d){x="coment\xe1rio"
break A}if(C.GU===d||C.rB===d){x="mensagem"
break A}x=null}return x},
wq(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wq=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a1(0,$.b8(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.D(h).length===0?"esta pessoa":D.f.D(h)
x=3
return A.d(A.cn(null,new B.cO_(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wq)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aTD(d,i,j),$async$wq)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.ak5(d,e,g,u),$async$wq)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wq,w)},
aTD(d,e,f){return B.dBS(d,e,f)},
dBS(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aTD=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.cn(null,new B.cCb(e),!1,d,!0,!1,null,o),$async$aTD)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.T().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aT("report_content",A.S(["p_kind",B.dA_(e),"p_target",f,"p_reason",n],o,q),q),$async$aTD)
case 8:s="Obrigado. A equipa vai rever esta "+B.cUB(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a4(A.cA(null,null,null,null,null,D.z,null,A.i(s,null,null,null,null,null,null,null,null),null,D.X,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aTD,w)},
UK:function UK(d,e){this.a=d
this.b=e},
cO_:function cO_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cNX:function cNX(d){this.a=d},
cNY:function cNY(d){this.a=d},
cNZ:function cNZ(d){this.a=d},
cCb:function cCb(d){this.a=d},
cCa:function cCa(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[152],B)
C=c[229]
E=c[264]
F=c[159]
G=c[404]
B.UK.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cO_.prototype={
$1(d){var x=this,w=null,v=A.a([A.j_(!1,w,w,w,!0,w,w,w,!0,w,C.Pp,w,w,w,w,new B.cNX(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.cUB(x.a),w,w,w,w,C.c5o,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.j_(!1,w,w,w,!0,w,w,w,!0,w,C.aDz,w,w,w,w,new B.cNY(d),!1,w,w,w,w,w,C.c8O,w,A.i("Bloquear "+x.d,w,w,w,w,D.h8,w,w,w),w,w,w))
v.push(A.j_(!1,w,w,w,!0,w,w,w,!0,w,C.aDl,w,w,w,w,new B.cNZ(d),!1,w,w,w,w,w,w,w,D.cL,w,w,w))
return A.bD(!0,new A.R(D.cr,A.C(v,D.w,D.j,D.L,0,D.v),w),w,D.a_,!0)},
$S:43}
B.cNX.prototype={
$0(){return A.aq(this.a,!1).aj("report")},
$S:0}
B.cNY.prototype={
$0(){return A.aq(this.a,!1).aj("block")},
$S:0}
B.cNZ.prototype={
$0(){return A.aq(this.a,!1).bJ()},
$S:0}
B.cCb.prototype={
$1(d){var x,w,v=null,u=A.a([new A.R(C.atU,A.i("Porque queres denunciar esta "+B.cUB(this.a)+"?",v,v,v,v,E.Is,v,v,v),v),C.bL9],y.u)
for(x=0;x<6;++x){w=C.buT[x]
u.push(A.j_(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cCa(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bD(!0,new A.R(D.cr,A.C(u,D.J,D.j,D.L,0,D.v),v),v,D.a_,!0)},
$S:43}
B.cCa.prototype={
$0(){return A.aq(this.a,!1).aj(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.UK,A.fr)
w(A.bx,[B.cO_,B.cCb])
w(A.bR,[B.cNX,B.cNY,B.cNZ,B.cCa])})()
var y={e:A.w("cG"),u:A.w("r<e>"),w:A.w("c"),q:A.w("ds"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.N1=new A.a2(0,0,0,2)
C.atU=new A.a2(20,8,20,4)
C.Pp=new A.ba(G.E_,null,D.dK,null,null,null)
C.aDl=new A.ba(D.eN,null,null,null,null,null)
C.aDz=new A.ba(D.nJ,null,D.A,null,null,null)
C.bSC=new A.a3("offensive","Ofensivo ou \xf3dio")
C.bRK=new A.a3("harassment","Ass\xe9dio ou amea\xe7as")
C.bRa=new A.a3("sexual","Conte\xfado sexual")
C.bSu=new A.a3("violence","Viol\xeancia")
C.bSb=new A.a3("spam","Spam ou burla")
C.bRJ=new A.a3("other","Outro motivo")
C.buT=x([C.bSC,C.bRK,C.bRa,C.bSu,C.bSb,C.bRJ],A.w("r<+(c,c)>"))
C.atn=new A.a2(20,0,20,6)
C.cdl=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k0,null,null,null,null,null,null,null,null)
C.bL9=new A.R(C.atn,C.cdl,null)
C.a70=new B.UK(0,"galleryPhoto")
C.GT=new B.UK(1,"galleryComment")
C.GU=new B.UK(2,"groupMessage")
C.rB=new B.UK(3,"message")
C.c5o=new A.M(!0,D.dK,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c8O=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["i8zu00gRsbaDlhflIYpPmPuW3NQ="]=a.current})($__dart_deferred_initializers__);