const link = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]

function loadIndex(){
   const ol = document.querySelector('#linkList');

   links.forEach(links => {
    const li = document.createElement('li');
    const href = document.createElement('a');
    href.setAttribute('href', link.url);
    href.innerText = link.label;

    li.appendChild(href);
    ol.appendChild(li);
   })
}