((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dFO(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cZF(d){var x
A:{if(C.a6G===d){x="fotografia"
break A}if(C.GW===d){x="coment\xe1rio"
break A}if(C.GX===d||C.rn===d){x="mensagem"
break A}x=null}return x},
wA(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wA=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a_(0,$.b7(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bP(null,new B.cT0(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wA)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUs(d,i,j),$async$wA)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akG(d,e,g,u),$async$wA)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wA,w)},
aUs(d,e,f){return B.dHK(d,e,f)},
dHK(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUs=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bP(null,new B.cGj(e),!1,d,!0,!1,null,o),$async$aUs)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aG("report_content",A.R(["p_kind",B.dFO(e),"p_target",f,"p_reason",n],o,q),q),$async$aUs)
case 8:s="Obrigado. A equipa vai rever esta "+B.cZF(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a0(A.bZ(null,null,null,null,null,D.y,null,A.h(s,null,null,null,null,null,null,null),null,D.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUs,w)},
Vf:function Vf(d,e){this.a=d
this.b=e},
cT0:function cT0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSY:function cSY(d){this.a=d},
cSZ:function cSZ(d){this.a=d},
cT_:function cT_(d){this.a=d},
cGj:function cGj(d){this.a=d},
cGi:function cGi(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[157],B)
C=c[237]
E=c[271]
F=c[162]
G=c[410]
B.Vf.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cT0.prototype={
$1(d){var x=this,w=null,v=A.a([A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.Pc,w,w,w,w,new B.cSY(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cZF(x.a),w,w,w,w,C.c5h,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.aDf,w,w,w,w,new B.cSZ(d),!1,w,w,w,w,w,C.c85,w,A.h("Bloquear "+x.d,w,w,w,w,D.iu,w,w),w,w,w))
v.push(A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.aD0,w,w,w,w,new B.cT_(d),!1,w,w,w,w,w,w,w,D.cZ,w,w,w))
return A.bB(!0,new A.S(D.ck,A.x(v,D.u,D.h,D.J),w),w,D.Z,!0)},
$S:31}
B.cSY.prototype={
$0(){return A.an(this.a,!1).aq("report")},
$S:0}
B.cSZ.prototype={
$0(){return A.an(this.a,!1).aq("block")},
$S:0}
B.cT_.prototype={
$0(){return A.an(this.a,!1).bj()},
$S:0}
B.cGj.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atr,A.h("Porque queres denunciar esta "+B.cZF(this.a)+"?",v,v,v,v,E.aaf,v,v),v),C.bLr],y.u)
for(x=0;x<6;++x){w=C.buF[x]
u.push(A.jp(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cGi(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bB(!0,new A.S(D.ck,A.x(u,D.E,D.h,D.J),v),v,D.Z,!0)},
$S:31}
B.cGi.prototype={
$0(){return A.an(this.a,!1).aq(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Vf,A.f7)
w(A.bu,[B.cT0,B.cGj])
w(A.bL,[B.cSY,B.cSZ,B.cT_,B.cGi])})()
var y={e:A.B("cI"),u:A.B("r<e>"),w:A.B("c"),q:A.B("dj"),b:A.B("@"),v:A.B("~")};(function constants(){var x=a.makeConstList
C.MP=new A.a4(0,0,0,2)
C.atr=new A.a4(20,8,20,4)
C.Pc=new A.b8(G.DY,null,D.fR,null,null,null)
C.aD0=new A.b8(D.el,null,null,null,null,null)
C.aDf=new A.b8(D.nL,null,D.z,null,null,null)
C.bSq=new A.X("offensive","Ofensivo ou \xf3dio")
C.bRv=new A.X("harassment","Ass\xe9dio ou amea\xe7as")
C.bQY=new A.X("sexual","Conte\xfado sexual")
C.bSi=new A.X("violence","Viol\xeancia")
C.bRW=new A.X("spam","Spam ou burla")
C.bRu=new A.X("other","Outro motivo")
C.buF=x([C.bSq,C.bRv,C.bQY,C.bSi,C.bRW,C.bRu],A.B("r<+(c,c)>"))
C.asV=new A.a4(20,0,20,6)
C.cdO=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.ka,null,null,null,null,null,null,null)
C.bLr=new A.S(C.asV,C.cdO,null)
C.a6G=new B.Vf(0,"galleryPhoto")
C.GW=new B.Vf(1,"galleryComment")
C.GX=new B.Vf(2,"groupMessage")
C.rn=new B.Vf(3,"message")
C.c5h=new A.P(!0,D.fR,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c85=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["gK4/cij8IkDCko1N9FTsAqzjGBY="]=a.current})($__dart_deferred_initializers__);