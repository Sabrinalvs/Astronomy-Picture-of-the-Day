$("#imagem").hide();
$("#video").hide();

$("#botao").click(function(event){
    event.preventDefault();

    let data = $("#data").val();
    console.log(data);
    buscarInfo(data);
});

function buscarInfo(data){
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=WwC2MaabN3vWiPte7QciJCqkcnADzyWwZDxUSgTl&date=${data}`,
        success: function (resposta){
            if (resposta.media_type == "image"){
                $("#video").hide();
                $("#imagem").show();
                $("#titulo").text(resposta.title);
                $("#descricao").text(resposta.explanation);
                $("#imagem").attr("src", resposta.url);

            } else {
                $("#imagem").hide();
                $("#video").show();
                $("#titulo").text(resposta.title);
                $("#descricao").text(resposta.explanation);
                $("#video").attr("src", resposta.url);
            }
        },
    });
}