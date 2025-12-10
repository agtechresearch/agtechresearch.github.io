# Netlify CMS (Decap CMS) 설정 가이드

## GitHub OAuth App 생성 (필수)

Netlify CMS가 GitHub와 통신하려면 OAuth App이 필요합니다.

### 1단계: GitHub OAuth App 만들기

1. **GitHub 접속**
   - https://github.com/settings/developers 접속
   - 또는: GitHub → Settings → Developer settings → OAuth Apps

2. **New OAuth App 클릭**

3. **앱 정보 입력:**
   ```
   Application name: AgTech CMS
   Homepage URL: https://agtechresearch.github.io
   Authorization callback URL: https://api.netlify.com/auth/done
   ```

4. **Register application** 클릭

5. **Client ID와 Client Secret 복사**
   - Client ID: 화면에 표시됨
   - Client Secret: "Generate a new client secret" 클릭 → 복사 (한 번만 보임!)

### 2단계: Netlify에서 OAuth 설정

1. **Netlify 대시보드 접속**
   - https://app.netlify.com/
   - agtechresearch.github.io 사이트 선택

2. **Site settings → Access control → OAuth**
   - "Install provider" 클릭
   - Provider: **GitHub**
   - Client ID: 위에서 복사한 Client ID 입력
   - Client Secret: 위에서 복사한 Client Secret 입력
   - "Install" 클릭

### 3단계: Netlify Identity 대신 GitHub OAuth 사용

이제 설정이 완료되었습니다!

**사용 방법:**
1. https://agtechresearch.github.io/admin/ 접속
2. "Login with GitHub" 클릭
3. GitHub 계정으로 로그인
4. Gallery 관리 시작!

---

## 대안: GitHub Personal Access Token 사용 (간단한 방법)

OAuth App 설정이 복잡하다면, 개인 토큰을 사용할 수 있습니다:

### Personal Access Token 생성

1. https://github.com/settings/tokens 접속
2. "Generate new token (classic)" 클릭
3. 설정:
   - Note: `AgTech CMS`
   - Expiration: `90 days` (또는 원하는 기간)
   - 권한 선택:
     - ✅ `repo` (전체)
     - ✅ `workflow`
4. "Generate token" 클릭
5. 토큰 복사 (한 번만 보임!)

### 로컬에서 CMS 사용

```bash
# 로컬 서버 실행
npx decap-server

# 다른 터미널에서
python3 -m http.server 8000
```

http://localhost:8000/admin/ 접속하여 사용

---

## 현재 설정 상태

- ✅ Decap CMS (Netlify CMS v3) 설치됨
- ✅ GitHub backend 설정됨
- ⚠️ GitHub OAuth App 설정 필요
- ✅ Gallery JSON 파일 5개 준비됨
- ✅ 이미지 업로드 폴더: `images/gallery/`

## Gallery 관리 기능

- 이미지 추가/수정/삭제
- 3가지 카테고리: lab, event, research
- 이미지 업로드 (드래그 앤 드롭)
- 게시 여부 토글
- 날짜 선택
- 자동 GitHub 커밋
