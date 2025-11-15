# 배포 체크리스트 (Deployment Checklist)

## 📋 배포 전 확인사항

### ✅ 필수 확인 사항

- [ ] **1. Contact 폼 설정**
  ```bash
  # js/contact.js 파일 열기
  # 다음 중 하나 선택:

  # Option 1: Formspree (권장)
  # 1. https://formspree.io/ 가입
  # 2. 새 Form 생성
  # 3. Form ID 복사
  # 4. js/contact.js에서 YOUR_FORM_ID 교체

  # Option 2: EmailJS
  # 1. https://www.emailjs.com/ 가입
  # 2. Service와 Template 생성
  # 3. Public Key 받기
  # 4. js/contact.js에서 YOUR_SERVICE_ID 등 교체
  ```

- [ ] **2. 모든 이미지 확인**
  - [ ] hero 배경 이미지 (images/hero/)
  - [ ] 멤버 프로필 사진 (images/members/)
  - [ ] 뉴스 이미지 (images/news/)
  - [ ] 연구 프로젝트 이미지 (images/research/)

- [ ] **3. 멤버 정보 확인**
  - [ ] 교수 정보 (members.html)
  - [ ] 박사후연구원 정보
  - [ ] 학생 정보
  - [ ] 졸업생 정보

- [ ] **4. 연락처 정보 확인**
  - [ ] 이메일 주소
  - [ ] 전화번호
  - [ ] 주소
  - [ ] Google Maps 위치

---

## 🧪 기능 테스트

### 네비게이션
- [ ] 모든 페이지 링크 작동 확인
- [ ] 모바일 햄버거 메뉴 작동
- [ ] News 링크가 모든 페이지에 있는지 확인

### News 페이지 (news.html)
- [ ] 카테고리 필터 작동 (All, Research, Achievement, Event, Publication)
- [ ] 검색 기능 작동
- [ ] 페이지네이션 버튼 표시

### Contact 페이지 (contact.html)
- [ ] 폼 입력 검증 작동
- [ ] 제출 버튼 클릭 시 동작 확인
  - [ ] Formspree 설정 완료 시: 이메일 전송 테스트
  - [ ] 미설정 시: mailto 링크 열림 확인
- [ ] Google Form 링크 작동

### Members 페이지 (members.html)
- [ ] All Members 탭 작동
- [ ] Current Members 탭 작동
- [ ] Alumni 탭 작동
- [ ] 탭 전환 애니메이션 확인

### Gallery 페이지 (gallery.html)
- [ ] 카테고리 필터 작동
- [ ] 이미지 lazy loading 작동
- [ ] 이미지 호버 효과 확인

### Publications 페이지 (publications.html)
- [ ] 연도 필터 작동
- [ ] 검색 기능 작동
- [ ] 논문 링크 작동

### Research 페이지 (research.html)
- [ ] "See Details" 버튼 작동
- [ ] 모달 팝업 열림/닫힘
- [ ] 프로젝트 정보 표시 확인

---

## 📱 반응형 테스트

### 데스크톱 (1200px+)
- [ ] 레이아웃 정상
- [ ] 모든 기능 작동
- [ ] 이미지 정상 표시

### 태블릿 (768px - 1199px)
- [ ] 레이아웃 조정 확인
- [ ] 네비게이션 정상
- [ ] Contact 폼 1칼럼으로 변경 확인

### 모바일 (768px 이하)
- [ ] 햄버거 메뉴 작동
- [ ] News 그리드 1칼럼으로 변경
- [ ] Members 탭 세로 배치
- [ ] Contact 폼 1칼럼
- [ ] 모든 버튼 터치 가능

---

## 🚀 GitHub Pages 배포

### 배포 단계
1. [ ] **커밋 및 푸시**
   ```bash
   git add .
   git commit -m "feat: 제한사항 해결 및 기능 개선

   - News 페이지 추가
   - Contact 폼 작동 구현
   - Members 탭 활성화
   - 이미지 최적화 (lazy loading)"

   git push origin main
   ```

2. [ ] **GitHub Pages 설정**
   - Repository → Settings → Pages
   - Source: main branch, / (root)
   - Save

3. [ ] **배포 확인**
   - URL: https://agtechresearch.github.io/
   - 약 2-5분 대기
   - 사이트 접속 테스트

---

## 🔍 배포 후 최종 확인

### 프로덕션 환경 테스트
- [ ] 모든 페이지 접속 확인
- [ ] 이미지 로딩 확인
- [ ] Contact 폼 전송 테스트 (실제 이메일 전송 확인)
- [ ] 모바일에서 접속 테스트
- [ ] 다양한 브라우저 테스트
  - [ ] Chrome
  - [ ] Safari
  - [ ] Firefox
  - [ ] Edge

### 성능 확인
- [ ] 페이지 로딩 속도 (< 3초)
- [ ] 이미지 lazy loading 작동
- [ ] 애니메이션 부드러움

---

## 📝 선택 사항

### 추가 최적화 (Optional)
- [ ] Google Analytics 추가
- [ ] SEO 메타태그 최적화
- [ ] Open Graph 태그 추가
- [ ] Favicon 추가
- [ ] 404 페이지 커스터마이징

### 콘텐츠 업데이트
- [ ] 실제 뉴스 콘텐츠로 교체
- [ ] 더 많은 Gallery 이미지 추가
- [ ] Research 프로젝트 이미지 추가
- [ ] Publications 최신화

---

## 🐛 문제 해결

### Contact 폼이 작동하지 않는 경우
1. js/contact.js에서 설정 확인
2. Formspree/EmailJS 계정 활성화 확인
3. 브라우저 콘솔에서 에러 메시지 확인
4. 네트워크 탭에서 요청 확인

### 이미지가 표시되지 않는 경우
1. images/ 폴더가 커밋되었는지 확인
2. 파일 경로 대소문자 확인
3. 파일 이름 특수문자 확인

### 탭이 작동하지 않는 경우
1. members.js가 로드되는지 확인
2. 브라우저 콘솔 확인
3. HTML 구조 확인 (data-tab, data-content 속성)

---

## 📚 참고 문서

- **CHANGELOG.md**: 상세한 변경 이력
- **WORK_SUMMARY_KR.md**: 작업 요약
- **README.md**: 프로젝트 전체 문서
- **js/contact.js**: Contact 폼 설정 가이드 (주석)

---

## ✅ 배포 완료 체크

- [ ] 모든 기능 테스트 완료
- [ ] Contact 폼 설정 완료
- [ ] GitHub에 푸시 완료
- [ ] GitHub Pages 배포 완료
- [ ] 프로덕션 환경 테스트 완료

---

**배포 준비 완료!** 🎉

체크리스트를 모두 확인했다면 안전하게 배포할 수 있습니다.
