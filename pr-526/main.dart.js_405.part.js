((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,C={jS:function jS(d,e){this.a=d
this.b=e},
cHt(d,e,f,g,h,i,j,k,l,m,n,o,p){return new C.kD(i,h,p,o,l,n,m,k,j,f,e,d)},
kD:function kD(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=d
_.d=e
_.e=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o},
deq(d){var x,w,v=new A.an(Date.now(),0,!1),u=B.i.aV(A.bK(A.aD(v),A.ay(v),A.aN(v),0,0).da(A.bK(A.aD(d),A.ay(d),A.aN(d),0,0)).a,864e8)
if(u===0)return"Hoje"
if(u===1)return"Ontem"
x=B.dq[A.ay(d)-1]
w=A.aD(d)===A.aD(v)?"":" "+A.aD(d)
return""+A.aN(d)+" "+x+w},
cRO(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=A.a([],y.e)
for(x=g!=null,w=0;w<f.length;){v=f[w]
u=v.r
t=u.eJ()
s=w===0
r=s?l:f[w-1].r.eJ()
if(r==null||A.aD(r)!==A.aD(t)||A.ay(r)!==A.ay(t)||A.aN(r)!==A.aN(t)){s=s?0:8
q=new A.aV(999,999)
k.push(new A.R(new A.Z(0,s,0,12),new A.fx(B.O,l,l,A.B(l,A.h(C.deq(t),l,l,l,B.hN,l,l,l),B.r,l,l,new A.J(D.akM,l,l,new A.bX(q,q,q,q),l,l,B.y),l,l,l,E.LA,l,l,l),l),l))}p=e.$1(v);++w
o=w<f.length?f[w]:l
n=!0
if(o!=null)if(J.n(e.$1(o),p)){s=o.r.eJ()
s=B.i.aV(s.b-t.b+1000*(s.a-t.a),6e7)>10
n=s}s=p?B.e7:B.bL
k.push(new A.dA(s,l,l,d.$2(v,p),l))
if(n){s=!1
if(p)if(x){s=g.a
q=u.a
if(s>=q)u=s===q&&g.b<u.b
else u=!0
u=!u}else u=s
else u=s
m=u?"Visto":""
u=p?B.e7:B.bL
k.push(new A.R(D.apO,new A.dA(u,l,l,A.h(m.length===0?B.f.aS(B.i.j(A.iH(t)),2,"0")+":"+B.f.aS(B.i.j(A.iu(t)),2,"0"):B.f.aS(B.i.j(A.iH(t)),2,"0")+":"+B.f.aS(B.i.j(A.iu(t)),2,"0")+" \xb7 "+m,l,l,l,B.y9,l,l,l),l),l))}else k.push(B.Z)}return k},
cHu(d,e,f,g,h,i,j,k){return new C.ajk(f,k,j,i,e,d,h,g,null)},
ajk:function ajk(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aSt:function aSt(){},
b92:function b92(){}},D,G
J=c[1]
A=c[0]
B=c[2]
E=c[358]
F=c[114]
C=a.updateHolder(c[77],C)
D=c[249]
G=c[399]
C.jS.prototype={
atd(d,e){var x=d==null?this.a:d
return new C.jS(x,e==null?this.b:e)},
i2(d){return this.atd(d,null)},
DR(d){return this.atd(null,d)}}
C.kD.prototype={}
C.ajk.prototype={
af2(d){var x=null,w=A.W(999)
return A.B(x,A.h(d,x,x,x,B.H2,x,x,x),B.r,x,x,new A.J(B.ag,x,x,w,x,x,B.y),x,x,x,B.ex,x,x,x)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=A.au(d,j,y.h).w,h=A.W(22),g=k.y
g=g==null?A.B(j,j,B.r,B.p_,j,j,j,j,j,j,j,j,j):A.yU(g,j,new C.aSt(),!1,B.bW,!1,j,j,j)
x=A.W(999)
w=k.c
x=A.ci(j,A.B(j,A.h(w==="PROPOSTA"?"Proposta":w,j,j,j,G.a7K,j,j,j),B.r,j,j,new A.J(B.z,j,j,x,j,j,B.y),j,j,j,B.jK,j,j,j),j,j,12,j,12,j)
w=k.f
v=y.e
w=A.aJ(new A.bL(B.aE,j,B.fj,B.A,A.a([g,x,A.ci(j,new A.JK("TOTAL",w==null?"\u2014":A.aT(w,!1),!1,j),j,j,j,12,12,j)],v),j),120,j)
x=A.h(k.d,2,B.a1,j,B.eK,j,j,j)
g=A.a([],v)
u=k.e
if(u!=null&&u.length!==0)g.push(k.af2(u))
u=k.r
if(u!=null)g.push(k.af2("Sinal "+A.aT(u,!1)))
g=A.a([x,B.aa,A.eg(B.bh,g,B.r,B.bw,6,6)],v)
x=k.x
if(x!=null)B.e.q(g,A.a([B.Z,A.h(x,j,j,j,B.fk,j,j,j)],v))
x=k.w
if(x.length!==0){u=A.a([],v)
for(t=0;t<x.length;++t){s=A.a([],v)
if(t>0)s.push(B.ax)
r=x[t]
q=r.b
p=r.c
o=p&&q!=null?B.z:B.u
n=new A.aV(999,999)
if(p&&q!=null)m=j
else{l=new A.b4(q==null?B.jF:B.z,1.5,B.af,-1)
m=new A.e2(l,l,l,l)}if(q==null)p=B.P
else p=p?B.u:B.z
s.push(new A.bR(1,B.au,new A.hr(A.B(B.O,A.h(r.a,1,B.a1,j,new A.E(!0,p,j,j,j,j,14,B.F,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j),B.r,j,j,new A.J(o,j,m,new A.bX(n,n,n,n),j,j,B.y),j,40,j,B.fv,j,j,j),q,j,j),j))
B.e.q(u,s)}B.e.q(g,A.a([B.U,A.S(u,B.x,B.j,B.q,0,j,j)],v))}return A.aJ(A.B(j,A.D(A.a([w,new A.R(B.po,A.D(g,B.J,B.j,B.q,0,B.w),j)],v),B.J,B.j,B.q,0,B.w),B.aM,j,j,new A.J(B.u,j,j,h,B.aJ,j,B.y),j,j,j,j,j,j,j),j,i.a.a*0.84)}}
C.b92.prototype={
$3$1(d,e,f,g){return F.cKT(d,null,!1,null,null,e,f,g)},
$1(d){var x=y.b
return this.$3$1(d,y.i,x,x)}}
var z=a.updateTypes([])
C.aSt.prototype={
$3(d,e,f){var x=null
return A.B(x,x,B.r,B.p_,x,x,x,x,x,x,x,x,x)},
$S:61};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.H,[C.jS,C.kD,C.b92])
w(C.ajk,A.O)
w(C.aSt,A.bq)})()
A.bj(b.typeUniverse,JSON.parse('{"ajk":{"O":[],"e":[]}}'))
var y={e:A.u("q<e>"),h:A.u("dh"),i:A.u("eO<@>"),b:A.u("@")};(function constants(){var x=a.makeConstList
D.Jc=new C.b92()
D.bvM=x([],A.u("q<kD>"))
D.JC=new C.jS(!1,D.bvM)
D.akM=new A.P(1,0.9137254901960784,0.8980392156862745,0.8627450980392157,B.C)
D.apO=new A.Z(0,4,0,12)
D.bw3=x([],A.u("q<vw>"))
D.ca0=new A.z("N\xe3o foi poss\xedvel enviar o anexo. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.a6K=new A.bS(D.ca0,null,null,null,null,null,null,null,null,null,null,null,null,B.X,!1,null,null,null,B.A,null)})()};
(a=>{a["78dcA3X6lxDjNJp1ZMfR28MadQ0="]=a.current})($__dart_deferred_initializers__);