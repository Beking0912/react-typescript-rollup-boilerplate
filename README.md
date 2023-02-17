## How to use
​```bash
npm i bk-sum
​```

```js
import { Sum } from '@bk/sum'

<Sum a={2} b={3}/>
```

## build
​```bash
npm run build
npm run build:types
​```

## test
​```bash
npm run test
​```

## tag 
patch/minor/major
​```bash
npm version patch/tag
git push
git push origin --tags
​```

## publish
​```bash
npm config get registry
npm adduser
yarn info @bk/sum@version
yarn publish
​```

## unpublish
​```bash
npm unpublish @bk/sum --force
npm unpublish @bk/sum@version
​```
