$(() => {
const add = $('#add')

    add.on(
        'click', () => {
            const name = $('#name').val()
            const surname = $('#surname').val()
            const age = parseInt($('#age').val())
            let errName =$('#name').next()
            let errSurname =$('#surname').next()
            let errAge =$('#age').next()
            
            const content = $('tbody')
            let remove = $('.remove')

            errName.text("try test")

            console.log("aggiunta in corso...")

            if (name != "" && surname != "" && age != "") {
                setTimeout(() => {
                    if(!($.isNumeric(age)) || age<0){
                        console.log("Età negativa o NaN")
                    }else{
                        content.append("<tr><td>" + name + "</td><td>" + surname + "</td><td>" + age + "</td><td><button class='remove'>✖ Cancella</button></td></tr>")
                    }
                }, 2000)
            } else (
                alert("Tutti i campi sono richiesti")
            )

        }
    )

})