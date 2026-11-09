# Journal
created two functions to check names and usernames using regular expressions. I learned that start and end anchors make sure the entire username follows the rules.

added phone numbers and promo codes validation. learned that regular expressions can check differernt phone formats and the i flag allows promo codes to match without worrying about upperclass or lowerclass letters

created a function to format phone numbers. In learned how  capturing groups and backreferences can take parts of a phone number and put them into a standard format

i combined all validation functions into one registration process. It checks the user's information and returns errors or successful registration data. Building the smaller functions first made the final process easier.

tested the program with different users and extra test cases. Found that regular expressions correctly rejected invalid and accepted valid information. Regular expressions make checking user input easier