(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[311],{1054:(e,r,t)=>{Promise.resolve().then(t.bind(t,9077)),Promise.resolve().then(t.bind(t,9389)),Promise.resolve().then(t.bind(t,6719))},9077:(e,r,t)=>{"use strict";t.d(r,{AlertDialog:()=>o,AlertDialogAction:()=>m,AlertDialogCancel:()=>h,AlertDialogContent:()=>c,AlertDialogDescription:()=>g,AlertDialogFooter:()=>x,AlertDialogHeader:()=>u,AlertDialogTitle:()=>f,AlertDialogTrigger:()=>d});var l=t(5155),s=t(2115),a=t(9602);let i=(0,s.createContext)(null),n=e=>{let{children:r}=e,[t,a]=(0,s.useState)(!1);return(0,l.jsx)(i.Provider,{value:{isOpen:t,setIsOpen:a},children:r})},o=(0,s.forwardRef)((e,r)=>{let{children:t,...s}=e;return(0,l.jsx)(n,{children:(0,l.jsx)("div",{ref:r,...s,children:t})})}),d=(0,s.forwardRef)((e,r)=>{let{children:t,onClick:n,className:o="",...d}=e,c=(0,s.useContext)(i);if(!c)throw Error("AlertDialogTrigger must be used within AlertDialog");return(0,l.jsx)("div",{ref:r,className:(0,a.cn)("px-4 py-2 rounded",o),onClick:e=>{c.setIsOpen(!0),null==n||n(e)},...d,children:t})}),c=(0,s.forwardRef)((e,r)=>{let{children:t,className:n="",...o}=e,d=(0,s.useContext)(i);if(!d)throw Error("AlertDialogContent must be used within AlertDialog");return d.isOpen?(0,l.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[(0,l.jsx)("div",{className:"fixed inset-0 bg-black/50"}),(0,l.jsx)("div",{ref:r,className:(0,a.cn)("relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4",n),...o,children:t})]}):null}),u=(0,s.forwardRef)((e,r)=>{let{children:t,className:s="",...i}=e;return(0,l.jsx)("div",{ref:r,className:(0,a.cn)("mb-4",s),...i,children:t})}),f=(0,s.forwardRef)((e,r)=>{let{children:t,className:s="",...i}=e;return(0,l.jsx)("h2",{ref:r,className:(0,a.cn)("text-lg font-semibold",s),...i,children:t})}),g=(0,s.forwardRef)((e,r)=>{let{children:t,className:s="",...i}=e;return(0,l.jsx)("p",{ref:r,className:(0,a.cn)("text-sm text-gray-600",s),...i,children:t})}),x=(0,s.forwardRef)((e,r)=>{let{children:t,className:s="",...i}=e;return(0,l.jsx)("div",{ref:r,className:(0,a.cn)("mt-6 flex justify-end space-x-2",s),...i,children:t})}),h=(0,s.forwardRef)((e,r)=>{let{children:t,onClick:n,className:o="",...d}=e,c=(0,s.useContext)(i);if(!c)throw Error("AlertDialogCancel must be used within AlertDialog");return(0,l.jsx)("div",{ref:r,className:(0,a.cn)("px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200",o),onClick:e=>{c.setIsOpen(!1),null==n||n(e)},...d,children:t})}),m=(0,s.forwardRef)((e,r)=>{let{children:t,onClick:n,className:o="",...d}=e,c=(0,s.useContext)(i);if(!c)throw Error("AlertDialogAction must be used within AlertDialog");return(0,l.jsx)("div",{ref:r,className:(0,a.cn)("px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700",o),onClick:e=>{c.setIsOpen(!1),null==n||n(e)},...d,children:t})});o.displayName="AlertDialog",d.displayName="AlertDialogTrigger",c.displayName="AlertDialogContent",u.displayName="AlertDialogHeader",f.displayName="AlertDialogTitle",g.displayName="AlertDialogDescription",x.displayName="AlertDialogFooter",h.displayName="AlertDialogCancel",m.displayName="AlertDialogAction"},9389:(e,r,t)=>{"use strict";t.d(r,{default:()=>o});var l=t(5155),s=t(5662),a=t(2115),i=t(9602);let n=(0,a.forwardRef)((e,r)=>{let{children:t,language:n,collapsible:o=!0,lineCount:d,className:c,style:u,withLineNumbers:f=!1,...g}=e,[x,h]=(0,a.useState)(!1),[m,p]=(0,a.useState)(!1);return(0,l.jsxs)("div",{ref:r,...g,className:(0,i.cn)("relative",c),style:{height:o?(m?null!=d?d:30:10)*1.5+1+"rem":d?1.5*d+1+"rem":"auto",...u},children:[o?(0,l.jsx)("div",{className:"absolute bottom-0 left-0 z-[1] flex justify-center py-5 w-full bg-gradient-to-t from-background via-background/70",children:(0,l.jsx)("button",{onClick:()=>p(!m),className:"bg-background border hover:bg-primary/50 text-foreground px-5 py-2 rounded-lg",children:m?"Collapse":"Expand"})}):null,(0,l.jsxs)("button",{onClick:function(){navigator.clipboard.writeText(t),h(!0),setTimeout(()=>{h(!1)},2e3)},className:(0,i.cn)("absolute z-[1] top-2 right-2 p-1 hover:opacity-100 rounded",x?"opacity-100 bg-success":"opacity-70 bg-background/50"),children:[(0,l.jsxs)("svg",{className:(0,i.cn)("fill-foreground",x?"hidden":"block"),id:"Copy_24",width:"20",height:"20",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("rect",{width:"24",height:"24",stroke:"none",fill:"#000000",opacity:"0"}),(0,l.jsx)("g",{transform:"matrix(1 0 0 1 12 12)",children:(0,l.jsx)("path",{transform:" translate(-12, -12)",d:"M 4 2 C 2.895 2 2 2.895 2 4 L 2 18 L 4 18 L 4 4 L 18 4 L 18 2 L 4 2 z M 8 6 C 6.895 6 6 6.895 6 8 L 6 20 C 6 21.105 6.895 22 8 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 8 C 22 6.895 21.105 6 20 6 L 8 6 z M 8 8 L 20 8 L 20 20 L 8 20 L 8 8 z",strokeLinecap:"round"})})]}),(0,l.jsxs)("div",{className:(0,i.cn)(x?"flex flex-row justify-center bg-green-500/20 p-1 rounded-lg items-center gap-1":"hidden"),children:[(0,l.jsxs)("svg",{className:(0,i.cn)("fill-green-500"),id:"Checkmark_24",width:"18",height:"18",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("rect",{width:"24",height:"24",stroke:"none",fill:"#000000",opacity:"0"}),(0,l.jsx)("g",{transform:"matrix(1.15 0 0 1.15 12 12)",children:(0,l.jsx)("path",{transform:" translate(-12, -11.84)",d:"M 19.28125 5.28125 L 9 15.5625 L 4.71875 11.28125 L 3.28125 12.71875 L 8.28125 17.71875 L 9 18.40625 L 9.71875 17.71875 L 20.71875 6.71875 Z",strokeLinecap:"round"})})]}),(0,l.jsx)("span",{className:(0,i.cn)("text-green-500 font-bold text-xs"),children:"Copied"})]})]}),(0,l.jsx)("div",{className:(0,i.cn)("absolute overflow-y-scroll w-full",o||d?"h-full":"h-fit",m?"pb-20":""),children:(0,l.jsx)(s.f4,{theme:s.Zj.okaidia,code:t,language:n,children:e=>{let{className:r,style:t,tokens:s,getLineProps:a,getTokenProps:i}=e;return(0,l.jsx)("pre",{className:"px-4 py-2 rounded-lg overflow-x-scroll",style:t,children:s.map((e,r)=>(0,l.jsxs)("div",{...a({line:e}),children:[f&&(0,l.jsx)("span",{className:"text-right inline-block mr-4 w-6 text-foreground opacity-50",children:r+1}),e.map((e,r)=>(0,l.jsx)("span",{...i({token:e})},r))]},r))})}})})]})});n.displayName="CodeBlock";let o=n},6719:(e,r,t)=>{"use strict";t.d(r,{Tabs:()=>i,TabsContent:()=>d,TabsList:()=>n,TabsTrigger:()=>o});var l=t(5155),s=t(2115),a=t(9602);let i=(0,s.forwardRef)((e,r)=>{let{defaultKey:t,children:s,className:i="",...n}=e;return(0,l.jsx)(u,{defaultKey:t,children:(0,l.jsx)("div",{ref:r,className:(0,a.cn)("flex flex-col",i),...n,children:s})})});i.displayName="Tabs";let n=(0,s.forwardRef)((e,r)=>{let{className:t="",...s}=e;return(0,l.jsx)("div",{ref:r,className:(0,a.cn)("inline-flex border-b justify-start",t),...s})});n.displayName="TabsList";let o=(0,s.forwardRef)((e,r)=>{let{className:t="",triggerKey:i,children:n,...o}=e,d=(0,s.useContext)(c);if(!d)throw Error("TabsTrigger must be used within an TabKeyProvider");let{tabKey:u,setTabKey:f}=d;return(0,l.jsx)("div",{ref:r,onClick:()=>f(i),className:(0,a.cn)("py-2 w-fit cursor-pointer px-4",u===i?"opacity-100 border-b-2 border-primary":"opacity-50",t),...o,children:n})});o.displayName="TabsTrigger";let d=(0,s.forwardRef)((e,r)=>{let{className:t="",triggerKey:i,...n}=e,o=(0,s.useContext)(c);if(!o)throw Error("TabsContent must be used within an TabKeyProvider");let{tabKey:d}=o;return(0,l.jsx)("div",{ref:r,className:(0,a.cn)(d===i?"":"hidden","pt-3",t),...n})});d.displayName="TabsContent";let c=(0,s.createContext)(null),u=e=>{let{children:r,defaultKey:t}=e,[a,i]=(0,s.useState)(t);return(0,l.jsx)(c.Provider,{value:{tabKey:a,setTabKey:i},children:r})}},9602:(e,r,t)=>{"use strict";t.d(r,{cn:()=>a});var l=t(3463),s=t(9795);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.QP)((0,l.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[181,662,441,517,358],()=>r(1054)),_N_E=e.O()}]);