# Purecloud-examples
 Tests for the Purecloud API

INSTRUCTIONS:

 FOR CHAT FLOW TESTING:
    Admin -> Contact Center -> Widgets -> BullockWidget
    Set the Route to Flow : *Your Flow Name*
    Test at https://genesysapi-3c7fc.firebaseapp.com/

 
FOR DYNAMIC URLS:
    Create a script that takes a parameter EXAMPLE: https://genesysapi-3c7fc.firebaseapp.com/?phone={{variableName}}
    In your call or email flow, add the script and set the variable. Be mindful of formatting
    EXAMPLE: Right(Left(Call.Ani,9),3)+"-"+Right(Left(Call.Ani,12),3)+"-"+Right(Call.Ani,4) => 987-654-3210
    Add data in the firebase db. DM me with an email address and I'll add you to the project.
    Test script with an interaction. 