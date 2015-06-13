(function(){
var app = angular.module('store', [ ]);
app.controller('StoreController',function(){
this.product = gem;
this.product2 = gem2;
});
var gem = {
name: 'Item1',
price: 12,
description: 'first item by hash',
canPurchase: true,
size: {width: 15, height: 15}, 
images:{thumbnail:"icon.png"}
}
var gem2 = {
name: 'Item12',
price: 12,
description: 'Second item by hash',
canPurchase: false,
images:{thumbnail:"icon.png"}
}
}) ();