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
````json
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

````
#### getRecentlyChangedArticles(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| limit | integer |
| namespaces | array string |
| allowDuplicates | boolean |

##### Returns
````json
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
````

#### getNavigation()
##### Returns
````json
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
````
#### getRecommendations(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| id* | integer |
| limit | integer |

##### Returns
````json
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
````

#### getRelatedPages(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| ids* | integer or | array integer
| limit | integer |

##### Returns
````json
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
````

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
````json
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
````

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
````json
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
````

#### getSearchSuggestion(options)
##### Options
| query* | string |

##### Returns
````json
{
  "items": [
    {
      "title": "string"
    }
  ]
}
````
#### getUsers(options)
##### Options
| Parameter | Data Type |
|-------------|-----------|
| ids* | array integer |
| size | integer |

##### Returns
````json

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
````

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
