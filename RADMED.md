# Integrate `dotenv` with `jasmine`

## `package.json`

```json
{
  "name": "exp-jasmine",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jasmine"
  },
  ...
}
```

## Using prelod

```bash
dotenv npm run test
dotenv npm run test -- spec/jasmine_examples/PlayerSpec.js
dotenv npm test -- spec/**/*Spec.js  
```

output:
```shell
╰─ dotenv npm run test                                                                                                       ─╯

> exp-jasmine@1.0.0 test
> jasmine

Randomized with seed 69936
Started
......


6 specs, 0 failures
Finished in 0.013 seconds
Randomized with seed 69936 (jasmine --random=true --seed=69936)


╰─ dotenv npm run test -- spec/jasmine_examples/PlayerSpec.js                                                                ─╯

> exp-jasmine@1.0.0 test
> jasmine spec/jasmine_examples/PlayerSpec.js

Randomized with seed 20544
Started
......


6 specs, 0 failures
Finished in 0.014 seconds
Randomized with seed 20544 (jasmine --random=true --seed=20544)


╰─ dotenv npm test -- spec/**/*Spec.js                                                                                 ─╯

> exp-jasmine@1.0.0 test
> jasmine spec/jasmine_examples/PlayerSpec.js

Randomized with seed 48618
Started
......


6 specs, 0 failures
Finished in 0.014 seconds
Randomized with seed 48618 (jasmine --random=true --seed=48618)
```