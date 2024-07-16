import './style.css'

function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello, dynamically created element!';
    element.classList.add('content'); // Apply CSS class
    return element;
}

document.body.appendChild(component());