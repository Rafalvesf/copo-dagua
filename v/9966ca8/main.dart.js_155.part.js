((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,D,B={
d7A(d){var x=C.aS('[,()"\\\\]',!0,!1,!1)
if(!(x.b.test(d)||d!==D.f.B(d)))return d
x=C.aX(d,"\\","\\\\")
return'"'+C.aX(x,'"','\\"')+'"'},
oA:function oA(d,e){this.a=d
this.b=e},
Fo:function Fo(d,e,f){this.a=d
this.b=e
this.c=f},
bnX:function bnX(){}},A
C=c[0]
D=c[2]
B=a.updateHolder(c[124],B)
A=c[239]
B.oA.prototype={
I(){return"PostgresChangeFilterType."+this.b},
gbBA(){var x,w=this
A:{if(A.a5H===w){x="in"
break A}if(A.bPF===w){x="is"
break A}if(A.bPy===w){x="isdistinct"
break A}if(A.y4===w||A.bPv===w||A.bPz===w||A.bPA===w||A.bPB===w||A.bPC===w||A.bPD===w||A.bPE===w||A.bPw===w||A.bPx===w){x=w.b
break A}x=null}return x}}
B.Fo.prototype={
k(d){var x=this,w=x.a
if(w===A.a5H)return x.b+"=in.("+C.p(y.h.a(x.c).dq(0,new B.bnX(),y.g).a2(0,","))+")"
return x.b+"="+w.gbBA()+"."+B.d7A(x.c)}}
var z=a.updateTypes([])
B.bnX.prototype={
$1(d){return B.d7A(d)},
$S:71};(function inheritance(){var x=a.inherit
x(B.oA,C.fg)
x(B.Fo,C.M)
x(B.bnX,C.bt)})()
var y={h:C.A("w<@>"),g:C.A("c")};(function constants(){A.y4=new B.oA(0,"eq")
A.bPv=new B.oA(1,"neq")
A.bPw=new B.oA(10,"match")
A.bPx=new B.oA(11,"imatch")
A.bPy=new B.oA(12,"isDistinct")
A.bPz=new B.oA(2,"lt")
A.bPA=new B.oA(3,"lte")
A.bPB=new B.oA(4,"gt")
A.bPC=new B.oA(5,"gte")
A.a5H=new B.oA(6,"inFilter")
A.bPD=new B.oA(7,"like")
A.bPE=new B.oA(8,"ilike")
A.bPF=new B.oA(9,"isFilter")})()};
(a=>{a["ea72wQxvmuXnYGVWSPufw71NjhA="]=a.current})($__dart_deferred_initializers__);