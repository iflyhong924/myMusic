/**
 * Created by hxsd on 2016/08/06.
 */
angular.module("myApp").controller("radioCtrl",function($scope,$http){
    $scope.products = [
        {imgSrc:"images/songMenu1.jpg",title:"【日系】献给曾经那个..."},
        {imgSrc:"images/songMenu2.jpg",title:"香港电影中的50首经典..."},
        {imgSrc:"images/songMenu3.jpg",title:"与自由并行聆听清新..."},
        {imgSrc:"images/songMenu4.jpg",title:"时光汹涌，愿你是时光..."},
        {imgSrc:"images/songMenu5.jpg",title:"八月如期而至，给我..."},
        {imgSrc:"images/songMenu6.jpg",title:"『ACG』经典ACG的交响翻奏..."},
        {imgSrc:"images/songMenu7.jpg",title:"『狂躁电子』Hards..."},
        {imgSrc:"images/songMenu8.jpg",title:"七月最IN电子音乐推荐..."}
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