## .env file structure

> Example .env.development file

```
DB_HOST='localhost'
DB_USER='sorun'
DB_PASSWORD='sorun'
DB_DATABASE='sorun'
DB_PORT=8080
```

> If you run mysql via docker container, do not forget to add port forwarding
> option while running mysql container (e.g: -p 8080:3306)

> Otherwise, you can change DB_PORT=3306

## For Development

```
$ npm run dev
```

## For Production

```
$ npm start
```
