import React from "react";
;
const CreateUsers = () => {
  let nuevoUsuario = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
    const createNewUser = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        body: JSON.stringify(nuevoUsuario)
    });
}

  return (
    <div>
      <button onClick={createNewUser}>Agregar nuevo usuario</button>
    </div>
  );
;
}
export default CreateUsers;
