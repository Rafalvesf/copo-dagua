((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={fk:function fk(d,e,f){this.a=d
this.b=e
this.c=f},b0J:function b0J(){}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[186],C)
D=c[201]
C.fk.prototype={
gMK(){var x=this.c
return x!=null&&new A.ai(Date.now(),0,!1).f2(x)},
gWU(){if(!this.gMK())var x=this.a.length===0&&this.b<=0
else x=!0
return x},
awM(d){var x,w,v,u,t,s,r,q,p,o
if(this.gMK())return 0
x=B.j.aJ(d*100)
w=this.a
v=w.length
if(v===0)return B.j.aJ(x*this.b/100)/100
for(u=0,t=0,s=0;s<v;++s,t=p){r=w[s]
q=r.b
p=q==null?9007199254740991:B.j.aJ(q*100)
o=(x<p?x:p)-t
if(o<=0)break
u+=o*r.a/100}return B.j.aJ(u)/100},
o0(d){var x,w=this
if(w.gMK())return 0
x=w.a
if(x.length===0)return w.b
if(d<=0)return B.e.gN(x).a
return w.awM(d)/d*100},
VX(d,e){var x,w=this
if(w.gMK())return 0
if(w.a.length===0)return B.j.aJ(B.j.aJ(d*100)*w.b/100)/100+1
if(e<=0)return 0
x=B.j.aJ(w.awM(e)*100*d/e)/100+1
return x>d?d:x},
EH(d){var x,w,v,u,t,s,r=new C.b0J(),q=this.a
if(q.length===0)return A.q(r.$1(this.b))+"%"
x=A.a([],y.d)
for(w=q.length,v=0;v<q.length;q.length===w||(0,A.K)(q),++v){u=q[v]
t=u.b
s=u.a
x.push(t==null?A.q(r.$1(s))+"% acima":A.q(r.$1(s))+"% at\xe9 "+A.q(d.$1(t)))}return B.e.ah(x,", ")}}
var z=a.updateTypes([])
C.b0J.prototype={
$1(d){var x=B.j.an(d,1)===0?B.j.ac(d,0):B.j.ac(d,1)
return A.b0(x,".",",")},
$S:199};(function inheritance(){var x=a.inherit
x(C.fk,A.J)
x(C.b0J,A.bw)})()
var y={d:A.v("r<c>")};(function constants(){var x=a.makeConstList
D.bwg=x([],A.v("r<+pct,upTo(R,R?)>"))
D.fC=new C.fk(D.bwg,0,null)})()};
(a=>{a["FAuMT4KrDfg+2C0N3fgyVun6FCs="]=a.current})($__dart_deferred_initializers__);