((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dEI(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cYG(d){var x
A:{if(C.a6C===d){x="fotografia"
break A}if(C.GR===d){x="coment\xe1rio"
break A}if(C.GS===d||C.ro===d){x="mensagem"
break A}x=null}return x},
wr(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wr=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a_(0,$.b6(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bP(null,new B.cS2(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wr)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aTM(d,i,j),$async$wr)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.ake(d,e,g,u),$async$wr)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wr,w)},
aTM(d,e,f){return B.dGC(d,e,f)},
dGC(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aTM=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bP(null,new B.cFA(e),!1,d,!0,!1,null,o),$async$aTM)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aG("report_content",A.R(["p_kind",B.dEI(e),"p_target",f,"p_reason",n],o,q),q),$async$aTM)
case 8:s="Obrigado. A equipa vai rever esta "+B.cYG(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a0(A.bX(null,null,null,null,null,D.y,null,A.h(s,null,null,null,null,null,null,null),null,D.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aTM,w)},
UW:function UW(d,e){this.a=d
this.b=e},
cS2:function cS2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cS_:function cS_(d){this.a=d},
cS0:function cS0(d){this.a=d},
cS1:function cS1(d){this.a=d},
cFA:function cFA(d){this.a=d},
cFz:function cFz(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[157],B)
C=c[237]
E=c[271]
F=c[162]
G=c[410]
B.UW.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cS2.prototype={
$1(d){var x=this,w=null,v=A.a([A.jm(!1,w,w,w,!0,w,w,w,!0,w,C.P4,w,w,w,w,new B.cS_(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cYG(x.a),w,w,w,w,C.c5_,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jm(!1,w,w,w,!0,w,w,w,!0,w,C.aD9,w,w,w,w,new B.cS0(d),!1,w,w,w,w,w,C.c7N,w,A.h("Bloquear "+x.d,w,w,w,w,D.is,w,w),w,w,w))
v.push(A.jm(!1,w,w,w,!0,w,w,w,!0,w,C.aCV,w,w,w,w,new B.cS1(d),!1,w,w,w,w,w,w,w,D.cZ,w,w,w))
return A.bz(!0,new A.S(D.cj,A.z(v,D.v,D.h,D.J),w),w,D.Z,!0)},
$S:33}
B.cS_.prototype={
$0(){return A.am(this.a,!1).af("report")},
$S:0}
B.cS0.prototype={
$0(){return A.am(this.a,!1).af("block")},
$S:0}
B.cS1.prototype={
$0(){return A.am(this.a,!1).bj()},
$S:0}
B.cFA.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atm,A.h("Porque queres denunciar esta "+B.cYG(this.a)+"?",v,v,v,v,E.aa9,v,v),v),C.bLj],y.u)
for(x=0;x<6;++x){w=C.buy[x]
u.push(A.jm(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cFz(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bz(!0,new A.S(D.cj,A.z(u,D.E,D.h,D.J),v),v,D.Z,!0)},
$S:33}
B.cFz.prototype={
$0(){return A.am(this.a,!1).af(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.UW,A.ff)
w(A.br,[B.cS2,B.cFA])
w(A.bK,[B.cS_,B.cS0,B.cS1,B.cFz])})()
var y={e:A.y("cE"),u:A.y("r<e>"),w:A.y("c"),q:A.y("dk"),b:A.y("@"),v:A.y("~")};(function constants(){var x=a.makeConstList
C.ML=new A.a3(0,0,0,2)
C.atm=new A.a3(20,8,20,4)
C.P4=new A.b7(G.DT,null,D.fP,null,null,null)
C.aCV=new A.b7(D.ei,null,null,null,null,null)
C.aD9=new A.b7(D.nL,null,D.z,null,null,null)
C.bSc=new A.X("offensive","Ofensivo ou \xf3dio")
C.bRk=new A.X("harassment","Ass\xe9dio ou amea\xe7as")
C.bQN=new A.X("sexual","Conte\xfado sexual")
C.bS4=new A.X("violence","Viol\xeancia")
C.bRL=new A.X("spam","Spam ou burla")
C.bRj=new A.X("other","Outro motivo")
C.buy=x([C.bSc,C.bRk,C.bQN,C.bS4,C.bRL,C.bRj],A.y("r<+(c,c)>"))
C.asQ=new A.a3(20,0,20,6)
C.cdu=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k7,null,null,null,null,null,null,null)
C.bLj=new A.S(C.asQ,C.cdu,null)
C.a6C=new B.UW(0,"galleryPhoto")
C.GR=new B.UW(1,"galleryComment")
C.GS=new B.UW(2,"groupMessage")
C.ro=new B.UW(3,"message")
C.c5_=new A.P(!0,D.fP,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c7N=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["4DIumso8KMeTuYixlk2ixoMAxaY="]=a.current})($__dart_deferred_initializers__);