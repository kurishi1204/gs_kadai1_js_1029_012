// chapter00
$('#start_btn').click(function () {
        $('.cp_00_wrapper').hide();
        $('.cp_01_wrapper').show();
});


// chapter01
let chapter01_story = 1;
$('#next_text_btn_01').click(function () {
    console.log(chapter01_story);
    if (chapter01_story === 1) {
        $('#conversation01').text("どこかにお金を出してくれるスーパーエンジェル投資家はいないものか・・");
        chapter01_story = chapter01_story + 1;
    }else if  (chapter01_story === 2){
        $('#conversation01').text("ちょうど渋谷で個人投資家向けのピッチ会があるらしい、、飛び入り参加するぞ！");
        chapter01_story = chapter01_story + 1;
    }else {
            $('.cp_01_wrapper').hide();
            $('.cp_02_wrapper').show();
            // チャプター01を隠して、チャプター02を表示
    }
    console.log(chapter01_story);
    
});


// chapter02
$('#next_text_btn_02').click(function () {
    $('.cp_02_wrapper').hide();
    $('.cp_03_wrapper').show();
});


// chapter03 デザイナー編
let chapter03_story = 1;
$('#next_text_btn_03').click(function () {
    console.log(chapter03_story);
    if (chapter03_story == 1) {
        $('#conversation03').text("すごい熱気だ。。！絶対にピッチを成功させるぞ！");
        chapter03_story = chapter03_story + 1;
    } else if (chapter03_story == 2) {
        $('#talker03').text("▶︎個人投資家A");
        $('.person_box_bottom_right').css('opacity', '1.0'); //応募者を表示
        $('#conversation03').text("資産運用に成功したのでスタートアップ投資を始めました。");
        chapter03_story = chapter03_story + 1;
    } else if (chapter03_story == 3) {
        $('#talker03').text("▶︎個人投資家A");
        $('#conversation03').text("面白い会社なら投資検討したいです。ピッチよろしくお願いします！");
        chapter03_story = chapter03_story + 1;
    } else if (chapter03_story == 4) {
        $('#talker03').text("▶︎あなた");
        $('#conversation03').text("よし、ピッチバトルだ！");
        chapter03_story = chapter03_story + 1;
    } else if (chapter03_story == 5) {  
        // html側で表示。プレイヤーおよび応募者のコメントを空白にし、マッチ結果表示部分を非公開へ。htmk側のバトル宣言を表示。
        $('#talker03').text("");
        $('#conversation03').text("");
        $('#matching_result_miss03').hide();
        $('.start_occupation').show(); //非表示だった部分を表示
        chapter03_story = chapter03_story + 1;
    } else if (chapter03_story == 6) {
        // バトル処理
        $('#talker03').hide();
        $('.person_box_top').css('opacity', '1.0')
        $('.start_occupation').hide(); //htmk側の文章消す
        $('#cp_03_choice_box').show(); //選択肢を表示→表示された選択肢ボックスからfight/jsの処理へ移行
        $('#next_text_btn_03').hide(); //テキストを次に進めるボタンを消す
    } else if (chapter03_story == 7) {
        $('#matching_result_success03').hide();
        $('#talker03').text("▶︎あなた");
        $('#conversation03').text("最初の出資者を確保できたぞ！");
        chapter03_story = chapter03_story + 1;
    } else if (chapter03_story == 8) {
        $('#talker03').text("▶︎あなた");
        $('#conversation03').text("でも、まだ資金が不足しているから次の出資者を探そう！");
        chapter03_story = chapter03_story + 1;
    } else{
        $('.person_box_bottom_right').css('opacity', '0');
        $('.person_box_top').css('opacity', '0');
        $('.cp_03_wrapper').hide();
        $('.cp_04_wrapper').show();

        //次のチャプターがないためここで最初の画面へ戻る処理
        setTimeout(function () {
            location.reload();
        }, 2000);
    }
    console.log(chapter03_story);
});
// ここまで チャプター03

