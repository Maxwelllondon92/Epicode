$(() => {
    const carousel = $('#imgList');

    $('#Lbtn').on('click',()=>{
        const lProp = parseInt(carousel.css('left'));
        let newLProp = 0;
        if(lProp<0){
            newLProp=lProp+300;
        }
        carousel.animate({left:newLProp},1000);
    });
    $('#Rbtn').on('click',()=>{
        const lProp = parseInt(carousel.css('left'));
        let newLProp = 0;
        if(lProp-300 > -1300){
            newLProp=lProp-300;
        }

        carousel.animate({left:newLProp},1000);
    });
});