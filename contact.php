<?php

require __DIR__ . "/inc/connection.php";
require __DIR__ . "/inc/functions.php";

include "./inc/head.php";

echo '<div id="scroll-container">';
include "./inc/header.php";
include "./inc/nav.php";
?>

<div id="page-container">
<div id="sidebar-overlay"></div> 
<div id="main" class="pushed2">

<div class="contact-outer width-margin">
    <div class="contact-inner width-margin">
    <h1>Contact Us</h1>
        <form action="/contact.php">
            <input type="email" name="email" id="email">
            <input type="text" name="first_name" id="first_name">
            <input type="text" name="last_name" id="last_name">
            <input type="text" name="subject" id="subject">
            <textarea name="message"></textarea>
            <input type="submit" class="btn"></input>
        </form>
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
