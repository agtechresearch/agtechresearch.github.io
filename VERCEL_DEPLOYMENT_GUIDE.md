# Vercel 배포 가이드
## AgTech Research Lab - 갤러리 관리 시스템

**간단하고 빠른 웹 기반 갤러리 관리!**

---

## 🚀 Vercel이란?

- ✅ **완전 무료** (취미 프로젝트용)
- ✅ **GitHub 자동 연동** (푸시하면 자동 배포)
- ✅ **서버 기능 지원** (Serverless Functions)
- ✅ **설정 매우 간단** (클릭 몇 번이면 끝)
- ✅ **빠른 속도** (전 세계 CDN)

---

## 📝 배포 단계

### Step 1: Vercel 회원가입

1. **Vercel 사이트 접속**: https://vercel.com
2. **"Sign Up" 클릭**
3. **"Continue with GitHub" 선택**
4. GitHub 계정으로 로그인
5. Vercel에 권한 부여

### Step 2: 프로젝트 연결

1. Vercel 대시보드에서 **"Add New Project"** 클릭
2. **"Import Git Repository"** 선택
3. GitHub 저장소 목록에서 **`agtechresearch.github.io`** 찾기
   - 안 보이면 "Adjust GitHub App Permissions" 클릭하여 권한 추가
4. **"Import"** 클릭

### Step 3: 프로젝트 설정

**Framework Preset:**
- "Other" 선택 (또는 자동 감지됨)

**Root Directory:**
- 그대로 둠 (`.` 또는 비워둠)

**Build Command:**
- 비워둠 (정적 사이트)

**Output Directory:**
- 비워둠

**Install Command:**
- `npm install` (자동 입력됨)

### Step 4: 환경 변수 설정 (중요!)

**"Environment Variables" 섹션에서:**

1. **GITHUB_TOKEN** 추가:
   - Name: `GITHUB_TOKEN`
   - Value: (GitHub Personal Access Token)
   - Scope: All environments

2. **ADMIN_PASSWORD** 추가:
   - Name: `ADMIN_PASSWORD`
   - Value: 원하는 관리자 비밀번호 (예: `agtech2024!`)
   - Scope: All environments

#### GitHub Token 생성 방법:

1. GitHub 접속 → 오른쪽 상단 프로필 클릭
2. **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
3. **"Generate new token (classic)"** 클릭
4. Note: `AgTech Gallery Admin`
5. Expiration: `No expiration` 또는 원하는 기간
6. **Scopes 선택:**
   - ✅ `repo` (전체 체크)
7. **"Generate token"** 클릭
8. **토큰 복사** (한 번만 표시되므로 꼭 저장!)
9. Vercel 환경 변수에 붙여넣기

### Step 5: 배포

1. 모든 설정 완료 후 **"Deploy"** 클릭
2. 1-2분 대기 (빌드 및 배포 진행)
3. **"Congratulations!"** 메시지 확인
4. 배포된 URL 확인 (예: `https://agtechresearch.vercel.app`)

---

## 🎯 관리자 페이지 사용하기

### 접속 방법

배포 완료 후:
- **URL**: `https://your-project.vercel.app/admin.html`
- 또는: `https://www.agtechlab.kr/admin.html` (커스텀 도메인 설정 시)

### 사용 방법

1. **관리자 페이지 접속**
2. **비밀번호 입력** (Vercel 환경 변수에서 설정한 것)
3. **로그인** 클릭
4. **갤러리 정보 입력:**
   - 제목
   - 설명
   - 카테고리 (Laboratory / Event / Research)
   - 이미지 설명 (Alt Text)
   - 날짜
   - 이미지 업로드 (드래그 앤 드롭)
5. **"✅ 갤러리에 추가하기"** 클릭
6. **완료!**
   - 자동으로 GitHub에 커밋됨
   - 이미지가 `images/gallery/`에 업로드됨
   - JSON 파일이 `_data/gallery/`에 생성됨
   - `gallery.js`가 자동 업데이트됨
   - 1-2분 후 웹사이트에 반영!

---

## 🔧 작동 원리

```
사용자 (admin.html)
    ↓ 이미지 + 정보 전송
Vercel Serverless Function (api/gallery.js)
    ↓ GitHub API 호출
GitHub Repository
    ├─ images/gallery/새이미지.jpg (업로드)
    ├─ _data/gallery/새데이터.json (생성)
    └─ js/gallery.js (업데이트)
    ↓ GitHub Pages 자동 배포
웹사이트 (www.agtechlab.kr)
    └─ 갤러리에 새 이미지 표시!
```

---

## 🌐 커스텀 도메인 연결 (선택사항)

### GitHub Pages 도메인 유지 + Vercel 관리자만 사용

**방법 1: 관리자 페이지만 Vercel로**
- 메인 사이트: `www.agtechlab.kr` (GitHub Pages)
- 관리자 페이지: `admin-agtech.vercel.app/admin.html` (Vercel)
- 각각 따로 사용 가능

**방법 2: Vercel로 완전 이전**
1. Vercel 대시보드 → 프로젝트 선택
2. **"Settings"** → **"Domains"**
3. **"Add Domain"** 클릭
4. `www.agtechlab.kr` 입력
5. DNS 설정 지침 따라하기:
   - CNAME 레코드 추가
   - Vercel이 제공하는 값으로 설정
6. GitHub Pages 비활성화

---

## ⚙️ 환경 변수 변경

### 비밀번호 변경하려면:

1. Vercel 대시보드 → 프로젝트 선택
2. **"Settings"** → **"Environment Variables"**
3. `ADMIN_PASSWORD` 찾기
4. **"Edit"** 클릭
5. 새 비밀번호 입력
6. **"Save"** 클릭
7. **"Redeploy"** 필요 (자동으로 권장됨)

### GitHub Token 만료 시:

1. GitHub에서 새 토큰 생성
2. Vercel 환경 변수에서 `GITHUB_TOKEN` 업데이트
3. Redeploy

---

## 🐛 문제 해결

### 오류: "GitHub token not configured"

**해결책:**
- Vercel 환경 변수에 `GITHUB_TOKEN`이 올바르게 설정되었는지 확인
- Token에 `repo` 권한이 있는지 확인
- Redeploy 해보기

### 오류: "Invalid password"

**해결책:**
- Vercel 환경 변수의 `ADMIN_PASSWORD`와 입력한 비밀번호가 일치하는지 확인
- 공백이나 특수문자 확인

### 오류: "Permission denied"

**해결책:**
- GitHub Token의 권한 확인
- Token이 만료되지 않았는지 확인
- 저장소 접근 권한이 있는지 확인

### 이미지가 추가되지 않음

**확인 사항:**
1. Vercel Functions 탭에서 로그 확인
2. GitHub 저장소에 커밋이 생성되었는지 확인
3. 네트워크 탭 (F12) 에서 API 요청 확인

---

## 📊 Vercel 무료 플랜 제한

- **Functions 실행**: 100GB-Hours/월
- **대역폭**: 100GB/월
- **빌드 시간**: 6000분/월
- **프로젝트 수**: 무제한

→ **개인/연구실 웹사이트에는 충분합니다!**

---

## 🔒 보안

### 권장사항:

1. **강력한 관리자 비밀번호 사용**
   - 최소 12자 이상
   - 영문 대소문자 + 숫자 + 특수문자

2. **GitHub Token 보안**
   - 절대 코드에 직접 넣지 않기
   - 환경 변수로만 관리
   - 주기적으로 재발급

3. **관리자 페이지 URL 보호**
   - `/admin.html` 대신 랜덤 URL 사용 가능
   - 예: `/gallery-management-x8k2p.html`

---

## 🚀 배포 후 첫 테스트

1. `https://your-project.vercel.app/admin.html` 접속
2. 설정한 비밀번호로 로그인
3. 테스트 이미지 하나 추가
4. GitHub 저장소에서 커밋 확인
5. 1-2분 후 웹사이트에서 갤러리 확인

---

## 📞 도움이 필요하면

1. Vercel 대시보드 → **"Functions"** 탭에서 로그 확인
2. GitHub Actions 탭에서 배포 상태 확인
3. 브라우저 개발자 도구 (F12) 콘솔 확인

---

**작성일**: 2025-11-17
**버전**: 1.0
**플랫폼**: Vercel Serverless
