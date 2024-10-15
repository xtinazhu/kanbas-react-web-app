// Define a functional React component named ConditionalOutputIfEsle
const ConditionalOutputIfEsle = () => {
    // Declare a constant variable 'loggedIn' and set it to true
    const loggedIn = true;
    if(loggedIn) {
        return (<h2 id = "wd-conditional-output-if-else-welcome"> Welcome If Else </h2>);
    } else {
        return (<h2 id = "wd-conditional-output-if-else-login">Please login If Else</h2>)
    }
};
// Export the component so it can be used in other parts of the application
export default ConditionalOutputIfEsle;
