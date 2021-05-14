# web-stories

### [Demo](r05323045.github.io/web-stories/)

### How to use

**複製檔案至本機**
```
$ git clone https://github.com/r05323045/web-stories.git
```
**2. 安裝專案套件**
```
cd web-stories
npm install
```
**3. 編譯開發環境**
```
npm run serve
```

### 專案說明

1. 16:9 比例製作方式 -
  - 採用父元素 padding-top 搭配子元素 position: absosulte 作法，將比例固定
2. 解決 ajaxGetStoryByIdUnstable 延遲顯示問題 - 
  - 利用假資料將圖片與文字置換為 Loading 頁面，待呼叫 API 成功拿到資料後再顯示真實資料，pre-render 圖片亦可讓網速較慢的使用者先看見 Loading 畫面 
3. 解決 ajaxGetStoryByIdUnstable 失敗問題 - 
  - 利用遞迴方式當無法拿到資料時重新呼叫 API ，若使用者不耐而左右點擊也可先去觀看其他 Story
4. 紀錄使用者 mousedown/touchstart 至 mouseup/touchend 時間，判斷使用者為點擊或長按暫停 Story
5. 權重高之動態將有將對應被抽到的機會數量，完成動態權重需求
6. 依照 Stories design 畫面，照片使用 animation 與 transform: scale 製作 zoom in 效果，此外，參考 instagram 之設計，在長按暫停 Story 時，暫停此放大效果。

---

