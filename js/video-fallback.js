/**
 * Video HTML5 Fallback para navegadores antiguos
 * Compatible con IE8+ y navegadores sin soporte <video>
 */

(function() {
    'use strict';
    
    /* DETECCIÓN DE SOPORTE HTML5 VIDEO */
    
    /**
     * Comprueba si el navegador soporta el elemento <video>
     */
    function supportsVideo() {
        return !!document.createElement('video').canPlayType;
    }
    
    /**
     * Comprueba si el navegador puede reproducir un formato específico
     */
    function canPlayType(type) {
        var video = document.createElement('video');
        if (!video.canPlayType) {
            return false;
        }
        
        var support = video.canPlayType(type);
        return support === 'probably' || support === 'maybe';
    }
    
    /**
     * Muestra información sobre el soporte del navegador
     */
    function logVideoSupport() {
        console.log('=== Video HTML5 Support Detection ===');
        console.log('Soporte <video>:', supportsVideo() ? 'SÍ ✓' : 'NO ✗');
        
        if (supportsVideo()) {
            console.log('MP4 (H.264):', canPlayType('video/mp4') ? 'SÍ ✓' : 'NO ✗');
            console.log('WebM:', canPlayType('video/webm') ? 'SÍ ✓' : 'NO ✗');
            console.log('Ogg:', canPlayType('video/ogg') ? 'SÍ ✓' : 'NO ✗');
        }
        console.log('===================================');
    }
    

    /* FALLBACK PARA NAVEGADORES SIN SOPORTE */
    
    /**
     * Activa el fallback mostrando la imagen y el mensaje
     */
    function activateFallback(videoElement) {
        console.warn('Video HTML5 no soportado. Activando fallback...');
        
        // Buscar el contenedor de fallback dentro del video
        var fallbackDiv = videoElement.querySelector('.video-fallback');
        
        if (fallbackDiv) {
            // Ocultar el video
            videoElement.style.display = 'none';
            
            // Mostrar el fallback
            fallbackDiv.style.display = 'block';
            
            // Hacer el fallback visible al padre
            var parent = videoElement.parentNode;
            if (parent) {
                parent.appendChild(fallbackDiv);
            }
        }
    }
    
    /**
     * Maneja el error de carga del video
     */
    function handleVideoError(videoElement) {
        console.error('Error al cargar el video. Mostrando fallback...');
        
        // Mostrar mensaje de error personalizado
        var fallbackDiv = videoElement.querySelector('.video-fallback');
        if (fallbackDiv) {
            var message = fallbackDiv.querySelector('.fallback-message');
            if (message) {
                message.innerHTML = 
                    'No se pudo cargar el video.<br>' +
                    'Por favor, verifica tu conexión a internet o ' +
                    '<a href="' + getFallbackVideoUrl(videoElement) + '" download class="fallback-link">descarga el video</a>.';
            }
        }
        
        activateFallback(videoElement);
    }
    
    /**
     * Obtiene la URL del video para el enlace de descarga
     */
    function getFallbackVideoUrl(videoElement) {
        var source = videoElement.querySelector('source[type="video/mp4"]');
        if (source && source.src) {
            return source.src;
        }
        
        // Fallback: buscar cualquier source
        var anySrc = videoElement.querySelector('source');
        return anySrc ? anySrc.src : '#';
    }
    
    /* MEJORAS DE ACCESIBILIDAD Y UX */
    
    /**
     * Pausa otros videos cuando uno se reproduce
     */
    function pauseOtherVideos(currentVideo) {
        var allVideos = document.querySelectorAll('video');
        for (var i = 0; i < allVideos.length; i++) {
            if (allVideos[i] !== currentVideo && !allVideos[i].paused) {
                allVideos[i].pause();
            }
        }
    }
    
    /**
     * Añade listeners de eventos al video
     */
    function addVideoListeners(videoElement) {
        // Pausar otros videos al reproducir este
        videoElement.addEventListener('play', function() {
            pauseOtherVideos(videoElement);
        });
        
        // Manejo de errores
        videoElement.addEventListener('error', function() {
            handleVideoError(videoElement);
        });
        
        // Log cuando el video esté listo
        videoElement.addEventListener('loadedmetadata', function() {
            console.log('Video cargado correctamente:', videoElement.id || 'video');
            console.log('Duración:', Math.round(videoElement.duration) + 's');
        });
    }
    

    /* INICIALIZACIÓN */
    
    function init() {
        // Mostrar información de soporte
        logVideoSupport();
        
        // Buscar todos los videos en la página
        var videos = document.querySelectorAll('video');
        
        if (videos.length === 0) {
            console.log('No se encontraron elementos <video> en la página');
            return;
        }
        
        console.log('Videos encontrados:', videos.length);
        
        // Procesar cada video
        for (var i = 0; i < videos.length; i++) {
            var video = videos[i];
            
            // Si el navegador NO soporta video, activar fallback
            if (!supportsVideo()) {
                activateFallback(video);
            } else {
                // Si soporta, añadir listeners
                addVideoListeners(video);
            }
        }
    }
    
    /* EJECUTAR AL CARGAR LA PÁGINA */
    
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM ya está listo
        init();
    }
    
})();