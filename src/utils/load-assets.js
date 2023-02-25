export const getAssetsUrl = (image) => {
  // 参数一：相对路径 根据参数二的路径找到的路径
  return new URL(`../assets/imgs/${image}`, import.meta.url).href
}