function carregarConteudo() {
    // Consultar e exibir conteúdo via GET em /inventarios
    $.ajax({
        url: "http://localhost:3000/inventarios",
        type: "GET",
        dataType: "json",
        success: function(dados) {
            $("#carregando").hide();
            dados.forEach(function(item) {
                $("#caixa_conteudo").append(`
                    <div class='cartoes'>
                        <b> Nº ${item.codigo} </b><br>
                        Descrição: ${item.descricao} <br>
                        Setor: ${item.setor} <br>
                        Categoria: ${item.categoria}
                    </div>
                `)
            })
        },
        error: function() {
            alert("Erro ao acessar inventários");
        }
    })
}

$(document).ready(function() {
    carregarConteudo();
    $("#tela_escura").hide();  
});

$("#btn_fechar_form_cad").click(function(){
    $("#tela_escura").hide();
})

$("#btn_mais").click(function(){
    $("#tela_escura").show();
})