window.addEventListener("load", function(){	

    var control = document.getElementById("csv_upload");
    var uploadButton = document.getElementById("upload_submit");

	control.addEventListener("change", function(event) {
		// When the control has changed, there are new files
        var files = control.files;        
        
        if(control.files.length == 0 ){             
			uploadButton.disabled = true;
        } else {                        
			uploadButton.disabled = false;
        } 

		for (var i = 0; i < files.length; i++) {
			console.log("Filename: " + files[i].name);
			console.log("Type: " + files[i].type);
            console.log("Size: " + files[i].size + " bytes");            
            
            var mimes = ['application/vnd.ms-excel','text/plain','text/csv','application/csv', 'application/x-csv', 'text/comma-separated-values', 'text/x-comma-separated-values'];

            var checkMime = mimes.includes(files[i].type);

            var extension = files[i].name.split('.').pop();

            console.log(extension);

            if (!checkMime || extension != 'csv' ){           
                uploadButton.disabled = true;
            }
        }        

	}, false);
	
});