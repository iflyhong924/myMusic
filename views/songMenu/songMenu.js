/**
 * Created by hxsd on 2016/08/06.
 */
angular.module("myApp").controller("songMenuCtrl",function($scope,$http){
    $scope.products = [
        {imgSrc:"images/songMenu1.jpg",title:"【日系】献给曾经那个...",name:"by 下一颗巧克力"},
        {imgSrc:"images/songMenu2.jpg",title:"香港电影中的50首经典...",name:"by 我本是小天使"},
        {imgSrc:"images/songMenu3.jpg",title:"与自由并行聆听清新...",name:"by W-A-A"},
        {imgSrc:"images/songMenu4.jpg",title:"时光汹涌，愿你是时光...",name:"by 左耳右耳不一样"},
        {imgSrc:"images/songMenu5.jpg",title:"八月如期而至，给我...",name:"by 这条平凡的狗"},
        {imgSrc:"images/songMenu6.jpg",title:"『ACG』经典ACG的交响翻奏...",name:"by DoubleRainbow_ "},
        {imgSrc:"images/songMenu7.jpg",title:"『狂躁电子』Hards...",name:"y 男票是茶蛋的棕棕"},
        {imgSrc:"images/songMenu8.jpg",title:"七月最IN电子音乐推荐...",name:"王飞机_"}
    ];
    $scope.loadMore = function(){
        $http.get("views/songMenu/data.json")
            .success(function(data){
                Array.prototype.push.apply($scope.products,data)
            })
            .finally(function(){
                $scope.$broadcast("scroll.infiniteScrollComplete");
            })
    };
});
