((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,D,B={
d6Q(d){var x=C.aR('[,()"\\\\]',!0,!1,!1)
if(!(x.b.test(d)||d!==D.f.B(d)))return d
x=C.aX(d,"\\","\\\\")
return'"'+C.aX(x,'"','\\"')+'"'},
oz:function oz(d,e){this.a=d
this.b=e},
Fl:function Fl(d,e,f){this.a=d
this.b=e
this.c=f},
bnz:function bnz(){}},A
C=c[0]
D=c[2]
B=a.updateHolder(c[124],B)
A=c[239]
B.oz.prototype={
I(){return"PostgresChangeFilterType."+this.b},
gbBl(){var x,w=this
A:{if(A.a5F===w){x="in"
break A}if(A.bPC===w){x="is"
break A}if(A.bPv===w){x="isdistinct"
break A}if(A.y3===w||A.bPs===w||A.bPw===w||A.bPx===w||A.bPy===w||A.bPz===w||A.bPA===w||A.bPB===w||A.bPt===w||A.bPu===w){x=w.b
break A}x=null}return x}}
B.Fl.prototype={
k(d){var x=this,w=x.a
if(w===A.a5F)return x.b+"=in.("+C.p(y.h.a(x.c).dn(0,new B.bnz(),y.g).a1(0,","))+")"
return x.b+"="+w.gbBl()+"."+B.d6Q(x.c)}}
var z=a.updateTypes([])
B.bnz.prototype={
$1(d){return B.d6Q(d)},
$S:70};(function inheritance(){var x=a.inherit
x(B.oz,C.fg)
x(B.Fl,C.L)
x(B.bnz,C.bs)})()
var y={h:C.y("w<@>"),g:C.y("c")};(function constants(){A.y3=new B.oz(0,"eq")
A.bPs=new B.oz(1,"neq")
A.bPt=new B.oz(10,"match")
A.bPu=new B.oz(11,"imatch")
A.bPv=new B.oz(12,"isDistinct")
A.bPw=new B.oz(2,"lt")
A.bPx=new B.oz(3,"lte")
A.bPy=new B.oz(4,"gt")
A.bPz=new B.oz(5,"gte")
A.a5F=new B.oz(6,"inFilter")
A.bPA=new B.oz(7,"like")
A.bPB=new B.oz(8,"ilike")
A.bPC=new B.oz(9,"isFilter")})()};
(a=>{a["IA6T9FykfhLoxzv3pwsL/ZF5+rU="]=a.current})($__dart_deferred_initializers__);