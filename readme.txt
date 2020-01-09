=== Africa's Talking SMS Plugin ===
Contributors: manofstrong
Donate link: https://www.nerdyclues.com/
License: MIT
License URI: https://opensource.org/licenses/MIT
Tags: Africa’s Talking, AT, SMS, Bulk SMS API
Requires at least: 5.2
Tested up to: 5.3
Stable tag: 1.0.0
Requires PHP: 5.6.20

Send SMS from your Wordpress Website Dashboard using the Africa's Talking Bulk SMS API.

== Description ==

### Africa's Talking SMS Plugin: Wordpress Plugin for AT Bulk SMS

This is a plugin to allow Wordpress users to take advatantage of the Africa's Talking API for sending Bulk SMS. You will need to first register your account and make the payments at the the Africa's Talking Website.

From your account you will get a your Username, API Key, and the optional Shortcode. Enter this information into your settings page and then you can start using the Plugin. 

#### How to Use

There are two main options: You can enter the numbers you want to send the SMS to directly or you can use the numbers that you had uploaded. The contacts can be uploaded as a CSV file with either one column or two columns. The first column is the phone numbers and the second column is the name. If only one column is provided then it is considered to be the phone numbers.

The phone numbers accepted are those with the full details including country extensions e.g: +254 712 345 678

### Bug reports

Bug reports for the Africa's Talking Wordpress Plugin are welcomed in the [repository on GitHub](https://github.com/manofstrong/africastalking-wordpress-plugin). Please note that GitHub is not a support forum, and that issues that aren’t properly qualified as bugs will be closed.

### Further Reading

For more info on Africa's Talking API in specific, check out the following:

* The [Africa's Taking](https://africastalking.com/) official homepage.
* The [Africa's Talking Docs](https://build.at-labs.io/discover).
* The [Africa's Talking SMS Docs](https://build.at-labs.io/docs/sms%2Fsending).

== Installation ==
Starting with Africa's Talking SMS Plugin consists of just two steps: installing and setting up the plugin. Africa's Talking SMS Plugin is designed to work with your Africa’s Talking specific account, so don’t forget to setup your account details in the settings page!

### INSTALL AFRICA'S TALKING SMS PLUGIN FROM WITHIN WORDPRESS

1. Visit the plugins page within your dashboard and select ‘Add New’;
1. Search for ‘Africa's Talking SMS Plugin’;
1. Activate Africa's Talking SMS Plugin from your Plugins page;
1. You should be redirected to the plugins settings page as shown below.

### INSTALL AFRICA'S TALKING SMS PLUGIN MANUALLY

1. Upload the ‘Africa's Talking SMS Plugin’ folder to the /wp-content/plugins/ directory;
1. Activate the Africa's Talking SMS Plugin plugin through the ‘Plugins’ menu in WordPress;
1. You should be redirected to the plugins settings page as shown below.

### SETTINGS PAGE

1. You should see a form requiring your Username, API Key, and theoptional Shortcode.
1. Enter this and make sure they are accurate. You can obtain them from your Africa’s Talking account.
1. You’re done!

== Frequently Asked Questions ==

= Is this plugin affliated with the Africa's Talking Company? =

No. This is not an official product. I just needed to develop it at some point as a project for a client and decided to polish it up and offer it up as a Plugin to other Wordpress Users.

= Why are the the SMS messages are not being sent? =

This could be due to a number of reasons including but not limited to the ones below"
1. You used the wrong creditials: Recheck your Username, API Key, and the optional Shortcode and make sure they are the ones provided in your Africa's Talking account.
1. You have insufficient funds in your Africa's Talking account. Check your Africa's Talking account and top up the funds.
1. The particular number might be in a blacklist. The number is blacklisted for some reason or the other.

= Why does my CSV file keeps being rejected? =

The plugin only accepts valid CSV files with one or two columns. Any other file is rejected. CSV files with more than 2 columns are also rejected.

= How do I get support? =

As our free plugin is used by millions of people worldwide, I cannot offer you all one on one support.But I will do my best to assist you, you can see details on how to get support and help from the Support page of the plugin.ns about that plugin.

= I have a different question than listed here =

Reach me via support page and I will do my best to assist.

== Screenshots ==

1. The Africa's Talking SMS Plugin settings page. You provide your Username, API Key, and the optional Shortcode here.
2. The Africa's Talking SMS Plugin support page. You should see the different ways of reaching out for help here.
3. The Africa's Talking SMS Plugin general page. You will send your SMS from here. This is the view of the first option of entering the contacts manually.
4. The Africa's Talking SMS Plugin general page. You will send your SMS from here. This is the view of the second option of sending from saved contacts (groups).
5. The Africa's Talking SMS Plugin add contacts page. You will upload your contacts CSV file here.
6. The Africa's Talking SMS Plugin manage contacts page. You will manage your groups here.
7. The Africa's Talking SMS Plugin manage contacts page. You will manage your group's contacts here.

== Changelog ==

= 1.0.0 =
Innitial Realease