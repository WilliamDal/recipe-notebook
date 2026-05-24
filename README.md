# 回国下厨计划

一个个人食谱收藏网页，用来整理视频里的菜谱、采购清单、核心比例和详细步骤。

## 当前菜谱

- 村驴锅包肉
- 恐龙饲养员冷吃鸡翅
- 村驴咸蛋黄鸡翅
- 村驴青椒土豆片炒肉
- 村驴青椒茄子包
- 村驴临沂炒鸡
- 村驴鸡公煲
- 方响屁火烧云油焖鸡

## 文件说明

- `index.html`：网页入口
- `styles.css`：页面样式
- `script.js`：菜谱数据和交互逻辑
- `assets/`：菜谱图片

## 以后添加新菜谱

继续把新菜谱追加到 `script.js` 里的 `recipes` 数组即可。每条菜谱可以包含：

- 菜名、分类、来源链接
- 采购清单
- 核心比例
- 详细步骤
- 技巧提示

## GitHub Pages 发布建议

仓库建议命名为 `recipe-notebook` 或 `recipes`。发布时在 GitHub 仓库里打开：

`Settings` -> `Pages` -> `Build and deployment` -> `Deploy from a branch`

然后选择：

- Branch: `main`
- Folder: `/root`

保存后，网站地址通常是：

`https://你的GitHub用户名.github.io/仓库名/`
