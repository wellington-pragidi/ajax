# Ajax
Simples função XMLHttpRequest

Modo de usar:
<script>
new Ajax({
    form:  "#id_form",
    event: "submit",
    items: ["title", "content", "tags"],
    type:  "POST",
    url:   "https://actions/update.php?id="+id,
    call:  "#response"
});
</script>
form:  O id ou classe da tag form
event: submit, change, input, click, keyup, etc..
items: O name dos itens do formulário, (mesmo que seja um só item tem que estar dentro de colchetes[] )
type:  O tipo de envio - POST, GET, PUT ...
url:   URL do arquivo lado servidor
call:  id ou classe da tag que vai receber o alerta de retorno


Pros:
Pequeno trecho de codigo fácil de entender

Contra:
Não funciona com input do tipo file (pretendo resolver isso em breve)
