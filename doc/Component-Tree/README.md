# Frontend Component 설계

DSM-Infographic의 Frontend Vue Component를 Tree로 간단하게 나타내어 보기 좋게 정리합니다.


확장자 vue는 생략합니다.

```
App

- DsmSciHeader

- - DsmSciLogin

- router-view

- - Home

- - - DsmSciContent

- - - - InfograhpicGallery

- - - - - InfographicContent

- - - - - InfographicDetail

- - - DetailImage

- - Admin

- DsmSciFooter
```