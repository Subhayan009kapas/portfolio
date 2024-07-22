function sendEmail(event) {
          event.preventDefault(); // Prevent the default form submission
          var params = {
            from_name: document.getElementById("from_name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
          };
        
          const serviceId = "service_t7pydbj";
          const templateId = "template_ng0wxnc";
        
          emailjs
            .send(serviceId, templateId, params)
            .then((res) => {
              document.getElementById("from_name").value = "";
              document.getElementById("email").value = "";
              document.getElementById("message").value = "";
              console.log(res);
              alert("Your Message Sent Successfully");
            })
            .catch((err) => console.log(err));
        }
        