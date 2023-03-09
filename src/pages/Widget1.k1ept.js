// For Velo API Reference documentation visit http://wix.to/94BuAAs
// To learn about widget code visit https://www.wix.com/app-builder/home/resources

import backend from 'backend/backend';

$w.onReady(async function () {
	// Initialize your widget here. If your widget has properties, this is a good place to read their values and initialize the widget accordingly.
	$w('#text1').text = (await backend.sayHello()) + ' from Tzachi!';
});

$widget.onPropsChanged((oldProps, newProps) => {
	// If your widget has properties, onPropsChanged is where you should handle changes to their values.
	// Property values can change at runtime by code written on the site, or when you preview your widget here in the App Builder.
	
});
