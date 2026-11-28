((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dEQ(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cYZ(d){var x
A:{if(C.a6U===d){x="fotografia"
break A}if(C.H4===d){x="coment\xe1rio"
break A}if(C.H5===d||C.rH===d){x="mensagem"
break A}x=null}return x},
wt(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wt=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a0(0,$.b8(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bW(null,new B.cSj(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wt)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUq(d,i,j),$async$wt)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akJ(d,e,g,u),$async$wt)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wt,w)},
aUq(d,e,f){return B.dGI(d,e,f)},
dGI(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUq=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bW(null,new B.cG5(e),!1,d,!0,!1,null,o),$async$aUq)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aK("report_content",A.R(["p_kind",B.dEQ(e),"p_target",f,"p_reason",n],o,q),q),$async$aUq)
case 8:s="Obrigado. A equipa vai rever esta "+B.cYZ(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a1(A.c0(null,null,null,null,null,D.y,null,A.h(s,null,null,null,null,null,null,null,null),null,D.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUq,w)},
V3:function V3(d,e){this.a=d
this.b=e},
cSj:function cSj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSg:function cSg(d){this.a=d},
cSh:function cSh(d){this.a=d},
cSi:function cSi(d){this.a=d},
cG5:function cG5(d){this.a=d},
cG4:function cG4(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[155],B)
C=c[240]
E=c[274]
F=c[160]
G=c[413]
B.V3.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cSj.prototype={
$1(d){var x=this,w=null,v=A.a([A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.Pp,w,w,w,w,new B.cSg(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cYZ(x.a),w,w,w,w,C.c5x,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.aDi,w,w,w,w,new B.cSh(d),!1,w,w,w,w,w,C.c93,w,A.h("Bloquear "+x.d,w,w,w,w,D.ip,w,w,w),w,w,w))
v.push(A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.aD3,w,w,w,w,new B.cSi(d),!1,w,w,w,w,w,w,w,D.cT,w,w,w))
return A.bD(!0,new A.S(D.cm,A.A(v,D.v,D.h,D.J),w),w,D.a_,!0)},
$S:41}
B.cSg.prototype={
$0(){return A.am(this.a,!1).ae("report")},
$S:0}
B.cSh.prototype={
$0(){return A.am(this.a,!1).ae("block")},
$S:0}
B.cSi.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
B.cG5.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atC,A.h("Porque queres denunciar esta "+B.cYZ(this.a)+"?",v,v,v,v,E.aan,v,v,v),v),C.bL0],y.u)
for(x=0;x<6;++x){w=C.buM[x]
u.push(A.jo(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cG4(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bD(!0,new A.S(D.cm,A.A(u,D.E,D.h,D.J),v),v,D.a_,!0)},
$S:41}
B.cG4.prototype={
$0(){return A.am(this.a,!1).ae(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.V3,A.eX)
w(A.bw,[B.cSj,B.cG5])
w(A.bO,[B.cSg,B.cSh,B.cSi,B.cG4])})()
var y={e:A.w("cI"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dq"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.N4=new A.a3(0,0,0,2)
C.atC=new A.a3(20,8,20,4)
C.Pp=new A.b7(G.E2,null,D.fN,null,null,null)
C.aD3=new A.b7(D.ek,null,null,null,null,null)
C.aDi=new A.b7(D.nW,null,D.z,null,null,null)
C.bSy=new A.a0("offensive","Ofensivo ou \xf3dio")
C.bRG=new A.a0("harassment","Ass\xe9dio ou amea\xe7as")
C.bR8=new A.a0("sexual","Conte\xfado sexual")
C.bSq=new A.a0("violence","Viol\xeancia")
C.bS6=new A.a0("spam","Spam ou burla")
C.bRF=new A.a0("other","Outro motivo")
C.buM=x([C.bSy,C.bRG,C.bR8,C.bSq,C.bS6,C.bRF],A.w("r<+(c,c)>"))
C.at5=new A.a3(20,0,20,6)
C.cdQ=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k6,null,null,null,null,null,null,null,null)
C.bL0=new A.S(C.at5,C.cdQ,null)
C.a6U=new B.V3(0,"galleryPhoto")
C.H4=new B.V3(1,"galleryComment")
C.H5=new B.V3(2,"groupMessage")
C.rH=new B.V3(3,"message")
C.c5x=new A.P(!0,D.fN,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c93=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["32zPi3hNhAoHa4Him2RoH25jFRc="]=a.current})($__dart_deferred_initializers__);