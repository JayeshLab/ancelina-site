<?php
// ************************************
// This file is part of a package from:
// www.majesticform.com
// See license for details
// January 2022
// ************************************


// ***********
// LICENSE KEY
// ***********
define('KEY', 'fc2-8feGwRbHw28Fn-FT97WXARBDPC6');


// ***********
// LANGUAGE
// ***********
define('LANG','en');
// ************
// TIMEZONE
// ************
date_default_timezone_set('Central European Time'); 
// See: http://www.php.net/manual/en/timezones.php
define('HOURS_OFFSET', '+0');
// See: http://www.php.net/manual/en/function.date.php
define('EMAIL_DATEFORMAT', 'H:i d-m-Y');

// *********************
// FORM FIELD VALIDATION
// *********************
$rules = array(
  "text-1653549827513" => array(
    "required" => true,
    "label" => "Name"
  ),
  "text-1653550775428" => array(
    "required" => true,
    "label" => "Last name"
  ),
  "Email" => array(
    "required" => true,
    "label" => "E-mail&nbsp;",
    "maxLength" => 100,
    "email" => true
  ),
  "text-1653549873241" => array(
    "required" => true,
    "label" => "Phone"
  ),
  "textarea-1653549944613" => array(
    "required" => true,
    "label" => "Message",
    "maxLength" => 400
  )
);


// ******************
// THANK YOU PAGE
// ******************
define('THANK_YOU_PAGE','../en/message-sent');


// **************************
// EMAIL TEMPLATES - INCOMING
// **************************
define('EMAIL_TEMPLATE_IN_HTML', '900709.email-in.htm');
define('EMAIL_TEMPLATE_IN_TEXT', '900709.email-in.txt');


// *******************************
// EMAIL TEMPLATES - AUTO-RESPONSE
// *******************************
define('EMAIL_TEMPLATE_OUT_HTML', '900709.email-out.htm');
define('EMAIL_TEMPLATE_OUT_TEXT', '900709.email-out.txt');

define('SEND_AUTO_RESPONSE', 'YES'); // YES OR NO
define('EMAIL_OUT_SUBJECT', 'Thanks for your message');
define('EMAIL_OUT_TO', 'FIELD:Email');
define('EMAIL_OUT_TO_NAME', 'FIELD:Name');
define('EMAIL_OUT_FROM', 'info@allmedialab.be');
define('EMAIL_OUT_FROM_NAME', '');


// *************
// EMAIL MESSAGE
// *************
define('EMAIL_TO', 'info@allmedialab.be');
define('EMAIL_TO_NAME', 'info@allmedialab.be');

define('EMAIL_TO_CC', '');
define('EMAIL_TO_CC_NAME', '');

define('EMAIL_TO_BCC', '');
define('EMAIL_TO_BCC_NAME', '');

define('EMAIL_FROM', 'info@allmedialab.be');
define('EMAIL_FROM_NAME', 'info@allmedialab.be');

define('EMAIL_REPLY_TO', 'FIELD:Email');
define('EMAIL_REPLY_TO_NAME', 'FIELD:Email');

define('EMAIL_SUBJECT_BEFORE', '');
define('EMAIL_SUBJECT', "Message from the AllMediaLab landing pages!");
define('EMAIL_SUBJECT_AFTER', '');



// ***************
// EMAIL TRANSPORT
// ***************
define('USE_SMTP', 'NO'); // YES or NO
define('SMTP_HOST', '');
define('SMTP_USER', '');
define('SMTP_PASS', '');
define('SMTP_AUTH', '');
define('SMTP_SECURE', ''); // STARTTLS, SMTPS (port 465) or empty
define('SMTP_PORT', '');
define('SMTP_DEBUG', 'NO'); // YES or NO


// ************
// reCAPTCHA V3
// ************
define('RECAPTCHA_SITEKEY', '6LdR7ckcAAAAAGyNv1truljwhfahSDTvCsABilmX');
define('RECAPTCHA_SECRETKEY', '6LdR7ckcAAAAAHinsarg1C5BnGcpHFFEY8exFkpQ');
define('RECAPTCHA_SCORE', '0.5');
define('RECAPTCHA_ACCEPT_LOW_SCORE', 'NO'); // YES or NO



// **************************
//    DON'T CHANGE BELOW
// USED FOR VALIDATION CHECKS
// **************************
define('A', 'Rm9ybSBwcm92aWRlZCBieSB3d3cuZnJlZWNvbnRhY3Rmb3JtLmNvbQ==');
define('B', 'Rm9ybSBwcm92aWRlZCBieSA8YSBocmVmPSJodHRwczovL3d3dy5mcmVlY29udGFjdGZvcm0uY29tIj5GcmVlQ29udGFjdEZvcm0uY29tPC9hPg==');
define('C', 'Rm9ybSBwcm92aWRlZCBieSA8YSBocmVmPSJodHRwczovL3d3dy5mcmVlY29udGFjdGZvcm0uY29tIiB0YXJnZXQ9Il9ibGFuayI+RnJlZUNvbnRhY3RGb3JtLmNvbTwvYT4=');
define('D', 'Y29uZ3JhdHVsYXRpb25zIGZvciBiZWluZyBjbGV2ZXIh');
define('E', 'OGZlR3dSYkh3MjhGbg==');
define('F', 'RlJFRQ==');