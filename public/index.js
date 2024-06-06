(function () {
	'use strict';

	const someUtils = () => 'Build some util functions here';

	document.body.innerHTML += '<p class="text-red-500">This is a paragraph added by JavaScript from src/index.js</p>';
	document.body.innerHTML += someUtils();

	// // addEventListener('click', ())

	// const buttonElement = document.getElementById('btn');

	// // 透過提供回呼函數的方式對「click」事件新增處理器。
	// // 當元素被點選後會出現「Element clicked!」的彈出訊息。

	// // eslint-disable-next-line no-console
	// buttonElement.addEventListener('click', () => {
	//   console.log('Element clicked through function!');
	// });

	// // 基於相容性，一個帶有 `handleEvent` 的非函式物件可被視為處理函式。

	// // eslint-disable-next-line no-console
	// buttonElement.addEventListener('click', () => {
	//   const handler = {
	//     handleEvent() {
	//       console.log('Element clicked through handleEvent property!');
	//     },
	//   };

	//   handler.handleEvent(); // 调用 handleEvent 方法
	// });

})();
