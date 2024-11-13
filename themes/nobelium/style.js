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
      flex-wrap: wrap; /* 添加此行使标签自动换行 */
      overflow-x: auto;
      white-space: nowrap;
    }

    // 目录组件样式
    .catalog-container {
      position: absolute; // 绝对定位，使元素相对于最近的已定位祖先元素进行定位
      left: 0; // 元素左边缘与包含块的左边缘对齐
      top: 0; // 元素上边缘与包含块的上边缘对齐
      margin-left: 120rem; // 左外边距为 20rem，用于控制目录与文章的距离
      max-width: 15rem; // 最大宽度为 12rem，防止目录过宽
    }

  `}</style>
}

export { Style }




