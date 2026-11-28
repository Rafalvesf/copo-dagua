((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dFb(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cZf(d){var x
A:{if(C.a6R===d){x="fotografia"
break A}if(C.H4===d){x="coment\xe1rio"
break A}if(C.H5===d||C.rI===d){x="mensagem"
break A}x=null}return x},
wv(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wv=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a1(0,$.b8(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bW(null,new B.cSA(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wv)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUp(d,i,j),$async$wv)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akF(d,e,g,u),$async$wv)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wv,w)},
aUp(d,e,f){return B.dH4(d,e,f)},
dH4(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUp=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bW(null,new B.cGk(e),!1,d,!0,!1,null,o),$async$aUp)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.P().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aK("report_content",A.R(["p_kind",B.dFb(e),"p_target",f,"p_reason",n],o,q),q),$async$aUp)
case 8:s="Obrigado. A equipa vai rever esta "+B.cZf(e)+" em menos de 24 horas."
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
return A.m($async$aUp,w)},
V1:function V1(d,e){this.a=d
this.b=e},
cSA:function cSA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSx:function cSx(d){this.a=d},
cSy:function cSy(d){this.a=d},
cSz:function cSz(d){this.a=d},
cGk:function cGk(d){this.a=d},
cGj:function cGj(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[155],B)
C=c[239]
E=c[274]
F=c[160]
G=c[413]
B.V1.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cSA.prototype={
$1(d){var x=this,w=null,v=A.a([A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.Pl,w,w,w,w,new B.cSx(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cZf(x.a),w,w,w,w,C.c5w,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.aDq,w,w,w,w,new B.cSy(d),!1,w,w,w,w,w,C.c8Z,w,A.h("Bloquear "+x.d,w,w,w,w,D.ir,w,w,w),w,w,w))
v.push(A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.aDb,w,w,w,w,new B.cSz(d),!1,w,w,w,w,w,w,w,D.cS,w,w,w))
return A.bD(!0,new A.T(D.cm,A.A(v,D.v,D.h,D.J),w),w,D.Z,!0)},
$S:43}
B.cSx.prototype={
$0(){return A.am(this.a,!1).ae("report")},
$S:0}
B.cSy.prototype={
$0(){return A.am(this.a,!1).ae("block")},
$S:0}
B.cSz.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
B.cGk.prototype={
$1(d){var x,w,v=null,u=A.a([new A.T(C.atC,A.h("Porque queres denunciar esta "+B.cZf(this.a)+"?",v,v,v,v,E.aam,v,v,v),v),C.bL3],y.u)
for(x=0;x<6;++x){w=C.buM[x]
u.push(A.jp(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cGj(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bD(!0,new A.T(D.cm,A.A(u,D.E,D.h,D.J),v),v,D.Z,!0)},
$S:43}
B.cGj.prototype={
$0(){return A.am(this.a,!1).ae(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.V1,A.eX)
w(A.bw,[B.cSA,B.cGk])
w(A.bO,[B.cSx,B.cSy,B.cSz,B.cGj])})()
var y={e:A.w("cJ"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dr"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.N1=new A.a3(0,0,0,2)
C.atC=new A.a3(20,8,20,4)
C.Pl=new A.b7(G.E2,null,D.fN,null,null,null)
C.aDb=new A.b7(D.el,null,null,null,null,null)
C.aDq=new A.b7(D.nY,null,D.z,null,null,null)
C.bSA=new A.Z("offensive","Ofensivo ou \xf3dio")
C.bRI=new A.Z("harassment","Ass\xe9dio ou amea\xe7as")
C.bRa=new A.Z("sexual","Conte\xfado sexual")
C.bSs=new A.Z("violence","Viol\xeancia")
C.bS8=new A.Z("spam","Spam ou burla")
C.bRH=new A.Z("other","Outro motivo")
C.buM=x([C.bSA,C.bRI,C.bRa,C.bSs,C.bS8,C.bRH],A.w("r<+(c,c)>"))
C.at5=new A.a3(20,0,20,6)
C.cdI=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k6,null,null,null,null,null,null,null,null)
C.bL3=new A.T(C.at5,C.cdI,null)
C.a6R=new B.V1(0,"galleryPhoto")
C.H4=new B.V1(1,"galleryComment")
C.H5=new B.V1(2,"groupMessage")
C.rI=new B.V1(3,"message")
C.c5w=new A.Q(!0,D.fN,null,null,null,null,null,D.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c8Z=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["A/qg/mlAWxOof4RmZoBoTIwKL0k="]=a.current})($__dart_deferred_initializers__);