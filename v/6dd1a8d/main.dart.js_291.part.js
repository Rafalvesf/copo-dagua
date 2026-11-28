((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dFZ(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cZY(d){var x
A:{if(C.a6Y===d){x="fotografia"
break A}if(C.Ha===d){x="coment\xe1rio"
break A}if(C.Hb===d||C.rJ===d){x="mensagem"
break A}x=null}return x},
ww(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$ww=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a_(0,$.b7(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bW(null,new B.cTf(i,f,g,u),!1,d,!0,!1,null,y.w),$async$ww)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUz(d,i,j),$async$ww)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akN(d,e,g,u),$async$ww)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$ww,w)},
aUz(d,e,f){return B.dHS(d,e,f)},
dHS(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUz=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bW(null,new B.cGW(e),!1,d,!0,!1,null,o),$async$aUz)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.P().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aK("report_content",A.R(["p_kind",B.dFZ(e),"p_target",f,"p_reason",n],o,q),q),$async$aUz)
case 8:s="Obrigado. A equipa vai rever esta "+B.cZY(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a2(A.bZ(null,null,null,null,null,D.y,null,A.h(s,null,null,null,null,null,null,null,null),null,D.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUz,w)},
V4:function V4(d,e){this.a=d
this.b=e},
cTf:function cTf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTc:function cTc(d){this.a=d},
cTd:function cTd(d){this.a=d},
cTe:function cTe(d){this.a=d},
cGW:function cGW(d){this.a=d},
cGV:function cGV(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[155],B)
C=c[238]
E=c[272]
F=c[160]
G=c[412]
B.V4.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cTf.prototype={
$1(d){var x=this,w=null,v=A.a([A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.Pr,w,w,w,w,new B.cTc(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cZY(x.a),w,w,w,w,C.c5N,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.aDD,w,w,w,w,new B.cTd(d),!1,w,w,w,w,w,C.c9g,w,A.h("Bloquear "+x.d,w,w,w,w,D.is,w,w,w),w,w,w))
v.push(A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.aDo,w,w,w,w,new B.cTe(d),!1,w,w,w,w,w,w,w,D.cS,w,w,w))
return A.bB(!0,new A.S(D.cm,A.z(v,D.v,D.h,D.J),w),w,D.Z,!0)},
$S:42}
B.cTc.prototype={
$0(){return A.am(this.a,!1).ae("report")},
$S:0}
B.cTd.prototype={
$0(){return A.am(this.a,!1).ae("block")},
$S:0}
B.cTe.prototype={
$0(){return A.am(this.a,!1).bm()},
$S:0}
B.cGW.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atN,A.h("Porque queres denunciar esta "+B.cZY(this.a)+"?",v,v,v,v,E.aat,v,v,v),v),C.bLh],y.u)
for(x=0;x<6;++x){w=C.buZ[x]
u.push(A.jp(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cGV(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bB(!0,new A.S(D.cm,A.z(u,D.E,D.h,D.J),v),v,D.Z,!0)},
$S:42}
B.cGV.prototype={
$0(){return A.am(this.a,!1).ae(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.V4,A.f_)
w(A.bx,[B.cTf,B.cGW])
w(A.bQ,[B.cTc,B.cTd,B.cTe,B.cGV])})()
var y={e:A.x("cK"),u:A.x("r<e>"),w:A.x("c"),q:A.x("dr"),b:A.x("@"),v:A.x("~")};(function constants(){var x=a.makeConstList
C.N5=new A.a3(0,0,0,2)
C.atN=new A.a3(20,8,20,4)
C.Pr=new A.b8(G.Eb,null,D.fQ,null,null,null)
C.aDo=new A.b8(D.el,null,null,null,null,null)
C.aDD=new A.b8(D.nY,null,D.z,null,null,null)
C.bSQ=new A.Z("offensive","Ofensivo ou \xf3dio")
C.bRY=new A.Z("harassment","Ass\xe9dio ou amea\xe7as")
C.bRq=new A.Z("sexual","Conte\xfado sexual")
C.bSI=new A.Z("violence","Viol\xeancia")
C.bSo=new A.Z("spam","Spam ou burla")
C.bRX=new A.Z("other","Outro motivo")
C.buZ=x([C.bSQ,C.bRY,C.bRq,C.bSI,C.bSo,C.bRX],A.x("r<+(c,c)>"))
C.ath=new A.a3(20,0,20,6)
C.ce0=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k8,null,null,null,null,null,null,null,null)
C.bLh=new A.S(C.ath,C.ce0,null)
C.a6Y=new B.V4(0,"galleryPhoto")
C.Ha=new B.V4(1,"galleryComment")
C.Hb=new B.V4(2,"groupMessage")
C.rJ=new B.V4(3,"message")
C.c5N=new A.Q(!0,D.fQ,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c9g=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["ACo93/1t5EdcQfuSfrMq5FIC9+E="]=a.current})($__dart_deferred_initializers__);