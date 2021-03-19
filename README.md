개발 환경
- nodejs: 14.15.4
- npm: 6.14.10
- db: mysql, docker
- orm: sequelize

# 설치 방법은 readmes 폴더를 참조하세요

### 변경해야할 설정 파일
#### .env
```
NODE_ENV=development      # node 환경
#DEBUG=express:*
DEBUG=post_server:server
PORT=3309                 # express가 구동될 port

DB_USER=root              # 사용자 지정
DB_PW=password            # 사용자 지정
DB_HOST=127.0.0.1         # 사용자 지정

# db 이름 설정
# db명은 docker의 mysql에서 세팅한 이름과 동일하게 만들어주세요.
DB_NAME=post_server       # 실제 구동되는 데이터베이스
DB_DEV=post_server_dev    # dev 데이터베이스
DB_TEST=post_server_test  # test 데이터베이스
```

학습해보자! 11 차례 (https://medium.com/aha-official/%EC%95%84%ED%95%98-rest-api-%EC%84%9C%EB%B2%84-%EA%B0%9C%EB%B0%9C-9-d75f4eab80d5)

#### 설치 환경
- express: node.js의 http와 connect 컴포넌트를 기반으로 하는 웹 프레임워크
- docker: 하나의 공간에 프로그램이 실행되는데 필요한 라이브러리, 모듈등을 모두 설치한 가상머신
그 공간을 컨테이너라고 함
- mysql: rdb(관계형 데이터 베이스)
- sequlize: orm


###### orm이란? 객체와 관계형 데이터베이스의 데이터들을 자동으로 매핑해주는 역할
- 객체 지향 프로그래밍은 클래스를 사용하고, 관계형 데이터베이스는 테이블을 사용한다.
- 객체 모델과 관계형 모델 간에 불일치가 존재한다.
- ORM을 통해 객체 간의 관계를 바탕으로 SQL을 자동으로 생성하여 불일치를 해결한다.

#### 로그 모듈
- morgan: request와 response를 로패팅해주는 모듈
- winston: log를 json 파일로 기록해주는 모듈
- logs 디렉토리에 저장됨


#### 개발에 큰 도움이 된 사이트
https://medium.com/aha-official/tagged/development (아하 REST API 서버 개발)