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
      flex-wrap: wrap; /* 添加此行使标签自动换行 */
      overflow-x: auto;
    }

  `}</style>
}

export { Style }




