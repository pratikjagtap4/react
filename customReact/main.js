const rootElement = document.getElementById("root");

function customRender(rootElement , reactElement){
    // const domElement = document.createElement(reactElement.type); 
    // domElement.innerHTML = reactElement.children;

    // domElement.setAttribute("href" , reactElement.props.href);
    // domElement.setAttribute("target" , reactElement.props.target);

    // rootElement.appendChild(domElement);


    const domElement = document.createElement(reactElement.type);
    const textNode = document.createTextNode(reactElement.children);
    domElement.appendChild(textNode);

    for (const prop in reactElement.props) {
        if(prop === "children") {
            continue
        }
        domElement.setAttribute(prop , reactElement.props[prop] );
        
        
    }

    rootElement.appendChild(domElement);
}



const reactElement = {
    type : "a",
    props : {
        href: "https://www.google.com/",
        target: "_blank"
    },
    children : "click here to visit google"
}

customRender(rootElement , reactElement);
