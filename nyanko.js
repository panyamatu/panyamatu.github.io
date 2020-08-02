function hinto(tips) {
    var hintoarray = ["タテ① 眠いときや疲れたとき思わず口が大きく開く", "タテ② 茶色で糸状、ぬるぬるしている.酢の物にして食べたりする.藻", "タテ③ アメリカやカナダなどで使われている通貨の単位", "タテ④ 井戸水を汲むために下ろす桶", "タテ⑤ アフリカ北部にある国.首都はトリボリ", "ヨコ① ○○○○○チョコ美味しい", "ヨコ② 突然のことや意外なことに驚く", "ヨコ③ 耳ぎわの髪の毛.また,頭髪の左右側面の部分の名前らしい", "ヨコ④ アフリカ西部にある国.首都はモンロビア"];
    
    console.log(hintoarray[tips]);
    
    if(tips == 0) {
        $('#hi').text(hintoarray[0])
    } else if(tips == 1) {
        $('#hu').text(hintoarray[1])
    } else if(tips == 2) {
        $('#he').text(hintoarray[2])
    } else if(tips == 3) {
        $('#ho').text(hintoarray[3])
    } else if(tips == 4) {
        $('#ma').text(hintoarray[4])
    } else if(tips == 5) {
        $('#mi').text(hintoarray[5])
    } else if(tips == 6) {
        $('#mu').text(hintoarray[6])
    } else if(tips == 7) {
        $('#me').text(hintoarray[7])
    } else if(tips == 8) {
        $('#mo').text(hintoarray[8])
}
}

function answer(question) {
    var answerarray = ["あくび", "もずく", "ドル", "つるべ", "リビア", "アーモンド", "びっくり", "びん", "リベリア", "クールビズ"];
    
    if(question == 0) {
        $('#sa').text(answerarray[0])
    } else if(question == 1) {
        $('#si').text(answerarray[1])
    } else if(question == 2) {
        $('#su').text(answerarray[2])
    } else if(question == 3) {
        $('#se').text(answerarray[3])
    } else if(question == 4) {
        $('#so').text(answerarray[4])
    } else if(question == 5) {
        $('#ta').text(answerarray[5])
    } else if(question == 6) {
        $('#ti').text(answerarray[6])
    } else if(question == 7) {
        $('#tu').text(answerarray[7])
    } else if(question == 8) {
        $('#te').text(answerarray[8])
    } else if(question == 9) {
        $('#to').text(answerarray[9])
    } 
}
