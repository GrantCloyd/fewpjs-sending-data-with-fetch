// Add your code here

// const configObject = {
//    headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//    },
//    body: JSON.stringify({
//       dogName: "SeeSaw Joe",
//       dogBreed: "Mastiff",
//    }),
// }

// fetch("http://localhost:3000/dogs", configObject)
//    .then(response => response.json())
//    .then(json => console.log(json))
//    .catch(error => {
//       console.warn(`Oh cat fuckery batman - it's not going to make it. It just gave us this:`)
//       console.log(error)
//    })

const appendToDOM = data => {
   const p = document.createElement("p")
   p.textContent = data.id
   document.body.append(p)
}
const appendFailToDOM = data => {
   const p = document.createElement("p")
   p.textContent = data.message
   document.body.append(p)
}

function submitData(userName, userEmail) {
   let userObj = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
      },
      body: JSON.stringify({
         name: userName,
         email: userEmail,
      }),
   }

   return fetch("http://localhost:3000/users", userObj)
      .then(response => response.json())
      .then(appendToDOM)
      .catch(appendFailToDOM)
}
