import{a as p,aG as f,S as m,o as a,c as n,b as s,w as i,V,d,e as y,h as t,R as _,aH as h,af as u}from"./index.a04edc96.js";import{V as w}from"./VTable.440f6170.js";const x={id:"orders"},D=t("h1",{class:"text-center"},"\u8A02\u55AE\u7BA1\u7406",-1),g=t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"\u65E5\u671F"),t("th",null,"\u4F7F\u7528\u8005"),t("th",null,"\u91D1\u984D"),t("th",null,"\u5546\u54C1")])],-1),v={__name:"OrdersView",setup(k){const o=p([]);return(async()=>{try{const{data:c}=await f.get("/orders");o.push(...c.result.map(r=>(r.totalPrice=r.products.reduce((e,l)=>e+l.p_id.price*l.quantity,0),r)))}catch{m.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(c,r)=>(a(),n("div",x,[s(V,null,{default:i(()=>[s(d,{cols:"12"},{default:i(()=>[D]),_:1}),s(y),s(d,{cols:"12"},{default:i(()=>[s(w,null,{default:i(()=>[g,t("tbody",null,[(a(!0),n(_,null,h(o,e=>(a(),n("tr",{key:e._id},[t("td",null,u(e._id),1),t("td",null,u(new Date(e.date).toLocaleDateString()),1),t("td",null,u(e.u_id.account),1),t("td",null,u(e.totalPrice),1),t("td",null,[t("ul",null,[(a(!0),n(_,null,h(e.products,l=>(a(),n("li",{key:l._id},u(l.quantity+" \u500B "+l.p_id.name),1))),128))])])]))),128))])]),_:1})]),_:1})]),_:1})]))}};export{v as default};
