## API 스펙 설계

DSM-Infographic의 Backend API 설계한 내용을 정리합니다.
(모르겠는거 있으면 말하기)

- `POST /api/index` : 인포그래픽 페이지 API. 설문조사 결과를 응답한다.
  - Request Header : X
  - Params : X
  - Request Body : id
  - Success Code : X
  - Response Header : X
  - Response Body : userchk


- `POST /api/login` : 로그인 API. 사용자 이름을 응답한다.
  - Request Header : X
  - Params : X
  - Request Body : id,pswd
  - Success Code : X
  - Response Header : X
  - Response Body : username

  
- `POST /api/info` : 인포그래픽 페이지 API. 설문조사 결과를 응답한다.
  - Request Header : X
  - Params : infoId
  - Request Body : Q1,Q2,id
  - Success Code : X
  - Response Header : X
  - Response Body : X