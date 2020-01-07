const firstElement = document.querySelector('.scene')
const secondElement = document.querySelector('.details')
const thirdElement = document.querySelector('.footer')

const firstSet = document.querySelectorAll(".img[data-depth='1']");
const secondSet = document.querySelector(".img[data-depth='2']");
const thirdSet = document.querySelector(".img[data-depth='3']");
const fourthSet = document.querySelector(".img[data-depth='4']");
const fifthSet = document.querySelector(".img[data-depth='5']");
const sixthSet = document.querySelectorAll(".img[data-depth='6']");
const seventhSet = document.querySelectorAll(".img[data-depth='7']");

const myArray = [
    {
        setName: firstSet,
        displacementAmount: 100,
    },
    {
        setName: secondSet,
        displacementAmount: 70,
    },
    {
        setName: thirdSet,
        displacementAmount: 150,
    },
    {
        setName: fourthSet,
        displacementAmount: 30,
    },
    {
        setName: fifthSet,
        displacementAmount: 35,
    },
    {
        setName: sixthSet,
        displacementAmount: 40,
    },
    {
        setName: seventhSet,
        displacementAmount: 45,
    },
]

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;


firstElement.addEventListener('mousemove', move)
secondElement.addEventListener('mousemove', move)
thirdElement.addEventListener('mousemove', move)

function move(e) {
    var positionX = e.clientX - (width / 2);
    var positionY = e.clientY - (height / 2);
    var x = positionX / width;
    var y = positionY / width;
    myArray.forEach(set => displacement(set.displacementAmount, set.setName, x, y))
}

function displacement(value, element, x, y) {
    var disX = x * value;
    var disY = y * value;
    editStyle(disX, disY, element);
}

function editStyle(x, y, element) {
    if (element.length) {
        element.forEach(e => e.style.transform = `translate3d(${-x}px, ${-y}px, 0)`)
    } else {
        element.style.transform = `translate3d(${-x}px, ${-y}px, 0)`
    }
}