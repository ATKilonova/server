document.addEventListener('DOMContentLoaded', function() {
  console.log("网页已加载");

  const backToTopButton = document.getElementById('backToTop');
  const announcementBar = document.getElementById('announcementBar');
  const toggleAnnouncementButton = document.getElementById('toggleAnnouncement');
  const expandAnnouncementButton = document.getElementById('expandAnnouncement');

  // 滚动事件监听器，用于显示或隐藏“回到顶部”按钮
  window.addEventListener('scroll', function() {
    if (window.scrollY > 1) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  // “回到顶部”按钮的点击事件
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 公告栏的展开/收起按钮的点击事件
  toggleAnnouncementButton.addEventListener('click', function() {
    if (announcementBar.classList.contains('collapsed')) {
      announcementBar.classList.remove('collapsed');
      toggleAnnouncementButton.innerHTML = '<i class="fas fa-chevron-up"></i>'; // 改为向上箭头
      expandAnnouncementButton.classList.remove('show'); // 隐藏展开按钮
    } else {
      announcementBar.classList.add('collapsed');
      toggleAnnouncementButton.innerHTML = '<i class="fas fa-chevron-down"></i>'; // 改为向下箭头
      expandAnnouncementButton.classList.add('show'); // 显示展开按钮
    }
  });

  // 展开按钮的点击事件
  expandAnnouncementButton.addEventListener('click', function() {
    announcementBar.classList.remove('collapsed');
    toggleAnnouncementButton.innerHTML = '<i class="fas fa-chevron-up"></i>'; // 改为向上箭头
    expandAnnouncementButton.classList.remove('show'); // 隐藏展开按钮
  });
});
