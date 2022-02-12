/* 
	$tabLi: alamacena el elemento html al cual le 
  vamos a aplicar clases con javascript
*/
let $tabLi = document.querySelectorAll("li");

/* 
	$tabContent: alamacena el elemento html al cual le 
  vamos a aplicar clases con javascript
*/
let $tabContent = document.querySelectorAll(".tab_content");

/* 
  realizamos un forEach en la variable $tabLi,
  tomamos el parametro i que nos arroja la posicion
  de un elemento dentro del arreglo
*/
$tabLi.forEach((element, i) => {
  /*
    pasamos a $tabLi el parametro i y le añadimos
    a cada elemento un evento click o podemos 
    reemplazarlo por un evento mouseover
  */
  $tabLi[i].addEventListener("click", () => {
    /* 
      realizamos un forEach en la variable $tabLi,
      y le agregamos a cada elemento la clase
      js_li_active definida en la hoja de estilos
    */
    $tabLi.forEach((li) => {
      li.classList.remove("js_li_active");
    });

    /* 
      realizamos un forEach en la variable $tabContent,
      y le agregamos a cada elemento la clase
      js_content_hidden definida en la hoja de estilos
    */
    $tabContent.forEach((content) => {
      content.classList.add("js_content_hidden");
    });

    /* 
      pasamos a la variable $tabLi el parametro i definido
      forEach inicial y le añadimos la clase
      js_li_active definida en la hoja de estilos
    */
    $tabLi[i].classList.add("js_li_active");

    /* 
      pasamos a la variable $tabContent el parametro i 
      definido en el forEach inicial y le removemos la clase
      js_content_active definida en la hoja de estilos
    */
    $tabContent[i].classList.remove("js_content_hidden");
  });
});
