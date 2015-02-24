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
* [getLatestActivity(options)](https://github.com/TibiaJS/node-wikia#getlatestactivityoptions)
* [getRecentlyChangedArticles(options)](https://github.com/TibiaJS/node-wikia#getrecentlychangedarticlesoptions)

#### Navigation
* [getNavigation()](https://github.com/TibiaJS/node-wikia#getnavigation)

#### Recommendations
* [getRecommendations(options)](https://github.com/TibiaJS/node-wikia#getrecommendationsoptions)

#### Related Pages
* [getRelatedPages(options)](https://github.com/TibiaJS/node-wikia#getrelatedpagesoptions)

#### Search Suggestion
* [getSearchSuggestion(options)](https://github.com/TibiaJS/node-wikia#getsearchsuggestionoptions)

#### User
* [getUsers(options)](https://github.com/TibiaJS/node-wikia#getusersoptions)

=====

### Methods
#### getLatestActivity(options)
Get latest activity information
##### Options
* limit - optional - integer
* namespaces - optional -array
* allowDuplicates - optional - boolean

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
Get recently changed articles
##### Options
* limit - optional - integer
* namespaces - optional -array
* allowDuplicates - optional - boolean

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
Get wiki navigation links (the main menu of given wiki).
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
Get recommendations for article from many sources
##### Options
* id - required - integer
* limit - optional, integer

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
Get pages related to a given article ID
##### Options
* ids - required - integer
* limit - optional, integer

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
#### getSearchSuggestion(options)
Find suggested phrases for chosen query
##### Options
* query - required - string

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
Get details about selected users 
##### Options
* ids - required - array 
* size - optional - integer

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
