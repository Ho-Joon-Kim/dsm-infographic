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

- `GET /api/info/img ?imgid:` : 인포그래픽 사진을 응답하는 API. imgid 변수를 보내면 그에 맞는 이미지를 반환한다. o
  - Request Header : imgid
  - Params : X
  - Request Body : X
  - Success Code : X
  - Response Header : X
  - Response Body : X

- `GET /api/info/desc ?imgid:` : 인포그래픽 설명을 응답하는 API. imgid 변수를 보내면 그에 맞는 설명과 제목을 반환한다. o
  - Request Header : imgid  
  - Params : X
  - Request Body : X
  - Success Code : X
  - Response Header : X
  - Response Body : desc,title

- `POST /api/survey` : 인포그래픽 설문조사를 저장하는 API. 문제 두개의 답과 인포그래픽의 번호, 로그인한 사람의 id를 주면 성공여부를 반환한다.
  - Request Header : x
  - Params : X
  - Request Body : q1,q2,infoNum,id
  - Success Code : X
  - Response Header : X
  - Response Body : output

- `POST /api/survey/admin` : 인포그래픽 설문조사의 값을 반환하는 API. 어드민일 때에만 작동한다.
  - Request Header : x
  - Params : X
  - Request Body : q1,q2,infoNum,id
  - Success Code : X
  - Response Header : X
  - Response Body : output