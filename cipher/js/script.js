    function enterName() {
        var plaintext = document.getElementById("word_in").value;        
        //get the input string from the page
        var shiftBy = Number(document.getElementById("shift").value);   
        //get the  amount of shift and convert it into a number. This Is IMPORTANT
        var size = plaintext.length;                                     
        //get the size of the input string
        var encrypt = "";
        var temp = 0;
        var i = 0;
        

        //step through the string 1 character at a time
        for (i = 0; i < size; i++) {

            //store the ASCII value of each character
            temp = plaintext.charCodeAt(i); //{ <------------------------------------ too much

            // Uppercase
            if ((temp >= 65) && (temp <= 90)) {
                temp = (((temp - 65 + shiftBy) % 26) + 65);
            }

                // Lowercase
            else if ((temp >= 97) && (temp <= 122)) {
                temp = (((temp - 97 + shiftBy) % 26) + 97);
            }

            else {
                temp = "?";
            }

            //} <------------------------------------------------------------------- too much
            encrypt += String.fromCharCode(temp);
        }

        //output to the page
       
      document.getElementById("Plaintext").innerHTML = "plaintext : "+plaintext.toUpperCase();

      document.getElementById("word_out").innerHTML = "ciphertext  : "+encrypt.toUpperCase();
        
        
    }