window.onload = () => {
    const html = document.querySelector('html').dataset;
    window.onresize = () => {
        const val = window.innerHeight+'px';
        bckgrd.style.height = start.style.minHeight = end.style.minHeight = val;
    };
    window.onresize();
    let isVisible = false;
    window.addEventListener('scroll', () => {
        html.scroll = window.scrollY;

        if(window.scrollY > window.innerHeight) {
            if(!isVisible) {
                isVisible = true;
                topBtn.style.display = 'flex';
            }
        } else {
            if(isVisible) {
                isVisible = false;
                topBtn.style.display = 'none';
            }
        }
    });
}