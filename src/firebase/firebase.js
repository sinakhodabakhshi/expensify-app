import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCTbJ5XB0VI_EphLAO6d1yEC8b_6WG6GVw",
    authDomain: "expensify-b23cd.firebaseapp.com",
    databaseURL: "https://expensify-b23cd-default-rtdb.firebaseio.com",
    projectId: "expensify-b23cd",
    storageBucket: "expensify-b23cd.appspot.com",
    messagingSenderId: "90885345236",
    appId: "1:90885345236:web:3287713de43c52eaff1041"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export  { firebase , database as default };







// database.ref('expenses').on('child_removed' , (snapshot) => {
//     console.log(snapshot.key , snapshot.val())
// })

// database.ref('expenses').on('child_changed' , (snapshot) => {
//     console.log(snapshot.key , snapshot.val())
// })


// database.ref('expenses').on('value' , (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childesnapshot) =>{
//         expenses.push({
//             id: childesnapshot.key,
//             ...childesnapshot.val()
//         })
//     })
//     console.log(expenses)
// }, (e) =>{
//     console.log('we have a problem fetching data:' , e)
// })




// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach( childeSnapshot => {
//         expenses.push({
//            id: childeSnapshot.key,
//            ...childeSnapshot.val()
//         })
//     });
//     console.log(expenses)
// })



// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     amount: 27,
//     createdAt:326462374242
// })

// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     amount: 27,
//     createdAt:326462374242
// })

// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     amount: 27,
//     createdAt:326462374242
// })



// const note = [{
//     id: 1,
//     title: "note1",
//     note: "somthing somthing ...",
// },{
//     id: 2,
//     title: "note2",
//     note: "somthing somthing ...",
// },{
//     id: 3,
//     title: "note3",
//     note: "somthing somthing ...",
// }]

// const data = {
//     name: 'sina',
//     job: {
//         title: 'software engneer',
//         company: 'google'
//     }
// }

// database.ref('notes').set(note)
// database.ref('data').set(data)



// database.ref().on('value' , (snapshot) => {
//     const data = snapshot.val();
//     const message = `${data.name} is a ${data.job.title} at ${data.job.company}`;
//     console.log(message)
// } , (e) => {
//     console.log("error occur :", e)
// })

// setTimeout(() => {
//     database.ref().update({
//         "job/company": 'digikala'
//     })
// }, 3000)


// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })

// setTimeout(()=>{
//     database.ref().update({
//         age:23
//     })
// },3000)

// setTimeout(()=>{
//     database.ref().off()
// },5000)

// setTimeout(()=>{
//     database.ref().update({
//         age:27
//     })
// },7000)






// database.ref('location')
//         .once("value")
//         .then((snapshot) => {
//             console.log(snapshot.val())
//         })

// database.ref().set({
//     name:'sina',
//     age:23,
//     stressLevel: 6,
//     job: {
//         title: "software engnear",
//         company: "google"
//     },
//     isSingle:true,
//     location: {
//         city: 'esfahan',
//         country: 'iran'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) =>{
//     console.log('this fail' , e);
// })


// database.ref('name').remove().then(() => {console.log('removed')})
// database.ref('isSingle').set(null).then(() => {console.log('removed')})

// database.ref().update({
//    stressLevel: 9,
//    "job/company": "amazon",
//    "location/city": "seatle"
// })
