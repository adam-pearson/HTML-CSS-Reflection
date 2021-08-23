<?php

require __DIR__ . "/inc/connection.php";
require __DIR__ . "/inc/functions.php";

include "./inc/head.php";

echo '<div id="scroll-container">';
include "./inc/header.php";
include "./inc/nav.php";

?>

<div id="spacer"></div>

<div id="page-container">
<div id="sidebar-overlay"></div> 
<div id="main" class="pushed2">



<div class="contact-outer width-margin">
    <div class="contact-inner">
    <form action="/contact.php" method="post">
        <div class="form-group">
            <label for="name" class="required"><strong>Your Name</strong></label>
            <input type="text" name="name" id="name" class="contact-field">
        </div>
        <div class="form-group">
            <label for="email" class="required"><strong>Your Email</strong></label>
            <input type="email" name="email" id="email" class="contact-field">
        </div>

        <div class="form-group">
            <label for="phone_number" class="required"><strong>Your Telephone Number</strong></label>
            <input type="text" name="phone number" id="phone_number" class="contact-field">
        </div>
        <div class="form-group">
            <label for="subject" class="required"><strong>Subject</strong></label>
            <input type="text" name="subject" id="subject" class="contact-field">
        </div>
        <div class="form-group form-group-textarea">
            <label for="message" class="required"><strong>Message</strong></label>
            <textarea name="message"></textarea>
        </div>
        <div class="marketing-check">
                <div class="marketing-check-content">
                    <label class="checkbox-container">
                        <input type="checkbox">
                        <span class="checkmark checkmark-contact">
                            <!-- <i class="fas fa-check"></i> -->
                            <span class="check material-icons-outlined">&#xe876</span>
                        </span>
                        <span class="checkbox-text">
                            Please tick this box if you wish to receive marketing information from us. Please see our <a href="#" target="_blank">Privacy Policy</a> for more information on how we use your data.
                        </span>
                    </label>
                </div>
            </div>
        <input type="submit" class="btn contact-form-submit" value="SEND ENQUIRY"></input>
    </form>
    </div>

    <div class="contact-side">
        <p><strong>Email us on:</strong></p>
        <p><a href="mail:sales@netmatters.com" class="contact-email-text">sales@netmatters.com</a></p>
        <p><strong>Business hours:</strong></p>
        <p><strong>Monday - Friday 07:00 - 18:00</strong></p>
        <a href="#" class="out-of-hours-btn">
            <p><strong>Out of Hours IT Support</strong></p>
            <i class="fas fa-chevron-down"></i>
        </a>
        <div class="hidden-contact-text">
            <p>
                Netmatters IT are offering an Out of Hours service for Emergency and Critical tasks.
            </p>
            <p>
                <strong>
                    Monday - Friday: 18:00 - 22:00<br>
                    Saturday: 08:00 - 16:00<br>
                    Sunday: 10:00 - 18:00
                </strong>
            </p>
            <p>
                To log a critical task, you will need to call our main line
                number and select Option 2 to leave an Out of Hours voicemail.
                A technician will contact you on the number provided within
                45 minutes of your call.
            </p>
        </div>
    </div>
</div>

<?php include "./inc/newsletter.php" ?>

<?php include "./inc/footer.php"; ?>

</div>
</div>
</div>
</div>

<?php

include "./inc/sidebar.php";
include "./inc/scripts.php";

?>

</body>
</html>
