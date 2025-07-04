let nav2 = document.querySelector("#nav2Area");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
    nav2.classList.toggle("open");
}

mask.onclick = () => {
    nav2.classList.toggle("open");
}





// ▼▼▼ スライドショー機能 ▼▼▼
document.addEventListener('DOMContentLoaded', function() {

    // スライドショー関連の要素を取得
    const images = document.querySelectorAll('.slide-img');
    const texts = document.querySelectorAll('.slide-text');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // ▼▼▼ 「詳しく見る」リンクの要素と、各スライドのURLを定義 ▼▼▼
    const detailsLink = document.getElementById('detailsLink');
    const slideLinks = [
        "menyu.html",
        "Notice.html",
        "Notice.html#seasonal",
        "Notice.html"
    ];
    
    let currentSlide = 0;
    let slideInterval;

    // スライドを切り替えるメインの関数
    function showSlide(index) {
        images.forEach(img => img.classList.remove('active'));
        texts.forEach(text => text.classList.remove('active'));

        images[index].classList.add('active');
        texts[index].classList.add('active');
        
        // ▼▼▼ リンクのURLを現在のスライドに合わせて更新 ▼▼▼
        detailsLink.href = slideLinks[index];
    }

    // 次のスライドを表示する関数
    function nextSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        showSlide(currentSlide);
    }

    // 前のスライドを表示する関数
    function prevSlide() {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
        showSlide(currentSlide);
    }

    // 自動再生を開始する関数
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    // 自動再生を停止する関数
    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // 「次へ」ボタンがクリックされたときの処理
    nextBtn.addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    // 「前へ」ボタンがクリックされたときの処理
    prevBtn.addEventListener('click', () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });

    // 最初のスライドを表示
    showSlide(currentSlide);
    // 自動再生を開始
    startSlideShow();

});
