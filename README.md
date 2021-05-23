# web-stories

### [Demo](https://r05323045.github.io/web-stories/)

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
  - 在未取得資料時用 fakeStory 元件將畫面置換為 Loading 頁面，待呼叫 API 成功拿到資料且圖片加載完成後再顯示真實畫面
3. 解決使用者網速較慢導致圖片顯示問題 - 
  - 使用 v-on:load 監聽 `<img>` ，等圖片加載完成後再傳遞加載完成事件至父元件，後續再顯示真實畫面
4. 解決 ajaxGetStoryByIdUnstable 失敗問題 - 
  - 利用遞迴方式當無法拿到資料時重新呼叫 API ，在取得資料後繼續使用遞迴方式取得下一則 story 的資料，直到取得所有 story 的資料為止；若使用者不願等待而左右點擊也可先去觀看或取得其他 story 的資料。
5. 辨別使用者欲暫停或前往其他 story 的行為 -
  - 紀錄使用者 mousedown/touchstart 至 mouseup/touchend 時間，判斷使用者為點擊或長按暫停 story
6. 不同權重 story 之選取 -
  - 設定個別 story 抽中機率為 `story 權重 / 所有權重加總`，使 story 的抽樣機率分佈為均勻分配；在抽樣時先取得 0 - 1 之間的亂數，使用該亂數在累積分佈函數 (CDF) 的位置，完成抽樣。
7. 其他畫面設計 - 
  - 依照 Stories design 畫面，照片使用 animation 與 transform: scale 製作 zoom in 效果，此外，參考 instagram 之設計，在長按暫停 story 時，暫停此放大效果。
  - 電腦使用者可透過空白鍵暫停，左右鍵切換不同 story

Thanks for your reading!

