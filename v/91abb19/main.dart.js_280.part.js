((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dBa(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cVx(d){var x
A:{if(C.a7j===d){x="fotografia"
break A}if(C.Hf===d){x="coment\xe1rio"
break A}if(C.Hg===d||C.rL===d){x="mensagem"
break A}x=null}return x},
wt(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wt=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a0(0,$.b8(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.D(h).length===0?"esta pessoa":D.f.D(h)
x=3
return A.d(A.co(null,new B.cOX(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wt)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aTZ(d,i,j),$async$wt)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akm(d,e,g,u),$async$wt)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wt,w)},
aTZ(d,e,f){return B.dD1(d,e,f)},
dD1(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aTZ=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.co(null,new B.cD9(e),!1,d,!0,!1,null,o),$async$aTZ)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.T().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aT("report_content",A.S(["p_kind",B.dBa(e),"p_target",f,"p_reason",n],o,q),q),$async$aTZ)
case 8:s="Obrigado. A equipa vai rever esta "+B.cVx(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a4(A.cB(null,null,null,null,null,D.z,null,A.h(s,null,null,null,null,null,null,null,null),null,D.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aTZ,w)},
UP:function UP(d,e){this.a=d
this.b=e},
cOX:function cOX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cOU:function cOU(d){this.a=d},
cOV:function cOV(d){this.a=d},
cOW:function cOW(d){this.a=d},
cD9:function cD9(d){this.a=d},
cD8:function cD8(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[152],B)
C=c[233]
E=c[268]
F=c[160]
G=c[406]
B.UP.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cOX.prototype={
$1(d){var x=this,w=null,v=A.a([A.jj(!1,w,w,w,!0,w,w,w,!0,w,C.PH,w,w,w,w,new B.cOU(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cVx(x.a),w,w,w,w,C.c6w,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jj(!1,w,w,w,!0,w,w,w,!0,w,C.aE5,w,w,w,w,new B.cOV(d),!1,w,w,w,w,w,C.ca0,w,A.h("Bloquear "+x.d,w,w,w,w,D.h8,w,w,w),w,w,w))
v.push(A.jj(!1,w,w,w,!0,w,w,w,!0,w,C.aDS,w,w,w,w,new B.cOW(d),!1,w,w,w,w,w,w,w,D.cO,w,w,w))
return A.bF(!0,new A.Q(D.cl,A.B(v,D.w,D.i,D.K,0,D.v),w),w,D.a_,!0)},
$S:46}
B.cOU.prototype={
$0(){return A.ap(this.a,!1).aj("report")},
$S:0}
B.cOV.prototype={
$0(){return A.ap(this.a,!1).aj("block")},
$S:0}
B.cOW.prototype={
$0(){return A.ap(this.a,!1).bF()},
$S:0}
B.cD9.prototype={
$1(d){var x,w,v=null,u=A.a([new A.Q(C.aup,A.h("Porque queres denunciar esta "+B.cVx(this.a)+"?",v,v,v,v,E.IO,v,v,v),v),C.bLQ],y.u)
for(x=0;x<6;++x){w=C.bvz[x]
u.push(A.jj(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cD8(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bF(!0,new A.Q(D.cl,A.B(u,D.I,D.i,D.K,0,D.v),v),v,D.a_,!0)},
$S:46}
B.cD8.prototype={
$0(){return A.ap(this.a,!1).aj(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.UP,A.fg)
w(A.bx,[B.cOX,B.cD9])
w(A.bT,[B.cOU,B.cOV,B.cOW,B.cD8])})()
var y={e:A.w("cD"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dt"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.Nk=new A.a0(0,0,0,2)
C.aup=new A.a0(20,8,20,4)
C.PH=new A.b9(G.Eh,null,D.fk,null,null,null)
C.aDS=new A.b9(D.eQ,null,null,null,null,null)
C.aE5=new A.b9(D.nU,null,D.A,null,null,null)
C.bTm=new A.a3("offensive","Ofensivo ou \xf3dio")
C.bSr=new A.a3("harassment","Ass\xe9dio ou amea\xe7as")
C.bRT=new A.a3("sexual","Conte\xfado sexual")
C.bTd=new A.a3("violence","Viol\xeancia")
C.bSV=new A.a3("spam","Spam ou burla")
C.bSq=new A.a3("other","Outro motivo")
C.bvz=x([C.bTm,C.bSr,C.bRT,C.bTd,C.bSV,C.bSq],A.w("r<+(c,c)>"))
C.atS=new A.a0(20,0,20,6)
C.ceB=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k0,null,null,null,null,null,null,null,null)
C.bLQ=new A.Q(C.atS,C.ceB,null)
C.a7j=new B.UP(0,"galleryPhoto")
C.Hf=new B.UP(1,"galleryComment")
C.Hg=new B.UP(2,"groupMessage")
C.rL=new B.UP(3,"message")
C.c6w=new A.N(!0,D.fk,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.ca0=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["foFx5SDDizRINVrYacPDfcwjqp8="]=a.current})($__dart_deferred_initializers__);