function addNewDiv() {
    var newDiv = document.createElement('div');
    newDiv.className = 'centered-text';
    var newParagraph = document.createElement('p');
    newDiv.appendChild(newParagraph);
    var footer = document.querySelector('.footer');
    footer.parentNode.insertBefore(newDiv, footer);
}

addNewDiv();
