function toggle() {
    const btn = document.createElement('div');
    btn.classList.add('button');
    btn.id = 'button-16';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    const knobs = document.createElement('div');
    knobs.classList.add('knobs');

    const layer = document.createElement('div');
    layer.classList.add('layer');

    btn.append(checkbox);
    btn.append(knobs);
    btn.append(layer);
    
    return btn;
};

export { toggle }