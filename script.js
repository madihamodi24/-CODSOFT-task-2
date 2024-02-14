var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab")
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycby_EgmAjo9gB82N_C4xcs_xcE12QIelD11mF2n7D1oQpu1GdkJ4vbsaV8AxFw2Zblhq/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response =>{
                msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""

            },50000)
            form.reset()
        })
            .catch(error => console.error('Error!', error.message))
        })