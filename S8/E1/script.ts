$('#verify').on('click',function(){
    play()
})
$('#replay').on('click',function(){
    $('#P1').val('');
    $('#P2').val('');
    $('#generated').text('')
    $('#result').text('')
})

function play(){
    let p1:number=Number($('#P1').val());
    let p2:number=Number($('#P2').val());
    if(!p1||!p2){
        $('#result').text('Entrambi i giocatori devono inserire un numero')
    }else if(p1==p2){
        $('#result').text('Così non c\'è gusto')
    }else{
        console.log('Lancio un dado')
        let rn:number=Math.floor((Math.random() * (100 - 1)) + 1)
        $('#generated').text('Il numero da indovinare era '+rn)
        p1=Math.abs(rn-p1);
        p2=Math.abs(rn-p2);
        if(p1==0){
            $('#result').text('Il giocatore 1 ha indovinato!')
        }else if(p2==0){
            $('#result').text('Il giocatore 2 ha indovinato!')
        }else if(p1<p2){
            $('#result').text('Nessuno ha indovinato, ma il giocatore 1 si è avvicinato di più.')
        }else if(p2<p1){
            $('#result').text('Nessuno ha indovinato, ma il giocatore 2 si è avvicinato di più.')
        }
    }
}