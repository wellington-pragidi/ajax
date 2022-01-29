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
	<li>form: O id ou classe da tag form</li>
	<li>event: submit, change, input, click, keyup, etc..</li>
	<li>items: O name dos itens do formulário, (mesmo que seja um só item tem que estar dentro de colchetes[] )</li>
	<li>type: O tipo de envio - POST, GET, PUT ...</li>
	<li>url: URL do arquivo lado servidor</li>
	<li>call: id ou classe da tag que vai receber o alerta de retorno</li>
</ul>
Pros: <br>
Pequeno trecho de codigo fácil de entender

Contra: <br>
Não funciona com input do tipo file (pretendo resolver isso em breve)
