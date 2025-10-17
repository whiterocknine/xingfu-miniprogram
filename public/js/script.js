// 轮播图功能
function initCarousel() {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth;
    const slideCount = slides.length;
    
    // 设置容器宽度以容纳所有幻灯片
    container.style.width = `${slideWidth * slideCount}px`;
    
    // 更新轮播图位置
    function updateSlidePosition() {
        container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
    
    // 更新指示器状态
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // 下一张幻灯片
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlidePosition();
        updateIndicators();
    }
    
    // 设置自动轮播
    let autoplayInterval = setInterval(nextSlide, 3000);
    
    // 指示器点击事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(autoplayInterval);
            currentIndex = index;
            updateSlidePosition();
            updateIndicators();
            autoplayInterval = setInterval(nextSlide, 3000);
        });
    });
    
    // 鼠标悬停时暂停轮播
    const carousel = document.querySelector('.banner-carousel');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 3000);
    });
}

// 分类导航功能
function initCategoryNav() {
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // 移除所有活跃状态
            categoryItems.forEach(i => i.classList.remove('active'));
            // 添加当前活跃状态
            item.classList.add('active');
        });
    });
}

// 商家卡片点击效果
function initMerchantCards() {
    const merchantCards = document.querySelectorAll('.merchant-card');
    
    merchantCards.forEach(card => {
        card.addEventListener('click', () => {
            // 添加点击效果
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'translateY(-3px)';
            }, 100);
            
            // 这里可以添加跳转到商家详情页的逻辑
            console.log('点击了商家:', card.querySelector('.merchant-name').textContent);
        });
    });
}

// 商品卡片点击效果
function initProductCards() {
    const productCards = document.querySelectorAll('.grid-product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            // 这里可以添加跳转到商品详情页的逻辑
            const productName = card.querySelector('.grid-product-name').textContent;
            console.log('点击了商品:', productName);
        });
    });
}

// 底部导航点击效果
function initFooterNav() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // 移除所有活跃状态
            navItems.forEach(i => i.classList.remove('active'));
            // 添加当前活跃状态
            item.classList.add('active');
        });
    });
}

// 页面加载完成后初始化所有功能
window.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initCategoryNav();
    initMerchantCards();
    initProductCards();
    initFooterNav();
});

// 窗口大小改变时重新初始化轮播图
window.addEventListener('resize', () => {
    // 重新初始化轮播图以适应新的窗口大小
    // 为了避免频繁触发，这里可以使用防抖函数
    let resizeTimer;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // 简单的方法是重新加载页面或者重新初始化轮播图
        // 在实际应用中，可能需要更复杂的逻辑来重新计算轮播图尺寸
        console.log('窗口大小已改变，重新计算轮播图尺寸');
    }, 250);
});