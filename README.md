# Ajax
<h3>Simples função XMLHttpRequest</h3>

<p>Modo de usar:</p>

<pre>
<script> 
new Ajax({ 
    form: "#id_form", 
    event: "submit", 
    items: ["title", "content", "tags"], 
    type: "POST", url: "https://actions/update.php?id="+id, 
    call: "#response" 
}); 
</script>
</pre>
<ul>
    <li><code>form:</code> O id ou classe da tag form</li>
    <li><code>event:</code> submit, change, input, click, keyup, etc..</li>
    <li><code>items:</code> O name dos itens do formulário, (mesmo que seja um só item tem que estar dentro de colchetes[] )</li>
    <li><code>type:</code> O tipo de envio - POST, GET, PUT ...</li>
    <li><code>url:</code> URL do arquivo lado servidor</li>
    <li><code>call:</code> id ou classe da tag que vai receber o alerta de retorno</li>
</ul>
Pros: <br>
Pequeno trecho de codigo fácil de entender

Contra: <br>
Não funciona com input do tipo file (pretendo resolver isso em breve)
