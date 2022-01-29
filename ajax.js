var Ajax = function(data) {
	const FORM  = document.querySelector(data.form);
	const EVENT = data.event;
	const ITEMS = data.items;
	const TYPE  = data.type;
	const URL   = data.url;
	const CALLBACK = document.querySelector(data.call);

	FORM.addEventListener(EVENT, function(ev) {
		ev.preventDefault();
		var formdata = new FormData();
		ITEMS.forEach(function(elem) {
			formdata.append(elem, document.querySelector("[name="+elem+"]").value);
		});
		var request = new XMLHttpRequest();
	    request.open(TYPE, URL);
	    request.onload = function () {
		    if(this.status == 200) {
		        CALLBACK.innerHTML = this.response;
		    }
	    }
	    request.send(formdata);

	    return false;
	});
}
