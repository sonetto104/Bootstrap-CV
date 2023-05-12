function sendMail(contactForm) {
    emailjs.send('peter_regan_online_cv', 'peter', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    }, "r5ht74-xSfisAxuw5")
.then(function(response) {
   console.log('SUCCESS!', response.status, response.text);
}, function(error) {
   console.log('FAILED...', error);
});
   return false;  // To block from loading a new page
}
