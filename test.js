const createDatabase = [
    { id: 1, name: 'sok' },
    { id: 2, name: 'sao' },
    { id: 3, name: 'pisey' }
  ];

function findID(id){
    setTimeout(()=>{
        const UserID = createDatabase.find((user) => user.id === id)
        if(UserID){
            console.log("You've taken user: " , user);
        }else{
            console.log("You didn't take any User");
        }
    },2000)
}

findID(1)



// function display(filtoutUser){
//     findID(filtoutUser)
//         if(user){

//         }

    
// }