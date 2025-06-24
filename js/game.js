// 《她的选择》- 游戏核心逻辑
class HerChoiceGame {
    constructor() {
        this.story = new HerChoiceStory();
        this.currentChapter = 1;
        this.currentScene = "scene_1_1";
        this.gameHistory = [];
        this.currentTypewriterInterval = null;
        this.isGameInitialized = false;
        
        // DOM 元素引用
        this.elements = {
            gameTitle: document.getElementById('game-title'),
            storyText: document.getElementById('story-text'),
            characterName: document.getElementById('character-name'),
            characterAvatar: document.getElementById('character-avatar'),
            choicesContainer: document.getElementById('choices-container'),
            statsContainer: document.getElementById('stats-container'),
            gameBackground: document.getElementById('game-background'),
            saveButton: document.getElementById('save-btn'),
            loadButton: document.getElementById('load-btn'),
            historyButton: document.getElementById('history-btn'),
            settingsButton: document.getElementById('settings-btn')
        };
        
        this.initializeGame();
    }

    // 初始化游戏
    initializeGame() {
        if (this.isGameInitialized) return;
        
        console.log('初始化《她的选择》游戏...');
        
        // 设置游戏标题
        if (this.elements.gameTitle) {
            this.elements.gameTitle.textContent = this.story.gameTitle;
        }
        
        // 加载第一章
        this.loadChapter(1);
        
        // 绑定事件监听器
        this.bindEventListeners();
        
        // 更新UI
        this.updateStatsDisplay();
        
        // 尝试加载保存的游戏（如果有的话）
        if (!this.loadGameState()) {
            // 如果没有保存的游戏，显示第一个场景
            this.displayCurrentScene();
        }
        
        this.isGameInitialized = true;
        console.log('游戏初始化完成');
    }

    // 加载章节
    loadChapter(chapterNumber) {
        this.currentChapter = chapterNumber;
        
        if (chapterNumber === 1) {
            this.chapterData = this.story.getChapter1();
            this.currentScene = "scene_1_1";
        }
        
        // 不自动显示场景，由调用者决定是否显示
    }

    // 显示当前场景
    displayCurrentScene() {
        const scene = this.getCurrentScene();
        if (!scene) {
            console.error(`场景不存在: ${this.currentScene}`);
            return;
        }

        console.log(`显示场景: ${scene.id} - ${scene.title}`);

        // 更新背景
        this.updateBackground(scene.background);
        
        // 更新角色信息
        this.updateCharacterDisplay(scene.character);
        
        // 更新故事文本
        this.updateStoryText(scene.text);
        
        // 更新选择项
        this.updateChoices(scene.choices);
        
        // 更新统计信息
        this.updateStatsDisplay();
        
        // 保存游戏状态
        this.saveGameState();
    }

    // 获取当前场景数据
    getCurrentScene() {
        if (!this.chapterData || !this.chapterData.scenes) {
            return null;
        }
        
        return this.chapterData.scenes.find(scene => scene.id === this.currentScene);
    }

    // 更新背景
    updateBackground(backgroundKey) {
        const backgrounds = this.story.getBackgrounds();
        const backgroundUrl = backgrounds[backgroundKey];
        
        if (this.elements.gameBackground && backgroundUrl) {
            this.elements.gameBackground.style.backgroundImage = `url('${backgroundUrl}')`;
        }
    }

    // 更新角色显示
    updateCharacterDisplay(characterKey) {
        const characters = this.story.getCharacters();
        const character = characters[characterKey];
        
        if (character) {
            if (this.elements.characterName) {
                this.elements.characterName.textContent = character.name;
                if (character.title) {
                    this.elements.characterName.textContent += ` (${character.title})`;
                }
            }
            
            if (this.elements.characterAvatar) {
                if (character.avatar) {
                    // 如果有头像图片，创建img元素
                    this.elements.characterAvatar.innerHTML = `<img src="${character.avatar}" alt="${character.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
                } else {
                    // 如果没有头像图片，使用emoji或默认显示
                    const defaultEmojis = {
                        narrator: '📖',
                        chen_junhao: '👨‍💼',
                        wang_wenxuan: '👨‍🏫',
                        colleague_xiaoli: '👩‍💼',
                        bestfriend_momo: '👭'
                    };
                    this.elements.characterAvatar.textContent = defaultEmojis[characterKey] || '👩';
                }
            }
        }
    }

    // 更新故事文本
    updateStoryText(text) {
        if (this.elements.storyText) {
            // 添加打字机效果
            this.typewriterEffect(text);
        }
    }

    // 打字机效果
    typewriterEffect(text) {
        if (!this.elements.storyText) return;
        
        // 清除之前的打字机效果
        if (this.currentTypewriterInterval) {
            clearInterval(this.currentTypewriterInterval);
        }
        
        this.elements.storyText.textContent = '';
        let index = 0;
        const speed = 30; // 打字速度（毫秒）
        
        this.currentTypewriterInterval = setInterval(() => {
            if (index < text.length) {
                this.elements.storyText.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(this.currentTypewriterInterval);
                this.currentTypewriterInterval = null;
            }
        }, speed);
    }

    // 更新选择项
    updateChoices(choices) {
        if (!this.elements.choicesContainer) return;
        
        // 清空现有选择
        this.elements.choicesContainer.innerHTML = '';
        
        if (!choices || choices.length === 0) return;
        
        choices.forEach((choice, index) => {
            const choiceButton = document.createElement('button');
            choiceButton.className = 'choice-btn';
            choiceButton.textContent = choice.text;
            choiceButton.onclick = () => this.makeChoice(choice);
            
            // 添加悬浮效果
            choiceButton.addEventListener('mouseenter', () => {
                choiceButton.style.transform = 'translateY(-2px)';
            });
            
            choiceButton.addEventListener('mouseleave', () => {
                choiceButton.style.transform = 'translateY(0)';
            });
            
            this.elements.choicesContainer.appendChild(choiceButton);
        });
    }

    // 处理选择
    makeChoice(choice) {
        console.log(`玩家选择: ${choice.text}`);
        
        // 记录选择历史
        this.gameHistory.push({
            scene: this.currentScene,
            choice: choice.text,
            timestamp: new Date().toISOString()
        });
        
        // 应用选择效果
        if (choice.effects) {
            this.applyEffects(choice.effects);
        }
        
        // 跳转到下一个场景
        if (choice.nextScene) {
            this.currentScene = choice.nextScene;
            
            // 延迟显示下一个场景，给用户时间看到选择结果
            setTimeout(() => {
                this.displayCurrentScene();
            }, 500);
        }
    }

    // 应用选择效果
    applyEffects(effects) {
        Object.keys(effects).forEach(key => {
            const value = effects[key];
            
            // 更新角色属性
            if (this.story.playerStats.hasOwnProperty(key)) {
                this.story.playerStats[key] = Math.max(0, Math.min(100, 
                    this.story.playerStats[key] + value));
                console.log(`${key}: ${this.story.playerStats[key]} (${value > 0 ? '+' : ''}${value})`);
            }
            
            // 更新关系值
            if (this.story.relationships.hasOwnProperty(key)) {
                this.story.relationships[key] = Math.max(-100, Math.min(100, 
                    this.story.relationships[key] + value));
                console.log(`关系 ${key}: ${this.story.relationships[key]} (${value > 0 ? '+' : ''}${value})`);
            }
        });
    }

    // 更新统计信息显示
    updateStatsDisplay() {
        if (!this.elements.statsContainer) return;
        
        const stats = this.story.playerStats;
        const relationships = this.story.relationships;
        
        this.elements.statsContainer.innerHTML = `
            <div class="stats-section">
                <h3>角色属性</h3>
                <div class="stat-item">
                    <span>信任度</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${stats.trust}%"></div>
                    </div>
                    <span>${stats.trust}</span>
                </div>
                <div class="stat-item">
                    <span>智慧值</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${stats.wisdom}%"></div>
                    </div>
                    <span>${stats.wisdom}</span>
                </div>
                <div class="stat-item">
                    <span>独立性</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${stats.independence}%"></div>
                    </div>
                    <span>${stats.independence}</span>
                </div>
                <div class="stat-item">
                    <span>团结力</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${stats.unity}%"></div>
                    </div>
                    <span>${stats.unity}</span>
                </div>
                <div class="stat-item">
                    <span>事业值</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${stats.career}%"></div>
                    </div>
                    <span>${stats.career}</span>
                </div>
                <div class="stat-item">
                    <span>金钱</span>
                    <span class="money-value">¥${stats.money}</span>
                </div>
            </div>
            
            <div class="relationships-section">
                <h3>人际关系</h3>
                ${Object.keys(relationships).map(key => {
                    const value = relationships[key];
                    const name = this.getRelationshipName(key);
                    const color = value > 0 ? '#4CAF50' : value < 0 ? '#F44336' : '#FFC107';
                    return `
                        <div class="relationship-item">
                            <span>${name}</span>
                            <div class="relationship-bar">
                                <div class="relationship-fill" style="width: ${Math.abs(value)}%; background-color: ${color}"></div>
                            </div>
                            <span>${value > 0 ? '+' : ''}${value}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    // 获取关系名称
    getRelationshipName(key) {
        const names = {
            chen_junhao: '陈俊豪',
            wang_wenxuan: '王文轩',
            li_haoran: '李浩然',
            zhang_mingxuan: '张明轩',
            colleague_xiaoli: '同事小丽',
            boss_linda: '上司Linda',
            bestfriend_momo: '闺蜜沫沫'
        };
        return names[key] || key;
    }

    // 绑定事件监听器
    bindEventListeners() {
        // 保存游戏
        if (this.elements.saveButton) {
            this.elements.saveButton.addEventListener('click', () => {
                this.saveGameState();
                this.showMessage('游戏已保存！');
            });
        }
        
        // 加载游戏
        if (this.elements.loadButton) {
            this.elements.loadButton.addEventListener('click', () => {
                this.loadGameState();
                this.showMessage('游戏已加载！');
            });
        }
        
        // 查看历史
        if (this.elements.historyButton) {
            this.elements.historyButton.addEventListener('click', () => {
                this.showHistory();
            });
        }
        
        // 设置
        if (this.elements.settingsButton) {
            this.elements.settingsButton.addEventListener('click', () => {
                this.showSettings();
            });
        }
    }

    // 保存游戏状态
    saveGameState() {
        const gameState = {
            currentChapter: this.currentChapter,
            currentScene: this.currentScene,
            playerStats: this.story.playerStats,
            relationships: this.story.relationships,
            gameHistory: this.gameHistory,
            timestamp: new Date().toISOString()
        };
        
        try {
            localStorage.setItem('herChoice_saveGame', JSON.stringify(gameState));
            console.log('游戏状态已保存');
        } catch (error) {
            console.error('保存游戏状态失败:', error);
        }
    }

    // 加载游戏状态
    loadGameState() {
        try {
            const savedState = localStorage.getItem('herChoice_saveGame');
            if (savedState) {
                const gameState = JSON.parse(savedState);
                
                this.currentChapter = gameState.currentChapter;
                this.currentScene = gameState.currentScene;
                this.story.playerStats = gameState.playerStats;
                this.story.relationships = gameState.relationships;
                this.gameHistory = gameState.gameHistory || [];
                
                this.loadChapter(this.currentChapter);
                this.displayCurrentScene();
                console.log('游戏状态已加载');
                return true;
            }
        } catch (error) {
            console.error('加载游戏状态失败:', error);
        }
        return false;
    }

    // 显示消息
    showMessage(message) {
        // 创建消息提示
        const messageDiv = document.createElement('div');
        messageDiv.className = 'game-message';
        messageDiv.textContent = message;
        document.body.appendChild(messageDiv);
        
        // 3秒后自动消失
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }

    // 显示历史记录
    showHistory() {
        const historyHtml = this.gameHistory.map(entry => `
            <div class="history-entry">
                <div class="history-scene">${entry.scene}</div>
                <div class="history-choice">${entry.choice}</div>
                <div class="history-time">${new Date(entry.timestamp).toLocaleString()}</div>
            </div>
        `).join('');
        
        const modal = this.createModal('选择历史', historyHtml);
        document.body.appendChild(modal);
    }

    // 显示设置
    showSettings() {
        const settingsHtml = `
            <div class="settings-section">
                <h4>游戏设置</h4>
                <label>
                    <input type="checkbox" id="auto-save" checked> 自动保存
                </label>
                <label>
                    <input type="range" id="text-speed" min="10" max="100" value="30"> 文字速度
                </label>
                <label>
                    <input type="checkbox" id="sound-effects"> 音效开关
                </label>
            </div>
            <div class="settings-section">
                <h4>游戏信息</h4>
                <p>版本: 1.0.0</p>
                <p>当前章节: 第${this.currentChapter}章</p>
                <p>游戏时间: ${this.getPlayTime()}</p>
            </div>
        `;
        
        const modal = this.createModal('游戏设置', settingsHtml);
        document.body.appendChild(modal);
    }

    // 创建模态框
    createModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'game-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        `;
        
        // 添加关闭事件
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        return modal;
    }

    // 获取游戏时间
    getPlayTime() {
        const firstEntry = this.gameHistory[0];
        if (!firstEntry) return '0分钟';
        
        const startTime = new Date(firstEntry.timestamp);
        const currentTime = new Date();
        const playTime = Math.floor((currentTime - startTime) / 1000 / 60);
        
        return `${playTime}分钟`;
    }

    // 重置游戏
    resetGame() {
        if (confirm('确定要重新开始游戏吗？这将清除所有进度。')) {
            localStorage.removeItem('herChoice_saveGame');
            location.reload();
        }
    }
}

// 游戏启动
document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('DOM加载完成，开始初始化游戏...');
        
        // 检查必要的类是否存在
        if (typeof HerChoiceStory === 'undefined') {
            throw new Error('HerChoiceStory 类未找到，请检查 js/story.js 是否正确加载');
        }
        
        // 创建游戏实例
        window.game = new HerChoiceGame();
        console.log('游戏初始化成功');
        
    } catch (error) {
        console.error('游戏初始化失败:', error);
        
        // 显示错误信息
        const storyText = document.getElementById('story-text');
        if (storyText) {
            storyText.innerHTML = `
                <div style="color: red; text-align: center; padding: 2rem;">
                    <h3>🚫 游戏初始化失败</h3>
                    <p><strong>错误信息:</strong> ${error.message}</p>
                    <p>可能的解决方案:</p>
                    <ul style="text-align: left; display: inline-block;">
                        <li>检查网络连接</li>
                        <li>刷新页面重试</li>
                        <li>检查浏览器控制台获取详细错误信息</li>
                    </ul>
                    <button onclick="location.reload()" style="
                        background: #ff6b9d; 
                        color: white; 
                        border: none; 
                        padding: 10px 20px; 
                        border-radius: 5px; 
                        cursor: pointer;
                        margin-top: 1rem;
                    ">
                        🔄 刷新页面
                    </button>
                </div>
            `;
        }
        
        // 隐藏加载屏幕
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }
});

// 导出游戏类
window.HerChoiceGame = HerChoiceGame; 