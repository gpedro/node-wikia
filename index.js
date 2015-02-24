'use strict';

var Q = require('q'),
   is = require('is'),
   qs = require('querystring'),
  req = require('request'),
 trim = function(value) {
  return value.replace(/^\s+|\s+$/g, '');
},
split = function(value, cb) {
  return value.split(",").map(cb);
},
splitIsInt = function(value) {
  return split(value, function (val) { return is.int(parseInt(val)); });
};


function Wikia(subdomain) {
  this.baseUrl = 'http://' + subdomain + '.wikia.com/api/v1/';
}

Wikia.prototype._genUrl = function(method, options) {
  return this.baseUrl + method + '?' + qs.stringify(options);
};

Wikia.prototype._request = function(url) {
  var deferred = Q.defer();
  req.get(url, function(error, response, body) {
    if(error) {
      deferred.reject(error);
    }

    if(response.statusCode === 200) {
      deferred.resolve(JSON.parse(body));
    } else if(response.statusCode === 400 || response.statusCode === 404) {
      deferred.reject(JSON.parse(body));
    } else {
      deferred.reject(response);
    }
  });

  return deferred.promise;
};

Wikia.prototype._getActivity = function(method, options) {

  if(options !== undefined) {
    if(options.limit !== undefined && !is.int(options.limit)) {
      throw new Error('Option \'limit\' need be integer value');
    }

    if(options.namespaces !== undefined) {

      if(is.int(options.namespaces)) {
        options.namespaces = [options.namespaces];
      }

      if(!is.array(options.namespaces) || splitIsInt(trim(options.namespaces)).indexOf(false)) {
        throw new Error('Option \'namespaces\' need be integer value or integer array');
      }

    }

    options.namespaces = (options.namespaces).join(',');

    if(options.allowDuplicates !== undefined && !is.boolean(options.allowDuplicates)) {
      throw new Error('Option \'allowDuplicates\' need be boolean value');
    }
  }

  var url = this._genUrl('Activity/' + method, options);
  return this._req(url);
};

Wikia.prototype.getLatestActivity = function(options) {
  return this._getActivity('LatestActivity', options);
};

Wikia.prototype.getRecentlyChangedArticles = function(options) {
  return this._getActivity('RecentlyChangedArticles', options);
};

Wikia.prototype.getNavigation = function() {
  var url = this._genUrl('Navigation/Data', {});
  return this._request(url);
};

Wikia.prototype.getRecommendations = function(options) {
  if(options !== undefined) {

    if(options.id === undefined) {
      throw new Error('Option \'id\' is required');
    } else if (!is.int(options.id)) {
      throw new Error('Option \'id\' need be integer value');
    }

    if(options.limit !== undefined && !is.int(options.limit)) {
      throw new Error('Option \'limit\' exceeds limit of 1');
    } else {
      if(options.limit < 1) {
      } else if(options.limit > 30) {
        throw new Error('Option \'limit\' exceeds limit of 30');
      }

    }

  }

  var url = this._genUrl('Recommendations/ForArticle', options);
  return this._request(url);
};

Wikia.prototype.getRelatedPages = function(options) {
  if(options !== undefined) {

    if(options.ids === undefined) {
      throw new Error('Option \'ids\' is required');
    } else {

      if(is.string(options.ids)) {
        options.ids = splitIsInt(options.ids);
      }

      if(is.int(options.ids)) {
        options.ids = [options.ids];
      }

      if(!is.array(options.ids)) {
        throw new Error('Parameter \'ids\' need be integer value or integer array');
      }
    }

    options.ids = (options.ids).join(',');

    if(options.limit !== undefined && !is.int(options.limit)) {
      throw new Error('Parameter \'limit\' need be integer value');
    }
  }

  var url = this._genUrl('RelatedPages/List', options);
  return this._request(url);
};

Wikia.prototype.getSearchSuggestion = function(query) {
  if(query === undefined) {
    throw new Error('Parameter \'query\' is required');
  }

  var url = this._genUrl('SearchSuggestions/List', {query: query});
  return this._request(url);
};

Wikia.prototype._getUsers = function(options) {
  if(options !== undefined) {

    if(options.ids === undefined) {
      throw new Error('Option \'ids\' is required');
    } else {

      if(is.int(options.ids)) {
        options.ids = [options.ids];
      }

      if(!is.array(options.ids)) {
        throw new Error('Option \'ids\' need be integer value or integer array');
      }
    }

    options.ids = (options.ids).join(',');

    if(options.size !== undefined && !is.int(options.size)) {
      throw new Error('Option \'size\' need be integer value');
    }
  }

  var url = this._genUrl('User/Details', options);
  return this._request(url);
};


Wikia.prototype.getUsers = function(options) {
  return this._getUsers(options);
};

module.exports = Wikia;
