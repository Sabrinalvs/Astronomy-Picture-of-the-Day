$("#botao").click(function(event){
    event.preventDefault();

    let data = $("#data").val();
    console.log(data);

    $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=WwC2MaabN3vWiPte7QciJCqkcnADzyWwZDxUSgTl",
        sucess: function (){
            
        }
    })
})