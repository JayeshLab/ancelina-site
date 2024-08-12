<?php
// Built with the Form Creator from www.majesticform.com
// Built on: 2022-05-26 04:18:53
// Creator version: 1.4
// Code version: 1.6

$form_id = 900709;
$form_name = "Formulier Engels Voerstreek";
$form_template = '<!doctype html>
    <!-- {HTML-Lang} -->
    <head>
        <meta charset=\"utf-8\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">
        <link rel=\"stylesheet\" href=\"fcf-assets/css/fcf.materialize.min.css\">
        <title>Formulier Engels Voerstreek</title>
    </head>
    <body>
    <div style=\"max-width:500px;padding:30px\">
    <div id=\"fcf-form\">
    <form class=\"col s12 fcf-form-class\" method=\"post\" action=\"fcf-assets/fcf.process.php\">
    <!-- {SiteKey-Hidden} -->
    <div class=\"row\">
        <div class=\"input-field col s12\">
          <input type=\"text\" name=\"text-1653549827513\" id=\"text-1653549827513\" data-validate-field=\"text-1653549827513\">
          <label for=\"text-1653549827513\">Name</label>
        </div>
      </div>
    <div class=\"row\">
        <div class=\"input-field col s12\">
          <input type=\"text\" name=\"text-1653550775428\" id=\"text-1653550775428\" data-validate-field=\"text-1653550775428\">
          <label for=\"text-1653550775428\">Last name</label>
        </div>
      </div>
    <div class=\"row\">
        <div class=\"input-field col s12\">
          <input type=\"email\" name=\"Email\" id=\"Email\" maxlength=\"100\" data-validate-field=\"Email\">
          <label for=\"Email\">E-mail&nbsp;</label>
        </div>
      </div>
    <div class=\"row\">
        <div class=\"input-field col s12\">
          <input type=\"tel\" name=\"text-1653549873241\" id=\"text-1653549873241\" data-validate-field=\"text-1653549873241\">
          <label for=\"text-1653549873241\">Phone</label>
        </div>
      </div>
    <div class=\"row\">
        <div class=\"input-field col s12\">
            <textarea name=\"textarea-1653549944613\" id=\"textarea-1653549944613\" class=\"materialize-textarea\" maxlength=\"400\" data-validate-field=\"textarea-1653549944613\"></textarea>
            <label for=\"textarea-1653549944613\">Message</label>
        </div>
    </div>
    <div id=\"fcf-status\" class=\"fcf-status\"></div>
    <div class=\"row\">
        <div class=\"input-field col s12\">
            <button id=\"fcf-button\" class=\"btn waves-effect waves-light btn-large col s12\" type=\"submit\" name=\"submit\">Submit</button>
        </div>
    </div>
    </form>
        </div>
        <div id=\"fcf-thank-you\" style=\"display:none\">
            <!-- Thank you message goes below -->
            <p>Thanks for contacting us, we will be in touch with you soon.</p>
            <!-- Thank you message goes above -->
        </div>
    </div>
    <script src=\"fcf-assets/js/fcf.materialize.min.js\"></script>
    <!-- {JS-Lang} -->
    <!-- {JS-Validate} -->
    </body>
    </html>
    ';

$css_template = '';

$form_valjs = '{
  "text-1653549827513": {
    "required": true
  },
  "text-1653550775428": {
    "required": true
  },
  "Email": {
    "required": true,
    "maxLength": 100,
    "email": true
  },
  "text-1653549873241": {
    "required": true
  },
  "textarea-1653549944613": {
    "required": true,
    "maxLength": 400
  }
}';

$rules = '$rules = array(
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
);';

$email_html = '<tr>
        <td style="color: #000000; font-family: Arial, sans-serif; font-size: 14px; font-weight:bold">
            Name
        </td>
        <td style="color: #153643; font-family: Arial, sans-serif; font-size: 14px;">
            {text-1653549827513}
        </td>
    </tr><tr>
        <td style="color: #000000; font-family: Arial, sans-serif; font-size: 14px; font-weight:bold">
            Last name
        </td>
        <td style="color: #153643; font-family: Arial, sans-serif; font-size: 14px;">
            {text-1653550775428}
        </td>
    </tr><tr>
        <td style="color: #000000; font-family: Arial, sans-serif; font-size: 14px; font-weight:bold">
            E-mail&amp;nbsp;
        </td>
        <td style="color: #153643; font-family: Arial, sans-serif; font-size: 14px;">
            {Email}
        </td>
    </tr><tr>
        <td style="color: #000000; font-family: Arial, sans-serif; font-size: 14px; font-weight:bold">
            Phone
        </td>
        <td style="color: #153643; font-family: Arial, sans-serif; font-size: 14px;">
            {text-1653549873241}
        </td>
    </tr><tr>
        <td style="color: #000000; font-family: Arial, sans-serif; font-size: 14px; font-weight:bold">
            Message
        </td>
        <td style="color: #153643; font-family: Arial, sans-serif; font-size: 14px;">
            {textarea-1653549944613}
        </td>
    </tr>';

$email_text = '
Name: {text-1653549827513}
Last name: {text-1653550775428}
E-mail&nbsp;: {Email}
Phone: {text-1653549873241}
Message: {textarea-1653549944613}';