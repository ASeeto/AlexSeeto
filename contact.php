<script type="text/javascript" src="js/contact_form.js"></script>
<h1>Contact</h1>
<form id="ajax-contact-form" action="javascript:alert('success!');">
    <fieldset class="info_fieldset">
        <div id="note"></div>
        <div id="fields">
            <input class="textbox" type="text" name="name" value="" placeholder="Name" />
            <input class="textbox" type="text" name="email" value="" placeholder="Email Address" /><br />
            <div id="subjectoptions">
                <input class="subject subjectselect" value="Other" readonly>
                <input class="subject" value="Business" readonly>
                <input class="subject" value="Personal" readonly>
                <!-- Hacky, but works for now! -->
                <input id="subject" name="subject" value="Other" style="display:none">
            </div>
            <textarea class="textbox2" name="message" rows="5" cols="25" placeholder="Message"></textarea><br />
            <input class="button" type="submit" value="Send Message" />
        </div>
    </fieldset>
</form>