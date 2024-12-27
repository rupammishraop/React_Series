const container = document.querySelector('.root');

const coutomRender = (reactElement,container) =>{
        let costumTag = document.createElement(reactElement.type);
        costumTag.innerHTML = reactElement.children;
        costumTag.setAttribute('href', reactElement.props.href);
        costumTag.setAttribute('target', reactElement.props.target);
        container.appendChild(costumTag)
}


const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'click Google'

}
coutomRender(reactElement, container);
