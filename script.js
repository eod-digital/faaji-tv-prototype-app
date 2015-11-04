var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
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
}
