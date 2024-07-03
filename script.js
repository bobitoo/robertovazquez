function toggleMenu() {
    const sidePanel = document.getElementById('sidePanel');
    const mainContent = document.getElementById('mainContent');

    if (sidePanel.style.right === '0px') {
        sidePanel.style.display = 'block';
        mainContent.style.display = 'block';
    } else {
        sidePanel.style.display = 'none';
        mainContent.style.display = 'none';
    }
}


