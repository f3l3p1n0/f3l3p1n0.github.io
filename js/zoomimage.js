var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Seleccionar todas las imágenes con la clase "zoomable-image"
var zoomableImages = document.querySelectorAll('.zoomable-image');

// Agregar el evento onclick a todas las imágenes zoomables
zoomableImages.forEach(function(img) {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    };
});

// Evento onclick para cerrar el modal
modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "modal-content";
     }, 400);
}
