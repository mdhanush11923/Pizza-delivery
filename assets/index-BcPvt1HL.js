import{r as o,bU as x,b3 as y,bu as a,j as C}from"./index-CfFJ_CLj.js";const m=o.createContext(null);function R(){const e=o.useRef(!1);return x(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function b(){const e=R(),[r,n]=o.useState(0),t=o.useCallback(()=>{e.current&&n(r+1)},[r]);return[o.useCallback(()=>y.postRender(t),[t]),r]}const L=e=>!e.isLayoutDirty&&e.willUpdate(!1);function d(){const e=new Set,r=new WeakMap,n=()=>e.forEach(L);return{add:t=>{e.add(t),r.set(t,t.addEventListener("willUpdate",n))},remove:t=>{e.delete(t);const s=r.get(t);s&&(s(),r.delete(t)),n()},dirty:n}}const l=e=>e===!0,G=e=>l(e===!0)||e==="id",h=({children:e,id:r,inherit:n=!0})=>{const t=o.useContext(a),s=o.useContext(m),[p,f]=b(),u=o.useRef(null),c=t.id||s;u.current===null&&(G(n)&&c&&(r=r?c+"-"+r:c),u.current={id:r,group:l(n)&&t.group||d()});const i=o.useMemo(()=>({...u.current,forceRender:p}),[f]);return C.jsx(a.Provider,{value:i,children:e})};export{h as L};
