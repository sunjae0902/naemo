
if(localStorage.getItem("userName") == null){
document.addEventListener("DOMContentLoaded",() => {

      // CSS 파일 지정
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = 'src/css/style.css'; 
  
      // HTML 문서의 head에 link 요소 추가
      document.head.appendChild(linkElement);

      const style = document.body.style;

     // 버튼
     const buttonElement = document.createElement('button');
     buttonElement.textContent = "시작하기";
     buttonElement.id = 'start-button';
     buttonElement.addEventListener("click", ()=>{
        console.log('goto Login page');
     })

    // 문단 요소 생성
    const paragraph1 = document.createElement('p');
    paragraph1.innerHTML = "나만의 데일리 플래너<br/>Naemo";
    paragraph1.id = "p1";

    const paragraph2 = document.createElement('p');
    paragraph2.innerHTML = "어디에서나 간편하게,<br/>하루 일정을 정리하고 확인해보세요.";
    paragraph2.id = "p2";

    document.body.appendChild(paragraph1);
    document.body.appendChild(paragraph2);
    document.body.appendChild(buttonElement);
    style.background = "url('src/asset/image/logo_v1.png') no-repeat"; // 반복 채우지 않음
    style.backgroundPosition = "80% -15%" 
    style.objectFit = "contain"

});

}
else{
    // go to main page
    console.log('안녕하세요, '+localStorage.getItem("userName")+'님');
}
