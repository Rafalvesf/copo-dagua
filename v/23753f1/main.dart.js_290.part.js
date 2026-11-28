((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dEB(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cYN(d){var x
A:{if(C.a6Z===d){x="fotografia"
break A}if(C.H4===d){x="coment\xe1rio"
break A}if(C.H5===d||C.rJ===d){x="mensagem"
break A}x=null}return x},
ww(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$ww=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a0(0,$.b9(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bW(null,new B.cS8(i,f,g,u),!1,d,!0,!1,null,y.w),$async$ww)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUr(d,i,j),$async$ww)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akI(d,e,g,u),$async$ww)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$ww,w)},
aUr(d,e,f){return B.dGt(d,e,f)},
dGt(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUr=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bW(null,new B.cFX(e),!1,d,!0,!1,null,o),$async$aUr)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aK("report_content",A.R(["p_kind",B.dEB(e),"p_target",f,"p_reason",n],o,q),q),$async$aUr)
case 8:s="Obrigado. A equipa vai rever esta "+B.cYN(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a1(A.c1(null,null,null,null,null,D.y,null,A.h(s,null,null,null,null,null,null,null,null),null,D.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUr,w)},
V5:function V5(d,e){this.a=d
this.b=e},
cS8:function cS8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cS5:function cS5(d){this.a=d},
cS6:function cS6(d){this.a=d},
cS7:function cS7(d){this.a=d},
cFX:function cFX(d){this.a=d},
cFW:function cFW(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[156],B)
C=c[244]
E=c[277]
F=c[161]
G=c[417]
B.V5.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cS8.prototype={
$1(d){var x=this,w=null,v=A.a([A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.Pt,w,w,w,w,new B.cS5(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cYN(x.a),w,w,w,w,C.c5O,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.aDm,w,w,w,w,new B.cS6(d),!1,w,w,w,w,w,C.c9l,w,A.h("Bloquear "+x.d,w,w,w,w,D.hf,w,w,w),w,w,w))
v.push(A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.aD7,w,w,w,w,new B.cS7(d),!1,w,w,w,w,w,w,w,D.cT,w,w,w))
return A.bD(!0,new A.S(D.cm,A.A(v,D.v,D.h,D.J),w),w,D.Z,!0)},
$S:43}
B.cS5.prototype={
$0(){return A.am(this.a,!1).ae("report")},
$S:0}
B.cS6.prototype={
$0(){return A.am(this.a,!1).ae("block")},
$S:0}
B.cS7.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
B.cFX.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atH,A.h("Porque queres denunciar esta "+B.cYN(this.a)+"?",v,v,v,v,E.aat,v,v,v),v),C.bL6],y.u)
for(x=0;x<6;++x){w=C.buR[x]
u.push(A.jo(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cFW(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bD(!0,new A.S(D.cm,A.A(u,D.F,D.h,D.J),v),v,D.Z,!0)},
$S:43}
B.cFW.prototype={
$0(){return A.am(this.a,!1).ae(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.V5,A.eW)
w(A.bw,[B.cS8,B.cFX])
w(A.bP,[B.cS5,B.cS6,B.cS7,B.cFW])})()
var y={e:A.w("cH"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dp"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.N5=new A.a3(0,0,0,2)
C.atH=new A.a3(20,8,20,4)
C.Pt=new A.b7(G.E4,null,D.fp,null,null,null)
C.aD7=new A.b7(D.ek,null,null,null,null,null)
C.aDm=new A.b7(D.nW,null,D.z,null,null,null)
C.bSD=new A.a_("offensive","Ofensivo ou \xf3dio")
C.bRL=new A.a_("harassment","Ass\xe9dio ou amea\xe7as")
C.bRd=new A.a_("sexual","Conte\xfado sexual")
C.bSv=new A.a_("violence","Viol\xeancia")
C.bSb=new A.a_("spam","Spam ou burla")
C.bRK=new A.a_("other","Outro motivo")
C.buR=x([C.bSD,C.bRL,C.bRd,C.bSv,C.bSb,C.bRK],A.w("r<+(c,c)>"))
C.ata=new A.a3(20,0,20,6)
C.ce8=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k6,null,null,null,null,null,null,null,null)
C.bL6=new A.S(C.ata,C.ce8,null)
C.a6Z=new B.V5(0,"galleryPhoto")
C.H4=new B.V5(1,"galleryComment")
C.H5=new B.V5(2,"groupMessage")
C.rJ=new B.V5(3,"message")
C.c5O=new A.P(!0,D.fp,null,null,null,null,null,D.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c9l=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["NqMvaJcqawpPMOENY9mOTLT87Hw="]=a.current})($__dart_deferred_initializers__);