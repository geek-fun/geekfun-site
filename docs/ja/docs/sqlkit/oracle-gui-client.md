---
title: "Oracle Database GUI クライアント | SqlKit"
description: "サービス名、SID、TNS エイリアス、クラウドウォレットのいずれかを使い、JDBC で Oracle に接続します。"
---

# Oracle Database GUI クライアント

**接続 → 新規接続を追加**で **Oracle** を選びます。管理者から受け取った接続情報に合わせます。

- **基本接続。** ホスト、リスナーのポート（通常 `1521`）、サービス名または SID を指定。
- **TNS。** `tnsnames.ora` のあるフォルダーと TNS エイリアスを選択。
- **クラウドウォレット。** 展開済みのフォルダーとサービスのエイリアスを選択。必要に応じてウォレットのパスワードも入力。

Oracle の認証情報を入力し、接続をテストします。Java や JDBC コンポーネントが取得できない場合は**設定 → JRE とドライバー**を確認してください。

**クエリ**で接続先のサービスとスキーマを確認します。

```sql
SELECT SYS_CONTEXT('USERENV', 'SERVICE_NAME') AS service_name,
       SYS_CONTEXT('USERENV', 'CURRENT_SCHEMA') AS current_schema
FROM dual;
```

リスナーが接続を拒否する場合は、サービス名と SID の指定方法が一致しているか確認します。TNS エイリアスが表示されない場合は `tnsnames.ora` を含むフォルダーを指定してください。[SQL エディター](/ja/docs/sqlkit/query-editor)
