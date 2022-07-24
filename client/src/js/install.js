const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();
    butInstall.classList.toggle('hidden', false);

});

    butInstall.addEventListener('click', (event) => {
        const promptEvent = window.defferedPrompt();
        if (promptEvent) {
            return;
        }
        promptEvent.prompt();
        window.defferedPrompt = null;
        butInstall.setAttribute('disabled', true);
     
    });


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.defferedPrompt = null;
});
