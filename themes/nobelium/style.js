/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    
    /* 底色 */
    .dark body{
        background-color: black;
    }

    /* 标签列表样式 */
    .tag-list {
      display: flex;
      flex-wrap: wrap; /* 添加此行使标��自动换行 */
      overflow-x: auto;
      white-space: nowrap;
    }

    /* 目录组件样式 */
    .catalog-container {
      position: relative; /* 相对定位，使元素相对于其正常位置进行定位 */
      top: 50%; /* 将元素从顶部向下移动50% */
      left: 50%; /* 将元素从左侧向右移动50% */
      transform: translate(-50%, -50%); /* 使用transform将元素的中心点移动到屏幕的中间 */
      margin-left: 120rem; /* 左外边距为 20rem，用于控制目录与文章的距离 */
      max-width: 15rem; /* 最大宽度为 12rem，防止目录过宽 */
    }

  `}</style>
}

export { Style }




