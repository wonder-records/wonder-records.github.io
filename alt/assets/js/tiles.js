(function ($) {
  $('.tiles').each(function (index, container) {

    $.getRandomSongs(function (tracks) {
      tracks.forEach(function (track) {

        var tileWrapper = $('<div></div>', {
          'class': 'tile-wrapper 2u 3u(medium) 6u(small) 12u$(xsmall)'
        })
        .appendTo(container);

        var tileCover = $('<div></div>', {
          'class': 'tile-cover'
        })
        .css({
          'background-image': 'url(' + track.album.images[0].url + ')'
        })
        .appendTo(tileWrapper);

        var tilePanel = $('<div></div>', {
          'class': 'tile-panel'
        })
        .append($('<h3></h3>').text(track.name))
        .append($('<p></p>').text(track.artists[0].name))
        .appendTo(tileCover);

        var audioPlayer = $("<audio></audio>")
        .attr('src', track.preview_url)
        .appendTo(tileWrapper);

        // example use below
    		// $('#randomSongTitle').html(track.name);
    		// $('#randomSongAlbum').html(track.album.name);
    		// $('#randomSongArtist').html(track.artists[0].name);
        //
    		// $('#randomSongURI').prop('href', track.uri);
    		// $('#randomSongPreview').prop('src', track.preview_url);
    		// $('#randomSongCover').prop('src', track.album.images[0].url);
        //
        // $('#randomSongWords').html(words.join(', '));
    	});
    });
  });
})(jQuery);
