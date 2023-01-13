console.log("hi api stuff")


fetch('https://api.github.com/users/tomhughes87')
  .then((response) => response.json())
  .then((data) => useApi(data));


  function useApi(data) {
    console.log(data)


   document.getElementById("username-api").innerHTML=data.name
   document.getElementById("Projects").innerHTML=data.public_repos


  }