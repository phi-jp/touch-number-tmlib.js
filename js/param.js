/*
 * param.js
 */


/*
 * param
 */
var FRAME_RATE      = 30;
var SCREEN_WIDTH    = 480;
var SCREEN_HEIGHT   = 720;
var SCREEN_CENTER_X = SCREEN_WIDTH/2;
var SCREEN_CENTER_Y = SCREEN_HEIGHT/2;
var BOARD_WIDTH     = 460;
var BOARD_HEIGHT    = 460;
var PIECE_X_NUM     = 10;
var PIECE_Y_NUM     = 10;
var PIECE_NUM       = PIECE_X_NUM*PIECE_Y_NUM;
/*
var OFFSET_X        = 25;
var OFFSET_Y        = 25;
var PIECE_WIDTH     = (SCREEN_WIDTH-(OFFSET_X*2))/PIECE_X_NUM;
var PIECE_HEIGHT    = (SCREEN_WIDTH-(OFFSET_X*2))/PIECE_X_NUM;
*/

var OFFSET_X        = (SCREEN_WIDTH-BOARD_WIDTH)/2;
var OFFSET_Y        = 150;
var PIECE_WIDTH     = BOARD_WIDTH / PIECE_X_NUM;
var PIECE_HEIGHT    = BOARD_HEIGHT / PIECE_Y_NUM;


var UI_DATA = {
    title: {
        children: [
            { type: "Label", name: "titleLabel", x:SCREEN_CENTER_X, y:150, width:SCREEN_WIDTH, text:"暇人の遊び", align:"center", fontSize:40 },
            { type: "LabelButton", name: "playLabel", x:SCREEN_CENTER_X, y:360, width:150, width:SCREEN_WIDTH, text:"遊ぶ", align:"center", fontSize:25 },
            { type: "LabelButton", name: "tweetLabel", x:SCREEN_CENTER_X, y:420, width:150, width:SCREEN_WIDTH, text:"ツイート", align:"center", fontSize:25 },
            { type: "LabelButton", name: "rankingLabel", x:SCREEN_CENTER_X, y:480, width:150, width:SCREEN_WIDTH, text:"ランキング", align:"center", fontSize:25 },
        ]
    },
    main: {
        children: [
            { type: "Label", name: "titleLabel", x:SCREEN_CENTER_X, y:100, width:SCREEN_WIDTH, text:"暇人の遊び", align:"center", fontSize:40 },
        ]
    },
};



/*
 * preload
 */
tm.preload(function() {
    
    tm.sound.SoundManager.add("pinpon", "sound/pinpon");
    tm.sound.SoundManager.add("boo", "sound/boo");
    
});

