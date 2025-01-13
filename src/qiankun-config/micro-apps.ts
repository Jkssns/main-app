const productionBaseUrl = 'https://static-mp-a268227e-62b2-4f41-9a02-f9379fb12ac8.next.bspapp.com/dist/index.html'

let subApps = [
	{
		name: "react-sub-app",// name 需要唯一
		entry: productionBaseUrl + "/micro-apps/react-sub-app/dist/index.html",
		container: "#sub-app-container",// 表示承载为应用的容器的id
		activeRule: "/react-sub-app",// 匹配的路由
	},
	{
		name: "vue-sub-app",
		entry: productionBaseUrl + "/micro-apps/vue-sub-app/dist/index.html",
		container: "#sub-app-container",
		activeRule: "/vue-sub-app",
	},
];
export default subApps