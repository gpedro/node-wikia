'use strict';

var Q = require('q'),
   is = require('is'),
   qs = require('querystring'),
  req = require('request'),
 trim = function(value) {
  return value.replace(/^\s+|\s+$/g, '');
},
split = function(value, cb) {
  return value.split(',').map(cb);
},
splitIsInt = function(value) {
  return split(value, function (val) { return is.int(parseInt(val)); });
},
_validateRequired = function(value, name) {
  if(value === undefined) {
    throw new Error('Option \'' + name + '\' is required');
  }
},
_validateInt = function(value, name) {
  if(value !== undefined && !is.int(value)) {
    throw new Error('Option \'' + name + '\' need be integer value');
  }
},
_validateStr = function(value, name) {
  if(value !== undefined && !is.string(value)) {
    throw new Error('Option \'' + name + '\' need be string value');
  }
},
_validateIntRange = function(value, min, max, name) {
  if(value !== undefined && (!is.int(value) || (value < min))) {
    throw new Error('Option \'' + name + '\' exceeds limit of ' + min);
  } else if(value > max) {
    throw new Error('Option \'' + name + '\' exceeds limit of ' + max);
  }
},
_validateBoolean = function(value, name) {
    if(value !== undefined && !is.boolean(value)) {
      throw new Error('Option \'' + name + '\' need be boolean value');
    }
},
_validateArrayInt = function(value, name) {
  if(value !== undefined) {

    if(is.int(value)) {
      value = [value];
    }

    if((is.string(value) && splitIsInt(value).indexOf(false)) || !is.array(value)){
      throw new Error('Option \'' + name + '\' need be integer value or integer array');
    }
    return trim(value.join(','));
  }

  return value;
},
_validateArrayStr = function(value, name) {
  if(value !== undefined) {
    if(is.array(value)) {
      value = value.join(',');
    } else {
      throw new Error('Option \'' + name + '\' need be string array');
    }

    return value;
  }
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

  options = (options === undefined) ? {} : options;

  _validateInt(options.limit, 'limit');
  options.namespaces = _validateArrayInt(options.namespaces, 'namespaces');
  _validateBoolean(options.allowDuplicates, 'allowDuplicates');

  var url = this._genUrl('Activity/' + method, options);
  return this._request(url);
};

Wikia.prototype._getSearch = function(method, options) {

  options = (options === undefined) ? {} : options;

  _validateRequired(options.query, 'query');
  _validateRequired(options.rank, 'rank');

  options.rank = _validateArrayStr(options.rank, 'rank');

  _validateInt(options.limit, 'limit');
  _validateInt(options.batch, 'batch');

  var url = this._genUrl('Search/' + method, options);
  return this._request(url);
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
  options = (options === undefined) ? {} : options;

  _validateRequired(options.id, 'id');
  _validateInt(options.id, 'id');

  _validateIntRange(options.limit, 'limit');

  var url = this._genUrl('Recommendations/ForArticle', options);
  return this._request(url);
};

Wikia.prototype.getRelatedPages = function(options) {
  options = (options === undefined) ? {} : options;

  _validateRequired(options.ids, 'ids');
  options.ids = _validateArrayInt(options.ids, 'ids');
  _validateInt(options.limit);

  var url = this._genUrl('RelatedPages/List', options);
  return this._request(url);
};

Wikia.prototype.getSearchCrossWiki = function(options) {

  options = (options === undefined) ? {} : options;

  _validateArrayStr(options.hub, 'hub');
  _validateArrayStr(options.lang, 'lang');

  _validateInt(options.height, 'height');
  _validateInt(options.width, 'width');
  _validateInt(options.snippet, 'snippet');

  options.expand = 1;

  return this._getSearch('CrossWiki', options);
};

Wikia.prototype.getSearchList = function(options) {
  options = (options === undefined) ? {} : options;

  _validateIntRange(options.minArticleQuality, 1, 99, 'minArticleQuality');

  if(options.namespaces !== undefined) {
   options.namespaces = _validateArrayInt(options.namespaces, 'namespaces');
  }

  return this._getSearch('List', options);
};

Wikia.prototype.getSearchSuggestion = function(query) {
  _validateRequired(query, 'query');
  _validateStr(query, 'query');

  var url = this._genUrl('SearchSuggestions/List', {query: query});
  return this._request(url);
};

Wikia.prototype.getUsers = function(options) {

  options = (options === undefined) ? {} : options;

  _validateRequired(options.ids, 'ids');
  options.ids = _validateArrayInt(options.ids, 'ids');
  _validateInt(options.size, 'size');

  var url = this._genUrl('User/Details', options);
  return this._request(url);
};

module.exports = Wikia;
