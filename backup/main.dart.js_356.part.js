((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={fb:function fb(d,e,f){this.a=d
this.b=e
this.c=f},aXx:function aXx(){}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[180],C)
D=c[190]
C.fb.prototype={
gLr(){var x=this.c
return x!=null&&new A.an(Date.now(),0,!1).f8(x)},
gVa(){if(!this.gLr())var x=this.a.length===0&&this.b<=0
else x=!0
return x},
atJ(d){var x,w,v,u,t,s,r,q,p,o
if(this.gLr())return 0
x=B.k.aN(d*100)
w=this.a
v=w.length
if(v===0)return B.k.aN(x*this.b/100)/100
for(u=0,t=0,s=0;s<v;++s,t=p){r=w[s]
q=r.b
p=q==null?9007199254740991:B.k.aN(q*100)
o=(x<p?x:p)-t
if(o<=0)break
u+=o*r.a/100}return B.k.aN(u)/100},
oP(d){var x,w=this
if(w.gLr())return 0
x=w.a
if(x.length===0)return w.b
if(d<=0)return B.e.gN(x).a
return w.atJ(d)/d*100},
a6h(d,e){var x,w=this
if(w.gLr())return 0
if(w.a.length===0)return B.k.aN(B.k.aN(d*100)*w.b/100)/100+1
if(e<=0)return 0
x=B.k.aN(w.atJ(e)*100*d/e)/100+1
return x>d?d:x},
DA(d){var x,w,v,u,t,s,r=new C.aXx(),q=this.a
if(q.length===0)return A.u(r.$1(this.b))+"%"
x=A.a([],y.d)
for(w=q.length,v=0;v<q.length;q.length===w||(0,A.L)(q),++v){u=q[v]
t=u.b
s=u.a
x.push(t==null?A.u(r.$1(s))+"% acima":A.u(r.$1(s))+"% at\xe9 "+A.u(d.$1(t)))}return B.e.ao(x,", ")}}
var z=a.updateTypes([])
C.aXx.prototype={
$1(d){var x=B.k.aj(d,1)===0?B.k.a8(d,0):B.k.a8(d,1)
return A.b4(x,".",",")},
$S:169};(function inheritance(){var x=a.inherit
x(C.fb,A.G)
x(C.aXx,A.bv)})()
var y={d:A.v("q<c>")};(function constants(){var x=a.makeConstList
D.bqz=x([],A.v("q<+pct,upTo(W,W?)>"))
D.fZ=new C.fb(D.bqz,0,null)})()};
(a=>{a["Zipe1meRlcMp2POtKNVwUEdLaDY="]=a.current})($__dart_deferred_initializers__);