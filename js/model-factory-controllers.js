modelApp = angular.module("ModelFactory");

modelApp.controller('MainCtrl', function($scope) {
  $scope.hello = "world";
});

modelApp.controller('DealStatusCtrl', function($scope) {
  $scope.deals = [{
    'dealId': 'test',
    'issuer': 'Issuer 1',
    'files': {},
    'uploadDate': new Date(),
    'status': 'submitted'
  }, {
    'dealId': 'test',
    'issuer': 'Issuer 1',
    'files': {},
    'uploadDate': new Date(),
    'status': 'submitted'
  }, {
    'dealId': 'test',
    'issuer': 'Issuer 1',
    'files': {},
    'uploadDate': new Date(),
    'status': 'submitted'
  }];
});

modelApp.controller('DealUploadCtrl', function($scope) {
  function getGroupTags() {
    var tags = [];
    for (var i = 0; i < 10; i++) {
      var groupName = "group-" + i;
      tags.push({ "text": groupName, value: i })
    }
    return tags;
  }

  angular.extend($scope, {
    groupTags: [],
    dealModel: {
      dealId: "",
      issuer: "",
      cdiFiles: [],
      additionalFiles: [],
      comments: ""
    },
    markTagUnavailable: function(tag) {
      for (var i = 0; i < $scope.groupTags.length; i++) {

        if ($scope.groupTags[i].value == tag.value) {
          $scope.groupTags.splice(i, 1);
        }
      }

    },
    putBackTag: function(tag) {
      var removed = $scope.groupTags.push(tag);
      console.log(removed);
      $scope.groupTags.sort(function(a, b) {
        return a.value < b.value ? -1 : 1;
      });
    },
    addFileDetails: function(e) {
      $scope.$apply(function() {
        for (var i = 0; i < e.files.length; i++) {
          $scope.dealModel.additionalFiles.push(e.files[i]);
        }

      });
    },
    loadFileDetails: function(e) {
      $scope.groupTags = getGroupTags();
      $scope.dealModel.cdiFiles = [];
      $scope.$apply(function() {
        for (var i = 0; i < e.files.length; i++) {
          $scope.dealModel.cdiFiles.push({ 'file': e.files[i], tags: [] });
        }

      });
    }
  });
});
