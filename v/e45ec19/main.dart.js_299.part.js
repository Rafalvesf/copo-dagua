((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dG2(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cZU(d){var x
A:{if(C.a6I===d){x="fotografia"
break A}if(C.GX===d){x="coment\xe1rio"
break A}if(C.GY===d||C.rl===d){x="mensagem"
break A}x=null}return x},
wB(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wB=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a0(0,$.b7(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bP(null,new B.cTf(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wB)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUz(d,i,j),$async$wB)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akJ(d,e,g,u),$async$wB)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wB,w)},
aUz(d,e,f){return B.dHZ(d,e,f)},
dHZ(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUz=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bP(null,new B.cGv(e),!1,d,!0,!1,null,o),$async$aUz)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aH("report_content",A.R(["p_kind",B.dG2(e),"p_target",f,"p_reason",n],o,q),q),$async$aUz)
case 8:s="Obrigado. A equipa vai rever esta "+B.cZU(e)+" em menos de 24 horas."
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
return A.m($async$aUz,w)},
Vg:function Vg(d,e){this.a=d
this.b=e},
cTf:function cTf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTc:function cTc(d){this.a=d},
cTd:function cTd(d){this.a=d},
cTe:function cTe(d){this.a=d},
cGv:function cGv(d){this.a=d},
cGu:function cGu(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[157],B)
C=c[237]
E=c[271]
F=c[162]
G=c[410]
B.Vg.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cTf.prototype={
$1(d){var x=this,w=null,v=A.a([A.jq(!1,w,w,w,!0,w,w,w,!0,w,C.Pd,w,w,w,w,new B.cTc(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cZU(x.a),w,w,w,w,C.c5u,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jq(!1,w,w,w,!0,w,w,w,!0,w,C.aDm,w,w,w,w,new B.cTd(d),!1,w,w,w,w,w,C.c8i,w,A.h("Bloquear "+x.d,w,w,w,w,D.iv,w,w),w,w,w))
v.push(A.jq(!1,w,w,w,!0,w,w,w,!0,w,C.aD7,w,w,w,w,new B.cTe(d),!1,w,w,w,w,w,w,w,D.cZ,w,w,w))
return A.bB(!0,new A.S(D.ck,A.x(v,D.u,D.h,D.J),w),w,D.Z,!0)},
$S:31}
B.cTc.prototype={
$0(){return A.an(this.a,!1).aq("report")},
$S:0}
B.cTd.prototype={
$0(){return A.an(this.a,!1).aq("block")},
$S:0}
B.cTe.prototype={
$0(){return A.an(this.a,!1).bj()},
$S:0}
B.cGv.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atw,A.h("Porque queres denunciar esta "+B.cZU(this.a)+"?",v,v,v,v,E.aag,v,v),v),C.bLA],y.u)
for(x=0;x<6;++x){w=C.buO[x]
u.push(A.jq(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cGu(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bB(!0,new A.S(D.ck,A.x(u,D.E,D.h,D.J),v),v,D.Z,!0)},
$S:31}
B.cGu.prototype={
$0(){return A.an(this.a,!1).aq(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Vg,A.f7)
w(A.bu,[B.cTf,B.cGv])
w(A.bL,[B.cTc,B.cTd,B.cTe,B.cGu])})()
var y={e:A.A("cI"),u:A.A("r<e>"),w:A.A("c"),q:A.A("dj"),b:A.A("@"),v:A.A("~")};(function constants(){var x=a.makeConstList
C.MQ=new A.a4(0,0,0,2)
C.atw=new A.a4(20,8,20,4)
C.Pd=new A.b8(G.E0,null,D.fS,null,null,null)
C.aD7=new A.b8(D.em,null,null,null,null,null)
C.aDm=new A.b8(D.nM,null,D.z,null,null,null)
C.bSz=new A.X("offensive","Ofensivo ou \xf3dio")
C.bRE=new A.X("harassment","Ass\xe9dio ou amea\xe7as")
C.bR6=new A.X("sexual","Conte\xfado sexual")
C.bSr=new A.X("violence","Viol\xeancia")
C.bS4=new A.X("spam","Spam ou burla")
C.bRD=new A.X("other","Outro motivo")
C.buO=x([C.bSz,C.bRE,C.bR6,C.bSr,C.bS4,C.bRD],A.A("r<+(c,c)>"))
C.at_=new A.a4(20,0,20,6)
C.ce3=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.kb,null,null,null,null,null,null,null)
C.bLA=new A.S(C.at_,C.ce3,null)
C.a6I=new B.Vg(0,"galleryPhoto")
C.GX=new B.Vg(1,"galleryComment")
C.GY=new B.Vg(2,"groupMessage")
C.rl=new B.Vg(3,"message")
C.c5u=new A.P(!0,D.fS,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c8i=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["f6sVp+406iMdwYO9a5M0OvtJ7Nc="]=a.current})($__dart_deferred_initializers__);