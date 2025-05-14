# TypeMaster - 打字练习应用

TypeMaster 是一个基于 React 和 TypeScript 的打字练习应用，旨在帮助用户提高打字速度和准确性。通过不同的难度级别和有趣的文本内容，用户可以在愉悦的氛围中提升自己的打字技能。

## 功能

- **多难度级别**：提供简单、中等和困难三种难度级别，适合不同水平的用户。
- **实时统计**：在练习过程中实时显示打字速度（WPM）和准确性。
- **多种文本内容**：包含多种有趣和富有教育意义的文本，帮助用户在练习中学习新知识。
- **响应式设计**：适配不同设备，包括桌面和移动设备。

## 如何开始

在项目目录中，您可以运行以下命令：

```bash
# 安装项目依赖
npm install

# 启动开发服务器
npm run dev
```

## 项目结构

```
src/
├── components/ - 组件目录
│   ├── Header.tsx - 应用头部组件
│   ├── KeyboardDisplay.tsx - 键盘显示组件
│   ├── TextDisplay.tsx - 文本显示组件
│   ├── TypingPractice.tsx - 打字练习主要组件
│   └── TypingStats.tsx - 打字统计组件
├── utils/ - 工具函数目录
│   ├── easy.ts - 简单难度文本库
│   ├── textLibrary.ts - 文本库管理
│   └── typingStats.ts - 打字统计计算
├── App.tsx - 应用主组件
├── main.tsx - 应用入口文件
└── vite-env.d.ts - Vite 环境声明文件
```

## 技术栈

- React - 用于构建用户界面的 JavaScript 库
- TypeScript - JavaScript 的超集，添加了类型系统
- Tailwind CSS - 功能类优先的 CSS 框架
- Vite - 下一代前端构建工具
