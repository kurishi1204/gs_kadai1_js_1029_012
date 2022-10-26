// ステージの進行具合を制御
let currentStage = 1;

// プレイヤーの体力
let applicantHp = 100;
let playerHp = 100;

// たくわえた倍率の値
let playerCharge = 1;
let applicantCharge = 1;

function randomNumber() {
    const min = 0;
    const max = 2;
    const randomNumber = Math.floor(Math.random()* (max - min + 1)) + min;
    console.log("ランダムナンバーは" + randomNumber);
    return randomNumber;
}

function loseRoute(){
    if (currentStage === 1) {
        $('#matching_result_miss03').show();
        $('#conversation03').text("負けてしまった。 目の前が真っ暗になった。");
    } 
}


function validationJudge() {
    // プレイヤーが負けた時の処理
    //【check】相打ちの処理がないため追加が必要そう
    if (playerHp <= 0) {
        console.log('負け');
        loseRoute();
        setTimeout(function () {
        location.reload();
    }, 2000);
    //プレイヤーが勝った際の処理
    } else if (applicantHp <= 0) {
        $('.battle_conversation').text("");
        currentStage = currentStage + 1;
        if (currentStage == 2) {
            $('#next_text_btn_03').show(); //メッセージ画面表示
            $('#cp_03_choice_box').hide(); //選択肢非表示
            $('#matching_result_success03').show(); //マッチング結果の表示
            $('#conversation03').text("ピッチ成功！ << 個人投資家Aから100万円の出資をGETした！>> ");
            $('#conversation03').show(); //メッセージ表示
            applicantHp = 105;
            playerHp = 100;
            chapter03_story = chapter03_story + 1; //この先のシナリオがある場合はこちらを活用して遷移
            console.log('勝利');
        } else { }
    } else { }
}

// 体力ゲージの表示操作
function validationHp () {
    if (currentStage === 1) {
        $('#applicant_current_hp03').css('width', applicantHp + '%');
        $('#player_current_hp03').css('width', playerHp+ '%');
    } 
}

// 相手：攻撃
function applicantHandAttack() {
    if (currentStage === 1) {
        $('#conversation03').text("相手は 質問攻撃を繰り出してきた!!");
    } 
}

// 相手：チャージ
function applicantHandCharge() {
    if (currentStage === 1) {
        $('#conversation03').text("相手は 思考整理（チャージ）している。");
    } 
}

// 相手：防御
function applicantHandDefense() {
    if (currentStage === 1) {
        $('#conversation03').text("相手は 様子見（防御）している。");
    } 
}

// playerはこうげき
$('#attack03').click(function () {
    attackModel();
})


// こうげき動作（プレイヤーのチョイス選択をトリガーに、P攻撃→相手攻撃までの流れを都度処理）
function attackModel() {
    const playerAttack = 10 * playerCharge;
    const applicantAttack = randomNumber();
    if (applicantAttack === 0) {
        applicantHandAttack();
        // 応募者はこうげき
        // playerの攻撃処理
        applicantHp = applicantHp - playerAttack;
        // applicantの攻撃処理
        playerHp = playerHp - (10 * applicantCharge);
        applicantCharge = 1; //チャージされていた数字を攻撃を受けたためリセット
        console.log("＝応募者はこうげき＝")
    } else if (applicantAttack === 1) {
        applicantHandCharge();
        // 応募者はたくわえる
        // playerの攻撃処理
        applicantHp = applicantHp - playerAttack; //プレイヤーの攻撃で応募者がダメージ
        // 応募者の処理
        applicantCharge = applicantCharge * 1.5; //応募者にチャージ分上乗せ
        console.log("＝応募者はたくわえる＝")
    } else {
        applicantHandDefense();
        // 応募者はまもる
        // playerの攻撃は無効化される→
        console.log("＝応募者はまもる＝")
    }
    playerCharge = 1; // プレイヤーが攻撃完了した時点でチャージをリセット

    validationHp();

    console.log("プレイヤーチャージは" + playerCharge + "です");
    console.log("プレイヤーの体力は" + playerHp + "です");
    console.log("応募者チャージは" + applicantCharge + "です");
    console.log("応募者の体力は" + applicantHp + "です");

    validationJudge();
}



//playerはたくわえる
$('#charge03').click(function () {
    chargeModel();
})
$('#charge04').click(function () {
    chargeModel();
})

// たくわえる動作
function chargeModel() {
    playerCharge = playerCharge * 1.5;
    const applicantAttack = randomNumber();
    if (applicantAttack === 0) {
        applicantHandAttack();
        // 応募者はこうげき
        // applicantの攻撃処理
        playerHp = playerHp - (10 * applicantCharge);
        applicantCharge = 1;
        console.log("＝投資家はこうげき＝")
    } else if (applicantAttack === 1) {
        applicantHandCharge();
        // 応募者はたくわえる
        // 応募者の処理
        applicantCharge = applicantCharge * 1.5;
        console.log("＝投資家はたくわえる＝")
    } else {
        applicantHandDefense();
        // 応募者はまもる
        // playerの攻撃は無効化される。プレイヤー行動が蓄えるのためチャージリセットは不要
        console.log("＝投資家はまもる＝")
    }
    validationHp();

    console.log("プレイヤーチャージは" + playerCharge + "です");
    console.log("プレイヤーの体力は" + playerHp + "です");
    console.log("投資家チャージは" + applicantCharge + "です");
    console.log("投資家の体力は" + applicantHp + "です");

    validationJudge();
}


// playerはまもる
$('#defense03').click(function () {
    defenseModel();
    })
$('#defense04').click(function () {
    defenseModel();
})

function defenseModel() {
    const applicantAttack = randomNumber();
    if (applicantAttack === 0) {
        applicantHandAttack();
        // 投資家はこうげき
        // applicantの攻撃処理
        applicantCharge = 1;
        console.log("＝投資家はこうげき＝")
    } else if (applicantAttack === 1) {
        applicantHandCharge();
        // 投資家はたくわえる
        applicantCharge = applicantCharge * 1.5;
        console.log("＝投資家はたくわえる＝")
    } else {
        applicantHandDefense();
        // 投資家はまもる
        // playerの攻撃は無効化される
        console.log("＝応募者はまもる＝")
    }
    console.log("プレイヤーチャージは" + playerCharge + "です");
    console.log("プレイヤーの体力は" + playerHp + "です");
    console.log("投資家チャージは" + applicantCharge + "です");
    console.log("投資家の体力は" + applicantHp + "です");

    //守る選択肢の時点で計算不要
}

