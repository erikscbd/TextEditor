const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();
    // Stash the event so it can be triggered later.
    butInstall.hidden = false;
    butInstall.addEventListener('click', (event) => {
        event.prompt();
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed';
    });
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Installed Successfully';
    console.log('Installed Successfully', event);
});
