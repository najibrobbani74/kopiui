(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769,924],{7900:(e,r,t)=>{Promise.resolve().then(t.bind(t,2750)),Promise.resolve().then(t.bind(t,9389)),Promise.resolve().then(t.bind(t,6719))},2750:(e,r,t)=>{"use strict";t.d(r,{Accordion:()=>l,AccordionContent:()=>d,AccordionItem:()=>o,AccordionTrigger:()=>a});var s=t(5155),n=t(9602),i=t(2115);let l=(0,i.forwardRef)((e,r)=>{let{children:t,className:i="",...l}=e;return(0,s.jsx)("div",{className:(0,n.cn)(i,"border rounded-lg first:border-t-0"),ref:r,...l,children:t})});l.displayName="Accordion";let o=(0,i.forwardRef)((e,r)=>{let{children:t,defaultOpen:i=!1,className:l="",...o}=e;return(0,s.jsx)(u,{defaultOpen:i,children:(0,s.jsx)("div",{ref:r,className:(0,n.cn)("border-t",l),...o,children:t})})});o.displayName="AccordionItem";let a=(0,i.forwardRef)((e,r)=>{let{children:t,className:l="",onClick:o,...a}=e,d=(0,i.useContext)(c);if(!d)throw Error("AccordionTrigger must be used within an AccordionItem");let{isOpen:u,setIsOpen:f}=d;return(0,s.jsxs)("div",{onClick:function(e){f(!u),o&&o(e)},className:(0,n.cn)("px-4 py-2 flex cursor-pointer justify-between items-center hover:bg-primary/30",l),ref:r,...a,children:[(0,s.jsx)("div",{children:t}),(0,s.jsx)("svg",{style:{transform:u?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s"},xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ml-auto mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})});a.displayName="AccordionTrigger";let d=(0,i.forwardRef)((e,r)=>{let{children:t,className:l="",...o}=e,a=(0,i.useContext)(c);if(!a)throw Error("AccordionContent must be used within an AccordionItem");let{isOpen:d}=a;return(0,s.jsx)("div",{className:(0,n.cn)("grid transition-[grid-template-rows]",d?"grid-rows-[1fr]":"grid-rows-[0fr]",l),children:(0,s.jsx)("div",{className:"overflow-hidden",children:(0,s.jsx)("div",{className:"px-4 py-2 border-t",children:t})})})});d.displayName="AccordionContent";let c=(0,i.createContext)(null),u=e=>{let{children:r,defaultOpen:t=!1}=e,[n,l]=(0,i.useState)(t);return(0,s.jsx)(c.Provider,{value:{isOpen:n,setIsOpen:l},children:r})}},9389:(e,r,t)=>{"use strict";t.d(r,{default:()=>a});var s=t(5155),n=t(5662),i=t(2115),l=t(9602);let o=(0,i.forwardRef)((e,r)=>{let{children:t,language:o,collapsible:a=!0,lineCount:d,className:c,style:u,withLineNumbers:f=!1,...h}=e,[x,m]=(0,i.useState)(!1),[p,g]=(0,i.useState)(!1);return(0,s.jsxs)("div",{ref:r,...h,className:(0,l.cn)("relative",c),style:{height:a?(p?null!=d?d:30:10)*1.5+1+"rem":d?1.5*d+1+"rem":"auto",...u},children:[a?(0,s.jsx)("div",{className:"absolute bottom-0 left-0 z-[1] flex justify-center py-5 w-full bg-gradient-to-t from-background via-background/70",children:(0,s.jsx)("button",{onClick:()=>g(!p),className:"bg-background border hover:bg-primary/50 text-foreground px-5 py-2 rounded-lg",children:p?"Collapse":"Expand"})}):null,(0,s.jsxs)("button",{onClick:function(){navigator.clipboard.writeText(t),m(!0),setTimeout(()=>{m(!1)},2e3)},className:(0,l.cn)("absolute z-[1] top-2 right-2 p-1 hover:opacity-100 rounded",x?"opacity-100 bg-success":"opacity-70 bg-background/50"),children:[(0,s.jsxs)("svg",{className:(0,l.cn)("fill-foreground",x?"hidden":"block"),id:"Copy_24",width:"20",height:"20",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"24",height:"24",stroke:"none",fill:"#000000",opacity:"0"}),(0,s.jsx)("g",{transform:"matrix(1 0 0 1 12 12)",children:(0,s.jsx)("path",{transform:" translate(-12, -12)",d:"M 4 2 C 2.895 2 2 2.895 2 4 L 2 18 L 4 18 L 4 4 L 18 4 L 18 2 L 4 2 z M 8 6 C 6.895 6 6 6.895 6 8 L 6 20 C 6 21.105 6.895 22 8 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 8 C 22 6.895 21.105 6 20 6 L 8 6 z M 8 8 L 20 8 L 20 20 L 8 20 L 8 8 z",strokeLinecap:"round"})})]}),(0,s.jsxs)("div",{className:(0,l.cn)(x?"flex flex-row justify-center bg-green-500/20 p-1 rounded-lg items-center gap-1":"hidden"),children:[(0,s.jsxs)("svg",{className:(0,l.cn)("fill-green-500"),id:"Checkmark_24",width:"18",height:"18",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("rect",{width:"24",height:"24",stroke:"none",fill:"#000000",opacity:"0"}),(0,s.jsx)("g",{transform:"matrix(1.15 0 0 1.15 12 12)",children:(0,s.jsx)("path",{transform:" translate(-12, -11.84)",d:"M 19.28125 5.28125 L 9 15.5625 L 4.71875 11.28125 L 3.28125 12.71875 L 8.28125 17.71875 L 9 18.40625 L 9.71875 17.71875 L 20.71875 6.71875 Z",strokeLinecap:"round"})})]}),(0,s.jsx)("span",{className:(0,l.cn)("text-green-500 font-bold text-xs"),children:"Copied"})]})]}),(0,s.jsx)("div",{className:(0,l.cn)("absolute overflow-y-scroll w-full",a||d?"h-full":"h-fit",p?"pb-20":""),children:(0,s.jsx)(n.f4,{theme:n.Zj.okaidia,code:t,language:o,children:e=>{let{className:r,style:t,tokens:n,getLineProps:i,getTokenProps:l}=e;return(0,s.jsx)("pre",{className:"px-4 py-2 rounded-lg overflow-x-scroll",style:t,children:n.map((e,r)=>(0,s.jsxs)("div",{...i({line:e}),children:[f&&(0,s.jsx)("span",{className:"text-right inline-block mr-4 w-6 text-foreground opacity-50",children:r+1}),e.map((e,r)=>(0,s.jsx)("span",{...l({token:e})},r))]},r))})}})})]})});o.displayName="CodeBlock";let a=o},6719:(e,r,t)=>{"use strict";t.d(r,{Tabs:()=>l,TabsContent:()=>d,TabsList:()=>o,TabsTrigger:()=>a});var s=t(5155),n=t(2115),i=t(9602);let l=(0,n.forwardRef)((e,r)=>{let{defaultKey:t,children:n,className:l="",...o}=e;return(0,s.jsx)(u,{defaultKey:t,children:(0,s.jsx)("div",{ref:r,className:(0,i.cn)("flex flex-col",l),...o,children:n})})});l.displayName="Tabs";let o=(0,n.forwardRef)((e,r)=>{let{className:t="",...n}=e;return(0,s.jsx)("div",{ref:r,className:(0,i.cn)("inline-flex border-b justify-start",t),...n})});o.displayName="TabsList";let a=(0,n.forwardRef)((e,r)=>{let{className:t="",triggerKey:l,children:o,...a}=e,d=(0,n.useContext)(c);if(!d)throw Error("TabsTrigger must be used within an TabKeyProvider");let{tabKey:u,setTabKey:f}=d;return(0,s.jsx)("div",{ref:r,onClick:()=>f(l),className:(0,i.cn)("py-2 w-fit cursor-pointer px-4",u===l?"opacity-100 border-b-2 border-primary":"opacity-50",t),...a,children:o})});a.displayName="TabsTrigger";let d=(0,n.forwardRef)((e,r)=>{let{className:t="",triggerKey:l,...o}=e,a=(0,n.useContext)(c);if(!a)throw Error("TabsContent must be used within an TabKeyProvider");let{tabKey:d}=a;return(0,s.jsx)("div",{ref:r,className:(0,i.cn)(d===l?"":"hidden","pt-3",t),...o})});d.displayName="TabsContent";let c=(0,n.createContext)(null),u=e=>{let{children:r,defaultKey:t}=e,[i,l]=(0,n.useState)(t);return(0,s.jsx)(c.Provider,{value:{tabKey:i,setTabKey:l},children:r})}},9602:(e,r,t)=>{"use strict";t.d(r,{cn:()=>i});var s=t(3463),n=t(9795);function i(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.QP)((0,s.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[181,662,441,517,358],()=>r(7900)),_N_E=e.O()}]);