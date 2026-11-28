((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dGp(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
d_e(d){var x
A:{if(C.a6G===d){x="fotografia"
break A}if(C.GW===d){x="coment\xe1rio"
break A}if(C.GX===d||C.ro===d){x="mensagem"
break A}x=null}return x},
wz(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wz=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a_(0,$.b7(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bQ(null,new B.cTB(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wz)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUr(d,i,j),$async$wz)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akE(d,e,g,u),$async$wz)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wz,w)},
aUr(d,e,f){return B.dIk(d,e,f)},
dIk(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUr=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bQ(null,new B.cGZ(e),!1,d,!0,!1,null,o),$async$aUr)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aG("report_content",A.R(["p_kind",B.dGp(e),"p_target",f,"p_reason",n],o,q),q),$async$aUr)
case 8:s="Obrigado. A equipa vai rever esta "+B.d_e(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a0(A.bZ(null,null,null,null,null,D.y,null,A.i(s,null,null,null,null,null,null,null),null,D.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUr,w)},
Vd:function Vd(d,e){this.a=d
this.b=e},
cTB:function cTB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTy:function cTy(d){this.a=d},
cTz:function cTz(d){this.a=d},
cTA:function cTA(d){this.a=d},
cGZ:function cGZ(d){this.a=d},
cGY:function cGY(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[157],B)
C=c[237]
E=c[271]
F=c[162]
G=c[410]
B.Vd.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cTB.prototype={
$1(d){var x=this,w=null,v=A.a([A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.Pc,w,w,w,w,new B.cTy(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.d_e(x.a),w,w,w,w,C.c5i,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.aDf,w,w,w,w,new B.cTz(d),!1,w,w,w,w,w,C.c86,w,A.i("Bloquear "+x.d,w,w,w,w,D.iu,w,w),w,w,w))
v.push(A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.aD0,w,w,w,w,new B.cTA(d),!1,w,w,w,w,w,w,w,D.cZ,w,w,w))
return A.bB(!0,new A.S(D.ck,A.y(v,D.u,D.h,D.J),w),w,D.Z,!0)},
$S:33}
B.cTy.prototype={
$0(){return A.al(this.a,!1).ah("report")},
$S:0}
B.cTz.prototype={
$0(){return A.al(this.a,!1).ah("block")},
$S:0}
B.cTA.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
B.cGZ.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atr,A.i("Porque queres denunciar esta "+B.d_e(this.a)+"?",v,v,v,v,E.aaf,v,v),v),C.bLs],y.u)
for(x=0;x<6;++x){w=C.buF[x]
u.push(A.jo(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cGY(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bB(!0,new A.S(D.ck,A.y(u,D.E,D.h,D.J),v),v,D.Z,!0)},
$S:33}
B.cGY.prototype={
$0(){return A.al(this.a,!1).ah(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Vd,A.f7)
w(A.bu,[B.cTB,B.cGZ])
w(A.bL,[B.cTy,B.cTz,B.cTA,B.cGY])})()
var y={e:A.C("cI"),u:A.C("r<e>"),w:A.C("c"),q:A.C("dl"),b:A.C("@"),v:A.C("~")};(function constants(){var x=a.makeConstList
C.MP=new A.a4(0,0,0,2)
C.atr=new A.a4(20,8,20,4)
C.Pc=new A.b8(G.DY,null,D.fR,null,null,null)
C.aD0=new A.b8(D.ek,null,null,null,null,null)
C.aDf=new A.b8(D.nL,null,D.z,null,null,null)
C.bSr=new A.X("offensive","Ofensivo ou \xf3dio")
C.bRw=new A.X("harassment","Ass\xe9dio ou amea\xe7as")
C.bQZ=new A.X("sexual","Conte\xfado sexual")
C.bSj=new A.X("violence","Viol\xeancia")
C.bRX=new A.X("spam","Spam ou burla")
C.bRv=new A.X("other","Outro motivo")
C.buF=x([C.bSr,C.bRw,C.bQZ,C.bSj,C.bRX,C.bRv],A.C("r<+(c,c)>"))
C.asV=new A.a4(20,0,20,6)
C.cdP=new A.E("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.ka,null,null,null,null,null,null,null)
C.bLs=new A.S(C.asV,C.cdP,null)
C.a6G=new B.Vd(0,"galleryPhoto")
C.GW=new B.Vd(1,"galleryComment")
C.GX=new B.Vd(2,"groupMessage")
C.ro=new B.Vd(3,"message")
C.c5i=new A.P(!0,D.fR,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c86=new A.E("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["2Fo6w5k06l6Ss0CCONlAfEzupV8="]=a.current})($__dart_deferred_initializers__);