((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,D,B={
d7H(d){var x=C.aS('[,()"\\\\]',!0,!1,!1)
if(!(x.b.test(d)||d!==D.f.B(d)))return d
x=C.aX(d,"\\","\\\\")
return'"'+C.aX(x,'"','\\"')+'"'},
oA:function oA(d,e){this.a=d
this.b=e},
Fp:function Fp(d,e,f){this.a=d
this.b=e
this.c=f},
bo1:function bo1(){}},A
C=c[0]
D=c[2]
B=a.updateHolder(c[124],B)
A=c[239]
B.oA.prototype={
I(){return"PostgresChangeFilterType."+this.b},
gbBE(){var x,w=this
A:{if(A.a5I===w){x="in"
break A}if(A.bPF===w){x="is"
break A}if(A.bPy===w){x="isdistinct"
break A}if(A.y4===w||A.bPv===w||A.bPz===w||A.bPA===w||A.bPB===w||A.bPC===w||A.bPD===w||A.bPE===w||A.bPw===w||A.bPx===w){x=w.b
break A}x=null}return x}}
B.Fp.prototype={
k(d){var x=this,w=x.a
if(w===A.a5I)return x.b+"=in.("+C.p(y.h.a(x.c).dq(0,new B.bo1(),y.g).a2(0,","))+")"
return x.b+"="+w.gbBE()+"."+B.d7H(x.c)}}
var z=a.updateTypes([])
B.bo1.prototype={
$1(d){return B.d7H(d)},
$S:71};(function inheritance(){var x=a.inherit
x(B.oA,C.fg)
x(B.Fp,C.M)
x(B.bo1,C.bt)})()
var y={h:C.z("w<@>"),g:C.z("c")};(function constants(){A.y4=new B.oA(0,"eq")
A.bPv=new B.oA(1,"neq")
A.bPw=new B.oA(10,"match")
A.bPx=new B.oA(11,"imatch")
A.bPy=new B.oA(12,"isDistinct")
A.bPz=new B.oA(2,"lt")
A.bPA=new B.oA(3,"lte")
A.bPB=new B.oA(4,"gt")
A.bPC=new B.oA(5,"gte")
A.a5I=new B.oA(6,"inFilter")
A.bPD=new B.oA(7,"like")
A.bPE=new B.oA(8,"ilike")
A.bPF=new B.oA(9,"isFilter")})()};
(a=>{a["No+uBWUq+sutuF4yiTWrGiqdXEQ="]=a.current})($__dart_deferred_initializers__);