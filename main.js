fetch('https://randomuser.me/api/?results=50')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

        for(let i=0;i<data.results.length;i++){
            let newDiv= document.createElement("div")

            let newh1= document.createElement("h1")
            newh1.innerHTML= "First Name: " + data.results[i].name.first
            newDiv.append(newh1)

            let newh2= document.createElement("h1")
            newh2.innerHTML= "Last Name: " + data.results[i].name.last
            newDiv.append(newh2)


            let newp= document.createElement("p")
            newp.innerHTML="gender: " + data.results[i].gender
            newDiv.append(newp)

            newDiv.className="style"

            document.body.append(newDiv)
        }
    })