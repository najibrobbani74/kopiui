(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{5651:(e,r,t)=>{Promise.resolve().then(t.bind(t,2750)),Promise.resolve().then(t.bind(t,9077)),Promise.resolve().then(t.bind(t,9389)),Promise.resolve().then(t.bind(t,6719)),Promise.resolve().then(t.bind(t,9827)),Promise.resolve().then(t.bind(t,9214))},2750:(e,r,t)=>{"use strict";t.d(r,{Accordion:()=>n,AccordionContent:()=>d,AccordionItem:()=>a,AccordionTrigger:()=>o});var l=t(5155),i=t(9602),s=t(2115);let n=(0,s.forwardRef)((e,r)=>{let{children:t,className:s="",...n}=e;return(0,l.jsx)("div",{className:(0,i.cn)("border rounded-lg first:border-t-0",s),ref:r,...n,children:t})});n.displayName="Accordion";let a=(0,s.forwardRef)((e,r)=>{let{children:t,defaultOpen:s=!1,className:n="",...a}=e;return(0,l.jsx)(u,{defaultOpen:s,children:(0,l.jsx)("div",{ref:r,className:(0,i.cn)("border-t",n),...a,children:t})})});a.displayName="AccordionItem";let o=(0,s.forwardRef)((e,r)=>{let{children:t,className:n="",onClick:a,...o}=e,d=(0,s.useContext)(c);if(!d)throw Error("AccordionTrigger must be used within an AccordionItem");let{isOpen:u,setIsOpen:f}=d;return(0,l.jsxs)("div",{onClick:function(e){f(!u),a&&a(e)},className:(0,i.cn)("px-4 py-2 flex cursor-pointer justify-between items-center hover:bg-primary/30",n),ref:r,...o,children:[(0,l.jsx)("div",{children:t}),(0,l.jsx)("svg",{style:{transform:u?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s"},xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-auto mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})});o.displayName="AccordionTrigger";let d=(0,s.forwardRef)((e,r)=>{let{children:t,className:n="",...a}=e,o=(0,s.useContext)(c);if(!o)throw Error("AccordionContent must be used within an AccordionItem");let{isOpen:d}=o;return(0,l.jsx)("div",{className:(0,i.cn)("grid transition-[grid-template-rows]",d?"grid-rows-[1fr]":"grid-rows-[0fr]",n),children:(0,l.jsx)("div",{className:"overflow-hidden",children:(0,l.jsx)("div",{className:"px-4 py-2 border-t",children:t})})})});d.displayName="AccordionContent";let c=(0,s.createContext)(null),u=e=>{let{children:r,defaultOpen:t=!1}=e,[i,n]=(0,s.useState)(t);return(0,l.jsx)(c.Provider,{value:{isOpen:i,setIsOpen:n},children:r})}},9077:(e,r,t)=>{"use strict";t.d(r,{AlertDialog:()=>o,AlertDialogAction:()=>x,AlertDialogCancel:()=>m,AlertDialogContent:()=>c,AlertDialogDescription:()=>h,AlertDialogFooter:()=>g,AlertDialogHeader:()=>u,AlertDialogTitle:()=>f,AlertDialogTrigger:()=>d});var l=t(5155),i=t(2115),s=t(9602);let n=(0,i.createContext)(null),a=e=>{let{children:r}=e,[t,s]=(0,i.useState)(!1);return(0,l.jsx)(n.Provider,{value:{isOpen:t,setIsOpen:s},children:r})},o=(0,i.forwardRef)((e,r)=>{let{children:t,...i}=e;return(0,l.jsx)(a,{children:(0,l.jsx)("div",{ref:r,...i,children:t})})}),d=(0,i.forwardRef)((e,r)=>{let{children:t,onClick:a,className:o="",...d}=e,c=(0,i.useContext)(n);if(!c)throw Error("AlertDialogTrigger must be used within AlertDialog");return(0,l.jsx)("div",{ref:r,className:(0,s.cn)("px-4 py-2 rounded",o),onClick:e=>{c.setIsOpen(!0),null==a||a(e)},...d,children:t})}),c=(0,i.forwardRef)((e,r)=>{let{children:t,className:a="",...o}=e,d=(0,i.useContext)(n);if(!d)throw Error("AlertDialogContent must be used within AlertDialog");return d.isOpen?(0,l.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[(0,l.jsx)("div",{className:"fixed inset-0 bg-black/50"}),(0,l.jsx)("div",{ref:r,className:(0,s.cn)("relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4",a),...o,children:t})]}):null}),u=(0,i.forwardRef)((e,r)=>{let{children:t,className:i="",...n}=e;return(0,l.jsx)("div",{ref:r,className:(0,s.cn)("mb-4",i),...n,children:t})}),f=(0,i.forwardRef)((e,r)=>{let{children:t,className:i="",...n}=e;return(0,l.jsx)("h2",{ref:r,className:(0,s.cn)("text-lg font-semibold",i),...n,children:t})}),h=(0,i.forwardRef)((e,r)=>{let{children:t,className:i="",...n}=e;return(0,l.jsx)("p",{ref:r,className:(0,s.cn)("text-sm text-gray-600",i),...n,children:t})}),g=(0,i.forwardRef)((e,r)=>{let{children:t,className:i="",...n}=e;return(0,l.jsx)("div",{ref:r,className:(0,s.cn)("mt-6 flex justify-end space-x-2",i),...n,children:t})}),m=(0,i.forwardRef)((e,r)=>{let{children:t,onClick:a,className:o="",...d}=e,c=(0,i.useContext)(n);if(!c)throw Error("AlertDialogCancel must be used within AlertDialog");return(0,l.jsx)("div",{ref:r,className:(0,s.cn)("px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200",o),onClick:e=>{c.setIsOpen(!1),null==a||a(e)},...d,children:t})}),x=(0,i.forwardRef)((e,r)=>{let{children:t,onClick:a,className:o="",...d}=e,c=(0,i.useContext)(n);if(!c)throw Error("AlertDialogAction must be used within AlertDialog");return(0,l.jsx)("div",{ref:r,className:(0,s.cn)("px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700",o),onClick:e=>{c.setIsOpen(!1),null==a||a(e)},...d,children:t})});o.displayName="AlertDialog",d.displayName="AlertDialogTrigger",c.displayName="AlertDialogContent",u.displayName="AlertDialogHeader",f.displayName="AlertDialogTitle",h.displayName="AlertDialogDescription",g.displayName="AlertDialogFooter",m.displayName="AlertDialogCancel",x.displayName="AlertDialogAction"},9389:(e,r,t)=>{"use strict";t.d(r,{default:()=>o});var l=t(5155),i=t(5662),s=t(2115),n=t(9602);let a=(0,s.forwardRef)((e,r)=>{let{code:t,language:a,collapsible:o=!0,className:d,style:c,maxHeight:u,withLineNumbers:f=!1,...h}=e,[g,m]=(0,s.useState)(!1),[x,p]=(0,s.useState)(!1);function w(e){return(e.match(/\n/g)||[]).length}o=o&&w(t)>10;let b=w(t);return(0,l.jsxs)("div",{ref:r,...h,className:(0,n.cn)("relative",d),style:{height:o?x?(b+5)*1.5+"rem":"15rem":"auto",maxHeight:u,...c},children:[o?(0,l.jsx)("div",{className:"absolute bottom-0 left-0 z-[1] flex justify-center py-5 w-full bg-gradient-to-t from-background via-background/70",children:(0,l.jsx)("button",{onClick:()=>p(!x),className:"bg-background border-2 shadow hover:bg-background/50 transition-colors px-5 py-2 rounded-lg",children:x?"Collapse":"Expand"})}):null,(0,l.jsxs)("button",{onClick:function(){navigator.clipboard.writeText(t),m(!0),setTimeout(()=>{m(!1)},2e3)},className:(0,n.cn)("absolute z-[1] top-2 right-2 p-1 hover:opacity-100 rounded",g?"opacity-100 bg-success":"opacity-70 bg-background/50"),children:[(0,l.jsxs)("svg",{className:(0,n.cn)("fill-foreground",g?"hidden":"block"),id:"Copy_24",width:"20",height:"20",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("rect",{width:"24",height:"24",stroke:"none",fill:"#000000",opacity:"0"}),(0,l.jsx)("g",{transform:"matrix(1 0 0 1 12 12)",children:(0,l.jsx)("path",{transform:" translate(-12, -12)",d:"M 4 2 C 2.895 2 2 2.895 2 4 L 2 18 L 4 18 L 4 4 L 18 4 L 18 2 L 4 2 z M 8 6 C 6.895 6 6 6.895 6 8 L 6 20 C 6 21.105 6.895 22 8 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 8 C 22 6.895 21.105 6 20 6 L 8 6 z M 8 8 L 20 8 L 20 20 L 8 20 L 8 8 z",strokeLinecap:"round"})})]}),(0,l.jsxs)("div",{className:(0,n.cn)(g?"flex flex-row justify-center bg-green-500 p-1 rounded-lg items-center gap-1":"hidden"),children:[(0,l.jsxs)("svg",{className:(0,n.cn)("fill-white"),id:"Checkmark_24",width:"18",height:"18",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("rect",{width:"24",height:"24",stroke:"none",fill:"#000000",opacity:"0"}),(0,l.jsx)("g",{transform:"matrix(1.15 0 0 1.15 12 12)",children:(0,l.jsx)("path",{transform:" translate(-12, -11.84)",d:"M 19.28125 5.28125 L 9 15.5625 L 4.71875 11.28125 L 3.28125 12.71875 L 8.28125 17.71875 L 9 18.40625 L 9.71875 17.71875 L 20.71875 6.71875 Z",strokeLinecap:"round"})})]}),(0,l.jsx)("span",{className:(0,n.cn)("text-white font-bold text-xs"),children:"Copied"})]})]}),(0,l.jsx)("div",{className:(0,n.cn)("absolute overflow-y-scroll w-full",o?"h-full":"h-fit",x?"pb-20":""),children:(0,l.jsx)(i.f4,{theme:i.Zj.okaidia,code:t,language:a,children:e=>{let{className:r,style:t,tokens:i,getLineProps:s,getTokenProps:n}=e;return(0,l.jsx)("pre",{className:"px-4 py-2 rounded-lg overflow-x-scroll",style:t,children:i.map((e,r)=>(0,l.jsxs)("div",{...s({line:e}),children:[f&&(0,l.jsx)("span",{className:"text-right inline-block mr-4 w-6 text-foreground opacity-50",children:r+1}),e.map((e,r)=>(0,l.jsx)("span",{...n({token:e})},r))]},r))})}})})]})});a.displayName="CodeBlock";let o=a},6719:(e,r,t)=>{"use strict";t.d(r,{Tabs:()=>n,TabsContent:()=>d,TabsList:()=>a,TabsTrigger:()=>o});var l=t(5155),i=t(2115),s=t(9602);let n=(0,i.forwardRef)((e,r)=>{let{defaultKey:t,children:i,className:n="",...a}=e;return(0,l.jsx)(u,{defaultKey:t,children:(0,l.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col",n),...a,children:i})})});n.displayName="Tabs";let a=(0,i.forwardRef)((e,r)=>{let{className:t="",...i}=e;return(0,l.jsx)("div",{ref:r,className:(0,s.cn)("inline-flex border-b justify-start",t),...i})});a.displayName="TabsList";let o=(0,i.forwardRef)((e,r)=>{let{className:t="",triggerKey:n,children:a,...o}=e,d=(0,i.useContext)(c);if(!d)throw Error("TabsTrigger must be used within an TabKeyProvider");let{tabKey:u,setTabKey:f}=d;return(0,l.jsx)("div",{ref:r,onClick:()=>f(n),className:(0,s.cn)("py-2 w-fit cursor-pointer px-4",u===n?"opacity-100 border-b-2 border-primary":"opacity-50",t),...o,children:a})});o.displayName="TabsTrigger";let d=(0,i.forwardRef)((e,r)=>{let{className:t="",triggerKey:n,...a}=e,o=(0,i.useContext)(c);if(!o)throw Error("TabsContent must be used within an TabKeyProvider");let{tabKey:d}=o;return(0,l.jsx)("div",{ref:r,className:(0,s.cn)(d===n?"":"hidden","pt-3",t),...a})});d.displayName="TabsContent";let c=(0,i.createContext)(null),u=e=>{let{children:r,defaultKey:t}=e,[s,n]=(0,i.useState)(t);return(0,l.jsx)(c.Provider,{value:{tabKey:s,setTabKey:n},children:r})}},9602:(e,r,t)=>{"use strict";t.d(r,{cn:()=>s});var l=t(3463),i=t(9795);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,i.QP)((0,l.$)(r))}}}]);