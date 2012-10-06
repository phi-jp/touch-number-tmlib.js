/*
 * main.js
 */


/*
 * global
 */
var app = null;



/*
 * main
 */
tm.main(function() {
    app = tm.app.CanvasApp("#world");
    app.fps = FRAME_RATE;
    app.resize(SCREEN_WIDTH, SCREEN_HEIGHT);
    app.fitWindow();
    //app.enableStats();
    
    // タイトルシーン生成
    //var titleScene = MainScene();
    var titleScene = TitleScene();
    app.replaceScene(titleScene);
    
    app.run();
});



/*
 * タイトルシーン
 */
var TitleScene = tm.createClass({
    superClass: tm.app.Scene,
    
    init: function() {
        this.superInit();
        
        this.fromJSON(UI_DATA.title);
        
        // ゲーム開始
        this.playLabel.ontouchstart = function() {
            app.replaceScene(MainScene());
        }
    }
});



/*
 * メインシーン
 */
var MainScene = tm.createClass({
    superClass: tm.app.Scene,
    
    init: function() {
        this.superInit();
        
        this.fromJSON(UI_DATA.main);
        
        this.currentIndex = 1;
        
        
        // ピース生成
        var pieceList = [];
        var self = this;
        for (var i=0; i<PIECE_NUM; ++i) {
            var p = Piece(i+1);
            
            p.ontouchstart = function() {
                if (this.number == self.currentIndex) {
                    self.currentIndex += 1;
                    
                    this.disable();
                    
                    tm.sound.SoundManager.get("pinpon").play();
                }
                else {
                    tm.sound.SoundManager.get("boo").play();
                }
            }
            
            pieceList.push(p);
            this.addChild(p);
        }
        
        // シャッフル
        pieceList.shuffle();
        
        // 位置調整
        for (var i=0; i<PIECE_NUM; ++i) {
            var p = pieceList[i];
            
            p.x = i%PIECE_X_NUM * PIECE_WIDTH + OFFSET_X + 1;
            p.y = Math.floor(i/PIECE_X_NUM) * PIECE_HEIGHT + OFFSET_Y + 1;
            
            p.x += PIECE_WIDTH/2;
            p.y += PIECE_HEIGHT/2;
        }
    }
});



/*
 * ピース
 */
var Piece = tm.createClass({
    superClass: tm.app.Shape,
    
    init: function(n) {
        this.superInit(PIECE_WIDTH-2, PIECE_HEIGHT-2);
        
        this.number = n;
        this.enable = true;
        
        var c = this.canvas;
        c.clearColor("white");
        
        // ラベル
        this.label = tm.app.Label(n).addChildTo(this);
        this.label.width = this.width;
        this.label.height = this.height;
        this.label.fillStyle = "black";
        this.label.fontSize = 20;
        this.label.align = "center";
        this.label.baseline = "middle";
        
        // タッチを有効化
        this.interaction.enabled = true;
        this.interaction.boundingType = "rect";
    },
    
    disable: function() {
        var c = this.canvas;
        c.clearColor("gray");
        this.enable = false;
    },
    
    onpointingover: function() {
        if (!this.enable) return ;
        var c = this.canvas;
        c.clearColor("#ccc");
        console.log("a");
    },
    
    onpointingout: function() {
        if (!this.enable) return ;
        var c = this.canvas;
        c.clearColor("white");
    }
});
















