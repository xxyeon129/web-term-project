> [!NOTE]
> 컴퓨터공학과 웹 프로그래밍 강의 수강 중 과제라 제한적으로 구현했습니다.(React 사용 금지 조건)
> 
> Next.js를 사용해 리팩토링 예정입니다.
> 
> iframe 태그 등 성능이나 보안상 지양되는 코드가 사용됨을 인지하고 있습니다. 강의 내용에 있는 코드만 사용하는 것이 평가 주안점이라서 문제가 되는 코드인 점을 알지만 긍정적인 평가 점수를 얻기 위해 사용했습니다. 

# 2024년도 1학기 웹프로그래밍 **Term Project**

- 제출 기한: 6월 20일(목) 24시
- 주제: 자기소개 및 취미
- 평가 주안점: 콘텐츠 양과 질, 수업시간에 가능한 배운 것을 활용
- 허용 기술스택: HTML, CSS, JavaScript (React, NextJS 등 라이브러리나 프레임워크 사용 금지)
- 평가점수: 30%

## 실행 방법

폴더 내 root 경로의 index.html을 더블클릭해 브라우저에서 실행

- Windows 크롬 브라우저 1370\*910 화면에 최적화된 화면 구성과 디자인입니다.

## 페이지 구성

- 홈페이지
- 자기소개 페이지
- 취미(패션) 홈페이지
  - 패션 브랜드 1 메인 페이지
    - 패션 브랜드 1 - 매거진 1 페이지 (관련 기사 페이지)
    - 패션 브랜드 1 - 매거진 2 페이지 (컬렉션 페이지)
    - 패션 브랜드 1 - 매거진 3 페이지 (관련 기사 페이지)
  - 패션 브랜드 2 메인 페이지
    - 패션 브랜드 2 - 매거진 1 페이지 (관련 기사 페이지)
    - 패션 브랜드 2 - 매거진 2 페이지 (컬렉션 페이지)
    - 패션 브랜드 2 - 매거진 3 페이지 (관련 기사 페이지)
  - 패션 브랜드 3 메인 페이지
    - 패션 브랜드 3 - 매거진 1 페이지 (관련 기사 페이지)
    - 패션 브랜드 3 - 매거진 2 페이지 (컬렉션 페이지)
    - 패션 브랜드 3 - 매거진 3 페이지 (관련 기사 페이지)

## User-flow

사용자가 다음과 같은 루트로 페이지를 이동한다고 상정해 개발했습니다.

1. 홈페이지 진입 → 자기소개 페이지
2. (Header의 Fashion 버튼 클릭) → 패션 홈페이지
3. (패션 홈페이지의 브랜드 클릭) → 클릭한 브랜드의 메인 페이지
4. (브랜드 메인 페이지에서 매거진 클릭) → 클릭한 매거진 페이지
5. (매거진 페이지에서 좌측 상단 뒤로가기 버튼 클릭) → 브랜드의 메인 페이지
6. 다른 매거진도 4~5 단계를 거쳐 확인
7. (Header의 Fashion 버튼 클릭) → 패션 홈페이지
8. 다른 패션 브랜드도 3~6단계를 거쳐 확인

## 폴더 구조

```
📂 term-project_201932477_jeong-seung-yeon
├──📂 css  // 전체적으로 적용되는 css styling 폴더
│   ├── 📄 common.css
│   ├── 📄 reset.css
│   └── 📄 axios
├──📂 pages
│   ├── 📂 aboutme  // 자기소개 페이지 폴더
│   │   ├── 📂 images
│   │   ├── 📄 aboutme.css
│   │   └── 📄 aboutme.html
│   └── 📂 fashion  // 취미(패션) 폴더
│       ├── 📂 common  // 패션 페이지 관련 전체적으로 적용되는 파일 폴더
│       │    ├── 📄 fashion-brand-article.css  // 매거진 - 기사 css 파일
│       │    ├── 📄 fashion-brand-collection.css  // 매거진 - 콜렉션 css 파일
│       │    ├── 📄 fashion-detail-page-button-background.css  // 매거진 페이지 뒤로가기 버튼, 배경 css 파일
│       │    └── 📄 goToTop.js  // 페이지 이동 시 스크롤 상단 이동 함수
│       ├── 📂 images  // 패션 브랜드 관련 이미지 파일
│       │    ├── 📂 glowny
│       │    ├── 📂 nike
│       │    └── 📂 tmb
│       ├── 📂 brand-glowny  // 해당 브랜드 매거진 페이지 폴더
│       │    ├── 📄 fashion-brand-glowny-magazine-1.html
│       │    ├── 📄 fashion-brand-glowny-magazine-2.html
│       │    ├── 📄 fashion-brand-glowny-magazine-3.html
│       │    └── 📄 fashion-brand-glowny.css  // 해당 브랜드에만 쓰이는 css styling
│       ├── 📂 brand-nike  // 해당 브랜드 매거진 페이지 폴더
│       │    ├── 📄 fashion-brand-nike-magazine-1.html
│       │    ├── 📄 fashion-brand-nike-magazine-2.html
│       │    ├── 📄 fashion-brand-nike-magazine-3.html
│       │    └── 📄 fashion-brand-nike.css  // 해당 브랜드에만 쓰이는 css styling
│       ├── 📂 brand-tmb  // 해당 브랜드 매거진 페이지 폴더
│       │    ├── 📄 fashion-brand-tmb-magazine-1.html
│       │    ├── 📄 fashion-brand-tmb-magazine-2.html
│       │    ├── 📄 fashion-brand-tmb-magazine-3.html
│       │    └── 📄 fashion-brand-tmb.css  // 해당 브랜드에만 쓰이는 css styling
│       ├── 📄 fashion-brand-glowny.html  // 패션 브랜드 메인 페이지
│       ├── 📄 fashion-brand-nike.html  // 패션 브랜드 메인 페이지
│       ├── 📄 fashion-brand-tmb.html  // 패션 브랜드 메인 페이지
│       ├── 📄 fashion-brand.css  // 패션 브랜드 메인 페이지 css 파일
│       ├── 📄 fashion-home.css  // 패션 홈페이지 css 파일
│       └── 📄 show-hide-pages.js  // 브랜드 페이지 - 매거진 페이지 간 이동 라우터 함수 파일
├── 📄 index.css  // index.html 홈페이지에 적용되는 css 파일
├── 📄 index.html // 홈페이지
└── 📄 router.js // 홈페이지에서 다른 페이지로 이동하도록 설정한 라우터 함수 파일
```
