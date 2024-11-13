/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    
    // 底色
    .dark body{
        background-color: black;
    }

    // 标签列表样式
    .tag-list {
      display: flex;
      overflow-x: auto;
      white-space: nowrap;
    }

    // 目录组件样式
    .catalog-container {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: -12rem; /* 调整此值以控制目录与文章的距离 */
      max-width: 12rem;
    }

  `}</style>
}

export { Style }




