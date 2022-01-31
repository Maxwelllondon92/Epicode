function player() {
    this.audioFiles = [];
    this.videoFiles = [];
    this.mediaPath = '';
    this.types = {
        AUDIO: 'audio',
        VIDEO: 'video'
    };
    this.playMedia = function (path, type) {
        let media = $(type)[0];
        media.setAttribute('src', this.mediaPath + '/' + type + '/' + path);
        media.play();
    }
}

let app = {
    player : new player(),
    jsonData : 'assets/js/media.json',
    audioList: '#audioList',
    videoList: '#videoList',
    init: function () {
        app.player.mediaPath = 'assets';
        app.loadMedia();
    },
    loadMedia: function () {
        $.ajax({
            url: app.jsonData,
            type: 'get',
            dataType: 'json',
            success: function (response) {
                app.player.audioFiles = response.audio;
                app.player.videoFiles = response.video;
                app.buildUI();
            }
        });
    },
    buildUI: function () {
        audio_str= '';
        video_str= '';
        for (i = 0; i < app.player.audioFiles.length; i++) {
            audio_str += '<li class="list-group-item" onClick="app.player.playMedia(\'' + app.player.audioFiles[i].file + '\', \'' + app.player.types.AUDIO + '\')">' + app.player.audioFiles[i].title + '</li>'
        }
        for (i = 0; i < app.player.videoFiles.length; i++) {
            video_str += '<li class="list-group-item" onClick="app.player.playMedia(\'' + app.player.videoFiles[i].file + '\', \'' + app.player.types.VIDEO + '\')">' + app.player.videoFiles[i].title + '</li>'
        }
        $(app.audioList).html(audio_str);
        $(app.videoList).html(video_str);
    }
}

$(document).ready(app.init)