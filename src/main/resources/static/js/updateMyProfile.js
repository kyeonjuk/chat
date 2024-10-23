document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');

    container.addEventListener('scroll', function () {
        // 스크롤이 있을 때 .scrolled 클래스 추가
        if (container.scrollHeight > container.clientHeight) {
            container.classList.add('scrolled');
        } else {
            container.classList.remove('scrolled'); // 스크롤이 없을 때 클래스 제거
        }
    });
});


// 이미지 불러오기 -> 미리보기
const profileImageInput = document.getElementById('profileImage');
const profileImage = document.querySelector('.profile-image');

profileImageInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            profileImage.src = event.target.result; // 이미지 소스 변경
        }
        reader.readAsDataURL(file); // 파일을 데이터 URL로 읽기
    }
});