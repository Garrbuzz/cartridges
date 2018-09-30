//глобальні змінні
   var brandOfCartridges = '';
   var current_user = currentUser(); 
   var trigger = true;


//===============XHR ============================
// авторизація
function users_login(login, password){
	login = login.value;
	password = password.value;
	var xhr = new XMLHttpRequest();
	var body = "login="+encodeURIComponent(login)+"&password=" + encodeURIComponent(password);
	xhr.open("POST", "../php/login.php", true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(body);

	
	xhr.onreadystatechange = function(){
				
		if (xhr.readyState===4){
			var result = JSON.parse(xhr.responseText);
		}
		if (result === '0'){
			trigger=true;
			alert('Користйвач з таким ім\'ям не зареєстрований в системі.' );
		}else if (result === '2'){
			trigger=true;
			alert('Невірний логін або пароль.');
		}else if (result === '1'){
			
			trigger=false;
			alert(trigger);
			document.location.href = "../html/accounting.html";
		}
	}
}

// Занесення в базу нового картриджу.
function NewCart(){
	var xhr = new XMLHttpRequest();
	var body='';
	xhr.open("POST", "../php/chkauth.php", true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(body);
		xhr.onreadystatechange = function(){
				
		if (xhr.readyState===4){
			var result = JSON.parse(xhr.responseText);
			
		}
		if (result === 0){

			document.getElementById('edit-cartridge').style.display='none';
			document.getElementById('add-cartridge').style.display='block';
			
		}else if (result === 1){
			
			alert('Для користування цим розділом потрібна авторизація.');
			document.location.href = "../index.html";

		}
	}
		
}
function WriteNewCartridge(brand_cart, name_cart, cart_id, newCartDate, source_cart){
	var brand = brand_cart.value;
	var name = name_cart.value;
	var cart_id = cart_id.value;
	var cartDate = newCartDate.value;
	var source = source_cart.value;

	if (name ==='' || cart_id==='') {
		alert('Заповніть всі поля');
		return;
	}
	var xhr = new XMLHttpRequest();
	var body1 = "brand="+encodeURIComponent(brand) +  "&name_cart=" + encodeURIComponent(name) + "&cart_id=" + encodeURIComponent(cart_id) + "&newCartDate=" + encodeURIComponent(cartDate) + "&cart_source=" + encodeURIComponent(source);
	document.getElementById('add-cartridge').style.display='none';
	xhr.open("POST", "../php/newcartridge.php", true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(body1);
	xhr.onreadystatechange = function(){
		        if (xhr.readyState===4){
				var result = JSON.parse(xhr.responseText);
				if (result === '0'){
					alert('Ідентифікатор не є унікальним');
					NewCart();
				}
			}
			}
	document.getElementById('add-cartridge').style.display='none';
}
// Відміна занесення нового картриджу
function WriteNewCartridgeCancel(){
	document.getElementById('add-cartridge').style.display='none';	
}
// Вибір виробника картриджу
function choiceBrandOfCartridge(value){

	var brOfCart = value;
	var xhr = new XMLHttpRequest();
	var body = "brand="+ encodeURIComponent(brOfCart);
	
	
	xhr.open("POST", "../php/choiceBrandOfCartridges.php", true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(body);
	brandOfCartridges = value;
	xhr.onreadystatechange = function(){
		if (xhr.readyState===4){
			var listOfCartr = JSON.parse(xhr.responseText);
			var i=0;
			if 	(listOfCartr[0].name === 'noauth'){
				alert('Для користування цим розділом потрібна авторизація.');
				document.location.href = "../index.html";

			}else if(listOfCartr[0].cart_id === 'norecords') {
				var inh = document.getElementById("choice-cartr-id").innerHTML ='Картриджі бренду ' + '<span class="no-brand">'+brOfCart + '</span>' + ' не використовуються.';
			} else 	{
			var inh = document.getElementById("choice-cartr-id").innerHTML = '<select   id="br2" onClick= "choiceCartridge(value)">';
				inh = inh + '<option disabled selected value>Оберіть картридж</option>';
				inh = inh +  '<option value= "' + listOfCartr[i].cart_id + '">'+ '&nbsp&nbsp&nbsp' + listOfCartr[i].name + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp |&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + '&nbsp&nbsp&nbsp' +	listOfCartr[i].cart_id + '&nbsp&nbsp&nbsp' +'</option>';
				i++; 		
				while (i < listOfCartr.length) {
					inh = inh +  '<option value= "' + listOfCartr[i].cart_id + '">'+ '&nbsp&nbsp&nbsp' + listOfCartr[i].name + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp |&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + '&nbsp&nbsp&nbsp' +	listOfCartr[i].cart_id + '&nbsp&nbsp&nbsp' +'</option>';
						i++;
				    }	
				    inh = inh + '</select>';
				    inh = inh + '<div class="serial"><button class="btn-success" id = "change-button"  >Змінити статус</button></div>';
				    document.getElementById("choice-cartr-id").innerHTML = inh;
				    document.getElementById('add-cartridge').style.display='none';
			}		
		}
	}
} 

// Вибір картриджу

function editStatusOfCartridge(value){
      return value;
}
function choiceCartridge(v1){

  	var button = document.querySelector("#change-button");
	   	button.addEventListener("click", function() {
		    var xhr = new XMLHttpRequest();
			var body = "id="+encodeURIComponent(v1);
			document.getElementById('edit-cartridge').removeAttribute('style');
			xhr.open("POST", "../php/choiceCartridge.php", true);
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhr.send(body);
			xhr.onreadystatechange = function(){
				if (xhr.readyState===4){
					var cartrParam = JSON.parse(xhr.responseText);
					var inh1 = document.getElementById('cart-Name').innerHTML = '<p>Назва картриджу:  ' + cartrParam[0].cartridgeName +'</p>';
					var inh2 = document.getElementById('cart-Id').innerHTML = '<p>Ідентифікатор картриджу:  ' + cartrParam[0].cartridge_id + '</p>';
					var xhr1 = new XMLHttpRequest();
					var body1 = "id="+ encodeURIComponent(cartrParam[0].status_id);
					xhr1.open("POST", "../php/currentstatusname.php", true);
					xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					xhr1.send(body1);
					xhr1.onreadystatechange = function(){
						if (xhr1.readyState===4){
							var cartStatus = JSON.parse(xhr1.responseText);
							var inh3 = document.getElementById('current-status').innerHTML = '<p>Статус:  ' + cartStatus[0].name + '&nbsp&nbsp&nbsp' + cartrParam[0].date + '</p>';
						}
					}
					var xhr2 = new XMLHttpRequest();
					var body2 = '&brand=' + brandOfCartridges +'&id=' + cartrParam[0].cartridge_id;
					xhr2.open("POST", "../php/readstatuses.php", true);
					xhr2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					xhr2.send(body2);
					xhr2.onreadystatechange = function(){
					if (xhr2.readyState===4){
						var cartStatus = JSON.parse(xhr2.responseText);

						var inh4 = document.getElementById('new-status').innerHTML = '<p>Новий статус: </p>';
						inh4 = inh4 + '<select id = "stat-sel"  size = "' + cartStatus.length + '">';
						
						i=0;

						while (i < cartStatus.length) {
							inh4 = inh4 +  '<option value="' + cartStatus[i].id + '">'+ cartStatus[i].name + '</option>';
							i++;
			    		}	
			    		inh4 = inh4 + '</select>' + '<div><p>Дата: <input type="date"   name="cart_date" ></p></div>';	
			    		document.getElementById('new-status').innerHTML = inh4;	
			    		var inh5 = '<button  id="EditCart-btn"; event.preventDefault();">Встановити</button>';
			    		inh5 = inh5 + '<button  id="EditCart-btn-cancel"; event.preventDefault();">Скасувати</button>';
			    		document.getElementById('button-change').innerHTML = inh5;
			    		var but_ch = document.querySelector("#EditCart-btn");
						but_ch.addEventListener("click", function() {
	   						var st = document.getElementById('stat-sel');
	   						writeNewStatus(brandOfCartridges, st.value, v1, cartrParam[0].cartridgeName);
						});		
						}
					}
				}
			}
		});
}

// Зміна статусу картриджу

function writeNewStatus(brand5, newStatus5, id5, name5){

		if (newStatus5==='') {
			alert('Виберіть статус');
			return;
		}

		var xhr5 = new XMLHttpRequest();	
		var table = 'actions';

		var body5 = 'table=' + encodeURIComponent(table) + '&brand=' + encodeURIComponent(brand5) + '&newStatus=' + newStatus5 + '&cartridge_id=' + id5 + '&name=' + encodeURIComponent(name5);
	
					xhr5.open("POST", "../php/writenewstatus.php", true);
					xhr5.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					xhr5.send(body5);
					xhr.onreadystatechange = function(){
						if (xhr.readyState===4){
							var writeSt = JSON.parse(xhr.responseText);
							console.log(writeSt);
						}
					}		
}
function searchBySerial(){

	var serial = document.getElementById('cart-serial');
	var xhr = new XMLHttpRequest();
	var body = "serial="+ encodeURIComponent(serial.value);
	xhr.open("POST", "../php/choiceBySerial.php", true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(body);
	xhr.onreadystatechange = function(){
					if (xhr.readyState===4){
					var cartrParam = JSON.parse(xhr.responseText);
					 
					if (!cartrParam[0]){
						document.getElementById('cart-Name').style.display='none';
						var b  = document.getElementById('cart-Name-modal').removeAttribute('style');
						document.getElementById('cart-Name-nema').innerHTML = 'Картриджу з серійним номером ' + serial.value + ' не зареєстровано в системі.' + '<button  id="EditCart-btn-cancel"; event.preventDefault();">Ок</button>';
					} else 
					if (cartrParam[0].name === 'noauth'){
						alert('Для використання данного розділу потрібна авторизація.')
						document.location.href = "../index.html";
					} 
					var inh1 = document.getElementById('cart-Name').innerHTML = '<p>Назва картриджу:  ' + cartrParam[0].cartridgeName +'</p>';
					var inh2 = document.getElementById('cart-Id').innerHTML = '<p>Ідентифікатор картриджу:  ' + cartrParam[0].cartridge_id + '</p>';
					var inh5 = document.getElementById('by-brand-title').innerHTML = '';
					var inh6 = document.getElementById('by-brand').innerHTML = '';
					var inh7 = document.getElementById('or').innerHTML = '';
					var xhr1 = new XMLHttpRequest();
					var body1 = "id="+ encodeURIComponent(cartrParam[0].status_id);
					xhr1.open("POST", "../php/currentstatusname.php", true);
					xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					xhr1.send(body1);
					xhr1.onreadystatechange = function(){
						if (xhr1.readyState===4){
							var cartStatus = JSON.parse(xhr1.responseText);
							var inh3 = document.getElementById('current-status').innerHTML = '<p>Статус:  ' + cartStatus[0].name + '&nbsp&nbsp&nbsp' + cartrParam[0].date + '</p>';
						}
					}
					var xhr2 = new XMLHttpRequest();
					var body2 = '&brand=' + brandOfCartridges +'&id=' + cartrParam[0].cartridge_id;
					xhr2.open("POST", "../php/readstatuses.php", true);
					xhr2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					xhr2.send(body2);
					xhr2.onreadystatechange = function(){
					if (xhr2.readyState===4){
						var cartStatus = JSON.parse(xhr2.responseText);
						var inh8 = '';
						var inh4 = document.getElementById('btn-search').innerHTML = '<p>Новий статус: </p>';
						inh8 = inh8 + '<select id = "stat-sel"  size = "' + cartStatus.length + '">';
						
						i=0;

						while (i < cartStatus.length) {
							inh8 = inh8 +  '<option value="' + cartStatus[i].id + '">'+ cartStatus[i].name + '</option>';
							i++;
			    		}	
			    		inh8 = inh8 + '</select>';	
			    		document.getElementById('or').innerHTML = inh8;	
			    		var inh5 = '<button  id="EditCart-btn"; event.preventDefault();">Встановити</button>';
			    		inh5 = inh5 + '<button  id="EditCart-btn-cancel"; event.preventDefault();">Скасувати</button>';
			    		document.getElementById('by-brand-title').innerHTML = inh5;
			    		var but_ch = document.querySelector("#EditCart-btn");
						but_ch.addEventListener("click", function() {
	   						var st = document.getElementById('stat-sel');
	   						writeNewStatus(brandOfCartridges, st.value, v1, cartrParam[0].cartridgeName);
						});	
							
						}
					}
				}
			}
}
function exit(){
	document.location.href = "../html/accounting.html";
}
function currentUser(){
	var xhr = new XMLHttpRequest(); 
	var body ='';
	xhr.open("POST", "../php/session.php", true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(body);
	xhr.onreadystatechange = function(){
					if (xhr.readyState===4){
						var curUser = JSON.parse(xhr.responseText);
					}	
	}							


}
