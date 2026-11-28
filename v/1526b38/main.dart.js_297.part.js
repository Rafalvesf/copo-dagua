((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dG8(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
d_1(d){var x
A:{if(C.a6F===d){x="fotografia"
break A}if(C.GU===d){x="coment\xe1rio"
break A}if(C.GV===d||C.rq===d){x="mensagem"
break A}x=null}return x},
wx(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wx=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a_(0,$.b7(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bQ(null,new B.cTo(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wx)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUs(d,i,j),$async$wx)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akE(d,e,g,u),$async$wx)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wx,w)},
aUs(d,e,f){return B.dI3(d,e,f)},
dI3(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUs=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bQ(null,new B.cGP(e),!1,d,!0,!1,null,o),$async$aUs)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.P().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aG("report_content",A.R(["p_kind",B.dG8(e),"p_target",f,"p_reason",n],o,q),q),$async$aUs)
case 8:s="Obrigado. A equipa vai rever esta "+B.d_1(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a0(A.bY(null,null,null,null,null,D.y,null,A.i(s,null,null,null,null,null,null,null),null,D.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUs,w)},
Vc:function Vc(d,e){this.a=d
this.b=e},
cTo:function cTo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTl:function cTl(d){this.a=d},
cTm:function cTm(d){this.a=d},
cTn:function cTn(d){this.a=d},
cGP:function cGP(d){this.a=d},
cGO:function cGO(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[157],B)
C=c[237]
E=c[271]
F=c[162]
G=c[410]
B.Vc.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cTo.prototype={
$1(d){var x=this,w=null,v=A.a([A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.P8,w,w,w,w,new B.cTl(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.d_1(x.a),w,w,w,w,C.c5c,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.aDb,w,w,w,w,new B.cTm(d),!1,w,w,w,w,w,C.c8_,w,A.i("Bloquear "+x.d,w,w,w,w,D.iv,w,w),w,w,w))
v.push(A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.aCX,w,w,w,w,new B.cTn(d),!1,w,w,w,w,w,w,w,D.cZ,w,w,w))
return A.bB(!0,new A.S(D.ck,A.y(v,D.v,D.h,D.J),w),w,D.Z,!0)},
$S:33}
B.cTl.prototype={
$0(){return A.al(this.a,!1).ah("report")},
$S:0}
B.cTm.prototype={
$0(){return A.al(this.a,!1).ah("block")},
$S:0}
B.cTn.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
B.cGP.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atm,A.i("Porque queres denunciar esta "+B.d_1(this.a)+"?",v,v,v,v,E.aad,v,v),v),C.bLn],y.u)
for(x=0;x<6;++x){w=C.buA[x]
u.push(A.jo(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cGO(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bB(!0,new A.S(D.ck,A.y(u,D.E,D.h,D.J),v),v,D.Z,!0)},
$S:33}
B.cGO.prototype={
$0(){return A.al(this.a,!1).ah(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Vc,A.fg)
w(A.bu,[B.cTo,B.cGP])
w(A.bL,[B.cTl,B.cTm,B.cTn,B.cGO])})()
var y={e:A.z("cH"),u:A.z("r<e>"),w:A.z("c"),q:A.z("dl"),b:A.z("@"),v:A.z("~")};(function constants(){var x=a.makeConstList
C.MP=new A.a4(0,0,0,2)
C.atm=new A.a4(20,8,20,4)
C.P8=new A.b8(G.DW,null,D.fR,null,null,null)
C.aCX=new A.b8(D.el,null,null,null,null,null)
C.aDb=new A.b8(D.nM,null,D.z,null,null,null)
C.bSn=new A.X("offensive","Ofensivo ou \xf3dio")
C.bRs=new A.X("harassment","Ass\xe9dio ou amea\xe7as")
C.bQV=new A.X("sexual","Conte\xfado sexual")
C.bSf=new A.X("violence","Viol\xeancia")
C.bRT=new A.X("spam","Spam ou burla")
C.bRr=new A.X("other","Outro motivo")
C.buA=x([C.bSn,C.bRs,C.bQV,C.bSf,C.bRT,C.bRr],A.z("r<+(c,c)>"))
C.asQ=new A.a4(20,0,20,6)
C.cdI=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.kb,null,null,null,null,null,null,null)
C.bLn=new A.S(C.asQ,C.cdI,null)
C.a6F=new B.Vc(0,"galleryPhoto")
C.GU=new B.Vc(1,"galleryComment")
C.GV=new B.Vc(2,"groupMessage")
C.rq=new B.Vc(3,"message")
C.c5c=new A.Q(!0,D.fR,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c8_=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["NZUPKsMst93VVpw5cMAn/GTH/64="]=a.current})($__dart_deferred_initializers__);