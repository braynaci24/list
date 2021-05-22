$(document).ready(function () {
    let generalInfo = []
    $('.info-button').click(function () {

        let inputVal = $('.todo-input').val();

        generalInfo.push(inputVal);

        if ($('.info').length < 3 && inputVal.length >= 2) {
            $('.append-information-container').append(`<th class="info"> ${inputVal}</th>`);
            $('.todo-input').val("")
            if ($('.info').length == 3) {
                $('.todo-input-container').remove();
                $('.information-button').show();
            }
        }
    })
    $('.information-button').click(function () {
        $('.table ').remove();
        $('.info-card').append(`<div class="alert alert-light card" role="alert">Bilgileriniz isim, soyisim ve yaş olmak üzere şu şekildedir:  <span class="card-text"> ${generalInfo} </span> </div>`)
        $('.information-button').remove();
        $('.information-button-2').show();
    })
    $('.information-button-2').click(function(){
        window.location.reload();
    })

})