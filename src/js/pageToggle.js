export default function () {
  const tabs = document.querySelector('.header__location-list');
  tabs.onclick = (evt) => {
    const headers = tabs.children;
    const pages = document.querySelector('.container').children;
    const targetLocation = evt.target.id;
    
    for (let header of headers) {
      if (header.id === targetLocation) {
        header.classList.add('selected');
      } else {
        header.classList.remove('selected');
      }
    }

    for (let page of pages) {
      if (page.id === targetLocation) {
        page.classList.add('selected');
      } else {
        page.classList.remove('selected');
      }
    }
  }
}