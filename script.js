document.addEventListener('DOMContentLoaded', function() {
  console.log("网页已加载");

  const backToTopButton = document.getElementById('backToTop');
  const announcementBar = document.getElementById('announcementBar');
  const toggleAnnouncementButton = document.getElementById('toggleAnnouncement');
  const expandAnnouncementButton = document.getElementById('expandAnnouncement');

  // 磁盘容量信息
  const diskProgress = document.getElementById('diskProgress');
  const diskUsageText = document.getElementById('diskUsageText');

  // 假设从服务器获取的磁盘使用信息
  const currentUsage = 1.5; // 当前使用容量（GB）
  const totalCapacity = 10; // 总容量（GB）

  // 更新进度条和文本
  function updateDiskUsage(current, total) {
    const usagePercentage = (current / total) * 100;
    diskProgress.value = current;
    diskProgress.max = total;
    diskUsageText.textContent = usagePercentage.toFixed(1) + '%';

    // 为进度条设置动态颜色变化
    const percentage = usagePercentage / 100;
    diskProgress.style.setProperty('--progress-color', `rgba(52, 217, 242, ${percentage})`);
  }

  // 调用更新函数
  updateDiskUsage(currentUsage, totalCapacity);

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