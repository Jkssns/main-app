let subApps = [
	{
		name: "react-sub-app",// name 需要唯一
		entry: "http://localhost:5173",
		container: "#sub-app-container",// 表示承载为应用的容器的id
		activeRule: "/react-sub-app",// 匹配的路由
	},
	{
		name: "vue-sub-app",
		entry: "http://localhost:5174",
		container: "#sub-app-container",
		activeRule: "/vue-sub-app",
	},
];
export default subApps