// tooltips
function tooltips() {
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

    tooltipTriggerList.map((tooltipTriggerElement) => {
        return new bootstrap.Tooltip(tooltipTriggerElement);
    });
}

// toast newsletter 
function toastNewsletter() {
    const toastTriggerNewsletter = document.getElementById('live-toast-btn-newsletter')
    const toastLiveNewsletter = document.getElementById('live-toast-newsletter')

    if (toastTriggerNewsletter) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveNewsletter)
        toastTriggerNewsletter.addEventListener('click', () => {
            toastBootstrap.show()
        })
    }
}

tooltips();

toastNewsletter();