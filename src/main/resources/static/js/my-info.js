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