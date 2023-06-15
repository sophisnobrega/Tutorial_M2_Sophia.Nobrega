$(document).ready(function() {
    $("#btnPessoais").click(function() {
        $.get("http://127.0.0.1:3000/curriculo", function(dados) {
            $("#nome").html(dados[0].nome);
            $("#profissao").html(dados[0].profissao);
            $("#contato").html(dados[0].contato);
            $("#email").html(dados[0].email);
        });
    });

    $("#btnRestantes").click(function() {
        $.get("http://127.0.0.1:3000/curriculo", function(dados) {
            $("#faculdade").html(dados[0].faculdade);
            $("#curso").html(dados[0].curso);
            $("#dataFormacao").html(dados[0].data_formacao);
            $("#empresa").html(dados[0].empresa);
            $("#cargo").html(dados[0].cargo);
            $("#data").html(dados[0].data);
        });
    });
});
