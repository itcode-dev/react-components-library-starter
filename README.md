<h1 align="center">React Components Library Starter</h1>

## Hello, There!

- **React Components Library Starter**는 React 컴포넌트 라이브러리를 개발하고 배포하기위한 스타터팩입니다.
- **TypeScript**, **SCSS** 기반의 React 컴포넌트를 구현할 수 있습니다.
- **Rollup.js** 빌더를 사용합니다.
- **Storybook**을 통해 컴포넌트를 테스트할 수 있습니다.

## Guide

### 1. Repository Clone

``` bash
git clone https://github.com/itcode-dev/react-components-library-starter [lib_name]
```

- 라이브러리를 클론합니다.

### 2. Configuration

``` json
{
	"name": "[lib_name]",
	"repository": "[repo_url]",
	"author": "[repo_name]",
}
```

- 라이브러리의 이름을 입력합니다.
- 라이브러리의 Repository URL, 게시자를 형식에 맞게 입력합니다.

### 3. Install Dependencies

``` bash
# yarn
yarn

# npm
npm install
```

- React Components Library Starter는 `yarn`을 권장합니다.
- 위 명령어를 입력하여 의존성 모듈을 설치하세요.

### 4. Structure

``` bash
react-components-library-starter
├── .storybook
├── node_modules
├── src # source root
│	├── atom # demo code
│	│	├── Button
│	│	│	├── Button.module.scss # scss for component
│	│	│	├── Button.stories.tsx # storybook code
│	│	│	├── Button.tsx # component code
│	│	│	└── index.ts # component index
│	│	├── Input
│	│	│	├── index.ts
│	│	│	├── Input.module.scss
│	│	│	├── Input.stories.tsx
│	│	│	└── Input.tsx
│	│	└── index.ts # atom index
│	├── declaration.d.ts # for *.module.scss
│	├── index.ts # main script
│	└── stories.module.scss # scss for storybookW
├── .eslintrc.js
├── .gitignore
├── LICENSE
├── package.json
├── README.md
├── rollup.config.js # rollup configuration
└── tsconfig.json
```

- 소스코드의 최상단 루트는 `src/`
- `atom` 폴더 내부의 코드는 참조를 위한 예시 코드

``` tsx
import Button from '@itcode-dev/react-components-library-starter/dist/atom/Button';
import Input from '@itcode-dev/react-components-library-starter/dist/atom/Input';
```

- 라이브러리 기본 빌드 결과물인 CJS 모듈은 tree shaking을 지원하도록 설정되어있습니다.
- 폴더 구조가 컴포넌트 호출 시 위와 같이 표기되므로, 적절한 폴더 구조를 선언하시면 됩니다.

### 5. Develop

- 컴포넌트를 구성하는 코드의 단위는 총 4개로 구분됩니다.
  - `{component}.tsx`
  - `{component}.module.scss`
  - `{component}.stories.tsx`
  - `index.ts`
- 개발자의 의도에 따라 일부 파일은 생략할 수 있습니다.

#### Component Example

- `{component}.tsx`

``` tsx
import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cn = classNames.bind(styles);

export interface ButtonProps
{
	// ...
}

export default Button({ className, ...props }: ButtonProps): JSX.Element
{
	return (
		<button className={cn(className, 'button')} {...props} />
	)
}
```

- `{component}.module.scss`

``` scss
.button {
	background-color: gainsboro;
	// ...
}
```

- `{component}.stories.tsx`
  - 파일 참조

<br />

- `index.ts`

``` ts
import Button from './Button';

export default Button;
```

#### Folder Example

- `src/index.ts`에 바로 추가해도 동작에 문제는 없지만, 이럴 경우 규모가 커지면 커질수록 해당 파일의 복잡성이 증가합니다.
- 각 폴더별(ex. atom)별로 분산하여 관리하면 코드를 간소화할 수 있습니다.

<br />

- `atom/index.ts`

``` ts
import Button from './Button';
import Input from './Input';

export default { Button, Input };
```

- `index.ts`

``` ts
import atom from './atom';
import molecule from './molecule';

export default { atom, molecule };
```

- `atom/` 하위의 컴포넌트는 `atom/index.ts`로 통합합니다.
- `index.ts`에서 각 하위 폴더의 `index.ts`를 참조하여 export합니다.

### 6. Test

![image](https://user-images.githubusercontent.com/50317129/172433200-b4b72fe1-e99b-4105-84fe-43f606cf54ff.png)

``` bash
yarn storybook

npm run storybook
```

- Storybook을 통해 구성한 컴포넌트를 확인하고, 각종 변수를 실시간으로 조작할 수 있습니다.
- Storybook의 사용법은 [Storybook 공식 사이트](https://storybook.js.org/tutorials/intro-to-storybook/react/ko/get-started/)를 참고해주세요.
- 혹은 `atom/` 하위의 코드를 참조하여 사용할 수도 있습니다.

### 7. Build

``` bash
yarn build

npm run build
```

- Rollup.js로 빌드를 수행합니다.
- 빌드 설정은 `rollup.config.js`에 명시되어 있습니다.
- 빌드 결과물은 `dist/`에 출력됩니다.

### 8. Publish

``` bash
npm login
# username
# password
# email
# email otp password

yarn publish --access public

npm run publish --access public
```

- npm 로그인을 수행합니다.
  - 없다면 [npm 공식 사이트](https://www.npmjs.com/)에서 생성할 수 있습니다.
- 배포를 수행합니다. `package.json`의 `name`을 기준으로 배포가 수행됩니다.
  - 라이브러리 설치 시, 이 `name`을 기준으로 설치합니다.
  - 라이브러리 이름 앞의 `@`는 조직을 의미합니다.

### 9. Apply

``` bash
yarn add @itcode-dev/react-components-library-starter

npm install @itcode-dev/react-components-library-starter
```

- 위 명령어를 통해 설치할 수 있습니다.
- 배포된 라이브러리는 TypeScript, JavaScript 환경 모두에 적용 가능합니다.