// let jsonRes = 
// '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student = {
//     name: "Faizan",
//     marks: 85,
// };




let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {

//         return res.json();
//     })
//     .then((data) => {
//         console.log("data1 =", data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         //console.log(data);
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("sata2 = ", data2.fact);
//     })
//     .catch((err) => {
//         console.log("ERROR - ", err);
//     });

//     console.log("i am happy")



async function getfacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);

    } catch (e) {
        console.log("error - ", e);
    }
    
    console.log("bye");
}