$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        let valor = $('#task_input').val();
        if(valor !== ''){
            let novoItem = '<li><p>' + valor + '</p></li>';
            $('ul').append(novoItem);
            $('#task_input').val('');
        }
    });

    $('ul').on('click', 'p', function(){
        $(this).toggleClass('riscar');
    });
});
