((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dEW(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cZ4(d){var x
A:{if(C.a6T===d){x="fotografia"
break A}if(C.H4===d){x="coment\xe1rio"
break A}if(C.H5===d||C.rH===d){x="mensagem"
break A}x=null}return x},
wu(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wu=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a1(0,$.b8(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bW(null,new B.cSp(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wu)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUr(d,i,j),$async$wu)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akJ(d,e,g,u),$async$wu)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wu,w)},
aUr(d,e,f){return B.dGO(d,e,f)},
dGO(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUr=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bW(null,new B.cGb(e),!1,d,!0,!1,null,o),$async$aUr)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aK("report_content",A.R(["p_kind",B.dEW(e),"p_target",f,"p_reason",n],o,q),q),$async$aUr)
case 8:s="Obrigado. A equipa vai rever esta "+B.cZ4(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a2(A.c0(null,null,null,null,null,D.y,null,A.h(s,null,null,null,null,null,null,null,null),null,D.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUr,w)},
V3:function V3(d,e){this.a=d
this.b=e},
cSp:function cSp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSm:function cSm(d){this.a=d},
cSn:function cSn(d){this.a=d},
cSo:function cSo(d){this.a=d},
cGb:function cGb(d){this.a=d},
cGa:function cGa(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[155],B)
C=c[240]
E=c[275]
F=c[160]
G=c[414]
B.V3.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cSp.prototype={
$1(d){var x=this,w=null,v=A.a([A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.Po,w,w,w,w,new B.cSm(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cZ4(x.a),w,w,w,w,C.c5u,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.aDl,w,w,w,w,new B.cSn(d),!1,w,w,w,w,w,C.c8Z,w,A.h("Bloquear "+x.d,w,w,w,w,D.ir,w,w,w),w,w,w))
v.push(A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.aD6,w,w,w,w,new B.cSo(d),!1,w,w,w,w,w,w,w,D.cT,w,w,w))
return A.bD(!0,new A.S(D.cm,A.A(v,D.v,D.h,D.J),w),w,D.a_,!0)},
$S:44}
B.cSm.prototype={
$0(){return A.am(this.a,!1).ae("report")},
$S:0}
B.cSn.prototype={
$0(){return A.am(this.a,!1).ae("block")},
$S:0}
B.cSo.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
B.cGb.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atC,A.h("Porque queres denunciar esta "+B.cZ4(this.a)+"?",v,v,v,v,E.aam,v,v,v),v),C.bKZ],y.u)
for(x=0;x<6;++x){w=C.buL[x]
u.push(A.jo(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cGa(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bD(!0,new A.S(D.cm,A.A(u,D.E,D.h,D.J),v),v,D.a_,!0)},
$S:44}
B.cGa.prototype={
$0(){return A.am(this.a,!1).ae(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.V3,A.eX)
w(A.bw,[B.cSp,B.cGb])
w(A.bP,[B.cSm,B.cSn,B.cSo,B.cGa])})()
var y={e:A.w("cI"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dr"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.N3=new A.a3(0,0,0,2)
C.atC=new A.a3(20,8,20,4)
C.Po=new A.b7(G.E2,null,D.fN,null,null,null)
C.aD6=new A.b7(D.el,null,null,null,null,null)
C.aDl=new A.b7(D.nX,null,D.z,null,null,null)
C.bSv=new A.a0("offensive","Ofensivo ou \xf3dio")
C.bRD=new A.a0("harassment","Ass\xe9dio ou amea\xe7as")
C.bR5=new A.a0("sexual","Conte\xfado sexual")
C.bSn=new A.a0("violence","Viol\xeancia")
C.bS3=new A.a0("spam","Spam ou burla")
C.bRC=new A.a0("other","Outro motivo")
C.buL=x([C.bSv,C.bRD,C.bR5,C.bSn,C.bS3,C.bRC],A.w("r<+(c,c)>"))
C.at5=new A.a3(20,0,20,6)
C.cdN=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k7,null,null,null,null,null,null,null,null)
C.bKZ=new A.S(C.at5,C.cdN,null)
C.a6T=new B.V3(0,"galleryPhoto")
C.H4=new B.V3(1,"galleryComment")
C.H5=new B.V3(2,"groupMessage")
C.rH=new B.V3(3,"message")
C.c5u=new A.P(!0,D.fN,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c8Z=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["4zqA6AzII+OL2mgTFTlHkYzOBVA="]=a.current})($__dart_deferred_initializers__);