function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'flex';
        console.log('Sidebar shown');
    } else {
        console.error('Sidebar element not found');
    }
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'none';
        console.log('Sidebar hidden');
    } else {
        console.error('Sidebar element not found');
    }
}
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        if (sidebar.style.display === 'none' || sidebar.style.display === '') {
            sidebar.style.display = 'flex';
            console.log('Sidebar toggled on');
        } else {
            sidebar.style.display = 'none';
            console.log('Sidebar toggled off');
        }
    } else {
        console.error('Sidebar element not found');
    }
}
document.addEventListener('DOMContentLoaded', function () {
    console.log('Document loaded, initializing script...');
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function () {
            alert('Button clicked!');
            console.log('Button was clicked!');
            toggleSidebar();
        });
    } else {
        console.error('Button element not found');
    }
    const showButton = document.getElementById('showSidebarButton');
    const hideButton = document.getElementById('hideSidebarButton');
    if (showButton) {
        showButton.addEventListener('click', function () {
            showSidebar();
            console.log('Show button clicked');
        });
    } else {
        console.error('Show button element not found');
    }
    if (hideButton) {
        hideButton.addEventListener('click', function () {
            hideSidebar();
            console.log('Hide button clicked');
        });
    } else {
        console.error('Hide button element not found');
    }
});
var button = document.getElementById('myButton');
if (button) {
    button.addEventListener('click', function () {
        alert('Button clicked again!');
        console.log('Button was clicked again!');
    });
} else {
    console.error('Button element not found outside of DOMContentLoaded');
}
console.log('Script loaded and waiting for user interaction...');
