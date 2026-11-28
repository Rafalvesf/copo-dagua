((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dFX(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cZR(d){var x
A:{if(C.a6E===d){x="fotografia"
break A}if(C.GT===d){x="coment\xe1rio"
break A}if(C.GU===d||C.rq===d){x="mensagem"
break A}x=null}return x},
wx(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wx=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a_(0,$.b7(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bQ(null,new B.cTc(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wx)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUl(d,i,j),$async$wx)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.aky(d,e,g,u),$async$wx)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wx,w)},
aUl(d,e,f){return B.dHS(d,e,f)},
dHS(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUl=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bQ(null,new B.cGE(e),!1,d,!0,!1,null,o),$async$aUl)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aH("report_content",A.R(["p_kind",B.dFX(e),"p_target",f,"p_reason",n],o,q),q),$async$aUl)
case 8:s="Obrigado. A equipa vai rever esta "+B.cZR(e)+" em menos de 24 horas."
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
return A.m($async$aUl,w)},
V7:function V7(d,e){this.a=d
this.b=e},
cTc:function cTc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cT9:function cT9(d){this.a=d},
cTa:function cTa(d){this.a=d},
cTb:function cTb(d){this.a=d},
cGE:function cGE(d){this.a=d},
cGD:function cGD(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[157],B)
C=c[237]
E=c[271]
F=c[162]
G=c[410]
B.V7.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cTc.prototype={
$1(d){var x=this,w=null,v=A.a([A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.P7,w,w,w,w,new B.cT9(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cZR(x.a),w,w,w,w,C.c59,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.aD9,w,w,w,w,new B.cTa(d),!1,w,w,w,w,w,C.c7X,w,A.h("Bloquear "+x.d,w,w,w,w,D.iv,w,w),w,w,w))
v.push(A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.aCV,w,w,w,w,new B.cTb(d),!1,w,w,w,w,w,w,w,D.cZ,w,w,w))
return A.bB(!0,new A.S(D.ck,A.y(v,D.v,D.h,D.J),w),w,D.Z,!0)},
$S:31}
B.cT9.prototype={
$0(){return A.al(this.a,!1).ah("report")},
$S:0}
B.cTa.prototype={
$0(){return A.al(this.a,!1).ah("block")},
$S:0}
B.cTb.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
B.cGE.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atl,A.h("Porque queres denunciar esta "+B.cZR(this.a)+"?",v,v,v,v,E.aac,v,v),v),C.bLk],y.u)
for(x=0;x<6;++x){w=C.buy[x]
u.push(A.jo(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cGD(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bB(!0,new A.S(D.ck,A.y(u,D.E,D.h,D.J),v),v,D.Z,!0)},
$S:31}
B.cGD.prototype={
$0(){return A.al(this.a,!1).ah(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.V7,A.fg)
w(A.bu,[B.cTc,B.cGE])
w(A.bL,[B.cT9,B.cTa,B.cTb,B.cGD])})()
var y={e:A.z("cH"),u:A.z("r<e>"),w:A.z("c"),q:A.z("dl"),b:A.z("@"),v:A.z("~")};(function constants(){var x=a.makeConstList
C.MO=new A.a4(0,0,0,2)
C.atl=new A.a4(20,8,20,4)
C.P7=new A.b8(G.DW,null,D.fR,null,null,null)
C.aCV=new A.b8(D.el,null,null,null,null,null)
C.aD9=new A.b8(D.nM,null,D.z,null,null,null)
C.bSk=new A.X("offensive","Ofensivo ou \xf3dio")
C.bRp=new A.X("harassment","Ass\xe9dio ou amea\xe7as")
C.bQS=new A.X("sexual","Conte\xfado sexual")
C.bSc=new A.X("violence","Viol\xeancia")
C.bRQ=new A.X("spam","Spam ou burla")
C.bRo=new A.X("other","Outro motivo")
C.buy=x([C.bSk,C.bRp,C.bQS,C.bSc,C.bRQ,C.bRo],A.z("r<+(c,c)>"))
C.asP=new A.a4(20,0,20,6)
C.cdE=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.ka,null,null,null,null,null,null,null)
C.bLk=new A.S(C.asP,C.cdE,null)
C.a6E=new B.V7(0,"galleryPhoto")
C.GT=new B.V7(1,"galleryComment")
C.GU=new B.V7(2,"groupMessage")
C.rq=new B.V7(3,"message")
C.c59=new A.P(!0,D.fR,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c7X=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["DBKpkyyqzFN7TzCYXHz0Ah6Uqqo="]=a.current})($__dart_deferred_initializers__);