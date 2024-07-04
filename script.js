function toggleMenu() {
    const sidePanel = document.getElementById('sidePanel');
    const mainContent = document.getElementById('mainContent');

    if (sidePanel.style.top === '15%') {
        sidePanel.style.top = '-55%';
        mainContent.style.marginTop = '0';
    } else {
        sidePanel.style.top = '15%';
        mainContent.style.marginTop = '99%';
    }
}


