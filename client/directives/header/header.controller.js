'use strict';

angular.module('whoIsChamp')
    .controller('HeaderCtrl', ["$sce", function ($sce) {
        this.config = {
            sources: [
                {src: $sce.trustAsResourceUrl("assets/videos/JOHNCENA.mp4"), type: "video/mp4"},
                {src: $sce.trustAsResourceUrl("assets/videos/TheChamp.mp4"), type: "video/mp4"},
                {src: $sce.trustAsResourceUrl("assets/videos/YouCantSee.mp4"), type: "video/mp4"}
            ],
            tracks: [
                {
                    src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                    kind: "subtitles",
                    srclang: "en",
                    label: "English",
                    default: ""
                }
            ],
            theme: "bower_components/videogular-themes-default/videogular.css",
            plugins: {
                poster: ""
            }
        };
    }]);
