for(let pelicula in peliculas){
    tarjetasVideos.innerHTML +=
    "<div class='tarjeta-video'>"+
        "<img src='"+peliculas[pelicula].portada+"'>"+
        "<div class='info'>"+
            "<div class='nombre'>"+peliculas[pelicula].titulo+"</div>"+
            "<div class='fecha'>"+peliculas[pelicula].fecha+"</div>"+
            "<a href='#Inicio'><div class='play' onclick='PeliPrincipal("+peliculas[pelicula].id+");'><img src='boton-de-play.png'></div><a>"+
        "</div>"+
    "</div>"
}

function PeliPrincipal(id){
    let idBusqueda = id;
    for (let pelicula in peliculas){
        if (peliculas[pelicula].id === idBusqueda){
            PeliculaPlay.innerHTML = 
            "<div class='video-video-container'>"+
                "<video src='"+peliculas[pelicula].video+"' controls poster='"+peliculas[pelicula].poster+"'></video></div>"+
            "<div class='titule-video-container'>"+peliculas[pelicula].titulo+" |<span style='background-color: var(--color-second-bg); margin-left: 20px; color: var(--color-main-text);'>"+peliculas[pelicula].fecha+"</span></div>"+
            "<div class='description-video-container'>"+peliculas[pelicula].sinopsis+"</div>"
        }
    }
}

