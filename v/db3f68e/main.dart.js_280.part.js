((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dAc(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cUG(d){var x
A:{if(C.a72===d){x="fotografia"
break A}if(C.GU===d){x="coment\xe1rio"
break A}if(C.GV===d||C.rB===d){x="mensagem"
break A}x=null}return x},
wq(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wq=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a1(0,$.b8(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.D(h).length===0?"esta pessoa":D.f.D(h)
x=3
return A.d(A.cn(null,new B.cO5(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wq)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aTH(d,i,j),$async$wq)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akb(d,e,g,u),$async$wq)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wq,w)},
aTH(d,e,f){return B.dC4(d,e,f)},
dC4(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aTH=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.cn(null,new B.cCh(e),!1,d,!0,!1,null,o),$async$aTH)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.T().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aT("report_content",A.S(["p_kind",B.dAc(e),"p_target",f,"p_reason",n],o,q),q),$async$aTH)
case 8:s="Obrigado. A equipa vai rever esta "+B.cUG(e)+" em menos de 24 horas."
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
UN:function UN(d,e){this.a=d
this.b=e},
cO5:function cO5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cO2:function cO2(d){this.a=d},
cO3:function cO3(d){this.a=d},
cO4:function cO4(d){this.a=d},
cCh:function cCh(d){this.a=d},
cCg:function cCg(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[152],B)
C=c[229]
E=c[263]
F=c[159]
G=c[403]
B.UN.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cO5.prototype={
$1(d){var x=this,w=null,v=A.a([A.j0(!1,w,w,w,!0,w,w,w,!0,w,C.Ps,w,w,w,w,new B.cO2(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.cUG(x.a),w,w,w,w,C.c5r,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.j0(!1,w,w,w,!0,w,w,w,!0,w,C.aDz,w,w,w,w,new B.cO3(d),!1,w,w,w,w,w,C.c8U,w,A.i("Bloquear "+x.d,w,w,w,w,D.h7,w,w,w),w,w,w))
v.push(A.j0(!1,w,w,w,!0,w,w,w,!0,w,C.aDl,w,w,w,w,new B.cO4(d),!1,w,w,w,w,w,w,w,D.cL,w,w,w))
return A.bC(!0,new A.Q(D.cr,A.B(v,D.w,D.j,D.K,0,D.v),w),w,D.a_,!0)},
$S:44}
B.cO2.prototype={
$0(){return A.aq(this.a,!1).aj("report")},
$S:0}
B.cO3.prototype={
$0(){return A.aq(this.a,!1).aj("block")},
$S:0}
B.cO4.prototype={
$0(){return A.aq(this.a,!1).bJ()},
$S:0}
B.cCh.prototype={
$1(d){var x,w,v=null,u=A.a([new A.Q(C.atU,A.i("Porque queres denunciar esta "+B.cUG(this.a)+"?",v,v,v,v,E.Iv,v,v,v),v),C.bLa],y.u)
for(x=0;x<6;++x){w=C.buU[x]
u.push(A.j0(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cCg(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bC(!0,new A.Q(D.cr,A.B(u,D.I,D.j,D.K,0,D.v),v),v,D.a_,!0)},
$S:44}
B.cCg.prototype={
$0(){return A.aq(this.a,!1).aj(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.UN,A.fr)
w(A.bx,[B.cO5,B.cCh])
w(A.bR,[B.cO2,B.cO3,B.cO4,B.cCg])})()
var y={e:A.w("cG"),u:A.w("r<e>"),w:A.w("c"),q:A.w("ds"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.N3=new A.a2(0,0,0,2)
C.atU=new A.a2(20,8,20,4)
C.Ps=new A.ba(G.E0,null,D.dK,null,null,null)
C.aDl=new A.ba(D.eP,null,null,null,null,null)
C.aDz=new A.ba(D.nN,null,D.A,null,null,null)
C.bSG=new A.a3("offensive","Ofensivo ou \xf3dio")
C.bRO=new A.a3("harassment","Ass\xe9dio ou amea\xe7as")
C.bRe=new A.a3("sexual","Conte\xfado sexual")
C.bSy=new A.a3("violence","Viol\xeancia")
C.bSf=new A.a3("spam","Spam ou burla")
C.bRN=new A.a3("other","Outro motivo")
C.buU=x([C.bSG,C.bRO,C.bRe,C.bSy,C.bSf,C.bRN],A.w("r<+(c,c)>"))
C.atn=new A.a2(20,0,20,6)
C.cdu=new A.E("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k0,null,null,null,null,null,null,null,null)
C.bLa=new A.Q(C.atn,C.cdu,null)
C.a72=new B.UN(0,"galleryPhoto")
C.GU=new B.UN(1,"galleryComment")
C.GV=new B.UN(2,"groupMessage")
C.rB=new B.UN(3,"message")
C.c5r=new A.M(!0,D.dK,null,null,null,null,null,D.J,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c8U=new A.E("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["tjCkkhlgejTfMvbN8R5j3/3IPi8="]=a.current})($__dart_deferred_initializers__);