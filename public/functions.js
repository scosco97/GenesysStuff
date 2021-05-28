var firebaseConfig = {
    apiKey: "AIzaSyAgpxPx4ztndRq_RSJAP8zqH1fAy_ZE9mI",
    authDomain: "genesysapi-3c7fc.firebaseapp.com",
    databaseURL: "https://genesysapi-3c7fc-default-rtdb.firebaseio.com",
    projectId: "genesysapi-3c7fc",
    storageBucket: "genesysapi-3c7fc.appspot.com",
    messagingSenderId: "117642374556",
    appId: "1:117642374556:web:29800eb1b793ebca50ec59",
    measurementId: "G-CQD3M622HF"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.firestore();
const usersCollection = database.collection('users');

window.addEventListener("load", function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has('email')){
        getCustomerDataByEmail(urlParams.get('email'));
    }
    else if (urlParams.has('phone')){
        getCustomerDataByPhone(urlParams.get('phone'));
    }
    else{
        //do nothing
    }
    
})

function getCustomerDataByEmail(address){
    var containerUserElement = document.createElement('div');
    containerUserElement.id = 'Customer';
    document.body.appendChild(containerUserElement);
    var custName = document.createElement('div');
    custName.class = "CustomerName";
    containerUserElement.appendChild(custName);
    var custMail = document.createElement('div');
    custMail.class = 'CustomerEmail';
    containerUserElement.appendChild(custMail);
    var custPhone = document.createElement('div');
    custPhone.class = 'CustomerPhone';
    containerUserElement.appendChild(custPhone);


    usersCollection.where("email", "==", address).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            var info = doc.data();
            custName.innerText = info.firstName +" "+info.lastName;
            custMail.innerText = info.email;
            custPhone.innerText = info.phone;

            doc.ref.collection("Order History").get().then(function (orderQuery){
                orderQuery.forEach((order) => {
                    console.log(order.id, "=>", order.data());
                    var temp = order.data();
                    createOrderElements(order.id, temp.Item,temp.Rating,temp.Recommended, temp.Vendor, temp.Price);
                })
            }).catch((error) => {
                console.log("Error getting documents: ", error);
            });
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    
}

function getCustomerDataByPhone(number){
    var containerUserElement = document.createElement('div');
    containerUserElement.id = 'Customer';
    document.body.appendChild(containerUserElement);
    var custName = document.createElement('div');
    custName.class = "CustomerName";
    containerUserElement.appendChild(custName);
    var custMail = document.createElement('div');
    custMail.class = 'CustomerEmail';
    containerUserElement.appendChild(custMail);
    var custPhone = document.createElement('div');
    custPhone.class = 'CustomerPhone';
    containerUserElement.appendChild(custPhone);


    usersCollection.where("phone", "==", number).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            var info = doc.data();
            custName.innerText = info.firstName +" "+info.lastName;
            custMail.innerText = info.email;
            custPhone.innerText = info.phone;

            doc.ref.collection("Order History").get().then(function (orderQuery){
                orderQuery.forEach((order) => {
                    console.log(order.id, "=>", order.data());
                    var temp = order.data();
                    createOrderElements(order.id, temp.Item,temp.Rating,temp.Recommended, temp.Vendor, temp.Price);
                })
            }).catch((error) => {
                console.log("Error getting documents: ", error);
            });
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    
}


function createOrderElements(id, item, rating, recommended, vendor, price){
    var containerOrdersElement = document.createElement('div');
    containerOrdersElement.id = 'Orders';
    var orderList = document.createElement('div');
    containerOrdersElement.appendChild(orderList);
    document.body.appendChild(containerOrdersElement);
    var newOrder = document.createElement('li');
    newOrder.class = "Order";
    orderList.appendChild(newOrder);
    var orderElements = document.createElement('ul');
    orderElements.class = "OrderElements";
    newOrder.appendChild(orderElements);
    var orderElement0 = document.createElement('div');
    orderElement0.class = "OrderID";
    orderElement0.innerText = "Transaction ID : "+id;
    orderElements.appendChild(orderElement0);
    var orderElement1 = document.createElement('li');
    orderElement1.class = "OrderItem";
    orderElement1.innerText = "Item Name : "+item;
    orderElements.appendChild(orderElement1);
    var orderElement2 = document.createElement('li');
    orderElement2.class = "OrderPrice";
    orderElement2.innerText = "Price : $"+price;
    orderElements.appendChild(orderElement2);
    var orderElement3 = document.createElement('li');
    orderElement3.class = "OrderRating";
    orderElement3.innerText = "Rating : "+rating;
    orderElements.appendChild(orderElement3);
    var orderElement4 = document.createElement('li');
    orderElement4.class = "OrderRecommended";
    orderElement4.innerText = "Recommended : "+recommended;
    orderElements.appendChild(orderElement4);
    var orderElement5 = document.createElement('li');
    orderElement5.class = "OrderVendor";
    orderElement5.innerText = "Vendor : "+vendor;
    orderElements.appendChild(orderElement5);
}