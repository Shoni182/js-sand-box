{
   "My Fetch": {
      "prefix": "js-fetch",
      "body": [
         "function fetchPosts() {",
         "   const BASE_URL = '';",
         "   const END_POINT = '';",
         "   const params = new URLSearchParams({",
         "     param1: 1,",
         "     param2: 2,",
         "     param3: 3,",
         "   });",
         "   const url = ``;",
         "  ",
         "   const options = {",
         "     headers: {",
         "      header1: 1,",
         "      header2: 2,",
         "      header3: 3,",
         "     },",
         "   };",
         "  ",
         "   return fetch(url, options).then(res => res.json());",
         "}",
      ],
      "description": "JS Fetch GET"
   },
   "MyAxios": {
      "prefix": "js-axios",
      "body": [
         "async function getNews(query) {",
         "   const baseURL = '';",
         "   const endPoint = '';",
         "   const url = baseURL + endPoint;",
         " ",
         "   const params = {",
         "     param1: '1',",
         "     param2: '1',",
         "     param3: '1',",
         "   };",
         " ",
         "   const headers = {",
         "     key1: 'value',",
         "   };",
         " ",
         "   const res = await axios.get(url, { headers, params });",
         "   return res.data;",
         "}",
      ],
      "description": "JS Axios GET"
   },
   "ArrayRender": {
      "prefix": "js-array-render",
      "body": [
         "function itemTemplate(item) {",
         "return `<div>\\${item}</div>`;",
         "}",
         "",
         "function itemsTemplate(items) {",
         "  return items.map(itemTemplate).join('');",
         "}"
      ],
      "description": "Render array items to HTML using JS"
   }
}