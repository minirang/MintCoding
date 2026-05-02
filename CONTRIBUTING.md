# 기여 가이드

MintCoding에 기여해주셔서 감사합니다! 아래 가이드를 읽고 참여해주세요.

-----

## 기여 방법

### 1. 이슈 등록

버그를 발견하거나 새로운 기능을 제안하고 싶다면 먼저 [Issues](../../issues)에 등록해주세요. 이미 동일한 이슈가 있는지 확인 후 작성해주시면 좋습니다.

### 2. Fork 및 브랜치 생성

```bash
git clone https://github.com/minirang/MintCoding.git
cd MintCoding
git checkout -b feature/your-feature-name
```

### 3. 변경 사항 작성

- 커스텀 블록 추가 시 `js/customBlocks/` 하위에 블록명으로 폴더를 만들고, `블록명.js`와 `generator.js`를 작성해주세요.
- 기존 코드 스타일을 최대한 유지해주세요.

### 4. 커밋 메시지 규칙

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 스타일 변경 (기능 변경 없음)
refactor: 코드 리팩토링
```

### 5. Pull Request

변경이 완료되면 `main` 브랜치를 대상으로 Pull Request를 열어주세요. PR 설명에 변경 내용과 이유를 간략히 작성해주세요.

-----

## 문의

기여 관련 문의는 [minseong130502@gmail.com](mailto:minseong130502@gmail.com)으로 연락해주세요.