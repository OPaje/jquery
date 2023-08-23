$(function(){

    //Ex1
    $("#btn-mudaTexto").on("click", function(){
        $("#ex1-text").text("Estou estudando JQuery!")
    })

    //Ex2
    $("#btn-mudaVisibilidade").on("click", function(){
        $("#nome").fadeToggle(500)
    })

    //Ex3
    $(".sub-list").hide()

    $("li").on("click", function(){
        $(this).children(".sub-list").slideToggle()
    })

    //Ex4
    $("button.btn-enviar").on("click", function(e){
        e.preventDefault()
        let inputNome = $("[name='nome']")
        let inputEndereco = $("[name='endereco']") 

        let p = $("#erros")
        p.css("color", "red")

        let valorNome = inputNome.val()
        let valorEndereco = inputEndereco.val()
        let erro = ""

        if(valorNome.length < 5 || valorNome.length > 40){
            erro = 'O nome precisa ter mais de 5 caracteres e menos de 40'
            console.log("tá aqui")
        }
        else if(valorNome.includes(" ")){
            erro = 'O nome não pode conter espaços em branco'
        }
        
        if(valorEndereco === ""){
            erro = "O endereço precisa ser preenchido"
        }
        else if(valorEndereco.split(' ').length < 2){
            erro = 'O endereço precisa conter ao menos duas palavras'
            console.log(valorEndereco.split(' ').length)
        }

        if(erro != ""){
            p.text(erro)

        }else{
            inputNome.val("")
            inputEndereco.val("")
        }       
    })

    //Ex5
    const imagens = $("#carrossel img")
    const totalImagens = imagens.length
    let indiceAtual = 0


    imagens.hide()
    imagens.eq(0).show()

    function mostraImagens(){
        imagens.hide()
        imagens.eq(indiceAtual).fadeIn("slow")
    }

    $("#btn-posterior").on("click", function(){
        indiceAtual = (indiceAtual + 1) % totalImagens
        mostraImagens()
    })

    $("#btn-anterior").on("click", function(){
        indiceAtual = (indiceAtual - 1) % totalImagens
        mostraImagens()
    })

})

