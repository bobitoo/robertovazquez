function toggleMenu() {
    const sidePanel = document.getElementById('sidePanel');
    const mainContent = document.getElementById('mainContent');

    if (sidePanel.style.right === '0px') {
        sidePanel.style.right = '-37%';
        mainContent.style.marginRight = '0';
    } else {
        sidePanel.style.right = '0';
        mainContent.style.marginRight = '49%';
    }
}