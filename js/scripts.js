async function request(url, data) {
	if (data == "POST"){
		let res = await fetch(url, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
		  'Content-Type': 'application/json'
		  // 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *client
		body: data // body data type must match "Content-Type" header
	  });
	  let inf = await res;
		console.log(inf);
	
	let jso = await res.text();
		document.getElementById("resp").innerHTML = jso;
	}else if(data == "GET"){
		let res = await fetch(url, {
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
		  'Content-Type': 'application/json'
		  // 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *client
	  });
	  let inf = await res;
		console.log(inf);
	
	let jso = await res.text();
		document.getElementById("resp").innerHTML = jso;
	}
	
}


function pop() {
		request(document.getElementById("url").value, document.getElementById("body").value);
}
