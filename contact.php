<?php

require __DIR__ . "/inc/connection.php";
require __DIR__ . "/inc/functions.php";
require __DIR__ . "/vendor/autoload.php";

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

include "./inc/head.php";

echo '<div id="scroll-container">';
include "./inc/header.php";
include "./inc/nav.php";

?>

<div id="spacer"></div>

<div id="page-container">
<div id="sidebar-overlay"></div> 
<div id="main" class="pushed2">

<div class="page-head">
    <h1>Our Offices</h1>
</div>
<?php 

$contactArray = [];

if (isset($_POST['submit'])) {

    if (!empty($_POST['name'])
    && !empty($_POST['email'])
    && !empty($_POST['phone_number'])
    && !empty($_POST['subject'])
    && !empty($_POST['message'])) {

       $name = $_POST['name'];
       $email = $_POST['email'];
       $phone = $_POST['phone_number'];
       $subject = cleanHtml($_POST['subject']);
       $message = cleanHtml($_POST['message']);

       if (isset($_POST['newsletter_signup'])) {
            $newsletter = true;
       } else {
            $newsletter = false;
       }

       $contactArray = [
        "name" => $name,
        "email" => $email,
        "phone" => $phone,
        "subject" => $subject,
        "message" => $message,
        "newsletter" => $newsletter
       ];

       postContact($db, $contactArray);
   }
   
   $completeMessage = createMessage($contactArray);
}



?>
<div class="contact-offices width-margin">    
    <div class="offices-flex">
        <div class="offices office-cam">
            <div class="offices-block">
                <div class="image">
                    <a href="#">
                        <img src="/img/cambridge.jpg" alt="Cambridge Office" class="office-img">
                    </a>
                </div>
                <div class="content">
                <a href="#"><h2>Cambridge Office</h2></a>
                    <p>
                        Unit 1.28, <br>
                        St John's Innovation Centre, <br>
                        Cowley Road, Milton, <br>
                        Cambridge, <br>
                        CB4 0WS
                    </p>
                    <a href="tel:01223375772" class="office-tel">01223 37 57 72</a>
                    <button class="btn office-btn">
                        View More
                    </button>
                </div>
                <button class="btn map-btn">
                    <i class="fas fa-chevron-down"></i>
                </button>
            </div>
            <div class="offices-map">
                <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" id="gmap_canvas" src="https://maps.google.com/maps?q=netmatters%20cambridge&t=&z=17&ie=UTF8&iwloc=&output=embed"></iframe><br></div></div>
            </div>
        </div>
        <div class="offices office-wym">
            <div class="offices-block">
                <div class="image">
                    <a href="#">
                        <img src="/img/wymondham.jpg" alt="Wymondham Office" class="office-img">
                    </a>
                </div>
                <div class="content">
                    <a href="#"><h2>Wymondham Office</h2></a>
                    <p>
                        Unit 15,<br>
                        Penfold Drive,<br>
                        Gateway 11 Business Park,<br>
                        Wymondham, Norfolk,<br>
                        NR18 0WZ
                    </p>
                    <a href="tel:01603704020" class="office-tel">01603 70 40 20</a>
                    <button class="btn office-btn">
                        View More
                    </button>
                </div>
                <button class="btn map-btn">
                    <i class="fas fa-chevron-down"></i>
                </button>
            </div>
            <div class="offices-map">
                <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" id="gmap_canvas2" src="https://maps.google.com/maps?q=netmatters%20wymondham&t=&z=17&ie=UTF8&iwloc=&output=embed"></iframe><br></div></div>
            </div>
        </div>
        <div class="offices office-yar">
            <div class="offices-block">
                <div class="image">
                    <a href="#">
                        <img src="/img/yarmouth.jpg" alt="Great Yarmouth Office" class="office-img">
                    </a>
                </div>
                <div class="content">
                    <a href="#"><h2>Great Yarmouth Office</h2></a>
                    <p>
                        Suite F23,<br>
                        Beacon Innovation Centre,<br>
                        Beacon Park, Gorleston,<br>
                        Great Yarmouth, Norfolk,<br>
                        NR31 7RA
                    </p>
                    <a href="tel:01493603204" class="office-tel">01493 60 32 04</a>
                    <button class="btn office-btn">
                        View More
                    </button>
                </div>
                <button class="btn map-btn">
                    <i class="fas fa-chevron-down"></i>
                </button>
            </div>
            <div class="offices-map">
                <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" id="gmap_canvas3" src="https://maps.google.com/maps?q=netmatters%20great%20yarmouth&t=&z=17&ie=UTF8&iwloc=&output=embed"></iframe><br></div></div>
            </div>
        </div>
    </div>
</div>

<div class="contact-outer width-margin">
    <div class="contact-inner">
    <div id="message-jump" class="message-jump"></div>
    <div id="formMessage" class="message <?php if (isset($_POST['submit']) && !empty($contactArray)) {
            echo "success";
        } elseif (isset($_POST['submit']) && empty($contactArray))  {
            echo "error";
        }
        ?>">
        <span id="messageText"><?php if (isset($completeMessage)) echo $completeMessage ?></span>
        <button type="button" id="close-message"><i class="fas fa-times"></i></button>
    </div>

    <form action="/contact.php" method="post" id="contact_form" onsubmit="return validateForm()">
        <div class="contact-form-group">
            <label for="name" class="required">Your Name</label>
            <input type="text" name="name" id="name" class="contact-field" value="<?php if (isset($_POST['name']) && empty($contactArray)) echo $_POST['name']?>" required>
        </div>
        <div class="contact-form-group">
            <label for="email" class="required">Your Email</label>
            <input type="email" name="email" id="email" class="contact-field" value="<?php if (isset($_POST['email']) && empty($contactArray)) echo $_POST['email']?>" required>
        </div>

        <div class="contact-form-group">
            <label for="phone_number" class="required">Your Telephone Number</label>
            <input type="tel" name="phone_number" id="phone_number" class="contact-field" value="<?php if (isset($_POST['phone_number']) && empty($contactArray)) echo $_POST['phone_number']?>" required>
        </div>
        <div class="contact-form-group">
            <label for="subject" class="required">Subject</label>
            <input type="text" name="subject" id="subject" class="contact-field" value="<?php if (isset($_POST['subject']) && empty($contactArray)) echo $_POST['subject']?>" required>
        </div>
        <div class="contact-form-group form-group-textarea">
            <label for="message" class="required">Message</label>
            <textarea name="message" id="message"><?php if (isset($_POST['message']) && empty($contactArray)) echo $_POST['message']?></textarea>
        </div>
        <div class="contact-marketing-check">
                <div class="marketing-check-content">
                    <label class="checkbox-container">
                        <input type="checkbox" name="newsletter_signup[]" id="newsletter_signup" <?php if (isset($_POST['newsletter_signup']) && empty($contactArray)) echo "checked"?>>
                        <span class="checkmark checkmark-contact">
                            <span class="check material-icons-outlined">&#xe876;</span>
                        </span>
                        <span class="checkbox-text">
                            Please tick this box if you wish to receive marketing information from us. Please see our <a href="#" target="_blank">Privacy Policy</a> for more information on how we use your data.
                        </span>
                    </label>
                </div>
            </div>
        
        <input id="submit" type="submit" class="btn contact-form-submit" name="submit" value="SEND ENQUIRY">
        
    </form>
    </div>

    <div class="contact-side">
        <p>Email us on:</p>
        <p><a href="mail:sales@netmatters.com" class="contact-email-text">sales@netmatters.com</a></p>
        <p>Business hours:</p>
        <p>Monday - Friday 07:00 - 18:00</p>
        <a href="#" class="out-of-hours-btn">
            <p>Out of Hours IT Support</p>
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

<?php

include "./inc/sidebar.php";
include "./inc/scripts.php";

?>

</body>
</html>
