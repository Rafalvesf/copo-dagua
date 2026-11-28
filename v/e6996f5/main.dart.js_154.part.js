((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,D,B={
d7k(d){var x=C.aS('[,()"\\\\]',!0,!1,!1)
if(!(x.b.test(d)||d!==D.f.B(d)))return d
x=C.aX(d,"\\","\\\\")
return'"'+C.aX(x,'"','\\"')+'"'},
oA:function oA(d,e){this.a=d
this.b=e},
Fn:function Fn(d,e,f){this.a=d
this.b=e
this.c=f},
bnQ:function bnQ(){}},A
C=c[0]
D=c[2]
B=a.updateHolder(c[124],B)
A=c[239]
B.oA.prototype={
I(){return"PostgresChangeFilterType."+this.b},
gbBu(){var x,w=this
A:{if(A.a5I===w){x="in"
break A}if(A.bPH===w){x="is"
break A}if(A.bPA===w){x="isdistinct"
break A}if(A.y4===w||A.bPx===w||A.bPB===w||A.bPC===w||A.bPD===w||A.bPE===w||A.bPF===w||A.bPG===w||A.bPy===w||A.bPz===w){x=w.b
break A}x=null}return x}}
B.Fn.prototype={
k(d){var x=this,w=x.a
if(w===A.a5I)return x.b+"=in.("+C.p(y.h.a(x.c).dn(0,new B.bnQ(),y.g).a1(0,","))+")"
return x.b+"="+w.gbBu()+"."+B.d7k(x.c)}}
var z=a.updateTypes([])
B.bnQ.prototype={
$1(d){return B.d7k(d)},
$S:71};(function inheritance(){var x=a.inherit
x(B.oA,C.fg)
x(B.Fn,C.M)
x(B.bnQ,C.bs)})()
var y={h:C.y("w<@>"),g:C.y("c")};(function constants(){A.y4=new B.oA(0,"eq")
A.bPx=new B.oA(1,"neq")
A.bPy=new B.oA(10,"match")
A.bPz=new B.oA(11,"imatch")
A.bPA=new B.oA(12,"isDistinct")
A.bPB=new B.oA(2,"lt")
A.bPC=new B.oA(3,"lte")
A.bPD=new B.oA(4,"gt")
A.bPE=new B.oA(5,"gte")
A.a5I=new B.oA(6,"inFilter")
A.bPF=new B.oA(7,"like")
A.bPG=new B.oA(8,"ilike")
A.bPH=new B.oA(9,"isFilter")})()};
(a=>{a["G2dO+27F5PAF7ci8isiHNEA1a0g="]=a.current})($__dart_deferred_initializers__);