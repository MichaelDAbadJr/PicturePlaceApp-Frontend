import{r as n,A as j,b as V,u as E,j as e,a as I,R as P}from"./index-CeC7V2yR.js";import{u as A,I as m,V as C,a as T}from"./form-hook-CTeF-nu7.js";import{u as y,E as R,B as b}from"./http-hook-sUJLLvpC.js";import{C as D}from"./Card-D0ap9KdA.js";/* empty css                  */const U=()=>{const l=n.useContext(j),{isLoading:o,error:c,sendRequest:i,clearError:x}=y(),[a,f]=n.useState(),s=V().placeId,h=E(),[r,p,d]=A({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1);n.useEffect(()=>{(async()=>{try{const t=await i(`https://mern-picture-app.uc.r.appspot.com/api/places/${s}`);f(t.place),d({title:{value:t.title,isValid:!0},description:{value:t.description,isValid:!0}},!0)}catch{}})()},[i,s,d]);const v=async u=>{u.preventDefault();try{await i(`https://mern-picture-app.uc.r.appspot.com/api/places/${s}`,"PATCH",JSON.stringify({title:r.inputs.title.value,description:r.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+l.token}),h("/"+l.userId+"/places")}catch{}};return o?e.jsx("div",{className:"center",children:e.jsx(I,{})}):!a&&!c?e.jsx("div",{className:"center",children:e.jsx(D,{children:e.jsx("h2",{children:"Cound not find place!"})})}):e.jsxs(P.Fragment,{children:[e.jsx(R,{error:c,onClear:x}),!o&&a&&e.jsxs("form",{className:"place-form",onSubmit:v,children:[e.jsx(m,{id:"title",element:"input",type:"text",label:"Title",validators:[C()],errorText:"Please enter a valid title.",onInput:p,initialValue:a.title,initialValid:!0}),e.jsx(m,{id:"description",element:"textarea",label:"Description",validators:[T(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:p,initialValue:a.description,initialValid:!0}),e.jsx(b,{type:"submit",disabled:!r.isValid,children:"UPDATE PLACE"})]})]})};export{U as default};
