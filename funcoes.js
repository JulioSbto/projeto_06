function carregarConteudo() {
    // Consultar e exibir conteúdo via GET em /inventarios
    $.ajax({
        url: "http://localhost:3000/inventarios",
        type: "GET",
        dataType: "json",
        success: function (dados) {
            $("#carregando").hide();
            dados.forEach(function (item) {
                $("#caixa_conteudo").append(`
                    <div class='cartoes'>
                        <b> Nº <span id='codigo'>${item.codigo}</span> </b> <br>
                        Descrição: <span id='descricao'>${item.descricao}</span> <br>
                        Setor: <span id='setor'>${item.setor}</span> <br>
                        Categoria: <span id='categoria'>${item.categoria} </span>
                    </div>
                `)
            })
        },
        error: function () {
            alert("Erro ao acessar inventários");
        }
    });
};


//executa o código quando a página for aberta
$(document).ready(function () {
    carregarConteudo();
    $("#tela_escura").hide();
    $("#formulario_cadastro").hide();
    $("#formulario_editar").hide();
});

$("#btn_fechar_form_cad").click(function () {
    $("#tela_escura").hide();
    $("#formulario_cadastro").hide();
});

//Cadastrar itens POST /inventario
$("#btn_cadastrar").click(function () {
    var codigo = $("#caixa_codigo").val();
    var descricao = $("#caixa_descricao").val();
    var setor = $("#caixa_setor").val();
    var categoria = $("#caixa_categoria").val();
    $.ajax({
        url: "http://localhost:3000/inventarios/",
        type: "POST",
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify({ codigo, descricao, setor, categoria }),
        success: function (resposta) {
            alert(resposta.msg);
            $("#caixa_conteudo").html("");
            $("#carregando").show();
            $("#tela_escura").hide();
            $("#formulario_cadastro").hide();
            carregarConteudo();
        },
        error: function () {
            alert("Falha ao acessar o inventário")

        }
    });
}); //Fim da função de cadastrar itens


$("#btn_mais").click(function () {
    $("#tela_escura").show();
    $("#formulario_cadastro").show();
});

$("#btn_pesquisar").click(function () {
    $("#caixa_conteudo").html("");
    $("#carregando").show("");
    var codigo = $("#caixa_pesquisa").val();
    if (codigo == "") {
        alert("Preencha o campo de pesquisa");
    }
    $.ajax({
        url: "http://localhost:3000/inventarios/" + codigo,
        type: "GET",
        dataType: "json",
        success: function (dados) {
            if (dados.length >= 1) {
                dados.forEach(function (item) {
                    $("#caixa_conteudo").append(`
                        <div class='cartoes'>
                            <b> Nº <span id='codigo'>${item.codigo}</span> </b> <br>
                            Descrição: <span id='descricao'>${item.descricao}</span> <br>
                            Setor: <span id='setor'>${item.setor}</span> <br>
                            Categoria: <span id='categoria'>${item.categoria} </span>
                        </div>
                    `)
                });
            } else {
                $("#caixa_conteudo").html("<center><h2>Nada encontrado 😕</h2></center>")
            }

            setTimeout(function () {
                $("#carregando").hide();
            }, 1000);
        },
        error: function () {
            alert("Falha ao acessar o inventário."),
            setTimeout(function () {
                $("#carregando").hide();
            }, 1000);
        }
    });
}); //Fim do click no botão de pesquisa

$(document).on("click", ".cartoes", function () {
    var codigo = $(this).find("#codigo").text();
    var descricao = $(this).find("#descricao").text();
    var setor = $(this).find("#setor").text();
    var categoria = $(this).find("#categoria").text();

    $("#caixa_codigo2").val(codigo).prop("disabled", true);
    $("#caixa_descricao2").val(descricao);
    $("#caixa_setor2").val(setor);
    $("#caixa_categoria2").val(categoria);

    $("#tela_escura").show();
    $("#formulario_editar").show();
}); //Fim do click em algum card


$("#btn_fechar_form_editar").click(function () {
    $("#tela_escura").hide();
    $("#formulario_editar").hide();
});

$("#btn_deletar").click(function () {
    var codigo = $("#formulario_editar #caixa_codigo2").val();
    $.ajax({
        url: 'http://localhost:3000/inventarios',
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({codigo}),
        success: function (resposta) {
            alert(resposta.msg);
            $("#caixa_conteudo").html("")
            $("#carregando").show();
            carregarConteudo();
            $("#tela_escura").hide();
            $("#formulario_editar").hide();
        },
        error: function () {
            alert("Falha ao deletar item do inventario.")
        }
    });
}); // Fim do click no botão deletar

$("#btn_salvar").click(function () {
    // Captura de dados do formulário
    var codigo = $("#formulario_editar #caixa_codigo2").val();
    var descricao = $("#formulario_editar #caixa_descricao2").val();
    var setor = $("#formulario_editar #caixa_setor2").val();
    var categoria = $("#formulario_editar #caixa_categoria2").val();
    //alert(codigo + descricao + setor + categoria);

    $.ajax({
        url: 'http://localhost:3000/inventarios',
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({codigo, descricao, setor, categoria}),
        success: function(resposta){
            alert(resposta.msg);
            $("#caixa_conteudo").html("")
            $("#carregando").show();
            carregarConteudo();
            $("#tela_escura").hide();
            $("#formulario_editar").hide();
        },
        error: function () {
            alert("Falha ao deletar item do inventario.")
        }

    });


}); // Fim do Click no botão salvar