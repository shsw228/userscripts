// ==UserScript==
// @name         [cinecitta]いらない日付表示を削除する
// @namespace    http://tampermonkey.net/
// @version      1.0.3
// @description  なぜ3作品ごとに日付を表示するのか
// @author       shsw228
// @match        https://cinecitta.co.jp/*
// @match        https://members.cinecitta.jp/Cspc/usr/login.do
// @homepage    https://github.com/shsw228/userscripts/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cinecitta.co.jp
// @grant        GM.addStyle
// @license     MIT License
// ==/UserScript==

const css = `
.between {
  display: none;
}`;
GM.addStyle(css);

