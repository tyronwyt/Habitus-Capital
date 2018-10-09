document.onreadystatechange = () => {
    if (document.readyState === 'complete') {

        // Set data-scroll to true when 
        window.onscroll = function() {
            const currentScrollPos = window.pageYOffset;
            currentScrollPos > 50 ? toggleNavBar('expand') : toggleNavBar('contract');
        }
    }
  };

  function toggleNavBar(state) {
      const header = document.getElementById("header");
      const logo = document.getElementById("logo");
      const logoSml = document.getElementById("logo-sml");
      if (state == 'expand') {
        header.setAttribute('data-scroll', 'true');
        logo.setAttribute('style', 'display:none');
        logoSml.setAttribute('style', 'display:block');
      } else {
        header.setAttribute('data-scroll', 'false');
        logo.setAttribute('style', 'display:block');
        logoSml.setAttribute('style', 'display:none');
      }
  }