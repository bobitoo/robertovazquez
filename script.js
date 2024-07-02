function toggleMenu() {
    const sidePanel = document.getElementById('sidePanel');
    const mainContent = document.getElementById('mainContent');

    if (sidePanel.style.right === '0px') {
        sidePanel.style.right = '-35%';
        mainContent.style.marginRight = '0';
    } else {
        sidePanel.style.right = '0';
        mainContent.style.marginRight = '59%';
    }
}


