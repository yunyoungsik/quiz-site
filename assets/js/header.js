const header = document.querySelector("#header");

let lifeQuotes = [
    {
        say: '“지식에 대한 투자는 최고의 보상을 가져다 줄 것이다.”',
        who: '벤자민 프랭클린',
    },
    {
        say: '“많은 실패자들은 포기하기 때문에 성공이 얼마나 가까웠는지 깨닫지 못합니다.”',
        who: '토마스 에디슨',
    },
    {
        say: '“미루는 것은 쉬운 일을 어렵게 만들고 어려운 일을 더 어렵게 만든다.”',
        who: '메이슨 쿨리',
    },
    {
        say: '“노력을 대신할 수 있는 것은 없습니다.”',
        who: '토마스 에디슨',
    },
    {
        say: '“더 이상 상황을 바꿀 수 없을 때 우리는 스스로를 변화시켜야 합니다.”',
        who: '빅터 프랭클',
    },
    {
        say: '“훌륭한 사람은 레이저 같은 집중력을 가진 평범한 사람입니다.”',
        who: '브루스 리',
    },
    {
        say: '“진짜 어려움은 극복할 수 있습니다. 정복할 수 없는 것은 상상 속의 것들뿐이다.”',
        who: '시어도어 N. 베일',
    },
    {
        say: '“탁월함은 기술이 아니다. 태도입니다.”',
        who: '랄프 마스턴',
    },
    {
        say: '“성적이나 결과는 행동이 아니라 습관입니다.”',
        who: '아리스토텔레스',
    },
    {
        say: '“미래는 꿈의 아름다움을 믿는 자의 것입니다.”',
        who: '엘리너 루즈벨트',
    },
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(lifeQuotes);

const updateQuotes = (index) => {
    const quiz2 = lifeQuotes[index];
    const quizWrapTag2 = `
        <h1><a href="#"><img class="" src="assets/img/book.png" alt="logo">quiz</a></h1>
        <p>${quiz2.say}<em>${quiz2.who}</em></p>
    `;

    header.innerHTML = quizWrapTag2;
}

document.addEventListener("DOMContentLoaded", () => {
    updateQuotes(0);
});