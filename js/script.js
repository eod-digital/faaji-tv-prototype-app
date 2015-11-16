var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var description = 'RMXO is a pan-African urban music channel showcasing talents from around the continent';
var picture = 'images/channel-artworks/rmxo.jpg'

document.addEventListener("DOMContentLoaded", onDocumentReady);

function onDocumentReady() {
  document.querySelector('.channels').addEventListener("click", function(event){
    var channel = getChannel(event.target.id);
    if (channel) {
      player.loadPlaylist({
        list: channel['playlist'],
        listType:'playlist',
      });
      description = channel['description'];
      picture = channel['artwork'];
    }
  });
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    playerVars: {
      listType:'playlist',
      list: 'RDQ7QiLceJSLQ',
      autoplay: 1,
      disablekb: 1,
      iv_load_policy: 3,
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.mute();
}

function onPlayerStateChange(event) {
  var videoData = event.target.getVideoData();
  document.querySelector('.video-title-dynamic').innerHTML = videoData.title
  document.querySelector('.video-source-dynamic').innerHTML = videoData.author
  document.querySelector('.channel-description').innerHTML = description;
  document.querySelector('#main-picture').src = picture;
}

function getChannel(channel) {
    var channels = {
    rmxo: {
      description: 'RMXO is a pan-African urban music channel showcasing talents from around the continent',
      playlist: 'RDQ7QiLceJSLQ',
      artwork: 'images/channel-artworks/rmxo.jpg'
    },
    popcorn: {
      description: 'Latest Nollywood movie drama',
      playlist: 'PLUHuM0g065apVLOK7Co7xlg2BvPadrvu5',
      artwork: 'images/channel-artworks/popcorn.jpg'
    },
    tedTalk: {
      description: 'TED Talks shares the best ideas from the TED Conference with the world.',
      playlist: 'PLOGi5-fAu8bHnnG6iuIUMOuZRaBKEal7O',
      artwork: 'images/channel-artworks/ted-talk.jpg'
    },
     nyal: {
       description: 'Now You Are Laughing.',
       playlist: 'PLoBNoZLQkrBYUpxcEEhxJxNESZtr3v19E',
       artwork: 'images/channel-artworks/nyal.jpg'
     }
  };

  return channels[channel];
};
