document.onreadystatechange = () => {
    if (document.readyState === 'complete') {

        // Set data-scroll to true when 
        const header = document.getElementById("header");
        window.onscroll = function() {
            const currentScrollPos = window.pageYOffset;
            currentScrollPos > 50 ? header.setAttribute('data-scroll', 'true') : header.setAttribute('data-scroll', 'false');
        }
    }
  };