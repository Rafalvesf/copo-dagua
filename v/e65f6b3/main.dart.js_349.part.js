((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={fk:function fk(d,e,f){this.a=d
this.b=e
this.c=f},b0L:function b0L(){}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[183],C)
D=c[198]
C.fk.prototype={
gMQ(){var x=this.c
return x!=null&&new A.ah(Date.now(),0,!1).f0(x)},
gWY(){if(!this.gMQ())var x=this.a.length===0&&this.b<=0
else x=!0
return x},
awJ(d){var x,w,v,u,t,s,r,q,p,o
if(this.gMQ())return 0
x=B.j.aI(d*100)
w=this.a
v=w.length
if(v===0)return B.j.aI(x*this.b/100)/100
for(u=0,t=0,s=0;s<v;++s,t=p){r=w[s]
q=r.b
p=q==null?9007199254740991:B.j.aI(q*100)
o=(x<p?x:p)-t
if(o<=0)break
u+=o*r.a/100}return B.j.aI(u)/100},
nW(d){var x,w=this
if(w.gMQ())return 0
x=w.a
if(x.length===0)return w.b
if(d<=0)return B.e.gN(x).a
return w.awJ(d)/d*100},
W_(d,e){var x,w=this
if(w.gMQ())return 0
if(w.a.length===0)return B.j.aI(B.j.aI(d*100)*w.b/100)/100+1
if(e<=0)return 0
x=B.j.aI(w.awJ(e)*100*d/e)/100+1
return x>d?d:x},
EL(d){var x,w,v,u,t,s,r=new C.b0L(),q=this.a
if(q.length===0)return A.q(r.$1(this.b))+"%"
x=A.a([],y.d)
for(w=q.length,v=0;v<q.length;q.length===w||(0,A.K)(q),++v){u=q[v]
t=u.b
s=u.a
x.push(t==null?A.q(r.$1(s))+"% acima":A.q(r.$1(s))+"% at\xe9 "+A.q(d.$1(t)))}return B.e.aa(x,", ")}}
var z=a.updateTypes([])
C.b0L.prototype={
$1(d){var x=B.j.an(d,1)===0?B.j.ac(d,0):B.j.ac(d,1)
return A.b1(x,".",",")},
$S:192};(function inheritance(){var x=a.inherit
x(C.fk,A.J)
x(C.b0L,A.bv)})()
var y={d:A.w("r<c>")};(function constants(){var x=a.makeConstList
D.bwE=x([],A.w("r<+pct,upTo(S,S?)>"))
D.fz=new C.fk(D.bwE,0,null)})()};
(a=>{a["Xw9DliEfeqKlsFbNQ9TCbCf/pA8="]=a.current})($__dart_deferred_initializers__);