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

// 검색하기 -> API 호출
document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('button.btn-primary');
    const friendSearchInput = document.getElementById('friendSearch');
    const friendCard = document.querySelector('.friend-card');

    searchButton.addEventListener('click', function () {
        const friendEmail = friendSearchInput.value.trim();

        if (friendEmail === '') {
            alert('친구 이메일을 입력하세요.');
            return;
        }

        // Path parameter 를 사용하여 이메일로 API 호출
        fetch(`/findFriend/${encodeURIComponent(friendEmail)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success && data.friend) {
                // 친구가 검색되면 친구 정보를 표시
                showFriendInfo(data.friend);
            } else {
                // 친구가 없으면 메시지 표시
                showNoFriendFound();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('오류가 발생했습니다.');
        });
    });

    // 친구 정보를 표시하는 함수
    function showFriendInfo(friend) {
        // 기본 이미지 URL
        const defaultImageUrl = '/images/100.png';

        // 프로필 이미지 URL (friend.profileImageUrl이 null이거나 undefined일 경우 기본 이미지 사용)
        const profileImageUrl = friend.profileImageUrl || defaultImageUrl;

        // innerHTML을 통해 친구 카드 내용 업데이트
        friendCard.innerHTML = `
            <div class="card mb-3 mt-3">
                <div class="text-center mt-3">
                    <img src="${profileImageUrl}" alt="Profile Image" class="profile-image">
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">${friend.name}</h5>
                    <p class="card-text">@${friend.email}</p>
                    <a href="#" class="btn btn-primary">채팅 시작하기</a>
                </div>
            </div>
        `;
    }


    // 친구를 찾을 수 없을 때 메시지 표시
    function showNoFriendFound() {
        friendCard.innerHTML = `
            <div class="mb-3 mt-4">
                <div class="card-body text-center">
                    <h5 class="card-title">검색한 친구를 찾을 수 없습니다.</h5>
                    <p class="card-text"></p>
                </div>
            </div>
        `;
    }

});



