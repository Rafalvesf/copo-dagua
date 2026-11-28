((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dA2(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cUE(d){var x
A:{if(C.a72===d){x="fotografia"
break A}if(C.GV===d){x="coment\xe1rio"
break A}if(C.GW===d||C.rB===d){x="mensagem"
break A}x=null}return x},
wq(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wq=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a1(0,$.b8(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.D(h).length===0?"esta pessoa":D.f.D(h)
x=3
return A.d(A.cn(null,new B.cO3(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wq)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aTH(d,i,j),$async$wq)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.ak9(d,e,g,u),$async$wq)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wq,w)},
aTH(d,e,f){return B.dBV(d,e,f)},
dBV(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aTH=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.cn(null,new B.cCf(e),!1,d,!0,!1,null,o),$async$aTH)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.T().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aT("report_content",A.S(["p_kind",B.dA2(e),"p_target",f,"p_reason",n],o,q),q),$async$aTH)
case 8:s="Obrigado. A equipa vai rever esta "+B.cUE(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a4(A.cA(null,null,null,null,null,D.z,null,A.i(s,null,null,null,null,null,null,null,null),null,D.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aTH,w)},
UM:function UM(d,e){this.a=d
this.b=e},
cO3:function cO3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cO0:function cO0(d){this.a=d},
cO1:function cO1(d){this.a=d},
cO2:function cO2(d){this.a=d},
cCf:function cCf(d){this.a=d},
cCe:function cCe(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[152],B)
C=c[229]
E=c[263]
F=c[159]
G=c[403]
B.UM.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cO3.prototype={
$1(d){var x=this,w=null,v=A.a([A.j0(!1,w,w,w,!0,w,w,w,!0,w,C.Ps,w,w,w,w,new B.cO0(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.cUE(x.a),w,w,w,w,C.c5y,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.j0(!1,w,w,w,!0,w,w,w,!0,w,C.aDA,w,w,w,w,new B.cO1(d),!1,w,w,w,w,w,C.c8Y,w,A.i("Bloquear "+x.d,w,w,w,w,D.h8,w,w,w),w,w,w))
v.push(A.j0(!1,w,w,w,!0,w,w,w,!0,w,C.aDm,w,w,w,w,new B.cO2(d),!1,w,w,w,w,w,w,w,D.cL,w,w,w))
return A.bE(!0,new A.R(D.cr,A.B(v,D.w,D.j,D.L,0,D.v),w),w,D.a_,!0)},
$S:47}
B.cO0.prototype={
$0(){return A.aq(this.a,!1).aj("report")},
$S:0}
B.cO1.prototype={
$0(){return A.aq(this.a,!1).aj("block")},
$S:0}
B.cO2.prototype={
$0(){return A.aq(this.a,!1).bJ()},
$S:0}
B.cCf.prototype={
$1(d){var x,w,v=null,u=A.a([new A.R(C.atV,A.i("Porque queres denunciar esta "+B.cUE(this.a)+"?",v,v,v,v,E.Iv,v,v,v),v),C.bLd],y.u)
for(x=0;x<6;++x){w=C.buV[x]
u.push(A.j0(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cCe(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bE(!0,new A.R(D.cr,A.B(u,D.J,D.j,D.L,0,D.v),v),v,D.a_,!0)},
$S:47}
B.cCe.prototype={
$0(){return A.aq(this.a,!1).aj(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.UM,A.fr)
w(A.bx,[B.cO3,B.cCf])
w(A.bR,[B.cO0,B.cO1,B.cO2,B.cCe])})()
var y={e:A.w("cG"),u:A.w("r<e>"),w:A.w("c"),q:A.w("ds"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.N4=new A.a2(0,0,0,2)
C.atV=new A.a2(20,8,20,4)
C.Ps=new A.ba(G.E1,null,D.dL,null,null,null)
C.aDm=new A.ba(D.eO,null,null,null,null,null)
C.aDA=new A.ba(D.nM,null,D.A,null,null,null)
C.bSG=new A.a3("offensive","Ofensivo ou \xf3dio")
C.bRO=new A.a3("harassment","Ass\xe9dio ou amea\xe7as")
C.bRe=new A.a3("sexual","Conte\xfado sexual")
C.bSy=new A.a3("violence","Viol\xeancia")
C.bSf=new A.a3("spam","Spam ou burla")
C.bRN=new A.a3("other","Outro motivo")
C.buV=x([C.bSG,C.bRO,C.bRe,C.bSy,C.bSf,C.bRN],A.w("r<+(c,c)>"))
C.ato=new A.a2(20,0,20,6)
C.cdv=new A.E("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k1,null,null,null,null,null,null,null,null)
C.bLd=new A.R(C.ato,C.cdv,null)
C.a72=new B.UM(0,"galleryPhoto")
C.GV=new B.UM(1,"galleryComment")
C.GW=new B.UM(2,"groupMessage")
C.rB=new B.UM(3,"message")
C.c5y=new A.M(!0,D.dL,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c8Y=new A.E("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["FPvI9VrNEM1a8r2CTsffK8QXNzk="]=a.current})($__dart_deferred_initializers__);