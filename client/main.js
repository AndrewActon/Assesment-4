const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const welcome = document.getElementById("name")  
const nick = document.getElementById('nick')
const deleteN = document.getElementById('deleteNick')

const getCompliment = () => {
    axios.get("http://localhost:4001/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4001/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const welcomeMessage = (e) => {
    e.preventDefault()

    let firstName = document.querySelector('#firstName')
    let lastName = document.querySelector('#lastName')

    let bodyObj = {
        first: firstName.value,
        last: lastName.value
    }

    console.log(bodyObj)

    axios.post("http://localhost:4001/api/user/", bodyObj)
    .then(res => {
        const data = res.data
        alert(`Welcome ${data[0].firstName} ${data[0].lastName}`)
    })
}

const addNickname = (e) => {
    e.preventDefault()

    let nickName = document.querySelector('#nickname')
    
    let bodyObj = {
        nick: nickName.value
    }


    axios.put("http://localhost:4001/api/user/", bodyObj).then(res => {
        const data = res.data
        alert(data)
    })
}

const deleteNick = () => {
    console.log('front end delete')
    axios.delete("http://localhost:4001/api/user/").then(res => {
        const data = res.data
        alert(data)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
welcome.addEventListener('submit', welcomeMessage)
nick.addEventListener('submit', addNickname)
deleteN.addEventListener('click', deleteNick)