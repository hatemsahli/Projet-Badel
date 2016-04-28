
'use strict';

angular.module('projetBadelApp')
  .factory('Scrappe',function($resource){
    return $resource('/api/scrappes/:name',{},
      {
        'get':    {method:'GET', isArray:true},
        'addscrappe':    {method:'POST', params: {name:'@name'}}
      },

      {
        stripTrailingSlashes: false
      });
  });
