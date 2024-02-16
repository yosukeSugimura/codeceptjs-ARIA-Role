### Dockerイメージのビルド

- 次に、以下のコマンドを使用してDockerイメージをビルドします。

```shell
docker build -t my-nginx .
```

### Dockerコンテナの実行
- ビルドしたイメージを基に、コンテナを実行します。以下のコマンドでは、コンテナの80番ポートをホストのポートにバインドします。

```shell
docker run --name aria-role -d -p 9090:80 -v $(pwd):/usr/share/nginx/html nginx
```

これで、ブラウザから http://localhost:8080 にアクセスすると、作成したHTMLページが表示されます。