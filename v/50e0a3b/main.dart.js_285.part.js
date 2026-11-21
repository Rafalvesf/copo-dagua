((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,E,B={
dmA(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cIX(d){var x
A:{if(C.a5y===d){x="fotografia"
break A}if(C.FV===d){x="coment\xe1rio"
break A}if(C.FW===d||C.r5===d){x="mensagem"
break A}x=null}return x},
vI(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$vI=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a2(0,$.bc(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.D(h).length===0?"esta pessoa":D.f.D(h)
x=3
return A.d(A.c8(null,new B.cCp(i,f,g,u),d,!0,!1,null,y.w),$async$vI)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aQo(d,i,j),$async$vI)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(G.aQb(d,e,g,u),$async$vI)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$vI,w)},
aQo(d,e,f){return B.dom(d,e,f)},
dom(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQo=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.c8(null,new B.crU(e),d,!0,!1,null,o),$async$aQo)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.S().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.b4("report_content",A.Q(["p_kind",B.dmA(e),"p_target",f,"p_reason",n],o,q),q),$async$aQo)
case 8:s="Obrigado. A equipa vai rever esta "+B.cIX(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.S(y.q).f.a7(A.cz(null,null,null,null,null,D.z,null,A.i(s,null,null,null,null,null,null,null),null,D.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aQo,w)},
Tp:function Tp(d,e){this.a=d
this.b=e},
cCp:function cCp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cCm:function cCm(d){this.a=d},
cCn:function cCn(d){this.a=d},
cCo:function cCo(d){this.a=d},
crU:function crU(d){this.a=d},
crT:function crT(d,e){this.a=d
this.b=e}},C,F,G
A=c[0]
D=c[2]
E=c[420]
B=a.updateHolder(c[151],B)
C=c[244]
F=c[418]
G=c[158]
B.Tp.prototype={
H(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cCp.prototype={
$1(d){var x=this,w=null,v=A.a([A.iH(!1,w,w,w,!0,w,w,w,!0,w,C.Of,w,w,w,w,new B.cCm(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.cIX(x.a),w,w,w,C.c0T,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.iH(!1,w,w,w,!0,w,w,w,!0,w,C.aBe,w,w,w,w,new B.cCn(d),!1,w,w,w,w,w,C.c4h,w,A.i("Bloquear "+x.d,w,w,w,D.fm,w,w,w),w,w,w))
v.push(A.iH(!1,w,w,w,!0,w,w,w,!0,w,C.aB_,w,w,w,w,new B.cCo(d),!1,w,w,w,w,w,w,w,D.cU,w,w,w))
return A.bB(!0,new A.U(D.ei,A.I(v,D.x,D.l,D.W,0,D.w),w),w,D.X,!0)},
$S:50}
B.cCm.prototype={
$0(){return A.av(this.a,!1).aG("report")},
$S:0}
B.cCn.prototype={
$0(){return A.av(this.a,!1).aG("block")},
$S:0}
B.cCo.prototype={
$0(){return A.av(this.a,!1).bS()},
$S:0}
B.crU.prototype={
$1(d){var x,w,v=null,u=A.a([new A.U(C.as7,A.i("Porque queres denunciar esta "+B.cIX(this.a)+"?",v,v,v,F.Hm,v,v,v),v),C.bHO],y.u)
for(x=0;x<6;++x){w=C.bs6[x]
u.push(A.iH(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.crT(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bB(!0,new A.U(D.ei,A.I(u,D.I,D.l,D.W,0,D.w),v),v,D.X,!0)},
$S:50}
B.crT.prototype={
$0(){return A.av(this.a,!1).aG(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Tp,A.fw)
w(A.bw,[B.cCp,B.crU])
w(A.bL,[B.cCm,B.cCn,B.cCo,B.crT])})()
var y={e:A.v("cv"),u:A.v("r<e>"),w:A.v("c"),q:A.v("dF"),b:A.v("@"),v:A.v("~")};(function constants(){var x=a.makeConstList
C.LQ=new A.a0(0,0,0,2)
C.as7=new A.a0(20,8,20,4)
C.Of=new A.bi(E.D4,null,D.ew,null,null,null)
C.aB_=new A.bi(D.k5,null,null,null,null,null)
C.aBe=new A.bi(D.ne,null,D.A,null,null,null)
C.bOF=new A.af("offensive","Ofensivo ou \xf3dio")
C.bNT=new A.af("harassment","Ass\xe9dio ou amea\xe7as")
C.bNs=new A.af("sexual","Conte\xfado sexual")
C.bOy=new A.af("violence","Viol\xeancia")
C.bOi=new A.af("spam","Spam ou burla")
C.bNS=new A.af("other","Outro motivo")
C.bs6=x([C.bOF,C.bNT,C.bNs,C.bOy,C.bOi,C.bNS],A.v("r<+(c,c)>"))
C.ary=new A.a0(20,0,20,6)
C.c8F=new A.C("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.o8,null,null,null,null,null,null,null,null)
C.bHO=new A.U(C.ary,C.c8F,null)
C.a5y=new B.Tp(0,"galleryPhoto")
C.FV=new B.Tp(1,"galleryComment")
C.FW=new B.Tp(2,"groupMessage")
C.r5=new B.Tp(3,"message")
C.c0T=new A.F(!0,D.ew,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c4h=new A.C("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["pX/4B8FBD40HPBMfkkyOMJuLjXU="]=a.current})($__dart_deferred_initializers__);