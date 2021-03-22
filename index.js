jQuery.fn.FCInstagram.accessData = {
    accessToken: "IGQVJVZAWR5dDhsMENSWDFkZAEI3b1NXdzJlNGlWbjRiOUd3cjdRUmw3QkQxNi1NV2U3OHN0czREcmxSNGZAFYl9PdE1JUFdzTFlYRFc3eVZAIMlEtczQ2NXRWYUhhT19MenN1YXhHUXB5aVRubDJFd0ZADTwZDZD", // Token
};
$('#instafeed').FCInstagram({
    max: 1, // A number between 1 and 25 of photos to show. Default: 9
    autoplay: true, // Set autoplay video: true/false. Default: false
    complete: function () { // A callback function to execute after the display of the photos.
        console.log('completed');
    }
});
