// let name_ = 'ABC',bao="bao"
// console.log('Tên này là:', name_,bao)
// console.log(`Tên này là ${name_} ${bao}`)

// function count(count){
//     for(let i = 0; i < count; i++ )
//         console.log(`số : ${i}`);

// }

// count(10)


// let my_arr =[`a`,`b`,`c`]

// function printName(name){
//     for(let i = 0; i < my_arr.length; i++)
//         console.log(`${my_arr[i]}`);
// }

// printName(my_arr);

// let my_arr =[`a`,`b`,`c`]

// function printName(my_arr){
//     for(let i in my_arr)
//         console.log(`${my_arr[i]}`);
// }

// printName(my_arr);

// function printName(my_arr){
//     for(let i of my_arr)
//         console.log(i);
// }

// printName(my_arr);

// function printName(my_arr){
//     forEach(function(){

//     })
//         console.log();
// }

// printName(my_arr);


let ny_obj=[
    {
    name:"Công",
    age:19
    },
    {
    name:"Bảo",
    age:20
    },
        
]

function printFull(ny_obj){
    let html= ny_obj.map(function(ny){
        return `
        <li>
        <h2>${ny.name}</h2>
        ${ny.age}
        </li>
        `
    })
    let htmls=html.join('')
    document.querySelector('.show').innerHTML=htmls
}


printFull(ny_obj)
