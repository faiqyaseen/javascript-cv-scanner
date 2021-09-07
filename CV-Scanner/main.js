console.log("Welcome To CV-Scanner");

// Data is an array of objects which contains the information about candidates
const data = [
    {
        name:'Ali Shinwari',
        age:18,
        city:'Karachi',
        language:'Python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/men/61.jpg'
    },
    {
        name:'Sajeel Mansoor',
        age:21,
        city:'Lahore',
        language:'Javascript',
        framework:'Angular',
        image:'https://randomuser.me/api/portraits/med/men/62.jpg'
    },
    {
        name:'Ayesha Salman',
        age:25,
        city:'Hydarabad',
        language:'Python',
        framework:'Flask',
        image:'https://randomuser.me/api/portraits/med/women/63.jpg'
    },
    {
        name:'Baber Azeem',
        age:28,
        city:'Sukkur',
        language:'Python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/men/64.jpg'
    },
    {
        name:'Salman Akber',
        age:26,
        city:'Sialkot',
        language:'Go',
        framework:'Go framework',
        image:'https://randomuser.me/api/portraits/med/men/65.jpg'
    },
]

function cvIterators(profiles){
    let nextIndex = 0;
    return{
        next:function(){
            return nextIndex < profiles.length?
            {value: profiles[nextIndex++], done: false} :
            {done:true}
        }
    };
}

// button listener for next button

const next = document.getElementById('next');
next.addEventListener('click',nextCV);

const candidates = cvIterators(data);  

nextCV();

function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML=`<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">  
    <li class="list-group-item list-group-item-primary">Name: ${currentCandidate.name}</li>
    <li class="list-group-item list-group-item-secondary">${currentCandidate.age} years old </li>
    <li class="list-group-item list-group-item-warning">lives in ${currentCandidate.city}</li>
    <li class="list-group-item list-group-item-success">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item list-group-item-danger">Uses ${currentCandidate.framework} framework</li>
  </ul>`
    }
    else{
        alert('End of candidates Application');
        window.location.reload();
    }
}