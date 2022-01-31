$(()=>{
    let container;
    let row;
    let cells;
    let popup;
    const palette = ['#ccc','#aaa','brown','black','blue'];

    createContainer();
    createRows();
    createCells();
    buildChecker();
    events();

    function createContainer(){
        $('body').append("<div id='container'></div>");
        container = $('#container');
        container.css({
            'display':'inline-block',
            'position': 'relative',
            'width': '800px',
            'height': '800px'
        });
    }

    function createRows(){
        for (i=0;i<8;i++){
            container.append("<div class='row'></div>")
        };
        row = $('.row');
        row.css({
            'height':'100px'
        });
    }

    function createCells(){
        for (i=0;i<8;i++){
            row.append("<div class='cell'></div>")
        }
        cell = $('.cell');
        cell.css({
            'display':'inline-block',
            'width':'100px',
            'height':'100px',
            'box-sizing':'border-box'
        })
    }

    function buildChecker(){
        container.find('.row:nth-of-type(even)').find('.cell:nth-of-type(even)').css({'background-color':palette[0]});
        container.find('.row:nth-of-type(odd)').find('.cell:nth-of-type(odd)').css({'background-color':palette[0]});
        container.find('.row:nth-of-type(even)').find('.cell:nth-of-type(odd)').css({'background-color':palette[1]});
        container.find('.row:nth-of-type(odd)').find('.cell:nth-of-type(even)').css({'background-color':palette[1]});
    }
    
    function events(){
        cell.mouseenter(evt =>{
            cell = evt.currentTarget;
            $(cell).css({
                'border-top':'3px solid',
                'border-left':'3px solid',
                'border-color':palette[4]
            })
        })
        cell.mouseleave(evt =>{
            cell = evt.currentTarget;
            $(cell).css({
                'border':'0'
            })
        })
        cell.click(evt =>{
            cell = evt.currentTarget;
            $(cell).css({
                'background-color':palette[2]
            })
        })
        cell.dblclick(evt =>{
            cell = evt.currentTarget;
            $(cell).css({
                'background-color':palette[3]
            })
        })
        container.find('.row:first-of-type').find('.cell:first-of-type').click(() =>{
            container.append("<div id='popup'><h2>Epicode</h2></div>");
            popup=$('#popup');
            popup.css({
                'position':'absolute',
                'width':'400px',
                'height':'400px',
                'top':'0',
                'background-color':palette[0],
                'padding-top':'150px',
                'text-align':'center',
                'box-sizing':'border-box'
            })
        })
    }
})