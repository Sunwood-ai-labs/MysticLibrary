# AWS & Draw.io アーキテクチャダイアグラム生成プロンプト V4 (experimental)

## 目的
AWS構成図をDraw.ioのXML形式で作成し、視覚的に最適化された図を生成する
XMLのコードのみをください

## 基本レイアウト指示
- **AWS標準グループの活用**:
  - AWS Cloud、Region、VPC、Availability Zoneなどの標準グループを必ず使用する
  - Public/Private Subnet、Security group、EC2 instance contentsなどの適切なグループを用いる
  - グループの入れ子構造を正しく表現する（AWS Cloud > Region > VPC > Availability Zone > Subnet）
- **背景透明化**:
  - すべてのグループ要素は `fillColor=none` で背景を透明に設定する
  - サブネットも背景透明を基本とし、必要に応じて薄い色にする
- **図形配置**:
  - 図形間のスペースは十分にとって干渉しないようにする
  - 複雑すぎる図にならないように心がける
  - 関連する図形は近接配置して矢印の負担を軽減する
  - 各サービスアイコン間の関連性が視覚的に明確になるように配置する
  - Public subnetは縦長に設計し、コンポーネントを縦方向に配置する余裕を持たせる
- **テキスト配置**:
  - 文字は図形の下に配置する
  - verticalLabelPosition=bottom, verticalAlign=top の設定を使用する

## 色とスタイル指定
- **リージョンの色**: 青緑系 `strokeColor=#00A4A6` `fontColor=#147EBA`
- **VPCの色**: 紫色系 `strokeColor=#8C4FFF` `fontColor=#AAB7B8`
- **Availability Zoneの色**: 青系 `strokeColor=#147EBA` `fontColor=#147EBA`
- **サブネットの色**: 緑系 `strokeColor=#7AA116` `fontColor=#248814`
- **EC2/ECSの色**: 橙色系 `fillColor=#D45B07` 
- **IAMロールの色**: 赤色系 `fillColor=#BF0816`
- **セキュリティグループの色**: 赤線 `strokeColor=#DD3522` `fontColor=#DD3522`
- **CloudFront/WAFの色**: 紫系 `fillColor=#8C4FFF`
- **アイコンスタイル**: 
  - モダンでフラットなアイコンを使用する `sketch=0` `outlineConnect=0`
  - AWS4系のリソースアイコンを使用する `shape=mxgraph.aws4.resourceIcon`

## 矢印・コネクタの最適化
- **矢印スタイル**:
  - 矢印の太さは細め `strokeWidth=1` に設定する
  - 矢印は一本の連続した線で表現し、途中で分断しない
  - `edgeStyle=orthogonalEdgeStyle` を使用して直角の曲がり角のみを使用する
  - 丸みを帯びた接続線 `rounded=1; orthogonalLoop=1` を使用する
- **経路設計**:
  - 矢印は完全に縦横方向のみで引き、斜め線は使用しない
  - 矢印は図形と干渉しないように迂回させる
  - 矢印の経路は直角的な曲がり方を使用して整理する
  - コネクターポイントをずらして必要に応じて迂回経路を設定する
- **視覚的明確化**:
  - コネクターの「ジャンプスタイル」を有効にして矢印の交差を明確に表示する
  - 矢印の向きと方向性が一目でわかるようにする

## XML構造の最適化
- **整理されたコード**:
  - コメントでセクションを明確に分ける（`<!-- AWS Cloud -->`など）
  - 各コンポーネントには一意のIDを付与する（cloud, region, vpc, subnet-1 など）
  - 親子関係が明確になるよう適切にインデントする

## 付加的な要素
- **タイトルと説明**:
  - 図の上部にタイトルと簡単な説明を追加する
  - タイトルはフォントサイズを大きめに、太字で設定する
- **アーキテクチャノート**:
  - 図の下部に枠で囲ったノートセクションを追加する
  - 重要な設計ポイントを箇条書きで記載する

---

## コード例

### AWS Cloud 要素の例
```xml
<mxCell id="cloud" value="AWS Cloud" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_aws_cloud_alt;strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;" vertex="1" parent="1">
  <mxGeometry x="40" y="90" width="780" height="650" as="geometry" />
</mxCell>
```

### リージョン要素の例
```xml
<mxCell id="tokyo-region" value="ap-northeast-1" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_region;strokeColor=#00A4A6;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#147EBA;dashed=1;" vertex="1" parent="cloud">
  <mxGeometry x="20" y="40" width="420" height="590" as="geometry" />
</mxCell>
```

### VPC要素の例
```xml
<mxCell id="vpc" value="VPC" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_vpc2;strokeColor=#8C4FFF;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#AAB7B8;dashed=0;" vertex="1" parent="tokyo-region">
  <mxGeometry x="10" y="130" width="380" height="440" as="geometry" />
</mxCell>
```

### サービスコンポーネントの例
```xml
<!-- EC2 Instance -->
<mxCell id="ec2" value="EC2 Instance" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#D45B07;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.instance2;" vertex="1" parent="ec2-contents">
  <mxGeometry x="40" y="40" width="28" height="28" as="geometry" />
</mxCell>

<!-- ECS Cluster -->
<mxCell id="ecs" value="ECS Cluster" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#D45B07;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ecs;" vertex="1" parent="ec2-contents">
  <mxGeometry x="150" y="40" width="28" height="28" as="geometry" />
</mxCell>
```

### 接続線の例
```xml
<mxCell id="cloudfront-to-alb" style="rounded=1;orthogonalLoop=1;jettySize=auto;html=1;endArrow=block;endFill=1;strokeWidth=1;edgeStyle=orthogonalEdgeStyle;" edge="1" parent="1" source="cloudfront" target="alb">
  <mxGeometry relative="1" as="geometry">
    <Array as="points">
      <mxPoint x="614" y="300" />
      <mxPoint x="260" y="300" />
    </Array>
  </mxGeometry>
</mxCell>
```

### 完全なアーキテクチャ図の例
上記のコンポーネントを組み合わせることで、以下のような完全なアーキテクチャ図を作成できます：

- AWS Cloud全体を表現する外枠
- 東京リージョン（ap-northeast-1）とバージニアリージョン（us-east-1）
- VPC、Availability Zone、Public Subnetの階層構造
- EC2インスタンスとECSクラスター
- CloudFrontとWAFの構成
- すべてのコンポーネント間の適切な接続関係
- タイトル、説明、アーキテクチャノートを含む完全なドキュメント



## 出力例

```xml
<mxfile host="65bd71144e">
    <diagram id="LB83Jjl-gxU9Gu3MYcfJ" name="AWS Architecture">
        <mxGraphModel dx="930" dy="672" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1169" pageHeight="827" math="0" shadow="0">
            <root>
                <mxCell id="0"/>
                <mxCell id="1" parent="0"/>
                <mxCell id="571" value="AWS Architecture: EE-LLM-Tester" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=16;fontStyle=1" vertex="1" parent="1">
                    <mxGeometry x="40" y="10" width="350" height="30" as="geometry"/>
                </mxCell>
                <mxCell id="572" value="Terraform-managed infrastructure for Streamlit-based LLM testing application" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=12;" vertex="1" parent="1">
                    <mxGeometry x="40" y="40" width="350" height="20" as="geometry"/>
                </mxCell>
                <mxCell id="573" value="Users" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.users;" vertex="1" parent="1">
                    <mxGeometry x="380" y="10" width="48" height="48" as="geometry"/>
                </mxCell>
                <mxCell id="574" value="AWS Cloud" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_aws_cloud_alt;strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;" vertex="1" parent="1">
                    <mxGeometry x="40" y="90" width="780" height="650" as="geometry"/>
                </mxCell>
                <mxCell id="575" value="ap-northeast-1" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_region;strokeColor=#00A4A6;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#147EBA;dashed=1;" vertex="1" parent="574">
                    <mxGeometry x="20" y="40" width="420" height="590" as="geometry"/>
                </mxCell>
                <mxCell id="576" value="VPC" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_vpc2;strokeColor=#8C4FFF;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#AAB7B8;dashed=0;" vertex="1" parent="575">
                    <mxGeometry x="10" y="130" width="380" height="440" as="geometry"/>
                </mxCell>
                <mxCell id="577" value="Availability Zone" style="fillColor=none;strokeColor=#147EBA;dashed=1;verticalAlign=top;fontStyle=0;fontColor=#147EBA;whiteSpace=wrap;html=1;" vertex="1" parent="576">
                    <mxGeometry x="20" y="40" width="340" height="380" as="geometry"/>
                </mxCell>
                <mxCell id="578" value="Public subnet" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_security_group;grStroke=0;strokeColor=#7AA116;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#248814;dashed=0;" vertex="1" parent="577">
                    <mxGeometry x="20" y="40" width="300" height="320" as="geometry"/>
                </mxCell>
                <mxCell id="579" value="Security group" style="fillColor=none;strokeColor=#DD3522;verticalAlign=top;fontStyle=0;fontColor=#DD3522;whiteSpace=wrap;html=1;" vertex="1" parent="578">
                    <mxGeometry x="20" y="40" width="260" height="100" as="geometry"/>
                </mxCell>
                <mxCell id="580" value="Application Load Balancer" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#4D27AA;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.application_load_balancer;" vertex="1" parent="579">
                    <mxGeometry x="106" y="22" width="48" height="48" as="geometry"/>
                </mxCell>
                <mxCell id="581" value="Auto Scaling group" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.groupCenter;grIcon=mxgraph.aws4.group_auto_scaling_group;grStroke=1;strokeColor=#D86613;fillColor=none;verticalAlign=top;align=center;fontColor=#D86613;dashed=1;spacingTop=25;" vertex="1" parent="578">
                    <mxGeometry x="20" y="170" width="260" height="140" as="geometry"/>
                </mxCell>
                <mxCell id="582" value="EC2 instance contents" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_ec2_instance_contents;strokeColor=#D86613;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#D86613;dashed=0;" vertex="1" parent="581">
                    <mxGeometry x="20" y="40" width="220" height="90" as="geometry"/>
                </mxCell>
                <mxCell id="583" value="EC2 Instance" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#D45B07;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.instance2;" vertex="1" parent="582">
                    <mxGeometry x="40" y="40" width="28" height="28" as="geometry"/>
                </mxCell>
                <mxCell id="584" value="ECS Cluster" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#D45B07;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ecs;" vertex="1" parent="582">
                    <mxGeometry x="150" y="40" width="28" height="28" as="geometry"/>
                </mxCell>
                <mxCell id="585" style="rounded=1;orthogonalLoop=1;jettySize=auto;html=1;endArrow=block;endFill=1;strokeWidth=1;edgeStyle=orthogonalEdgeStyle;" edge="1" parent="582" source="583" target="584">
                    <mxGeometry relative="1" as="geometry"/>
                </mxCell>
                <mxCell id="586" value="Elastic IP" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#D45B07;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.elastic_ip_address;" vertex="1" parent="578">
                    <mxGeometry x="40" y="50" width="28" height="28" as="geometry"/>
                </mxCell>
                <mxCell id="589" style="rounded=1;orthogonalLoop=1;jettySize=auto;html=1;endArrow=block;endFill=1;strokeWidth=1;edgeStyle=orthogonalEdgeStyle;" edge="1" parent="578" source="586" target="583">
                    <mxGeometry relative="1" as="geometry">
                        <Array as="points">
                            <mxPoint x="54" y="-40"/>
                            <mxPoint x="94" y="-40"/>
                        </Array>
                    </mxGeometry>
                </mxCell>
                <mxCell id="587" value="IAM Roles" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#BF0816;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.role;" vertex="1" parent="575">
                    <mxGeometry x="300" y="50" width="40" height="40" as="geometry"/>
                </mxCell>
                <mxCell id="588" style="rounded=1;orthogonalLoop=1;jettySize=auto;html=1;endArrow=block;endFill=1;strokeWidth=1;edgeStyle=orthogonalEdgeStyle;" edge="1" parent="575" source="587" target="582">
                    <mxGeometry relative="1" as="geometry">
                        <Array as="points">
                            <mxPoint x="320" y="100"/>
                            <mxPoint x="380" y="100"/>
                            <mxPoint x="380" y="265"/>
                        </Array>
                    </mxGeometry>
                </mxCell>
                <mxCell id="590" value="us-east-1" style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_region;strokeColor=#00A4A6;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#147EBA;dashed=1;" vertex="1" parent="574">
                    <mxGeometry x="470" y="40" width="290" height="210" as="geometry"/>
                </mxCell>
                <mxCell id="591" value="CloudFront" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.cloudfront;" vertex="1" parent="590">
                    <mxGeometry x="80" y="100" width="48" height="48" as="geometry"/>
                </mxCell>
                <mxCell id="592" value="WAF&#xa;(IP Whitelist)" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.waf;" vertex="1" parent="590">
                    <mxGeometry x="200" y="100" width="48" height="48" as="geometry"/>
                </mxCell>
                <mxCell id="593" style="rounded=1;orthogonalLoop=1;jettySize=auto;html=1;endArrow=block;endFill=1;strokeWidth=1;edgeStyle=orthogonalEdgeStyle;" edge="1" parent="1" source="573" target="591">
                    <mxGeometry relative="1" as="geometry">
                        <Array as="points">
                            <mxPoint x="404" y="100"/>
                            <mxPoint x="614" y="100"/>
                        </Array>
                    </mxGeometry>
                </mxCell>
                <mxCell id="594" style="rounded=1;orthogonalLoop=1;jettySize=auto;html=1;endArrow=block;endFill=1;strokeWidth=1;edgeStyle=orthogonalEdgeStyle;" edge="1" parent="1" source="591" target="592">
                    <mxGeometry relative="1" as="geometry"/>
                </mxCell>
                <mxCell id="595" style="rounded=1;orthogonalLoop=1;jettySize=auto;html=1;endArrow=block;endFill=1;strokeWidth=1;edgeStyle=orthogonalEdgeStyle;" edge="1" parent="1" source="591" target="580">
                    <mxGeometry relative="1" as="geometry">
                        <Array as="points">
                            <mxPoint x="614" y="300"/>
                            <mxPoint x="260" y="300"/>
                        </Array>
                    </mxGeometry>
                </mxCell>
                <mxCell id="596" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=none;strokeColor=#666666;" vertex="1" parent="1">
                    <mxGeometry x="40" y="760" width="780" height="110" as="geometry"/>
                </mxCell>
                <mxCell id="597" value="Architecture Notes:" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=14;fontStyle=1" vertex="1" parent="1">
                    <mxGeometry x="50" y="770" width="140" height="20" as="geometry"/>
                </mxCell>
                <mxCell id="598" value="- CloudFront distribution with WAF for IP whitelisting serves as front-end&#xa;- ECS cluster runs on a single EC2 instance with ALB handling traffic&#xa;- Auto-scaling scheduled to run on weekdays from 8AM to 10PM JST&#xa;- Specialized CloudFront cache behaviors for Streamlit WebSocket connections&#xa;- IAM roles provide necessary permissions including Bedrock full access" style="text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
                    <mxGeometry x="50" y="795" width="740" height="70" as="geometry"/>
                </mxCell>
            </root>
        </mxGraphModel>
    </diagram>
</mxfile>

```

## 作成してほしいアーキテクチャ


