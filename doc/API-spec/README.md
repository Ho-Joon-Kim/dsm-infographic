## API 스펙 설계

DSM-Infographic의 Backend API 설계한 내용을 정리합니다.
(모르겠는거 있으면 말하기)

- `POST /api/login` : 로그인 API. 사용자 이름과 성공여부를 응답한다. o
  - Request Header : X
  - Params : X
  - Request Body : id,pswd
  - Success Code : X
  - Response Header : X
  - Response Body : username, loginchk

- `GET /api/info ?img:` : 인포그래픽 사진을 응답하는 API. img 변수를 보내면 그에 맞는 이미지를 반환한다. o
  - Request Header : img
  - Params : X
  - Request Body : X
  - Success Code : X
  - Response Header : X
  - Response Body : X

  - `GET /api/desc ?desc:` : 인포그래픽 설명을 응답하는 API. desc 변수를 보내면 그에 맞는 설명과 제목을 반환한다. o
  - Request Header : desc  
  - Params : X
  - Request Body : X
  - Success Code : X
  - Response Header : X
  - Response Body : desc

   - `POST /api/survey` : 인포그래픽 설문조사를 저장하는 API. 문제 두개의 답과 인포그래픽의 번호, 로그인한 사람의 id를 주면 성공여부를 반환한다.
  - Request Header : x
  - Params : X
  - Request Body : q1,q2,infoNum,id
  - Success Code : X
  - Response Header : X
  - Response Body : output