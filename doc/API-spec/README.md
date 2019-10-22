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


- `POST /api/login` : 로그인 API. 사용자 이름과 성공여부를 응답한다.
  - Request Header : X
  - Params : X
  - Request Body : id,pswd
  - Success Code : X
  - Response Header : X
  - Response Body : username

  
- `GET /api/info ? num:` : 인포그래픽 사진을 응답하는 API. img 변수를 보내면 그에 맞는 이미지를 반환한다.
  - Request Header : img
  - Params : X
  - Request Body : X
  - Success Code : X
  - Response Header : X
  - Response Body : X

  - `GET /api/desc ? num:` : 인포그래픽 설명을 응답하는 API. desc 변수를 보내면 그에 맞는 설명을 반환한다.
  - Request Header : desc
  - Params : X
  - Request Body : X
  - Success Code : X
  - Response Header : X
  - Response Body : desc