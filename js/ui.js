// 《她的选择》- UI增强功能
class UIEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollEffects();
        this.setupKeyboardNavigation();
        this.setupTooltips();
        this.setupThemeToggle();
    }

    // 设置滚动效果
    setupScrollEffects() {
        // 平滑滚动到顶部
        window.scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        // 监听滚动事件，添加头部阴影
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const header = document.querySelector('.game-header');
            
            if (header) {
                if (scrollTop > lastScrollTop) {
                    // 向下滚动
                    header.style.transform = 'translateY(-100%)';
                } else {
                    // 向上滚动
                    header.style.transform = 'translateY(0)';
                }
                lastScrollTop = scrollTop;
            }
        });
    }

    // 设置键盘导航
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // ESC键关闭模态框
            if (e.key === 'Escape') {
                const modals = document.querySelectorAll('.game-modal');
                modals.forEach(modal => modal.remove());
            }

            // 数字键选择选项
            if (e.key >= '1' && e.key <= '9') {
                const choiceIndex = parseInt(e.key) - 1;
                const choices = document.querySelectorAll('.choice-btn');
                if (choices[choiceIndex]) {
                    choices[choiceIndex].click();
                }
            }

            // 空格键暂停/继续打字机效果
            if (e.key === ' ') {
                e.preventDefault();
                // 这里可以添加暂停打字机效果的逻辑
            }
        });
    }

    // 设置工具提示
    setupTooltips() {
        // 为所有带有title属性的元素添加自定义工具提示
        const elementsWithTooltips = document.querySelectorAll('[title]');
        
        elementsWithTooltips.forEach(element => {
            const originalTitle = element.getAttribute('title');
            element.removeAttribute('title'); // 移除默认工具提示
            
            element.addEventListener('mouseenter', (e) => {
                this.showTooltip(e.target, originalTitle);
            });
            
            element.addEventListener('mouseleave', () => {
                this.hideTooltip();
            });
        });
    }

    // 显示工具提示
    showTooltip(element, text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.textContent = text;
        document.body.appendChild(tooltip);

        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';

        setTimeout(() => {
            tooltip.classList.add('show');
        }, 10);
    }

    // 隐藏工具提示
    hideTooltip() {
        const tooltip = document.querySelector('.custom-tooltip');
        if (tooltip) {
            tooltip.classList.remove('show');
            setTimeout(() => {
                tooltip.remove();
            }, 200);
        }
    }

    // 设置主题切换
    setupThemeToggle() {
        // 检查本地存储中的主题偏好
        const savedTheme = localStorage.getItem('herChoice_theme');
        if (savedTheme) {
            document.body.classList.add(savedTheme);
        }

        // 创建主题切换按钮（可选）
        this.createThemeToggle();
    }

    // 创建主题切换按钮
    createThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = '🌙';
        themeToggle.title = '切换主题';
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            themeToggle.innerHTML = isDark ? '☀️' : '🌙';
            
            // 保存主题偏好
            localStorage.setItem('herChoice_theme', isDark ? 'dark-theme' : '');
        });

        // 添加到页面
        document.body.appendChild(themeToggle);
    }
}

// 添加工具提示样式
const tooltipStyles = `
.custom-tooltip {
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 0.8rem;
    pointer-events: none;
    z-index: 1002;
    opacity: 0;
    transform: translateY(5px);
    transition: all 0.2s ease;
    white-space: nowrap;
}

.custom-tooltip.show {
    opacity: 1;
    transform: translateY(0);
}

.theme-toggle {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff6b9d, #ffc3d2);
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
    transition: all 0.3s ease;
    z-index: 1000;
}

.theme-toggle:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 157, 0.4);
}

/* 暗色主题 */
.dark-theme {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
}

.dark-theme .game-header {
    background: linear-gradient(135deg, rgba(52, 73, 94, 0.9), rgba(44, 62, 80, 0.8));
}

.dark-theme .left-panel,
.dark-theme .center-panel,
.dark-theme .right-panel {
    background: linear-gradient(135deg, rgba(52, 73, 94, 0.9), rgba(44, 62, 80, 0.8));
    color: #ecf0f1;
}

.dark-theme .story-text {
    background: rgba(44, 62, 80, 0.7);
    color: #ecf0f1;
}

.dark-theme .choice-btn {
    background: linear-gradient(135deg, rgba(52, 73, 94, 0.9), rgba(44, 62, 80, 0.8));
    color: #ecf0f1;
    border-color: #7f8c8d;
}

.dark-theme .choice-btn:hover {
    border-color: #ff6b9d;
}
`;

// 添加样式到页面
const styleSheet = document.createElement('style');
styleSheet.textContent = tooltipStyles;
document.head.appendChild(styleSheet);

// 性能监控类
class PerformanceMonitor {
    constructor() {
        this.startTime = performance.now();
        this.init();
    }

    init() {
        this.monitorPageLoad();
        this.monitorMemoryUsage();
    }

    monitorPageLoad() {
        window.addEventListener('load', () => {
            const loadTime = performance.now() - this.startTime;
            console.log(`页面加载时间: ${loadTime.toFixed(2)}ms`);
            
            // 如果加载时间过长，显示提示
            if (loadTime > 3000) {
                this.showPerformanceWarning();
            }
        });
    }

    monitorMemoryUsage() {
        if ('memory' in performance) {
            setInterval(() => {
                const memory = performance.memory;
                const used = Math.round(memory.usedJSHeapSize / 1048576);
                const total = Math.round(memory.totalJSHeapSize / 1048576);
                
                console.log(`内存使用: ${used}MB / ${total}MB`);
                
                // 如果内存使用过高，显示警告
                if (used > 100) {
                    this.showMemoryWarning();
                }
            }, 30000); // 每30秒检查一次
        }
    }

    showPerformanceWarning() {
        console.warn('页面加载较慢，建议检查网络连接');
    }

    showMemoryWarning() {
        console.warn('内存使用较高，建议刷新页面');
    }
}

// 自动初始化
document.addEventListener('DOMContentLoaded', () => {
    new UIEnhancer();
    new PerformanceMonitor();
});

// 导出类
window.UIEnhancer = UIEnhancer;
window.PerformanceMonitor = PerformanceMonitor; 