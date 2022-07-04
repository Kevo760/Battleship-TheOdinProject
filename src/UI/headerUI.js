function createHeaderUI(name) {
    const header = document.createElement('header');
    header.style.backgroundColor = 'rgb(59, 59, 59)';
    header.style.color = 'white';
    header.style.position = 'fixed';
    header.style.width = '100%';
    header.style.height = '4rem';
    header.style.left = '0';
    header.style.top = '0';
    header.style.display = 'flex';
    header.style.justifyContent = 'center';
    header.style.alignItems = 'center';
    header.style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
    header.style.padding = '1rem '


    const h1 = document.createElement('h1');
    h1.classList.add('header-title');
    h1.innerText = name;

    header.append(h1);
 

    return document.body.append(header);
};


export {createHeaderUI};