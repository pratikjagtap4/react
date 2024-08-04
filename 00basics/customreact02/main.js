function customRender(element , root)
{
    const ele = document.createElement(element.type);
    ele.innerHTML = element.children;

   for (const p in element.props) {
        ele.setAttribute(p , element.props[p])
   }

    root.appendChild(ele)
}
const root = document.getElementById("root");

const element ={
    type : 'a',
    props : {
        href : 'https://www.google.com/',
        target : '_blank'
    },
    children : 'click here to visit google' 
}

customRender(element , root);