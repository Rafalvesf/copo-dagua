((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dE5(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cY7(d){var x
A:{if(C.a6B===d){x="fotografia"
break A}if(C.GP===d){x="coment\xe1rio"
break A}if(C.GQ===d||C.rn===d){x="mensagem"
break A}x=null}return x},
wq(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wq=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a_(0,$.b6(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bS(null,new B.cRw(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wq)
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
aTH(d,e,f){return B.dFZ(d,e,f)},
dFZ(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aTH=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bS(null,new B.cF8(e),!1,d,!0,!1,null,o),$async$aTH)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.P().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aG("report_content",A.R(["p_kind",B.dE5(e),"p_target",f,"p_reason",n],o,q),q),$async$aTH)
case 8:s="Obrigado. A equipa vai rever esta "+B.cY7(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a1(A.bZ(null,null,null,null,null,D.y,null,A.h(s,null,null,null,null,null,null,null),null,D.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aTH,w)},
UU:function UU(d,e){this.a=d
this.b=e},
cRw:function cRw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cRt:function cRt(d){this.a=d},
cRu:function cRu(d){this.a=d},
cRv:function cRv(d){this.a=d},
cF8:function cF8(d){this.a=d},
cF7:function cF7(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[156],B)
C=c[234]
E=c[268]
F=c[161]
G=c[407]
B.UU.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cRw.prototype={
$1(d){var x=this,w=null,v=A.a([A.jm(!1,w,w,w,!0,w,w,w,!0,w,C.P3,w,w,w,w,new B.cRt(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cY7(x.a),w,w,w,w,C.c4V,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jm(!1,w,w,w,!0,w,w,w,!0,w,C.aD5,w,w,w,w,new B.cRu(d),!1,w,w,w,w,w,C.c7H,w,A.h("Bloquear "+x.d,w,w,w,w,D.is,w,w),w,w,w))
v.push(A.jm(!1,w,w,w,!0,w,w,w,!0,w,C.aCR,w,w,w,w,new B.cRv(d),!1,w,w,w,w,w,w,w,D.cP,w,w,w))
return A.bA(!0,new A.S(D.cj,A.y(v,D.v,D.h,D.J),w),w,D.Z,!0)},
$S:36}
B.cRt.prototype={
$0(){return A.am(this.a,!1).ae("report")},
$S:0}
B.cRu.prototype={
$0(){return A.am(this.a,!1).ae("block")},
$S:0}
B.cRv.prototype={
$0(){return A.am(this.a,!1).bl()},
$S:0}
B.cF8.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.ati,A.h("Porque queres denunciar esta "+B.cY7(this.a)+"?",v,v,v,v,E.aa6,v,v),v),C.bLf],y.u)
for(x=0;x<6;++x){w=C.buu[x]
u.push(A.jm(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cF7(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bA(!0,new A.S(D.cj,A.y(u,D.E,D.h,D.J),v),v,D.Z,!0)},
$S:36}
B.cF7.prototype={
$0(){return A.am(this.a,!1).ae(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.UU,A.ff)
w(A.bv,[B.cRw,B.cF8])
w(A.bN,[B.cRt,B.cRu,B.cRv,B.cF7])})()
var y={e:A.z("cF"),u:A.z("r<e>"),w:A.z("c"),q:A.z("dp"),b:A.z("@"),v:A.z("~")};(function constants(){var x=a.makeConstList
C.MK=new A.a3(0,0,0,2)
C.ati=new A.a3(20,8,20,4)
C.P3=new A.b7(G.DR,null,D.fO,null,null,null)
C.aCR=new A.b7(D.ei,null,null,null,null,null)
C.aD5=new A.b7(D.nM,null,D.z,null,null,null)
C.bS8=new A.X("offensive","Ofensivo ou \xf3dio")
C.bRg=new A.X("harassment","Ass\xe9dio ou amea\xe7as")
C.bQJ=new A.X("sexual","Conte\xfado sexual")
C.bS0=new A.X("violence","Viol\xeancia")
C.bRH=new A.X("spam","Spam ou burla")
C.bRf=new A.X("other","Outro motivo")
C.buu=x([C.bS8,C.bRg,C.bQJ,C.bS0,C.bRH,C.bRf],A.z("r<+(c,c)>"))
C.asM=new A.a3(20,0,20,6)
C.cdo=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k5,null,null,null,null,null,null,null)
C.bLf=new A.S(C.asM,C.cdo,null)
C.a6B=new B.UU(0,"galleryPhoto")
C.GP=new B.UU(1,"galleryComment")
C.GQ=new B.UU(2,"groupMessage")
C.rn=new B.UU(3,"message")
C.c4V=new A.Q(!0,D.fO,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c7H=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["1Lixxef4xcE2rk6B+NlP3x9fZEw="]=a.current})($__dart_deferred_initializers__);