# GLaDOS-CHINA · 光的片刻 / Moments of Light

32 件攝影作品，依旅途與秩序、自然與光、生命與凝視、人物與敘事分為四組，每組 8 件。
Instagram: [@GLADOSLOVE](https://www.instagram.com/gladoslove/)

## 網站結構
- index.html：繁體中文首頁。
- en.html：完整英文版，包含作品題名、描述、替代文字及操作提示。
- assets/styles.css、assets/gallery.js：共用版面與互動。
- assets/photos/：WebP 網頁照片及縮圖。
- assets/gallery.json：作品目錄，含中英文題名、描述及顯示範圍。
- .nojekyll：靜態發布。

## 預覽與發布
直接打開 index.html 或 en.html；不需安裝依賴。語言切換保留目前的題材篩選。
GitHub Settings → Pages → Deploy from a branch → main → /(root) → Save。
中文：https://glados-china.github.io/
English: https://glados-china.github.io/en.html

## 照片與維護
原始作品未改動。網頁版長邊最多 2000 像素，縮圖最多 900 像素，未嵌入 EXIF、原始檔名或來源路徑。
12 張含白邊作品在頁面中以精確顯示範圍隱去外緣白邊，縮圖與大圖使用相同範圍；保留照片內容與既有水印。WebP 檔案自身未重新裁切。
每件作品只在畫廊出現一次，主圖計入旅途組。
新增作品時同步兩個 HTML 頁面、assets/gallery.json、圖片路徑與每組數量；白邊顯示範圍存於 data-crop 與 .photo-frame 的 CSS 變數。
不依賴第三方照片服務或字體。分類篩選與大圖支援鍵盤操作。Instagram 連結不使用追蹤嵌入。
