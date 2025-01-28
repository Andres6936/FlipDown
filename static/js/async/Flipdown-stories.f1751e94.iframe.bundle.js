"use strict";(self.webpackChunkreact_flipdown=self.webpackChunkreact_flipdown||[]).push([["441"],{"./src/Flipdown.stories.ts":function(e,r,t){t.r(r),t.d(r,{Primary:()=>L,__namedExportsOrder:()=>R,default:()=>_});var s=t("../../node_modules/react/jsx-runtime.js"),o=t("../../node_modules/react/index.js"),i=t("../../node_modules/styled-components/dist/styled-components.browser.esm.js");let n=()=>{let e=(0,o.useRef)(!0);return(0,o.useEffect)(()=>{e.current=!1},[]),e.current},a=(0,i.iv)`
    color: light-dark(#FFFFFF, #222222);
    background-color: light-dark(#202020, #DDDDDD);
`,d=(0,i.iv)`
    color: light-dark(#EFEFEF, #333333);
    background-color: light-dark(#202020, #EEEEEE);
`,l=i.ZP.div`
    position: relative;
    float: left;
    width: 50px;
    height: 80px;
    margin: 0 5px 0 0;
    border-radius: 4px;
    font-size: 4rem;
    text-align: center;
    perspective: 200px;
    color: light-dark(#FFFFFF, #222222);
    background-color: light-dark(#202020, #DDDDDD);
    
    &:last-child {
        margin-right: 0;
    }
    
    &:after {
        content: '';
        z-index: 2;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 40px;
        border-radius: 0 0 4px 4px;
        border-top: solid 1px light-dark(#151515, #222222);
    }
`,u=i.ZP.div`
    overflow: hidden;
    position: absolute;
    width: 50px;
    height: 40px;
`,p=(0,i.ZP)(u)`
    line-height: 80px;
    border-radius: 4px 4px 0 0;

    ${a}
`,c=(0,i.ZP)(u)`
    bottom: 0;
    line-height: 0;
    border-radius: 0 0 4px 4px;

    ${d}
`,h=i.ZP.div`
    z-index: 1;
    position: absolute;
    width: 50px;
    height: 80px;
    transform-style: preserve-3d;
    
    
    &.flipped {
        transform: rotateX(-180deg);
        transition: all ${.5}s ease-in-out;
    }
`,m=i.ZP.figure`
    overflow: hidden;
    position: absolute;
    width: 50px;
    height: 40px;
    margin: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
`,g=(0,i.ZP)(m)`
    line-height: 0;
    border-radius: 0 0 4px 4px;
    transform: rotateX(-180deg);

    ${d}
`,b=(0,i.ZP)(m)`
    line-height: 80px;
    border-radius: 4px 4px 0 0;

    ${a}
`;function v(e){let{value:r,prevValue:t}=e,i=(0,o.useRef)(null),a=n(),[d,u]=o.useState(r),[m,v]=o.useState(t);return(0,o.useEffect)(()=>{i.current&&!a&&(i.current.classList.remove("flipped"),setTimeout(()=>{var e;null===(e=i.current)||void 0===e||e.classList.add("flipped"),u(r)},500),setTimeout(()=>{v(t)},800))},[r,t]),(0,s.jsxs)(l,{children:[(0,s.jsxs)(h,{ref:i,children:[(0,s.jsx)(g,{children:d}),(0,s.jsx)(b,{children:m})]}),(0,s.jsx)(p,{children:d}),(0,s.jsx)(c,{children:m})]})}v.__docgenInfo={description:"",methods:[],displayName:"Rotor",props:{value:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},prevValue:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};let f=i.ZP.div`
    display: flex;
    justify-content: center;
    column-gap: 0.3rem;
`,x=(0,i.iv)`
    content: '';
    position: absolute;
    left: 115px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
`,w=(0,i.iv)`
    &:nth-child(n+2):nth-child(-n+3):before {
        ${x};
        bottom: 20px;
        background-color: light-dark(#151515, #DDDDDD);
    }

    &:nth-child(n+2):nth-child(-n+3):after {
        ${x};
        bottom: 50px;
        background-color: light-dark(#151515, #DDDDDD);
    }
`,y=i.ZP.div`
    position: relative;
    float: left;
    padding-right: 30px;

    &:last-child {
        padding-right: 0;
    }

    ${e=>e.hiddenSeparators?null:w}
`,k=i.ZP.div`
    &:before {
        display: ${e=>e.hidden?"none":"block"};
        height: 30px;
        line-height: 30px;
        text-align: center;
    }

    &:before {
        color: light-dark(#000000, #EEEEEE);
        content: '${e=>e.title}';
    }
`;function D(e){let{title:r,value:t,showLabels:i=!0,showSeparators:n=!0}=e,[a,d]=(0,o.useMemo)(()=>String(t.current).padStart(2,"0").split(""),[t.current]),[l,u]=(0,o.useMemo)(()=>String(t.previous).padStart(2,"0").split(""),[t.previous]);return(0,s.jsxs)(y,{hiddenSeparators:!n,children:[(0,s.jsx)(k,{title:r,hidden:!i}),(0,s.jsxs)(f,{children:[(0,s.jsx)(v,{value:a,prevValue:l}),(0,s.jsx)(v,{value:d,prevValue:u})]})]})}D.__docgenInfo={description:"",methods:[],displayName:"RotorGroup",props:{title:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n    current: number,\n    previous: number,\n}",signature:{properties:[{key:"current",value:{name:"number",required:!0}},{key:"previous",value:{name:"number",required:!0}}]}},description:""},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showSeparators:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};let S=e=>e>=365?365:e<0?0:e,j=e=>e>=24?24:e<0?0:e,E=e=>e>=60?60:e<0?0:e,F=e=>e>=60?60:e<0?0:e,q=(e,r)=>{let t=new Date().getTime()/1e3,s=e-t<=0?0:e-t,o=Math.floor(s/86400),i=Math.floor((s-=86400*o)/3600),n=Math.floor((s-=3600*i)/60),a=Math.floor(s-=60*n);return{days:{current:o,previous:r?o:S(o-1)},hours:{current:i,previous:r?i:j(i-1)},minutes:{current:n,previous:r?n:E(n-1)},seconds:{current:a,previous:r?a:F(a-1)}}},T=i.ZP.div`
    display: flex;
    column-gap: 1.5rem;
    justify-content: center;
    overflow: visible;
    font-family: sans-serif;
    font-weight: bold;

    @media (prefers-color-scheme: dark) {
        & {
            color-scheme: dark;
        }
    }

    @media (prefers-color-scheme: light) {
        & {
            color-scheme: light;
        }
    }
`;function P(e){let{epoch:r,ifEnded:t,...i}=e,a=n(),[d,l]=(0,o.useState)(!1),[u,p]=(0,o.useState)(!1),[c,h]=(0,o.useState)(q(r,a)),m=(0,o.useMemo)(()=>{var e,r,t,s;return{days:(null===(e=i.labels)||void 0===e?void 0:e.days)||"Days",hours:(null===(r=i.labels)||void 0===r?void 0:r.hours)||"Hours",minutes:(null===(t=i.labels)||void 0===t?void 0:t.minutes)||"Minutes",seconds:(null===(s=i.labels)||void 0===s?void 0:s.seconds)||"Seconds"}},[i.labels]),g=(0,o.useCallback)(()=>!!d||!!(r-new Date().getTime()/1e3<=0)&&(l(!0),t&&!u&&(t(),p(!0)),!0),[]);return(0,o.useEffect)(()=>{let e=setInterval(()=>{g(),h(q(r,a))},1e3);return()=>clearInterval(e)},[]),(0,s.jsxs)(T,{children:[(0,s.jsx)(D,{title:m.days,value:c.days,showLabels:i.showLabels,showSeparators:i.showSeparators}),(0,s.jsx)(D,{title:m.hours,value:c.hours,showLabels:i.showLabels,showSeparators:i.showSeparators}),(0,s.jsx)(D,{title:m.minutes,value:c.minutes,showLabels:i.showLabels,showSeparators:i.showSeparators}),(0,s.jsx)(D,{title:m.seconds,value:c.seconds,showLabels:i.showLabels,showSeparators:i.showSeparators})]})}P.__docgenInfo={description:"",methods:[],displayName:"Flipdown",props:{epoch:{required:!0,tsType:{name:"number"},description:""},ifEnded:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},labels:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n    days: string,\n    hours: string,\n    minutes: string,\n    seconds: string,\n}",signature:{properties:[{key:"days",value:{name:"string",required:!0}},{key:"hours",value:{name:"string",required:!0}},{key:"minutes",value:{name:"string",required:!0}},{key:"seconds",value:{name:"string",required:!0}}]}},description:""},showLabels:{required:!1,tsType:{name:"boolean"},description:""},showSeparators:{required:!1,tsType:{name:"boolean"},description:""}}};let _={title:"Example/Flipdown",component:P},L={args:{epoch:new Date().getTime()/1e3+172800+1,labels:{days:"D\xedas",hours:"Horas",minutes:"Minutos",seconds:"Segundos"}}},R=["Primary"];L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"{\n  args: {\n    // Unix timestamp (in seconds) to count down to\n    epoch: new Date().getTime() / 1000 + 86400 * 2 + 1,\n    labels: {\n      days: 'D\xedas',\n      hours: 'Horas',\n      minutes: 'Minutos',\n      seconds: 'Segundos'\n    }\n  } satisfies Props\n}",...L.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Flipdown-stories.f1751e94.iframe.bundle.js.map