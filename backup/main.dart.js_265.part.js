((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,E,B={
dpQ(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cLe(d){var x
A:{if(C.a5J===d){x="fotografia"
break A}if(C.G2===d){x="coment\xe1rio"
break A}if(C.G3===d||C.r8===d){x="mensagem"
break A}x=null}return x},
vN(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$vN=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a2(0,$.bb(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.D(h).length===0?"esta pessoa":D.f.D(h)
x=3
return A.d(A.cB(null,new B.cEG(i,f,g,u),!0,d,!0,!1,null,y.w),$async$vN)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aQJ(d,i,j),$async$vN)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(G.aQv(d,e,g,u),$async$vN)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$vN,w)},
aQJ(d,e,f){return B.drB(d,e,f)},
drB(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQJ=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.cB(null,new B.ctV(e),!0,d,!0,!1,null,o),$async$aQJ)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.R().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.b1("report_content",A.Q(["p_kind",B.dpQ(e),"p_target",f,"p_reason",n],o,q),q),$async$aQJ)
case 8:s="Obrigado. A equipa vai rever esta "+B.cLe(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.R(y.q).f.a5(A.cA(null,null,null,null,null,D.A,null,A.i(s,null,null,null,null,null,null,null,null),null,D.X,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aQJ,w)},
Tz:function Tz(d,e){this.a=d
this.b=e},
cEG:function cEG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cED:function cED(d){this.a=d},
cEE:function cEE(d){this.a=d},
cEF:function cEF(d){this.a=d},
ctV:function ctV(d){this.a=d},
ctU:function ctU(d,e){this.a=d
this.b=e}},C,F,G
A=c[0]
D=c[2]
E=c[394]
B=a.updateHolder(c[145],B)
C=c[229]
F=c[392]
G=c[152]
B.Tz.prototype={
H(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cEG.prototype={
$1(d){var x=this,w=null,v=A.a([A.iU(!1,w,w,w,!0,w,w,w,!0,w,C.Ol,w,w,w,w,new B.cED(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.cLe(x.a),w,w,w,w,C.c1Z,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.iU(!1,w,w,w,!0,w,w,w,!0,w,C.aBL,w,w,w,w,new B.cEE(d),!1,w,w,w,w,w,C.c5o,w,A.i("Bloquear "+x.d,w,w,w,w,D.f2,w,w,w),w,w,w))
v.push(A.iU(!1,w,w,w,!0,w,w,w,!0,w,C.aBu,w,w,w,w,new B.cEF(d),!1,w,w,w,w,w,w,w,D.cU,w,w,w))
return A.bE(!0,new A.T(D.e1,A.E(v,D.x,D.k,D.U,0,D.w),w),w,D.Z,!0)},
$S:50}
B.cED.prototype={
$0(){return A.at(this.a,!1).ar("report")},
$S:0}
B.cEE.prototype={
$0(){return A.at(this.a,!1).ar("block")},
$S:0}
B.cEF.prototype={
$0(){return A.at(this.a,!1).bQ()},
$S:0}
B.ctV.prototype={
$1(d){var x,w,v=null,u=A.a([new A.T(C.asB,A.i("Porque queres denunciar esta "+B.cLe(this.a)+"?",v,v,v,v,F.Hx,v,v,v),v),C.bIt],y.u)
for(x=0;x<6;++x){w=C.bsM[x]
u.push(A.iU(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.ctU(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bE(!0,new A.T(D.e1,A.E(u,D.J,D.k,D.U,0,D.w),v),v,D.Z,!0)},
$S:50}
B.ctU.prototype={
$0(){return A.at(this.a,!1).ar(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Tz,A.fx)
w(A.bx,[B.cEG,B.ctV])
w(A.bS,[B.cED,B.cEE,B.cEF,B.ctU])})()
var y={e:A.w("cw"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dJ"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.M5=new A.a0(0,0,0,2)
C.asB=new A.a0(20,8,20,4)
C.Ol=new A.b6(E.Dc,null,D.ez,null,null,null)
C.aBu=new A.b6(D.hJ,null,null,null,null,null)
C.aBL=new A.b6(D.ni,null,D.z,null,null,null)
C.bPw=new A.a6("offensive","Ofensivo ou \xf3dio")
C.bOG=new A.a6("harassment","Ass\xe9dio ou amea\xe7as")
C.bOc=new A.a6("sexual","Conte\xfado sexual")
C.bPo=new A.a6("violence","Viol\xeancia")
C.bP7=new A.a6("spam","Spam ou burla")
C.bOF=new A.a6("other","Outro motivo")
C.bsM=x([C.bPw,C.bOG,C.bOc,C.bPo,C.bP7,C.bOF],A.w("r<+(c,c)>"))
C.as_=new A.a0(20,0,20,6)
C.c9V=new A.A("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.oh,null,null,null,null,null,null,null,null)
C.bIt=new A.T(C.as_,C.c9V,null)
C.a5J=new B.Tz(0,"galleryPhoto")
C.G2=new B.Tz(1,"galleryComment")
C.G3=new B.Tz(2,"groupMessage")
C.r8=new B.Tz(3,"message")
C.c1Z=new A.H(!0,D.ez,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c5o=new A.A("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["VYfQixpEPKhDY8Vf+YHMGKs6nLM="]=a.current})($__dart_deferred_initializers__);