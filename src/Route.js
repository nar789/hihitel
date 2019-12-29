;(function(){
	module.exports=function(_g){

		var app = _g.app;
		var http = _g.http;

		function route(){
			app.get('/',function(req,res){
				loginCheckRouteHook(()=>{
					res.render('index.html',{});
				});
			});

			app.get('/comic',function(req,res){
				loginCheckRouteHook(()=>{
					res.render('comic.html',{});
				});
			});

			app.get('/anycall',function(req,res){
				loginCheckRouteHook(()=>{
					res.render('anycall.html',{});
				});
			});


			app.get('/etc',function(req,res){
				loginCheckRouteHook(()=>{
					res.render('etc.html',{});
				});
			});


			//1. enetry point
			app.listen(1229,function(){
			  preLoad();
			  console.log('hihitel#Hi!Hitel! Server listen on *:1229');
			});
		}

		function loginCheckRouteHook(doInLoginCheckRouteHook){
			routeHook(()=>{
				return {result:"success"};
			},(params)=>{
				if(params==undefined || params.result==undefined){
					return;
				}
				if(params.result === "success"){
					//to-do-something
					doInLoginCheckRouteHook();
				} else { //in case of not having session, or not login..etc..
					//to-do
				}
				return {result:"success"};
			},(params)=>{
				return 1;
			});
		}

		function routeHook(onPreExecute,doInRoute,onPostExecute){
			var preReturn = onPreExecute();
			var doReturn = doInRoute(preReturn);
			return onPostExecute(doReturn);
		}

		function preLoad(){
			//to-do
		}

		var publicReturn = {
			route:route,
		}
		return publicReturn;
	}

})();



