document.onreadystatechange = () => {
    if (document.readyState === 'complete') {

        // Call Navigation scroll animation
        navigationScroll();
        // pageScrollIndicator();
    }
  };

  // Navigation scroll animation
  function navigationScroll() {
    // const flair = document.getElementById("flair");

    const titleEl = document.getElementsByClassName("title-element");
    var selectedEl = titleEl[0];

    window.onscroll = () => {
        // pageScrollIndicator(flair);

        for (let i = 0; i < titleEl.length; i++) {
            // Get the navigation id by the section on the page
            const navId = document.getElementById("nav-" + titleEl[i].firstElementChild.getAttribute("id"));
            const rect = titleEl[i].getBoundingClientRect(); // get the co-ords of the section
            const isInView = (rect.y >= 0 && rect.y <= 450); // check if the section is in view

            // if the section is in view, set that sections navigation element to data-selected="true"
            if (isInView) {
                navId.setAttribute('data-selected', "true");
                selectedEl = titleEl[i];
            }
            // Don't remove the data-selected attribute but remove remaining data-sected attributes
            else if (titleEl[i] !== selectedEl) { 
                navId.removeAttribute('data-selected');
            }
        }
    }
  }

  function pageScrollIndicator(flair) {
        const pageHeight = document.querySelector("body").scrollHeight - (window.innerHeight / 2);
        const bodyTop = document.querySelector("body").getBoundingClientRect().top;
        var percentage = (Math.abs(bodyTop) / pageHeight) * 100;
        flair.style.left = percentage + "%";
}