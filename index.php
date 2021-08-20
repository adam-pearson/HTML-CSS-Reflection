<?php

require __DIR__ . "/inc/connection.php";
require __DIR__ . "/inc/functions.php";


?>

<?php include "./inc/head.php" ?>

<body class="fixed-position">

<?php include "./inc/cookies.php" ?>

<!-- page container -->
<div id="scroll-container">
<div id="page-container">
<div id="sidebar-overlay"></div> 
<div id="main" class="pushed2">

<?php include "./inc/header.php" ?>
<?php include "./inc/nav.php" ?>

</div>

<!-- hero slider -->
<div class="hero-slider-container owl-carousel owl-theme">

        <div class="hero-slider1">
            <div class="hero-image">
                <img src="img/home-3wAI.jpg" alt="Web Design" data-object-fit="contain">
            </div>
            <div class="hero-content-container">
                <div class="hero-content width-margin">
                    <h1>Web Design</h1>
                    <p>For businesses looking to make a strong <br> and effective first impression.</p>
                    <button class="btn hero-button hero-web-button">
                        Find Out More
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="hero-slider2">
            <div class="hero-image">
                <img src="img/it-support.jpg" alt="IT Support" data-object-fit="contain">
            </div>
            <div class="hero-content-container">
                <div class="hero-content width-margin">
                    <h1>IT Support</h1>
                    <p>
                        Fast and cost-effective IT support
                        <br>
                        services for your business
                    </p>
                    <button class="btn hero-button hero-it-button">
                        Find Out More
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="hero-slider3">
            <div class="hero-image">
                <img src="img/telecoms.jpg" alt="Telecoms Services" data-object-fit="contain">
            </div>
            <div class="hero-content-container">
                <div class="hero-content width-margin">
                    <h1>Telecoms Services</h1>
                    <p>
                        A new approach to connectivity, see how
                        <br>
                        we can help your business.
                    </p>
                    <div class="btn hero-button hero-telecoms-button">
                        Find Out More
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-slider4">
            <div class="hero-image">
                <img src="img/software.jpg" alt="Bespoke Software" data-object-fit="contain">
            </div>
            <div class="hero-content-container">
                <div class="hero-content width-margin">
                    <h1>Bespoke Software</h1>
                    <p>
                        Bring your business together
                        <br>
                        with solutions that grow with you.
                    </p>
                    <div class="btn hero-button hero-bespoke-button">
                        Find Out More
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-slider5">
            <div class="hero-image">
                <img src="img/marketing.jpg" alt="Digital Marketing" data-object-fit="contain">
            </div>
            <div class="hero-content-container">
                <div class="hero-content width-margin">
                    <h1>Digital Marketing</h1>
                    <p>
                        Generating you new business through
                        <br>
                        results-driven marketing activities.
                    </p>
                    <div class="btn hero-button hero-marketing-button">
                        See how we can help you
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-slider6">
            <div class="hero-image">
                <img src="img/security.jpg" alt="Cyber Security" data-object-fit="contain">
            </div>
            <div class="hero-content-container">
                <div class="hero-content width-margin">
                    <h1>Cyber Security</h1>
                    <p>
                        Keeping businesses and their customers
                        <br>
                        sensitive information protected.
                    </p>
                    <div class="btn hero-button hero-security-button">
                        Find Out More
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
</div>
<!--service list -->
<div id="service-list" class="width-margin">
    <div class="service-cards">
            <div class="bespoke-software">
                <a href="#" class="service bespoke-software-inner">
                    <span class="icon">
                        <i class="fas fa-grip-vertical"></i>
                    </span>
                    <h2>Bespoke Software</h2>
                    <p>Tailored software solutions to improve business productivity and online profits. Our expert team will ensure a software solution.</p>
                    <div class="btn btn-software">
                        Read More
                    </div >
                </a>
            </div>
            <div class="it-support">
                <a href="#" class="service it-support-inner">
                    <span class="icon">
                        <i class="fas fa-desktop"></i>
                    </span>
                    <h2>IT Support</h2>
                    <p>Remotely managed IT services that is catered to your businesses needs, adds value and reduces costs.</p>
                    
                    <div class="btn btn-it">
                        Read More
                    </div>
                </a>
            </div>
            <div class="digital-marketing">
                <a href="#" class="service digital-marketing-inner">
                    <span class="icon">
                        <i class="fas fa-signal"></i>
                    </span>
                    <h2>Digital Marketing</h2>
                    <p>Driving brand awareness and ROI through creative digital marketing campaigns. We review and monitor online performances.</p>
                    <div class="btn btn-digital">
                        Read More
                    </div >
                </a>
            </div>
            <div class="telecoms-services">
                <a href="#" class="service telecoms-services-inner">
                    <span class="icon">
                        <i class="fas fa-phone"></i>
                    </span>
                    <h2>Telecoms Services</h2>
                    <p>Stay connected with bespoke telecoms solutions when you need it most.</p>
                    <div class="btn btn-software">
                        Read More
                    </div>
                </a>
            </div>
            <div class="web-design">
                <a href="#" class="service web-design-inner">
                    <span class="icon">
                        <i class="fas fa-code"></i>
                    </span>
                    <h2>Web Design</h2>
                    <p>User-centric design for businesses looking to make a lasting first impression.</p>
                    <div class="btn btn-software">
                        Read More
                    </div>
                </a>
            </div>
            <div class="cyber-security">
                <a href="#" class="service cyber-security-inner">
                    <span class="icon">
                        <i class="fas fa-shield-alt"></i>
                    </span>
                    <h2>Cyber Security</h2>
                    <p>Ensuring your online business stays secure 24/7, 365 days of the year.</p>
                    <div class="btn btn-software">
                        Read More
                    </div >
                </a>
            </div>
            <div class="developer-training">
                <a href="#" class="service developer-training-inner">
                    <span class="icon">
                        <i class="fas fa-graduation-cap"></i>
                    </span>
                    <h2>Developer Training</h2>
                    <p>Have you considered a career in web development but you aren’t sure where to start?</p>
                    <div class="btn btn-software">
                        Read More
                    </div>
                </a>
            </div>
    </div>
</div>
<!-- about section -->
<div id="about-container">
    <div class="about width-margin">
            <div class="about-inner">
                <h1>Netmatters</h1>
                <p><strong>Netmatters Ltd is a leading web design, IT support and digital marketing agency based in Wymondham, Norfolk.</strong></p>
                <p>Founded in 2008, we work with businesses from a variety of industries to gain new prospects, nurture existing leads and further grow their sales.</p>
                <p>We provide cost effective, reliable solutions to a range of services; from bespoke cloud-based management systems, workflow and IT solutions through to creative website development and integrated digital campaigning.</p>
                <a href="#"> 
                        <div class="btn about-button">
                            Our Culture
                            <i class="fas fa-arrow-right"></i>
                        </div>
                </a>
            </div>
        </div>
</div>
<!-- latest section -->
<div id="latest-container">
        <div class="latest-top-container">
            <div class="latest-top width-margin">
                <span class="latest">Latest</span>
            </div>
        </div>
        <div class="latest-cards-container width-margin">
            <div class="latest-cards">
                
                <?php
                    foreach (pullNews($db) as $key => $news) {

                    $date = new DateTime($news['date']);

                    echo '<div class="' . str_replace(' ', '-', $news['category_name']) . ' latest-card-' . $key+1 . '">';
                    echo    '<div class="img-container">';
                    echo        '<a href="#" class="latest-category">' . $news['category_name'] . '</a>';
                    echo        '<a class="latest-img" href="#">';
                    echo            '<img src="' . $news['news_image'] . '" alt="Now Hiring Support Technician">';
                    echo        '</a>';
                    echo    '</div>';
                    echo    '<div class="latest-content">';
                    echo        '<a href="#" target="_blank">';
                    echo            '<h3>' . $news['heading'] . '</h3>';
                    echo        '</a>';
                    echo        '<p>' . $news['description'] . '</p>';
                    echo        '<a href="#">';
                    echo            '<div class="btn latest-button">Read More</div>';
                    echo        '</a>';
                    echo        '<div class="latest-user">';
                    echo            '<div class="latest-avatar">';
                    echo                '<img src="' . $news['profile_image'] . '" alt="' . $news['full_name'] . '">';
                    echo           '</div>';
                    echo            '<div class="latest-details">';
                    echo                '<strong class="primary-text">Posted by ' . $news['full_name'] . '</strong>';
                    echo                '<br>';
                    echo                $date->format('jS F Y');
                    echo            '</div>';
                    echo        '</div>';
                    echo    '</div>';
                    echo '</div>';

                    }
                ?>


                <!-- <div class="latest-card-1">
                    <div class="img-container">
                        <a href="#" class="latest-category">Careers</a>
                        <a class="latest-img" href="#">
                            <img src="img/senior-it-support-Vfd9.jpg" alt="Now Hiring Support Technician">
                        </a>
                    </div>
                    <div class="latest-content">
                        <a href="#" target="_blank">
                            <h3>Senior IT Support Technician</h3>
                        </a>
                        <p>Salary Range Salary (subject to experience) + Profit Share + Pension Hours 40 hours per week, Monday...</p>
                        <a href="#">
                            <div class="btn latest-button">Read More</div>
                        </a>
                        <div class="latest-user">
                            <div class="latest-avatar">
                                <img src="img/rob-george-zFWY.jpg" alt="Rob George">
                            </div>
                            <div class="latest-details">
                                <strong class="primary-text">Posted by Rob George</strong>
                                <br>
                                17th May 2021
                            </div>
                        </div>
                    </div>
                </div> -->

                <!-- <div class="latest-card-2">
                    <div class="img-container">
                        <a href="#" class="latest-category">News</a>
                        <a class="latest-img" href="#">
                            <img src="img/congratulations-to-lloyd-D2cu.jpg" alt="Another Scion Graduates">
                        </a>
                    </div>
                    <div class="latest-content">
                        <a href="#" target="_blank">
                            <h3>Congratulations to Lloyd Cox for Graduating t...</h3>
                        </a>
                        <p>We are pleased to announce that after a year spent on our Netmatters Scion Coalition Scheme (SCS), L...</p>
                        <a href="#">
                            <div class="btn latest-button">Read More</div>
                        </a>
                        <div class="latest-user">
                            <div class="latest-avatar">
                                <img src="img/joe-trower-qV03.jpg" alt="Joe Trower">
                            </div>
                            <div class="latest-details">
                                <strong class="primary-text">Posted by Joe Trower</strong>
                                <br>
                                21st May 2021
                            </div>
                        </div>
                    </div>
                </div>

                <div class="latest-card-3">
                    <div class="img-container">
                        <a href="#" class="latest-category">News</a>
                        <a class="latest-img" href="#">
                            <img src="img/april-2021-notables-CIV3.jpg" alt="April 2021 Notables">
                        </a>
                    </div>
                    <div class="latest-content">
                        <a href="#" target="_blank">
                            <h3>April 2021 Notables</h3>
                        </a>
                        <p>Every month we celebrate the most notable of employees here at Netmatters. Each department head is a...</p>
                        <a href="#">
                            <div class="btn latest-button">Read More</div>
                        </a>
                        <div class="latest-user">
                            <div class="latest-avatar">
                                <img src="img/lydia-whitney-u5hO.jpg" alt="Netmatters">
                            </div>
                            <div class="latest-details">
                                <strong class="primary-text">Posted by Lydia Whitney</strong>
                                <br>
                                24th May 2021
                            </div>
                        </div>
                    </div>
                </div> -->

            </div>
        </div>
</div>
<!-- logos section -->
<div id="logo-section">
        <div class="logos-container width-margin">
            <div class="logo-item item">
                <div class="logo-description">
                    <div class="box">
                        <h3>Busseys</h3>
                        <p>One of the UK's leading Ford dealerships.</p>
                        <div class="arrow"></div>
                    </div>
                </div>
                <img src="img/home-gZQR.png" alt="Busseys Logo" class="colour">
                <img src="img/home-T5gi.jpg" alt="Busseys Logo" class="greyscale">
            </div>
            <div class="logo-item item">
                <div class="logo-description">
                    <div class="box">
                        <h3>Crane Garden Builders</h3>
                        <p>Leading manufacturer and supplier of high-end garden rooms, summerhouses, workshops and sheds in the UK.</p>
                        <div class="arrow"></div>
                    </div>
                </div>
                <a href="#">
                    <img src="img/home-MjHw.png" alt="Crane Garden Buildings Logo" class="colour">
                    <img src="img/home-BsyK.jpg" alt="Crane Garden Buildings Logo" class="greyscale">
                </a>
            </div>
            <div class="logo-item item">
                <div class="logo-description">
                    <div class="box">
                        <h3>Beat</h3>
                        <p>Leading manufacturer and supplier of high-end garden rooms, summerhouses, workshops and sheds in the UK.</p>
                        <div class="arrow"></div>
                    </div>
                </div>
                <img src="img/home-ukEL.png" alt="Beat Logo" class="colour">
                <img src="img/home-RfLc.jpg" alt="Beat Logo" class="greyscale">
            </div>
            <div class="logo-item item">
                <div class="logo-description">
                    <div class="box">
                        <h3>Northern Diver</h3>
                        <p>Leading manufacturer and supplier of high-end garden rooms, summerhouses, workshops and sheds in the UK.</p>
                        <div class="arrow"></div>
                    </div>
                </div>
                <a href="#">
                    <img src="img/home-kGn4.png" alt="Northern Diver Logo" class="colour">
                    <img src="img/home-jHUl.jpg" alt="Northern Diver Logo" class="greyscale">
                </a>
            </div>
        </div>
</div>
<!-- newsletter signup -->
<div id="newsletter-container">
    <div class="newsletter-inner width-margin">
    <form method="POST" action="#" id="sign-up" class="sign-up">
        <h2>Email Newsletter Sign-Up</h2>
            <div class="sign-up-input-wrapper">
                <div class="sign-up-input">
                    <div class="newsletter form-group">
                        <label for="newsletter-name" class="required">Your Name</label>
                        <input class="sign-up-field" id="newsletter-name" name="name" type="text" required>
                    </div>
                </div>
                <div class="sign-up-input">
                    <div class="newsletter form-group">
                        <label for="newsletter-email" class="required">Your Email</label>
                        <input class="sign-up-field" id="newsletter-email" name="email" type="text" required>
                    </div>
                </div>
            </div>
            <div class="marketing-check form-group">
                <div class="marketing-check-content">
                    <label class="checkbox-container">
                        <input type="checkbox">
                        <span class="checkmark">
                            <!-- <i class="fas fa-check"></i> -->
                            <span class="check material-icons-outlined">done</span>
                        </span>
                        <span class="checkbox-text">
                            Please tick this box if you wish to receive marketing information from us. Please see our <a href="#" target="_blank">Privacy Policy</a> for more information on how we use your data.
                        </span>
                    </label>
                </div>
            </div>
            <div class="btn btn-newsletter">Subscribe</div>
        </form>
    </div>
</div>

<?php include "./inc/footer.php" ?>

<?php include "./inc/sidebar.php" ?>

<?php include "./inc/scripts.php" ?>
        
    </body>
</html>