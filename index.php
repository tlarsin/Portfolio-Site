<?php
	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
        $subject = $_POST['subject'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$from = 'Portfolio Contact Form';
		$to = 'tlarsin@gmail.com';

		$body ="From: $name\n E-Mail: $email\n Message:\n $message";
		// Check if name has been entered
		if (!$_POST['name']) {
			$errName = 'Please enter your name';
		}

        if(!$_POST['subject']) {
            $errSubject = 'Please enter the subject';
        }

		// Check if email has been entered and is valid
		if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
		}

		//Check if message has been entered
		if (!$_POST['message']) {
			$errMessage = 'Please enter your message';
		}

// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage) {
	if (mail ($to, $subject, $body, $from)) {
		$result='<div class="alert alert-success">Thank You! I will be in touch</div>';
	} else {
		$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later.</div>';
	}
}
	}
?>

    <!doctype html>
    <html>

    <head>
        <title>Tristan Larsin</title>

        <meta name="author" content="Tristan Larsin">
        <meta name="description" content="Tristan Larsin is a web designer that sells templates and does customized websites.">

        <link rel="stylesheet" type="text/css" href="assets/css/about.css">
        <link rel="stylesheet" type="text/css" href="assets/avenir-next-lt-pro/style.css">
        <link rel="icon" type="image/png" href="assets/favicon1.ico" </head>

        <body>
            <div class="top">
                <h1>Tristan Larsin</h1>
                <div class="parent">
										<div class="child active">
												<a href="index.php">About</a>
										</div>
                    <div class="child">
                        <a href="design.html">Work</a>
                    </div>
                    <div class="child">
                        <a href="writing.html">Writing</a>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="contentTop">
									<h2>About Me</h2>
			            <p>Get to know me</p>
			            <hr>
                </div>
                <div class="section1">
                    <div class="left">
                        <p>My name is Tristan Larsin. I am a Senior attending
                            <br> University of Minnesota Duluth. I am majoring in
                            <br> Computer Science and minoring in Mathematics and
														<br> Computer Engineering.
                						<br>
                            <br> I fell in love with computers designing websites
														<br> for fun when I was 16.
                            <br>
														<br> In the last few months I have fell in love with
														<br> Android Development. I am currently working on
														<br> an app for a Physic's professor here at UMD.
                            <br>
                            <br> In my free time I enjoy watching sports,
														<br> playing games, hanging out with friends,
														<br> and anything computer related.
                            <br>
                            <br><span>Please contact me if you in need of my services.</span></p>

                    </div>
										<div class="right">
											<img src="assets/images/selfie.JPG" alt="">
										</div>
                </div>
                <div class="section2">
                    <div class="form">
                        <form class="form-horizontal" role="form" method="post" action="index.php">
                            <div class="leftForm">
                                <div class="form-group">
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="name" name="name" placeholder="Name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
                                        <?php echo "<p class='text-danger'>$errName</p>";?>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" value="<?php echo htmlspecialchars($_POST['subject']); ?>">
                                        <?php echo "<p class='text-danger'>$errSubject</p>";?>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email" value="<?php echo htmlspecialchars($_POST['email']); ?>">
                                        <?php echo "<p class='text-danger'>$errEmail</p>";?>
                                    </div>
                                </div>
                            </div>
                            <div class="rightForm">
                                <div class="form-group">
                                    <div class="col-sm-10">
                                        <textarea class="form-control" rows="4" id="message" name="message" placeholder="Message"><?php echo htmlspecialchars($_POST['message']);?></textarea>
                                        <?php echo "<p class='text-danger'>$errMessage</p>";?>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-10 col-sm-offset-2">
                                    <input id="submit" name="submit" type="submit" value="Send" class="btn btn-primary">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-10 col-sm-offset-2 thanks">
                                    <?php echo $result; ?>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="info">
                    <ul class="leftList">
                        <li><a href="design.html">Web Design</a></li>
                        <li><a href="imdex.php">About</a></li>
                        <li><a href="writing.html">Writing</a></li>
                    </ul>
                    <ul class="rightList">
                        <li><a href="https://github.com/tlarsin">GitHub</a></li>
                    </ul>
                </div>
            </div>
        </body>

    </html>
