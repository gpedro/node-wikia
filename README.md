#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Wikia API Client written in node.js


## Install

```sh
$ npm install --save node-wikia
```


## Usage

```js
var Wikia = require('node-wikia');
var tibia = new Wikia('tibia');

/*
tibia
  .getNavigation()
    .then(function(data) {
      // do foo
    })
    .fail(function(err) {
      // do bar
    });
*/
```

## API
### Summary
#### Activity
Get information about the latest user activity on the current wiki
* [getLatestActivity(options)](https://github.com/TibiaJS/node-wikia#getlatestactivityoptions) - Get latest activity information
* [getRecentlyChangedArticles(options)](https://github.com/TibiaJS/node-wikia#getrecentlychangedarticlesoptions) - Get recently changed articles

#### Articles
Get simplified article contents
* [getArticleAsSimpleJson(id)](https://github.com/TibiaJS/node-wikia#getarticleassimplejsonid) - Get simplified article contents
* [getArticleDetails(options)](https://github.com/TibiaJS/node-wikia#getarticledetailsoptions) - Get details about one or more articles
* [getArticlesList(options)](https://github.com/TibiaJS/node-wikia#getarticleslistoptions) - Get articles list in alphabetical order
* [getArticlesListExpanded(options)](https://github.com/TibiaJS/node-wikia#getarticleslistexpandedoptions) - Get a list of pages on the current wiki
* [getArticlesMostLinked(options)](https://github.com/TibiaJS/node-wikia#getarticlesmostlinkedoptions) - Get the most linked articles on this wiki
* [getArticlesMostLinkedExpanded(options)](https://github.com/TibiaJS/node-wikia#getarticlesmostlinkedexpandedoptions) - Get the most linked articles on this wiki (expanded results)
* [getArticlesNewest(options)](https://github.com/TibiaJS/node-wikia#getarticlesnewestoptions) - Get list of new articles on this wiki
* [getArticlesPopular(options)](https://github.com/TibiaJS/node-wikia#getarticlespopularoptions) - Get popular articles for the current wiki (from the beginning of time)
* [getArticlesPopularExpanded(options)](https://github.com/TibiaJS/node-wikia#getarticlespopularexpandedoptions) - Get popular articles for the current wiki (from the beginning of time)
* [getArticlesMostViewed(options)](https://github.com/TibiaJS/node-wikia#getarticlesmostviewedoptions) - Get the most viewed articles on this wiki
* [getArticlesMostViewedExpanded(options)](https://github.com/TibiaJS/node-wikia#getarticlesmostviewedexpandedoptions) - Get the most viewed articles for this wiki (expanded results)
* [getArticlesMostViewedByHub(options)](https://github.com/TibiaJS/node-wikia#getarticlesmostviewedbyhuboptions) - Get the top articles by pageviews for a hub

#### Navigation
Get wiki navigation links (the main menu of given wiki)
* [getNavigation()](https://github.com/TibiaJS/node-wikia#getnavigation) - Get wiki navigation links (the main menu of given wiki)

#### Recommendations
Get recommendations for article from many sources
* [getRecommendations(options)](https://github.com/TibiaJS/node-wikia#getrecommendationsoptions) - Get recommendations for article from many sources

#### Related Pages
Get pages related to a given article ID
* [getRelatedPages(options)](https://github.com/TibiaJS/node-wikia#getrelatedpagesoptions) - Get pages related to a given article ID

#### Search
Get results for combined (wiki and cross-wiki) search
* [getSearchCrossWiki(options)](https://github.com/TibiaJS/node-wikia#getsearchcrosswikioptions) - Get results for cross-wiki search (extended response)
* [getSearchList(options)](https://github.com/TibiaJS/node-wikia#getsearchlistoptions) - Do search for given phrase

#### Search Suggestion
Find suggested phrases for chosen query
* [getSearchSuggestion(options)](https://github.com/TibiaJS/node-wikia#getsearchsuggestionoptions) - Find suggested phrases for chosen query

#### User
Get details about selected users
* [getUsers(options)](https://github.com/TibiaJS/node-wikia#getusersoptions) - Get details about selected users

=====

__*__ required

### Methods
#### getLatestActivity(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| limit | integer |
| namespaces | array string |
| allowDuplicates | boolean |

##### Returns
```json
{
  "items": [
    {
      "article": "integer",
      "user": "integer",
      "revisionId": "integer",
      "timestamp": "integer"
    }
  ],
  "basepath": "string"
}

```

#### getRecentlyChangedArticles(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| limit | integer |
| namespaces | array string |
| allowDuplicates | boolean |

##### Returns
```json
{
  "items": [
    {
      "article": "integer",
      "user": "integer",
      "revisionId": "integer",
      "timestamp": "integer"
    }
  ],
  "basepath": "string"
}
```

#### getArticleAsSimpleJson(id)
##### Arguments
| Parameter | Data Type |
|-------------|-----------|
| id* | integer |
##### Returns
```json
{
  "sections": [
    {
      "title": "string",
      "level": "integer",
      "content": [
        {
          "type": "string",
          "text": "string",
          "elements": [
            {
              "text": "string",
              "elements": [
                "ListElement"
              ]
            }
          ]
        }
      ],
      "images": [
        {
          "src": "string",
          "caption": "string"
        }
      ]
    }
  ]
}
```

#### getArticleDetails(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| ids* | array integer |
| titles | array string |
| abstract | integer |
| width | integer |
| height | integer |

##### Returns
```json
{
  "items": [
    {
      "original_dimensions": {
        "width": "integer",
        "height": "integer"
      },
      "url": "string",
      "ns": "integer",
      "abstract": "string",
      "thumbnail": "string",
      "revision": {
        "id": "integer",
        "user": "string",
        "user_id": "integer",
        "timestamp": "integer"
      },
      "id": "integer",
      "title": "string",
      "type": "string",
      "comments": "integer"
    }
  ],
  "basepath": "string"
}
```

#### getArticlesList(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| category | array string |
| namespaces | array string |
| limit | integer |
| offset | string |
##### Returns
```json
{
  "items": [
    {
      "id": "integer",
      "title": "string",
      "url": "string",
      "ns": "integer"
    }
  ],
  "offset": "string",
  "basepath": "string"
}
```

#### getArticlesListExpanded(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| category | array string |
| namespaces | array string |
| limit | integer |
| offset | string |

##### Returns
```json
{
  "items": [
    {
      "original_dimensions": {
        "width": "integer",
        "height": "integer"
      },
      "url": "string",
      "ns": "integer",
      "abstract": "string",
      "thumbnail": "string",
      "revision": {
        "id": "integer",
        "user": "string",
        "user_id": "integer",
        "timestamp": "integer"
      },
      "id": "integer",
      "title": "string",
      "type": "string",
      "comments": "integer"
    }
  ],
  "offset": "string",
  "basepath": "string"
}
```

#### getArticlesMostLinked()
##### Returns
```json
{
  "items": [
    {
      "url": "string",
      "ns": "integer",
      "id": "integer",
      "title": "string",
      "backlink_cnt": "integer"
    }
  ],
  "basepath": "string"
}
```

#### getArticlesMostLinkedExpanded()
##### Returns
```json
{
  "items": [
    {
      "url": "string",
      "ns": "integer",
      "abstract": "string",
      "revision": {
        "id": "integer",
        "user": "string",
        "user_id": "integer",
        "timestamp": "integer"
      },
      "id": "integer",
      "title": "string",
      "type": "string",
      "backlink_cnt": "integer",
      "comments": "integer"
    }
  ],
  "basepath": "string"
}
```

#### getArticlesNewest(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| namespaces | array string |
| limit | integer |
| minArticleQuality | integer |

##### Returns
```json
{
  "quality": "integer",
  "original_dimensions": {
    "width": "integer",
    "height": "integer"
  },
  "url": "string",
  "ns": "integer",
  "abstract": "string",
  "creator": {
    "avatar": "string",
    "name": "string"
  },
  "thumbnail": "string",
  "creation_date": "string",
  "id": "integer",
  "title": "string"
}
```

#### getArticlesPopular(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| limit | integer |
| baseArticleId | integer |

##### Returns
```json
{
  "items": [
    {
      "id": "integer",
      "title": "string",
      "url": "string"
    }
  ],
  "basepath": "string"
}
```

#### getArticlesPopularExpanded(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| limit | integer |
| baseArticleId | integer |

##### Returns
```json
{
  "items": [
    {
      "original_dimensions": {
        "width": "integer",
        "height": "integer"
      },
      "url": "string",
      "ns": "integer",
      "abstract": "string",
      "thumbnail": "string",
      "revision": {
        "id": "integer",
        "user": "string",
        "user_id": "integer",
        "timestamp": "integer"
      },
      "id": "integer",
      "title": "string",
      "type": "string",
      "comments": "integer"
    }
  ],
  "basepath": "string"
}
```

#### getArticlesMostViewed(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| namespaces | array string |
| category | array string |
| limit | integer |
| baseArticleId | integer |

##### Returns
```json
{
  "items": [
    {
      "id": "integer",
      "title": "string",
      "url": "string",
      "ns": "integer"
    }
  ],
  "basepath": "string"
}
```

#### getArticlesMostViewedExpanded(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| namespaces | array string |
| category | array string |
| limit | integer |
| baseArticleId | integer |
##### Returns
```json
{
  "items": [
    {
      "original_dimensions": {
        "width": "integer",
        "height": "integer"
      },
      "url": "string",
      "ns": "integer",
      "abstract": "string",
      "thumbnail": "string",
      "revision": {
        "id": "integer",
        "user": "string",
        "user_id": "integer",
        "timestamp": "integer"
      },
      "id": "integer",
      "title": "string",
      "type": "string",
      "comments": "integer"
    }
  ],
  "basepath": "string"
}
```

#### getArticlesMostViewedByHub(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| hub* | array string |
| lang | array string |
| namespaces | array string |

##### Returns
```json
{
  "items": [
    {
      "wiki": {
        "id": "integer",
        "name": "string",
        "language": "string",
        "domain": "string"
      },
      "articles": [
        {
          "id": "integer",
          "ns": "integer"
        }
      ]
    }
  ]
}
```

#### getNavigation()
##### Returns
```json
{
  "navigation": {
    "wikia": [
      {
        "text": "string",
        "href": "string",
        "children": [
          {
            "text": "string",
            "href": "string"
          }
        ]
      }
    ],
    "wiki": [
      "WikiaItem"
    ]
  }
}
```
#### getRecommendations(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| id* | integer |
| limit | integer |

##### Returns
```json
{
  "items": [
    {
      "source": "string",
      "url": "string",
      "description": "string",
      "media": {
        "duration": "integer",
        "originalWidth": "integer",
        "thumbUrl": "string",
        "videoKey": "string",
        "originalHeight": "integer"
      },
      "title": "string",
      "type": "string"
    }
  ]
}
```

#### getRelatedPages(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| ids* | integer or array integer |
| limit | integer |

##### Returns
```json
{
  "items": [
    {
      "url": "string",
      "text": "string",
      "imgUrl": "string",
      "id": "integer",
      "title": "string"
    }
  ],
  "basepath": "string"
}
```

#### getSearchCrossWiki(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| query* | string |
| hub | array string |
| lang | array string |
| rank | array string |
| limit | integer |
| batch | integer |
| height | integer |
| width | integer |
| snippet | integer |

##### Returns
```json
{
  "items": [
    {
      "headline": "string",
      "desc": "string",
      "stats": {
        "users": "integer",
        "articles": "integer",
        "pages": "integer",
        "admins": "integer",
        "activeUsers": "integer",
        "edits": "integer",
        "videos": "integer",
        "images": "integer"
      },
      "original_dimensions": {
        "width": "integer",
        "height": "integer"
      },
      "url": "string",
      "image": "string",
      "flags": [
        "string"
      ],
      "wam_score": "number",
      "id": "integer",
      "topUsers": [
        "string"
      ],
      "wordmark": "string",
      "title": "string",
      "lang": "string"
    }
  ]
}
```

#### getSearchList(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| query* | string |
| type | string |
| rank | array string |
| limit | integer |
| minArticleQuality | integer |
| batch | integer |
| namespaces | array integer |

##### Returns
```json
{
  "batches": "integer",
  "items": [
    {
      "quality": "integer",
      "url": "string",
      "ns": "integer",
      "id": "integer",
      "title": "string"
    }
  ],
  "total": "integer",
  "currentBatch": "integer",
  "next": "integer"
}
```

#### getSearchSuggestion(options)
##### Options
| query* | string |

##### Returns
```json
{
  "items": [
    {
      "title": "string"
    }
  ]
}
```
#### getUsers(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| ids* | array integer |
| size | integer |

##### Returns
```json

{
  "items": [
    {
      "name": "string",
      "avatar": "string",
      "url": "string",
      "user_id": "integer",
      "numberofedits": "integer",
      "title": "string"
    }
  ],
  "basepath": "string"
}
```

## License

The MIT License (MIT)

Copyright (c) 2015 TibiaJS

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[npm-url]: https://npmjs.org/package/node-wikia
[npm-image]: https://badge.fury.io/js/node-wikia.svg
[travis-url]: https://travis-ci.org/TibiaJS/node-wikia
[travis-image]: https://travis-ci.org/TibiaJS/node-wikia.svg?branch=master
[daviddm-url]: https://david-dm.org/TibiaJS/node-wikia.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/TibiaJS/node-wikia
