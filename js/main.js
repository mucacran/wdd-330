const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week1 notes",
      url: "week2/index.html"
    }
  ]

function loadIndex(){
   const ol = document.querySelector('#linkList');

   links.forEach(links => {
    const li = document.createElement('li');
    const href = document.createElement('a');
    href.setAttribute('href', links.url);
    href.innerText = links.label;

    li.appendChild(href);
    ol.appendChild(li);
   })
}