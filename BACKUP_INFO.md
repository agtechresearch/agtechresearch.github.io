# Website Backup Information

## 최신 백업 정보

### 백업 날짜: 2025-11-15 16:06:26

**백업 파일 위치:**
`/Users/ieungyu/agtechresearch_backup_20251115_160626.tar.gz`

**백업 파일 크기:** 26MB

**백업 내용:**
- 모든 HTML 파일
- CSS 스타일시트
- JavaScript 파일
- 이미지 파일 (members, gallery 등)
- 설정 파일 (CNAME, README.md 등)

**제외된 항목:**
- .git 폴더 (버전 관리 이력)
- node_modules (있는 경우)
- .DS_Store (Mac 시스템 파일)

---

## 백업 복원 방법

### 방법 1: 전체 복원
```bash
# 백업 파일이 있는 위치로 이동
cd /Users/ieungyu

# 압축 해제 (새 폴더에)
mkdir agtechresearch_restore
tar -xzf agtechresearch_backup_20251115_160626.tar.gz -C agtechresearch_restore

# 파일 확인
cd agtechresearch_restore
ls -la
```

### 방법 2: 특정 파일만 복원
```bash
# 특정 파일만 추출
tar -xzf /Users/ieungyu/agtechresearch_backup_20251115_160626.tar.gz publications.html
```

---

## 이번 세션 업데이트 내역

### Publications 페이지 업데이트 (2025-11-15)

**추가된 URL:**
1. **Instance Segmentation for Korean Melon (YOLOv11)** - 2025 ASABE
   - Google Slides 프레젠테이션

2. **SegFormer-Based Semantic Segmentation** - 한국영상식물학회
   - Google Drive 문서

**총 2025년 논문:** 4개
- 모든 논문에 URL 추가 완료 (100%)

### 이전 세션 업데이트
- 2025년 논문 9개 추가
- 아이콘 표준화 (fa-users, fa-book, fa-calendar)
- 학회명 간소화
- 한글 제목 적용
- 중복 논문 제거

---

## 주요 파일 목록

### HTML 페이지
- index.html - 홈페이지
- introduction.html - 연구실 소개
- research.html - 연구 프로젝트
- publications.html - 논문 목록 ⭐ (최근 업데이트)
- members.html - 멤버 소개
- gallery.html - 갤러리
- contact.html - 연락처

### 스타일 및 스크립트
- css/style.css - 메인 스타일시트
- js/main.js - 공통 JavaScript
- js/publications.js - 논문 필터링
- js/members.js - 멤버 필터링
- js/gallery.js - 갤러리 기능
- js/particles.js - 파티클 애니메이션

### 이미지
- images/members/ - 멤버 프로필 사진
- images/gallery/ - 갤러리 이미지
- images/logo/ - 로고 파일

### 문서
- README.md - 프로젝트 설명
- CONTENT_EDIT_GUIDE.md - 콘텐츠 수정 가이드
- PUBLICATION_UPDATE_LOG.md - 논문 업데이트 로그
- BACKUP_INFO.md - 이 파일

---

## 백업 권장사항

### 정기 백업
- 중요 업데이트 전후에 백업 생성
- 월 1회 정기 백업 권장
- 백업 파일은 외부 저장소에 보관

### 백업 명령어
```bash
# 웹사이트 루트 디렉토리에서 실행
cd /Users/ieungyu/agtechresearch.github.io
tar -czf ../agtechresearch_backup_$(date +%Y%m%d_%H%M%S).tar.gz --exclude='.git' --exclude='node_modules' --exclude='.DS_Store' .
```

### Git을 통한 백업
GitHub 저장소 자체가 백업 역할을 하므로:
```bash
# 모든 변경사항 커밋
git add .
git commit -m "Backup: [날짜] [변경 내용]"
git push origin main
```

---

## 문제 발생 시 연락처

- GitHub Repository: https://github.com/agtechresearch/agtechresearch.github.io
- Lab Email: agtech@sejong.ac.kr

---

**생성일:** 2025-11-15 16:06:26
**백업 버전:** v1.0
**다음 백업 권장일:** 2025-12-15
