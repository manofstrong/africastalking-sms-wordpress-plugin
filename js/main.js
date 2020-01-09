window.addEventListener("load", function(){
	
	document.getElementById('from').addEventListener('change', selectChange);
	
	document.getElementById('contacts').addEventListener('blur', checkNumbers);				

	document.getElementById('sms_messages').addEventListener('keyup', CountCharIndividual);
		
	function selectChange() {
		var selected = document.getElementById("from");
		var contact_row = document.getElementById("contact_row");
		var contact_group = document.getElementById("contact_group_row");
		var subscriber_row = document.getElementById("subscriber_row");
		var warning_row = document.getElementById("warning_row");
		var source_of_contacts = document.getElementById("source_of_contacts");

		var url = window.location.href;
	
		if(url.indexOf("?") > 0) {
			url = url.substring(url.indexOf("?"), 0);
		} 	
		
		var selectedValue = selected.options[selected.selectedIndex].value;
		
		switch(selectedValue) {
			case '1':							
				
				document.getElementById('contact_group_input').removeEventListener('blur', groupValidate);

				contact_group.classList.add("disappear");	
				contact_row.classList.remove("disappear");	
				warning_row.classList.remove("disappear");	
				source_of_contacts.value = "1";
				break;
			case '2':
				contact_group.classList.add("disappear");	
				contact_row.classList.add("disappear");	
				warning_row.classList.add("disappear");	
				source_of_contacts.value = "2";
				break;
			case '3':

				document.getElementById('contact_group_input').addEventListener('blur', groupValidate);
				document.getElementById('contacts').removeEventListener('blur', checkNumbers);

				contact_group.classList.remove("disappear");	
				contact_row.classList.add("disappear");	
				warning_row.classList.add("disappear");	
				source_of_contacts.value = "3";
				break;
			case '4':								
				url += "?page=at_sms_main_menu&tab=add_contacts";
				window.location.replace(url);
				break;
		}
	}
	
	function groupValidate() {
		var contact_group_input = document.getElementById("contact_group_input");
		var bad_group_input = document.getElementById("bad_group_input");
		var contact_group_list = document.getElementById("contact_group_list").options;	
		var submitButton = document.getElementById("sms_submit");		
		submitButton.disabled = true;			
		var result = false;
		
		for (var i = 0; i < contact_group_list.length; i++) {
			if(contact_group_input.value == contact_group_list[i].value) {
				result = true;
				console.log(contact_group_list[i].value)
			  }
			
			if (result) {
				bad_group_input.innerHTML = '';
				submitButton.disabled = false;	
			} else {
				submitButton.disabled = true;		
				bad_group_input.innerHTML = 'You must select a group that exists';
			}
		}
	}
	
	function checkNumbers(){
		var numbers = document.getElementById("contacts").value;		
		var numberArray = numbers.split(',');
		var errorElement = document.getElementById('number_error');
		var submitButton = document.getElementById("sms_submit");
		
		if (numbers = ''){
			var errorMessage = 'Please provide valid recepient phone numbers.';
			errorElement.innerHTML = errorMessage;
			submitButton.disabled = true;
		}
		else{			
			errorElement.innerHTML = '';
			submitButton.disabled = false;								
		}
		
		var notice = '';
		noticeCount = 0;
		for (var i = 0; i < numberArray.length; i++) {
			newNumber = numberArray[i].replace(/\s/g, '');			
			isValidNumber = checkNumberValidity(newNumber);			
			if (!isValidNumber){
				notice += '"' + newNumber + '", ';
				++noticeCount;
				console.log(noticeCount);
				submitButton.disabled = true;
			}
		}
		
		if (notice != ''){
			if (noticeCount == 1){
				var errorMessage = 'This <strong>' + notice + '</strong> is not valid phone number.';	
			}
			else{
				var errorMessage = 'These <strong>' + notice + '</strong> are not valid phone numbers.';
			}
			errorElement.innerHTML = errorMessage;
		}
		else{
			errorElement.innerHTML = '';
			submitButton.disabled = false;								
		}
		
	}
		
	function checkNumberValidity (phoneNumber){		
		var regex = /^\+(?:[0-9] ?){11,14}[0-9]$/;		
		return regex.test(phoneNumber);
	}
	
	function CountCharIndividual() {
		var count = document.getElementById('sms_messages').value.length;
		var maxLength = 160;
		var smsCount = parseInt(count / maxLength);
		if (smsCount >= 1) {
			document.getElementById('sms_count').innerHTML = smsCount;
		} else {
			if (count > (maxLength - 1)) {
				document.getElementById('statement_of_word_count').innerHTML = "Maximum characters reached & now ";
			} else {
				document.getElementById('word_count').innerHTML = maxLength - count;
			}

		}

	}
});