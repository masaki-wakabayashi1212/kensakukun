// //<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
// //<script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
$(function(){

    $('.item').show();

  $('input[type="checkbox"]').change(function() {
    const imagenation = [];
    const dayweek = [];
    const human = [];
    const situation = [];
    const age = [];
    const place = [];
    const resultfirst = [];
    const resultsecond = [];
    const resultthird = [];
    const resultforth = [];
    const resultfifth = [];
    const resultsixth = [];
    const resultseventh = [];
    const resulteighth = [];
    const resultnineth = [];
    const resulttenth = [];
    const resulteleventh = [];
    const resulttwelveth = [];
    const resultthirteenth = [];
    const causefirst = [];
    const causesecond = [];
    const causethird = [];
    const causeforth = [];
    const causefifth = [];
    const causesixth = [];
    const causeseventh = [];
    const causeeighth = [];
    const causenineth = [];
    const causetenth = [];
    const causeeleventh = [];
    const causetwelveth = [];
    const causethirteenth = [];
    const causefourteenth = [];
    const causefifteenth = [];
    const causesixteenth = [];
    const causeseventeenth = [];
    const causeeighteenth = [];

    // 想定事例のチェックが選択された際に、配列に格納
    $('input[name="imagenation"]:checked').each(function() {
        imagenation.push($(this).val());
    });

    // 曜日のチェックが選択された際に、配列に格納
    $('input[name="dayweek"]:checked').each(function() {
        dayweek.push($(this).val());
    });

    $('input[name="human"]:checked').each(function() {
        human.push($(this).val());
    });

    $('input[name="situation"]:checked').each(function() {
        situation.push($(this).val());
    });

    $('input[name="age"]:checked').each(function() {
        age.push($(this).val());
    });

    $('input[name="place"]:checked').each(function() {
        place.push($(this).val());
    });

    $('input[name="resultfirst"]:checked').each(function() {
        resultfirst.push($(this).val());
    });

    $('input[name="resultsecond"]:checked').each(function() {
        resultsecond.push($(this).val());
    });

    $('input[name="resultthird"]:checked').each(function() {
        resultthird.push($(this).val());
    });

    $('input[name="resultforth"]:checked').each(function() {
        resultforth.push($(this).val());
    });

    $('input[name="resultfifth"]:checked').each(function() {
        resultfifth.push($(this).val());
    });

    $('input[name="resultsixth"]:checked').each(function() {
        resultsixth.push($(this).val());
    });

    $('input[name="resultseventh"]:checked').each(function() {
        resultseventh.push($(this).val());
    });

    $('input[name="resulteighth"]:checked').each(function() {
        resulteighth.push($(this).val());
    });

    $('input[name="resultnineth"]:checked').each(function() {
        resultnineth.push($(this).val());
    });

    $('input[name="resulttenth"]:checked').each(function() {
        resulttenth.push($(this).val());
    });

    $('input[name="resulteleventh"]:checked').each(function() {
        resulteleventh.push($(this).val());
    });

    $('input[name="resulttwelveth"]:checked').each(function() {
        resulttwelveth.push($(this).val());
    });

    $('input[name="resultthirteenth"]:checked').each(function() {
        resultthirteenth.push($(this).val());
    });

    $('input[name="causefirst"]:checked').each(function() {
        causefirst.push($(this).val());
    });

    $('input[name="causesecond"]:checked').each(function() {
        causesecond.push($(this).val());
    });

    $('input[name="causethird"]:checked').each(function() {
        causethird.push($(this).val());
    });

    $('input[name="causeforth"]:checked').each(function() {
        causeforth.push($(this).val());
    });

    $('input[name="causefifth"]:checked').each(function() {
        causefifth.push($(this).val());
    });

    $('input[name="causesixth"]:checked').each(function() {
        causesixth.push($(this).val());
    });

    $('input[name="causeseventh"]:checked').each(function() {
        causeseventh.push($(this).val());
    });

    $('input[name="causeeighth"]:checked').each(function() {
        causeeighth.push($(this).val());
    });

    $('input[name="causenineth"]:checked').each(function() {
        causenineth.push($(this).val());
    });

    $('input[name="causetenth"]:checked').each(function() {
        causetenth.push($(this).val());
    });

    $('input[name="causeeleventh"]:checked').each(function() {
        causeeleventh.push($(this).val());
    });

    $('input[name="causetwelveth"]:checked').each(function() {
        causetwelveth.push($(this).val());
    });

    $('input[name="causethirteenth"]:checked').each(function() {
        causethirteenth.push($(this).val());
    });

    $('input[name="causefourteenth"]:checked').each(function() {
        causefourteenth.push($(this).val());
    });

    $('input[name="causefifteenth"]:checked').each(function() {
        causefifteenth.push($(this).val());
    });

    $('input[name="causesixteenth"]:checked').each(function() {
        causesixteenth.push($(this).val());
    });

    $('input[name="causeseventeenth"]:checked').each(function() {
        causeseventeenth.push($(this).val());
    });

    $('input[name="causeeighteenth"]:checked').each(function() {
        causeeighteenth.push($(this).val());
    });
    

    

    // 全てのアイテムを非表示にする
    $('.item').hide();

    // 選択された条件に合致するアイテムを表示する
    $('.item').each(function() {

      const item_imagenation = $(this).data('imagenation');
      const item_dayweek = $(this).data('dayweek');
      const item_human = $(this).data('human');
      const item_situation = $(this).data('situation');
      const item_age = $(this).data('age');
      const item_place = $(this).data('place');
      const item_resultfirst = $(this).data('resultfirst');
      const item_resultsecond = $(this).data('resultsecond');
      const item_resultthird = $(this).data('resultthird');
      const item_resultfourth = $(this).data('resultfourth');
      const item_resultfifth = $(this).data('resultfifth');
      const item_resultsixth = $(this).data('resultsixth');
      const item_resultseventh = $(this).data('resultseventh');
      const item_resulteighth = $(this).data('resulteighth');
      const item_resultnineth = $(this).data('resultnineth');
      const item_resulttenth = $(this).data('resulttenth');
      const item_resulteleventh = $(this).data('resulteleventh');
      const item_resulttwelveth = $(this).data('resulttwelveth');
      const item_causefirst = $(this).data('causefirst');
      const item_causesecond = $(this).data('causesecond');
      const item_causethird = $(this).data('causethird');
      const item_causeforth = $(this).data('causeforth');
      const item_causefifth = $(this).data('causefifth');
      const item_causesixth = $(this).data('causesixth');
      const item_causeseventh = $(this).data('causeseventh');
      const item_causeeighth = $(this).data('causeeighth');
      const item_causenineth = $(this).data('causenineth');
      const item_causetenth = $(this).data('causetenth');
      const item_causeeleventh = $(this).data('causeeleventh');
      const item_causetwelveth = $(this).data('causetwelveth');
      const item_causethirteenth = $(this).data('causethirteenth');
      const item_causefourteenth = $(this).data('causefourteenth');
      const item_causefifteenth = $(this).data('causefifteenth');
      const item_causesixteenth = $(this).data('causesixteenth');
      const item_causeseventeenth = $(this).data('causeseventeenth');
      const item_causeeighteenth = $(this).data('causeeighteenth');

      

        if ($.inArray(item_imagenation,imagenation) !== -1){ 
            $(this).show();
            }

        if($.inArray(item_dayweek,dayweek) !== -1){
            $(this).show();
            }

        if($.inArray(item_human,human) !== -1){
            $(this).show();
            }

        if($.inArray(item_situation,situation) !== -1){
            $(this).show();
            }

        if($.inArray(item_age,age) !== -1){
            $(this).show();
            }

        if($.inArray(item_place,place) !== -1){
            $(this).show();
            }

        if($.inArray(item_resultfirst,resultfirst) !== -1){
            $(this).show();
            } 

        if($.inArray(item_resultsecond,resultsecond) !== -1){
            $(this).show();
            } 
        
        if($.inArray(item_resultthird,resultthird) !== -1){
            $(this).show();
            } 

        if($.inArray(item_resultthird,resultthird) !== -1){
            $(this).show();
           } 

        if($.inArray(item_resultfourth,resultfourth) !== -1){
            $(this).show();
           } 

    });
  });

  $("#input-text").on("input", function() {
    // 入力された値
    const filterText = $(this).val().trim().toLowerCase();
    // リストを初期化
    $("#list > li").hide();
    // 値が一致する要素を表示
    $("#list > li").filter(function() {
      return $(this).data("filter").toLowerCase().indexOf(filterText) > -1;
    }).show();
  });
    
});
//   const $triggerBox = $('.js-filter-box'), //絞り込みエリア
//         $trigger = $('input'), //絞り込みトリガー
//         $target = $('.js-filter-target'), //絞り込み対象のアイテム
//         hideClass = 'is-hide'; // 絞り込み対象外の場合に付与されるクラス(非表示にする)

//         $target.addClass(hideClass); 

//         $triggerBox.find($trigger).on('change', function () {
//         // checkboxのALLを選択した際、ALL以外のチェックを外す処理 (不要な場合削除)
//       //  const $thisTriggerBox = $(this).closest($triggerBox),
//       //      $thisTriggerAll = $thisTriggerBox
//       //          .find($trigger)
//       //          .filter('[value=""]'),
//       //      inputType = $(this).attr('type'),
//       //      thisVal = $(this).attr('value');

//      //   if (inputType === 'checkbox') {
//      //       if (thisVal === '') {
//      //           $thisTriggerBox.find($trigger).prop('checked', false);
//      //           $thisTriggerAll.prop('checked', true);
//      //       } else {
//      //           $thisTriggerAll.prop('checked', false);
//                 //何もチェックされていない場合、ALLにチェックを入れる
//             //    if (
//             //        $thisTriggerBox.find($trigger).filter(':checked').length === 0
//             //    ) {
//             //        $thisTriggerAll.prop('checked', true);
//             //    }
//      //       }
//      //   }

//         filterItem(); //絞り込み

//         //絞り込み処理
//         function filterItem() {
           
//             $target.removeClass(hideClass); //一旦、全て表示

//             const triggerBoxLength = $triggerBox.length;

//             for (const i = 0; i < triggerBoxLength; i++) {
//                 const name = $triggerBox.eq(i).find($trigger).attr('name'),
//                     selectedData = getSelectedItem(name); // 選択項目を取得
//                 // 選択項目がない、またはALLを選択している場合はスキップ
//                 if (selectedData.length === 0) {
//                     continue;
//                 }
//                 //|| selectedData[0] === ''
//                 // 各絞り込み対象アイテムをチェック
//                 const targetLength = $target.length;

//                 for (const j = 0; j < targetLength; j++) {
//                     const itemData = $target.eq(j).data(name); // アイテムの設定項目を取得
//                     // 配列内の項目と比較して、絞り込み対象外の場合アイテムを非表示
//                     if (selectedData.indexOf(itemData) === -1) {
//                         $target.eq(j).addClass(hideClass);
//                     }else{
//                         $target.eq(j).removeClass(hideClass);
//                     }
//                 }
//             }
//         }
//         // inputで選択されている項目を取得し、配列に格納
//         function getSelectedItem(name) {
//             const selectedData = [];

//             $('[name=' + name + ']:checked').each(function () {
//                 selectedData.push($(this).val());
//             });
//             return selectedData;
//         }
//     });
 //});