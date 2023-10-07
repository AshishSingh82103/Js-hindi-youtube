 const accountId = 234342;
 let accountEmail = "singhashish82013@gmail.com"; // reasigne the value
 var accountPassword = "22434323"; // reasigne the value
 accountCity = "Varanasi";
 let accountState; //O/P=> undefiined

  //  accountId = 2; const key can not reassigne the value
  console.log(accountId); //234342

 accountEmail = "ashishguru0203@gmail.com";
 accountPassword = "Ashish@3434";
 accountCity = "bengluru";
 /*
 Prefer not use to var
 because of issue in block scope and functional scope
 */

 console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


