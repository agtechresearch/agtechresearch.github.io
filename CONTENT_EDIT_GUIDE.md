# 웹사이트 콘텐츠 수정 가이드

AgTech Laboratory 웹사이트의 콘텐츠를 직접 수정하는 방법을 안내합니다.

---

## 📋 목차

1. [논문 추가하기](#1-논문-추가하기)
2. [연구 프로젝트 추가하기](#2-연구-프로젝트-추가하기)
3. [멤버 추가/수정하기](#3-멤버-추가수정하기)
4. [갤러리 이미지 추가하기](#4-갤러리-이미지-추가하기)
5. [연락처 정보 수정하기](#5-연락처-정보-수정하기)

---

## 1. 논문 추가하기

### 📁 파일 위치
`publications.html`

### 📍 수정 위치
**라인 45-120** (Publication 리스트 영역)

### ✏️ 수정 방법

기존 논문 아이템을 복사해서 새로운 논문을 추가합니다:

```html
<!-- 새 논문 추가 예시 -->
<div class="publication-item" data-year="2024" data-category="international">
    <div class="publication-content">
        <span class="publication-year">2024</span>
        <h3>논문 제목을 여기에 입력하세요</h3>
        <p class="authors">저자1, 저자2, 저자3</p>
        <p class="journal-name">저널명 또는 학회명</p>
        <p class="publication-info">Volume, Pages, DOI 정보</p>
        <div class="publication-links">
            <a href="논문링크URL" class="link-button" target="_blank">
                <i class="fas fa-file-pdf"></i> Paper
            </a>
            <a href="DOI링크URL" class="link-button" target="_blank">
                <i class="fas fa-link"></i> DOI
            </a>
        </div>
    </div>
</div>
```

### 📝 수정 포인트
1. `data-year="2024"` - 논문 발표 연도
2. `data-category="international"` - 카테고리 (international/domestic/conference)
3. `<h3>` - 논문 제목
4. `<p class="authors">` - 저자 리스트
5. `<p class="journal-name">` - 저널/학회명
6. `<p class="publication-info">` - 추가 정보
7. `<a href="">` - 논문 링크 URL

### ⚠️ 주의사항
- 가장 최근 논문을 **맨 위**에 추가하세요
- `data-category`는 반드시 `international`, `domestic`, `conference` 중 하나 사용
- 링크가 없으면 해당 `<a>` 태그 전체를 삭제하세요

---

## 2. 연구 프로젝트 추가하기

### 📁 파일 위치
`research.html`

### 📍 수정 위치
**라인 46-90** (Research Projects 영역)

### ✏️ 수정 방법

```html
<!-- 새 프로젝트 추가 예시 -->
<div class="research-card">
    <h3>프로젝트 제목</h3>
    <p><strong>Funding:</strong> 펀딩 기관명</p>
    <p><strong>Period:</strong> 2024.01 - Ongoing</p>
    <button class="details-btn"
        data-title="프로젝트 제목"
        data-funding="펀딩 기관명"
        data-period="2024.01 - Ongoing"
        data-desc="프로젝트 상세 설명을 여기에 작성합니다."
        data-pubs='[{"title": "관련 논문 제목1", "url": "논문URL1"}, {"title": "관련 논문 제목2", "url": "논문URL2"}]'>
        See Details
    </button>
</div>
```

### 📝 수정 포인트
1. `<h3>` - 프로젝트 제목 (카드에 표시됨)
2. `data-title` - 프로젝트 제목 (모달에 표시됨)
3. `data-funding` - 펀딩 기관
4. `data-period` - 프로젝트 기간
5. `data-desc` - 프로젝트 상세 설명
6. `data-pubs` - 관련 논문 JSON 배열

### 💡 관련 논문 형식
```json
[
    {"title": "논문1 제목", "url": "https://..."},
    {"title": "논문2 제목", "url": "https://..."}
]
```

### ⚠️ 주의사항
- `data-pubs`의 JSON 형식을 정확히 지켜주세요 (작은따옴표로 감싸기)
- 관련 논문이 없으면 빈 배열 `data-pubs='[]'` 사용

---

## 3. 멤버 추가/수정하기

### 📁 파일 위치
`members.html`

### 📍 수정 위치

#### 교수님 (Faculty)
**라인 59-93**

#### 박사후연구원 (Postdoc)
**라인 97-112**

#### 박사과정 (Ph.D. Students)
**라인 116-177**

#### 석사과정 (Master's Students)
**라인 181-260**

#### 학부생 (Undergraduate Students)
**라인 264-304**

#### 연구원 (Staff)
**라인 307-322**

#### 졸업생 (Alumni)
**라인 440-467**

### ✏️ 수정 방법

#### 학생 추가 예시:
```html
<div class="student-card">
    <div class="student-image">
        <img loading="lazy" src="images/members/사진파일명.jpg" alt="이름">
        <div class="student-overlay">
            <div class="social-links">
                <a href="https://github.com/username" target="_blank" title="GitHub">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="student-info">
        <h3>한글이름 (English Name)</h3>
        <p class="title">Master's Student</p>
        <p class="research"><i class="fas fa-microscope"></i> Research: 연구 분야</p>
        <div class="student-details">
            <span class="detail-item"><i class="fas fa-calendar"></i> Enrolled: 2024.03</span>
        </div>
    </div>
</div>
```

#### 졸업생 추가 예시:
```html
<div class="alumni-card">
    <div class="alumni-header">
        <i class="fas fa-graduation-cap"></i>
        <h3>Class of 2024</h3>
    </div>
    <div class="alumni-content">
        <div class="alumni-item">
            <div class="alumni-image">
                <img src="images/members/사진파일명.jpg" alt="이름">
            </div>
            <div class="alumni-info">
                <h4>한글이름 (English Name)</h4>
                <p class="degree">Master's</p>
                <p class="current"><i class="fas fa-building"></i> 현재 소속</p>
            </div>
            <div class="alumni-thesis">
                <p><i class="fas fa-file-alt"></i> Research: 연구 주제</p>
            </div>
        </div>
    </div>
</div>
```

### 📸 사진 추가 방법
1. 사진 파일을 `images/members/` 폴더에 업로드
2. 파일명은 **한글이름.jpg** 형식 권장
3. HTML에서 `src="images/members/파일명.jpg"` 경로 입력

### 📝 수정 포인트
1. `src="images/members/..."` - 사진 파일 경로
2. `<h3>` - 이름 (한글 + 영문)
3. `<p class="title">` - 직급 (Ph.D. Student, Master's Student 등)
4. `<p class="research">` - 연구 분야
5. `Enrolled: 2024.03` - 입학 연도

### ⚠️ 주의사항
- 사진 파일은 **정사각형 비율**이 가장 좋습니다
- 파일 크기는 **500KB 이하** 권장
- 소셜 링크가 없으면 `<div class="social-links">` 내부를 비워두세요

---

## 4. 갤러리 이미지 추가하기

### 📁 파일 위치
`gallery.html`

### 📍 수정 위치
**라인 64-119** (Gallery Items 영역)

### ✏️ 수정 방법

```html
<div class="gallery-item" data-category="lab">
    <div class="gallery-image">
        <img src="images/gallery/사진파일명.jpg" alt="사진 설명" loading="lazy">
    </div>
    <div class="gallery-overlay">
        <h3>사진 제목</h3>
        <p>사진 설명</p>
    </div>
</div>
```

### 📸 이미지 업로드
1. `images/gallery/` 폴더에 이미지 파일 업로드
2. 파일명은 영문으로 (예: `lab_meeting_2024.jpg`)

### 📝 수정 포인트
1. `data-category` - 카테고리 (lab/event/research)
2. `src="images/gallery/..."` - 이미지 경로
3. `<h3>` - 사진 제목
4. `<p>` - 사진 설명

### 🏷️ 카테고리 종류
- `lab` - 연구실 사진
- `event` - 행사 사진
- `research` - 연구 관련 사진

---

## 5. 연락처 정보 수정하기

### 📁 파일 위치
`contact.html`

### 📍 수정 위치

#### 주소 수정: **라인 58-72**
```html
<div class="address-content">
    <h3>Address</h3>
    <p>건물명 호수</p>
    <p>대학명</p>
    <p>도로명주소</p>
    <p>도시, 국가</p>
</div>
```

#### 전화번호 수정: **라인 76-88**
```html
<div class="phone-content">
    <h3>Phone</h3>
    <p><a href="tel:02-1234-5678">02-1234-5678</a></p>
</div>
```

#### 지도 수정: **라인 47-53**
```html
<iframe
    src="구글맵 임베드 URL"
    width="100%" height="450">
</iframe>
```

### 📝 지도 URL 얻는 방법
1. Google Maps에서 위치 검색
2. "공유" 버튼 클릭
3. "지도 퍼가기" 선택
4. iframe 코드 복사
5. `src="..."` 부분만 가져와서 붙여넣기

---

## 6. Footer 정보 수정하기

### 📁 파일 위치
**모든 HTML 파일** (index.html 제외)

### 📍 수정 위치
각 파일 하단의 `<footer>` 섹션

```html
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-info">
                <h3>AgTech Laboratory</h3>
                <p>건물명, 대학명</p>
                <p>Tel: 02-1234-5678</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 AgTech Laboratory. All rights reserved.</p>
        </div>
    </div>
</footer>
```

### 📝 수정 대상 파일 목록
- `introduction.html`
- `research.html`
- `publications.html`
- `members.html`
- `gallery.html`
- `contact.html`

---

## 💾 변경사항 저장 및 배포

### GitHub Pages 사용 시
1. 파일 수정 완료
2. Git에 커밋
   ```bash
   git add .
   git commit -m "콘텐츠 업데이트: 논문/멤버 추가"
   git push origin main
   ```
3. 약 1-2분 후 웹사이트에 자동 반영

### 로컬 테스트
1. 수정한 HTML 파일을 브라우저에서 열기
2. 정상 작동 확인 후 배포

---

## 🔧 자주 묻는 질문

### Q1. 이미지가 안 보여요
**A.** 이미지 파일 경로를 확인하세요
- 경로: `images/members/파일명.jpg`
- 파일명이 정확히 일치하는지 확인 (대소문자 구분)

### Q2. 논문 필터가 작동하지 않아요
**A.** `data-category` 속성을 확인하세요
- 반드시 `international`, `domestic`, `conference` 중 하나 사용

### Q3. 한글이 깨져요
**A.** HTML 파일 인코딩이 UTF-8인지 확인하세요
- 파일 상단에 `<meta charset="UTF-8">` 확인

### Q4. 모달(팝업)이 안 열려요
**A.** JavaScript 파일이 로드되는지 확인하세요
- 파일 하단에 `<script src="js/main.js"></script>` 확인

### Q5. 레이아웃이 깨져요
**A.** HTML 태그가 올바르게 닫혔는지 확인하세요
- 모든 `<div>`는 `</div>`로 닫아야 함
- 태그 짝 맞추기

---

## 📞 도움이 필요하신가요?

문제가 발생하거나 추가 도움이 필요하면:
1. 수정 전 파일을 백업하세요
2. 에러 메시지를 확인하세요
3. 브라우저 개발자 도구(F12)의 Console 탭을 확인하세요

---

**작성일**: 2024
**버전**: 1.0
**업데이트**: 필요 시 이 문서도 함께 업데이트해주세요
