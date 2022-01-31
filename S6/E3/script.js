$(()=>{
    $('#faq h2').click(evt=>{
        const h2 = evt.currentTarget;
        $(h2).toggleClass('meno');
        if($(h2).attr('class') !== 'meno'){
            $(h2).next().hide();
        } else {
            $(h2).next().show();
        }
        evt.preventDefault();
        $('#faq').find('a:first').focus()
    })
});