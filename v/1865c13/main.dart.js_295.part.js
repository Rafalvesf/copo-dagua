((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dEm(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cYn(d){var x
A:{if(C.a6B===d){x="fotografia"
break A}if(C.GQ===d){x="coment\xe1rio"
break A}if(C.GR===d||C.rn===d){x="mensagem"
break A}x=null}return x},
wq(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wq=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a_(0,$.b6(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bP(null,new B.cRL(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wq)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aTK(d,i,j),$async$wq)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akc(d,e,g,u),$async$wq)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wq,w)},
aTK(d,e,f){return B.dGf(d,e,f)},
dGf(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aTK=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bP(null,new B.cFj(e),!1,d,!0,!1,null,o),$async$aTK)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.P().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aG("report_content",A.R(["p_kind",B.dEm(e),"p_target",f,"p_reason",n],o,q),q),$async$aTK)
case 8:s="Obrigado. A equipa vai rever esta "+B.cYn(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a1(A.bZ(null,null,null,null,null,D.y,null,A.h(s,null,null,null,null,null,null,null),null,D.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aTK,w)},
UU:function UU(d,e){this.a=d
this.b=e},
cRL:function cRL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cRI:function cRI(d){this.a=d},
cRJ:function cRJ(d){this.a=d},
cRK:function cRK(d){this.a=d},
cFj:function cFj(d){this.a=d},
cFi:function cFi(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[157],B)
C=c[236]
E=c[270]
F=c[162]
G=c[409]
B.UU.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cRL.prototype={
$1(d){var x=this,w=null,v=A.a([A.jm(!1,w,w,w,!0,w,w,w,!0,w,C.P3,w,w,w,w,new B.cRI(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cYn(x.a),w,w,w,w,C.c4U,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jm(!1,w,w,w,!0,w,w,w,!0,w,C.aD6,w,w,w,w,new B.cRJ(d),!1,w,w,w,w,w,C.c7G,w,A.h("Bloquear "+x.d,w,w,w,w,D.is,w,w),w,w,w))
v.push(A.jm(!1,w,w,w,!0,w,w,w,!0,w,C.aCS,w,w,w,w,new B.cRK(d),!1,w,w,w,w,w,w,w,D.cO,w,w,w))
return A.bA(!0,new A.S(D.cj,A.z(v,D.v,D.h,D.J),w),w,D.Z,!0)},
$S:33}
B.cRI.prototype={
$0(){return A.al(this.a,!1).ae("report")},
$S:0}
B.cRJ.prototype={
$0(){return A.al(this.a,!1).ae("block")},
$S:0}
B.cRK.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
B.cFj.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atj,A.h("Porque queres denunciar esta "+B.cYn(this.a)+"?",v,v,v,v,E.aa7,v,v),v),C.bLg],y.u)
for(x=0;x<6;++x){w=C.buv[x]
u.push(A.jm(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cFi(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bA(!0,new A.S(D.cj,A.z(u,D.E,D.h,D.J),v),v,D.Z,!0)},
$S:33}
B.cFi.prototype={
$0(){return A.al(this.a,!1).ae(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.UU,A.ff)
w(A.bt,[B.cRL,B.cFj])
w(A.bK,[B.cRI,B.cRJ,B.cRK,B.cFi])})()
var y={e:A.y("cF"),u:A.y("r<e>"),w:A.y("c"),q:A.y("dp"),b:A.y("@"),v:A.y("~")};(function constants(){var x=a.makeConstList
C.MK=new A.a3(0,0,0,2)
C.atj=new A.a3(20,8,20,4)
C.P3=new A.b7(G.DS,null,D.fP,null,null,null)
C.aCS=new A.b7(D.ei,null,null,null,null,null)
C.aD6=new A.b7(D.nL,null,D.z,null,null,null)
C.bS9=new A.X("offensive","Ofensivo ou \xf3dio")
C.bRh=new A.X("harassment","Ass\xe9dio ou amea\xe7as")
C.bQK=new A.X("sexual","Conte\xfado sexual")
C.bS1=new A.X("violence","Viol\xeancia")
C.bRI=new A.X("spam","Spam ou burla")
C.bRg=new A.X("other","Outro motivo")
C.buv=x([C.bS9,C.bRh,C.bQK,C.bS1,C.bRI,C.bRg],A.y("r<+(c,c)>"))
C.asN=new A.a3(20,0,20,6)
C.cdn=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k8,null,null,null,null,null,null,null)
C.bLg=new A.S(C.asN,C.cdn,null)
C.a6B=new B.UU(0,"galleryPhoto")
C.GQ=new B.UU(1,"galleryComment")
C.GR=new B.UU(2,"groupMessage")
C.rn=new B.UU(3,"message")
C.c4U=new A.Q(!0,D.fP,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c7G=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["eWCPzyz6qxEK64PD2hVhCnGv1gQ="]=a.current})($__dart_deferred_initializers__);