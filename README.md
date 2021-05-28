# Purecloud-examples
 Tests for the Purecloud API

INSTRUCTIONS:

 FOR CHAT FLOW TESTING: <br />
    Admin -> Contact Center -> Widgets -> BullockWidget <br />
    Set the Route to Flow : *Your Flow Name* <br />
    Test at https://genesysapi-3c7fc.firebaseapp.com/ 

 
FOR DYNAMIC URLS: <br />
    Create a script that takes a parameter EXAMPLE: https://genesysapi-3c7fc.firebaseapp.com/?phone={{variableName}}  <br />
    In your call or email flow, add the script and set the variable. Be mindful of formatting <br />
    EXAMPLE: Right(Left(Call.Ani,9),3)+"-"+Right(Left(Call.Ani,12),3)+"-"+Right(Call.Ani,4) => 987-654-3210 <br />
    Add data in the firebase db. DM me with an email address and I'll add you to the project. <br />
    Test script with an interaction. 
