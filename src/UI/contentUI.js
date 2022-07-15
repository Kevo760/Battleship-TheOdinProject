function contentUI() {
    const content = document.createElement('div');
    content.classList.add('content');


    return document.body.append(content);
};

const removeContentUI = () => {
    const content = document.querySelector('.content');

    return content.remove();
}





export { contentUI, removeContentUI }