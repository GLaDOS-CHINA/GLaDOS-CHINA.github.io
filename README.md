# GLaDOS-CHINA · 光的片刻

24 件原創攝影作品，四組題材：旅途與秩序、自然與光、生命與凝視、人物與敘事，每組 6 件。

## 結構
- index.html：靜態首頁、題材篩選、原生 dialog 大圖、左右切換與鍵盤操作。
- assets/photos/：網頁版 WebP 與縮圖。每張作品只展示一次，首頁主圖計入旅途組。
- assets/gallery.json：公開作品目錄，不含原始檔案路徑或 EXIF。
- .nojekyll：直接發布靜態檔案。

## 預覽與發布
直接打開 index.html 即可，不需要安裝依賴。
GitHub Settings → Pages → Deploy from a branch → main → /(root) → Save。
預期網址：https://glados-china.github.io/

## 維護
修改作品時，更新 index.html 中的圖片路徑、作品名、替代文字、分類與尺寸，並同步 assets/gallery.json。全部圖片為本地資產，不依賴外部圖片服務。WebP 長邊最多 2000 像素，縮圖長邊最多 900 像素；校正方向，保留完整構圖與既有水印，不嵌入 EXIF 或原始檔名。未改動原片。

本輯不以「Sony 投稿」作為公開獎項或認證，僅依題材展示作品。
